import React, { ReactNode, createContext, useEffect } from 'react';
import { convertDBRecordsToTreeNode } from '../util/StorageUtil';
import CloudStorage from '../store/CloudStorage';
import useStorageRepository from './useStorageRepository';
import { IStorageNode } from '../types/StorageTypes';

interface IProps {
  children: ReactNode;
}

interface IFileSystemContextProps {
  cloudStorage: CloudStorage;
}

export const FileSystemContext = createContext<IFileSystemContextProps>(
  {} as IFileSystemContextProps
);

const cloudStorage = new CloudStorage();

export const FileSystemProvider = (props: IProps) => {
  const { children } = props;
  const { storageRepository } = useStorageRepository();

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching...');
      const { fileSystem } = await storageRepository.fetchData();
      const root = convertDBRecordsToTreeNode(fileSystem) as IStorageNode;
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
