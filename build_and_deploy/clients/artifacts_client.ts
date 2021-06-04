// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import * as core from '@actions/core';
import * as httpClient from 'typed-rest-client/HttpClient';
import * as httpInterfaces from 'typed-rest-client/Interfaces';
import { Resource } from '../utils/arm_template_utils';
import { Artifact, DataFactoryType } from "../utils/artifacts_enum";
import { DeployStatus, Env, getParams, Params } from '../utils/deploy_utils';
import { SystemLogger } from '../utils/logger';


export var typeMap = new Map<string, Artifact>([
    [DataFactoryType.dataset.toLowerCase(), Artifact.dataset],
    [DataFactoryType.dataflow.toLowerCase(), Artifact.dataflow],
    [DataFactoryType.linkedservice.toLowerCase(), Artifact.linkedservice],
    [DataFactoryType.credential.toLowerCase(), Artifact.credential],
    [DataFactoryType.integrationruntime.toLowerCase(), Artifact.integrationruntime],
    [DataFactoryType.notebook.toLowerCase(), Artifact.notebook],
    [DataFactoryType.pipeline.toLowerCase(), Artifact.pipeline],
    [DataFactoryType.sparkjobdefinition.toLowerCase(), Artifact.sparkjobdefinition],
    [DataFactoryType.bigdatapools.toLowerCase(), Artifact.bigdatapools],
    [DataFactoryType.sqlpool.toLowerCase(), Artifact.sqlpool],
    [DataFactoryType.sqlscript.toLowerCase(), Artifact.sqlscript],
    [DataFactoryType.trigger.toLowerCase(), Artifact.trigger],
    [DataFactoryType.managedVirtualNetworks.toLowerCase(), Artifact.managedvirtualnetworks],
    [DataFactoryType.managedPrivateEndpoints.toLowerCase(), Artifact.managedprivateendpoints],
    [DataFactoryType.kqlScript.toLowerCase(), Artifact.kqlScript]
]);

export interface DeploymentTrackingRequest {
    url: string,
    name: string,
    token: string;
}

export class ArtifactClient {
    private params: Params;
    private client: httpClient.HttpClient;
    private requestOptions: httpInterfaces.IRequestOptions = {};
    private apiVersion = 'api-version=2019-06-01-preview';
    private nameTag = 'name';
    private deploymentTrackingRequests: Array<DeploymentTrackingRequest>;

    constructor(params: Params) {
        this.params = params;
        this.requestOptions.ignoreSslError = true;
        this.client = new httpClient.HttpClient(
            'synapse-git-cicd-deploy-task',
            undefined,
            this.requestOptions
        );
        this.deploymentTrackingRequests = new Array<DeploymentTrackingRequest>();
    }

    public getParams(): Params {
        return this.params;
    }

    public async deployArtifact(resourceType: string, payload: Resource, workspace: string, environment: string): Promise<string> {
        const baseUrl: string = this.getBaseurl(workspace, environment, resourceType);
        let param: Params = await getParams(true, environment);
        let token = param.bearer;
        let base_url = param.activeDirectoryEndpointUrl;
        base_url = base_url.substr(0, base_url.length - 2);

        switch (resourceType) {
            case Artifact.notebook:
                return this.deployNotebook(baseUrl, payload, token);
            case Artifact.sparkjobdefinition:
                return this.deploySparkJobDefinition(baseUrl, payload, token);
            case Artifact.sqlscript:
                return this.deploySqlScript(baseUrl, payload, token);
            case Artifact.dataset:
                return this.deployDataset(baseUrl, payload, token);
            case Artifact.pipeline:
                return this.deployPipeline(baseUrl, payload, token);
            case Artifact.dataflow:
                return this.deployDataflow(baseUrl, payload, token);
            case Artifact.trigger:
                return this.deployTrigger(baseUrl, payload, token);
            case Artifact.linkedservice:
                return this.deployLinkedservice(baseUrl, payload, token);
            case Artifact.integrationruntime:
                return this.deployIntegrationruntime(base_url, payload, token);
            case Artifact.credential:
                return this.deployCredential(baseUrl, payload, token);
            case Artifact.kqlScript:
                return this.deployKqlScript(baseUrl, payload, token);
            default:
                return DeployStatus.skipped;
        }
    }

    public async deleteArtifact(resourceType: string, payload: Resource, workspace: string, environment: string): Promise<string> {
        const baseUrl: string = this.getBaseurl(workspace, environment, resourceType);
        let param: Params = await getParams(true, environment);
        let token = param.bearer;
        return await this.artifactDeletionTask(baseUrl, resourceType, payload, token);
    }

    public async WaitForAllDeployments(isDelete: boolean){
        for(let i=0; i<this.deploymentTrackingRequests.length; i++){
            let deploymentTrackingRequest = this.deploymentTrackingRequests[i];
            if(isDelete) {
                await this.checkStatusForDelete(deploymentTrackingRequest.url, deploymentTrackingRequest.name, deploymentTrackingRequest.token);
            }
            else {
                await this.checkStatus(deploymentTrackingRequest.url, deploymentTrackingRequest.name, deploymentTrackingRequest.token);
            }
        }
        while(this.deploymentTrackingRequests.length>0){
            this.deploymentTrackingRequests.pop();
        }
    }

    private getStatusUrl(baseUrl: string, artifactype: string, operationId: string): string {
        let url = this.getCommonPath(baseUrl, artifactype);
        return url + `/operationResults/${operationId}?${this.apiVersion}`;

    }

    private buildArtifactUrl(baseUrl: string, artifactype: string, artifactNameValue: string): string {
        var url = this.getCommonPath(baseUrl, artifactype);
        while (artifactNameValue.indexOf(' ') > -1)
            artifactNameValue = artifactNameValue.replace(' ', '%20');
        return url + `/${artifactype}/${artifactNameValue}?${this.apiVersion}`;
    }

    private getCommonPath(baseUrl: string, artifactype: string): string {
        let url;
        if (artifactype === `${Artifact.integrationruntime}s`) {
            url = `${baseUrl}/subscriptions/${this.params.subscriptionId}/resourceGroups/${this.params.resourceGroup}`;
            url = url + `/providers/Microsoft.Synapse/workspaces/${core.getInput('TargetWorkspaceName')}`;
        } else {
            url = `${baseUrl}`;
        }
        return url;
    }

    private async deployCredential(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {

            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.credential.toString()}s`, payload, token);
        } catch (err) {
            throw new Error("Credential deployment failed " + JSON.stringify(err));
        }
    }

    private async deployIntegrationruntime(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {
            // Use token with audience `management.azure.com`
            let params: Params = await getParams();
            token = params.bearer;
            let base_url = params.resourceManagerEndpointUrl;
            base_url = base_url.substr(0, base_url.length - 1);

            return await this.artifactDeploymentTask(base_url,
                `${Artifact.integrationruntime.toString()}s`, payload, token);
        } catch (err) {
            throw new Error("Integration runtime deployment failed " + JSON.stringify(err));
        }
    }

    public async deployKqlScript(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {
            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.kqlScript.toString()}s`, payload, token);
        } catch (err) {
            SystemLogger.info(err);
            throw new Error("Credential deployment failed " + JSON.stringify(err));
        }
    }

    private async deployLinkedservice(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {
            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.linkedservice.toString()}s`, payload, token);
        } catch (err) {
            throw new Error("Linked service deployment failed " + JSON.stringify(err));
        }
    }

    private async deployTrigger(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {
            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.trigger.toString()}s`, payload, token);
        } catch (err) {
            throw new Error("Trigger deployment failed " + JSON.stringify(err));
        }
    }

    private async deployDataflow(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {
            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.dataflow.toString()}s`, payload, token);
        } catch (err) {
            throw new Error("Data flow deployment failed " + JSON.stringify(err));
        }
    }

    private async deployPipeline(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {
            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.pipeline.toString()}s`, payload, token);
        } catch (err) {
            throw new Error("Data set deployment failed " + JSON.stringify(err));
        }
    }

    private async deployDataset(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {
            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.dataset.toString()}s`, payload, token);
        } catch (err) {
            throw new Error("Data set deployment failed " + JSON.stringify(err));
        }
    }

    private async deploySqlScript(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {
            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.sqlscript.toString()}s`, payload, token);
        } catch (err) {
            throw new Error("SQL script deployment status " + JSON.stringify(err));
        }
    }

    private async deployNotebook(baseUrl: string, payload: Resource, token: string): Promise<string> {
        try {
            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.notebook.toString()}s`, payload, token);

        } catch (err) {
            throw new Error("Notebook deployment status " + JSON.stringify(err));
        }
    }

    private async deploySparkJobDefinition(baseUrl: string, payload: Resource, token: string)
        : Promise<string> {
        try {
            return await this.artifactDeploymentTask(baseUrl,
                `${Artifact.sparkjobdefinition.toString()}s`, payload, token);
        } catch (err) {
            throw new Error("SparkJobDefination deployment status " + JSON.stringify(err));
        }
    }

    private async artifactDeploymentTask(baseUrl: string, resourceType: string, payloadObj: Resource,
        token: string): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {

            let url: string = this.buildArtifactUrl(baseUrl, resourceType, payloadObj.name);
            let payload: string = payloadObj.content;

            this.client.put(url, payload, this.getHeaders(token)).then((res) => {

                let resStatus = res.message.statusCode;
                SystemLogger.info(`For Artifact: ${payloadObj.name}: ArtifactDeploymentTask status: ${resStatus}; status message: ${res.message.statusMessage}`);

                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                    // Remove this after testing
                    res.readBody().then((body) => {
                        if (!!body) {
                            let responseJson = JSON.parse(body);
                        }
                    });
                    return reject(DeployStatus.failed);
                }

                let location: string = res.message.headers.location!;
                res.readBody().then(async (body) => {
                    let responseJson = JSON.parse(body);
                    let operationId = responseJson['operationId'];
                    if (!!operationId) {
                        try {
                            if (!location) {
                                location = this.getStatusUrl(baseUrl, resourceType, operationId);
                            }
                            let deploymentTrackingRequest: DeploymentTrackingRequest = {
                                url: location,
                                name: payloadObj.name,
                                token: token
                            }
                            this.deploymentTrackingRequests.push(deploymentTrackingRequest);
                        } catch (err) {
                            SystemLogger.info(`For Artifact: ${payloadObj.name}: Deployment failed with error: ${JSON.stringify(err)}`);
                            return reject(DeployStatus.failed);
                        }

                        return resolve(DeployStatus.success);
                    } else {
                        return reject(DeployStatus.failed);
                    }
                });
            }, (reason) => {
                SystemLogger.info(`For Artifact: ${payloadObj.name}: Artifact Deployment failed: ${reason}`);
                return reject(DeployStatus.failed);
            });
        });
    }

    private async artifactDeletionTask(baseUrl: string, resourceType: string, payloadObj: Resource,
                                       token: string) : Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            var url: string = this.buildArtifactUrl(baseUrl, `${resourceType}s`, payloadObj.name);
            this.client.del(url, this.getHeaders(token)).then((res) => {
                var resStatus = res.message.statusCode;
                SystemLogger.info(`For Artifact: ${payloadObj.name}: ArtifactDeletionTask status: ${resStatus}; status message: ${res.message.statusMessage}`);

                res.readBody().then((body) => {
                    if (!!body) {
                        let responseJson = JSON.parse(body);
                    }
                });

                var location :string = res.message.headers.location!;

                let deploymentTrackingRequest: DeploymentTrackingRequest = {
                    url: location,
                    name: payloadObj.name,
                    token: token
                }
                this.deploymentTrackingRequests.push(deploymentTrackingRequest);

                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                    return reject(DeployStatus.failed);
                }
                return resolve(DeployStatus.success);
            }, (reason) => {
                SystemLogger.info("Artifact Delete failed: " + reason);
                return reject(DeployStatus.failed);
            });
        });
    }

    private async checkStatus(url: string, name: string, token: string) {
        var timeout = new Date().getTime() + (60000 * 20); // 20 Minutes
        var delayMilliSecs = 30000; // 0.5 minute

        while (true) {
            var currentTime = new Date().getTime();
            if (timeout < currentTime) {
                SystemLogger.info('Current time: ' + currentTime);
                throw new Error("Timeout error in checkStatus");
            }
            var nbName = '';

            var res = await this.client.get(url, this.getHeaders(token));
            var resStatus = res.message.statusCode;
            SystemLogger.info(`For artifact: ${name}: Checkstatus: ${resStatus}; status message: ${res.message.statusMessage}`);
            if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                throw new Error(`Checkstatus => status: ${resStatus}; status message: ${res.message.statusMessage}`);
            }
            var body = await res.readBody();
            if (!body) {
                await this.delay(delayMilliSecs);
                continue;
            }
            let responseJson = JSON.parse(body);
            var status = responseJson['status'];
            if (!!status && status == 'Failed') {
                SystemLogger.info(`For artifact: ${name}: Artifact Deployment status: ${status}`);
                throw new Error(`Failed to fetch the deployment status ${JSON.stringify(responseJson['error'])}`);
            } else if (!!status && status == 'InProgress') {
                await this.delay(delayMilliSecs);
                continue;
            }
            nbName = responseJson['name'];
            if (nbName === name) {
                SystemLogger.info(`Artifact ${name} deployed successfully.`);
                break;
            } else {
                throw new Error('Artifiact deployment validation failed');
            }
        }
    }

    private async checkStatusForDelete(url: string, name: string, token: string) {
        var timeout = new Date().getTime() + (60000 * 20); // 20 Minutes
        var delayMilliSecs = 30000; // 0.5 minute

        while (true) {
            var currentTime = new Date().getTime();
            if (timeout < currentTime) {
                SystemLogger.info(`Current time: ' ${currentTime}`);
                throw new Error("Timeout error in checkStatus");
            }
            var nbName = '';

            var res = await this.client.get(url, this.getHeaders(token));
            var resStatus: number = res.message.statusCode!;
            SystemLogger.info(`For Artifact: ${name}: Checkstatus: ${resStatus}; status message: ${res.message.statusMessage}`);
            if (resStatus != 200 && resStatus < 203) {
                await this.delay(delayMilliSecs);
                continue;
            }
            return;
        }
    }

    private async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private getHeaders(token: string): httpInterfaces.IHeaders {
        var headers: httpInterfaces.IHeaders = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'User-Agent': this.client.userAgent?.toString()
        }
        return headers;
    }

    private getAudienceUrl(env: string): string {
        switch (env) {
            case Env.prod.toString():
                return `https://dev.azuresynapse.net`;
            case Env.mooncake.toString():
                return `https://dev.azuresynapse.azure.cn`;
            case Env.usnat.toString():
                return `https://dev.azuresynapse.usgovcloudapi.net`;
            case Env.blackforest.toString():
            default:
                throw new Error('Environment validation failed');
        }
    }

    private getBaseurl(workspace: string, environment: string, resourceType: string) {
        return ArtifactClient.getUrlByEnvironment(workspace, environment);
    }

    public static getUrlByEnvironment(workspace: string, environment: string): string {
        switch (environment) {
            case Env.prod.toString():
                return `https://${workspace}.dev.azuresynapse.net`;
            case Env.mooncake.toString():
                return `https://${workspace}.dev.azuresynapse.azure.cn`;
            case Env.usnat.toString():
                return `https://${workspace}.dev.azuresynapse.usgovcloudapi.net`;
            case Env.blackforest.toString():
            default:
                throw new Error('Environment validation failed');
        }
    }
}