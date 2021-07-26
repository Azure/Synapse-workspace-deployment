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