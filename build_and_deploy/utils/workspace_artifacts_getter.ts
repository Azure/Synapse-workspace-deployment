import { ArtifactClient } from '../clients/artifacts_client';
import * as deployUtils from './deploy_utils';
import * as httpClient from 'typed-rest-client/HttpClient';
import * as httpInterfaces from 'typed-rest-client/Interfaces';
import { checkIfArtifactExists, checkIfNameExists, Resource } from './arm_template_utils';
import { Artifact } from './artifacts_enum';
import {SystemLogger} from "./logger";
import {isDefaultArtifact} from "./common_utils";

const userAgent: string = 'synapse-github-cicd-deploy-task'
const requestOptions: httpInterfaces.IRequestOptions = {};
const client: httpClient.HttpClient = new httpClient.HttpClient(userAgent, undefined, requestOptions);

const artifactTypesToQuery:Artifact[] = [
    Artifact.credential,
    Artifact.dataflow,
    Artifact.dataset,
    Artifact.integrationruntime,
    Artifact.linkedservice,
    Artifact.notebook,
    Artifact.pipeline,
    Artifact.sparkjobdefinition,
    Artifact.sqlscript,
    Artifact.trigger
];

export async function getArtifactsFromWorkspaceOfType(artifactTypeToQuery: Artifact, targetWorkspaceName: string, environment: string): Promise<Resource[]> {
    var params = await deployUtils.getParams(true, environment);
    var token =  params.bearer;

    var headers: httpInterfaces.IHeaders = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': userAgent
    }

    let artifacts = new Array<Resource>();
    var resourceUrl = getResourceFromWorkspaceUrl(targetWorkspaceName, environment, artifactTypeToQuery.toString());

    var resp = new Promise<string>((resolve, reject) => {
        client.get(resourceUrl, headers).then(async (res) => {
            var resStatus = res.message.statusCode;

            if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                SystemLogger.info(`Failed to fetch workspace info, status: ${resStatus}; status message: ${res.message.statusMessage}`);
                return reject("Failed to fetch workspace info " + res.message.statusMessage);
            }
            var body = await res.readBody();

            if (!body) {
                SystemLogger.info("No response body for url: " + resourceUrl);
                return reject("Failed to fetch workspace info response");
            }
            return resolve(body);

        }, (reason) => {
            SystemLogger.info('Failed to fetch artifacts from workspace: '+ reason);
            return reject(deployUtils.DeployStatus.failed);
        });
    });

    var resourcesString = await resp;
    var resourcesJson = JSON.parse(resourcesString);

    for (var rep in resourcesJson.value)
    {
        let artifactJson = resourcesJson.value[rep];
        let artifactJsonContent = JSON.stringify(artifactJson);
        let artifactName =  artifactJson.name;
        let resource: Resource = {
            type: artifactJson.type,
            isDefault: false,
            content: artifactJsonContent,
            name: artifactName,
            dependson: getDependentsFromArtifactFromWorkspace(artifactJsonContent)
        };

        if(isDefaultArtifact(artifactJsonContent)){
            resource.isDefault = true;
        }

        artifacts.push(resource);
    }

    return artifacts;
}

export async function getArtifactsFromWorkspace(targetWorkspaceName: string, environment: string): Promise<Resource[]> {
    SystemLogger.info(`Getting Artifacts from workspace: ${targetWorkspaceName}.`);
    let artifacts = new Array<Resource>();
    for(let x=0; x < artifactTypesToQuery.length; x++)
    {
        let artifactsOfType = await getArtifactsFromWorkspaceOfType(artifactTypesToQuery[x], targetWorkspaceName, environment);
        artifactsOfType.forEach((value)=>{
            artifacts.push(value);
        });
    }

    return artifacts;
}

export function getArtifactsToDeleteFromWorkspace(
    artifactsInWorkspace: Resource[],
    artifactsToDeploy: Resource[][],
    typeMap: Map<string, Artifact>): Resource[]
{
    SystemLogger.info("Getting Artifacts which should be deleted from workspace.");
    let artifactsToDelete = new Array<Resource>();
    let resourceFound: boolean = true;

    artifactsInWorkspace.forEach((checkResource)=>{
        resourceFound = false;

        let checkResourceType = checkResource.type;
        checkResourceType = checkResourceType.replace(` `,``);
        checkResourceType = checkResourceType.toLowerCase();

        let artifactTypeToDeploy: Artifact = typeMap.get(checkResourceType)!;

        if (artifactTypeToDeploy != Artifact.sqlpool &&
            artifactTypeToDeploy != Artifact.bigdatapools &&
            artifactTypeToDeploy != Artifact.managedvirtualnetworks &&
            artifactTypeToDeploy != Artifact.managedprivateendpoints &&
            artifactTypeToDeploy != Artifact.integrationruntime &&
            checkResource.isDefault != true)
        {
            for(let i=0;i< artifactsToDeploy.length;i++)
            {
                for(let j=0;j< artifactsToDeploy[i].length;j++)
                {
                    let resouce = artifactsToDeploy[i][j];

                    if(resouce.name.toLowerCase() == checkResource.name.toLowerCase() &&
                        resouce.type.toLowerCase() == checkResource.type.toLowerCase())
                    {
                        resourceFound = true;
                        break;
                    }
                }

                if(resourceFound)
                {
                    break;
                }
            }

            if(!resourceFound)
            {
                SystemLogger.info(`Artifact not found in template. deleting ${checkResource.name} of type ${checkResource.type}`);
                artifactsToDelete.push(checkResource);
            }
        }
    });

    return artifactsToDelete;
}

function countOfArtifactDependancy(checkArtifact: Resource, selectedListOfResources: Resource[]): number
{
    let result: number =0;
    for (var res = 0; res < selectedListOfResources.length; res++) {
        let resource: Resource = selectedListOfResources[res];

        let resName: string = checkArtifact.name;
        let restype: string = checkArtifact.type;
        if(restype.indexOf("Microsoft.Synapse/workspaces/")> -1){
            restype = restype.substr("Microsoft.Synapse/workspaces/".length);
        }
        let nameToCheck = `${restype}/${resName}`;
        nameToCheck = nameToCheck.toLowerCase();

        for(let i=0;i< resource.dependson.length;i++)
        {
            if( resource.dependson[i].toLowerCase() == nameToCheck)
            {
                result++;
                break;
            }

        }
    }

    return result;
}

export function getArtifactsToDeleteFromWorkspaceInOrder(
    artifactsToDelete: Resource[]): Resource[][]
{
    SystemLogger.info("Computing dependancies for Artifacts which should be deleted from workspace.");

    let artifactsBatches = new Array<Array<Resource>>();
    let artifactBatch = new Array<Resource>();
    let artifactsOrdered = new Array<Resource>();

    // This will be a diff logic than the deploy one. We only need to check dependancy within the list.
    // If A is a dependency for B, C when B is in this list and C is not. We will delete A and then B.

    // This is the max times, we will go through the artifacts to look for dependancies. So this is the max level of dependancies supported.
    let MAX_ITERATIONS = 500;
    let MAX_PARALLEL_ARTIFACTS = 20;

    var count = 0;
    var iteration = 0;

    while(count < artifactsToDelete.length && iteration < MAX_ITERATIONS)
    {
        iteration++;
        if(artifactBatch.length>0)
        {
            artifactsBatches.push(artifactBatch);
            artifactBatch = new Array<Resource>();
        }

        for (var res = 0; res < artifactsToDelete.length; res++)
        {
            if(checkIfArtifactExists(artifactsToDelete[res], artifactsOrdered))
            {
                // So this artifact is already added to the ordered list. Skip.
                continue;
            }

            let allDependencyMet = false;
            // check if, in all other artifacts being deleted, something depends on this artifact
            //its ok if not at all or if it is in artifactsOrdered, but not in artifactBatch
            let dependencyInArtifactsToDelete: number = countOfArtifactDependancy(artifactsToDelete[res], artifactsToDelete);
            let dependencyInArtifactsOrdered: number = countOfArtifactDependancy(artifactsToDelete[res], artifactsOrdered);
            let dependancyInCurrentBatch: number = countOfArtifactDependancy(artifactsToDelete[res], artifactBatch);

            if(dependencyInArtifactsToDelete==0)
            {
                //nothing in the delete list depends on it
                allDependencyMet = true;
            }
            else if(dependancyInCurrentBatch==0 && dependencyInArtifactsOrdered == dependencyInArtifactsToDelete)
            {
                allDependencyMet = true;
            }

            if(allDependencyMet){
                // Adding to the ordered list as all dependancies are already in the list
                artifactsOrdered.push(artifactsToDelete[res]);
                if(artifactBatch.length>= MAX_PARALLEL_ARTIFACTS){
                    artifactsBatches.push(artifactBatch);
                    artifactBatch = new Array<Resource>();
                }

                artifactBatch.push(artifactsToDelete[res]);
            }
        }

        SystemLogger.info(`Iteration ${iteration} Figured out deletion order for ${artifactsOrdered.length} / ${artifactsToDelete.length} Artifacts for Dependancies.`);
        count = artifactsOrdered.length;
    }

    if(artifactBatch.length > 0){
        artifactsBatches.push(artifactBatch);
    }

    if(iteration == MAX_ITERATIONS)
    {
        SystemLogger.info("Could not figure out full dependancy model for these artifact for delete. Check template and target workspace for correctness.");
        SystemLogger.info("-----------------------------------------------------------------------------------------------");
        for (var res = 0; res < artifactsToDelete.length; res++)
        {
            if(!checkIfArtifactExists(artifactsToDelete[res], artifactsOrdered))
            {
                // So this artifact's dependancy could not be verified.
                SystemLogger.info(`Name: ${artifactsToDelete[res].name}, Type: ${artifactsToDelete[res].type}`);
            }
        }

        throw new Error("Could not figure out full dependancy model for deleting artifacts not in template. For the list above, check the template to see which artifacts depends on them.");
    }

    return artifactsBatches;
}

function getResourceFromWorkspaceUrl(targetWorkspaceName: string, environment: string, resourceType: string): string
{
    var url = ArtifactClient.getUrlByEnvironment(targetWorkspaceName, environment);
    url = `${url}/${resourceType}s?api-version=2019-06-01-preview`
    return url;
}

// Gets the list of artifacts this artifact depends on.
export function getDependentsFromArtifactFromWorkspace(artifactContent: string): string[] {
    let dependants = new Array<string> ();
    crawlArtifacts(JSON.parse(artifactContent), dependants, "referenceName");
    return dependants;
}

function crawlArtifacts(artifactContent: object, dependants: string[], key: string): boolean {

    if (!artifactContent || typeof artifactContent !== "object") {
        return false;
    }

    const keys = Object.keys(artifactContent);
    for(let i = 0; i < keys.length; i++) {
        if (keys[i] === key ) {
            // @ts-ignore
            let depType = artifactContent["type"];
            // @ts-ignore
            let depName = artifactContent["referenceName"];
            dependants.push(`${depType}/${depName}`);
        }

        // @ts-ignore
        const path = crawlArtifacts(artifactContent[keys[i]], dependants, key);
        if (path) {
            return true;
        }
    }
    return false;
}