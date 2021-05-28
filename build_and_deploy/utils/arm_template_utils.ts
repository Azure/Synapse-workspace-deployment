// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


import * as yaml from 'js-yaml';
import { v4 as uuidv4 } from 'uuid';
import { SystemLogger } from './logger';

// Just 2 random Guids to replace backslash in parameters file.
const backslash: string = "7FD5C49AB6444AC1ACCD56B689067FBBAD85B74B0D8943CA887371839DFECF85";
const quote: string = "48C16896271D483C916DE1C4EC6F24DBC945F900F9AB464B828EC8005364D322";


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
    let defaultArtifacts = findDefaultArtifacts(armTemplate, targetWorkspaceName);
    armTemplate = JSON.stringify(JSON.parse(armTemplate));

    return getArtifactsFromArmTemplate(armTemplate, targetLocation, defaultArtifacts);
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

    while (outputString.indexOf(`\\\"`) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(`\\\"`)) + quote + outputString.substr(outputString.indexOf(`\\\"`) + 2);
    }

    while (outputString.indexOf(`\\`) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(`\\`)) + backslash + outputString.substr(outputString.indexOf(`\\`) + 1);
    }

    return outputString;
}

export function findDefaultArtifacts(armTemplate: string, targetworkspace: string): Map<string, string> {
    let defaultArtifacts = new Map<string, string>();

    let jsonArmTemplateParams = JSON.parse(armTemplate);

    for (let value in jsonArmTemplateParams.resources) {
        let artifactJson = jsonArmTemplateParams.resources[value];
        let artifactName: string = artifactJson.name;
        if (artifactName.toLowerCase().indexOf("workspacedefaultsqlserver") >= 0 ||
            artifactName.toLowerCase().indexOf("workspacedefaultstorage") >= 0) {
            if (artifactName.indexOf("/") > 0) {
                //example `${targetworkspace}/sourceworkspace-WorkspaceDefaultStorage`;
                let nametoreplace = artifactName.substr(artifactName.lastIndexOf("/") + 1);
                nametoreplace = nametoreplace.substr(0, nametoreplace.lastIndexOf("-"));

                let replacedName = artifactName.replace(nametoreplace, targetworkspace);
                replacedName = replacedName.substr(replacedName.lastIndexOf("/") + 1);

                nametoreplace = artifactName.substr(artifactName.lastIndexOf("/") + 1);

                if (nametoreplace == replacedName) {
                    // source and target workspace are same.
                    continue;
                }

                defaultArtifacts.set(nametoreplace, replacedName);
            }
        }
    }

    return defaultArtifacts;
}

function replaceParameters(armParams: string, armTemplate: string, overrideArmParameters: string, targetWorkspaceName: string): string {
    SystemLogger.info("Begin replacement of parameters in the template");
    // Build parameters
    let armParamValues = getParameterValuesFromArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);

    armParamValues.forEach((value, key) => {
        if(value.indexOf(`parameters`)>-1) {
            armParamValues.forEach((valueInside, keyInside) => {
                if(value.indexOf(keyInside) > -1) {
                    armParamValues.set(key, value.split('['+keyInside+']').join(`'${valueInside}'`));
                }
                if(value.indexOf(keyInside) > -1) {
                    armParamValues.set(key, value.split(keyInside).join(`'${valueInside}'`));
                }
            });
        }
    });

    armParamValues.forEach((value, key) => {
        if(value.indexOf("concat")>-1) {
            armParamValues.set(key, replaceStrByRegex(value));
        }
    });


    // Replace parameterValues
    armParamValues.forEach((value, key) => {
        armTemplate = armTemplate.split('[' + key + ']').join(`${value}`);
        armTemplate = armTemplate.split(key).join(`'${value}'`);
    });

    SystemLogger.info("Complete replacement of parameters in the template");
    return armTemplate;
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
function replaceStrByRegex(str: string): string {
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
        armParamValues.set(`parameters('${value}')`, jsonArmParams.parameters[value].value);
    }

    // Convert arm template to json, look at the default parameters if any and add missing ones to the map we have
    let jsonArmTemplateParams = JSON.parse(armTemplate);
    let armTemplateParamValues = new Map<string, string>()
    for (let value in jsonArmTemplateParams.parameters) {
        armTemplateParamValues.set(`parameters('${value}')`, jsonArmTemplateParams.parameters[value].defaultValue);
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
            while (overrideArmParameters.length > 0 && overrideArmParameters.indexOf('-') > -1 && overrideArmParameters.indexOf(' ') > -1 && cnt < 1000) {
                cnt = cnt + 1;
                let startIndex = overrideArmParameters.indexOf('-') + '-'.length;
                let endIndex = overrideArmParameters.indexOf(' ');
                let paramName = overrideArmParameters.substring(startIndex, endIndex).trim();
                overrideArmParameters = overrideArmParameters.substring(endIndex);
                startIndex = overrideArmParameters.indexOf(' ') + ' '.length;
                endIndex = overrideArmParameters.indexOf(' -', startIndex);
                if (endIndex == -1) {
                    endIndex = overrideArmParameters.length;
                }
                let paramValue = sanitize(overrideArmParameters.substring(startIndex, endIndex).trim());

                armParamValues.set(`parameters('${paramName}')`, paramValue);
                overrideArmParameters = overrideArmParameters.substring(endIndex).trim();
            }
        }

        // Means user has give a yaml as input
        else {
            let overrides = yaml.load(overrideArmParameters);
            let overridesObj = JSON.parse(JSON.stringify(overrides));
            for (let key in overridesObj) {
                let paramValue = JSON.stringify(overridesObj[key]);
                armParamValues.set(`parameters('${key}')`, sanitize(paramValue));
            }
        }
    }

    return armParamValues;
}

function sanitize(paramValue: string): string {
    if ((paramValue.startsWith("\"") && paramValue.endsWith("\"")) ||
        (paramValue.startsWith("'") && paramValue.endsWith("'"))) {
        paramValue = paramValue.substr(1, paramValue.length - 2);
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
    if (artifactType.toLowerCase().indexOf(`sqlpools`) > -1 ||
        artifactType.toLowerCase().indexOf(`bigdatapools`) > -1 ||
        artifactType.toLowerCase().indexOf(`managedvirtualnetworks`) > -1 ||
        artifactType.toLowerCase().indexOf(`managedprivateendpoints`) > -1) {

        return true;
    }

    return false;
}

export function getArtifactsFromArmTemplate(armTemplate: string, targetLocation: string, defaultArtifacts: Map<string, string>): Resource[][] {
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

            defaultArtifacts.forEach((value, key) => {
                if (dependancyName.indexOf(key) > -1 &&
                    dependancyName.indexOf("linkedServices") > -1) {
                    artifactJson.dependsOn[i] = artifactJson.dependsOn[i].replace(key, value);
                }
            });
        }


        let artifactProperties = artifactJson.properties;
        if (artifactProperties != null) {
            let linkedServiceName = artifactProperties.linkedServiceName;
            if (linkedServiceName != null) {
                let referenceName = linkedServiceName.referenceName;
                if (referenceName != null) {
                    defaultArtifacts.forEach((value, key) => {
                        if (referenceName.indexOf(key) > -1) {
                            artifactJson.properties.linkedServiceName.referenceName = artifactJson.properties.linkedServiceName.referenceName.replace(key, value);
                        }
                    });
                }
            }
        }

        for (var artifactJsonValue in artifactJson.properties) {
            if (artifactJsonValue != "typeProperties" ||
                JSON.stringify(artifactJson.properties.typeProperties).indexOf(`LinkedServiceReference`) == -1) {
                continue;
            }

            for (var artifactJsonTypeProperties in artifactJson.properties.typeProperties) {
                if (JSON.stringify(artifactJson.properties.typeProperties[`${artifactJsonTypeProperties}`]).indexOf(`LinkedServiceReference`) == -1) {
                    continue;
                }

                let artifactJsonTypePropertiesJson = artifactJson.properties.typeProperties[`${artifactJsonTypeProperties}`];
                for (var artifactJsonTypePropertiesValues in artifactJsonTypePropertiesJson) {
                    let artifactJsonTypePropertiesValueslinkedService =
                        artifactJson.properties.typeProperties[`${artifactJsonTypeProperties}`][artifactJsonTypePropertiesValues].linkedService;
                    if (artifactJsonTypePropertiesValueslinkedService == null) {
                        continue;
                    }
                    let artifactJsonTypePropertiesValueslinkedServiceType =
                        artifactJson.properties.typeProperties[`${artifactJsonTypeProperties}`][artifactJsonTypePropertiesValues].linkedService.type;
                    if (artifactJsonTypePropertiesValueslinkedServiceType == null) {
                        continue;
                    }

                    if (artifactJson.properties.typeProperties[`${artifactJsonTypeProperties}`][artifactJsonTypePropertiesValues].linkedService.type
                        == "LinkedServiceReference") {
                        defaultArtifacts.forEach((value, key) => {
                            if (artifactJson.properties.typeProperties[`${artifactJsonTypeProperties}`][artifactJsonTypePropertiesValues].linkedService.referenceName.indexOf(key) > -1) {
                                artifactJson.properties.typeProperties[`${artifactJsonTypeProperties}`][artifactJsonTypePropertiesValues].linkedService.referenceName
                                    = artifactJson.properties.typeProperties[`${artifactJsonTypeProperties}`][artifactJsonTypePropertiesValues].linkedService.referenceName.replace(key, value);
                            }
                        });
                    }
                }
            }
        }

        let artifactJsonContent: string = JSON.stringify(artifactJson);

        defaultArtifacts.forEach((value, key) => {
            let refName: string = `"referenceName":"${key}"`;
            let refNameReplacement: string = `"referenceName":"${value}"`;
            while (artifactJsonContent.indexOf(refName) > -1) {
                artifactJsonContent = artifactJsonContent.replace(refName, refNameReplacement);
            }
        });

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

        if (artifactJson.name.toLowerCase().indexOf("workspacedefaultsqlserver") >= 0 ||
            artifactJson.name.toLowerCase().indexOf("workspacedefaultstorage") >= 0) {
            resource.isDefault = true;
            defaultArtifacts.forEach((value, key) => {
                resource.name = resource.name.replace(key, value);
            });

            console.log(`\tWill be skipped as its a default resource.`);
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
        for (let j = 0; j < artifacts[i].dependson.length; j++) {
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