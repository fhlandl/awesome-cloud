import { NodeId } from './StorageTypes';

export interface INodeType {
  id: NodeId;
  name: string;
  dType: string;
  children?: INodeType[];
}
