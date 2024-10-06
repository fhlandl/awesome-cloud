import { useContext } from 'react';
import { StorageRepositoryContext } from './StorageRepositoryContext';

const useStorageRepository = () => {
  return useContext(StorageRepositoryContext);
};

export default useStorageRepository;
