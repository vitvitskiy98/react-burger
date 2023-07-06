import React from "react";
import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorIngredientStyles from "./burger-constructor-ingredient.module.css";
export const BurgerConstructorIngredient = (props) => {
  return (
    <div className={`${burgerConstructorIngredientStyles.block}`}>
      {props.children}
      <div
        className={`${burgerConstructorIngredientStyles.burgerConstStyle} mt-4 ml-9`}
      >
        <ConstructorElement
          type={props.type}
          isLocked={props.isLocked}
          text={props.text}
          price={props.price}
          thumbnail={props.thumbnail}
        />
      </div>
    </div>
  );
};

BurgerConstructorIngredient.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  thumbnail: PropTypes.string,
  children: PropTypes.any,
};
