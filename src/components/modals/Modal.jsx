import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");
const Modal = ({ closeModal, children, open }) => {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
      <ModalOverlay closeModal={closeModal}>
        <div >
          <div className="modalContainer">
              <div className="titleCloseBtn">
                  <CloseIcon type="primary" onClick={() => closeModal()} />
              </div>

              {children}
          </div>
        </div>
      </ModalOverlay>,
      modalRoot
  );
};

Modal.propTypes = PropTypes.shape({
    closeModal: PropTypes.func,
    children: PropTypes.any,
    open: PropTypes.bool,
});

export default Modal;
