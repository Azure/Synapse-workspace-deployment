// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {DeployParams, ExportParams, Operations} from "./OperationInterfaces";
import {GetDeployParams, GetExportParams} from "./OperationParams";
import {DeployOperation, ExportOperation} from "./Operations";
import path from "path";
import {ExportConstants} from "../utils/artifacts_enum";

export class OperationManager{

    // Deploy operation
    static async DeployArtifacts(templateFile: string = "", parameterFile: string = ""){
        let params: DeployParams = GetDeployParams(templateFile, parameterFile);
        let deployer: Operations = new DeployOperation(params);
        await deployer.PerformOperation();
    }

    // Validate operation
    static async ValidateArtifacts(publishArtifacts: boolean = true){
        // Export function also internally validates
        await OperationManager.ExportArtifacts(publishArtifacts);
    }

    // Export operation
    static async ExportArtifacts(publishArtifacts: boolean){
        let params: ExportParams = GetExportParams(publishArtifacts);
        let exporter: Operations = new ExportOperation(params);
        await exporter.PerformOperation();
    }

    // Validate and deploy
    static async ValidateAndDeploy(){
        const folder: string = ExportConstants.destinationFolder;
        const templateFile: string = path.join(folder, ExportConstants.templateFile);
        const parameterFile: string = path.join(folder, ExportConstants.parameterFile);
        // Validate and then export the templates.
        await OperationManager.ValidateArtifacts(false);
        // Deploy the exported templates.
        await OperationManager.DeployArtifacts(templateFile, parameterFile);
    }
}