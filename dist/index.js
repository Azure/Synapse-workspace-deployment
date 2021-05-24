"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const synapse_cicd_library_1 = require("@azure/synapse-cicd-library");
const process_1 = require("process");
class GithubActionConsole {
    info(message) {
        core_1.info(message);
        return message;
    }
    error(message) {
        core_1.error(message);
        return message;
    }
    debug(message) {
        if (core_1.isDebug()) {
            core_1.debug(message);
        }
        return message;
    }
    warn(message) {
        core_1.info(message);
        return message;
    }
}
class DeployArtifactMainParameters {
    get workspaceName() {
        return core_1.getInput("workspaceName");
    }
    get azureEnvironment() {
        return core_1.getInput("azureEnvironment");
    }
    get TemplateFilePath() {
        return core_1.getInput("TemplateFilePath");
    }
    get ParametersFilePath() {
        return core_1.getInput("ParametersFilePath");
    }
    get OverrideArmParameters() {
        return core_1.getInput("OverrideArmParameters");
    }
    get clientId() {
        return core_1.getInput("clientId");
    }
    get clientSecret() {
        return core_1.getInput("clientSecret");
    }
    get subscriptionId() {
        return core_1.getInput("subscriptionId");
    }
    get tenantId() {
        return core_1.getInput("tenantId");
    }
    get activeDirectoryEndpointUrl() {
        return core_1.getInput("activeDirectoryEndpointUrl");
    }
    get resourceManagerEndpointUrl() {
        return core_1.getInput("resourceManagerEndpointUrl");
    }
    get bearer() {
        return core_1.getInput("bearer");
    }
    get resourceGroup() {
        return core_1.getInput("resourceGroup");
    }
}
const logger = new GithubActionConsole();
const params = new DeployArtifactMainParameters();
synapse_cicd_library_1.deployArtifactMainAsync(params, logger)
    .then(() => {
    logger.info("Action succeeded with no errors");
    process_1.exit(core_1.ExitCode.Success);
})
    .catch((err) => {
    core_1.setFailed("Action failed with unhandled exception" + err);
    process_1.exit(core_1.ExitCode.Failure);
});
//# sourceMappingURL=index.js.map