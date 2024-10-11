import { action, makeObservable, observable } from 'mobx';
import {
  IStorageNode,
  ROOT_ID,
  ROOT_NAME,
  StorageNodeId,
} from '../types/StorageTypes';

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

  public findNodeById(nodeId: StorageNodeId): IStorageNode | null {
    return this.findNodeImpl(this.root, nodeId);
  }

  private findNodeImpl(
    node: IStorageNode,
    nodeId: StorageNodeId
  ): IStorageNode | null {
    if (node.id === nodeId) {
      return node;
    }

    for (const child of node.children) {
      const result = this.findNodeImpl(child, nodeId);
      if (result !== null) {
        return result;
      }
    }

    return null;
  }
}

export default CloudStorage;
