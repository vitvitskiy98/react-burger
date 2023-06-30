import React, { useState, useEffect } from "react";
// import { data } from "../data/data";
import burgerConstructorStyle from "./burger-constructor.module.css";
import { BurgerConstructorIngredient } from "../burger-constructor-ingredient/BurgerConstructorIngredient";
import {
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
export const BurgerConstructor = () => {

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: [],
  });

  const getData = () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => res.json())
      .then((json) =>
        setState({
          loading: false,
          status: "success",
          data: [
            json.data[0],
            json.data[8],
            json.data[5],
            json.data[11],
            json.data[10],
            json.data[10],
            json.data[0],
          ],
        })
      )
      .catch((e) => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // const selectedData = [
  //   state.data[0],
  //   state.data[8],
  //   state.data[5],
  //   state.data[11],
  //   state.data[10],
  //   state.data[10],
  //   state.data[0],
  // ];
  
  let total = state.data.map((elem,index) => elem.price).reduce((acc, cur) => acc + cur, 0);

  const { isLoading, hasError, data } = state;

  return (
    <div className={`${burgerConstructorStyle.block} mt-25`}>
      <div className={`${burgerConstructorStyle.ingredientsBlock}`}>
        <div className={`${burgerConstructorStyle.chosenIngredients}`}>
          {isLoading && "Загрузка..."}
          {hasError && "Произошла ошибка"}
          {!isLoading &&
            !hasError &&
            data.length &&
            data.map((elem, index) =>
              index === 0 || data[data.length - 1] ? (
                <BurgerConstructorIngredient
                  key={index}
                  text={elem.name}
                  price={elem.price}
                  thumbnail={elem.image}
                />
              ) : (
                <BurgerConstructorIngredient
                  key={index}
                  text={elem.name}
                  price={elem.price}
                  thumbnail={elem.image}
                  children ={<DragIcon type="primary"/>}
                >
                  {/* <DragIcon type="primary"/> */}
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
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
