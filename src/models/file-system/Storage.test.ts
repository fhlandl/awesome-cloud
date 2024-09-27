import { describe, test, expect } from 'vitest';
import StorageDirectory from './StorageDirectory';
import StorageFile from './StorageFile';

describe('Storage Data Structure Test', () => {
  test('getPath()', () => {
    const root = new StorageDirectory('root', null);
    const dir1 = new StorageDirectory('dir1', root);
    const file1_1 = new StorageFile('file1_1.txt', dir1);
    const file1_2 = new StorageFile('file1_2.txt', dir1);
    const dir2 = new StorageDirectory('dir2', root);
    const file2_1 = new StorageFile('file2_1.txt', dir2);
    const file2_2 = new StorageFile('file2_2.txt', dir2);

    root.add(dir1);
    root.add(dir2);
    dir1.add(file1_1);
    dir1.add(file1_2);
    dir2.add(file2_1);
    dir2.add(file2_2);

    console.log(file1_1.getPath());
    expect(file1_1.getPath()).toBe('root/dir1/file1_1.txt');
    expect(file2_2.getPath()).toBe('root/dir2/file2_2.txt');
  });
});
