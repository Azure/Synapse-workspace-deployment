// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


export interface PackageFiles {
    templateFile: string,
    parametersFile: string,
    armOverrides: string
}

export interface PackageFilesContent {
    templateFileContent: string,
    parametersFileContent: string,
    armOverridesContent: string
}

export class PackageFile {
    fs = require("fs");
    packageFiles: PackageFiles;

    constructor(templateFile: string, parametersFile: string, armOverrides: string) {
        this.packageFiles = {
            templateFile: templateFile,
            parametersFile: parametersFile,
            armOverrides: armOverrides
        };
    }

    public getPackageFiles() :PackageFilesContent {
        let parametersFileContent = this.getPackageFileContent(this.packageFiles.parametersFile);
        let templateFileContent = this.getPackageFileContent(this.packageFiles.templateFile);
        let armOverridesContent = this.getPackageFileContent(this.packageFiles.armOverrides, true);
        return {
            templateFileContent: templateFileContent,
            parametersFileContent: parametersFileContent,
            armOverridesContent: armOverridesContent
        };
    }

    private getPackageFileContent(filePath: string, returnBlank: boolean = false) {
        let fileContent = "";
        if (!this.fs.lstatSync(filePath).isDirectory()) {

            if(!this.fs.existsSync(filePath)){
                if(returnBlank){
                    return "";
                }
            }

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