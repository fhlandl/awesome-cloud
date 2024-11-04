import axios, { AxiosInstance } from 'axios';
import { SERVER_URL } from '../config/url';

abstract class Repository {
  protected client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: SERVER_URL,
    });
  }
}

export default Repository;
