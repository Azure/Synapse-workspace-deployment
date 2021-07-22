
import * as df from "durable-functions"

const orchestrator = df.orchestrator(function* (context) {
    const outputs = [];

    outputs.push(yield context.df.callActivity("DeploySynapseArtifacts_CreateOrUpdateArtifact", "Notebook"));
    outputs.push(yield context.df.callActivity("DeploySynapseArtifacts_CreateOrUpdateArtifact", "Sql Script"));
    outputs.push(yield context.df.callActivity("DeploySynapseArtifacts_CreateOrUpdateArtifact", "Pipeline"));

      return outputs;
});

export default orchestrator;
