import chai = require('chai');
import {isStrNullOrEmpty} from "../utils/common_utils";

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
});