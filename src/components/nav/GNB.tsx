import React from 'react';
import styles from './GNB.module.scss';
import SettingDropdown from './SettingDropdown';
import MainMenuDropdown from './MainMenuDropdown';

const GNB = () => {
  return (
    <header className={styles.header}>
      <h1>Awesome Cloud</h1>
      <nav className={styles.nav}>
        <MainMenuDropdown />
        <SettingDropdown />
      </nav>
    </header>
  );
};

export default GNB;
