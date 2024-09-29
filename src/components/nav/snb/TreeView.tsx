import React, { useState } from 'react';
import SpreadButton from '../../ui/SpreadButton';
import SNBItemContent from './SNBItemContent';
import styles from './TreeView.module.scss';

type NodeId = string;

export interface INodeType {
  id: NodeId;
  title: string;
  children?: INodeType[];
}

interface INodeProps {
  node: INodeType;
  depth: number;
  expandedNodes: Set<NodeId>;
  toggleNode: (id: NodeId) => void;
}

interface ITreeViewProps {
  data: INodeType[];
}

const TreeNode = (props: INodeProps) => {
  const { node, depth, expandedNodes, toggleNode } = props;
  const expanded = expandedNodes.has(node.id);

  const indent = depth - 1;
  const indentSize = 10;
  const indentStyle = {
    marginLeft: indent * indentSize,
  };

  return (
    <div className={styles.node}>
      <SNBItemContent
        title={node.title}
        location="/root"
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
            key={child.id}
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
  const { data } = props;
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
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          depth={1}
          expandedNodes={expandedNodes}
          toggleNode={toggleNode}
        />
      ))}
    </div>
  );
};

export default TreeView;
