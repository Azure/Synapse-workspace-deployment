// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import { ArtifactClient, typeMap } from "./clients/artifacts_client";
import { PackageFile, PackageFilesContent } from "./package_file";
import { getArtifacts, Resource } from "./utils/arm_template_utils";
import { Artifact } from "./utils/artifacts_enum";
import { DeployStatus } from "./utils/deploy_utils";
import { SystemLogger } from "./utils/logger";
import { getWorkspaceLocation } from "./utils/service_principal_client_utils";
import {
    getArtifactsFromWorkspace,
    getArtifactsToDeleteFromWorkspace,
    getArtifactsToDeleteFromWorkspaceInOrder
} from "./utils/workspace_artifacts_getter";

export class Orchestrator {
    private packageFiles: PackageFile;
    private artifactClient: ArtifactClient;
    private targetWorkspace: string;
    private environment: string;
    private deleteArtifactsNotInTemplate: boolean

    constructor(packageFiles: PackageFile, artifactClient: ArtifactClient,
        targetWorkspace: string, environment: string, deleteArtifactsNotInTemplate: boolean) {

        this.packageFiles = packageFiles;
        this.artifactClient = artifactClient;
        this.targetWorkspace = targetWorkspace;
        this.environment = environment;
        this.deleteArtifactsNotInTemplate = deleteArtifactsNotInTemplate;
    }

    public async orchestrateFromPublishBranch() {
        try {
            let packageFilesContent: PackageFilesContent = await this.packageFiles.getPackageFiles();
            let armTemplateContent = packageFilesContent.templateFileContent;
            let armParameterContent = packageFilesContent.parametersFileContent;
            let overrideArmParameters = packageFilesContent.armOverridesContent;

            if (!(armTemplateContent && armParameterContent)) {
                throw new Error('Empty template or parameters file');
            }

            let targetLocation = await getWorkspaceLocation(this.artifactClient.getParams(), this.targetWorkspace);
            let artifactsToDeploy: Resource[][] = await getArtifacts(armParameterContent, armTemplateContent, overrideArmParameters,
                this.targetWorkspace, targetLocation);

            if(this.deleteArtifactsNotInTemplate)
            {
                // Delete extra artifacts in the workspace
                SystemLogger.info("Attempting to delete artifacts from workspace, that were not in the template.");
                var artifactsInWorkspace = await getArtifactsFromWorkspace(this.targetWorkspace, this.environment);
                SystemLogger.info(`Found ${artifactsInWorkspace.length} artifacts in the workspace.`);
                var artifactsToDeleteInWorkspace = getArtifactsToDeleteFromWorkspace(artifactsInWorkspace, artifactsToDeploy, typeMap);
                SystemLogger.info(`Found ${artifactsToDeleteInWorkspace.length} artifacts in the workspace that many need to be deleted.`);
                var artifactsToDeleteInWorkspaceInOrder = getArtifactsToDeleteFromWorkspaceInOrder(artifactsToDeleteInWorkspace);
                await this.deleteResourcesInOrder(this.artifactClient, artifactsToDeleteInWorkspaceInOrder!, this.targetWorkspace, this.environment, armParameterContent);
                SystemLogger.info("Completed deleting artifacts from workspace, that were not in the template.");
            }

            SystemLogger.info("Start deploying artifacts from the template.");
            await this.deployResourcesInOrder(this.artifactClient, artifactsToDeploy, this.targetWorkspace, this.environment);
            SystemLogger.info("Completed deploying artifacts from the template.");

        } catch (err) {
            throw new Error(`Orchestrate failed - ${err}`);
        }
    }

    private async deployResourcesInOrder(artifactClient: ArtifactClient, artifactsToDeploy: Resource[][],
        targetWorkspace: string, environment: string) {
        for (let i = 0; i < artifactsToDeploy.length; i++) {
            let batchOfArtifacts = artifactsToDeploy[i];
            await this.deployBatch(artifactClient, batchOfArtifacts, targetWorkspace, environment);
            await artifactClient.WaitForAllDeployments(false);
        }
    }


    private async deleteResourcesInOrder(artifactClient: ArtifactClient, artifactsToDelete: Resource[][],
        targetWorkspace: string, environment: string, armParameterContent: string) {
        for(let i=0;i<artifactsToDelete.length;i++){
            let batchOfArtifacts = artifactsToDelete[i];
            await this.deleteBatch(artifactClient, batchOfArtifacts,targetWorkspace, environment,armParameterContent);
            await artifactClient.WaitForAllDeployments(true);
        }
    }

    private skipDeployment(artifactTypeToDeploy: string) {
        if (artifactTypeToDeploy == Artifact.sqlpool ||
            artifactTypeToDeploy == Artifact.bigdatapools ||
            artifactTypeToDeploy == Artifact.managedvirtualnetworks) {
            return true;
        }

        return false;
    }

    private async deployBatch(artifactClient: ArtifactClient, artifactsToDeploy: Resource[],
        targetWorkspace: string, environment: string) {

        for (let resource of artifactsToDeploy) {

            if (resource.isDefault) {
                SystemLogger.info(`Skipping deployment of ${resource.name} as its a default workspace resource.`);
                continue;
            }

            let artifactTypeToDeploy: string = typeMap.get(resource.type.toLowerCase())!
            if (!resource.content) {
                SystemLogger.info(`Empty artifactMap of type : ${resource.type} skipping deployment`);
                continue;
            }

            SystemLogger.info(`Deploy ${artifactTypeToDeploy} ${resource.type}`);
            let result: string;
            if (this.skipDeployment(artifactTypeToDeploy)) {
                // Currently not supporting Sql and spark pools. Skipping
                //result = await armclient.deploy(resource.content);
                SystemLogger.info(`Deployment of type ${artifactsToDeploy} is not currently supported.`);
                continue;
            }
            else {
                // Do the artifact deployment
                result = await artifactClient.deployArtifact(artifactTypeToDeploy, resource, targetWorkspace,
                    environment);
            }
            SystemLogger.info(`Deployment status : ${result}`);
            if (result != DeployStatus.success) {
                throw new Error(`For Artifact ${resource.name}: Failure in deployment: ${result}`);
            }

        }
    }

    private async deleteBatch(
        artifactClient: ArtifactClient,
        artifactsToDelete: Resource[],
        targetWorkspace: string,
        environment: string,
        armParameterContent: string) {

        var error: string = "";
        for (var resource of artifactsToDelete) {
            if(resource.isDefault)
            {
                SystemLogger.info(`Skipping deletion of ${resource.name} as its a default workspace resource.`);
                continue;
            }

            let artifactTypeToDelete: string = typeMap.get(resource.type.toLowerCase())!;
            SystemLogger.info(`Deleting ${resource.name} of type ${artifactTypeToDelete}`);

            var result : string;
            if (artifactTypeToDelete == Artifact.sqlpool ||
                artifactTypeToDelete == Artifact.bigdatapools ||
                artifactTypeToDelete == Artifact.managedvirtualnetworks ||
                artifactTypeToDelete == Artifact.managedprivateendpoints) {
                // Skip this.
                continue;
            }

            // Do the artifact deletion
            result = await artifactClient.deleteArtifact(artifactTypeToDelete, resource, targetWorkspace, environment);
            SystemLogger.info(`Deletion status : ${result}`);
            let deletionStatus = {
                key: resource.type.toLowerCase(),
                value: `Deployment status : ${result}`
            };

            if (result != DeployStatus.success) {
                // If deletion is not a success, its ok. we move forward.
                SystemLogger.info("Failure in deployment: " + result);
            }
        }
    }
}