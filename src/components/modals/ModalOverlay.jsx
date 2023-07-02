import React from "react";
import PropTypes from "prop-types";

const ModalOverlay = ({ closeModal }) => {
    return (
    <div className="modalBackground" onClick={closeModal}>
      <div onClick={e => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
      }}>
      </div>
    </div>
  );
};

ModalOverlay.propTypes = PropTypes.shape({
    closeModal: PropTypes.func,
    children: PropTypes.element,
});

export default ModalOverlay;
