module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5131:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtifactClient = exports.typeMap = void 0;
var core = __importStar(__nccwpck_require__(4120));
var httpClient = __importStar(__nccwpck_require__(6291));
var artifacts_enum_1 = __nccwpck_require__(5724);
var deploy_utils_1 = __nccwpck_require__(3850);
var logger_1 = __nccwpck_require__(4659);
exports.typeMap = new Map([
    [artifacts_enum_1.DataFactoryType.dataset.toLowerCase(), artifacts_enum_1.Artifact.dataset],
    [artifacts_enum_1.DataFactoryType.dataflow.toLowerCase(), artifacts_enum_1.Artifact.dataflow],
    [artifacts_enum_1.DataFactoryType.linkedservice.toLowerCase(), artifacts_enum_1.Artifact.linkedservice],
    [artifacts_enum_1.DataFactoryType.credential.toLowerCase(), artifacts_enum_1.Artifact.credential],
    [artifacts_enum_1.DataFactoryType.integrationruntime.toLowerCase(), artifacts_enum_1.Artifact.integrationruntime],
    [artifacts_enum_1.DataFactoryType.notebook.toLowerCase(), artifacts_enum_1.Artifact.notebook],
    [artifacts_enum_1.DataFactoryType.pipeline.toLowerCase(), artifacts_enum_1.Artifact.pipeline],
    [artifacts_enum_1.DataFactoryType.sparkjobdefinition.toLowerCase(), artifacts_enum_1.Artifact.sparkjobdefinition],
    [artifacts_enum_1.DataFactoryType.bigdatapools.toLowerCase(), artifacts_enum_1.Artifact.bigdatapools],
    [artifacts_enum_1.DataFactoryType.sqlpool.toLowerCase(), artifacts_enum_1.Artifact.sqlpool],
    [artifacts_enum_1.DataFactoryType.sqlscript.toLowerCase(), artifacts_enum_1.Artifact.sqlscript],
    [artifacts_enum_1.DataFactoryType.trigger.toLowerCase(), artifacts_enum_1.Artifact.trigger],
    [artifacts_enum_1.DataFactoryType.managedVirtualNetworks.toLowerCase(), artifacts_enum_1.Artifact.managedvirtualnetworks],
    [artifacts_enum_1.DataFactoryType.managedPrivateEndpoints.toLowerCase(), artifacts_enum_1.Artifact.managedprivateendpoints],
    [artifacts_enum_1.DataFactoryType.kqlScript.toLowerCase(), artifacts_enum_1.Artifact.kqlScript]
]);
var ArtifactClient = /** @class */ (function () {
    function ArtifactClient(params) {
        this.requestOptions = {};
        this.apiVersion = 'api-version=2019-06-01-preview';
        this.nameTag = 'name';
        this.params = params;
        this.requestOptions.ignoreSslError = true;
        this.client = new httpClient.HttpClient('synapse-git-cicd-deploy-task', undefined, this.requestOptions);
        this.deploymentTrackingRequests = new Array();
    }
    ArtifactClient.prototype.getParams = function () {
        return this.params;
    };
    ArtifactClient.prototype.deployArtifact = function (resourceType, payload, workspace, environment) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl, param, token, base_url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseUrl = this.getBaseurl(workspace, environment, resourceType);
                        return [4 /*yield*/, deploy_utils_1.getParams(true, environment)];
                    case 1:
                        param = _a.sent();
                        token = param.bearer;
                        base_url = param.activeDirectoryEndpointUrl;
                        base_url = base_url.substr(0, base_url.length - 2);
                        switch (resourceType) {
                            case artifacts_enum_1.Artifact.notebook:
                                return [2 /*return*/, this.deployNotebook(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.sparkjobdefinition:
                                return [2 /*return*/, this.deploySparkJobDefinition(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.sqlscript:
                                return [2 /*return*/, this.deploySqlScript(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.dataset:
                                return [2 /*return*/, this.deployDataset(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.pipeline:
                                return [2 /*return*/, this.deployPipeline(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.dataflow:
                                return [2 /*return*/, this.deployDataflow(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.trigger:
                                return [2 /*return*/, this.deployTrigger(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.linkedservice:
                                return [2 /*return*/, this.deployLinkedservice(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.integrationruntime:
                                return [2 /*return*/, this.deployIntegrationruntime(base_url, payload, token)];
                            case artifacts_enum_1.Artifact.credential:
                                return [2 /*return*/, this.deployCredential(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.kqlScript:
                                return [2 /*return*/, this.deployKqlScript(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.managedprivateendpoints:
                                return [2 /*return*/, this.deployManagedPrivateEndpoint(baseUrl, payload, token)];
                            default:
                                return [2 /*return*/, deploy_utils_1.DeployStatus.skipped];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deleteArtifact = function (resourceType, payload, workspace, environment) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl, param, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseUrl = this.getBaseurl(workspace, environment, resourceType);
                        return [4 /*yield*/, deploy_utils_1.getParams(true, environment)];
                    case 1:
                        param = _a.sent();
                        token = param.bearer;
                        return [4 /*yield*/, this.artifactDeletionTask(baseUrl, resourceType, payload, token)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ArtifactClient.prototype.WaitForAllDeployments = function (isDelete) {
        return __awaiter(this, void 0, void 0, function () {
            var i, deploymentTrackingRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.deploymentTrackingRequests.length)) return [3 /*break*/, 6];
                        deploymentTrackingRequest = this.deploymentTrackingRequests[i];
                        if (!isDelete) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.checkStatusForDelete(deploymentTrackingRequest.url, deploymentTrackingRequest.name, deploymentTrackingRequest.token)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.checkStatus(deploymentTrackingRequest.url, deploymentTrackingRequest.name, deploymentTrackingRequest.token)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        while (this.deploymentTrackingRequests.length > 0) {
                            this.deploymentTrackingRequests.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.getStatusUrl = function (baseUrl, artifactype, operationId) {
        var url = this.getCommonPath(baseUrl, artifactype);
        return url + ("/operationResults/" + operationId + "?" + this.apiVersion);
    };
    ArtifactClient.prototype.buildArtifactUrl = function (baseUrl, artifactype, artifactNameValue) {
        var url = this.getCommonPath(baseUrl, artifactype);
        while (artifactNameValue.indexOf(' ') > -1)
            artifactNameValue = artifactNameValue.replace(' ', '%20');
        return url + ("/" + artifactype + "/" + artifactNameValue + "?" + this.apiVersion);
    };
    ArtifactClient.prototype.getCommonPath = function (baseUrl, artifactype) {
        var url;
        if (artifactype === artifacts_enum_1.Artifact.integrationruntime + "s") {
            url = baseUrl + "/subscriptions/" + this.params.subscriptionId + "/resourceGroups/" + this.params.resourceGroup;
            url = url + ("/providers/Microsoft.Synapse/workspaces/" + core.getInput('TargetWorkspaceName'));
        }
        else {
            url = "" + baseUrl;
        }
        return url;
    };
    ArtifactClient.prototype.deployCredential = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.credential.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        throw new Error("Credential deployment failed " + JSON.stringify(err_1));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployIntegrationruntime = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var params, base_url, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, deploy_utils_1.getParams()];
                    case 1:
                        params = _a.sent();
                        token = params.bearer;
                        base_url = params.resourceManagerEndpointUrl;
                        base_url = base_url.substr(0, base_url.length - 1);
                        return [4 /*yield*/, this.artifactDeploymentTask(base_url, artifacts_enum_1.Artifact.integrationruntime.toString() + "s", payload, token)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("Integration runtime deployment failed " + JSON.stringify(err_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployKqlScript = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.kqlScript.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_3 = _a.sent();
                        logger_1.SystemLogger.info(err_3);
                        throw new Error("Credential deployment failed " + JSON.stringify(err_3));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployLinkedservice = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.linkedservice.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_4 = _a.sent();
                        throw new Error("Linked service deployment failed " + JSON.stringify(err_4));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployTrigger = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.trigger.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_5 = _a.sent();
                        throw new Error("Trigger deployment failed " + JSON.stringify(err_5));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployDataflow = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.dataflow.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_6 = _a.sent();
                        throw new Error("Data flow deployment failed " + JSON.stringify(err_6));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployPipeline = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.pipeline.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_7 = _a.sent();
                        throw new Error("Data set deployment failed " + JSON.stringify(err_7));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployDataset = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.dataset.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_8 = _a.sent();
                        throw new Error("Data set deployment failed " + JSON.stringify(err_8));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deploySqlScript = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.sqlscript.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_9 = _a.sent();
                        throw new Error("SQL script deployment status " + JSON.stringify(err_9));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployNotebook = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.notebook.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_10 = _a.sent();
                        throw new Error("Notebook deployment status " + JSON.stringify(err_10));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deploySparkJobDefinition = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.sparkjobdefinition.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_11 = _a.sent();
                        throw new Error("SparkJobDefination deployment status " + JSON.stringify(err_11));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployManagedPrivateEndpoint = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.managedprivateendpoints.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_12 = _a.sent();
                        throw new Error("SparkJobDefination deployment status " + JSON.stringify(err_12));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.artifactDeploymentTask = function (baseUrl, resourceType, payloadObj, token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var url, payload;
                        var _this = this;
                        return __generator(this, function (_a) {
                            url = this.buildArtifactUrl(baseUrl, resourceType, payloadObj.name);
                            payload = payloadObj.content;
                            this.client.put(url, payload, this.getHeaders(token)).then(function (res) {
                                var resStatus = res.message.statusCode;
                                logger_1.SystemLogger.info("For Artifact: " + payloadObj.name + ": ArtifactDeploymentTask status: " + resStatus + "; status message: " + res.message.statusMessage);
                                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                    // Remove this after testing
                                    res.readBody().then(function (body) {
                                        if (!!body) {
                                            var responseJson = JSON.parse(body);
                                            logger_1.SystemLogger.info("Deploy artifact failed: " + JSON.stringify(responseJson));
                                        }
                                    });
                                    return reject(deploy_utils_1.DeployStatus.failed);
                                }
                                var location = res.message.headers.location;
                                res.readBody().then(function (body) { return __awaiter(_this, void 0, void 0, function () {
                                    var responseJson, operationId, deploymentTrackingRequest;
                                    return __generator(this, function (_a) {
                                        responseJson = JSON.parse(body);
                                        operationId = responseJson['operationId'];
                                        if (!!operationId) {
                                            try {
                                                if (!location) {
                                                    location = this.getStatusUrl(baseUrl, resourceType, operationId);
                                                }
                                                deploymentTrackingRequest = {
                                                    url: location,
                                                    name: payloadObj.name,
                                                    token: token
                                                };
                                                this.deploymentTrackingRequests.push(deploymentTrackingRequest);
                                            }
                                            catch (err) {
                                                logger_1.SystemLogger.info("For Artifact: " + payloadObj.name + ": Deployment failed with error: " + JSON.stringify(err));
                                                return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                            }
                                            return [2 /*return*/, resolve(deploy_utils_1.DeployStatus.success)];
                                        }
                                        else {
                                            return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                        }
                                        return [2 /*return*/];
                                    });
                                }); });
                            }, function (reason) {
                                logger_1.SystemLogger.info("For Artifact: " + payloadObj.name + ": Artifact Deployment failed: " + reason);
                                return reject(deploy_utils_1.DeployStatus.failed);
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ArtifactClient.prototype.artifactDeletionTask = function (baseUrl, resourceType, payloadObj, token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var url;
                        var _this = this;
                        return __generator(this, function (_a) {
                            url = this.buildArtifactUrl(baseUrl, resourceType + "s", payloadObj.name);
                            this.client.del(url, this.getHeaders(token)).then(function (res) {
                                var resStatus = res.message.statusCode;
                                logger_1.SystemLogger.info("For Artifact: " + payloadObj.name + ": ArtifactDeletionTask status: " + resStatus + "; status message: " + res.message.statusMessage);
                                res.readBody().then(function (body) {
                                    if (!!body) {
                                        var responseJson = JSON.parse(body);
                                    }
                                });
                                var location = res.message.headers.location;
                                var deploymentTrackingRequest = {
                                    url: location,
                                    name: payloadObj.name,
                                    token: token
                                };
                                _this.deploymentTrackingRequests.push(deploymentTrackingRequest);
                                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                    return reject(deploy_utils_1.DeployStatus.failed);
                                }
                                return resolve(deploy_utils_1.DeployStatus.success);
                            }, function (reason) {
                                logger_1.SystemLogger.info("Artifact Delete failed: " + reason);
                                return reject(deploy_utils_1.DeployStatus.failed);
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ArtifactClient.prototype.checkStatus = function (url, name, token) {
        return __awaiter(this, void 0, void 0, function () {
            var timeout, delayMilliSecs, currentTime, nbName, res, resStatus, body, responseJson, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeout = new Date().getTime() + (60000 * 20);
                        delayMilliSecs = 30000;
                        _a.label = 1;
                    case 1:
                        if (false) {}
                        currentTime = new Date().getTime();
                        if (timeout < currentTime) {
                            logger_1.SystemLogger.info('Current time: ' + currentTime);
                            throw new Error("Timeout error in checkStatus");
                        }
                        nbName = '';
                        return [4 /*yield*/, this.client.get(url, this.getHeaders(token))];
                    case 2:
                        res = _a.sent();
                        resStatus = res.message.statusCode;
                        logger_1.SystemLogger.info("For artifact: " + name + ": Checkstatus: " + resStatus + "; status message: " + res.message.statusMessage);
                        if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                            throw new Error("Checkstatus => status: " + resStatus + "; status message: " + res.message.statusMessage);
                        }
                        return [4 /*yield*/, res.readBody()];
                    case 3:
                        body = _a.sent();
                        if (!!body) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.delay(delayMilliSecs)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 5:
                        responseJson = JSON.parse(body);
                        status = responseJson['status'];
                        if (!(!!status && status == 'Failed')) return [3 /*break*/, 6];
                        logger_1.SystemLogger.info("For artifact: " + name + ": Artifact Deployment status: " + status);
                        throw new Error("Failed to fetch the deployment status " + JSON.stringify(responseJson['error']));
                    case 6:
                        if (!(!!status && status == 'InProgress')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.delay(delayMilliSecs)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 8:
                        nbName = responseJson['name'];
                        if (nbName === name) {
                            logger_1.SystemLogger.info("Artifact " + name + " deployed successfully.");
                            return [3 /*break*/, 9];
                        }
                        else {
                            throw new Error('Artifiact deployment validation failed');
                        }
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.checkStatusForDelete = function (url, name, token) {
        return __awaiter(this, void 0, void 0, function () {
            var timeout, delayMilliSecs, currentTime, nbName, res, resStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeout = new Date().getTime() + (60000 * 20);
                        delayMilliSecs = 30000;
                        _a.label = 1;
                    case 1:
                        if (false) {}
                        currentTime = new Date().getTime();
                        if (timeout < currentTime) {
                            logger_1.SystemLogger.info("Current time: ' " + currentTime);
                            throw new Error("Timeout error in checkStatus");
                        }
                        nbName = '';
                        return [4 /*yield*/, this.client.get(url, this.getHeaders(token))];
                    case 2:
                        res = _a.sent();
                        resStatus = res.message.statusCode;
                        logger_1.SystemLogger.info("For Artifact: " + name + ": Checkstatus: " + resStatus + "; status message: " + res.message.statusMessage);
                        if (!(resStatus != 200 && resStatus < 203)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.delay(delayMilliSecs)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    };
    ArtifactClient.prototype.getHeaders = function (token) {
        var _a;
        var headers = {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json',
            'User-Agent': (_a = this.client.userAgent) === null || _a === void 0 ? void 0 : _a.toString()
        };
        return headers;
    };
    ArtifactClient.prototype.getAudienceUrl = function (env) {
        switch (env) {
            case deploy_utils_1.Env.prod.toString():
                return "https://dev.azuresynapse.net";
            case deploy_utils_1.Env.mooncake.toString():
                return "https://dev.azuresynapse.azure.cn";
            case deploy_utils_1.Env.usnat.toString():
                return "https://dev.azuresynapse.usgovcloudapi.net";
            default:
                throw new Error('Environment validation failed. Valid choice are Azure Public, Azure China and Azure US Government');
        }
    };
    ArtifactClient.prototype.getBaseurl = function (workspace, environment, resourceType) {
        return ArtifactClient.getUrlByEnvironment(workspace, environment);
    };
    ArtifactClient.getUrlByEnvironment = function (workspace, environment) {
        switch (environment) {
            case deploy_utils_1.Env.prod.toString():
                return "https://" + workspace + ".dev.azuresynapse.net";
            case deploy_utils_1.Env.mooncake.toString():
                return "https://" + workspace + ".dev.azuresynapse.azure.cn";
            case deploy_utils_1.Env.usnat.toString():
                return "https://" + workspace + ".dev.azuresynapse.usgovcloudapi.net";
            default:
                throw new Error('Environment validation failed. Valid choice are Azure Public, Azure China and Azure US Government');
        }
    };
    return ArtifactClient;
}());
exports.ArtifactClient = ArtifactClient;
//# sourceMappingURL=artifacts_client.js.map

/***/ }),

/***/ 4114:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = void 0;
var core = __importStar(__nccwpck_require__(4120));
var artifacts_client_1 = __nccwpck_require__(5131);
var orchestrator_1 = __nccwpck_require__(2833);
var package_file_1 = __nccwpck_require__(5337);
var deploy_utils_1 = __nccwpck_require__(3850);
var logger_1 = __nccwpck_require__(4659);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var targetWorkspace, templateFile, parametersFile, overrideArmParameters, environment, deleteArtifactsNotInTemplate, deleteArtifactsNotInTemplateString, packageFiles, params, artifactClient, orchestrator, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    targetWorkspace = core.getInput('TargetWorkspaceName');
                    templateFile = core.getInput("TemplateFile");
                    parametersFile = core.getInput("ParametersFile");
                    overrideArmParameters = core.getInput('OverrideArmParameters');
                    environment = core.getInput('Environment');
                    deleteArtifactsNotInTemplate = false;
                    deleteArtifactsNotInTemplateString = core.getInput("DeleteArtifactsNotInTemplate");
                    if (deleteArtifactsNotInTemplateString.toLowerCase() == "true") {
                        deleteArtifactsNotInTemplate = true;
                    }
                    logger_1.SystemLogger.info("DeleteArtifactsNotInTemplate=" + deleteArtifactsNotInTemplate);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    packageFiles = new package_file_1.PackageFile(templateFile, parametersFile, overrideArmParameters);
                    return [4 /*yield*/, deploy_utils_1.getParams()];
                case 2:
                    params = _a.sent();
                    artifactClient = new artifacts_client_1.ArtifactClient(params);
                    logger_1.SystemLogger.setLogger(new logger_1.ActionLogger(true));
                    orchestrator = new orchestrator_1.Orchestrator(packageFiles, artifactClient, targetWorkspace, environment, deleteArtifactsNotInTemplate);
                    return [4 /*yield*/, orchestrator.orchestrateFromPublishBranch()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    throw new Error(err_1.message);
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
main()
    .then(function () {
    process.exit(0);
})
    .catch(function (err) {
    core.info("Action failed -> " + err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 6717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(1588);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 4120:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const command_1 = __nccwpck_require__(6717);
const file_command_1 = __nccwpck_require__(5399);
const utils_1 = __nccwpck_require__(1588);
const os = __importStar(__nccwpck_require__(2087));
const path = __importStar(__nccwpck_require__(5622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 5399:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(5747));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(1588);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 1588:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 4547:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var GetIntrinsic = __nccwpck_require__(8822);

var callBind = __nccwpck_require__(1628);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 1628:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var bind = __nccwpck_require__(8731);
var GetIntrinsic = __nccwpck_require__(8822);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 7902:
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 8731:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var implementation = __nccwpck_require__(7902);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 8822:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __nccwpck_require__(3130)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __nccwpck_require__(8731);
var hasOwn = __nccwpck_require__(4280);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 3130:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __nccwpck_require__(7653);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 7653:
/***/ ((module) => {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 4280:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var bind = __nccwpck_require__(8731);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 2096:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



var yaml = __nccwpck_require__(4804);


module.exports = yaml;


/***/ }),

/***/ 4804:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



var loader = __nccwpck_require__(7156);
var dumper = __nccwpck_require__(7873);


function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}


module.exports.Type = __nccwpck_require__(9886);
module.exports.Schema = __nccwpck_require__(6732);
module.exports.FAILSAFE_SCHEMA = __nccwpck_require__(8744);
module.exports.JSON_SCHEMA = __nccwpck_require__(4446);
module.exports.CORE_SCHEMA = __nccwpck_require__(7055);
module.exports.DEFAULT_SAFE_SCHEMA = __nccwpck_require__(9128);
module.exports.DEFAULT_FULL_SCHEMA = __nccwpck_require__(9026);
module.exports.load                = loader.load;
module.exports.loadAll             = loader.loadAll;
module.exports.safeLoad            = loader.safeLoad;
module.exports.safeLoadAll         = loader.safeLoadAll;
module.exports.dump                = dumper.dump;
module.exports.safeDump            = dumper.safeDump;
module.exports.YAMLException = __nccwpck_require__(4663);

// Deprecated schema names from JS-YAML 2.0.x
module.exports.MINIMAL_SCHEMA = __nccwpck_require__(8744);
module.exports.SAFE_SCHEMA = __nccwpck_require__(9128);
module.exports.DEFAULT_SCHEMA = __nccwpck_require__(9026);

// Deprecated functions from JS-YAML 1.x.x
module.exports.scan           = deprecated('scan');
module.exports.parse          = deprecated('parse');
module.exports.compose        = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');


/***/ }),

/***/ 4555:
/***/ ((module) => {

"use strict";



function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


module.exports.isNothing      = isNothing;
module.exports.isObject       = isObject;
module.exports.toArray        = toArray;
module.exports.repeat         = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend         = extend;


/***/ }),

/***/ 7873:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*eslint-disable no-use-before-define*/

var common              = __nccwpck_require__(4555);
var YAMLException       = __nccwpck_require__(4663);
var DEFAULT_FULL_SCHEMA = __nccwpck_require__(9026);
var DEFAULT_SAFE_SCHEMA = __nccwpck_require__(9128);

var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}

function State(options) {
  this.schema        = options['schema'] || DEFAULT_FULL_SCHEMA;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// [24] b-line-feed       ::=     #xA    /* LF */
// [25] b-carriage-return ::=     #xD    /* CR */
// [3]  c-byte-order-mark ::=     #xFEFF
function isNsChar(c) {
  return isPrintable(c) && !isWhitespace(c)
    // byte-order-mark
    && c !== 0xFEFF
    // b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// Simplified test for values allowed after the first character in plain style.
function isPlainSafe(c, prev) {
  // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
  // where nb-char ::= c-printable - b-char - c-byte-order-mark.
  return isPrintable(c) && c !== 0xFEFF
    // - c-flow-indicator
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // - ":" - "#"
    // /* An ns-char preceding */ "#"
    && c !== CHAR_COLON
    && ((c !== CHAR_SHARP) || (prev && isNsChar(prev)));
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  return isPrintable(c) && c !== 0xFEFF
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
  var i;
  var char, prev_char;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(string.charCodeAt(0))
          && !isWhitespace(string.charCodeAt(string.length - 1));

  if (singleLineOnly) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
      plain = plain && isPlainSafe(char, prev_char);
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
      plain = plain && isPlainSafe(char, prev_char);
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    return plain && !testAmbiguousType(string)
      ? STYLE_PLAIN : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey) {
  state.dump = (function () {
    if (string.length === 0) {
      return "''";
    }
    if (!state.noCompatMode &&
        DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
      return "'" + string + "'";
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string, lineWidth) + '"';
      default:
        throw new YAMLException('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char, nextChar;
  var escapeSeq;

  for (var i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
    if (char >= 0xD800 && char <= 0xDBFF/* high surrogate */) {
      nextChar = string.charCodeAt(i + 1);
      if (nextChar >= 0xDC00 && nextChar <= 0xDFFF/* low surrogate */) {
        // Combine the surrogate pair and store it escaped.
        result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
        // Advance index one extra since we already used that char here.
        i++; continue;
      }
    }
    escapeSeq = ESCAPE_SEQUENCES[char];
    result += !escapeSeq && isPrintable(char)
      ? string[i]
      : escapeSeq || encodeHex(char);
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level, object[index], false, false)) {
      if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level + 1, object[index], true, true)) {
      if (!compact || index !== 0) {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (index !== 0) pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new YAMLException('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || index !== 0) {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      state.tag = explicit ? type.tag : '?';

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      var arrayLevel = (state.noArrayIndent && (level > 0)) ? level - 1 : level;
      if (block && (state.dump.length !== 0)) {
        writeBlockSequence(state, arrayLevel, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, arrayLevel, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey);
      }
    } else {
      if (state.skipInvalid) return false;
      throw new YAMLException('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      state.dump = '!<' + state.tag + '> ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

  return '';
}

function safeDump(input, options) {
  return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}

module.exports.dump     = dump;
module.exports.safeDump = safeDump;


/***/ }),

/***/ 4663:
/***/ ((module) => {

"use strict";
// YAML error class. http://stackoverflow.com/questions/8458984
//


function YAMLException(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;


YAMLException.prototype.toString = function toString(compact) {
  var result = this.name + ': ';

  result += this.reason || '(unknown reason)';

  if (!compact && this.mark) {
    result += ' ' + this.mark.toString();
  }

  return result;
};


module.exports = YAMLException;


/***/ }),

/***/ 7156:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*eslint-disable max-len,no-use-before-define*/

var common              = __nccwpck_require__(4555);
var YAMLException       = __nccwpck_require__(4663);
var Mark                = __nccwpck_require__(9639);
var DEFAULT_SAFE_SCHEMA = __nccwpck_require__(9128);
var DEFAULT_FULL_SCHEMA = __nccwpck_require__(9026);


var _hasOwnProperty = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || DEFAULT_FULL_SCHEMA;
  this.onWarning = options['onWarning'] || null;
  this.legacy    = options['legacy']    || false;
  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  return new YAMLException(
    message,
    new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty.call(overridableKeys, keyNode) &&
        _hasOwnProperty.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }
    _result[keyNode] = valueNode;
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = {},
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _pos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = {},
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.
    _pos = state.position;

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }

    } else {
      break; // Reading is done. Go to the epilogue.
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if (state.lineIndent > nodeIndent && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag !== null && state.tag !== '!') {
    if (state.tag === '?') {
      // Implicit resolving is not allowed for non-scalar types, and '?'
      // non-specific tag is only automatically assigned to plain scalars.
      //
      // We only need to check kind conformity in case user explicitly assigns '?'
      // tag, for example like this: "!<?> [0]"
      //
      if (state.result !== null && state.kind !== 'scalar') {
        throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
      }

      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
        type = state.implicitTypes[typeIndex];

        if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
          state.result = type.construct(state.result);
          state.tag = type.tag;
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];

      if (state.result !== null && type.kind !== state.kind) {
        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
      }

      if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
      } else {
        state.result = type.construct(state.result);
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new YAMLException('expected a single document in the stream, but found more');
}


function safeLoadAll(input, iterator, options) {
  if (typeof iterator === 'object' && iterator !== null && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  return loadAll(input, iterator, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}


function safeLoad(input, options) {
  return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}


module.exports.loadAll     = loadAll;
module.exports.load        = load;
module.exports.safeLoadAll = safeLoadAll;
module.exports.safeLoad    = safeLoad;


/***/ }),

/***/ 9639:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



var common = __nccwpck_require__(4555);


function Mark(name, buffer, position, line, column) {
  this.name     = name;
  this.buffer   = buffer;
  this.position = position;
  this.line     = line;
  this.column   = column;
}


Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
  var head, start, tail, end, snippet;

  if (!this.buffer) return null;

  indent = indent || 4;
  maxLength = maxLength || 75;

  head = '';
  start = this.position;

  while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
    start -= 1;
    if (this.position - start > (maxLength / 2 - 1)) {
      head = ' ... ';
      start += 5;
      break;
    }
  }

  tail = '';
  end = this.position;

  while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
    end += 1;
    if (end - this.position > (maxLength / 2 - 1)) {
      tail = ' ... ';
      end -= 5;
      break;
    }
  }

  snippet = this.buffer.slice(start, end);

  return common.repeat(' ', indent) + head + snippet + tail + '\n' +
         common.repeat(' ', indent + this.position - start + head.length) + '^';
};


Mark.prototype.toString = function toString(compact) {
  var snippet, where = '';

  if (this.name) {
    where += 'in "' + this.name + '" ';
  }

  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

  if (!compact) {
    snippet = this.getSnippet();

    if (snippet) {
      where += ':\n' + snippet;
    }
  }

  return where;
};


module.exports = Mark;


/***/ }),

/***/ 6732:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*eslint-disable max-len*/

var common        = __nccwpck_require__(4555);
var YAMLException = __nccwpck_require__(4663);
var Type          = __nccwpck_require__(9886);


function compileList(schema, name, result) {
  var exclude = [];

  schema.include.forEach(function (includedSchema) {
    result = compileList(includedSchema, name, result);
  });

  schema[name].forEach(function (currentType) {
    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
        exclude.push(previousIndex);
      }
    });

    result.push(currentType);
  });

  return result.filter(function (type, index) {
    return exclude.indexOf(index) === -1;
  });
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
      }, index, length;

  function collectType(type) {
    result[type.kind][type.tag] = result['fallback'][type.tag] = type;
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema(definition) {
  this.include  = definition.include  || [];
  this.implicit = definition.implicit || [];
  this.explicit = definition.explicit || [];

  this.implicit.forEach(function (type) {
    if (type.loadKind && type.loadKind !== 'scalar') {
      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }
  });

  this.compiledImplicit = compileList(this, 'implicit', []);
  this.compiledExplicit = compileList(this, 'explicit', []);
  this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
}


Schema.DEFAULT = null;


Schema.create = function createSchema() {
  var schemas, types;

  switch (arguments.length) {
    case 1:
      schemas = Schema.DEFAULT;
      types = arguments[0];
      break;

    case 2:
      schemas = arguments[0];
      types = arguments[1];
      break;

    default:
      throw new YAMLException('Wrong number of arguments for Schema.create function');
  }

  schemas = common.toArray(schemas);
  types = common.toArray(types);

  if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
    throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
  }

  if (!types.every(function (type) { return type instanceof Type; })) {
    throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
  }

  return new Schema({
    include: schemas,
    explicit: types
  });
};


module.exports = Schema;


/***/ }),

/***/ 7055:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.





var Schema = __nccwpck_require__(6732);


module.exports = new Schema({
  include: [
    __nccwpck_require__(4446)
  ]
});


/***/ }),

/***/ 9026:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.





var Schema = __nccwpck_require__(6732);


module.exports = Schema.DEFAULT = new Schema({
  include: [
    __nccwpck_require__(9128)
  ],
  explicit: [
    __nccwpck_require__(5564),
    __nccwpck_require__(9960),
    __nccwpck_require__(8022)
  ]
});


/***/ }),

/***/ 9128:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)





var Schema = __nccwpck_require__(6732);


module.exports = new Schema({
  include: [
    __nccwpck_require__(7055)
  ],
  implicit: [
    __nccwpck_require__(5286),
    __nccwpck_require__(1374)
  ],
  explicit: [
    __nccwpck_require__(7107),
    __nccwpck_require__(4765),
    __nccwpck_require__(8168),
    __nccwpck_require__(7557)
  ]
});


/***/ }),

/***/ 8744:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346





var Schema = __nccwpck_require__(6732);


module.exports = new Schema({
  explicit: [
    __nccwpck_require__(9285),
    __nccwpck_require__(1927),
    __nccwpck_require__(9634)
  ]
});


/***/ }),

/***/ 4446:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.





var Schema = __nccwpck_require__(6732);


module.exports = new Schema({
  include: [
    __nccwpck_require__(8744)
  ],
  implicit: [
    __nccwpck_require__(4939),
    __nccwpck_require__(7972),
    __nccwpck_require__(1461),
    __nccwpck_require__(4771)
  ]
});


/***/ }),

/***/ 9886:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var YAMLException = __nccwpck_require__(4663);

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.tag          = tag;
  this.kind         = options['kind']         || null;
  this.resolve      = options['resolve']      || function () { return true; };
  this.construct    = options['construct']    || function (data) { return data; };
  this.instanceOf   = options['instanceOf']   || null;
  this.predicate    = options['predicate']    || null;
  this.represent    = options['represent']    || null;
  this.defaultStyle = options['defaultStyle'] || null;
  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

module.exports = Type;


/***/ }),

/***/ 7107:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*eslint-disable no-bitwise*/

var NodeBuffer;

try {
  // A trick for browserified version, to not include `Buffer` shim
  var _require = require;
  NodeBuffer = _require('buffer').Buffer;
} catch (__) {}

var Type       = __nccwpck_require__(9886);


// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  // Wrap into Buffer for NodeJS and leave Array for browser
  if (NodeBuffer) {
    // Support node 6.+ Buffer API when available
    return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
  }

  return result;
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(object) {
  return NodeBuffer && NodeBuffer.isBuffer(object);
}

module.exports = new Type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});


/***/ }),

/***/ 7972:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

module.exports = new Type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});


/***/ }),

/***/ 4771:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var common = __nccwpck_require__(4555);
var Type   = __nccwpck_require__(9886);

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // 20:59
  '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign, base, digits;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;
  digits = [];

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;

  } else if (value.indexOf(':') >= 0) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseFloat(v, 10));
    });

    value = 0.0;
    base = 1;

    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });

    return sign * value;

  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});


/***/ }),

/***/ 1461:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var common = __nccwpck_require__(4555);
var Type   = __nccwpck_require__(9886);

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }

    // base 8
    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_') continue;
      if (!isOctCode(data.charCodeAt(index))) return false;
      hasDigits = true;
    }
    return hasDigits && ch !== '_';
  }

  // base 10 (except 0) or base 60

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (ch === ':') break;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  // if !base60 - done;
  if (ch !== ':') return true;

  // base60 almost not used, no needs to optimize
  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch, base, digits = [];

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value, 16);
    return sign * parseInt(value, 8);
  }

  if (value.indexOf(':') !== -1) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseInt(v, 10));
    });

    value = 0;
    base = 1;

    digits.forEach(function (d) {
      value += (d * base);
      base *= 60;
    });

    return sign * value;

  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0'  + obj.toString(8) : '-0'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});


/***/ }),

/***/ 8022:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var esprima;

// Browserified version does not have esprima
//
// 1. For node.js just require module as deps
// 2. For browser try to require mudule via external AMD system.
//    If not found - try to fallback to window.esprima. If not
//    found too - then fail to parse.
//
try {
  // workaround to exclude package from browserify list.
  var _require = require;
  esprima = _require('esprima');
} catch (_) {
  /* eslint-disable no-redeclare */
  /* global window */
  if (typeof window !== 'undefined') esprima = window.esprima;
}

var Type = __nccwpck_require__(9886);

function resolveJavascriptFunction(data) {
  if (data === null) return false;

  try {
    var source = '(' + data + ')',
        ast    = esprima.parse(source, { range: true });

    if (ast.type                    !== 'Program'             ||
        ast.body.length             !== 1                     ||
        ast.body[0].type            !== 'ExpressionStatement' ||
        (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
          ast.body[0].expression.type !== 'FunctionExpression')) {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

function constructJavascriptFunction(data) {
  /*jslint evil:true*/

  var source = '(' + data + ')',
      ast    = esprima.parse(source, { range: true }),
      params = [],
      body;

  if (ast.type                    !== 'Program'             ||
      ast.body.length             !== 1                     ||
      ast.body[0].type            !== 'ExpressionStatement' ||
      (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
        ast.body[0].expression.type !== 'FunctionExpression')) {
    throw new Error('Failed to resolve function');
  }

  ast.body[0].expression.params.forEach(function (param) {
    params.push(param.name);
  });

  body = ast.body[0].expression.body.range;

  // Esprima's ranges include the first '{' and the last '}' characters on
  // function expressions. So cut them out.
  if (ast.body[0].expression.body.type === 'BlockStatement') {
    /*eslint-disable no-new-func*/
    return new Function(params, source.slice(body[0] + 1, body[1] - 1));
  }
  // ES6 arrow functions can omit the BlockStatement. In that case, just return
  // the body.
  /*eslint-disable no-new-func*/
  return new Function(params, 'return ' + source.slice(body[0], body[1]));
}

function representJavascriptFunction(object /*, style*/) {
  return object.toString();
}

function isFunction(object) {
  return Object.prototype.toString.call(object) === '[object Function]';
}

module.exports = new Type('tag:yaml.org,2002:js/function', {
  kind: 'scalar',
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});


/***/ }),

/***/ 9960:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

function resolveJavascriptRegExp(data) {
  if (data === null) return false;
  if (data.length === 0) return false;

  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // if regexp starts with '/' it can have modifiers and must be properly closed
  // `/foo/gim` - modifiers tail can be maximum 3 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];

    if (modifiers.length > 3) return false;
    // if expression starts with /, is should be properly terminated
    if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
  }

  return true;
}

function constructJavascriptRegExp(data) {
  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // `/foo/gim` - tail can be maximum 4 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];
    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
  }

  return new RegExp(regexp, modifiers);
}

function representJavascriptRegExp(object /*, style*/) {
  var result = '/' + object.source + '/';

  if (object.global) result += 'g';
  if (object.multiline) result += 'm';
  if (object.ignoreCase) result += 'i';

  return result;
}

function isRegExp(object) {
  return Object.prototype.toString.call(object) === '[object RegExp]';
}

module.exports = new Type('tag:yaml.org,2002:js/regexp', {
  kind: 'scalar',
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});


/***/ }),

/***/ 5564:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

function resolveJavascriptUndefined() {
  return true;
}

function constructJavascriptUndefined() {
  /*eslint-disable no-undefined*/
  return undefined;
}

function representJavascriptUndefined() {
  return '';
}

function isUndefined(object) {
  return typeof object === 'undefined';
}

module.exports = new Type('tag:yaml.org,2002:js/undefined', {
  kind: 'scalar',
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});


/***/ }),

/***/ 9634:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

module.exports = new Type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});


/***/ }),

/***/ 1374:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});


/***/ }),

/***/ 4939:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

module.exports = new Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; }
  },
  defaultStyle: 'lowercase'
});


/***/ }),

/***/ 4765:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});


/***/ }),

/***/ 8168:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

var _toString = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});


/***/ }),

/***/ 1927:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

module.exports = new Type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});


/***/ }),

/***/ 7557:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

module.exports = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});


/***/ }),

/***/ 9285:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

module.exports = new Type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});


/***/ }),

/***/ 5286:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(9886);

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});


/***/ }),

/***/ 2701:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' ? Symbol.prototype.toString : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var inspectCustom = __nccwpck_require__(7090).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = symToString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        if (ys.length === 0) { return '{}'; }
        if (indent) {
            return '{' + indentedJoin(ys, indent) + '}';
        }
        return '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]'; }
function isDate(obj) { return toStr(obj) === '[object Date]'; }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }
function isError(obj) { return toStr(obj) === '[object Error]'; }
function isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }
function isString(obj) { return toStr(obj) === '[object String]'; }
function isNumber(obj) { return toStr(obj) === '[object Number]'; }
function isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        var syms = gOPS(obj);
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ 7090:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(1669).inspect;


/***/ }),

/***/ 1922:
/***/ ((module) => {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ 5324:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var stringify = __nccwpck_require__(2861);
var parse = __nccwpck_require__(5797);
var formats = __nccwpck_require__(1922);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 5797:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1748);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 2861:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var getSideChannel = __nccwpck_require__(9201);
var utils = __nccwpck_require__(1748);
var formats = __nccwpck_require__(1922);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    if (sideChannel.has(object)) {
        throw new RangeError('Cyclic object value');
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = typeof key === 'object' && key.value !== undefined ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, true);
        var valueSideChannel = getSideChannel();
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 1748:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var formats = __nccwpck_require__(1922);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 9201:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var GetIntrinsic = __nccwpck_require__(8822);
var callBound = __nccwpck_require__(4547);
var inspect = __nccwpck_require__(2701);

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ 8737:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(4530);


/***/ }),

/***/ 4530:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(1631);
var tls = __nccwpck_require__(4016);
var http = __nccwpck_require__(8605);
var https = __nccwpck_require__(7211);
var events = __nccwpck_require__(8614);
var assert = __nccwpck_require__(2357);
var util = __nccwpck_require__(1669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 6291:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const url = __nccwpck_require__(8835);
const http = __nccwpck_require__(8605);
const https = __nccwpck_require__(7211);
const util = __nccwpck_require__(8338);
let fs;
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
const HttpRedirectCodes = [HttpCodes.MovedPermanently, HttpCodes.ResourceMoved, HttpCodes.SeeOther, HttpCodes.TemporaryRedirect, HttpCodes.PermanentRedirect];
const HttpResponseRetryCodes = [HttpCodes.BadGateway, HttpCodes.ServiceUnavailable, HttpCodes.GatewayTimeout];
const NetworkRetryErrors = ['ECONNRESET', 'ENOTFOUND', 'ESOCKETTIMEDOUT', 'ETIMEDOUT', 'ECONNREFUSED'];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let buffer = Buffer.alloc(0);
            const encodingCharset = util.obtainContentCharset(this);
            // Extract Encoding from header: 'content-encoding'
            // Match `gzip`, `gzip, deflate` variations of GZIP encoding
            const contentEncoding = this.message.headers['content-encoding'] || '';
            const isGzippedEncoded = new RegExp('(gzip$)|(gzip, *deflate)').test(contentEncoding);
            this.message.on('data', function (data) {
                const chunk = (typeof data === 'string') ? Buffer.from(data, encodingCharset) : data;
                buffer = Buffer.concat([buffer, chunk]);
            }).on('end', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isGzippedEncoded) { // Process GZipped Response Body HERE
                        const gunzippedBody = yield util.decompressGzippedContent(buffer, encodingCharset);
                        resolve(gunzippedBody);
                    }
                    else {
                        resolve(buffer.toString(encodingCharset));
                    }
                });
            }).on('error', function (err) {
                reject(err);
            });
        }));
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = url.parse(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
var EnvironmentVariables;
(function (EnvironmentVariables) {
    EnvironmentVariables["HTTP_PROXY"] = "HTTP_PROXY";
    EnvironmentVariables["HTTPS_PROXY"] = "HTTPS_PROXY";
    EnvironmentVariables["NO_PROXY"] = "NO_PROXY";
})(EnvironmentVariables || (EnvironmentVariables = {}));
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        let no_proxy = process.env[EnvironmentVariables.NO_PROXY];
        if (no_proxy) {
            this._httpProxyBypassHosts = [];
            no_proxy.split(',').forEach(bypass => {
                this._httpProxyBypassHosts.push(util.buildProxyBypassRegexFromEnv(bypass));
            });
        }
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            this._httpProxy = requestOptions.proxy;
            if (requestOptions.proxy && requestOptions.proxy.proxyBypassHosts) {
                this._httpProxyBypassHosts = [];
                requestOptions.proxy.proxyBypassHosts.forEach(bypass => {
                    this._httpProxyBypassHosts.push(new RegExp(bypass, 'i'));
                });
            }
            this._certConfig = requestOptions.cert;
            if (this._certConfig) {
                // If using cert, need fs
                fs = __nccwpck_require__(5747);
                // cache the cert content into memory, so we don't have to read it from disk every time
                if (this._certConfig.caFile && fs.existsSync(this._certConfig.caFile)) {
                    this._ca = fs.readFileSync(this._certConfig.caFile, 'utf8');
                }
                if (this._certConfig.certFile && fs.existsSync(this._certConfig.certFile)) {
                    this._cert = fs.readFileSync(this._certConfig.certFile, 'utf8');
                }
                if (this._certConfig.keyFile && fs.existsSync(this._certConfig.keyFile)) {
                    this._key = fs.readFileSync(this._certConfig.keyFile, 'utf8');
                }
            }
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error("Client has already been disposed.");
            }
            let parsedUrl = url.parse(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            let maxTries = (this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1) ? this._maxRetries + 1 : 1;
            let numTries = 0;
            let response;
            while (numTries < maxTries) {
                try {
                    response = yield this.requestRaw(info, data);
                }
                catch (err) {
                    numTries++;
                    if (err && err.code && NetworkRetryErrors.indexOf(err.code) > -1 && numTries < maxTries) {
                        yield this._performExponentialBackoff(numTries);
                        continue;
                    }
                    throw err;
                }
                // Check if it's an authentication challenge
                if (response && response.message && response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (let i = 0; i < this.handlers.length; i++) {
                        if (this.handlers[i].canHandleAuthentication(response)) {
                            authenticationHandler = this.handlers[i];
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1
                    && this._allowRedirects
                    && redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers["location"];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    let parsedRedirectUrl = url.parse(redirectUrl);
                    if (parsedUrl.protocol == 'https:' && parsedUrl.protocol != parsedRedirectUrl.protocol && !this._allowRedirectDowngrade) {
                        throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            }
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof (data) === 'string') {
            info.options.headers["Content-Length"] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', (sock) => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.destroy();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof (data) === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof (data) !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
        info.options.path = (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.timeout = (this.requestOptions && this.requestOptions.socketTimeout) || this._socketTimeout;
        this._socketTimeout = info.options.timeout;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers["user-agent"] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers && !this._isPresigned(url.format(requestUrl))) {
            this.handlers.forEach((handler) => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _isPresigned(requestUrl) {
        if (this.requestOptions && this.requestOptions.presignedUrlPatterns) {
            const patterns = this.requestOptions.presignedUrlPatterns;
            for (let i = 0; i < patterns.length; i++) {
                if (requestUrl.match(patterns[i])) {
                    return true;
                }
            }
        }
        return false;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => (c[k.toLowerCase()] = obj[k], c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxy = this._getProxy(parsedUrl);
        let useProxy = proxy.proxyUrl && proxy.proxyUrl.hostname && !this._isMatchInBypassProxyList(parsedUrl);
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __nccwpck_require__(8737);
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    proxyAuth: proxy.proxyAuth,
                    host: proxy.proxyUrl.hostname,
                    port: proxy.proxyUrl.port
                },
            };
            let tunnelAgent;
            const overHttps = proxy.proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, { rejectUnauthorized: false });
        }
        if (usingSsl && this._certConfig) {
            agent.options = Object.assign(agent.options || {}, { ca: this._ca, cert: this._cert, key: this._key, passphrase: this._certConfig.passphrase });
        }
        return agent;
    }
    _getProxy(parsedUrl) {
        let usingSsl = parsedUrl.protocol === 'https:';
        let proxyConfig = this._httpProxy;
        // fallback to http_proxy and https_proxy env
        let https_proxy = process.env[EnvironmentVariables.HTTPS_PROXY];
        let http_proxy = process.env[EnvironmentVariables.HTTP_PROXY];
        if (!proxyConfig) {
            if (https_proxy && usingSsl) {
                proxyConfig = {
                    proxyUrl: https_proxy
                };
            }
            else if (http_proxy) {
                proxyConfig = {
                    proxyUrl: http_proxy
                };
            }
        }
        let proxyUrl;
        let proxyAuth;
        if (proxyConfig) {
            if (proxyConfig.proxyUrl.length > 0) {
                proxyUrl = url.parse(proxyConfig.proxyUrl);
            }
            if (proxyConfig.proxyUsername || proxyConfig.proxyPassword) {
                proxyAuth = proxyConfig.proxyUsername + ":" + proxyConfig.proxyPassword;
            }
        }
        return { proxyUrl: proxyUrl, proxyAuth: proxyAuth };
    }
    _isMatchInBypassProxyList(parsedUrl) {
        if (!this._httpProxyBypassHosts) {
            return false;
        }
        let bypass = false;
        this._httpProxyBypassHosts.forEach(bypassHost => {
            if (bypassHost.test(parsedUrl.href)) {
                bypass = true;
            }
        });
        return bypass;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ 8338:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const qs = __nccwpck_require__(5324);
const url = __nccwpck_require__(8835);
const path = __nccwpck_require__(5622);
const zlib = __nccwpck_require__(8761);
/**
 * creates an url from a request url and optional base url (http://server:8080)
 * @param {string} resource - a fully qualified url or relative path
 * @param {string} baseUrl - an optional baseUrl (http://server:8080)
 * @param {IRequestOptions} options - an optional options object, could include QueryParameters e.g.
 * @return {string} - resultant url
 */
function getUrl(resource, baseUrl, queryParams) {
    const pathApi = path.posix || path;
    let requestUrl = '';
    if (!baseUrl) {
        requestUrl = resource;
    }
    else if (!resource) {
        requestUrl = baseUrl;
    }
    else {
        const base = url.parse(baseUrl);
        const resultantUrl = url.parse(resource);
        // resource (specific per request) elements take priority
        resultantUrl.protocol = resultantUrl.protocol || base.protocol;
        resultantUrl.auth = resultantUrl.auth || base.auth;
        resultantUrl.host = resultantUrl.host || base.host;
        resultantUrl.pathname = pathApi.resolve(base.pathname, resultantUrl.pathname);
        if (!resultantUrl.pathname.endsWith('/') && resource.endsWith('/')) {
            resultantUrl.pathname += '/';
        }
        requestUrl = url.format(resultantUrl);
    }
    return queryParams ?
        getUrlWithParsedQueryParams(requestUrl, queryParams) :
        requestUrl;
}
exports.getUrl = getUrl;
/**
 *
 * @param {string} requestUrl
 * @param {IRequestQueryParams} queryParams
 * @return {string} - Request's URL with Query Parameters appended/parsed.
 */
function getUrlWithParsedQueryParams(requestUrl, queryParams) {
    const url = requestUrl.replace(/\?$/g, ''); // Clean any extra end-of-string "?" character
    const parsedQueryParams = qs.stringify(queryParams.params, buildParamsStringifyOptions(queryParams));
    return `${url}${parsedQueryParams}`;
}
/**
 * Build options for QueryParams Stringifying.
 *
 * @param {IRequestQueryParams} queryParams
 * @return {object}
 */
function buildParamsStringifyOptions(queryParams) {
    let options = {
        addQueryPrefix: true,
        delimiter: (queryParams.options || {}).separator || '&',
        allowDots: (queryParams.options || {}).shouldAllowDots || false,
        arrayFormat: (queryParams.options || {}).arrayFormat || 'repeat',
        encodeValuesOnly: (queryParams.options || {}).shouldOnlyEncodeValues || true
    };
    return options;
}
/**
 * Decompress/Decode gzip encoded JSON
 * Using Node.js built-in zlib module
 *
 * @param {Buffer} buffer
 * @param {string} charset? - optional; defaults to 'utf-8'
 * @return {Promise<string>}
 */
function decompressGzippedContent(buffer, charset) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            zlib.gunzip(buffer, function (error, buffer) {
                if (error) {
                    reject(error);
                }
                resolve(buffer.toString(charset || 'utf-8'));
            });
        }));
    });
}
exports.decompressGzippedContent = decompressGzippedContent;
/**
 * Builds a RegExp to test urls against for deciding
 * wether to bypass proxy from an entry of the
 * environment variable setting NO_PROXY
 *
 * @param {string} bypass
 * @return {RegExp}
 */
function buildProxyBypassRegexFromEnv(bypass) {
    try {
        // We need to keep this around for back-compat purposes
        return new RegExp(bypass, 'i');
    }
    catch (err) {
        if (err instanceof SyntaxError && (bypass || "").startsWith("*")) {
            let wildcardEscaped = bypass.replace('*', '(.*)');
            return new RegExp(wildcardEscaped, 'i');
        }
        throw err;
    }
}
exports.buildProxyBypassRegexFromEnv = buildProxyBypassRegexFromEnv;
/**
 * Obtain Response's Content Charset.
 * Through inspecting `content-type` response header.
 * It Returns 'utf-8' if NO charset specified/matched.
 *
 * @param {IHttpClientResponse} response
 * @return {string} - Content Encoding Charset; Default=utf-8
 */
function obtainContentCharset(response) {
    // Find the charset, if specified.
    // Search for the `charset=CHARSET` string, not including `;,\r\n`
    // Example: content-type: 'application/json;charset=utf-8'
    // |__ matches would be ['charset=utf-8', 'utf-8', index: 18, input: 'application/json; charset=utf-8']
    // |_____ matches[1] would have the charset :tada: , in our example it's utf-8
    // However, if the matches Array was empty or no charset found, 'utf-8' would be returned by default.
    const nodeSupportedEncodings = ['ascii', 'utf8', 'utf16le', 'ucs2', 'base64', 'binary', 'hex'];
    const contentType = response.message.headers['content-type'] || '';
    const matches = contentType.match(/charset=([^;,\r\n]+)/i);
    return (matches && matches[1] && nodeSupportedEncodings.indexOf(matches[1]) != -1) ? matches[1] : 'utf-8';
}
exports.obtainContentCharset = obtainContentCharset;


/***/ }),

/***/ 2884:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "NIL": () => /* reexport */ nil,
  "parse": () => /* reexport */ esm_node_parse,
  "stringify": () => /* reexport */ esm_node_stringify,
  "v1": () => /* reexport */ esm_node_v1,
  "v3": () => /* reexport */ esm_node_v3,
  "v4": () => /* reexport */ esm_node_v4,
  "v5": () => /* reexport */ esm_node_v5,
  "validate": () => /* reexport */ esm_node_validate,
  "version": () => /* reexport */ esm_node_version
});

// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");;
var external_crypto_default = /*#__PURE__*/__nccwpck_require__.n(external_crypto_namespaceObject);

// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/rng.js

const rnds8 = new Uint8Array(16);
function rng() {
  return external_crypto_default().randomFillSync(rnds8);
}
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_node_validate = (validate);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_node_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_node_stringify = (stringify);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || esm_node_stringify(b);
}

/* harmony default export */ const esm_node_v1 = (v1);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/parse.js


function parse(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const esm_node_parse = (parse);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_node_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return esm_node_stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/md5.js


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const esm_node_md5 = (md5);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/v3.js


const v3 = v35('v3', 0x30, esm_node_md5);
/* harmony default export */ const esm_node_v3 = (v3);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/v4.js



function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_node_stringify(rnds);
}

/* harmony default export */ const esm_node_v4 = (v4);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/sha1.js


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const esm_node_sha1 = (sha1);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/v5.js


const v5 = v35('v5', 0x50, esm_node_sha1);
/* harmony default export */ const esm_node_v5 = (v5);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/nil.js
/* harmony default export */ const nil = ('00000000-0000-0000-0000-000000000000');
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/version.js


function version(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const esm_node_version = (version);
// CONCATENATED MODULE: ./build_and_deploy/node_modules/uuid/dist/esm-node/index.js










/***/ }),

/***/ 2833:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Orchestrator = void 0;
var artifacts_client_1 = __nccwpck_require__(5131);
var arm_template_utils_1 = __nccwpck_require__(2983);
var artifacts_enum_1 = __nccwpck_require__(5724);
var deploy_utils_1 = __nccwpck_require__(3850);
var logger_1 = __nccwpck_require__(4659);
var service_principal_client_utils_1 = __nccwpck_require__(6927);
var workspace_artifacts_getter_1 = __nccwpck_require__(9379);
var Orchestrator = /** @class */ (function () {
    function Orchestrator(packageFiles, artifactClient, targetWorkspace, environment, deleteArtifactsNotInTemplate) {
        this.packageFiles = packageFiles;
        this.artifactClient = artifactClient;
        this.targetWorkspace = targetWorkspace;
        this.environment = environment;
        this.deleteArtifactsNotInTemplate = deleteArtifactsNotInTemplate;
    }
    Orchestrator.prototype.orchestrateFromPublishBranch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var packageFilesContent, armTemplateContent, armParameterContent, overrideArmParameters, targetLocation, artifactsToDeploy, artifactsInWorkspace, artifactsToDeleteInWorkspace, artifactsToDeleteInWorkspaceInOrder, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.packageFiles.getPackageFiles()];
                    case 1:
                        packageFilesContent = _a.sent();
                        armTemplateContent = packageFilesContent.templateFileContent;
                        armParameterContent = packageFilesContent.parametersFileContent;
                        overrideArmParameters = packageFilesContent.armOverridesContent;
                        if (!(armTemplateContent && armParameterContent)) {
                            throw new Error('Empty template or parameters file');
                        }
                        return [4 /*yield*/, service_principal_client_utils_1.getWorkspaceLocation(this.artifactClient.getParams(), this.targetWorkspace)];
                    case 2:
                        targetLocation = _a.sent();
                        return [4 /*yield*/, arm_template_utils_1.getArtifacts(armParameterContent, armTemplateContent, overrideArmParameters, this.targetWorkspace, targetLocation)];
                    case 3:
                        artifactsToDeploy = _a.sent();
                        if (!this.deleteArtifactsNotInTemplate) return [3 /*break*/, 6];
                        // Delete extra artifacts in the workspace
                        logger_1.SystemLogger.info("Attempting to delete artifacts from workspace, that were not in the template.");
                        return [4 /*yield*/, workspace_artifacts_getter_1.getArtifactsFromWorkspace(this.targetWorkspace, this.environment)];
                    case 4:
                        artifactsInWorkspace = _a.sent();
                        logger_1.SystemLogger.info("Found " + artifactsInWorkspace.length + " artifacts in the workspace.");
                        artifactsToDeleteInWorkspace = workspace_artifacts_getter_1.getArtifactsToDeleteFromWorkspace(artifactsInWorkspace, artifactsToDeploy, artifacts_client_1.typeMap);
                        logger_1.SystemLogger.info("Found " + artifactsToDeleteInWorkspace.length + " artifacts in the workspace that many need to be deleted.");
                        artifactsToDeleteInWorkspaceInOrder = workspace_artifacts_getter_1.getArtifactsToDeleteFromWorkspaceInOrder(artifactsToDeleteInWorkspace);
                        return [4 /*yield*/, this.deleteResourcesInOrder(this.artifactClient, artifactsToDeleteInWorkspaceInOrder, this.targetWorkspace, this.environment, armParameterContent)];
                    case 5:
                        _a.sent();
                        logger_1.SystemLogger.info("Completed deleting artifacts from workspace, that were not in the template.");
                        _a.label = 6;
                    case 6:
                        logger_1.SystemLogger.info("Start deploying artifacts from the template.");
                        return [4 /*yield*/, this.deployResourcesInOrder(this.artifactClient, artifactsToDeploy, this.targetWorkspace, this.environment)];
                    case 7:
                        _a.sent();
                        logger_1.SystemLogger.info("Completed deploying artifacts from the template.");
                        return [3 /*break*/, 9];
                    case 8:
                        err_1 = _a.sent();
                        throw new Error("Orchestrate failed - " + err_1);
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    Orchestrator.prototype.deployResourcesInOrder = function (artifactClient, artifactsToDeploy, targetWorkspace, environment) {
        return __awaiter(this, void 0, void 0, function () {
            var i, batchOfArtifacts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < artifactsToDeploy.length)) return [3 /*break*/, 5];
                        batchOfArtifacts = artifactsToDeploy[i];
                        return [4 /*yield*/, this.deployBatch(artifactClient, batchOfArtifacts, targetWorkspace, environment)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, artifactClient.WaitForAllDeployments(false)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Orchestrator.prototype.deleteResourcesInOrder = function (artifactClient, artifactsToDelete, targetWorkspace, environment, armParameterContent) {
        return __awaiter(this, void 0, void 0, function () {
            var i, batchOfArtifacts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < artifactsToDelete.length)) return [3 /*break*/, 5];
                        batchOfArtifacts = artifactsToDelete[i];
                        return [4 /*yield*/, this.deleteBatch(artifactClient, batchOfArtifacts, targetWorkspace, environment, armParameterContent)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, artifactClient.WaitForAllDeployments(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Orchestrator.prototype.skipDeployment = function (artifactTypeToDeploy) {
        if (artifactTypeToDeploy == artifacts_enum_1.Artifact.sqlpool ||
            artifactTypeToDeploy == artifacts_enum_1.Artifact.bigdatapools ||
            artifactTypeToDeploy == artifacts_enum_1.Artifact.managedvirtualnetworks) {
            return true;
        }
        return false;
    };
    Orchestrator.prototype.deployBatch = function (artifactClient, artifactsToDeploy, targetWorkspace, environment) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, artifactsToDeploy_1, resource, artifactTypeToDeploy, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, artifactsToDeploy_1 = artifactsToDeploy;
                        _a.label = 1;
                    case 1:
                        if (!(_i < artifactsToDeploy_1.length)) return [3 /*break*/, 6];
                        resource = artifactsToDeploy_1[_i];
                        if (resource.isDefault) {
                            logger_1.SystemLogger.info("Skipping deployment of " + resource.name + " as its a default workspace resource.");
                            return [3 /*break*/, 5];
                        }
                        artifactTypeToDeploy = artifacts_client_1.typeMap.get(resource.type.toLowerCase());
                        if (!resource.content) {
                            logger_1.SystemLogger.info("Empty artifactMap of type : " + resource.type + " skipping deployment");
                            return [3 /*break*/, 5];
                        }
                        logger_1.SystemLogger.info("Deploy " + artifactTypeToDeploy + " " + resource.type);
                        result = void 0;
                        if (!this.skipDeployment(artifactTypeToDeploy)) return [3 /*break*/, 2];
                        // Currently not supporting Sql and spark pools. Skipping
                        //result = await armclient.deploy(resource.content);
                        logger_1.SystemLogger.info("Deployment of type " + artifactsToDeploy + " is not currently supported.");
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, artifactClient.deployArtifact(artifactTypeToDeploy, resource, targetWorkspace, environment)];
                    case 3:
                        // Do the artifact deployment
                        result = _a.sent();
                        _a.label = 4;
                    case 4:
                        logger_1.SystemLogger.info("Deployment status : " + result);
                        if (result != deploy_utils_1.DeployStatus.success) {
                            throw new Error("For Artifact " + resource.name + ": Failure in deployment: " + result);
                        }
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Orchestrator.prototype.deleteBatch = function (artifactClient, artifactsToDelete, targetWorkspace, environment, armParameterContent) {
        return __awaiter(this, void 0, void 0, function () {
            var error, _i, artifactsToDelete_1, resource, artifactTypeToDelete, result, deletionStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        error = "";
                        _i = 0, artifactsToDelete_1 = artifactsToDelete;
                        _a.label = 1;
                    case 1:
                        if (!(_i < artifactsToDelete_1.length)) return [3 /*break*/, 4];
                        resource = artifactsToDelete_1[_i];
                        if (resource.isDefault) {
                            logger_1.SystemLogger.info("Skipping deletion of " + resource.name + " as its a default workspace resource.");
                            return [3 /*break*/, 3];
                        }
                        artifactTypeToDelete = artifacts_client_1.typeMap.get(resource.type.toLowerCase());
                        logger_1.SystemLogger.info("Deleting " + resource.name + " of type " + artifactTypeToDelete);
                        if (artifactTypeToDelete == artifacts_enum_1.Artifact.sqlpool ||
                            artifactTypeToDelete == artifacts_enum_1.Artifact.bigdatapools ||
                            artifactTypeToDelete == artifacts_enum_1.Artifact.managedvirtualnetworks ||
                            artifactTypeToDelete == artifacts_enum_1.Artifact.managedprivateendpoints) {
                            // Skip this.
                            return [3 /*break*/, 3];
                        }
                        return [4 /*yield*/, artifactClient.deleteArtifact(artifactTypeToDelete, resource, targetWorkspace, environment)];
                    case 2:
                        // Do the artifact deletion
                        result = _a.sent();
                        logger_1.SystemLogger.info("Deletion status : " + result);
                        deletionStatus = {
                            key: resource.type.toLowerCase(),
                            value: "Deployment status : " + result
                        };
                        if (result != deploy_utils_1.DeployStatus.success) {
                            // If deletion is not a success, its ok. we move forward.
                            logger_1.SystemLogger.info("Failure in deployment: " + result);
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Orchestrator;
}());
exports.Orchestrator = Orchestrator;
//# sourceMappingURL=orchestrator.js.map

/***/ }),

/***/ 5337:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PackageFile = void 0;
var PackageFile = /** @class */ (function () {
    function PackageFile(templateFile, parametersFile, armOverrides) {
        this.fs = __nccwpck_require__(5747);
        this.packageFiles = {
            templateFile: templateFile,
            parametersFile: parametersFile,
            armOverrides: armOverrides
        };
    }
    PackageFile.prototype.getPackageFiles = function () {
        var parametersFileContent = this.getPackageFileContent(this.packageFiles.parametersFile);
        var templateFileContent = this.getPackageFileContent(this.packageFiles.templateFile);
        var armOverridesContent = this.getPackageFileContent(this.packageFiles.armOverrides, true);
        return {
            templateFileContent: templateFileContent,
            parametersFileContent: parametersFileContent,
            armOverridesContent: armOverridesContent
        };
    };
    PackageFile.prototype.getPackageFileContent = function (filePath, returnBlank) {
        if (returnBlank === void 0) { returnBlank = false; }
        if (!this.fs.existsSync(filePath)) {
            if (returnBlank) {
                return "";
            }
        }
        var fileContent = "";
        if (!this.fs.lstatSync(filePath).isDirectory()) {
            try {
                fileContent = this.fs.readFileSync(filePath, 'utf8');
            }
            catch (error) {
                throw new Error("Failed to read file" + filePath);
            }
        }
        else {
            throw new Error("Input file path instead of directory");
        }
        return fileContent;
    };
    return PackageFile;
}());
exports.PackageFile = PackageFile;
//# sourceMappingURL=package_file.js.map

/***/ }),

/***/ 2983:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDependentsFromArtifact = exports.checkIfArtifactExists = exports.checkIfNameExists = exports.getArtifactsFromArmTemplate = exports.replaceStrByRegex = exports.findDefaultArtifacts = exports.replaceDoubleQuoteCode = exports.replaceBackSlashCode = exports.createArmTemplate = exports.getArtifacts = void 0;
var yaml = __importStar(__nccwpck_require__(2096));
var uuid_1 = __nccwpck_require__(2884);
var logger_1 = __nccwpck_require__(4659);
var common_utils_1 = __nccwpck_require__(9123);
// Just 2 random Guids to replace backslash in parameters file.
var backslash = "7FD5C49AB6444AC1ACCD56B689067FBBAD85B74B0D8943CA887371839DFECF85";
var quote = "48C16896271D483C916DE1C4EC6F24DBC945F900F9AB464B828EC8005364D322";
var doublequote = "4467B65E39AA40998907771187C9B539847A7E801C5E4F0E9513C1D6154BC816";
function getArtifacts(armParams, armTemplate, overrideArmParameters, targetWorkspaceName, targetLocation) {
    return __awaiter(this, void 0, void 0, function () {
        var defaultArtifacts;
        return __generator(this, function (_a) {
            armTemplate = createArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);
            defaultArtifacts = findDefaultArtifacts(armTemplate, targetWorkspaceName);
            armTemplate = JSON.stringify(JSON.parse(armTemplate));
            return [2 /*return*/, getArtifactsFromArmTemplate(armTemplate, targetLocation, defaultArtifacts)];
        });
    });
}
exports.getArtifacts = getArtifacts;
function createArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName) {
    armParams = replaceBackSlash(armParams);
    overrideArmParameters = replaceBackSlash(overrideArmParameters);
    armTemplate = replaceParameters(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);
    armTemplate = replaceVariables(armTemplate);
    armTemplate = replaceStrByRegex(armTemplate);
    return armTemplate;
}
exports.createArmTemplate = createArmTemplate;
function replaceBackSlashCode(inputString) {
    if (inputString == null) {
        return "";
    }
    var outputString = inputString;
    while (outputString.indexOf(quote) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(quote))
            + "\\\""
            + outputString.substr(outputString.indexOf(quote) + quote.length);
    }
    while (outputString.indexOf(backslash) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(backslash))
            + "\\"
            + outputString.substr(outputString.indexOf(backslash) + backslash.length);
    }
    return outputString;
}
exports.replaceBackSlashCode = replaceBackSlashCode;
function replaceBackSlash(inputString) {
    if (inputString == null || inputString == "") {
        return "";
    }
    var outputString = inputString;
    while (outputString.indexOf("\\\"") >= 0) {
        outputString = outputString.substr(0, outputString.indexOf("\\\"")) + quote + outputString.substr(outputString.indexOf("\\\"") + 2);
    }
    while (outputString.indexOf("\\") >= 0) {
        outputString = outputString.substr(0, outputString.indexOf("\\")) + backslash + outputString.substr(outputString.indexOf("\\") + 1);
    }
    return outputString;
}
function replaceDoubleQuoteCode(inputString) {
    if (inputString == null) {
        return "";
    }
    var outputString = inputString;
    while (outputString.indexOf(doublequote) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(doublequote))
            + "\""
            + outputString.substr(outputString.indexOf(doublequote) + doublequote.length);
    }
    return outputString;
}
exports.replaceDoubleQuoteCode = replaceDoubleQuoteCode;
function replaceDoubleQuote(inputString) {
    if (inputString == null || inputString == "") {
        return "";
    }
    var outputString = inputString;
    while (outputString.indexOf("\"") >= 0) {
        outputString = outputString.substr(0, outputString.indexOf("\"")) +
            doublequote +
            outputString.substr(outputString.indexOf("\"") + 1);
    }
    return outputString;
}
function findDefaultArtifacts(armTemplate, targetworkspace) {
    var defaultArtifacts = new Map();
    var jsonArmTemplateParams = JSON.parse(armTemplate);
    for (var value in jsonArmTemplateParams.resources) {
        var artifactJson = jsonArmTemplateParams.resources[value];
        var artifactName = artifactJson.name;
        if (common_utils_1.isDefaultArtifact(JSON.stringify(artifactJson))) {
            if (artifactName.indexOf("/") > 0) {
                //example `${targetworkspace}/sourceworkspace-WorkspaceDefaultStorage`;
                var nametoreplace = artifactName.substr(artifactName.lastIndexOf("/") + 1);
                nametoreplace = nametoreplace.substr(0, nametoreplace.lastIndexOf("-"));
                var replacedName = artifactName.replace(nametoreplace, targetworkspace);
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
exports.findDefaultArtifacts = findDefaultArtifacts;
function replaceParameters(armParams, armTemplate, overrideArmParameters, targetWorkspaceName) {
    logger_1.SystemLogger.info("Begin replacement of parameters in the template");
    // Build parameters
    var armParamValues = getParameterValuesFromArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);
    armParamValues.forEach(function (value, key) {
        value = value.toString();
        if (value.indexOf("parameters") > -1) {
            armParamValues.forEach(function (valueInside, keyInside) {
                if (value.indexOf(keyInside) > -1) {
                    armParamValues.set(key, value.split('[' + keyInside + ']').join("'" + valueInside + "'"));
                }
                if (value.indexOf(keyInside) > -1) {
                    armParamValues.set(key, value.split(keyInside).join("'" + valueInside + "'"));
                }
            });
        }
    });
    armParamValues.forEach(function (value, key) {
        value = value.toString();
        if (value.indexOf("concat") > -1) {
            armParamValues.set(key, replaceStrByRegex(value));
        }
    });
    // Replace parameterValues
    armParamValues.forEach(function (value, key) {
        if (isJsonValue(replaceDoubleQuoteCode(value))) {
            armTemplate = armTemplate.split("\"[" + key + "]\"").join("" + replaceDoubleQuoteCode(value));
        }
        else {
            armTemplate = armTemplate.split("\"[" + key + "]\"").join("\"" + replaceDoubleQuoteCode(value) + "\"");
        }
        armTemplate = armTemplate.split(key).join("'" + replaceDoubleQuoteCode(value) + "'");
    });
    logger_1.SystemLogger.info("Complete replacement of parameters in the template");
    return armTemplate;
}
function isJsonValue(testString) {
    try {
        JSON.parse(testString);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function replaceVariables(armTemplate) {
    // Build variables
    logger_1.SystemLogger.info("Begin replacement of variables in the template");
    var jsonArmTemplateParams = JSON.parse(armTemplate);
    var armVariableValues = new Map();
    for (var value in jsonArmTemplateParams.variables) {
        var variableValue = jsonArmTemplateParams.variables[value];
        variableValue = replaceStrByRegex(variableValue);
        armVariableValues.set("variables('" + value + "')", variableValue);
    }
    // Replace variables
    armVariableValues.forEach(function (value, key) {
        armTemplate = armTemplate.split(key).join("" + value);
    });
    logger_1.SystemLogger.info("Complete replacement of variables in the template");
    return armTemplate;
}
/*
    This function will replace variables like [concat('Microsoft.Synapse/workspaces/', 'workspaceName')]
    and convert it into [Microsoft.Synapse/workspaces/workspaceName]
 */
function replaceStrByRegex(str) {
    var regexOutside = /\[concat\((.*?)\)\]/g;
    var resultOutside = str.replace(regexOutside, function (matchedStr, strOutside) {
        var result = "";
        var resultArgs = strOutside.split(",");
        resultArgs.forEach(function (arg) {
            var fragment = arg.trim();
            if (fragment.endsWith("'")) {
                fragment = fragment.substring(1, fragment.length - 1);
            }
            result += fragment;
        });
        return result;
    });
    return resultOutside;
}
exports.replaceStrByRegex = replaceStrByRegex;
function getParameterValuesFromArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName) {
    // Parse the parameters and keep a map of these values
    var jsonArmParams = JSON.parse(armParams);
    var armParamValues = new Map();
    for (var value in jsonArmParams.parameters) {
        armParamValues.set("parameters('" + value + "')", replaceDoubleQuote(sanitize(JSON.stringify(jsonArmParams.parameters[value].value))));
    }
    // Convert arm template to json, look at the default parameters if any and add missing ones to the map we have
    var jsonArmTemplateParams = JSON.parse(armTemplate);
    var armTemplateParamValues = new Map();
    for (var value in jsonArmTemplateParams.parameters) {
        armTemplateParamValues.set("parameters('" + value + "')", replaceDoubleQuote(JSON.stringify(jsonArmTemplateParams.parameters[value].defaultValue)));
    }
    armTemplateParamValues.forEach(function (value, key) {
        if (!armParamValues.has(key)) {
            armParamValues.set("parameters('" + key + "')", value);
        }
    });
    // add the target workspace name
    armParamValues.set("parameters('workspaceName')", targetWorkspaceName);
    // Add any overrides.-key1 value1 -key2 value2 -key3 value3
    // Checking length to be > 2 for someone to specify name value, space in between etc. just to be on safe side.
    if (overrideArmParameters != null && overrideArmParameters.length > 2) {
        var cnt = 1;
        if (overrideArmParameters.startsWith('-')) {
            while (overrideArmParameters.length > 0 && overrideArmParameters.indexOf('-') > -1 && overrideArmParameters.indexOf(' ') > -1 && cnt < 1000) {
                cnt = cnt + 1;
                var startIndex = overrideArmParameters.indexOf('-') + '-'.length;
                var endIndex = overrideArmParameters.indexOf(' ');
                var paramName = overrideArmParameters.substring(startIndex, endIndex).trim();
                overrideArmParameters = overrideArmParameters.substring(endIndex);
                startIndex = overrideArmParameters.indexOf(' ') + ' '.length;
                endIndex = overrideArmParameters.indexOf(' -', startIndex);
                if (endIndex == -1) {
                    endIndex = overrideArmParameters.length;
                }
                var paramValue = sanitize(overrideArmParameters.substring(startIndex, endIndex).trim());
                armParamValues.set("parameters('" + paramName + "')", paramValue);
                overrideArmParameters = overrideArmParameters.substring(endIndex).trim();
            }
        }
        // Means user has give a yaml as input
        else {
            var overrides = yaml.load(overrideArmParameters);
            var overridesObj = JSON.parse(JSON.stringify(overrides));
            for (var key in overridesObj) {
                var paramValue = JSON.stringify(overridesObj[key]);
                armParamValues.set("parameters('" + key + "')", sanitize(paramValue));
            }
        }
    }
    return armParamValues;
}
function sanitize(paramValue) {
    if ((paramValue.startsWith("\"") && paramValue.endsWith("\"")) ||
        (paramValue.startsWith("'") && paramValue.endsWith("'"))) {
        paramValue = paramValue.substr(1, paramValue.length - 2);
    }
    return paramValue;
}
function removeWorkspaceNameFromResourceName(resourceName) {
    while (resourceName.indexOf("/") >= 0) {
        resourceName = resourceName.substring(resourceName.indexOf("/") + 1);
    }
    return resourceName;
}
function skipArtifactDeployment(artifactType) {
    if (artifactType.toLowerCase().indexOf("sqlpools") > -1 ||
        artifactType.toLowerCase().indexOf("bigdatapools") > -1 ||
        artifactType.toLowerCase().indexOf("managedvirtualnetworks") > -1) {
        return true;
    }
    return false;
}
function getArtifactsFromArmTemplate(armTemplate, targetLocation, defaultArtifacts) {
    logger_1.SystemLogger.info("Begin getting Artifacts From Template");
    //now get the resources out:
    var jsonArmTemplateParams = JSON.parse(armTemplate);
    var artifacts = new Array();
    var _loop_1 = function (value) {
        var artifactJson = jsonArmTemplateParams.resources[value];
        var artifactType = artifactJson.type;
        console.log("####### ", artifactType);
        if (skipArtifactDeployment(artifactType)) {
            return "continue";
        }
        if (artifactType.toLowerCase().indexOf("sparkjobdefinition") > -1) {
            var fileLocation = artifactJson['properties']['jobProperties']['file'];
            if (!fileLocation) {
                throw new Error("File is missing in spark job defination ");
            }
        }
        artifactJson.name = removeWorkspaceNameFromResourceName(artifactJson.name);
        var _loop_2 = function (i) {
            var dependancyName = artifactJson.dependsOn[i];
            defaultArtifacts.forEach(function (value, key) {
                if (dependancyName.indexOf(key) > -1 &&
                    dependancyName.indexOf("linkedServices") > -1) {
                    artifactJson.dependsOn[i] = artifactJson.dependsOn[i].replace(key, value);
                }
            });
        };
        for (var i = 0; i < artifactJson.dependsOn.length; i++) {
            _loop_2(i);
        }
        var artifactProperties = artifactJson.properties;
        if (artifactProperties != null) {
            var linkedServiceName = artifactProperties.linkedServiceName;
            if (linkedServiceName != null) {
                var referenceName_1 = linkedServiceName.referenceName;
                if (referenceName_1 != null) {
                    defaultArtifacts.forEach(function (value, key) {
                        if (referenceName_1.indexOf(key) > -1) {
                            artifactJson.properties.linkedServiceName.referenceName = artifactJson.properties.linkedServiceName.referenceName.replace(key, value);
                        }
                    });
                }
            }
        }
        for (var artifactJsonValue in artifactJson.properties) {
            if (artifactJsonValue != "typeProperties" ||
                JSON.stringify(artifactJson.properties.typeProperties).indexOf("LinkedServiceReference") == -1) {
                continue;
            }
            for (var artifactJsonTypeProperties in artifactJson.properties.typeProperties) {
                if (JSON.stringify(artifactJson.properties.typeProperties["" + artifactJsonTypeProperties]).indexOf("LinkedServiceReference") == -1) {
                    continue;
                }
                var artifactJsonTypePropertiesJson = artifactJson.properties.typeProperties["" + artifactJsonTypeProperties];
                for (var artifactJsonTypePropertiesValues in artifactJsonTypePropertiesJson) {
                    var artifactJsonTypePropertiesValueslinkedService = artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService;
                    if (artifactJsonTypePropertiesValueslinkedService == null) {
                        continue;
                    }
                    var artifactJsonTypePropertiesValueslinkedServiceType = artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.type;
                    if (artifactJsonTypePropertiesValueslinkedServiceType == null) {
                        continue;
                    }
                    if (artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.type
                        == "LinkedServiceReference") {
                        defaultArtifacts.forEach(function (value, key) {
                            if (artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.referenceName.indexOf(key) > -1) {
                                artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.referenceName
                                    = artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.referenceName.replace(key, value);
                            }
                        });
                    }
                }
            }
        }
        var artifactJsonContent = JSON.stringify(artifactJson);
        defaultArtifacts.forEach(function (value, key) {
            var refName = "\"referenceName\":\"" + key + "\"";
            var refNameReplacement = "\"referenceName\":\"" + value + "\"";
            while (artifactJsonContent.indexOf(refName) > -1) {
                artifactJsonContent = artifactJsonContent.replace(refName, refNameReplacement);
            }
        });
        var resource = {
            type: artifactType,
            isDefault: false,
            content: artifactJsonContent,
            name: artifactJson.name,
            dependson: getDependentsFromArtifact(artifactJsonContent)
        };
        if (artifactType.toLowerCase().indexOf("notebook") > -1) {
            if (!artifactJson.name) {
                resource.content = convertIpynb2Payload(artifactJson);
            }
        }
        logger_1.SystemLogger.info("Found Artifact of type " + artifactType);
        if (common_utils_1.isDefaultArtifact(JSON.stringify(artifactJson))) {
            resource.isDefault = true;
            defaultArtifacts.forEach(function (value, key) {
                resource.name = resource.name.replace(key, value);
            });
            logger_1.SystemLogger.info("\tWill be skipped as its a default resource.");
        }
        if (!checkIfArtifactExists(resource, artifacts)) {
            artifacts.push(resource);
        }
    };
    for (var value in jsonArmTemplateParams.resources) {
        _loop_1(value);
    }
    return createDependancyTree(artifacts);
}
exports.getArtifactsFromArmTemplate = getArtifactsFromArmTemplate;
function createDependancyTree(artifacts) {
    var artifactsOrdered = new Array();
    var artifactsBatches = new Array();
    var artifactBatch = new Array();
    var iteration = 0;
    for (var i = 0; i < artifacts.length; i++) {
        //Replace backslash with \
        artifacts[i].content = replaceDoubleQuoteCode(replaceBackSlashCode(artifacts[i].content));
        artifacts[i].name = replaceDoubleQuoteCode(replaceBackSlashCode(artifacts[i].name));
        for (var j = 0; j < artifacts[i].dependson.length; j++) {
            artifacts[i].dependson[j] = replaceDoubleQuoteCode(replaceBackSlashCode(artifacts[i].dependson[j]));
        }
    }
    // This is the max times, we will go through the artifacts to look for dependancies. So this is the max level of dependancies supported.
    var MAX_ITERATIONS = 500;
    var MAX_PARALLEL_ARTIFACTS = 20;
    while (artifactsOrdered.length < artifacts.length && iteration < MAX_ITERATIONS) {
        iteration++;
        if (artifactBatch.length > 0) {
            artifactsBatches.push(artifactBatch);
            artifactBatch = new Array();
        }
        var _loop_3 = function () {
            if (checkIfArtifactExists(artifacts[res], artifactsOrdered)) {
                return "continue";
            }
            var dependancies = artifacts[res].dependson;
            if (dependancies.length == 0) {
                // Adding to the ordered list as this artifact has no dependancies.
                artifactsOrdered.push(artifacts[res]);
                if (artifactBatch.length >= MAX_PARALLEL_ARTIFACTS) {
                    artifactsBatches.push(artifactBatch);
                    artifactBatch = new Array();
                }
                artifactBatch.push(artifacts[res]);
                return "continue";
            }
            var allDependencyMet = true;
            dependancies.forEach(function (dep) {
                if (!checkIfNameExists(dep, artifactsOrdered)) {
                    allDependencyMet = false;
                }
            });
            if (allDependencyMet) {
                // Adding to the ordered list as all dependencies are already in the list
                artifactsOrdered.push(artifacts[res]);
                if (artifactBatch.length >= MAX_PARALLEL_ARTIFACTS) {
                    artifactsBatches.push(artifactBatch);
                    artifactBatch = new Array();
                }
                artifactBatch.push(artifacts[res]);
            }
        };
        for (var res = 0; res < artifacts.length; res++) {
            _loop_3();
        }
        logger_1.SystemLogger.info("Iteration " + iteration + " Figured out deployment order for " + artifactsOrdered.length + " / " + artifacts.length + " Artifacts for Dependencies.");
    }
    if (artifactBatch.length > 0) {
        artifactsBatches.push(artifactBatch);
    }
    if (iteration == MAX_ITERATIONS) {
        logger_1.SystemLogger.info("Could not figure out full dependancy model for these artifacts. Check template for correctness.");
        logger_1.SystemLogger.info("-----------------------------------------------------------------------------------------------");
        for (var res = 0; res < artifacts.length; res++) {
            if (!checkIfArtifactExists(artifacts[res], artifactsOrdered)) {
                // So this artifact's dependancy could not be verified.
                logger_1.SystemLogger.info("Name: " + artifacts[res].name + ", Type: " + artifacts[res].type);
                var dependancies = artifacts[res].dependson;
                dependancies.forEach(function (dep) {
                    if (!checkIfNameExists(dep, artifactsOrdered)) {
                        logger_1.SystemLogger.info("    Dependency Not found: " + dep);
                    }
                });
            }
        }
        logger_1.SystemLogger.info("-----------------------------------------------------------------------------------------------");
        throw new Error("Could not figure out full dependancy model. Some dependancies may not exist in template.");
    }
    logger_1.SystemLogger.info("Complete getting Artifacts From Template");
    return artifactsBatches;
}
function convertIpynb2Payload(payloadObj) {
    logger_1.SystemLogger.info('Converting payload');
    var payload = {
        "name": uuid_1.v4(),
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
function checkIfNameExists(nameToCheck, selectedListOfResources) {
    if (nameToCheck.indexOf("/") != 0) {
        nameToCheck = "/" + nameToCheck;
    }
    if (nameToCheck.toLowerCase().indexOf("/managedvirtualnetworks/") > -1 ||
        nameToCheck.toLowerCase().indexOf("/sqlpools/") > -1 ||
        nameToCheck.toLowerCase().indexOf("/bigdatapools/") > -1 ||
        nameToCheck.toLowerCase().indexOf("/managedprivateendpoints/") > -1) {
        return true;
    }
    for (var res = 0; res < selectedListOfResources.length; res++) {
        var resource = selectedListOfResources[res];
        var resName = resource.name;
        var restype = resource.type;
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
exports.checkIfNameExists = checkIfNameExists;
function checkIfArtifactExists(resourceToCheck, selectedListOfResources) {
    for (var res = 0; res < selectedListOfResources.length; res++) {
        var resource = selectedListOfResources[res];
        if (resource.name == resourceToCheck.name && resource.type == resourceToCheck.type) {
            return true;
        }
    }
    return false;
}
exports.checkIfArtifactExists = checkIfArtifactExists;
// Gets the list of artifacts this artifact depends on.
function getDependentsFromArtifact(artifactContent) {
    var dependants = new Array();
    var artifact = JSON.parse(artifactContent);
    if (artifactContent.indexOf("dependsOn") > -1 && artifact["dependsOn"] != null) {
        artifact["dependsOn"].forEach(function (x) {
            dependants.push(x);
        });
    }
    return dependants;
}
exports.getDependentsFromArtifact = getDependentsFromArtifact;
//# sourceMappingURL=arm_template_utils.js.map

/***/ }),

/***/ 5724:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_ARTIFACTS_TYPE = exports.DEFAULT_ARTIFACTS = exports.DataFactoryType = exports.Artifact = void 0;
var Artifact;
(function (Artifact) {
    Artifact["notebook"] = "notebook";
    Artifact["sparkjobdefinition"] = "sparkJobDefinition";
    Artifact["sqlscript"] = "sqlScript";
    Artifact["dataset"] = "dataset";
    Artifact["pipeline"] = "pipeline";
    Artifact["trigger"] = "trigger";
    Artifact["dataflow"] = "dataflow";
    Artifact["linkedservice"] = "linkedService";
    Artifact["integrationruntime"] = "integrationRuntime";
    Artifact["credential"] = "credential";
    Artifact["sqlpool"] = "sqlpool";
    Artifact["bigdatapools"] = "bigdatapools";
    Artifact["managedvirtualnetworks"] = "managedVirtualNetworks";
    Artifact["managedprivateendpoints"] = "managedPrivateEndpoints";
    Artifact["kqlScript"] = "kqlScript";
})(Artifact = exports.Artifact || (exports.Artifact = {}));
var DataFactoryType;
(function (DataFactoryType) {
    DataFactoryType["dataset"] = "Microsoft.Synapse/workspaces/datasets";
    DataFactoryType["dataflow"] = "Microsoft.Synapse/workspaces/dataflows";
    DataFactoryType["linkedservice"] = "Microsoft.Synapse/workspaces/linkedServices";
    DataFactoryType["credential"] = "Microsoft.Synapse/workspaces/credentials";
    DataFactoryType["integrationruntime"] = "Microsoft.Synapse/workspaces/integrationRuntimes";
    DataFactoryType["notebook"] = "Microsoft.Synapse/workspaces/notebooks";
    DataFactoryType["pipeline"] = "Microsoft.Synapse/workspaces/pipelines";
    DataFactoryType["sparkjobdefinition"] = "Microsoft.Synapse/workspaces/sparkJobDefinitions";
    DataFactoryType["bigdatapools"] = "Microsoft.Synapse/workspaces/bigDataPools";
    DataFactoryType["sqlscript"] = "Microsoft.Synapse/workspaces/sqlscripts";
    DataFactoryType["trigger"] = "Microsoft.Synapse/workspaces/triggers";
    DataFactoryType["sqlpool"] = "Microsoft.Synapse/workspaces/sqlPools";
    DataFactoryType["managedVirtualNetworks"] = "Microsoft.Synapse/workspaces/managedVirtualNetworks";
    DataFactoryType["managedPrivateEndpoints"] = "Microsoft.Synapse/workspaces/managedVirtualNetworks/managedPrivateEndpoints";
    DataFactoryType["kqlScript"] = "Microsoft.Synapse/workspaces/kqlscripts";
})(DataFactoryType = exports.DataFactoryType || (exports.DataFactoryType = {}));
var DEFAULT_ARTIFACTS;
(function (DEFAULT_ARTIFACTS) {
    DEFAULT_ARTIFACTS["sqlserver"] = "workspacedefaultsqlserver";
    DEFAULT_ARTIFACTS["storage"] = "workspacedefaultstorage";
    DEFAULT_ARTIFACTS["credentials"] = "workspacesystemidentity";
})(DEFAULT_ARTIFACTS = exports.DEFAULT_ARTIFACTS || (exports.DEFAULT_ARTIFACTS = {}));
var DEFAULT_ARTIFACTS_TYPE;
(function (DEFAULT_ARTIFACTS_TYPE) {
    DEFAULT_ARTIFACTS_TYPE["sqlserver"] = "AzureSqlDW";
    DEFAULT_ARTIFACTS_TYPE["storage"] = "AzureBlobFS";
    DEFAULT_ARTIFACTS_TYPE["credentials"] = "ManagedIdentity";
})(DEFAULT_ARTIFACTS_TYPE = exports.DEFAULT_ARTIFACTS_TYPE || (exports.DEFAULT_ARTIFACTS_TYPE = {}));
//# sourceMappingURL=artifacts_enum.js.map

/***/ }),

/***/ 9123:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isDefaultArtifact = exports.isStrNullOrEmpty = void 0;
var artifacts_enum_1 = __nccwpck_require__(5724);
function isStrNullOrEmpty(val) {
    if (val === undefined || val === null || val.trim() === '') {
        return true;
    }
    return false;
}
exports.isStrNullOrEmpty = isStrNullOrEmpty;
function isDefaultArtifact(artifact) {
    var artifactJson = JSON.parse(artifact);
    if (artifactJson.type == artifacts_enum_1.DataFactoryType.managedPrivateEndpoints)
        return DefaultArtifact.DefaultArtifacts.some(function (e) { return e.matches(artifactJson.name, artifactJson.properties.groupId, artifactJson.type); });
    return DefaultArtifact.DefaultArtifacts.some(function (e) { return e.matches(artifactJson.name, artifactJson.properties.type, artifactJson.type); });
}
exports.isDefaultArtifact = isDefaultArtifact;
var DefaultArtifact = /** @class */ (function () {
    function DefaultArtifact(name, type, dataFactoryType) {
        this.name = name;
        this.type = type;
        this.dataFactoryType = dataFactoryType;
    }
    DefaultArtifact.prototype.matches = function (name, type, dataFactoryType) {
        return name.toLowerCase().indexOf(this.name) >= 0
            && type.toLowerCase() === this.type
            && dataFactoryType === this.dataFactoryType;
    };
    DefaultArtifact.DefaultArtifacts = [
        new DefaultArtifact("workspacedefaultsqlserver", "azuresqldw", artifacts_enum_1.DataFactoryType.linkedservice),
        new DefaultArtifact("workspacedefaultstorage", "azureblobfs", artifacts_enum_1.DataFactoryType.linkedservice),
        new DefaultArtifact("workspacesystemidentity", "managedidentity", artifacts_enum_1.DataFactoryType.credential),
        new DefaultArtifact("synapse-ws-sql", "sql", artifacts_enum_1.DataFactoryType.managedPrivateEndpoints),
        new DefaultArtifact("synapse-ws-sqlOnDemand", "sqlOnDemand", artifacts_enum_1.DataFactoryType.managedPrivateEndpoints),
        new DefaultArtifact("synapse-ws-custstgacct", "dfs", artifacts_enum_1.DataFactoryType.managedPrivateEndpoints),
    ];
    return DefaultArtifact;
}());
//# sourceMappingURL=common_utils.js.map

/***/ }),

/***/ 3850:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRmEndpointUrl = exports.getAdEndpointUrl = exports.getRMUrl = exports.getParams = exports.Env = exports.DeployStatus = void 0;
var core = __importStar(__nccwpck_require__(4120));
var service_principal_client_utils_1 = __nccwpck_require__(6927);
var DeployStatus;
(function (DeployStatus) {
    DeployStatus["success"] = "Success";
    DeployStatus["failed"] = "Failed";
    DeployStatus["skipped"] = "Skipped";
})(DeployStatus = exports.DeployStatus || (exports.DeployStatus = {}));
var Env;
(function (Env) {
    Env["prod"] = "Azure Public";
    Env["mooncake"] = "Azure China";
    Env["usnat"] = "Azure US Government";
})(Env = exports.Env || (exports.Env = {}));
function getParams(dataplane, env) {
    if (dataplane === void 0) { dataplane = false; }
    if (env === void 0) { env = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var env_1, resourceGroup, clientId, clientSecret, subscriptionId, tenantId, managedIdentity, activeDirectoryEndpointUrl, resourceManagerEndpointUrl, bearer, params, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    try {
                        env_1 = core.getInput('Environment');
                        resourceGroup = core.getInput("resourceGroup");
                        clientId = core.getInput("clientId");
                        clientSecret = core.getInput("clientSecret");
                        subscriptionId = core.getInput("subscriptionId");
                        tenantId = core.getInput("tenantId");
                        managedIdentity = core.getInput("managedIdentity");
                        activeDirectoryEndpointUrl = getAdEndpointUrl(env_1);
                        resourceManagerEndpointUrl = getRmEndpointUrl(env_1);
                    }
                    catch (err) {
                        throw new Error("Unable to parse the secret: " + err.message);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 9]);
                    if (!dataplane) return [3 /*break*/, 3];
                    return [4 /*yield*/, getRMUrl(env)];
                case 2:
                    resourceManagerEndpointUrl = _a.sent();
                    _a.label = 3;
                case 3:
                    bearer = void 0;
                    if (!(managedIdentity == 'true')) return [3 /*break*/, 5];
                    return [4 /*yield*/, service_principal_client_utils_1.getManagedIdentityBearer(resourceManagerEndpointUrl)];
                case 4:
                    bearer = _a.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, service_principal_client_utils_1.getBearer(clientId, clientSecret, subscriptionId, tenantId, resourceManagerEndpointUrl, activeDirectoryEndpointUrl)];
                case 6:
                    bearer = _a.sent();
                    _a.label = 7;
                case 7:
                    params = {
                        'clientId': clientId,
                        'clientSecret': clientSecret,
                        'subscriptionId': subscriptionId,
                        'tenantId': tenantId,
                        'managedIdentity': managedIdentity,
                        'activeDirectoryEndpointUrl': activeDirectoryEndpointUrl,
                        'resourceManagerEndpointUrl': resourceManagerEndpointUrl,
                        'bearer': bearer,
                        'resourceGroup': resourceGroup
                    };
                    return [2 /*return*/, params];
                case 8:
                    err_1 = _a.sent();
                    throw new Error("Failed to fetch Bearer: " + err_1.message);
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.getParams = getParams;
function getRMUrl(env) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (env) {
                case Env.prod.toString():
                    return [2 /*return*/, "https://dev.azuresynapse.net"];
                case Env.mooncake.toString():
                    return [2 /*return*/, "https://dev.azuresynapse.azure.cn"];
                case Env.usnat.toString():
                    return [2 /*return*/, "https://dev.azuresynapse.usgovcloudapi.net"];
                default:
                    throw new Error('Environment validation failed');
            }
            return [2 /*return*/];
        });
    });
}
exports.getRMUrl = getRMUrl;
function getAdEndpointUrl(env) {
    switch (env) {
        case Env.prod.toString():
            return "https://login.microsoftonline.com/";
        case Env.mooncake.toString():
            return "https://login.chinacloudapi.cn/";
        case Env.usnat.toString():
            return "https://login.microsoftonline.us/";
        default:
            throw new Error('Environment validation failed');
    }
}
exports.getAdEndpointUrl = getAdEndpointUrl;
function getRmEndpointUrl(env) {
    switch (env) {
        case Env.prod.toString():
            return "https://management.azure.com/";
        case Env.mooncake.toString():
            return "https://management.chinacloudapi.cn/";
        case Env.usnat.toString():
            return "https://management.usgovcloudapi.net/";
        default:
            throw new Error('Environment validation failed');
    }
}
exports.getRmEndpointUrl = getRmEndpointUrl;
//# sourceMappingURL=deploy_utils.js.map

/***/ }),

/***/ 4659:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SystemLogger = exports.ActionLogger = void 0;
var core = __importStar(__nccwpck_require__(4120));
var SystemLogger = /** @class */ (function () {
    function SystemLogger() {
    }
    SystemLogger.setLogger = function (logger) {
        SystemLogger.logger = logger;
    };
    SystemLogger.info = function (message) {
        var _a;
        (_a = SystemLogger.logger) === null || _a === void 0 ? void 0 : _a.info(message);
        return message;
    };
    SystemLogger.warn = function (message) {
        var _a;
        (_a = SystemLogger.logger) === null || _a === void 0 ? void 0 : _a.warn(message);
        return message;
    };
    SystemLogger.error = function (message) {
        var _a;
        (_a = SystemLogger.logger) === null || _a === void 0 ? void 0 : _a.error(message);
        return message;
    };
    SystemLogger.debug = function (message) {
        var _a;
        (_a = SystemLogger.logger) === null || _a === void 0 ? void 0 : _a.debug(message);
        return message;
    };
    SystemLogger.logger = undefined;
    return SystemLogger;
}());
exports.SystemLogger = SystemLogger;
var ActionLogger = /** @class */ (function () {
    function ActionLogger(debugEnabled) {
        this.debugEnabled = debugEnabled;
    }
    ActionLogger.prototype.info = function (message) {
        core.info(message);
        return message;
    };
    ActionLogger.prototype.warn = function (message) {
        core.warning(message);
        return message;
    };
    ActionLogger.prototype.error = function (message) {
        core.error(message);
        return message;
    };
    ActionLogger.prototype.debug = function (message) {
        if (this.debugEnabled) {
            core.debug(message);
        }
        return message;
    };
    return ActionLogger;
}());
exports.ActionLogger = ActionLogger;
;
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 6927:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWorkspaceLocation = exports.getManagedIdentityBearer = exports.getBearer = void 0;
var httpClient = __importStar(__nccwpck_require__(6291));
var deploy_utils_1 = __nccwpck_require__(3850);
var logger_1 = __nccwpck_require__(4659);
var userAgent = 'synapse-github-cicd-deploy-task';
var requestOptions = {};
var client = new httpClient.HttpClient(userAgent, undefined, requestOptions);
function getBearer(clientId, clientSecret, subscriptionId, tenantId, resourceManagerEndpointUrl, activeDirectoryEndpointUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var url = "" + activeDirectoryEndpointUrl + tenantId + "/oauth2/token";
                        var headers = {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        };
                        var requestBody = "client_id=" + clientId + "&client_secret=" + clientSecret + "&resource=" + encodeURIComponent(resourceManagerEndpointUrl) + "&subscription_id=" + subscriptionId + "&grant_type=client_credentials";
                        client.post(url, requestBody, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var resStatus, error, body;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resStatus = res.message.statusCode;
                                        if (!(resStatus != 200 && resStatus != 201 && resStatus != 202)) return [3 /*break*/, 2];
                                        logger_1.SystemLogger.info("Unable to fetch service principal token, status: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 1:
                                        error = _a.sent();
                                        logger_1.SystemLogger.info(error);
                                        return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                    case 2:
                                        logger_1.SystemLogger.info("Able to fetch service principal token: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 3:
                                        body = _a.sent();
                                        return [2 /*return*/, resolve(JSON.parse(body)["access_token"])];
                                }
                            });
                        }); });
                    })];
            }
            catch (err) {
                throw new Error("Unable to fetch the service principal token: " + err.message);
            }
            return [2 /*return*/];
        });
    });
}
exports.getBearer = getBearer;
function getManagedIdentityBearer(resourceManagerEndpointUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var url = "http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=" + resourceManagerEndpointUrl;
                        var headers = {
                            'Metadata': 'true'
                        };
                        client.get(url, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var resStatus, error, body;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resStatus = res.message.statusCode;
                                        if (!(resStatus != 200 && resStatus != 201 && resStatus != 202)) return [3 /*break*/, 2];
                                        logger_1.SystemLogger.info("Unable to fetch managed identity bearer token, status: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 1:
                                        error = _a.sent();
                                        logger_1.SystemLogger.info(error);
                                        return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                    case 2:
                                        logger_1.SystemLogger.info("Able to fetch managed identity bearer token: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 3:
                                        body = _a.sent();
                                        return [2 /*return*/, resolve(JSON.parse(body)["access_token"])];
                                }
                            });
                        }); });
                    })];
            }
            catch (err) {
                throw new Error("Unable to fetch the managed identity bearer token: " + err.message);
            }
            return [2 /*return*/];
        });
    });
}
exports.getManagedIdentityBearer = getManagedIdentityBearer;
function getWorkspaceLocation(params, targetWorkspace) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var resourceManagerEndpointUrl = params.resourceManagerEndpointUrl;
                        var subscriptionId = params.subscriptionId;
                        var resourceGroup = params.resourceGroup;
                        var headers = {
                            'Authorization': 'Bearer ' + params.bearer
                        };
                        var url = resourceManagerEndpointUrl + "subscriptions/" + subscriptionId + "/" +
                            ("resourceGroups/" + resourceGroup + "/providers/Microsoft.Synapse/workspaces/") +
                            (targetWorkspace + "?api-version=2019-06-01-preview");
                        client.get(url, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var resStatus, body;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resStatus = res.message.statusCode;
                                        if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                            logger_1.SystemLogger.info("Unable to fetch location of workspace, status: " + resStatus + "; status message: " + res.message.statusMessage);
                                            return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                        }
                                        logger_1.SystemLogger.info("Able to fetch location of workspace: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 1:
                                        body = _a.sent();
                                        return [2 /*return*/, resolve(JSON.parse(body)['location'])];
                                }
                            });
                        }); });
                    })];
            }
            catch (err) {
                throw new Error("Unable to fetch the location of the workspace: " + err.message);
            }
            return [2 /*return*/];
        });
    });
}
exports.getWorkspaceLocation = getWorkspaceLocation;
//# sourceMappingURL=service_principal_client_utils.js.map

/***/ }),

/***/ 9379:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDependentsFromArtifactFromWorkspace = exports.getArtifactsToDeleteFromWorkspaceInOrder = exports.getArtifactsToDeleteFromWorkspace = exports.getArtifactsFromWorkspace = exports.getArtifactsFromWorkspaceOfType = void 0;
var artifacts_client_1 = __nccwpck_require__(5131);
var deployUtils = __importStar(__nccwpck_require__(3850));
var httpClient = __importStar(__nccwpck_require__(6291));
var arm_template_utils_1 = __nccwpck_require__(2983);
var artifacts_enum_1 = __nccwpck_require__(5724);
var logger_1 = __nccwpck_require__(4659);
var common_utils_1 = __nccwpck_require__(9123);
var userAgent = 'synapse-github-cicd-deploy-task';
var requestOptions = {};
var client = new httpClient.HttpClient(userAgent, undefined, requestOptions);
var artifactTypesToQuery = [
    artifacts_enum_1.Artifact.credential,
    artifacts_enum_1.Artifact.dataflow,
    artifacts_enum_1.Artifact.dataset,
    artifacts_enum_1.Artifact.integrationruntime,
    artifacts_enum_1.Artifact.linkedservice,
    artifacts_enum_1.Artifact.notebook,
    artifacts_enum_1.Artifact.pipeline,
    artifacts_enum_1.Artifact.sparkjobdefinition,
    artifacts_enum_1.Artifact.sqlscript,
    artifacts_enum_1.Artifact.trigger
];
function getArtifactsFromWorkspaceOfType(artifactTypeToQuery, targetWorkspaceName, environment) {
    return __awaiter(this, void 0, void 0, function () {
        var params, token, headers, artifacts, resourceUrl, resp, resourcesString, resourcesJson, rep, artifactJson, artifactJsonContent, artifactName, resource;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deployUtils.getParams(true, environment)];
                case 1:
                    params = _a.sent();
                    token = params.bearer;
                    headers = {
                        'Authorization': "Bearer " + token,
                        'Content-Type': 'application/json',
                        'User-Agent': userAgent
                    };
                    artifacts = new Array();
                    resourceUrl = getResourceFromWorkspaceUrl(targetWorkspaceName, environment, artifactTypeToQuery.toString());
                    resp = new Promise(function (resolve, reject) {
                        client.get(resourceUrl, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var resStatus, body;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resStatus = res.message.statusCode;
                                        if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                            logger_1.SystemLogger.info("Failed to fetch workspace info, status: " + resStatus + "; status message: " + res.message.statusMessage);
                                            return [2 /*return*/, reject("Failed to fetch workspace info " + res.message.statusMessage)];
                                        }
                                        return [4 /*yield*/, res.readBody()];
                                    case 1:
                                        body = _a.sent();
                                        if (!body) {
                                            logger_1.SystemLogger.info("No response body for url: " + resourceUrl);
                                            return [2 /*return*/, reject("Failed to fetch workspace info response")];
                                        }
                                        return [2 /*return*/, resolve(body)];
                                }
                            });
                        }); }, function (reason) {
                            logger_1.SystemLogger.info('Failed to fetch artifacts from workspace: ' + reason);
                            return reject(deployUtils.DeployStatus.failed);
                        });
                    });
                    return [4 /*yield*/, resp];
                case 2:
                    resourcesString = _a.sent();
                    resourcesJson = JSON.parse(resourcesString);
                    for (rep in resourcesJson.value) {
                        artifactJson = resourcesJson.value[rep];
                        artifactJsonContent = JSON.stringify(artifactJson);
                        artifactName = artifactJson.name;
                        resource = {
                            type: artifactJson.type,
                            isDefault: false,
                            content: artifactJsonContent,
                            name: artifactName,
                            dependson: getDependentsFromArtifactFromWorkspace(artifactJsonContent)
                        };
                        if (common_utils_1.isDefaultArtifact(artifactJsonContent)) {
                            resource.isDefault = true;
                        }
                        artifacts.push(resource);
                    }
                    return [2 /*return*/, artifacts];
            }
        });
    });
}
exports.getArtifactsFromWorkspaceOfType = getArtifactsFromWorkspaceOfType;
function getArtifactsFromWorkspace(targetWorkspaceName, environment) {
    return __awaiter(this, void 0, void 0, function () {
        var artifacts, x, artifactsOfType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger_1.SystemLogger.info("Getting Artifacts from workspace: " + targetWorkspaceName + ".");
                    artifacts = new Array();
                    x = 0;
                    _a.label = 1;
                case 1:
                    if (!(x < artifactTypesToQuery.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, getArtifactsFromWorkspaceOfType(artifactTypesToQuery[x], targetWorkspaceName, environment)];
                case 2:
                    artifactsOfType = _a.sent();
                    artifactsOfType.forEach(function (value) {
                        artifacts.push(value);
                    });
                    _a.label = 3;
                case 3:
                    x++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, artifacts];
            }
        });
    });
}
exports.getArtifactsFromWorkspace = getArtifactsFromWorkspace;
function getArtifactsToDeleteFromWorkspace(artifactsInWorkspace, artifactsToDeploy, typeMap) {
    logger_1.SystemLogger.info("Getting Artifacts which should be deleted from workspace.");
    var artifactsToDelete = new Array();
    var resourceFound = true;
    artifactsInWorkspace.forEach(function (checkResource) {
        resourceFound = false;
        var checkResourceType = checkResource.type;
        checkResourceType = checkResourceType.replace(" ", "");
        checkResourceType = checkResourceType.toLowerCase();
        var artifactTypeToDeploy = typeMap.get(checkResourceType);
        if (artifactTypeToDeploy != artifacts_enum_1.Artifact.sqlpool &&
            artifactTypeToDeploy != artifacts_enum_1.Artifact.bigdatapools &&
            artifactTypeToDeploy != artifacts_enum_1.Artifact.managedvirtualnetworks &&
            artifactTypeToDeploy != artifacts_enum_1.Artifact.managedprivateendpoints &&
            artifactTypeToDeploy != artifacts_enum_1.Artifact.integrationruntime) {
            for (var i = 0; i < artifactsToDeploy.length; i++) {
                for (var j = 0; j < artifactsToDeploy[i].length; j++) {
                    var resouce = artifactsToDeploy[i][j];
                    if (resouce.name.toLowerCase() == checkResource.name.toLowerCase() &&
                        resouce.type.toLowerCase() == checkResource.type.toLowerCase()) {
                        resourceFound = true;
                        break;
                    }
                }
                if (resourceFound) {
                    break;
                }
            }
            if (!resourceFound) {
                logger_1.SystemLogger.info("Artifact not found in template. deleting " + checkResource.name + " of type " + checkResource.type);
                artifactsToDelete.push(checkResource);
            }
        }
    });
    return artifactsToDelete;
}
exports.getArtifactsToDeleteFromWorkspace = getArtifactsToDeleteFromWorkspace;
function countOfArtifactDependancy(checkArtifact, selectedListOfResources) {
    var result = 0;
    for (var res = 0; res < selectedListOfResources.length; res++) {
        var resource = selectedListOfResources[res];
        var resName = checkArtifact.name;
        var restype = checkArtifact.type;
        if (restype.indexOf("Microsoft.Synapse/workspaces/") > -1) {
            restype = restype.substr("Microsoft.Synapse/workspaces/".length);
        }
        var nameToCheck = restype + "/" + resName;
        nameToCheck = nameToCheck.toLowerCase();
        for (var i = 0; i < resource.dependson.length; i++) {
            if (resource.dependson[i].toLowerCase() == nameToCheck) {
                result++;
                break;
            }
        }
    }
    return result;
}
function getArtifactsToDeleteFromWorkspaceInOrder(artifactsToDelete) {
    logger_1.SystemLogger.info("Computing dependancies for Artifacts which should be deleted from workspace.");
    var artifactsBatches = new Array();
    var artifactBatch = new Array();
    var artifactsOrdered = new Array();
    // This will be a diff logic than the deploy one. We only need to check dependancy within the list.
    // If A is a dependency for B, C when B is in this list and C is not. We will delete A and then B.
    // This is the max times, we will go through the artifacts to look for dependancies. So this is the max level of dependancies supported.
    var MAX_ITERATIONS = 500;
    var MAX_PARALLEL_ARTIFACTS = 20;
    var count = 0;
    var iteration = 0;
    while (count < artifactsToDelete.length && iteration < MAX_ITERATIONS) {
        iteration++;
        if (artifactBatch.length > 0) {
            artifactsBatches.push(artifactBatch);
            artifactBatch = new Array();
        }
        for (var res = 0; res < artifactsToDelete.length; res++) {
            if (arm_template_utils_1.checkIfArtifactExists(artifactsToDelete[res], artifactsOrdered)) {
                // So this artifact is already added to the ordered list. Skip.
                continue;
            }
            var allDependencyMet = false;
            // check if, in all other artifacts being deleted, something depends on this artifact
            //its ok if not at all or if it is in artifactsOrdered, but not in artifactBatch
            var dependencyInArtifactsToDelete = countOfArtifactDependancy(artifactsToDelete[res], artifactsToDelete);
            var dependencyInArtifactsOrdered = countOfArtifactDependancy(artifactsToDelete[res], artifactsOrdered);
            var dependancyInCurrentBatch = countOfArtifactDependancy(artifactsToDelete[res], artifactBatch);
            if (dependencyInArtifactsToDelete == 0) {
                //nothing in the delete list depends on it
                allDependencyMet = true;
            }
            else if (dependancyInCurrentBatch == 0 && dependencyInArtifactsOrdered == dependencyInArtifactsToDelete) {
                allDependencyMet = true;
            }
            if (allDependencyMet) {
                // Adding to the ordered list as all dependancies are already in the list
                artifactsOrdered.push(artifactsToDelete[res]);
                if (artifactBatch.length >= MAX_PARALLEL_ARTIFACTS) {
                    artifactsBatches.push(artifactBatch);
                    artifactBatch = new Array();
                }
                artifactBatch.push(artifactsToDelete[res]);
            }
        }
        logger_1.SystemLogger.info("Iteration " + iteration + " Figured out deletion order for " + artifactsOrdered.length + " / " + artifactsToDelete.length + " Artifacts for Dependancies.");
        count = artifactsOrdered.length;
    }
    if (artifactBatch.length > 0) {
        artifactsBatches.push(artifactBatch);
    }
    if (iteration == MAX_ITERATIONS) {
        logger_1.SystemLogger.info("Could not figure out full dependancy model for these artifact for delete. Check template and target workspace for correctness.");
        logger_1.SystemLogger.info("-----------------------------------------------------------------------------------------------");
        for (var res = 0; res < artifactsToDelete.length; res++) {
            if (!arm_template_utils_1.checkIfArtifactExists(artifactsToDelete[res], artifactsOrdered)) {
                // So this artifact's dependancy could not be verified.
                logger_1.SystemLogger.info("Name: " + artifactsToDelete[res].name + ", Type: " + artifactsToDelete[res].type);
            }
        }
        throw new Error("Could not figure out full dependancy model for deleting artifacts not in template. For the list above, check the template to see which artifacts depends on them.");
    }
    return artifactsBatches;
}
exports.getArtifactsToDeleteFromWorkspaceInOrder = getArtifactsToDeleteFromWorkspaceInOrder;
function getResourceFromWorkspaceUrl(targetWorkspaceName, environment, resourceType) {
    var url = artifacts_client_1.ArtifactClient.getUrlByEnvironment(targetWorkspaceName, environment);
    url = url + "/" + resourceType + "s?api-version=2019-06-01-preview";
    return url;
}
// Gets the list of artifacts this artifact depends on.
function getDependentsFromArtifactFromWorkspace(artifactContent) {
    var dependants = new Array();
    crawlArtifacts(JSON.parse(artifactContent), dependants, "referenceName");
    return dependants;
}
exports.getDependentsFromArtifactFromWorkspace = getDependentsFromArtifactFromWorkspace;
function crawlArtifacts(artifactContent, dependants, key) {
    if (!artifactContent || typeof artifactContent !== "object") {
        return false;
    }
    var keys = Object.keys(artifactContent);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
            // @ts-ignore
            var depType = artifactContent["type"];
            // @ts-ignore
            var depName = artifactContent["referenceName"];
            dependants.push(depType + "/" + depName);
        }
        // @ts-ignore
        var path = crawlArtifacts(artifactContent[keys[i]], dependants, key);
        if (path) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=workspace_artifacts_getter.js.map

/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");;

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");;

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = require("tls");;

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(4114);
/******/ })()
;