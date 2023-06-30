import React, { useRef, useEffect } from "react";
import styles from './modal.module.css';

const ModalOverlay = ({ children, closeModal }) => {
  const overlayRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        closeModal();
        console.log("OutsideClick");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div className={styles.modalOverlay} ref={overlayRef}>
      {children}
    </div>
  );
};

export default ModalOverlay;
