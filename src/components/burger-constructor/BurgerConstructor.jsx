import React from "react";
import { data } from "../data/data";
import burgerConstructorStyle from "./burger-constructor.module.css";
import { BurgerConstructorIngredient } from "../burger-constructor-ingredient/BurgerConstructorIngredient";
import {
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
export const BurgerConstructor = () => {
  let dataBurgerConstructor = [data[5], data[4], data[7], data[8], data[8]];
  let total = dataBurgerConstructor
    .map((elem) => elem.price)
    .reduce((acc, cur) => acc + cur, 40);
  return (
    <div className={`${burgerConstructorStyle.block} mt-25`}>
      <div className={`${burgerConstructorStyle.ingredientsBlock}`}>
        <BurgerConstructorIngredient
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail={data[0].image}
        />
        <div className={`${burgerConstructorStyle.chosenIngredients}`}>
          {dataBurgerConstructor.map((elem, index) => (
            <BurgerConstructorIngredient
              key={elem.index}
              text={elem.name}
              price={elem.price}
              thumbnail={elem.image}
            >
              <DragIcon type="primary" />
            </BurgerConstructorIngredient>
          ))}
        </div>
        <BurgerConstructorIngredient
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={20}
          thumbnail={data[0].image}
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
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
