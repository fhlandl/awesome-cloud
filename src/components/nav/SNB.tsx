import React from 'react';
import SNBItem, { ISNBItemProps } from './SNBItem';
import styles from './SNB.module.scss';

const itemList: ISNBItemProps[] = [
  { isHierarchy: true, title: 'Home', location: '/' },
  { isHierarchy: true, title: 'My Root', location: '/root' },
  { isHierarchy: false, title: 'Trash', location: '/trash' },
];

const SNB = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        {itemList.map((item) => {
          const { isHierarchy, title, location } = item;
          return (
            <SNBItem
              isHierarchy={isHierarchy}
              title={title}
              location={location}
            />
          );
        })}
      </nav>
    </aside>
  );
};

export default SNB;
