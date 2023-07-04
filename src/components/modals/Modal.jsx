import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");
const Modal = ({ closeModal, children, open }) => {
  useEffect(() => {
    const onKeyPress = (e) => {
        if(e.key === "Escape") {
            closeModal()
        }
    }

    document.addEventListener("keydown", onKeyPress)

    return () => document.removeEventListener("keydown", onKeyPress)
}, [closeModal])

  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeModal={closeModal}/>
        <div className="modalBackground">
          <div className="modalContainer">
              <div className="titleCloseBtn">
                  <CloseIcon type="primary" onClick={() => closeModal()} />
              </div>
              {children}
          </div>
        </div>
        </>
     ,
      modalRoot
  );
};

Modal.propTypes = {
    closeModal: PropTypes.func,
    children: PropTypes.any,
    open: PropTypes.bool,
};

export default Modal;
