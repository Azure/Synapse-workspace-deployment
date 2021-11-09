// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import * as httpClient from 'typed-rest-client/HttpClient';
import * as httpInterfaces from 'typed-rest-client/Interfaces';
import * as uuid from 'uuid';
import * as deployUtils from '../utils/deploy_utils';
import { SystemLogger } from '../utils/logger';

const userAgent: string = 'synapse-github-cicd-deploy-task';
let requestOptions: httpInterfaces.IRequestOptions = {};
//requestOptions.ignoreSslError = ;
const client: httpClient.HttpClient = new httpClient.HttpClient(userAgent, undefined, requestOptions);

async function getDeploymentUrl(baseUrl: string, rgName: string, subId: string): Promise<string> {
    var url = `${baseUrl}/subscriptions/${subId}/resourcegroups/${rgName}/providers/Microsoft.Resources/deployments/${uuid.v4()}?api-version=2019-10-01`;
    const regex = /([^:]\/)\/+/gi;
    return url.replace(regex, '$1');
}

async function checkDeploymentStatus(url: string, headers: httpInterfaces.IHeaders) {
    let timeout = new Date().getTime() + (60000 * 20); // 20 minutes
    let delayMilliSecs = 30000;
    let status = "";
    while (true) {
        let currentTime = new Date().getTime();
        if (timeout < currentTime) {
            SystemLogger.info('Current time: ' + currentTime);
            throw new Error("Timeout error in checkDeploymentStatus");
        }
        let res = await client.get(url, headers);
        let resStatus = res.message.statusCode;
        SystemLogger.info(`CheckDeploymentStatus: ${resStatus}; status message: ${res.message.statusMessage}`);
        if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
            throw new Error(`=> status: ${resStatus}; status message: ${res.message.statusMessage}`);
        }

        let body = await res.readBody();
        if (!body) {
            SystemLogger.info("No status response for url: " + url);
            await delay(delayMilliSecs);
            break;
        }
        let responseJson = JSON.parse(body);
        SystemLogger.info(JSON.stringify(responseJson));
        status = responseJson['status'];

        if (status == 'Succeeded' || status == 'Failed' || status == 'Canceled') {
            return status;
        } else {
            SystemLogger.info("Arm deployment status: " + status);
            await delay(delayMilliSecs);
        }
    }
}

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function deploy(armTemplate: string): Promise<string> {
    try {
        let params = await deployUtils.getParams();
        let url: string = await getDeploymentUrl(params.resourceManagerEndpointUrl, params.resourceGroup, params.subscriptionId);
        let token = params.bearer;
        SystemLogger.info('Arm resources deployment url: ' + url);

        return new Promise<string>((resolve, reject) => {

            var headers: httpInterfaces.IHeaders = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json; charset=utf-8'
            }

            let requestBody =
                `{
                "properties": {
                    "mode": "Incremental",
                    "debugSetting": {
                        "detailLevel": "requestContent, responseContent"
                    },
                    "template": ${JSON.stringify(armTemplate)}
                }
            }`;

            client.put(url, requestBody, headers).then(async (res) => {
                var resStatus = res.message.statusCode;
                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                    SystemLogger.info(`Arm template deployment failed, status: ${resStatus}; status message: ${res.message.statusMessage}`);
                    return reject(deployUtils.DeployStatus.failed);
                }
                SystemLogger.info(`Arm template deployment status: ${resStatus}; status message: ${res.message.statusMessage}`);
                var statusUrl: string = "";

                var rawHeaders = res.message.rawHeaders;
                for (let i = 0; i < rawHeaders.length; i++) {
                    let header = rawHeaders[i].toLowerCase();
                    if (header.indexOf('microsoft.resources') > -1 &&
                        header.indexOf('deployments') > -1 &&
                        header.indexOf('operationstatuses') > -1) {
                        statusUrl = header;
                    }
                }
                SystemLogger.info(`Deployment tracking end point: ${statusUrl}`);
                if (statusUrl != "") {
                    var status = await checkDeploymentStatus(statusUrl, headers);
                    SystemLogger.info(`Final arm deployment status: ${status}`);
                    if (status == 'Succeeded') {
                        return resolve(deployUtils.DeployStatus.success);
                    }
                    return reject(deployUtils.DeployStatus.failed);
                }
            }, (reason) => {
                SystemLogger.info('Arm Template Deployment Failed: ' + reason);
                return reject(deployUtils.DeployStatus.failed);
            });
        });
    } catch (err) {
        throw new Error("ARM template deployment failed: " + err);
    }
}

