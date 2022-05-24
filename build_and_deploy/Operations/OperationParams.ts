// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {DeployParams, ExportParams, ValidateParams} from "./OperationInterfaces";
import * as core from '@actions/core';
import {isStrNullOrEmpty} from "../utils/common_utils";
import {ExportConstants} from "../utils/artifacts_enum";


export function GetDeployParams(templateFile: string = "", parameterFile: string = ""): DeployParams{
    templateFile = templateFile == "" ? core.getInput("TemplateFile")! : templateFile;
    parameterFile = parameterFile == "" ? core.getInput("ParametersFile")! : parameterFile;
    let overrides = core.getInput("OverrideArmParameters")!;
    let workspaceName = core.getInput("TargetWorkspaceName")!

    let environment = core.getInput("Environment")!;
    if(isStrNullOrEmpty(environment)){
        environment = 'prod';
    }

    let deleteArtifacts = core.getInput("DeleteArtifactsNotInTemplate")!.toLowerCase() == "true"
    let deployMPE = core.getInput("deployManagedPrivateEndpoint")!.toLowerCase() == "true"
    let failOnMissingOverrides = core.getInput("FailOnMissingOverrides")!.toLowerCase() == "true"

    return {
        templateFile: templateFile,
        parameterFile: parameterFile,
        overrides: overrides,
        environment: environment,
        deleteArtifacts: deleteArtifacts,
        deployMPE: deployMPE,
        failOnMissingOverrides: failOnMissingOverrides,
        workspaceName: workspaceName
    }
}

export function GetValidateParams(): ValidateParams{
    let artifactsFolder = core.getInput("ArtifactsFolder")!
    let workspaceName = core.getInput("TargetWorkspaceName")!

    return {
        artifactsFolder: artifactsFolder,
        workspaceName: workspaceName
    }
}

export function GetExportParams(publishArtifact: boolean): ExportParams{

    const destinationFolder: string = ExportConstants.destinationFolder;
    let artifactsFolder = core.getInput("ArtifactsFolder")!;
    let workspaceName = core.getInput("TargetWorkspaceName")!;

    return {
        artifactsFolder: artifactsFolder,
        workspaceName: workspaceName,
        destinationFolder: destinationFolder,
        publishArtifact: publishArtifact
    }
}
