# GitHub action for Synapse Workspace artifacts deployment

A GitHub Action to deploy Synapse artifacts using templates. With this action you can automate your workflow to deploy artifacts and manage synapse resources.

## Dependencies
* [Checkout](https://github.com/actions/checkout) To check-out your repository so the workflow can access any specified template and parameter files.

## Inputs
```yaml
TargetWorkspaceName:
    description: 'Provide the Synapse workspace name where you want to deploy the artifacts.'
    required: true
  TemplateFile:
    description: 'Specify the path to the workspace artifacts template.'
    required: true
  ParametersFile:
    description: 'Specify the path to the template parameter file.'
    required: true
  OverrideArmParameters:
    description: 'Specify the path to deployment parameter values.'
    default: ''
    required: false
  Environment:
    description: 'Provide the type of cloud environment. Valid values are: Azure Public, Azure China, Azure US Government, Azure Germany'
    required: true
  resourceGroup:
    description: 'Provide the resource group of the target Synapse workspace.'
    required: true
  clientId:
    description: 'Provide client id of service principal.'
    required: false
  clientSecret:
    description: 'Provide client secret of the service principal.'
    required: false
  subscriptionId:
    description: 'Provide subscription id.'
    required: true
  tenantId:
    description: 'Provide tenant id.'
    required: false
  DeleteArtifactsNotInTemplate:
    description: 'Delete the artifacts which are in the workspace but not in the template.'
    required: false
  managedIdentity:
    description: 'Use managed identity to generate the bearer token'
    required: false
  deployManagedPrivateEndpoint:
    description: 'Deploy managed private endpoints in the template.'
    required: false
  FailOnMissingOverrides:
    description: 'Mark the pipeline as failed if ARM overrides are missing.'
    required: false
  ArtifactsFolder:
      description: 'Provide path to the root folder.'
      required: false
  operation:
      description: 'Provide name of the operation.'
      required: true
```

## Usage

Synapse Workspace Deployment action supports 3 operations : 

1. Deploy

```yaml
uses: Azure/synapse-workspace-deployment
        with:
          TargetWorkspaceName: 'targetworkspace'
          TemplateFile: './TemplateForWorkspace.json'
          ParametersFile: './TemplateParametersForWorkspace.json'
          environment: 'Azure Public'
          resourceGroup: 'myresourcegroup'
          clientId: ${{ secrets.CLIENTID }}
          clientSecret: ${{ secrets.CLIENTSECRET }}
          subscriptionId: ${{ secrets.SUBID }}
          tenantId: ${{ secrets.TENANTID }}
          operation: 'deploy'
```

2. Validate

```yaml
uses: Azure/synapse-workspace-deployment
        with:
          TargetWorkspaceName: 'targetworkspace'
          ArtifactsFolder: './RootFolder'
          operation: 'validate'
```

3. Validate and deploy

```yaml
uses: Azure/synapse-workspace-deployment
        with:
          TargetWorkspaceName: 'targetworkspace'
          ArtifactsFolder: './RootFolder'
          environment: 'Azure Public'
          resourceGroup: 'myresourcegroup'
          clientId: ${{ secrets.CLIENTID }}
          clientSecret: ${{ secrets.CLIENTSECRET }}
          subscriptionId: ${{ secrets.SUBID }}
          tenantId: ${{ secrets.TENANTID }}
          operation: 'validateDeploy'
```

Check the [documentation](https://docs.microsoft.com/en-us/azure/synapse-analytics/cicd/continuous-integration-delivery) for more details.

#### Using managed identity
MSI is only supported with self hosted VMs on Azure. Please set the runner as [self-hosted](https://docs.github.com/en/actions/hosting-your-own-runners/adding-self-hosted-runners).
Enabled the system assigned managed identity for your VM and add it to your Synapse studio as Synapse Admin.

```yaml
uses: Azure/synapse-workspace-deployment
        with:
          TargetWorkspaceName: 'targetworkspace'
          TemplateFile: './TemplateForWorkspace.json'
          ParametersFile: './TemplateParametersForWorkspace.json'
          environment: 'Azure Public'
          resourceGroup: 'myresourcegroup'
          subscriptionId: ${{ secrets.SUBID }}
          managedIdentity: true
```

#### Deploying managed private endpoints
In order to deploy managed private endpoints, pass deployManagedPrivateEndpoint is true.
Along with you may also be required to override the resourceIDs in the templates so that the new private endpoint
does not point to the same resource as source workspace.

#### Secrets
`clientSecret` is a sensitive detail and must be stored in GitHub secrets.

#### Overriding parameters (OverrideArmParameters)

The OverrideArmParameters file should contain key value pairs in yaml format.

If the parameters file has the following content:

```json
// ./devazuresynapse/TemplateForWorkspace.json
{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "AppSecrets_properties_typeProperties_baseUrl": {
      "value": "https://{{organization}}-dev-kv.Environment-kv.vault.azure.net/"
    },
    "devazuresynapse-WorkspaceDefaultStorage_properties_typeProperties_url": {
      "value": "https://dev{{organization}}datalake.dfs.core.windows.net"
    },
    "AzureDeltaLake_properties_typeProperties_url": {
      "value": "https://dev{{organization}}deltalake.dfs.core.windows.net"
    }
  }
}
```

```yaml
# ./parameters/production/parameters.yaml
AppSecrets_properties_typeProperties_baseUrl: https://{{organization}}-prod-kv.vault.azure.net/
devazuresynapse-WorkspaceDefaultStorage_properties_typeProperties_url: https://dev{{organization}}datalake.dfs.core.windows.net
AzureDeltaLake_properties_typeProperties_url: https://prod{{organization}}deltalake.dfs.core.windows.net
```

#### Environment
* Azure Public - https://dev.azuresynapse.net
* Azure China - https://dev.azuresynapse.azure.cn
* Azure US Government - https://dev.azuresynapse.usgovcloudapi.net


## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

