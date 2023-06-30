import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { CloseIcon, CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import ModalOverlay from "./modal-overlay/modal-overlay";

const modalRoot = document.getElementById("react-modals");

// const Modal = ({ onClose, children }) => {
//   const closeModal = () => {
//     onClose();
//   };

//   const handleKeyDown = (event) => {
//     if (event.keyCode === 27 && onClose) {
//       closeModal();
//       console.log("clicked escape");
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [handleKeyDown]);

//   return ReactDOM.createPortal(
//     <>
//       <ModalOverlay closeModal={closeModal}>
//         <div className={modalStyles.modal}>
//           <div className={modalStyles.children}>{children}</div>
//           <div className={modalStyles.icon} onClick={onClose}>
//             <CloseIcon type="primary" className={modalStyles.svg} />
//           </div>
//         </div>
//       </ModalOverlay>
//     </>,
//     modalRoot
//   );
// };

// export default Modal;



