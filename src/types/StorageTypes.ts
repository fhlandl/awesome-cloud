import { ITreeNodeRecord } from './tree/TreeRecordTypes';

export type StorageNodeId = number;

export const ROOT_ID: StorageNodeId = -1;

export const ROOT_NAME = 'root';

export interface IStorageDBRecord extends ITreeNodeRecord<StorageNodeId> {
  dType: string;
  userId?: number;
  path?: string;
  createdAt?: string;
  lastModifiedAt?: string;
}
