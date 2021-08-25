// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import * as core from '@actions/core';
import { getBearer, getManagedIdentityBearer } from './service_principal_client_utils';

export enum DeployStatus {
    success = 'Success',
    failed = 'Failed',
    skipped = 'Skipped'
}

export enum Env {
    dev = 'Azure Test',
    prod = 'Azure Public',
    mooncake = 'Azure China',
    usnat = 'Azure US Government',
}

export interface Params {
    clientId: string;
    clientSecret: string;
    subscriptionId: string;
    tenantId: string;
    managedIdentity: string;
    activeDirectoryEndpointUrl: string;
    resourceManagerEndpointUrl: string;
    bearer: string,
    resourceGroup: string,
}

export type ResourceType = 'credential' | 'sqlPool' | 'bigDataPool' | 'sqlscript' | 'notebook' | 'sparkjobdefinition'
    | 'linkedService' | 'pipeline' | 'dataset' | 'trigger' | 'integrationRuntime' | 'dataflow'
    | 'managedVirtualNetworks' | 'managedPrivateEndpoints' | 'kqlScript';


export async function getParams(dataplane: boolean = false, env: string = ""): Promise<Params> {
    try {

        const env: string = core.getInput('Environment');
        var resourceGroup = core.getInput("resourceGroup");
        var clientId = core.getInput("clientId");
        var clientSecret = core.getInput("clientSecret");
        var subscriptionId = core.getInput("subscriptionId");
        var tenantId = core.getInput("tenantId");
        var managedIdentity = core.getInput("managedIdentity");
        var activeDirectoryEndpointUrl = getAdEndpointUrl(env);
        var resourceManagerEndpointUrl = getRmEndpointUrl(env);

    } catch (err) {
        throw new Error("Unable to parse the secret: " + err.message);
    }

    try {
        if (dataplane) {
            resourceManagerEndpointUrl = await getRMUrl(env);
        }

        let bearer: string;

        if(managedIdentity == 'true'){
            bearer = await getManagedIdentityBearer(resourceManagerEndpointUrl);
        }else{
            bearer = await getBearer(clientId, clientSecret, subscriptionId, tenantId, resourceManagerEndpointUrl, activeDirectoryEndpointUrl);
        }

        let params: Params = {
            'clientId': clientId,
            'clientSecret': clientSecret,
            'subscriptionId': subscriptionId,
            'tenantId': tenantId,
            'managedIdentity': managedIdentity,
            'activeDirectoryEndpointUrl': activeDirectoryEndpointUrl,
            'resourceManagerEndpointUrl': resourceManagerEndpointUrl,
            'bearer': bearer,
            'resourceGroup': resourceGroup
        };
        return params;

    } catch (err) {
        throw new Error("Failed to fetch Bearer: " + err.message);
    }
}

export async function getParamsForEv2(properties: object, headers: object, dataplane: boolean = false, env: string = ""): Promise<Params> {
    try {

        var resourceGroup = headers['x-ms-resource-group'];
        var clientId = properties['applicationId']['value'];
        var clientSecret = properties['clientKey']['value'];
        var subscriptionId = headers['x-ms-subscription-id'];
        var tenantId = properties['tenantId']['value'];
        var activeDirectoryEndpointUrl = process.env["ActiveDirectoryEndpointUrl"];
        var resourceManagerEndpointUrl = process.env["ResourceManagerEndpointUrl"];

    } catch (err) {
        throw new Error("Unable to parse the secret: " + err.message);
    }

    try {
        if (dataplane) {
            resourceManagerEndpointUrl = await getRMUrl(env);
        }

        let bearer = await getBearer(clientId, clientSecret, subscriptionId, tenantId, resourceManagerEndpointUrl, activeDirectoryEndpointUrl);
        let params: Params = {
            'clientId': clientId,
            'clientSecret': clientSecret,
            'subscriptionId': subscriptionId,
            'tenantId': tenantId,
            'activeDirectoryEndpointUrl': activeDirectoryEndpointUrl,
            'resourceManagerEndpointUrl': resourceManagerEndpointUrl,
            'bearer': bearer,
            'resourceGroup': resourceGroup
        };
        return params;
    } catch (err) {
        throw new Error("Failed to fetch Bearer: " + err.message);
    }
}

export async function getRMUrl(env: string): Promise<string> {
    switch (env) {
        case Env.dev.toString():
            return `https://dev.azuresynapse.net`;
        case Env.prod.toString():
            return `https://dev.azuresynapse.net`;
        case Env.mooncake.toString():
            return `https://dev.azuresynapse.azure.cn`;
        case Env.usnat.toString():
            return `https://dev.azuresynapse.usgovcloudapi.net`;
        default:
            throw new Error('Environment validation failed');
    }
}

export function getAdEndpointUrl(env: string): string {
    switch (env) {
        case Env.prod.toString():
            return `https://login.microsoftonline.com/`;
        case Env.mooncake.toString():
            return `https://login.chinacloudapi.cn/`;
        case Env.usnat.toString():
            return `https://login.microsoftonline.us/`;
        default:
            throw new Error('Environment validation failed');
    }
}

export function getRmEndpointUrl(env: string): string {
    switch (env) {
        case Env.prod.toString():
            return `https://management.azure.com/`;
        case Env.mooncake.toString():
            return `https://management.chinacloudapi.cn/`;
        case Env.usnat.toString():
            return `https://management.usgovcloudapi.net/`;
        default:
            throw new Error('Environment validation failed');
    }
}



