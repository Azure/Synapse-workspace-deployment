import * as core from '@actions/core';
import {
    createArmTemplate,
    findDefaultArtifacts,
    getArtifactsFromArmTemplate,
    Resource
} from "../utils/arm_template_utils";
import { getParams, getRMUrl } from "../utils/deploy_utils";
import { ILogger, SystemLogger } from "../utils/logger";
import { armParams, armTemplate, armTemplate_complete, expectedArmTemplate } from "./helpers/utils_test_helpers";
const pcu = require("../utils/service_principal_client_utils");

const chai_object = require('chai');
const sinon = require("sinon");
const expect = chai_object.expect;
const assert = chai_object.assert;

describe("Test deploy utils", () => {

    it('should fetch params', async () => {
        let stubbedGetBearer = sinon.stub(pcu, "getBearer").callsFake(() => { return "bearer" });
        let stubbedSPAttributes = sinon.stub(core, "getInput").callsFake((x: any) => { return x });
        let params = await getParams();
        expect(params.clientId).to.be.equal('clientId');
        expect(params.clientSecret).to.be.equal('clientSecret');
        expect(params.subscriptionId).to.be.equal('subscriptionId');
        expect(params.tenantId).to.be.equal('tenantId');
        expect(params.activeDirectoryEndpointUrl).to.be.equal('activeDirectoryEndpointUrl');
        expect(params.resourceManagerEndpointUrl).to.be.equal('resourceManagerEndpointUrl');
        expect(params.bearer).to.be.equal('bearer');
        expect(params.resourceGroup).to.be.equal('resourceGroup');
    });

    it('should return resource manager url for prod', async () => {

        let RmURL = await getRMUrl('Azure Public');
        expect(RmURL).to.be.equal('https://dev.azuresynapse.net');
    });

});

describe("Test Arm template utils", () => {

    it('should populate the arm template', () => {
        let targetWorkspaceName = "MochaTesting";
        let completeArmTemplate = createArmTemplate(armParams, armTemplate, "", targetWorkspaceName);
        expect(completeArmTemplate).to.be.equal(expectedArmTemplate);

        let defaultArtifacts = findDefaultArtifacts(completeArmTemplate, targetWorkspaceName);
        expect(defaultArtifacts.get('github-cicd-1-WorkspaceDefaultSqlServer')).to.be.equal('MochaTesting-WorkspaceDefaultSqlServer');
    });

    it('should populate arm resources and dependency tree', async () => {
        let targetWorkspaceName = "MochaTesting";
        let completeArmTemplate = createArmTemplate(armParams, armTemplate_complete, "", targetWorkspaceName);
        let defaultArtifacts = findDefaultArtifacts(completeArmTemplate, targetWorkspaceName);
        completeArmTemplate = JSON.stringify(JSON.parse(completeArmTemplate));

        let resources: Resource[][] = await getArtifactsFromArmTemplate(completeArmTemplate, 'useast', defaultArtifacts);

        expect(resources[0][0].type).to.be.equal('Microsoft.Synapse/workspaces/notebooks');
        expect(resources[0][1].type).to.be.equal('Microsoft.Synapse/workspaces/integrationRuntimes');
        expect(resources[1][0].type).to.be.equal('Microsoft.Synapse/workspaces/pipelines');
        expect(resources[1][1].type).to.be.equal('Microsoft.Synapse/workspaces/linkedServices');
    });

    it('should fail while creating dependency tree', () => {
        let targetWorkspaceName = "MochaTesting";
        let completeArmTemplate = createArmTemplate(armParams, armTemplate, "", targetWorkspaceName);
        let defaultArtifacts = findDefaultArtifacts(completeArmTemplate, targetWorkspaceName);
        completeArmTemplate = JSON.stringify(JSON.parse(completeArmTemplate));

        assert.throws(function () {
            getArtifactsFromArmTemplate(completeArmTemplate, 'useast', defaultArtifacts), Error,
                "Could not figure out full dependency model. Some dependencies may not exist in template."
        });

    })

});

describe("Test SystemLogger utils", () => {
    it('undefined logger should not cause exception when calling log methods', () => {
        SystemLogger.setLogger(undefined)
        SystemLogger.info("Test");
    });

    it('ensure private logger log methods are called by system logger', () => {
        const testLogger: ILogger = {
            info(mesage: string) {
                return mesage;
            },
            debug(message: string) {
                return message;
            },
            error(message: string) {
                return message;
            },
            warn(message: string) {
                return message;
            }
        }
        SystemLogger.setLogger(testLogger)
        expect(SystemLogger.info("1")).to.be.equal("1");
        expect(SystemLogger.debug("1")).to.be.equal("1");
        expect(SystemLogger.error("1")).to.be.equal("1");
        expect(SystemLogger.warn("1")).to.be.equal("1");
    });
});