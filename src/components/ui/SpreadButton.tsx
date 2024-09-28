import React from 'react';
import { GoTriangleRight } from 'react-icons/go';
import { GoTriangleDown } from 'react-icons/go';
import styles from './SpreadButton.module.scss';

interface IProps {
  active: boolean;
  onClick: () => void;
}

const SpreadButton = (props: IProps) => {
  const { active, onClick } = props;

  return (
    <div className={styles.spreadBtn} onClick={onClick}>
      {active ? <GoTriangleDown /> : <GoTriangleRight />}
    </div>
  );
};

export default SpreadButton;
