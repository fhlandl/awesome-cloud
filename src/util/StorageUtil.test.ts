import { describe, test } from 'vitest';
import { convertDBDataToTreeData, printTreeNode } from './StorageUtil';

describe('StorageUtil Test', () => {
  test('convertDBDataToTreeData - sorted input', () => {
    const dbData = [
      { id: 1, name: 'name1', parentId: null, dType: 'D' },
      { id: 2, name: 'name2', parentId: null, dType: 'D' },
      { id: 3, name: 'name3', parentId: 1, dType: 'D' },
      { id: 4, name: 'name4', parentId: 1, dType: 'D' },
      { id: 5, name: 'name5', parentId: 2, dType: 'D' },
      { id: 6, name: 'name6', parentId: 2, dType: 'D' },
      { id: 7, name: 'name7', parentId: 3, dType: 'D' },
      { id: 8, name: 'name8', parentId: 6, dType: 'D' },
    ];

    const rootNode = convertDBDataToTreeData(dbData);
    printTreeNode(rootNode);
  });

  test('convertDBDataToTreeData - not sorted input', () => {
    const dbData = [
      { id: 5, name: 'name5', parentId: 2, dType: 'D' },
      { id: 2, name: 'name2', parentId: null, dType: 'D' },
      { id: 8, name: 'name8', parentId: 6, dType: 'D' },
      { id: 1, name: 'name1', parentId: null, dType: 'D' },
      { id: 3, name: 'name3', parentId: 1, dType: 'D' },
      { id: 6, name: 'name6', parentId: 2, dType: 'D' },
      { id: 7, name: 'name7', parentId: 3, dType: 'D' },
      { id: 4, name: 'name4', parentId: 1, dType: 'D' },
    ];

    const rootNode = convertDBDataToTreeData(dbData);
    printTreeNode(rootNode);
  });
});
