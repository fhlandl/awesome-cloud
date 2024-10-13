import axios, { AxiosInstance } from 'axios';
import { SERVER_URL } from '../config/url';
import { IStorageNodeRecord } from '../types/StorageTypes';

interface IFetchDataOutput {
  fileSystem: IStorageNodeRecord[];
}

class StorageRepository {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: SERVER_URL,
    });
  }

  public async fetchData(): Promise<IFetchDataOutput> {
    return this.client.get('storage/file-system').then((res) => {
      return res.data;
    });
  }
}

export default StorageRepository;
