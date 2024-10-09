import { action, makeObservable, observable } from 'mobx';
import { ROOT_ID, ROOT_NAME } from '../types/StorageTypes';
import { IStorageNode } from '../types/TreeViewTypes';

class CloudStorage {
  @observable
  private root: IStorageNode;

  constructor() {
    makeObservable(this);
    this.root = {
      id: ROOT_ID,
      name: ROOT_NAME,
      children: [],
      dType: 'D',
    };
  }

  @action
  public update(root: IStorageNode): void {
    this.root = root;
  }

  public getRoot(): IStorageNode {
    return this.root;
  }
}

export default CloudStorage;
