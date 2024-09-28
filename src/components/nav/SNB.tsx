import React from 'react';
import SNBItem, { ISNBItemProps } from './SNBItem';
import styles from './SNB.module.scss';

const treeData = [
  {
    id: '1',
    title: 'My Root',
    children: [
      {
        id: '1-1',
        title: 'Child 1',
        children: [
          { id: '1-1-1', title: 'Grandchild 1-1-1' },
          { id: '1-1-2', title: 'Grandchild 1-1-2' },
        ],
      },
      {
        id: '1-2',
        title: 'Child 2',
        children: [{ id: '1-2-1', title: 'Grandchild 1-2-1' }],
      },
    ],
  },
];

const itemList: ISNBItemProps[] = [
  { title: 'Home', location: '/' },
  {
    title: 'My Root',
    location: '/root',
    treeData: treeData,
  },
  { title: 'Trash', location: '/trash' },
];

const SNB = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        {itemList.map((item) => {
          const { title, location, treeData } = item;
          return (
            <SNBItem title={title} location={location} treeData={treeData} />
          );
        })}
      </nav>
    </aside>
  );
};

export default SNB;
