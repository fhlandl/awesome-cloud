import { ITreeNodeRecord } from './tree/TreeRecordTypes';
import { ITreeNode } from './tree/TreeTypes';

export type StorageNodeId = number;

export const ROOT_ID: StorageNodeId = -1;

export const ROOT_NAME = 'root';

export const DIR_URL = '/drive/dirs';

export interface IStorageNodeRecord extends ITreeNodeRecord<StorageNodeId> {
  dType: string;
  userId?: number;
  path?: string;
  createdAt?: string;
  lastModifiedAt: string;
  userName: string;
}

export interface IStorageNode extends ITreeNode<StorageNodeId> {
  children: IStorageNode[];
  dType: string;
  lastModifiedAt: string;
  userName: string;
}
