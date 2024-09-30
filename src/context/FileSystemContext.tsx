import React, { ReactNode, createContext, useContext, useEffect } from 'react';
import CloudStorage from '../models/file-system/CloudStorage';

interface IStorageDBRecord {}

interface IProps {
  children: ReactNode;
}

const FileSystemContext = createContext<CloudStorage>({} as CloudStorage);

export const FileSystemProvider = (props: IProps) => {
  const { children } = props;
  const cloudStorage = new CloudStorage();

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData');
    };

    fetchData();
  }, []);

  return (
    <FileSystemContext.Provider value={cloudStorage}>
      {children}
    </FileSystemContext.Provider>
  );
};

export const useFileSystemContext = () => {
  return useContext(FileSystemContext);
};
