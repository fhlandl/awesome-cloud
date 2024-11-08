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
  fetchData: () => Promise<void>;
}

export const FileSystemContext = createContext<IFileSystemContextProps>(
  {} as IFileSystemContextProps
);

const cloudStorage = new CloudStorage();

export const FileSystemProvider = (props: IProps) => {
  const { children } = props;
  const { storageRepository } = useStorageRepository();

  const fetchData = async () => {
    try {
      console.log('fetching...');
      const { fileSystem } = await storageRepository.fetchData();
      const root = convertDBRecordsToTreeNode(fileSystem) as IStorageNode;
      cloudStorage.update(root);
      console.log('fetched...');
    } catch (e) {
      console.error('Data fetching failed');
    }
  };

  useEffect(() => {
    fetchData();
  }, [storageRepository]);

  return (
    <FileSystemContext.Provider value={{ cloudStorage, fetchData }}>
      {children}
    </FileSystemContext.Provider>
  );
};
