import * as df from "durable-functions"
import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as httpClient from 'typed-rest-client/HttpClient';
import { ArtifactClient } from '../clients/artifacts_client';
import { Orchestrator } from "../orchestrator";
import { PackageFile } from '../package_file';
import { getParams } from '../utils/deploy_utils';
import { ActionLogger, SystemLogger } from '../utils/logger';
import { DurableOrchestrationStatus } from "durable-functions/lib/src/durableorchestrationstatus";

const httpStart: AzureFunction = async function (context: Context, req: HttpRequest): Promise<any > {
    const client = df.getClient(context);
    var instanceId: string = "";
    context.log(`The '${req.params.extensiontype}' extension has been invoked with the http method '${req.method}', and uri '${req.url}'`);    
    var body: ResponseBody = {
         Name : req.params.actionname,
         Type : `${req.params.extensionnamespace}/${req.params.extensiontype}`,
         State : ``,
         Message : ``,
         Error : null
        };
    try {
        if (req.method == "PUT")
        {
            instanceId = await client.startNew(req.params.extensiontype, undefined, req);
            context.log(`Started orchestration with ID = '${instanceId}'.`);

            body.State = "Running";
            body.Message = `Started orchestration with ID = '${instanceId}'.`;  
            context.res = {
                status: 202,
                body: JSON.stringify(body),
                contentType: 'application/json',
                headers: {
                    'x-ms-usercallbackdata': instanceId,
                    'Content-Type': 'application/json'
                }
            };           
        }
        else if (req.method == "GET")
        {
            // get status
            var instanceId = req.headers['x-ms-usercallbackdata'];
            var status = await client.getStatus(instanceId);
            context.log(`get status for orchestration with ID = '${instanceId}', returned '${status.runtimeStatus}'`);

            body.State = (status.runtimeStatus == "Completed")? "Succeeded" : status.runtimeStatus;
            if (status.runtimeStatus == "Failed")
            {
                // report error message to ev2
                body.Message = JSON.stringify(status.output);
            }
            context.res = {
                status: 200,
                body: body,
                contentType: 'application/json'
            };    
        }
        else if (req.method == "POST" && req.params.method == "cancel")
        {
            // cancel operation
            var instanceId = req.headers['x-ms-usercallbackdata'];
            await client.terminate(instanceId, "EV2 rollout requested cancel");
            context.log(`cancel requested for orchestration with ID = '${instanceId}'`);

            body.State = "canceled";
            context.res = {
                status: 200,
                body: body,
                contentType: 'application/json'
            };  
        }
        else
        {
            context.log(`Unknown HTTP method requested for orchestration with ID = '${instanceId}'`);
            body.State = "failed";
            body.Message = "Unknown HTTP method requested";
            context.res = {
                status: 501,
                body: body,
                contentType: 'application/json'
            };    
        }
    } catch (error) {
        context.log("error handling request: " + error.ToString());
        context.res.status(500).send(error);
    } 
    
    return context.res;
    //return client.createCheckStatusResponse(context.bindingData.req, instanceId);
};

export default httpStart;


class ResponseBody
{
    public Name: string
    public Type: string
    public State: string
    public Message:string
    public Error: ErrorObject
}

class ErrorBlock
{
    public Code:string 
    public Message:string
    public Target:string
}

class ErrorObject
{
    public Code:string 
    public Message:string 
    public Target:string  
    public Details:ErrorBlock[] 
}