import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './SNBItemContent.module.scss';

interface IProps {
  title: string;
  location: string;
  children?: ReactNode;
  indentStyle?: {
    marginLeft: number;
  };
}

const SNBItemContent = (props: IProps) => {
  const { title, location, children, indentStyle } = props;

  return (
    <div className={styles.item} style={{ ...indentStyle }}>
      <div className={styles.iconArea}>{children}</div>
      <Link to={location} className={styles.link}>
        <span className={styles.itemTitle}>{title}</span>
      </Link>
    </div>
  );
};

export default SNBItemContent;
