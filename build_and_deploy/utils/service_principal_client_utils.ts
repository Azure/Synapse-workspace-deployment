// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import * as httpClient from 'typed-rest-client/HttpClient';
import * as httpInterfaces from 'typed-rest-client/Interfaces';
import { DeployStatus, Params } from './deploy_utils';
import { SystemLogger } from './logger';

const userAgent: string = 'synapse-github-cicd-deploy-task'
const requestOptions: httpInterfaces.IRequestOptions = {};
const client: httpClient.HttpClient = new httpClient.HttpClient(userAgent, undefined, requestOptions);

export async function getBearer(
    clientId: string,
    clientSecret: string,
    subscriptionId: string,
    tenantId: string,
    resourceManagerEndpointUrl: string,
    activeDirectoryEndpointUrl: string
): Promise<string> {

    try {

        return new Promise<string>((resolve, reject) => {

            var url = `${activeDirectoryEndpointUrl}${tenantId}/oauth2/token`;

            var headers: httpInterfaces.IHeaders = {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

            let requestBody = `client_id=${clientId}&client_secret=${clientSecret}&resource=${encodeURIComponent(resourceManagerEndpointUrl)}&subscription_id=${subscriptionId}&grant_type=client_credentials`;

            client.post(url, requestBody, headers).then(async (res) => {
                var resStatus = res.message.statusCode;
                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                    SystemLogger.info(`Unable to fetch service principal token, status: ${resStatus}; status message: ${res.message.statusMessage}`);
                    let error = await res.readBody();
                    SystemLogger.info(error);
                    return reject(DeployStatus.failed);
                }

                SystemLogger.info(`Able to fetch service principal token: ${resStatus}; status message: ${res.message.statusMessage}`);
                let body = await res.readBody();
                return resolve(JSON.parse(body)["access_token"]);
            });

        });

    } catch (err) {
        throw new Error("Unable to fetch the service principal token: " + err.message);
    }
}


export async function getManagedIdentityBearer(
    resourceManagerEndpointUrl: string
): Promise<string> {

    try {

        return new Promise<string>((resolve, reject) => {

            var url = `http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=${resourceManagerEndpointUrl}`;

            var headers: httpInterfaces.IHeaders = {
                'Metadata': 'true'
            }

            client.get(url, headers).then(async (res) => {
                var resStatus = res.message.statusCode;
                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                    SystemLogger.info(`Unable to fetch managed identity bearer token, status: ${resStatus}; status message: ${res.message.statusMessage}`);
                    let error = await res.readBody();
                    SystemLogger.info(error);
                    return reject(DeployStatus.failed);
                }

                SystemLogger.info(`Able to fetch managed identity bearer token: ${resStatus}; status message: ${res.message.statusMessage}`);
                let body = await res.readBody();
                return resolve(JSON.parse(body)["access_token"]);
            });

        });

    } catch (err) {
        throw new Error("Unable to fetch the managed identity bearer token: " + err.message);
    }
}


export async function getWorkspaceLocation(params: Params, targetWorkspace: string): Promise<string> {
    try {

        return new Promise<string>((resolve, reject) => {
            let resourceManagerEndpointUrl = params.resourceManagerEndpointUrl;
            let subscriptionId = params.subscriptionId;
            let resourceGroup = params.resourceGroup;

            let headers = {
                'Authorization': 'Bearer ' + params.bearer
            }

            let url = `${resourceManagerEndpointUrl}subscriptions/${subscriptionId}/` +
                `resourceGroups/${resourceGroup}/providers/Microsoft.Synapse/workspaces/` +
                `${targetWorkspace}?api-version=2019-06-01-preview`;


            client.get(url, headers).then(async (res) => {
                let resStatus = res.message.statusCode;
                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                    SystemLogger.info(`Unable to fetch location of workspace, status: ${resStatus}; status message: ${res.message.statusMessage}`);
                    return reject(DeployStatus.failed);
                }

                SystemLogger.info(`Able to fetch location of workspace: ${resStatus}; status message: ${res.message.statusMessage}`);
                let body = await res.readBody();
                return resolve(JSON.parse(body)['location']);
            })
        });
    } catch (err) {
        throw new Error("Unable to fetch the location of the workspace: " + err.message);
    }
}
