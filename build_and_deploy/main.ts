// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import * as core from '@actions/core';
import { ArtifactClient } from './clients/artifacts_client';
import { Orchestrator } from "./orchestrator";
import { PackageFile } from './package_file';
import { getParams } from './utils/deploy_utils';
import { ActionLogger, SystemLogger } from './utils/logger';

export async function main() {

    const targetWorkspace: string = core.getInput('TargetWorkspaceName');
    const templateFile: string = core.getInput("TemplateFile");
    const parametersFile: string = core.getInput("ParametersFile");
    const overrideArmParameters: string = core.getInput('OverrideArmParameters');
    const environment: string = core.getInput('Environment');

    let  deleteArtifactsNotInTemplate: boolean = false;
    const deleteArtifactsNotInTemplateString = core.getInput("DeleteArtifactsNotInTemplate");
    if(deleteArtifactsNotInTemplateString.toLowerCase() == "true")
    {
        deleteArtifactsNotInTemplate = true;
    }
    console.log(`DeleteArtifactsNotInTemplate=${deleteArtifactsNotInTemplate}`);

    try {
        const packageFiles: PackageFile = new PackageFile(templateFile, parametersFile, overrideArmParameters);
        const params = await getParams();
        const artifactClient: ArtifactClient = new ArtifactClient(params);
        SystemLogger.setLogger(new ActionLogger(true));

        const orchestrator: Orchestrator = new Orchestrator(
            packageFiles,
            artifactClient,
            targetWorkspace,
            environment,
            deleteArtifactsNotInTemplate
        );
        await orchestrator.orchestrateFromPublishBranch();
    } catch (err) {
        throw new Error(err.message);
    }
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((err: Error) => {
        core.info("Action failed -> " + err);
        process.exit(1);
    });

