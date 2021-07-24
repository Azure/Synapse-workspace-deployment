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

const activityFunction: AzureFunction = async function (context: Context): Promise<string> {
    return `Hello ${context.bindings.name.bindingData.input.body['properties']}!`;

     /* const targetWorkspace: string = "";
    const templateFile: string = "";
    const parametersFile: string = "";
    const overrideArmParameters: string = "";
    const environment: string = "";

    let  deleteArtifactsNotInTemplate: boolean = false;
    const deleteArtifactsNotInTemplateString = "false";
    if(deleteArtifactsNotInTemplateString.toLowerCase() == "true")
    {
        deleteArtifactsNotInTemplate = true;
    }
    SystemLogger.info(`DeleteArtifactsNotInTemplate=${deleteArtifactsNotInTemplate}`);

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
 */

};

export default activityFunction;
