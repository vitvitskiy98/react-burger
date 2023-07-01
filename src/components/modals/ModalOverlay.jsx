import React, {useEffect} from "react";
import PropTypes from "prop-types";

const ModalOverlay = ({ children, closeModal }) => {
  useEffect(() => {
      const onKeyPress = (e) => {
          if(e.key === "Escape") {
              closeModal()
          }
      }

      document.addEventListener("keydown", onKeyPress)

      return () => document.removeEventListener("keydown", onKeyPress)
  }, [closeModal])

    return (
    <div className="modalBackground" onClick={closeModal}>
      <div onClick={e => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
      }}>
        {children}
      </div>
    </div>
  );
};

ModalOverlay.propTypes = PropTypes.shape({
    closeModal: PropTypes.func,
    children: PropTypes.element,
});

export default ModalOverlay;
