import StorageDirectory from './StorageDirectory';

const ROOT_NAME = 'root';

class CloudStorage {
  private rootDir: StorageDirectory;

  constructor() {
    this.rootDir = new StorageDirectory(ROOT_NAME, null);
  }
}

export default CloudStorage;
