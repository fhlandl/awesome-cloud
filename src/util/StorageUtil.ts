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
  let rootNode: INodeType = {
    id: ROOT_ID,
    name: ROOT_NAME,
    dType: 'D',
    children: [],
  };

  records.forEach((record) => {
    nodes.set(record.id, {
      id: record.id,
      name: record.name,
      dType: record.dType,
      children: [],
    });
  });

  records.forEach((record) => {
    const { id, parentId } = record;
    const node = nodes.get(id)!;
    const parentNode = parentId === null ? rootNode : nodes.get(parentId);
    parentNode?.children?.push(node);
  });

  rootNode = sortTree(rootNode);

  return rootNode;
}

function sortTree(node: INodeType): INodeType {
  const sortedChildren = node.children
    ? node.children
        .sort((l, r) => {
          return l.name < r.name ? -1 : l.name > r.name ? 1 : 0;
        })
        .map((child) => sortTree(child))
    : [];

  return {
    ...node,
    children: sortedChildren,
  };
}

// function sortTree(node: INodeType): void {
//   const queue = [node];

//   while (queue && queue.length > 0) {
//     const target = queue.shift();
//     target?.children?.sort((l, r) => {
//       return l.name < r.name ? -1 : l.name > r.name ? 1 : 0;
//     });

//     if (target?.children) {
//       queue.push(...target.children);
//     }
//   }
// }

export function printTreeNode(node: INodeType, depth: number = 0): void {
  const { id, name, dType, children } = node;
  const indent = '  '.repeat(depth);
  console.log(`${indent}id: ${id}, name: ${name}, dType: ${dType}`);
  children?.forEach((child) => {
    printTreeNode(child, depth + 1);
  });
}
