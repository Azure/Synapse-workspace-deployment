export enum Artifact {
    notebook = 'notebook',
    sparkjobdefinition = 'sparkJobDefinition',
    sqlscript = 'sqlScript',
    dataset = 'dataset',
    pipeline = 'pipeline',
    trigger = 'trigger',
    dataflow = 'dataflow',
    linkedservice = 'linkedService',
    integrationruntime = 'integrationRuntime',
    credential = 'credential',
    sqlpool = 'sqlpool',
    bigdatapools = 'bigdatapools',
    managedvirtualnetworks = 'managedVirtualNetworks',
    managedprivateendpoints = 'managedPrivateEndpoints',
    kqlScript = 'kqlScript',
    database = "database",
    sparkconfiguration = 'sparkConfiguration'
}

export enum DataFactoryType {
    dataset = "Microsoft.Synapse/workspaces/datasets",
    dataflow = "Microsoft.Synapse/workspaces/dataflows",
    linkedservice = "Microsoft.Synapse/workspaces/linkedServices",
    credential = "Microsoft.Synapse/workspaces/credentials",
    integrationruntime = "Microsoft.Synapse/workspaces/integrationRuntimes",
    notebook = "Microsoft.Synapse/workspaces/notebooks",
    pipeline = "Microsoft.Synapse/workspaces/pipelines",
    sparkjobdefinition = "Microsoft.Synapse/workspaces/sparkJobDefinitions",
    bigdatapools = "Microsoft.Synapse/workspaces/bigDataPools",
    sqlscript = "Microsoft.Synapse/workspaces/sqlscripts",
    trigger = "Microsoft.Synapse/workspaces/triggers",
    sqlpool = "Microsoft.Synapse/workspaces/sqlPools",
    managedVirtualNetworks = "Microsoft.Synapse/workspaces/managedVirtualNetworks",
    managedPrivateEndpoints = "Microsoft.Synapse/workspaces/managedVirtualNetworks/managedPrivateEndpoints",
    kqlScript = "Microsoft.Synapse/workspaces/kqlscripts",
    database = "Microsoft.Synapse/workspaces/databases",
    sparkconfiguration = "Microsoft.Synapse/workspaces/sparkConfigurations"
}
export enum DEFAULT_ARTIFACTS {
    sqlserver = "workspacedefaultsqlserver",
    storage = "workspacedefaultstorage",
    credentials = "workspacesystemidentity"
}

export enum DEFAULT_ARTIFACTS_TYPE {
    sqlserver = "AzureSqlDW",
    storage = "AzureBlobFS",
    credentials = "ManagedIdentity"
}

export enum OPERATIONS {
    deploy = "deploy",
    validate = "validate",
    export = "export",
    validateDeploy = "validateDeploy"
}

export enum ExportConstants {
    destinationFolder = "ExportedArtifacts",
    templateFile = "TemplateForWorkspace.json",
    parameterFile = "TemplateParametersForWorkspace.json"
}