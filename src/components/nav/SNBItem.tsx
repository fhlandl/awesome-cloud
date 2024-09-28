import React from 'react';
import TreeView, { INodeType } from './TreeView';
import SNBItemContent from './SNBItemContent';

export interface ISNBItemProps {
  title: string;
  location: string;
  treeData?: INodeType[];
}

interface ITreeViewContentProps {
  data: INodeType[];
}

const TreeViewContent = (props: ITreeViewContentProps) => {
  return <TreeView data={props.data} />;
};

const NonTreeViewContent = (props: ISNBItemProps) => {
  const { title, location } = props;

  return <SNBItemContent title={title} location={location} />;
};

const SNBItem = (props: ISNBItemProps) => {
  const { treeData } = props;

  return (
    <>
      {treeData ? (
        <TreeViewContent data={treeData} />
      ) : (
        <NonTreeViewContent {...props} />
      )}
    </>
  );
};

export default SNBItem;
