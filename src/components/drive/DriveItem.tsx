import React, { useEffect, useRef, useState } from 'react';
import { IStorageNode } from '../../types/StorageTypes';
import StorageIcon from '../ui/StorageIcon';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './DriveItem.module.scss';
import ContextMenu from '../context-menu/ContextMenu';

interface IProps {
  node: IStorageNode;
}

const DriveItem = ({ node }: IProps) => {
  const { id, name, dType, userName, lastModifiedAt } = node;
  const [menuPosition, setMenuPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      console.log(e.target);
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        handleCloseMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleThreeDotClick = (e: React.MouseEvent) => {
    // e.stopPropagation();
    // e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
    // setMenuPosition({ x: e.clientX, y: e.clientY });
    // if (menuRef.current) {
    //   const { top, left, width, height } =
    //     menuRef.current.getBoundingClientRect();
    //   setMenuPosition({
    //     x: 0,
    //     y: top + height,
    //   });
    // }
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    // setMenuPosition(null);
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
        <div
          className={styles.threeDot}
          ref={menuRef}
          onClick={handleThreeDotClick}
        >
          <BsThreeDotsVertical />
        </div>
        {isMenuOpen && (
          <ContextMenu
            // position={menuPosition}
            options={[
              {
                label: 'aaaaaaaa',
                onClick: () => console.log('aaaaaaaa clicked'),
              },
              {
                label: 'bbbbbbbb',
                onClick: () => console.log('bbbbbbbb clicked'),
              },
            ]}
            onClose={handleCloseMenu}
          />
        )}
      </td>
    </tr>
  );
};

export default DriveItem;
