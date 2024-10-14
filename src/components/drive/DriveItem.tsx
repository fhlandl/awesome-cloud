import React, { useEffect, useRef, useState } from 'react';
import { IStorageNode } from '../../types/StorageTypes';
import StorageIcon from '../ui/StorageIcon';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './DriveItem.module.scss';
import { createPortal } from 'react-dom';

interface IProps {
  node: IStorageNode;
}

const DriveItem = ({ node }: IProps) => {
  const { id, name, dType, userName, lastModifiedAt } = node;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    right: number;
  }>({ top: 0, right: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (
        isMenuOpen &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (ref.current) {
      const { top, right } = ref.current.getBoundingClientRect();
      setMenuPosition({ top, right });
    }
  }, [ref]);

  const handleThreeDotClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <td>
        <div className={styles.contextMenu} ref={ref}>
          <div className={styles.threeDot} onClick={handleThreeDotClick}>
            <BsThreeDotsVertical />
          </div>
          {isMenuOpen &&
            createPortal(
              <ul className={styles.menuItems} style={menuPosition}>
                <li onClick={() => console.log('다운로드')}>다운로드</li>
                <li onClick={() => console.log('이름 바꾸기')}>이름 바꾸기</li>
              </ul>,
              document.body
            )}
        </div>
      </td>
    </tr>
  );
};

export default DriveItem;
