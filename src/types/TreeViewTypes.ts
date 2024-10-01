import { NodeId } from './StorageTypes';

export interface INodeType {
  id: NodeId;
  name: string;
  children?: INodeType[];
}
