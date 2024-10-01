import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { INodeType } from '../types/TreeViewTypes';
import { convertDBDataToTreeData } from '../util/StorageUtil';
import { ROOT_ID, ROOT_NAME } from '../types/StorageTypes';

interface IProps {
  children: ReactNode;
}

interface IContextType {
  storageRoot: INodeType;
  setStorageRoot: React.Dispatch<React.SetStateAction<INodeType>>;
}

const FileSystemContext = createContext<IContextType>({} as IContextType);

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

export const FileSystemProvider = (props: IProps) => {
  const { children } = props;
  const [storageRoot, setStorageRoot] = useState<INodeType>({
    id: ROOT_ID,
    name: ROOT_NAME,
    children: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching...');
      await wait(3000);
      const data = convertDBDataToTreeData(sampleData);
      setStorageRoot(data);
      console.log('fetched...');
    };

    fetchData();
  }, []);

  return (
    <FileSystemContext.Provider value={{ storageRoot, setStorageRoot }}>
      {children}
    </FileSystemContext.Provider>
  );
};

export const useFileSystemContext = () => {
  return useContext(FileSystemContext);
};
