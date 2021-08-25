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
    kqlScript = 'kqlScript'
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
    kqlScript = "Microsoft.Synapse/workspaces/kqlscripts"
}
export enum DEFAULT_ARTIFACTS {
    sqlserver = "workspacedefaultsqlserver",
    storage = "workspacedefaultstorage",
    credentials = "workspacesystemidentity",
    integrationruntime = "autoresolveintegrationruntime"
}

export enum DEFAULT_ARTIFACTS_TYPE {
    sqlserver = "AzureSqlDW",
    storage = "AzureBlobFS",
    credentials = "ManagedIdentity",
    integrationruntime = "Managed"
}
