import chai = require('chai');
import {isDefaultArtifact, isStrNullOrEmpty} from "../utils/common_utils";
import {
    DEFAULTARTIFACT4,
    DEFAULTARTIFACTCREDENTAILS,
    DEFAULTARTIFACTFAIl1,
    DEFAULTARTIFACTFAIl2, DEFAULTARTIFACTFAIl3,
    DEFAULTARTIFACTSQL,
    DEFAULTARTIFACTSTORAGE
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
        chai.assert.isTrue(isDefaultArtifact(JSON.stringify(DEFAULTARTIFACTSQL)));
    });

    it('Should consider it as default artifact - Storage', function (){
        chai.assert.isTrue(isDefaultArtifact(JSON.stringify(DEFAULTARTIFACTSTORAGE)));
    });

    it('Should consider it as default artifact - Credentials', function (){
        chai.assert.isTrue(isDefaultArtifact(JSON.stringify(DEFAULTARTIFACTCREDENTAILS)));
    });

    it('Should not consider it as default artifact - Storage', function (){
        chai.assert.isFalse(isDefaultArtifact(JSON.stringify(DEFAULTARTIFACTFAIl1)));
    });

    it('Should not consider it as default artifact - Storage', function (){
        chai.assert.isFalse(isDefaultArtifact(JSON.stringify(DEFAULTARTIFACTFAIl2)));
    });

    it('Should not consider it as default artifact - SQL', function (){
        chai.assert.isFalse(isDefaultArtifact(JSON.stringify(DEFAULTARTIFACTFAIl3)));
    });

    it('Should not consider it as default artifact - Credentials', function (){
        chai.assert.isFalse(isDefaultArtifact(JSON.stringify(DEFAULTARTIFACT4)));
    });
});