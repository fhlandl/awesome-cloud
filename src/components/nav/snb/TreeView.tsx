import React, { useState } from 'react';
import SpreadButton from '../../ui/SpreadButton';
import SNBItemContent from './SNBItemContent';
import styles from './TreeView.module.scss';
import { DIR_URL, StorageNodeId } from '../../../types/StorageTypes';
import { IStorageNode } from '../../../types/StorageTypes';

interface INodeProps {
  node: IStorageNode;
  depth: number;
  expandedNodes: Set<StorageNodeId>;
  toggleNode: (id: StorageNodeId) => void;
}

interface ITreeViewProps {
  root: IStorageNode;
}

const TreeNode = (props: INodeProps) => {
  const { node, depth, expandedNodes, toggleNode } = props;
  const isFile = node.dType === 'F';
  if (isFile) return <></>;

  const location = `${DIR_URL}/${node.id}`;
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
  const [expandedNodes, setExpandedNodes] = useState<Set<StorageNodeId>>(
    new Set()
  );

  const toggleNode = (id: StorageNodeId) => {
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
