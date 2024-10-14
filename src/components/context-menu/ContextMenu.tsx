import React from 'react';
import styles from './ContextMenu.module.scss';
import { createPortal } from 'react-dom';

interface IProps {
  position: { left: number; top: number };
  options: { label: string; onClick: () => void }[];
}

const ContextMenu = (props: IProps) => {
  const { position, options } = props;

  const container = document.getElementById('root') ?? document.body;

  const menu = (
    <div className={styles.contextMenu} style={position}>
      <ul>
        {options.map((option, index) => {
          return (
            <li
              key={`context-menu-${index}-${option.label}`}
              onClick={option.onClick}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return createPortal(menu, container);
};

export default ContextMenu;
