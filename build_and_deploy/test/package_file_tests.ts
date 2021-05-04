import {PackageFile, PackageFilesContent} from "../package_file";

const chai_object = require('chai');
const expect = chai_object.expect;
const assert = chai_object.assert;


describe("Validate package file modules", () => {

    it('should fetch content of files', () => {
        let templateFile = "./test/helpers/templates/template.txt";
        let parametersFile = "./test/helpers/templates/template.txt";
        let armOverrides = "./test/helpers/templates/template.txt";
        let packageFiles: PackageFile = new PackageFile(templateFile, parametersFile, armOverrides);
        let packageFilesContent: PackageFilesContent = packageFiles.getPackageFiles();
        let armTemplateContent = packageFilesContent.templateFileContent;
        let armParameterContent = packageFilesContent.parametersFileContent;
        expect(armTemplateContent).to.be.equal('Testing this dummy file');
        expect(armParameterContent).to.be.equal('Testing this dummy file');
    });

    it('should fail while reading the files (file name incorrect)', () => {
        let templateFile = './test/helpers/templates/fail.txt';
        let parametersFile = './test/helpers/templates/fail.txt';
        let armOverrides = "./test/helpers/templates/fail.txt";
        let packageFiles: PackageFile = new PackageFile(templateFile, parametersFile, armOverrides);
        assert.throws(function(){ packageFiles.getPackageFiles()}, Error);
    });

    it('should fail while reading the files (is a directory)', () => {
        let templateFile = './helpers/templates';
        let parametersFile = './helpers/templates';
        let armOverrides = './helpers/templates';
        let packageFiles: PackageFile = new PackageFile(templateFile, parametersFile, armOverrides);
        assert.throws(function(){ packageFiles.getPackageFiles()}, Error);
    });

});
