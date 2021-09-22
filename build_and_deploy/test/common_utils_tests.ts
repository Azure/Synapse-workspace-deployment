import chai = require('chai');
import {isDefaultArtifact, isStrNullOrEmpty} from "../utils/common_utils";
import {
    CUSTOM_ARTIFACT_CREDENTIALS,
    CUSTOM_ARTIFACT_INTEGRATION_RUNTIMES,
    CUSTOM_ARTIFACT_SQL,
    CUSTOM_ARTIFACT_STORAGE,
    DEFAULT_ARTIFACT_CREDENTAILS,
    DEFAULT_ARTIFACT_INTEGRATION_RUNTIMES,
    DEFAULT_ARTIFACT_SQL,
    DEFAULT_ARTIFACT_STORAGE,
    MALFORED_ARTIFACT_STORAGE,
} from "./helpers/test_fixtures";

var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var should = chai.should();

describe('CommonUtils', function () {
    it('Should return a boolean false', function () {
        let isEmptyString = isStrNullOrEmpty('prod');
        chai.assert.isFalse(isEmptyString);
    });
    it('Should return a boolean true', function () {
        let isEmptyString = isStrNullOrEmpty('');
        chai.assert.isTrue(isEmptyString);
    });

    it('Should consider it as default artifact - SQL', function (){
        chai.assert.isTrue(isDefaultArtifact(JSON.stringify(DEFAULT_ARTIFACT_SQL)));
    });

    it('Should consider it as default artifact - Storage', function (){
        chai.assert.isTrue(isDefaultArtifact(JSON.stringify(DEFAULT_ARTIFACT_STORAGE)));
    });

    it('Should consider it as default artifact - Credentials', function (){
        chai.assert.isTrue(isDefaultArtifact(JSON.stringify(DEFAULT_ARTIFACT_CREDENTAILS)));
    });

    it('Should consider it as default artifact - Integration Runtimes', function (){
        chai.assert.isTrue(isDefaultArtifact(JSON.stringify(DEFAULT_ARTIFACT_INTEGRATION_RUNTIMES)));
    });

    it('Should not consider it as default artifact - Storage', function (){
        chai.assert.isFalse(isDefaultArtifact(JSON.stringify(CUSTOM_ARTIFACT_STORAGE)));
    });

    it('Should not consider it as default artifact - Storage', function (){
        chai.assert.isFalse(isDefaultArtifact(JSON.stringify(MALFORED_ARTIFACT_STORAGE)));
    });

    it('Should not consider it as default artifact - SQL', function (){
        chai.assert.isFalse(isDefaultArtifact(JSON.stringify(CUSTOM_ARTIFACT_SQL)));
    });

    it('Should not consider it as default artifact - Credentials', function (){
        chai.assert.isFalse(isDefaultArtifact(JSON.stringify(CUSTOM_ARTIFACT_CREDENTIALS)));
    });

    it('Should not consider it as default artifact - Integration Runtimes', function (){
        chai.assert.isFalse(isDefaultArtifact(JSON.stringify(CUSTOM_ARTIFACT_INTEGRATION_RUNTIMES)));
    });
});
