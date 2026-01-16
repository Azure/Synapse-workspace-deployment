import { ClientAssertionCredential } from "@azure/identity";
import * as core from "@actions/core";

export interface AzureFederatedConfig {
  clientId: string;
  tenantId: string;
  subscriptionId: string;
}

export async function getAzureFederatedToken(
  config: AzureFederatedConfig,
): Promise<string> {
  const { clientId, tenantId, subscriptionId } = config;

  if (!clientId || !tenantId || !subscriptionId) {
    throw new Error(
      `Missing required Azure configuration. Ensure AZURE_CLIENT_ID, AZURE_TENANT_ID, and AZURE_SUBSCRIPTION_ID are set`,
    );
  }

  core.info("Authenticating to Azure using federated credentials...");
  core.info(`Client ID: ${clientId}`);
  core.info(`Tenant ID: ${tenantId}`);
  core.info(`Subscription ID: ${subscriptionId}`);

  // Get the GitHub OIDC token
  const githubToken = await core.getIDToken("api://AzureADTokenExchange");

  if (!githubToken) {
    throw new Error(
      "Failed to get GitHub OIDC token. Ensure id-token: write permission is set in workflow.",
    );
  }

  core.info("Retrieved GitHub OIDC token");

  // Create a credential that uses the GitHub OIDC token as a client assertion
  const credential = new ClientAssertionCredential(
    tenantId,
    clientId,
    async () => githubToken,
  );

  try {
    const res = await credential.getToken(
      "https://management.azure.com/.default",
    );
    core.info(
      "Successfully authenticated to Azure using federated credentials",
    );
    return res.token;
  } catch (error) {
    core.error("Failed to authenticate to Azure");
    throw new Error(
      `Azure authentication failed: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
