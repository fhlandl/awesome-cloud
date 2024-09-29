import React, { useEffect, useRef, useState } from 'react';
import { IoIosSettings } from 'react-icons/io';
import styles from './SettingDropdown.module.scss';

const SettingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      const current = ref.current;
      if (isOpen && current && !current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItem1Clicked = () => {
    console.log('item 1 clicked');
  };

  const handleItem2Clicked = () => {
    console.log('item 2 clicked');
  };

  const handleItem3Clicked = () => {
    console.log('item 3 clicked');
  };

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={styles.dropdown_btn} onClick={toggleDropdown}>
        <IoIosSettings />
      </div>
      {isOpen && (
        <ul className={styles.dropdown_menu}>
          <li onClick={handleItem1Clicked}>item 1</li>
          <li onClick={handleItem2Clicked}>item 2</li>
          <li onClick={handleItem3Clicked}>item 3</li>
        </ul>
      )}
    </div>
  );
};

export default SettingDropdown;
