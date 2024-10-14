import React from 'react';
import { IStorageNode } from '../../types/StorageTypes';
import StorageIcon from '../ui/StorageIcon';
import styles from './DriveItem.module.scss';

interface IProps {
  node: IStorageNode;
}

const DriveItem = ({ node }: IProps) => {
  const { id, name, dType, userName, lastModifiedAt } = node;

  const ext = name.includes('.') ? name.split('.').reverse()[0] : undefined;
  return (
    <tr className={styles.dataRow}>
      <td>
        <div className={styles.nameArea}>
          <StorageIcon dType={dType} ext={ext} />
          <span>{name}</span>
        </div>
      </td>
      <td>{userName}</td>
      <td>{lastModifiedAt}</td>
      <td>1MB</td>
    </tr>
  );
};

export default DriveItem;
