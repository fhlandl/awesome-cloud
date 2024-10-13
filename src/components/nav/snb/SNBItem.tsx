import React from 'react';
import TreeView from './TreeView';
import SNBItemContent from './SNBItemContent';
import { IStorageNode } from '../../../types/StorageTypes';

export interface ISNBItemProps {
  title: string;
  location: string;
  treeRoot?: IStorageNode;
}

const TreeViewContent = (props: ISNBItemProps) => {
  const { title, treeRoot } = props;
  treeRoot!.name = title;
  return <TreeView root={treeRoot!} />;
};

const NonTreeViewContent = (props: ISNBItemProps) => {
  const { title, location } = props;

  return <SNBItemContent title={title} location={location} />;
};

const SNBItem = (props: ISNBItemProps) => {
  return (
    <>
      {props.treeRoot ? (
        <TreeViewContent {...props} />
      ) : (
        <NonTreeViewContent {...props} />
      )}
    </>
  );
};

export default SNBItem;
