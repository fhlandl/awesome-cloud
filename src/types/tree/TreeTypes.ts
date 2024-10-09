export interface ITreeNode<NodeId> {
  id: NodeId;
  name: string;
  children: ITreeNode<NodeId>[];
}
