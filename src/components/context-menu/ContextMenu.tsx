import React, { useEffect, useRef } from 'react';
import styles from './ContextMenu.module.scss';
import { createPortal } from 'react-dom';

interface IProps {
  //   position: { x: number; y: number };
  options: { label: string; onClick: () => void }[];
  onClose: () => void;
}

const ContextMenu = (props: IProps) => {
  const { options, onClose } = props;
  const ref = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     const handleOutsideClick = (e: Event) => {
  //       console.log(e.target);
  //       if (ref.current && !ref.current.contains(e.target as Node)) {
  //         onClose();
  //       }
  //     };

  //     document.addEventListener('click', handleOutsideClick);
  //     return () => {
  //       document.removeEventListener('click', handleOutsideClick);
  //     };
  //   }, []);

  //   const menu = (
  //     <div
  //       className={styles.contextMenu}
  //       ref={ref}
  //       style={{ top: position.y, right: position.x }}
  //     >
  //       {options.map((option, index) => {
  //         return (
  //           <div
  //             key={`context-menu-${option.label}-${index}`}
  //             onClick={option.onClick}
  //           >
  //             {option.label}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );

  //   return createPortal(menu, document.body);

  return (
    <div
      className={styles.contextMenu}
      ref={ref}
      //   style={{ top: position.y, right: position.x }}
    >
      {options.map((option, index) => {
        return (
          <div
            key={`context-menu-${option.label}-${index}`}
            onClick={() => {
              option.onClick();
              onClose();
            }}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

export default ContextMenu;
