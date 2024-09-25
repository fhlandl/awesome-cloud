abstract class StorageNode {
  private name: string;

  private parent: StorageNode | null;

  private createdAt: Date;

  constructor(name: string, parent: StorageNode | null) {
    this.name = name;
    this.createdAt = new Date();
    this.parent = parent;
  }

  public getPath(): string {
    return this.parent ? `${this.parent.getPath()}/${this.name}` : this.name;
  }
}

export default StorageNode;
