import React from "react";
import { data } from "../../data/data";
import fillingCategoryStyle from "./filling-category.module.css";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";

const dataFillingCategory = [
  data[2],
  data[12],
  data[4],
  data[1],
  data[8],
  data[7],
  data[10],
  data[11],
  data[13],
];
export const FillingCategory = () => {
  return (
    <div className="burgerCategory">
      <Heading heading="Начинки" />
      <div className={`${fillingCategoryStyle.block} mt-6 mb-10`}>
        {dataFillingCategory.map((elem) => (
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
