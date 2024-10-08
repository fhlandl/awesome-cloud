import React from 'react';
import SNBItem, { ISNBItemProps } from './SNBItem';
import styles from './SNB.module.scss';
import { observer } from 'mobx-react-lite';
import useFileSystemContext from '../../../context/useFileSystemContext';

const itemList: ISNBItemProps[] = [
  { title: 'Home', location: '/' },
  {
    title: 'My Root',
    location: '/drive',
  },
  { title: 'Trash', location: '/trash' },
];

const SNB = () => {
  const { cloudStorage } = useFileSystemContext();

  itemList[1].treeRoot = cloudStorage.getRoot(); // ToDo: remove hard coding index

  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        {itemList.map((item) => {
          const { title, location, treeRoot } = item;
          return (
            <SNBItem
              key={`snb-item-${title}`}
              title={title}
              location={location}
              treeRoot={treeRoot}
            />
          );
        })}
      </nav>
    </aside>
  );
};

export default observer(SNB);
