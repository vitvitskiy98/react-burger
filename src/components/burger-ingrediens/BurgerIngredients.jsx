import React from "react";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import { BurgerCategory } from "../categories/burger-category/BurgerCategory";
import { Tabs } from "../tabs/Tabs";
import { SauceCategory } from "../categories/sauce-category/SauceCategory";
import { FillingCategory } from "../categories/filling-category/FillingCategory";
export const BurgerIngredients = ({ isLoading, hasError, data }) => {
  const filteredBurgerData = data.filter((el) => el.type === "bun");
  const filteredSauseData = data.filter((el) => el.type === "sauce");
  const filteredFillingData = data.filter((el) => el.type === "main");
  return (
    <div className={`${burgerIngredientsStyle.burgerIngredients} ml-85`}>
      <h2
        className={`${burgerIngredientsStyle.burgerIngredientsHeading} mt-10`}
      >
        Соберите бургер
      </h2>
      <Tabs />
      <div className={`${burgerIngredientsStyle.categories}`}>
        <BurgerCategory
          isLoading={isLoading}
          hasError={hasError}
          data={filteredBurgerData}
        />
        <SauceCategory
          isLoading={isLoading}
          hasError={hasError}
          data={filteredSauseData}
        />
        <FillingCategory
          isLoading={isLoading}
          hasError={hasError}
          data={filteredFillingData}
        />
      </div>
    </div>
  );
};
