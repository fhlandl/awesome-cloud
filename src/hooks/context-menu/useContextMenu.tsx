import { RefObject, useEffect, useRef, useState } from 'react';

interface IPosition {
  top: number;
  left: number;
}

interface IParams {
  menuWidth: number;
}

type Hook = ({ menuWidth }: IParams) => {
  menuRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  position: { top: number; left: number };
  handleTriggerClick: () => void;
};

const useContextMenu: Hook = ({ menuWidth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<IPosition>({ top: 0, left: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    const rect = menuRef.current?.getBoundingClientRect();
    if (rect) {
      const { bottom, left } = rect;
      setPosition({
        top: bottom,
        left: left - menuWidth,
      });
    }
    setIsOpen(!isOpen);
  };

  return { menuRef, isOpen, position, handleTriggerClick };
};

export default useContextMenu;
