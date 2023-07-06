/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import sauceCategoryStyle from "./sauce-category.module.css";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";
import { dataContext } from "../../services/dataContext";
export const SauceCategory = () => {
  const { ...dataState } = useContext(dataContext);
  const { isLoading, hasError, data } = dataState;
  const filteredSauseData = data.filter((el) => el.type === "sauce");
  return (
    <div className="burgerCategory">
      <Heading heading="Соусы" />
      <div className={`${sauceCategoryStyle.block} mt-6 mb-10`}>
        {isLoading && "Загрузка..."}
        {hasError && "Произошла ошибка"}
        {!isLoading &&
          !hasError &&
          filteredSauseData.length &&
          filteredSauseData.map((elem, index) => (
            <BurgerIngredient
              key={elem._id}
              image={elem.image}
              quantity={elem.price}
              description={elem.name}
              alt={elem.name}
              ingredient={elem}
            />
          ))}
      </div>
    </div>
  );
};
