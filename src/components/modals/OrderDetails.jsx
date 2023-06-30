import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { CloseIcon, CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
 
const modalRoot = document.getElementById("react-modals");
const OrderDetails = ({ closeModal }) => {
    return ReactDOM.createPortal(
      <>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    {/* <button onClick={() => closeModal(false)}>X</button> */}
                    <CloseIcon type="primary" onClick={() => closeModal(false)}/>
                </div>
                <div className="title">
                    <h1 className="titleHeader">034536</h1>
                </div>
                <div className="body">
                    <p className="bodyText">идентификатор заказа</p>
                    <div className="checkMarkIcon">
                    <CheckMarkIcon type="primary"/>
                    </div>
                    <p className="bodyText2">Ваш заказ начали готовить</p>
                    <p className="bodyText2">Дождитесь готовности на орбитальной станции</p>
                </div>
                <div className="footer">
  
                </div>
            </div>
        </div>
        </>
    ,modalRoot
  );
  };
  
  export default OrderDetails
  
  