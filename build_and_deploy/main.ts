// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as core from '@actions/core';
import { ActionLogger, SystemLogger } from './utils/logger';
import {BundleManager} from "./Operations/BundleManager";
import {OPERATIONS} from "./utils/artifacts_enum";
import {OperationManager} from "./Operations/OperationsManager";

export async function main() {

    SystemLogger.setLogger(new ActionLogger(true));

    try {
        const operation = core.getInput('operation').toLowerCase();
        const bundle_source = core.getInput('npmpackage');
        const bundle_manager = new BundleManager(bundle_source);
        switch(operation){
            case OPERATIONS.deploy :
                await OperationManager.DeployArtifacts();
                break;
            case OPERATIONS.validateDeploy :
                await bundle_manager.invokeBundle();
                await OperationManager.ValidateAndDeploy();
                break;
            case OPERATIONS.validate:
                await bundle_manager.invokeBundle();
                await OperationManager.ValidateArtifacts();
                break;
            case 'default':
                throw new Error(`Operation not supported : ${operation}`);
        }
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

