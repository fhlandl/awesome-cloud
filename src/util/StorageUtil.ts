import {
  IStorageDBRecord,
  NodeId,
  ROOT_ID,
  ROOT_NAME,
} from '../types/StorageTypes';
import { INodeType } from '../types/TreeViewTypes';

type NodeMap = Map<NodeId, INodeType>;

export function convertDBDataToTreeData(
  records: IStorageDBRecord[]
): INodeType {
  const nodes: NodeMap = new Map();
  const rootNode = { id: ROOT_ID, name: ROOT_NAME, children: [] };

  records.forEach((record) => {
    nodes.set(record.id, { id: record.id, name: record.name, children: [] });
  });

  records.forEach((record) => {
    const { id, parentId } = record;
    const node = nodes.get(id)!;
    const parentNode = parentId === null ? rootNode : nodes.get(parentId);
    parentNode?.children?.push(node);
  });

  // ToDo: sorting

  return rootNode;
}

export function printTreeNode(node: INodeType, depth: number = 0): void {
  const { id, name, children } = node;
  const indent = '  '.repeat(depth);
  console.log(`${indent}id: ${id}, name: ${name}`);
  children?.forEach((child) => {
    printTreeNode(child, depth + 1);
  });
}
