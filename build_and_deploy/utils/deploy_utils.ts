// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import * as core from '@actions/core';
import { getBearer } from './service_principal_client_utils';

export enum DeployStatus {
    success = 'Success',
    failed = 'Failed',
    skipped = 'Skipped'
}

export enum Env {
    prod = 'Azure Public',
    mooncake = 'Azure China',
    usnat = 'Azure US Government',
    blackforest = 'Azure Germany'

}

export interface Params {
    clientId: string;
    clientSecret: string;
    subscriptionId: string;
    tenantId: string;
    activeDirectoryEndpointUrl: string;
    resourceManagerEndpointUrl: string;
    bearer: string,
    resourceGroup: string,
}

export type ResourceType = 'credential' | 'sqlPool' | 'bigDataPool' | 'sqlscript' | 'notebook' | 'sparkjobdefinition'
    | 'linkedService' | 'pipeline' | 'dataset' | 'trigger' | 'integrationRuntime' | 'dataflow'
    | 'managedVirtualNetworks' | 'managedPrivateEndpoints';


export async function getParams(dataplane: boolean = false, env: string = ""): Promise<Params> {
    try {

        var resourceGroup = core.getInput("resourceGroup");
        var clientId = core.getInput("clientId");
        var clientSecret = core.getInput("clientSecret");
        var subscriptionId = core.getInput("subscriptionId");
        var tenantId = core.getInput("tenantId");
        var activeDirectoryEndpointUrl = core.getInput("activeDirectoryEndpointUrl");
        var resourceManagerEndpointUrl = core.getInput("resourceManagerEndpointUrl");

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



