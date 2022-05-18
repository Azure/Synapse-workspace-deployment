// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {BundleManager} from "./BundleManager";
import path from "path";
import {DeployParams, ExportParams, Operations, ValidateParams} from "./OperationInterfaces";
import {OPERATIONS} from "../utils/artifacts_enum";
import {isStrNullOrEmpty} from "../utils/common_utils";
import {PackageFile, PackageFiles} from "../package_file";
import {getParams} from "../utils/deploy_utils";
import {Orchestrator} from "../orchestrator";
import {ArtifactClient} from "../clients/artifacts_client";
import {SystemLogger} from "../utils/logger";


export class DeployOperation implements Operations{
    operationType: OPERATIONS = OPERATIONS.deploy;
    operationParams: DeployParams;

    constructor(operationParams: DeployParams) {
        this.operationParams = operationParams;
    }

    public async PerformOperation(): Promise<void> {
        SystemLogger.info(`Starting ${this.operationType} operation`);

        if(isStrNullOrEmpty(this.operationParams.overrides) && this.operationParams.failOnMissingOverrides){
            throw new Error("Overrides not provided.");
        }

        try {

            const packageFiles: PackageFile = new PackageFile(
                this.operationParams.templateFile,
                this.operationParams.parameterFile,
                this.operationParams.overrides);

            const params = await getParams();
            const artifactClient: ArtifactClient = new ArtifactClient(params);

            const orchestrator: Orchestrator = new Orchestrator(
                packageFiles,
                artifactClient,
                this.operationParams.workspaceName,
                this.operationParams.environment,
                this.operationParams.deleteArtifacts,
                this.operationParams.deployMPE);

            await orchestrator.orchestrateFromPublishBranch();
        }
        catch(err){
            SystemLogger.info(`${this.operationType} operation failed`);
            throw err;
        }
    }

}

export class ValidateOperation implements Operations{
    operationType: OPERATIONS = OPERATIONS.validate;
    operationParams: ValidateParams;

    constructor(operationParams: ValidateParams) {
        this.operationParams = operationParams;
    }

    public async PerformOperation(): Promise<void> {
        SystemLogger.info(`Starting ${this.operationType} operation`);
        let cmd = [
            'node',
            BundleManager.defaultBundleFilePath,
            this.operationType,
            `"${this.operationParams.artifactsFolder}"`,
            this.operationParams.workspaceName
        ].join(' ');

        await BundleManager.ExecuteShellCommand(cmd);
    }
}

export class ExportOperation implements Operations{
    operationType: OPERATIONS = OPERATIONS.export;
    operationParams: ExportParams;

    constructor(operationParams: ExportParams) {
        this.operationParams = operationParams;
    }

    public async PerformOperation(): Promise<void> {
        SystemLogger.info(`Starting ${this.operationType} operation`);
        let cmd = [
            'node',
            BundleManager.defaultBundleFilePath,
            this.operationType,
            `"${this.operationParams.artifactsFolder}"`,
            this.operationParams.workspaceName,
            this.operationParams.destinationFolder
        ].join(' ');

        await BundleManager.ExecuteShellCommand(cmd);

        if(this.operationParams.publishArtifact){
            SystemLogger.info("Generating artifacts.")
            // Do not remove the below log. It is used to upload the artifact.
            SystemLogger.info(`##vso[artifact.upload containerfolder=export;artifactname=${this.operationParams.workspaceName}]${path.join(process.cwd(),this.operationParams.destinationFolder)}`);
        }
    }
}


