import { useState, useCallback } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState({ confirm: false, notification: false });

  const toggleModal = useCallback((modalName) => {
    setIsOpen((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  return { isOpen, toggleModal };
};
