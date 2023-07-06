import React, { useContext } from "react";
import burgerCategoryStyle from "./burger-category.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";
import { dataContext } from "../../services/dataContext";
export const BurgerCategory = () => {
  const { ...dataState } = useContext(dataContext);
  const { isLoading, hasError, data } = dataState;
  const filteredBurgerData = data.filter((el) => el.type === "bun");
  return (
    <div className="burgerCategory">
      <Heading heading="Булки" />
      <div className={`${burgerCategoryStyle.block} mt-6 mb-10`}>
        {isLoading && "Загрузка..."}
        {hasError && "Произошла ошибка"}
        {!isLoading &&
          !hasError &&
          filteredBurgerData.length &&
          filteredBurgerData.map((elem, index) =>
            index === 0 ? (
              <BurgerIngredient
                key={elem._id}
                image={elem.image}
                quantity={elem.price}
                description={elem.name}
                alt={elem.name}
                children={<Counter count={1} size="default" />}
                ingredient={elem}
              />
            ) : (
              <BurgerIngredient
                key={elem._id}
                image={elem.image}
                quantity={elem.price}
                description={elem.name}
                alt={elem.name}
                ingredient={elem}
              />
            )
          )}
      </div>
    </div>
  );
};
