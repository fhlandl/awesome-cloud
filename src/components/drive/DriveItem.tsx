import React from 'react';
import { IStorageNode } from '../../types/StorageTypes';
import StorageIcon from '../ui/StorageIcon';
import { BsThreeDotsVertical } from 'react-icons/bs';
import useContextMenu from '../../hooks/context-menu/useContextMenu';
import styles from './DriveItem.module.scss';
import ContextMenu from '../context-menu/ContextMenu';
import useStorageRepository from '../../context/useStorageRepository';
import { downloadBlobAsFile } from '../../util/StorageUtil';

interface IProps {
  node: IStorageNode;
}

const DriveItem = ({ node }: IProps) => {
  const { id, name, dType, userName, lastModifiedAt } = node;
  const { menuRef, isOpen, position, handleTriggerClick } = useContextMenu({
    menuWidth: 100,
  });

  const { storageRepository } = useStorageRepository();

  const handleThreeDotClick = () => {
    handleTriggerClick();
  };

  const handleFileDownloadClick = async () => {
    if (dType === 'D') {
      alert('Directory download is not supported.');
      return;
    }
    const blob = await storageRepository.downloadFile(id);
    downloadBlobAsFile(name, blob);
  };

  const ext = name.includes('.') ? name.split('.').reverse()[0] : undefined;
  const menuOptions = [
    { label: '다운로드', onClick: handleFileDownloadClick },
    { label: '이름 바꾸기', onClick: () => console.log('이름 바꾸기') },
  ];

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
      <td>
        <div className={styles.contextMenu} ref={menuRef}>
          <div className={styles.threeDot} onClick={handleThreeDotClick}>
            <BsThreeDotsVertical />
          </div>
          {isOpen && <ContextMenu position={position} options={menuOptions} />}
        </div>
      </td>
    </tr>
  );
};

export default DriveItem;
