import React, { useEffect, useRef, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { GoFileDirectory } from 'react-icons/go';
import styles from './MainMenuDropdown.module.scss';

const MainMenuDropdown = () => {
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

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={styles.dropdown_btn} onClick={toggleDropdown}>
        <CgMenuGridR />
      </div>
      {isOpen && (
        <ul className={styles.dropdown_menu}>
          <li>
            <GoFileDirectory size={'40px'} />
            <span>item 1</span>
          </li>
          <li>
            <GoFileDirectory size={'40px'} />
            <span>item 1</span>
          </li>
          <li>
            <GoFileDirectory size={'40px'} />
            <span>item 1</span>
          </li>
          <li>
            <GoFileDirectory size={'40px'} />
            <span>item 1</span>
          </li>
          <li>
            <GoFileDirectory size={'40px'} />
            <span>item 1</span>
          </li>
          <li>
            <GoFileDirectory size={'40px'} />
            <span>item 1</span>
          </li>
          <li>
            <GoFileDirectory size={'40px'} />
            <span>item 1</span>
          </li>
          <li>
            <GoFileDirectory size={'40px'} />
            <span>item 1</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MainMenuDropdown;
