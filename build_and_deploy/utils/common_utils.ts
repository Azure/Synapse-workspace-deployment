// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {DefaultArtifact} from "./default_artifacts";

export function isStrNullOrEmpty(val: string): boolean {
    if (val === undefined || val === null || val.trim() === '') {
        return true;
    }
    return false;
}

export function isDefaultArtifact(artifact: string): boolean{
    let artifactJson = JSON.parse(artifact);
    return DefaultArtifact.LIST.some((e: DefaultArtifact) => e.matches(artifactJson.name, artifactJson.properties.type, artifactJson.type));
}
