import StorageNode from './StorageNode';

class StorageFile extends StorageNode {
  constructor(name: string, parent: StorageNode | null) {
    super(name, parent);
  }
}

export default StorageFile;
