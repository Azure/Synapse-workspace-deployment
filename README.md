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
    required: true
  clientSecret:
    description: 'Provide client secret of the service principal.'
    required: true
  subscriptionId:
    description: 'Provide subscription id.'
    required: true
  tenantId:
    description: 'Provide tenant id.'
    required: true
  activeDirectoryEndpointUrl:
    description: 'Provide Active Directory Endpoint.'
    required: true
  resourceManagerEndpointUrl:
    description: 'Provide Resource Manager Endpoint.'
    required: true
  DeleteArtifactsNotInTemplate:
    description: 'Delete the artifacts which are in the workspace but not in the template.'
    required: false
```

## Usage

```yaml
uses: Azure/synapse-workspace-deployment
        with:
          TargetWorkspaceName: 'targetworkspace'
          TemplateFile: './TemplateForWorkspace.json'
          ParametersFile: './TemplateParametersForWorkspace.json'
          environment: 'prod'
          resourceGroup: 'myresourcegroup'
          clientId: ${{ secrets.CLIENTID }}
          clientSecret: ${{ secrets.CLIENTSECRET }}
          subscriptionId: ${{ secrets.SUBID }}
          tenantId: ${{ secrets.TENANTID }}
          activeDirectoryEndpointUrl: ${{ secrets.ADE }}
          resourceManagerEndpointUrl: ${{ secrets.RME }}
```


#### Secrets
`clientId`, `clientSecret`, `subscriptionId`, `tenantId`, `activeDirectoryEndpointUrl`, `resourceManagerEndpointUrl`
can be obtained by `Service Principal`. These are sensitive details and must be stored in GitHub secrets.

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

