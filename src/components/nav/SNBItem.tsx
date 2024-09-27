import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SNBItem.module.scss';

export interface ISNBItemProps {
  isHierarchy: boolean;
  title: string;
  location: string;
}

const SNBItem: React.FC<ISNBItemProps> = (props) => {
  const { isHierarchy, title, location } = props;
  return (
    <Link to={location}>
      <div className={styles.item}>
        {isHierarchy && (
          <div>
            <span>h </span>
            <span>{title}</span>
          </div>
        )}
        {!isHierarchy && (
          <div>
            <span>{title}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default SNBItem;
