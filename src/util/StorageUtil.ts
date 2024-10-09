import { ITreeNodeRecord } from '../types/tree/TreeRecordTypes';
import { ITreeNode } from '../types/tree/TreeTypes';

export function convertDBDataToTreeData<
  NodeId,
  RecordType extends ITreeNodeRecord<NodeId>,
  NodeType extends ITreeNode<NodeId>
>(
  records: RecordType[],
  rootId: NodeId,
  rootName: string,
  rootProps?: Omit<NodeType, 'id' | 'name' | 'children'>
): NodeType {
  const nodes: Map<NodeId, NodeType> = new Map();
  let rootNode: NodeType = {
    id: rootId,
    name: rootName,
    // dType: 'D',
    children: [],
    ...rootProps,
  } as unknown as NodeType;

  records.forEach((record) => {
    const { id, name, parentId, ...others } = record;
    nodes.set(id, {
      id,
      name,
      children: [],
      ...others,
    } as unknown as NodeType);
  });

  records.forEach((record) => {
    const { id, parentId } = record;
    const node = nodes.get(id)!;
    const parentNode = parentId === null ? rootNode : nodes.get(parentId);
    parentNode?.children.push(node);
  });

  rootNode = sortTree(rootNode);

  return rootNode;
}

function sortTree<NodeId, NodeType extends ITreeNode<NodeId>>(
  node: NodeType
): NodeType {
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

export function printTreeNode<NodeId, NodeType extends ITreeNode<NodeId>>(
  node: NodeType,
  depth: number = 0
): void {
  const { id, name, children, ...others } = node;
  const indent = '  '.repeat(depth);
  let propString = '';
  for (const prop in others as Record<keyof typeof others, unknown>) {
    const key = prop as keyof typeof others;
    propString += `, ${prop}: ${others[key]}`;
  }
  console.log(`${indent}id: ${id}, name: ${name} ${propString}`);
  children?.forEach((child) => {
    printTreeNode(child, depth + 1);
  });
}
