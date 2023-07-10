import React from "react";
import orderDetailsStyle from "./orderDetails.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
export default function OrderDetails({number}) {
  return (
    <>
      <h1 className={orderDetailsStyle.orderDetailsTitle}>{number}</h1>

      <p className={orderDetailsStyle.orderDetailsIdentifier}>
        идентификатор заказа
      </p>

      <div className={orderDetailsStyle.orderDetailsBody}>
        <div className={orderDetailsStyle.orderDetailsDoneIcon}>
          <CheckMarkIcon type="primary" />
        </div>

        <p className={orderDetailsStyle.orderDetailsBodyText1}>
          Ваш заказ начали готовить
        </p>

        <p className={orderDetailsStyle.orderDetailsBodyText2}>
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
}
