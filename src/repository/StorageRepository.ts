import { IStorageNodeRecord, StorageNodeId } from '../types/StorageTypes';
import Repository from './Repository';

interface IFetchDataOutput {
  fileSystem: IStorageNodeRecord[];
}

interface IDeleteInput {
  id: number;
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

  public async delete(dto: IDeleteInput): Promise<void> {
    return this.client
      .post(`storage/delete`, dto, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
  }
}

export default StorageRepository;
