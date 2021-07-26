import {DATASETPAYLOAD, PIPELINEPAYLOAD} from "./helpers/test_fixtures";
import {getDependentsFromArtifactFromWorkspace} from "../utils/workspace_artifacts_getter";

const chai_object = require('chai');
const expect = chai_object.expect;
const assert = chai_object.assert;

describe("Validate artifacts parsing", () => {

    it('should find the depedants', () => {
        let dependants = getDependentsFromArtifactFromWorkspace(JSON.stringify(DATASETPAYLOAD));
        expect(dependants[0]).equal("LinkedServiceReference/bigdataqa0924ws-WorkspaceDefaultStorage");
        dependants = getDependentsFromArtifactFromWorkspace(JSON.stringify(PIPELINEPAYLOAD));
        expect(dependants[0]).equal("DatasetReference/SourceDataset_pqd");
        expect(dependants[1]).equal("DatasetReference/DestinationDataset_pqd");
    });
});
