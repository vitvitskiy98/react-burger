import React from "react";
import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorIngredientStyles from "./burger-constructor-ingredient.module.css";
export const BurgerConstructorIngredient = ({
  children,
  type,
  isLocked,
  text,
  price,
  thumbnail,
}) => {
  return (
    <div className={`${burgerConstructorIngredientStyles.block}`}>
      {children}
      <div className={`${burgerConstructorIngredientStyles.burgerConstStyle}`}>
        <ConstructorElement
          type={type}
          isLocked={isLocked}
          text={text}
          price={price}
          thumbnail={thumbnail}
        />
      </div>
    </div>
  );
};

BurgerConstructorIngredient.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  thumbnail: PropTypes.string,
};
