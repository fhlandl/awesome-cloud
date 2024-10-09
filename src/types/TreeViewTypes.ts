import { StorageNodeId } from './StorageTypes';
import { ITreeNode } from './tree/TreeTypes';

export interface IStorageNode extends ITreeNode<StorageNodeId> {
  dType: string;
}
