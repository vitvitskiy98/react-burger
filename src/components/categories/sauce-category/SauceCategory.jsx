/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import sauceCategoryStyle from "./sauce-category.module.css";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";

export const SauceCategory = ({isLoading, hasError, data}) => {
  return (
    <div className="burgerCategory">
      <Heading heading="Соусы" />
      <div className={`${sauceCategoryStyle.block} mt-6 mb-10`}>
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
