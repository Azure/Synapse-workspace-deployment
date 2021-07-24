
import * as df from "durable-functions"

const orchestrator = df.orchestrator(function* (context) {
    const outputs = [];

    outputs.push(yield context.df.callActivity("DeploySynapseArtifacts_CreateOrUpdateArtifact", context));

      return outputs;
});

export default orchestrator;
