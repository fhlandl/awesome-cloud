import { createContext, ReactNode } from 'react';
import StorageRepository from '../repository/StorageRepository';

interface IProps {
  children: ReactNode;
}

interface IStorageRepositoryContextProps {
  storageRepository: StorageRepository;
}

export const StorageRepositoryContext =
  createContext<IStorageRepositoryContextProps>(
    {} as IStorageRepositoryContextProps
  );

const storageRepository = new StorageRepository();

export const StorageRepositoryProvider = (props: IProps) => {
  const { children } = props;

  return (
    <StorageRepositoryContext.Provider value={{ storageRepository }}>
      {children}
    </StorageRepositoryContext.Provider>
  );
};
