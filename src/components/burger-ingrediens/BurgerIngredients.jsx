import React from "react";
import burgerIngredientsStyle from './burger-ingredients.module.css'
import { BurgerCategory } from "../categories/burger-category/BurgerCategory";
import { Tabs } from "../tabs/Tabs";
import { SauceCategory } from "../categories/sauce-category/SauceCategory";
import { FillingCategory } from "../categories/filling-category/FillingCategory";
export const BurgerIngredients = () => {
  return (
    <div className={`${burgerIngredientsStyle.burgerIngredients} ml-85`}>
    <h2 className={`${burgerIngredientsStyle.burgerIngredientsHeading} mt-10`}>Соберите бургер</h2>
    <Tabs />
    <BurgerCategory/>
    <SauceCategory/>
    <FillingCategory/>
    </div>
  );
};
