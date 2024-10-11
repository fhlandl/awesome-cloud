import { describe, test } from 'vitest';
import { convertDBRecordsToTreeNode, printTreeNode } from './StorageUtil';

describe('StorageUtil Test', () => {
  test('convertDBDataToTreeData - sorted input', () => {
    const dbData = [
      { id: 0, name: 'root', parentId: null, dType: 'D' },
      { id: 1, name: 'name1', parentId: 0, dType: 'D' },
      { id: 2, name: 'name2', parentId: 0, dType: 'D' },
      { id: 3, name: 'name3', parentId: 1, dType: 'D' },
      { id: 4, name: 'name4', parentId: 1, dType: 'D' },
      { id: 5, name: 'name5', parentId: 2, dType: 'D' },
      { id: 6, name: 'name6', parentId: 2, dType: 'D' },
      { id: 7, name: 'name7', parentId: 3, dType: 'D' },
      { id: 8, name: 'name8', parentId: 6, dType: 'D' },
    ];

    const rootNode = convertDBRecordsToTreeNode(dbData);
    printTreeNode(rootNode);
  });

  test('convertDBDataToTreeData - not sorted input', () => {
    const dbData = [
      { id: 5, name: 'name5', parentId: 2, dType: 'D' },
      { id: 2, name: 'name2', parentId: 0, dType: 'D' },
      { id: 8, name: 'name8', parentId: 6, dType: 'D' },
      { id: 1, name: 'name1', parentId: 0, dType: 'D' },
      { id: 3, name: 'name3', parentId: 1, dType: 'D' },
      { id: 6, name: 'name6', parentId: 2, dType: 'D' },
      { id: 0, name: 'root', parentId: null, dType: 'D' },
      { id: 7, name: 'name7', parentId: 3, dType: 'D' },
      { id: 4, name: 'name4', parentId: 1, dType: 'D' },
    ];

    const rootNode = convertDBRecordsToTreeNode(dbData);
    printTreeNode(rootNode);
  });

  test('convertDBDataToTreeData - not sorted pure node input', () => {
    const dbData = [
      { id: 5, name: 'name5', parentId: 2 },
      { id: 2, name: 'name2', parentId: 0 },
      { id: 8, name: 'name8', parentId: 6 },
      { id: 1, name: 'name1', parentId: 0 },
      { id: 3, name: 'name3', parentId: 1 },
      { id: 6, name: 'name6', parentId: 2 },
      { id: 0, name: 'root', parentId: null },
      { id: 7, name: 'name7', parentId: 3 },
      { id: 4, name: 'name4', parentId: 1 },
    ];

    const rootNode = convertDBRecordsToTreeNode(dbData);
    printTreeNode(rootNode);
  });
});
