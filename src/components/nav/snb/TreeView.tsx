import React, { useState } from 'react';
import SpreadButton from '../../ui/SpreadButton';
import SNBItemContent from './SNBItemContent';
import styles from './TreeView.module.scss';
import { NodeId } from '../../../types/StorageTypes';
import { INodeType } from '../../../types/TreeViewTypes';

interface INodeProps {
  node: INodeType;
  depth: number;
  expandedNodes: Set<NodeId>;
  toggleNode: (id: NodeId) => void;
}

interface ITreeViewProps {
  root: INodeType;
}

const ROOT_PATH = '/drive/root';
const DIR_PATH = '/drive/dirs';

const TreeNode = (props: INodeProps) => {
  const { node, depth, expandedNodes, toggleNode } = props;
  const isFile = node.dType === 'F';
  if (isFile) return <></>;

  const isRoot = depth === 1;
  const location = isRoot ? ROOT_PATH : `${DIR_PATH}/${node.id}`;
  const expanded = expandedNodes.has(node.id);

  const indent = depth - 1;
  const indentSize = 10;
  const indentStyle = {
    marginLeft: indent * indentSize,
  };

  return (
    <div className={styles.node}>
      <SNBItemContent
        title={node.name}
        location={location}
        indentStyle={indentStyle}
      >
        <SpreadButton
          active={expanded}
          onClick={() => {
            toggleNode(node.id);
          }}
        />
      </SNBItemContent>
      {expanded &&
        node.children?.map((child) => (
          <TreeNode
            key={`tree-node-${child.id}`}
            node={child}
            depth={depth + 1}
            expandedNodes={expandedNodes}
            toggleNode={toggleNode}
          />
        ))}
    </div>
  );
};

const TreeView = (props: ITreeViewProps) => {
  const { root } = props;
  const [expandedNodes, setExpandedNodes] = useState<Set<NodeId>>(new Set());

  const toggleNode = (id: NodeId) => {
    if (expandedNodes.has(id)) {
      setExpandedNodes((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    } else {
      setExpandedNodes((prev) => {
        const newSet = new Set(prev);
        newSet.add(id);
        return newSet;
      });
    }
  };

  return (
    <div className={styles.tree}>
      <TreeNode
        key={`tree-node-${root.id}`}
        node={root}
        depth={1}
        expandedNodes={expandedNodes}
        toggleNode={toggleNode}
      />
    </div>
  );
};

export default TreeView;
