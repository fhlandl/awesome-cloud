import { useContext } from 'react';
import { FileSystemContext } from './FileSystemContext';

const useFileSystemContext = () => {
  return useContext(FileSystemContext);
};

export default useFileSystemContext;
