import { IStorageNodeRecord, StorageNodeId } from '../types/StorageTypes';
import Repository from './Repository';

interface IFetchDataOutput {
  fileSystem: IStorageNodeRecord[];
}

class StorageRepository extends Repository {
  public async fetchData(): Promise<IFetchDataOutput> {
    return this.client
      .get('storage/file-system', { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  }

  public async downloadFile(nodeId: StorageNodeId): Promise<Blob> {
    return this.client
      .get(`storage/download/${nodeId}`, { responseType: 'blob' })
      .then((res) => {
        return new Blob([res.data]);
      });
  }
}

export default StorageRepository;
