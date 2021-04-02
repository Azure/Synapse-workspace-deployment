// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import { ArtifactClient } from './clients/artifacts_client';
import { getParams } from './utils/deploy_utils';
import { PackageFile } from './package_file';
import {Orchestrator} from "./orchestrator";
import * as core from '@actions/core';

export async function main() {

    const targetWorkspace: string = core.getInput('TargetWorkspaceName');
    const templateFile: string = core.getInput("TemplateFile");
    const parametersFile: string = core.getInput("ParametersFile");
    const overrideArmParameters: string = core.getInput('OverrideArmParameters');
    const environment: string = core.getInput('Environment');


    let packageFiles: PackageFile = new PackageFile(templateFile, parametersFile);
    let artifactClient: ArtifactClient = new ArtifactClient(await getParams());

    let orchestrator: Orchestrator = new Orchestrator(
        packageFiles,
        artifactClient,
        targetWorkspace,
        environment,
        overrideArmParameters
    );
    await orchestrator.orchestrateFromPublishBranch();
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((err: Error) => {
        core.info("Action failed -> "+ err);
        process.exit(1);
    });

