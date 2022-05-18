// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {OPERATIONS} from "../utils/artifacts_enum";

export interface OperationParams{
    workspaceName: string
}

export interface DeployParams extends OperationParams{
    templateFile: string,
    parameterFile: string,
    overrides: string,
    environment: string,
    deleteArtifacts: boolean,
    deployMPE: boolean,
    failOnMissingOverrides: boolean,
}

export interface ValidateParams extends OperationParams{
    artifactsFolder: string
}

export interface ExportParams extends OperationParams, ValidateParams{
    destinationFolder: string,
    publishArtifact: boolean
}

export interface Operations{
    operationType: OPERATIONS;
    operationParams: OperationParams;
    PerformOperation(): void;
}
