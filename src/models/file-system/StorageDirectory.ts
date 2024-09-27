import StorageFile from './StorageFile';
import StorageNode from './StorageNode';

class StorageDirectory extends StorageNode {
  private children: (StorageDirectory | StorageFile)[];

  constructor(name: string, parent: StorageNode | null) {
    super(name, parent);
    this.children = [];
  }

  public add(child: StorageDirectory | StorageFile) {
    this.children.push(child);
  }
}

export default StorageDirectory;
