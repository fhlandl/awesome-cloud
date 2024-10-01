export type NodeId = number;

export const ROOT_ID: NodeId = -1;

export const ROOT_NAME = 'root';

export interface IStorageDBRecord {
  id: NodeId;
  name: string;
  parentId: NodeId | null;
  userId?: number;
  path?: string;
  createdAt?: string;
  lastModifiedAt?: string;
}
