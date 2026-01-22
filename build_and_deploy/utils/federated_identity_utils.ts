import { ClientAssertionCredential } from "@azure/identity";
import * as core from "@actions/core";

export interface AzureFederatedConfig {
  clientId: string;
  tenantId: string;
  subscriptionId: string;
  resourceManagerEndpointUrl: string;
}

export async function getAzureFederatedToken(
  config: AzureFederatedConfig,
): Promise<string> {
  const { clientId, tenantId, subscriptionId, resourceManagerEndpointUrl } =
    config;

  // Runtime check to be safe - want to ensure these values are actually defined
  if (!clientId || !tenantId || !subscriptionId) {
    throw new Error(
      `Missing required Azure configuration. Ensure AZURE_CLIENT_ID, AZURE_TENANT_ID, and AZURE_SUBSCRIPTION_ID are set`,
    );
  }

  // TODO: Use logging wrapper included in this project rather than call directly?
  // this applies to all core.info/etc calls in this file
  core.info("Authenticating to Azure using federated credentials...");
  core.info(`Client ID: ${clientId}`);
  core.info(`Tenant ID: ${tenantId}`);
  core.info(`Subscription ID: ${subscriptionId}`);

  // Get the GitHub OIDC token
  // NOTE: 'api://AzureADTokenExchange' if the default audience set when a
  // new federated credential is configured for GitHub in Entra. While it is
  // possible to change this *after* service principal creation - it should not
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
      appendDefaultScope(resourceManagerEndpointUrl),
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

// Helper function so consumers do not need worry if a resource endpoint includes
// a trailing '/' or not - ran into this annoyance while testing federated identity
export function appendDefaultScope(url: string): string {
  return url.replace(/\/+$/, "") + "/.default";
}
