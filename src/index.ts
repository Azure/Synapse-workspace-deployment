/*
Copyright (c) Microsoft Corporation.
Licensed under the MIT license.

ModuleName: index.ts
Purpose: Local implementation of DeployWorkspace
Contains: 
ChangeHistory:
Changed By          Changed On          Comments
----------          ----------          ---------
Author: William Michel (wimichel)
Date: 26 April 2021
Credit: 
*/

import { getInput, setFailed, info, error, debug, ExitCode, isDebug } from "@actions/core";
import { ILogger, deployArtifactMainAsync, IDeployArtifactMainParameter } from "@azure/synapse-cicd-library";
import { exit } from "process";

class GithubActionConsole implements ILogger {
    info(message: string): string {
        info(message);
        return message;
    }
    error(message: any): any {
        error(message);
        return message;
    }
    debug(message: string): string {
        if (isDebug()) {
            debug(message);
        }
        return message;
    }

    warn(message: string): string {
        info(message);
        return message;
    }
}

class DeployArtifactMainParameters implements IDeployArtifactMainParameters {
    private _bearer?: string;

    get workspaceName() {
        return <string>getInput("workspaceName");
    }

    get azureEnvironment() {
        return <string>getInput("azureEnvironment");
    }

    get TemplateFilePath() {
        return <string>getInput("TemplateFilePath");
    }

    get ParametersFilePath() {
        return <string>getInput("ParametersFilePath");
    }

    get OverrideArmParameters() {
        return <string>getInput("OverrideArmParameters");
    }

    get clientId() {
        return <string>getInput("clientId");
    }

    get clientSecret() {
        return <string>getInput("clientSecret");
    }

    get subscriptionId() {
        return <string>getInput("subscriptionId");
    }

    get tenantId() {
        return <string>getInput("tenantId");
    }

    get activeDirectoryEndpointUrl() {
        return <string>getInput("activeDirectoryEndpointUrl");
    }

    get resourceManagerEndpointUrl() {
        return <string>getInput("resourceManagerEndpointUrl");
    }

    get resourceGroup() {
        return <string>getInput("resourceGroup");
    }

    get bearer() {
        if (this._bearer === undefined) {
            throw new Error("Attempting to access bearer token when one does not exist");
        }
        return this._bearer;
    }

    get DeleteArtifactsNotInTemplate() {
        let val = <string>getInput("deleteArtifactsNotInTemplate");
        return val.toLowerCase() == "true";
    }

    set bearer(token: string) {
        this._bearer = token;
    }
}

const logger = new GithubActionConsole();
const params = new DeployArtifactMainParameters();

deployArtifactMainAsync(params, logger)
    .then(() => {
        logger.info("Action succeeded with no errors");
        exit(ExitCode.Success);
    })
    .catch((err) => {
        setFailed("Action failed with unhandled exception" + err);
        exit(ExitCode.Failure);
    });
