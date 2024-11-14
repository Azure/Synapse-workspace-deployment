// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';
import {spawn} from "child_process";
import {SystemLogger} from "../utils/logger";
import { HttpsProxyAgent } from 'https-proxy-agent';

export class BundleManager {
    private static readonly prodBundleUrl = 'https://web.azuresynapse.net/assets/cmd-api/main.js';
    private static readonly ppeBundleUrl = 'https://web-ci.azuresynapse.net/assets/cmd-api/main.js';
    private static readonly defaultBundleDir: string = 'downloads';
    private static readonly defaultBundleName: string = 'main.js';
    private _bundleUrl = BundleManager.prodBundleUrl;
    private _source = "Prod";
    public static readonly defaultBundleFilePath = path.join(process.cwd(), BundleManager.defaultBundleDir, BundleManager.defaultBundleName);


    constructor(source: string = 'prod') {
        this._source = source;
        if(source.toLowerCase() == "ppe"){
            this._bundleUrl = BundleManager.ppeBundleUrl;
            SystemLogger.info("Setting bundle source as PPE");
        }

        SystemLogger.info("Bundle source : " + this._bundleUrl);
    }

    public async invokeBundle(): Promise<void>{
        try{
            if (!fs.existsSync(BundleManager.defaultBundleDir)) {
                fs.mkdirSync(BundleManager.defaultBundleDir);
            }
            const file = fs.createWriteStream(BundleManager.defaultBundleFilePath);
            return new Promise((resolve, reject) => {
                SystemLogger.info("Downloading asset file");
                const proxy = process.env.HTTPS_PROXY;
                const agent = proxy ? new HttpsProxyAgent(proxy) : undefined;
                https.get(this._bundleUrl, { agent }, (response) => {
                    response.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        SystemLogger.info("Asset file downloaded at : "+ BundleManager.defaultBundleFilePath);
                        return resolve();
                    });
                });
            });
        }
        catch(ex){
            SystemLogger.info("Bundle manager failed to download asset file.");
            throw ex;
        }

    }

    public static async ExecuteShellCommand(cmd: string){
        SystemLogger.info("Executing shell command");
        SystemLogger.info("Command : "+ cmd);
        try {

            const result = await new Promise((resolve, reject) => {
                let command = spawn(cmd, {shell: true});

                command.stdout.on('data', data => {
                    SystemLogger.info("Stdout: "+ data.toString());
                });

                command.stderr.on('data', data => {
                    SystemLogger.info("Stderr: "+ data.toString());
                });

                command.on('error', err => {
                    if(err){
                        SystemLogger.info("Error: "+ err.toString());
                        return reject("Shell execution failed.");
                    }
                });

                command.on('close', code => {
                    if(code != 0){
                        return reject("Shell execution failed.");
                    }
                    else{
                        return resolve("Shell command execution is successful.");
                    }
                });
            });

            if (result == "Shell execution failed."){
                throw new Error("Shell execution failed.");
            }
            SystemLogger.info("Shell command execution is successful.");
        } catch (e) {
            SystemLogger.info("Shell execution failed.");
            throw e;
        }
    }
}

