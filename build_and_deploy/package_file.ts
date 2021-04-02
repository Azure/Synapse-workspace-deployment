// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


export interface PackageFiles {
    templateFile: string,
    parametersFile: string
}

export interface PackageFilesContent {
    templateFileContent: string,
    parametersFileContent: string
}

export class PackageFile {
    fs = require("fs");
    packageFiles: PackageFiles;

    constructor(templateFile: string, parametersFile: string) {
        this.packageFiles = {
            templateFile: templateFile,
            parametersFile: parametersFile
        };
    }

    public getPackageFiles() :PackageFilesContent {
        let parametersFileContent = this.getPackageFileContent(this.packageFiles.parametersFile);
        let templateFileContent = this.getPackageFileContent(this.packageFiles.templateFile);
        return {
            templateFileContent: templateFileContent,
            parametersFileContent: parametersFileContent
        };
    }

    private getPackageFileContent(filePath: string) {
        let fileContent = "";
        if (!this.fs.lstatSync(filePath).isDirectory()) {
            try {
                fileContent = this.fs.readFileSync(filePath, 'utf8');
            }
            catch (error) {
                throw new Error("Failed to read file" + filePath);
            }
        } else {
            throw new Error("Input file path instead of directory");
        }
        return fileContent;
    }
}