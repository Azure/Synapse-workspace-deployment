// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {DataFactoryType} from "./artifacts_enum";

export function isStrNullOrEmpty(val: string): boolean {
    if (val === undefined || val === null || val.trim() === '') {
        return true;
    }
    return false;
}

export function isDefaultArtifact(artifact: string): boolean{
    let artifactJson = JSON.parse(artifact);
    if (artifactJson.type == DataFactoryType.managedPrivateEndpoints)
        return DefaultArtifact.DefaultArtifacts.some((e: DefaultArtifact) => e.matches(artifactJson.name, artifactJson.properties.groupId, artifactJson.type));
    return DefaultArtifact.DefaultArtifacts.some((e: DefaultArtifact) => e.matches(artifactJson.name, artifactJson.properties.type, artifactJson.type));

}

export class DefaultArtifact {
    public static DefaultArtifacts: DefaultArtifact[] = [
        new DefaultArtifact("workspacedefaultsqlserver", "azuresqldw", DataFactoryType.linkedservice),
        new DefaultArtifact("workspacedefaultstorage", "azureblobfs", DataFactoryType.linkedservice),
        new DefaultArtifact("workspacesystemidentity", "managedidentity", DataFactoryType.credential),
        new DefaultArtifact("synapse-ws-sql", "sql", DataFactoryType.managedPrivateEndpoints),
        new DefaultArtifact("synapse-ws-sqlOnDemand", "sqlOnDemand", DataFactoryType.managedPrivateEndpoints),
        new DefaultArtifact("synapse-ws-kusto", "Kusto", DataFactoryType.managedPrivateEndpoints),
    ];

    private constructor(public name: string, public type: string, public dataFactoryType: DataFactoryType) {
    }

    public matches(name: string, type: string, dataFactoryType: string): boolean {
        return name.toLowerCase().includes(this.name.toLowerCase())
            && type.toLowerCase() === this.type.toLowerCase()
            && dataFactoryType.toLowerCase() === this.dataFactoryType.toLowerCase();
    }
}