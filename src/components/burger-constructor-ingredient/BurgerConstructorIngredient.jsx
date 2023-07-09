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
  children: PropTypes.any?.isRequired,
  type: PropTypes.string?.isRequired,
  isLocked: PropTypes.bool?.isRequired,
  text: PropTypes.string?.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  thumbnail: PropTypes.string.isRequired,
};
