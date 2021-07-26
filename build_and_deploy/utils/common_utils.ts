// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export function isStrNullOrEmpty(val: string): boolean {
    if (val === undefined || val === null || val.trim() === '') {
        return true;
    }
    return false;
};