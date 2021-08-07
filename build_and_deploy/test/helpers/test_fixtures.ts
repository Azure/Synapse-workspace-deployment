export const DATASETPAYLOAD = {
    id: "/subscriptions/051ddeca-1ed6-4d8b-ba6f-1ff561e5f3b3/resourceGroups/bigdataqa/providers/Microsoft.Synapse/workspaces/bigdataqa0924ws/datasets/OutParquet",
    name: "OutParquet",
    type: "Microsoft.Synapse/workspaces/datasets",
    etag: "f608dd2e-0000-0200-0000-5f6d79a40000",
    properties: {
        linkedServiceName: {
            referenceName: "bigdataqa0924ws-WorkspaceDefaultStorage",
            type: "LinkedServiceReference"
        },
        annotations: [],
        type: "Parquet",
        typeProperties: {
            location: {
                type: "AzureBlobFSLocation",
                folderPath: "TestPipeline",
                fileSystem: "hozhao"
            },
            compressionCodec: "snappy"
        },
        schema: []
    }
}

export const PIPELINEPAYLOAD = {
    inputs: [
        {
            type: "DatasetReference",
            referenceName: "SourceDataset_pqd"
        }
    ],
    outputs: [
        {
            type: "DatasetReference",
            referenceName: "DestinationDataset_pqd"
        }
    ]
}

export const DEFAULTARTIFACTSQL = {
    "name": "[concat(parameters('workspaceName'), '/test-WorkspaceDefaultSqlServer')]",
    "type": "Microsoft.Synapse/workspaces/linkedServices",
    "apiVersion": "2019-06-01-preview",
    "properties": {
        "parameters": {
            "DBName": {
                "type": "String"
            }
        },
        "annotations": [],
        "type": "AzureSqlDW",
        "typeProperties": {
            "connectionString": "[parameters('dancicdtest-WorkspaceDefaultSqlServer_connectionString')]"
        },
        "connectVia": {
            "referenceName": "AutoResolveIntegrationRuntime",
            "type": "IntegrationRuntimeReference"
        }
    },
    "dependsOn": [
        "[concat(variables('workspaceId'), '/integrationRuntimes/AutoResolveIntegrationRuntime')]"
    ]
}

export const DEFAULTARTIFACTSTORAGE = {
    "name": "[concat(parameters('workspaceName'), '/test-WorkspaceDefaultStorage')]",
    "type": "Microsoft.Synapse/workspaces/linkedServices",
    "apiVersion": "2019-06-01-preview",
    "properties": {
        "annotations": [],
        "type": "AzureBlobFS",
        "typeProperties": {
            "url": "[parameters('dancicdtest-WorkspaceDefaultStorage_properties_typeProperties_url')]"
        },
        "connectVia": {
            "referenceName": "AutoResolveIntegrationRuntime",
            "type": "IntegrationRuntimeReference"
        }
    },
    "dependsOn": [
        "[concat(variables('workspaceId'), '/integrationRuntimes/AutoResolveIntegrationRuntime')]"
    ]
}

export const DEFAULTARTIFACTCREDENTAILS = {
    "name": "[concat(parameters('workspaceName'), '/WorkspaceSystemIdentity')]",
    "type": "Microsoft.Synapse/workspaces/credentials",
    "apiVersion": "2019-06-01-preview",
    "properties": {
        "type": "ManagedIdentity",
        "typeProperties": {}
    },
    "dependsOn": []
}

export const DEFAULTARTIFACTFAIl1 = {
    "name": "[concat(parameters('workspaceName'), '/test-WorkspaceStorage')]",
    "type": "Microsoft.Synapse/workspaces/linkedServices",
    "apiVersion": "2019-06-01-preview",
    "properties": {
        "annotations": [],
        "type": "AzureBlobFS",
        "typeProperties": {
            "url": "[parameters('dancicdtest-WorkspaceDefaultStorage_properties_typeProperties_url')]"
        },
        "connectVia": {
            "referenceName": "AutoResolveIntegrationRuntime",
            "type": "IntegrationRuntimeReference"
        }
    },
    "dependsOn": [
        "[concat(variables('workspaceId'), '/integrationRuntimes/AutoResolveIntegrationRuntime')]"
    ]
}

export const DEFAULTARTIFACTFAIl2 = {
    "name": "[concat(parameters('workspaceName'), '/test-WorkspaceDefaultStorage')]",
    "type": "Microsoft.Synapse/workspaces/linked",
    "apiVersion": "2019-06-01-preview",
    "properties": {
        "annotations": [],
        "type": "AzureBlobFS",
        "typeProperties": {
            "url": "[parameters('dancicdtest-WorkspaceDefaultStorage_properties_typeProperties_url')]"
        },
        "connectVia": {
            "referenceName": "AutoResolveIntegrationRuntime",
            "type": "IntegrationRuntimeReference"
        }
    },
    "dependsOn": [
        "[concat(variables('workspaceId'), '/integrationRuntimes/AutoResolveIntegrationRuntime')]"
    ]
}

export const DEFAULTARTIFACTFAIl3 = {
    "name": "[concat(parameters('workspaceName'), '/test-WorkspaceDefaultStorage')]",
    "type": "Microsoft.Synapse/workspaces/linkedServices",
    "apiVersion": "2019-06-01-preview",
    "properties": {
        "annotations": [],
        "type": "SparkPool",
        "typeProperties": {
            "url": "[parameters('dancicdtest-WorkspaceDefaultStorage_properties_typeProperties_url')]"
        },
        "connectVia": {
            "referenceName": "AutoResolveIntegrationRuntime",
            "type": "IntegrationRuntimeReference"
        }
    },
    "dependsOn": [
        "[concat(variables('workspaceId'), '/integrationRuntimes/AutoResolveIntegrationRuntime')]"
    ]
}

