import React, { useState, useMemo, useContext } from "react";
import burgerConstructorStyle from "./burger-constructor.module.css";
// import orderDetailsStyle from "./orderDetails.module.css";
import { BurgerConstructorIngredient } from "../burger-constructor-ingredient/BurgerConstructorIngredient";
import Modal from "../modals/Modal";
import {
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "./OrderDetails";
import { dataContext } from "../services/dataContext";
export const BurgerConstructor = () => {
  const { ...dataState } = useContext(dataContext);
  const [openModal, setOpenModal] = useState(false);

  const filteredData = useMemo(
    () => [
      dataState.data[0],
      dataState.data[8],
      dataState.data[5],
      dataState.data[11],
      dataState.data[10],
      dataState.data[10],
      dataState.data[0],
    ],
    [dataState]
  );

  let total = useMemo(
    () =>
      filteredData
        .map((elem, index) => elem?.price)
        .reduce((acc, cur) => acc + cur, 0),
    [filteredData]
  );

  const { isLoading, hasError } = dataState;

  return (
    <div className={`${burgerConstructorStyle.block} mt-25`}>
      <div className={`${burgerConstructorStyle.ingredientsBlock}`}>
        <div className={`${burgerConstructorStyle.chosenIngredients}`}>
          {isLoading && "Загрузка..."}
          {hasError && "Произошла ошибка"}
          {!isLoading &&
            !hasError &&
            filteredData.length &&
            filteredData.map((elem, index) =>
              index === 0 || filteredData[filteredData.length - 1] ? (
                <BurgerConstructorIngredient
                  key={index}
                  text={elem?.name}
                  price={elem?.price}
                  thumbnail={elem?.image}
                />
              ) : (
                <BurgerConstructorIngredient
                  key={index}
                  text={elem?.name}
                  price={elem?.price}
                  thumbnail={elem?.image}
                >
                  {<DragIcon type="primary" />}
                </BurgerConstructorIngredient>
              )
            )}
        </div>
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
