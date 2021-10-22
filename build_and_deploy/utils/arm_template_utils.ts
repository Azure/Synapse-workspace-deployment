// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import * as yaml from 'js-yaml';
import {v4 as uuidv4} from 'uuid';
import {SystemLogger} from './logger';
import {isDefaultArtifact} from "./common_utils";
import {DataFactoryType} from "./artifacts_enum";

// Just 2 random Guids to replace backslash in parameters file.
const backslash: string = "7FD5C49AB6444AC1ACCD56B689067FBBAD85B74B0D8943CA887371839DFECF85";
const quote: string = "48C16896271D483C916DE1C4EC6F24DBC945F900F9AB464B828EC8005364D322";
const doublequote: string = "4467B65E39AA40998907771187C9B539847A7E801C5E4F0E9513C1D6154BC816";


export interface Resource {
    type: string,
    isDefault: boolean,
    content: string,
    name: string,
    dependson: Array<string>;
}

export async function getArtifacts(armParams: string, armTemplate: string, overrideArmParameters: string,
    targetWorkspaceName: string, targetLocation: string): Promise<Resource[][]> {


    armTemplate = createArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);
    armTemplate = JSON.stringify(JSON.parse(armTemplate));

    return getArtifactsFromArmTemplate(armTemplate, targetLocation, targetWorkspaceName);
}

export function createArmTemplate(armParams: string, armTemplate: string, overrideArmParameters: string, targetWorkspaceName: string) {

    armParams = replaceBackSlash(armParams);
    overrideArmParameters = replaceBackSlash(overrideArmParameters);
    armTemplate = replaceParameters(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);
    armTemplate = replaceVariables(armTemplate);
    armTemplate = replaceStrByRegex(armTemplate);

    return armTemplate;
}

export function replaceBackSlashCode(inputString: string): string {
    if (inputString == null) {
        return "";
    }

    let outputString: string = inputString;

    while (outputString.indexOf(quote) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(quote))
            + `\\\"`
            + outputString.substr(outputString.indexOf(quote) + quote.length);
    }

    while (outputString.indexOf(backslash) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(backslash))
            + `\\`
            + outputString.substr(outputString.indexOf(backslash) + backslash.length);
    }

    return outputString;
}

function replaceBackSlash(inputString: string): string {
    if (inputString == null || inputString == "") {
        return "";
    }
    let outputString: string = inputString;
    outputString = outputString.replace(/(\\\")/g, quote);
    outputString = outputString.replace(/(\\)/g, backslash);
    return outputString;
}

export function replaceDoubleQuoteCode(inputString: string): string
{
    if(inputString == null)
    {
        return "";
    }

    let outputString: string = inputString;

    while(outputString.indexOf(doublequote)>=0)
    {
        outputString = outputString.substr(0, outputString.indexOf(doublequote))
            + `"`
            + outputString.substr(outputString.indexOf(doublequote) + doublequote.length);
    }

    return outputString;
}

function replaceDoubleQuote(inputString: string): string {
    if(inputString == null || inputString=="")
    {
        return "";
    }

    let outputString: string = inputString;

    while(outputString.indexOf(`\"`)>=0)
    {
        outputString = outputString.substr(0, outputString.indexOf(`\"`)) +
            doublequote +
            outputString.substr(outputString.indexOf(`\"`) + 1);
    }

    return outputString;
}


function replaceParameters(armParams: string, armTemplate: string, overrideArmParameters: string, targetWorkspaceName: string): string {
    SystemLogger.info("Begin replacement of parameters in the template");
    // Build parameters
    let armParamValues = getParameterValuesFromArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);

    armParamValues.forEach((value, key) => {
        value = value.toString();
        if(value.indexOf("parameters") > -1){
            armParamValues.forEach((valueInside, keyInside) => {
                if(value.indexOf(keyInside) > -1) {
                    let newValue = value.split('['+keyInside+']').join(`${valueInside}`);
                    armParamValues.set(key, newValue);
                    value = newValue; // Otherwise the below if condition will again get executed.
                }
                if(value.indexOf(keyInside) > -1) {
                    armParamValues.set(key, value.split(keyInside).join(`'${valueInside}'`));
                }
            });
        }
    });

    armParamValues.forEach((value, key) => {
        value = value.toString();
        if(value.indexOf("concat")>-1) {
            armParamValues.set(key, replaceStrByRegex(value));
        }
    });


    // Replace parameterValues
    armParamValues.forEach((value, key) => {
        if (isJsonValue(value)) {
            armTemplate = armTemplate.split(`"[` + key + `]"`).join(`${value}`);
        }
        else {
            armTemplate = armTemplate.split(`"[` + key + `]"`).join(`"${value}"`);
        }

        armTemplate = armTemplate.split(key).join(`'${value}'`);
    });

    SystemLogger.info("Complete replacement of parameters in the template");
    return armTemplate;
}

function isJsonValue(testString: string): boolean {
    try {
        JSON.parse(testString);
        return true;
    }
    catch {
        return false;
    }
}

function replaceVariables(armTemplate: string): string {
    // Build variables
    SystemLogger.info("Begin replacement of variables in the template");
    let jsonArmTemplateParams = JSON.parse(armTemplate);
    let armVariableValues = new Map<string, string>();

    for (let value in jsonArmTemplateParams.variables) {
        let variableValue = jsonArmTemplateParams.variables[value] as string;
        variableValue = replaceStrByRegex(variableValue);
        armVariableValues.set(`variables('${value}')`, variableValue);
    }
    // Replace variables
    armVariableValues.forEach((value, key) => {
        armTemplate = armTemplate.split(key).join(`${value}`);
    });

    SystemLogger.info("Complete replacement of variables in the template");
    return armTemplate;
}

/*
    This function will replace variables like [concat('Microsoft.Synapse/workspaces/', 'workspaceName')]
    and convert it into [Microsoft.Synapse/workspaces/workspaceName]
 */
export function replaceStrByRegex(str: string): string {
    var regexOutside = /\[concat\((.*?)\)\]/g;
    var resultOutside = str.replace(regexOutside, function (matchedStr: string, strOutside: string) {
        var result: string = ``;
        let resultArgs = strOutside.split(`,`);
        resultArgs.forEach((arg) => {
            let fragment = arg.trim();
            if (fragment.endsWith("'")) {
                fragment = fragment.substring(1, fragment.length - 1);
            }
            result += fragment;
        });

        return result;
    });

    return resultOutside;
}

function getParameterValuesFromArmTemplate(armParams: string, armTemplate: string, overrideArmParameters: string,
    targetWorkspaceName: string): Map<string, string> {

    // Parse the parameters and keep a map of these values
    let jsonArmParams = JSON.parse(armParams);
    let armParamValues = new Map<string, string>()
    for (let value in jsonArmParams.parameters) {
        let paramValue = jsonArmParams.parameters[value].value;
        paramValue = typeof(paramValue) == "object" ? JSON.stringify(paramValue) : paramValue;
        armParamValues.set(`parameters('${value}')`, paramValue);
    }

    // Convert arm template to json, look at the default parameters if any and add missing ones to the map we have
    let jsonArmTemplateParams = JSON.parse(armTemplate);
    let armTemplateParamValues = new Map<string, string>()
    for (let value in jsonArmTemplateParams.parameters) {
        let paramValue = jsonArmTemplateParams.parameters[value].defaultValue;
        paramValue = typeof(paramValue) == "object" ? JSON.stringify(paramValue) : paramValue;
        armTemplateParamValues.set(`parameters('${value}')`, paramValue);
    }

    armTemplateParamValues.forEach((value, key) => {
        if (!armParamValues.has(key)) {
            armParamValues.set(`parameters('${key}')`, value);
        }
    });

    // add the target workspace name
    armParamValues.set(`parameters('workspaceName')`, targetWorkspaceName);

    // Add any overrides.-key1 value1 -key2 value2 -key3 value3
    // Checking length to be > 2 for someone to specify name value, space in between etc. just to be on safe side.
    if (overrideArmParameters != null && overrideArmParameters.length > 2) {
        let cnt = 1;
        if (overrideArmParameters.startsWith('-')) {
            let keyValuePairs : string[] = overrideArmParameters.split("-");

            // Start with 1 as  0th will be a blank string
            for(let i = 1; i < keyValuePairs.length; i++){
                let kv = keyValuePairs[i].trim().split(" ");
                armParamValues.set(`parameters('${kv[0]}')`, sanitize(kv[1]));
            }
        }

        // Means user has give a yaml as input
        else {
            let overrides = yaml.load(overrideArmParameters);
            let overridesObj = JSON.parse(JSON.stringify(overrides));
            for (let key in overridesObj) {
                let paramValue = typeof(overridesObj[key]) == "object" ?
                                    JSON.stringify(overridesObj[key]) : overridesObj[key];
                armParamValues.set(`parameters('${key}')`, paramValue);
            }
        }
    }
    return armParamValues;
}

function sanitize(paramValue: string): string{
    if((paramValue.startsWith("\"") && paramValue.endsWith("\"")) ||
        (paramValue.startsWith("'") && paramValue.endsWith("'"))) {
        paramValue = paramValue.substr(1, paramValue.length -2);
    }

    return paramValue;
}

function removeWorkspaceNameFromResourceName(resourceName: string): string {
    while (resourceName.indexOf("/") >= 0) {
        resourceName = resourceName.substring(resourceName.indexOf("/") + 1);
    }
    return resourceName;
}

function skipArtifactDeployment(artifactType: string): boolean {
    if(DataFactoryType.sqlpool == artifactType || DataFactoryType.bigdatapools == artifactType || DataFactoryType.managedVirtualNetworks == artifactType){
            return true
    }

    return false;
}

function isDefaultLinkedService(artifactName: string): boolean {
    // We need to replace default linked service names
    // From  oldWorkspace-workspaceDefaultStorage to newWorkspace-workspaceDefaultStorage, etc
    // for all references of these default linkedServices.
    // Users cannot manually create linked services which have '-' in their names.
    let defaultLinkedService: string[] = ["-workspacedefaultsqlserver", "-workspacedefaultstorage"];
    artifactName = artifactName.toLowerCase();
    return (artifactName.includes(defaultLinkedService[0]) || artifactName.includes(defaultLinkedService[1]))
}

function changeWorkspaceNameInLinkedService(artifactName: string, targetWS: string, referenceName: boolean = false){

    //From sourceWSName-WorkspaceDefaultSqlServer to TargetWS-WorkspaceDefaultSqlServer
    if(referenceName) return targetWS + artifactName.substr(artifactName.lastIndexOf('-'));

    // From /linkedServices/sourceWS-WorkspaceDefaultSqlServer
    // To /linkedServices/TargetWS-WorkspaceDefaultSqlServer
    return artifactName.substr(0, artifactName.lastIndexOf('/')+1) + targetWS + artifactName.substr(artifactName.lastIndexOf('-'));
}

function replaceReferenceNames(artifactsJson: string, targetWorkspace: string): string{
    let refName = /\"referenceName\":\"([a-z0-9-])+-WorkspaceDefault(Storage|SqlServer)\"/g;

    let newDefaultStorage = `\"referenceName\":\"${targetWorkspace}-WorkspaceDefaultStorage\"`;
    let newDefaultSql = `\"referenceName\":\"${targetWorkspace}-WorkspaceDefaultSqlServer\"`;

    artifactsJson = artifactsJson.replace(refName, (matched, unmatched) => {
        if(matched.includes("WorkspaceDefaultStorage")) return newDefaultStorage;
        return newDefaultSql;
    });

    return artifactsJson;
}

export function getArtifactsFromArmTemplate(armTemplate: string, targetLocation: string, targetWorkspace: string): Resource[][] {
    SystemLogger.info("Begin getting Artifacts From Template");
    //now get the resources out:
    let jsonArmTemplateParams = JSON.parse(armTemplate);
    let artifacts = new Array<Resource>();

    for (let value in jsonArmTemplateParams.resources) {
        let artifactJson = jsonArmTemplateParams.resources[value];
        let artifactType = artifactJson.type as string;
        if (skipArtifactDeployment(artifactType)) {
            //We are not deploying these arm resources anymore
            continue;
        }

        if (artifactType.toLowerCase().indexOf(`sparkjobdefinition`) > -1) {
            let fileLocation = artifactJson['properties']['jobProperties']['file'];
            if (!fileLocation) {
                throw new Error("File is missing in spark job defination ");
            }
        }

        artifactJson.name = removeWorkspaceNameFromResourceName(artifactJson.name);

        for (let i = 0; i < artifactJson.dependsOn.length; i++) {
            let dependancyName: string = artifactJson.dependsOn[i]!;

            if (dependancyName.includes("linkedServices/") && isDefaultLinkedService(dependancyName)) {
                artifactJson.dependsOn[i] = changeWorkspaceNameInLinkedService(artifactJson.dependsOn[i], targetWorkspace);
            }
        }

        let artifactJsonContent: string = JSON.stringify(artifactJson);
        artifactJsonContent = replaceReferenceNames(artifactJsonContent, targetWorkspace);

        let resource: Resource = {
            type: artifactType,
            isDefault: false,
            content: artifactJsonContent,
            name: artifactJson.name,
            dependson: getDependentsFromArtifact(artifactJsonContent)
        };

        if (artifactType.toLowerCase().indexOf(`notebook`) > -1) {
            if (!artifactJson.name) {
                resource.content = convertIpynb2Payload(artifactJson);
            }
        }

        SystemLogger.info(`Found Artifact of type ${artifactType}`);

        if (isDefaultArtifact(JSON.stringify(artifactJson))) {
            resource.isDefault = true;

            if(artifactJson.type.toLowerCase() == DataFactoryType.linkedservice.toLowerCase())
                resource.name = changeWorkspaceNameInLinkedService(resource.name, targetWorkspace, true);

            SystemLogger.info(`\tWill be skipped as its a default resource.`);
        }

        if (!checkIfArtifactExists(resource, artifacts)) {
            artifacts.push(resource);
        }
    }

    return createDependancyTree(artifacts);
}

function createDependancyTree(artifacts: Array<Resource>) {
    let artifactsOrdered = new Array<Resource>();
    let artifactsBatches = new Array<Array<Resource>>();
    let artifactBatch = new Array<Resource>();
    let iteration = 0;

    for (let i = 0; i < artifacts.length; i++) {
        //Replace backslash with \
        artifacts[i].content = replaceBackSlashCode(artifacts[i].content);
        artifacts[i].name = replaceBackSlashCode(artifacts[i].name);
        for(let j=0;j< artifacts[i].dependson.length;j++)
        {
            artifacts[i].dependson[j] = replaceBackSlashCode(artifacts[i].dependson[j]);
        }
    }

    // This is the max times, we will go through the artifacts to look for dependancies. So this is the max level of dependancies supported.
    let MAX_ITERATIONS = 500;
    let MAX_PARALLEL_ARTIFACTS = 20;

    while (artifactsOrdered.length < artifacts.length && iteration < MAX_ITERATIONS) {
        iteration++;
        if (artifactBatch.length > 0) {
            artifactsBatches.push(artifactBatch);
            artifactBatch = new Array<Resource>();
        }

        for (var res = 0; res < artifacts.length; res++) {
            if (checkIfArtifactExists(artifacts[res], artifactsOrdered)) {
                // So this artifact is already added to the ordered list. Skip.
                continue;
            }

            let dependancies = artifacts[res].dependson;
            if (dependancies.length == 0) {
                // Adding to the ordered list as this artifact has no dependancies.
                artifactsOrdered.push(artifacts[res]);
                if (artifactBatch.length >= MAX_PARALLEL_ARTIFACTS) {
                    artifactsBatches.push(artifactBatch);
                    artifactBatch = new Array<Resource>();
                }

                artifactBatch.push(artifacts[res]);
                continue;
            }

            let allDependencyMet = true;
            dependancies.forEach((dep: string) => {
                if (!checkIfNameExists(dep, artifactsOrdered)) {
                    allDependencyMet = false;
                }
            });

            if (allDependencyMet) {
                // Adding to the ordered list as all dependencies are already in the list
                artifactsOrdered.push(artifacts[res]);
                if (artifactBatch.length >= MAX_PARALLEL_ARTIFACTS) {
                    artifactsBatches.push(artifactBatch);
                    artifactBatch = new Array<Resource>();
                }

                artifactBatch.push(artifacts[res]);
            }
        }

        SystemLogger.info(`Iteration ${iteration} Figured out deployment order for ${artifactsOrdered.length} / ${artifacts.length} Artifacts for Dependencies.`);
    }

    if (artifactBatch.length > 0) {
        artifactsBatches.push(artifactBatch);
    }

    if (iteration == MAX_ITERATIONS) {
        SystemLogger.info("Could not figure out full dependancy model for these artifacts. Check template for correctness.");
        SystemLogger.info("-----------------------------------------------------------------------------------------------");
        for (var res = 0; res < artifacts.length; res++) {
            if (!checkIfArtifactExists(artifacts[res], artifactsOrdered)) {
                // So this artifact's dependancy could not be verified.
                SystemLogger.info(`Name: ${artifacts[res].name}, Type: ${artifacts[res].type}`);
                let dependancies = artifacts[res].dependson;
                dependancies.forEach((dep: string) => {
                    if (!checkIfNameExists(dep, artifactsOrdered)) {
                        SystemLogger.info(`    Dependency Not found: ${dep}`);
                    }
                });
            }
        }

        SystemLogger.info("-----------------------------------------------------------------------------------------------");
        throw new Error("Could not figure out full dependancy model. Some dependancies may not exist in template.");
    }

    SystemLogger.info("Complete getting Artifacts From Template");
    return artifactsBatches;
}

function convertIpynb2Payload(payloadObj: any): string {
    SystemLogger.info('Converting payload');
    let payload = {
        "name": uuidv4(),
        "properties": {
            "nbformat": 4,
            "nbformat_minor": 2,
            "bigDataPool": {
                "referenceName": "testProd5",
                "type": "BigDataPoolReference"
            },
            "sessionProperties": {
                "driverMemory": "28g",
                "driverCores": 4,
                "executorMemory": "28g",
                "executorCores": 4,
                "numExecutors": 2
            },
            "metadata": payloadObj['metadata'],
            "cells": payloadObj['cells']
        }
    };
    return JSON.stringify(payload);
}

// Checks if the name provided is part of the artifacts list already in some form.
export function checkIfNameExists(nameToCheck: string, selectedListOfResources: Resource[]): boolean {
    if(nameToCheck.indexOf(`/`)!=0) {
        nameToCheck = `/` + nameToCheck;
    }

    if (nameToCheck.toLowerCase().indexOf(`/managedvirtualnetworks/`) > -1 ||
        nameToCheck.toLowerCase().indexOf(`/sqlpools/`) > -1 ||
        nameToCheck.toLowerCase().indexOf(`/bigdatapools/`) > -1 ||
        nameToCheck.toLowerCase().indexOf(`/managedprivateendpoints/`) > -1) {

        return true;
    }

    for (var res = 0; res < selectedListOfResources.length; res++) {
        let resource: Resource = selectedListOfResources[res];
        let resName: string = resource.name;
        let restype: string = resource.type;
        if (restype.indexOf("Microsoft.Synapse/workspaces/") > -1) {
            restype = restype.substr("Microsoft.Synapse/workspaces/".length);
        }

        // Check if name is same / the last part of the name including workspace etc.
        if (resName.toLowerCase() == nameToCheck.toLowerCase() ||
            (nameToCheck.toLowerCase().indexOf('/' + restype.toLowerCase() + '/' + resName.toLowerCase()) != -1 &&
                nameToCheck.toLowerCase().indexOf('/' + restype.toLowerCase() + '/' + resName.toLowerCase()) + restype.length + resName.length == nameToCheck.length - 2)) {
            return true;
        }
    }

    return false;
}

export function checkIfArtifactExists(resourceToCheck: Resource, selectedListOfResources: Resource[]): boolean {

    for (var res = 0; res < selectedListOfResources.length; res++) {
        let resource: Resource = selectedListOfResources[res];
        if (resource.name == resourceToCheck.name && resource.type == resourceToCheck.type) {
            return true;
        }
    }

    return false;
}

// Gets the list of artifacts this artifact depends on.
export function getDependentsFromArtifact(artifactContent: string): string[] {
    let dependants = new Array<string>();
    let artifact = JSON.parse(artifactContent);

    if(artifactContent.indexOf(`dependsOn`) > -1 && artifact[`dependsOn`] != null) {
        artifact[`dependsOn`].forEach((x: string) => {
            dependants.push(x);
        });
    }

    return dependants;
}