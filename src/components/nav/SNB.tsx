import React from 'react';
import styles from './SNB.module.scss';

const SNB = () => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <div>Item Example 1</div>
        <div>Item Example 2</div>
        <div>Item Example 3</div>
        <div>Item Example 4</div>
      </nav>
    </aside>
  );
};

export default SNB;
