import StorageFile from './StorageFile';
import StorageNode from './StorageNode';

class Directory extends StorageNode {
  private children: (Directory | StorageFile)[];

  constructor(name: string) {
    super(name);
    this.children = [];
  }

  public add(child: Directory | StorageFile) {
    this.children.push(child);
  }
}

export default Directory;
