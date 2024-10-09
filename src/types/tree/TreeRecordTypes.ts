export interface ITreeNodeRecord<NodeId> {
  id: NodeId;
  name: string;
  parentId: NodeId | null;
}
