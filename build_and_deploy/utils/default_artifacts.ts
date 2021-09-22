
import {DataFactoryType} from "./artifacts_enum";

export class DefaultArtifact {
    public static LIST: DefaultArtifact[] = [
      new DefaultArtifact("workspacedefaultsqlserver", "azuresqldw", DataFactoryType.linkedservice),
      new DefaultArtifact("workspacedefaultstorage", "azureblobfs", DataFactoryType.linkedservice),
      new DefaultArtifact("workspacesystemidentity", "managedidentity", DataFactoryType.credential),
      new DefaultArtifact("autoresolveintegrationruntime", "managed", DataFactoryType.integrationruntime),
    ];

    private constructor(private name: string, private type: string, private dataFactoryType: DataFactoryType) {
    }

    public matches(name: string, type: string, dataFactoryType: string): boolean {
      return name.toLowerCase().indexOf(this.name) >= 0
        && type.toLowerCase() === this.type
        && dataFactoryType === this.dataFactoryType;
    }
}
