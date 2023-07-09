import React,{useRef, useEffect} from "react";
import PropTypes from "prop-types";

const ModalOverlay = ({ closeModal }) => {
  const overlayRef = useRef();
  useEffect(() => {
    const clickOutsideModal = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", clickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", clickOutsideModal);
    };
  }, [closeModal]);

    return (
    <div className="modalBackground" ref ={overlayRef} onClick={closeModal}>
      <div onClick={e => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
      }}>
      </div>
    </div>
  );
};

ModalOverlay.propTypes = {
    closeModal: PropTypes.func,
    children: PropTypes.element,
};

export default ModalOverlay;
