import React, { ReactNode, createContext, useEffect } from 'react';
import { convertDBDataToTreeData } from '../util/StorageUtil';
import CloudStorage from '../store/CloudStorage';

interface IProps {
  children: ReactNode;
}

export const FileSystemContext = createContext<CloudStorage>(
  {} as CloudStorage
);

const sampleData = [
  { id: 5, name: 'name5', parentId: 2 },
  { id: 2, name: 'name2', parentId: null },
  { id: 8, name: 'name8', parentId: 6 },
  { id: 1, name: 'name1', parentId: null },
  { id: 3, name: 'name3', parentId: 1 },
  { id: 6, name: 'name6', parentId: 2 },
  { id: 7, name: 'name7', parentId: 3 },
  { id: 4, name: 'name4', parentId: 1 },
];

const wait = (timeToDelay: number) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

const cloudStorage = new CloudStorage();

export const FileSystemProvider = (props: IProps) => {
  const { children } = props;

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching...');
      await wait(3000);
      const root = convertDBDataToTreeData(sampleData);
      cloudStorage.update(root);
      console.log('fetched...');
    };

    fetchData();
  }, []);

  return (
    <FileSystemContext.Provider value={cloudStorage}>
      {children}
    </FileSystemContext.Provider>
  );
};
