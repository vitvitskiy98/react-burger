import React, { useState, useMemo, useContext } from "react";
import burgerConstructorStyle from "./burger-constructor.module.css";
// import orderDetailsStyle from "./orderDetails.module.css";
import { BurgerConstructorIngredient } from "../burger-constructor-ingredient/BurgerConstructorIngredient";
import Modal from "../modals/Modal";
import {
  DragIcon,
  CurrencyIcon,
  Button,ConstructorElement
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "./OrderDetails";
import { dataContext } from "../services/dataContext";
export const BurgerConstructor = () => {
  const { ...dataState } = useContext(dataContext);
  const [openModal, setOpenModal] = useState(false);
  const bun = dataState.data.filter((el) => el.type === "bun")[0];

  const filteredData = useMemo(
    () => [
      dataState.data[8],
      dataState.data[5],
      dataState.data[11],
      dataState.data[10],
      dataState.data[10]
    ],
    [dataState]
  );

  let total = useMemo(
    () =>
      filteredData
        .map((elem, index) => elem?.price)
        .reduce((acc, cur) => acc + cur, (bun?.price) *2),
    [filteredData, bun?.price]
  );

  const { isLoading, hasError } = dataState;

  return (
    <div className={`${burgerConstructorStyle.block} mt-25`}>
      <div className={`${burgerConstructorStyle.ingredientsBlock}`}>
      <ConstructorElement
            type="top"
            isLocked={bun?.isLocked}
            text={`${bun?.name} (верх)`}
            price={bun?.price}
            thumbnail={bun?.image}
          /> 
          </div>
        <div className={`${burgerConstructorStyle.chosenIngredients}`}>
          {isLoading && "Загрузка..."}
          {hasError && "Произошла ошибка"}
          {!isLoading &&
            !hasError &&
            filteredData.length &&
            filteredData.map((elem, index) =>
                <BurgerConstructorIngredient
                  key={index}
                  text={elem?.name}
                  price={elem?.price}
                  thumbnail={elem?.image}
                  children={<DragIcon type="primary" />}
                />
            )}
        </div>
        <div className={`${burgerConstructorStyle.ingredientsBlock}`}>
        <ConstructorElement
            type="top"
            isLocked={bun?.isLocked}
            text={`${bun?.name} (низ)`}
            price={bun?.price}
            thumbnail={bun?.image}
          /> 
      </div>
      <div className={`${burgerConstructorStyle.totalBlock} mt-10`}>
        <div className={`${burgerConstructorStyle.total}`}>
          <h1 className={`${burgerConstructorStyle.totalHeading}`}>{total}</h1>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={`${burgerConstructorStyle.button}`}
          onClick={() => setOpenModal(true)}
        >
          Оформить заказ
        </Button>

        <Modal open={openModal} closeModal={() => setOpenModal(false)}>
          <OrderDetails />
        </Modal>
      </div>
    </div>
  );
};
