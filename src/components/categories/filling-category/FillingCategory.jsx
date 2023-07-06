/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import fillingCategoryStyle from "./filling-category.module.css";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";
import { dataContext } from "../../services/dataContext";
export const FillingCategory = () => {
  const { ...dataState } = useContext(dataContext);
  const { isLoading, hasError, data } = dataState;
  const filteredFillingData = data.filter((el) => el.type === "main");
  return (
    <div className="burgerCategory">
      <Heading heading="Начинки" />
      <div className={`${fillingCategoryStyle.block} mt-6 mb-10`}>
        {isLoading && "Загрузка..."}
        {hasError && "Произошла ошибка"}
        {!isLoading &&
          !hasError &&
          filteredFillingData.length &&
          filteredFillingData.map((elem, index) => (
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
