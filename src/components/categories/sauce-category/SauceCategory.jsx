import React from "react";
import { data } from "../../data/data";
import sauceCategoryStyle from "./sauce-category.module.css";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";

const dataSauceCategory = [data[3], data[6], data[5], data[9]];

export const SauceCategory = () => {
  return (
    <div className="burgerCategory">
      <Heading heading="Соусы" />
      <div className={`${sauceCategoryStyle.block} mt-6 mb-10`}>
        {dataSauceCategory.map((elem) => (
          <BurgerIngredient
            key={elem._id}
            image={elem.image}
            quantity={elem.price}
            description={elem.name}
            alt={elem.name}
          />
        ))}
      </div>
    </div>
  );
};
