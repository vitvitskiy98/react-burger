import React from "react";
import PropTypes from "prop-types";
import burgerIngredientStyle from "./burger-ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
export const BurgerIngredient = ({
  image,
  quantity,
  description,
  children,
  alt,
}) => {
  return (
    <div className={burgerIngredientStyle.burgerIngredientWrapper}>
      <img src={image} alt={alt} />
      {children}
      <div className={burgerIngredientStyle.currencyBlock}>
        <span className={burgerIngredientStyle.quantity}>{quantity}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div>
        <p className={burgerIngredientStyle.description}>{description}</p>
      </div>
    </div>
  );
};

BurgerIngredient.propTypes = PropTypes.shape({
  image: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string,
  children: PropTypes.any,
  alt: PropTypes.string,
  key:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});
