import { ITreeNodeRecord } from '../types/tree/TreeRecordTypes';
import { ITreeNode } from '../types/tree/TreeTypes';

export function convertDBRecordsToTreeNode<
  NodeId,
  RecordType extends ITreeNodeRecord<NodeId>,
  NodeType extends ITreeNode<NodeId>
>(records: RecordType[]): NodeType {
  const nodes: Map<NodeId, NodeType> = new Map();

  let rootNode: NodeType = {} as NodeType;

  records.forEach((record) => {
    const { id, name, parentId, ...others } = record;
    const node = {
      id,
      name,
      children: [],
      ...others,
    } as unknown as NodeType;
    nodes.set(id, node);
    if (parentId === null) {
      rootNode = node;
    }
  });

  records.forEach((record) => {
    const { id, parentId } = record;
    if (parentId !== null) {
      const node = nodes.get(id)!;
      const parentNode = nodes.get(parentId);
      parentNode?.children.push(node);
    }
  });

  rootNode = sortTree(rootNode, [sortByDataType, sortByName]);

  return rootNode;
}

type SortFunctionType = <NodeId, NodeType extends ITreeNode<NodeId>>(
  l: NodeType,
  r: NodeType
) => 1 | -1 | 0;

function sortTree<NodeId, NodeType extends ITreeNode<NodeId>>(
  node: NodeType,
  sortFunctions: SortFunctionType[]
): NodeType {
  const sortedChildren = node.children
    ? node.children
        .sort((l, r) => {
          for (const sortFunc of sortFunctions) {
            const compared = sortFunc(l, r);
            if (compared !== 0) return compared;
          }
          return 0;
        })
        .map((child) => sortTree(child, sortFunctions))
    : [];

  return {
    ...node,
    children: sortedChildren,
  };
}

function sortByName<NodeId, NodeType extends ITreeNode<NodeId>>(
  l: NodeType,
  r: NodeType
): 1 | -1 | 0 {
  return l.name < r.name ? -1 : l.name > r.name ? 1 : 0;
}

function sortByDataType<NodeId, NodeType extends ITreeNode<NodeId>>(
  l: NodeType,
  r: NodeType
): 1 | -1 | 0 {
  if ('dType' in l && 'dType' in r) {
    if (l.dType === 'D' && r.dType === 'F') return -1;
    if (l.dType === 'F' && r.dType === 'D') return 1;
  }
  return 0;
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

export function downloadBlobAsFile(fileName: string, blob: Blob): void {
  try {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    link.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('File Download Error', error);
  }
}
