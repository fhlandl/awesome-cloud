import React, { ReactNode, createContext, useEffect } from 'react';
import { convertDBDataToTreeData } from '../util/StorageUtil';
import CloudStorage from '../store/CloudStorage';
import useStorageRepository from './useStorageRepository';
import { ROOT_ID, ROOT_NAME } from '../types/StorageTypes';
import { IStorageNode } from '../types/TreeViewTypes';

interface IProps {
  children: ReactNode;
}

interface IFileSystemContextProps {
  cloudStorage: CloudStorage;
}

export const FileSystemContext = createContext<IFileSystemContextProps>(
  {} as IFileSystemContextProps
);

// const sampleData = [
//   { id: 5, name: 'name5', parentId: 2 },
//   { id: 2, name: 'name2', parentId: null },
//   { id: 8, name: 'name8', parentId: 6 },
//   { id: 1, name: 'name1', parentId: null },
//   { id: 3, name: 'name3', parentId: 1 },
//   { id: 6, name: 'name6', parentId: 2 },
//   { id: 7, name: 'name7', parentId: 3 },
//   { id: 4, name: 'name4', parentId: 1 },
// ];

// const wait = (timeToDelay: number) =>
//   new Promise((resolve) => setTimeout(resolve, timeToDelay));

const cloudStorage = new CloudStorage();

export const FileSystemProvider = (props: IProps) => {
  const { children } = props;
  const { storageRepository } = useStorageRepository();

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching...');
      const { fileSystem } = await storageRepository.fetchData();
      const root = convertDBDataToTreeData(fileSystem, ROOT_ID, ROOT_NAME, {
        dType: 'D',
      }) as IStorageNode;
      cloudStorage.update(root);
      console.log('fetched...');
    };

    fetchData();
  }, [storageRepository]);

  return (
    <FileSystemContext.Provider value={{ cloudStorage }}>
      {children}
    </FileSystemContext.Provider>
  );
};
