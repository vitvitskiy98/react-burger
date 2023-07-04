/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import fillingCategoryStyle from "./filling-category.module.css";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";

export const FillingCategory = ({isLoading, hasError, data}) => {

  return (
    <div className="burgerCategory">
      <Heading heading="Начинки" />
      <div className={`${fillingCategoryStyle.block} mt-6 mb-10`}>
        {isLoading && "Загрузка..."}
        {hasError && "Произошла ошибка"}
        {!isLoading &&
          !hasError &&
          data.length &&
          data.map((elem, index) => (
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
