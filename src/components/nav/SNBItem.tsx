import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SpreadButton from '../ui/SpreadButton';
import styles from './SNBItem.module.scss';

export interface ISNBItemProps {
  isHierarchy: boolean;
  title: string;
  location: string;
}

const SNBItem = (props: ISNBItemProps) => {
  const { isHierarchy, title, location } = props;
  const [active, setActive] = useState(false);
  return (
    <div className={styles.item}>
      <div className={styles.iconArea}>
        {isHierarchy && (
          <SpreadButton
            active={active}
            onClick={() => {
              setActive(!active);
            }}
          />
        )}
      </div>
      <Link to={location} className={styles.link}>
        <span className={styles.itemTitle}>{title}</span>
      </Link>
    </div>
  );
};

export default SNBItem;
