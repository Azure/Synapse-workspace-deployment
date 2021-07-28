/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 * 
 * Before running this sample, please:
 * - create a Durable orchestration function
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *   function app in Kudu
 */

import { AzureFunction, Context } from "@azure/functions"
import { ArtifactClient } from "../clients/artifacts_client";
import { Orchestrator } from "../orchestrator";
import { PackageFile } from "../package_file";
import { Env, getParams, getParamsForEv2 } from "../utils/deploy_utils";
import { ActionLogger, SystemLogger } from "../utils/logger";

const activityFunction: AzureFunction = async function (context: Context): Promise<void> {
    //return `Hello ${JSON.stringify(context.bindings.name.bindingData.input.body['properties'])}!`;
    var properties = context.bindings.name.bindingData.input.body['properties'];
    var headers = context.bindings.name.bindingData.input.headers;
    const targetWorkspace: string = properties.synapseWorkspaceName['value'];
    const templateFile: string = properties.templateForWorkspacePath['value'];
    const parametersFile: string = properties.templateParametersForWorkspacePath['value'];
    const overrideArmParameters: string = properties.armOverrideParametersForWorkspacePath['value'];
    var environment = process.env["Environment"];

    let  deleteArtifactsNotInTemplate: boolean = false;
    const deleteArtifactsNotInTemplateString = "false";
    if(deleteArtifactsNotInTemplateString.toLowerCase() == "true")
    {
        deleteArtifactsNotInTemplate = true;
    }
    
    SystemLogger.info(`DeleteArtifactsNotInTemplate=${deleteArtifactsNotInTemplate}`);

    try {
        const packageFiles: PackageFile = new PackageFile(templateFile, parametersFile, overrideArmParameters);
        const params = await getParamsForEv2(properties, headers);
        const artifactClient: ArtifactClient = new ArtifactClient(params, properties, headers);
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
};

export default activityFunction;
