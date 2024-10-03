import { action, makeObservable, observable } from 'mobx';
import { ROOT_ID, ROOT_NAME } from '../types/StorageTypes';
import { INodeType } from '../types/TreeViewTypes';

class CloudStorage {
  @observable
  private root: INodeType;

  constructor() {
    makeObservable(this);
    this.root = {
      id: ROOT_ID,
      name: ROOT_NAME,
      children: [],
    };
  }

  @action
  public update(root: INodeType): void {
    this.root = root;
  }

  public getRoot(): INodeType {
    return this.root;
  }
}

export default CloudStorage;
