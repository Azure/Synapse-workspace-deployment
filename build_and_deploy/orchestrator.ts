// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import {PackageFile, PackageFilesContent} from "./package_file";
import {ArtifactClient, typeMap} from "./clients/artifacts_client";
import {getWorkspaceLocation} from "./utils/service_principal_client_utils";
import {getArtifacts, Resource} from "./utils/arm_template_utils";
import {DeployStatus} from "./utils/deploy_utils";
import * as core from '@actions/core';
import {Artifact} from "./utils/artifacts_enum";

export class Orchestrator{
    private packageFiles: PackageFile;
    private artifactClient: ArtifactClient;
    private targetWorkspace: string;
    private environment: string;

    constructor(packageFiles: PackageFile, artifactClient: ArtifactClient,
                targetWorkspace: string, environment: string) {

        this.packageFiles = packageFiles;
        this.artifactClient = artifactClient;
        this.targetWorkspace = targetWorkspace;
        this.environment = environment;
    }

    public async orchestrateFromPublishBranch(){
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

            await this.deployResourcesInOrder(this.artifactClient, artifactsToDeploy, this.targetWorkspace, this.environment);

        } catch (err) {
            throw new Error(`Orchestrate failed - ${err}`);
        }
    }

    private async deployResourcesInOrder(artifactClient: ArtifactClient, artifactsToDeploy: Resource[][],
                                          targetWorkspace: string, environment: string) {
        for(let i=0;i<artifactsToDeploy.length;i++){
            let batchOfArtifacts = artifactsToDeploy[i];
            await this.deployBatch(artifactClient, batchOfArtifacts,targetWorkspace, environment);
            await artifactClient.WaitForAllDeployments();
        }
    }

    private skipDeployment(artifactTypeToDeploy: string){
        if(artifactTypeToDeploy == Artifact.sqlpool ||
            artifactTypeToDeploy == Artifact.bigdatapools ||
            artifactTypeToDeploy == Artifact.managedvirtualnetworks||
            artifactTypeToDeploy == Artifact.managedprivateendpoints){
            return true;
        }

        return false;
    }

    private async deployBatch(artifactClient: ArtifactClient, artifactsToDeploy: Resource[],
                              targetWorkspace: string, environment: string) {

        for (let resource of artifactsToDeploy) {

            if(resource.isDefault) {
                core.info("Skipping default workspace resource.");
                continue;
            }

            let artifactTypeToDeploy: string = typeMap.get(resource.type.toLowerCase())!
            if (!resource.content) {
                core.info(`Empty artifactMap of type : ${resource.type} skipping deployment`);
                continue;
            }

            core.info(`Deploy ${artifactTypeToDeploy} ${resource.type}`);
            let result : string;
            if (this.skipDeployment(artifactTypeToDeploy)) {
                // Currently not supporting Sql and spark pools. Skipping
                //result = await armclient.deploy(resource.content);
                core.info(`Deployment of type ${artifactsToDeploy} is not currently supported.`);
                continue;
            }
            else {
                // Do the artifact deployment
                result = await artifactClient.deployArtifact(artifactTypeToDeploy, resource, targetWorkspace,
                    environment);
            }
            core.info(`Deployment status : ${result}`);
            if (result != DeployStatus.success) {
                throw new Error("Failure in deployment: " + result);
            }

        }
    }
}