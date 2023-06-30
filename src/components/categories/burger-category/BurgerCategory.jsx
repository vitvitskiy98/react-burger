import React, { useState, useEffect } from "react";
import burgerCategoryStyle from "./burger-category.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";

export const BurgerCategory = () => {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: [],
  });

  const getData = () => {
    setState({ ...state, hasError: false, isLoading: true });
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => res.json())
      .then((json) =>
        setState({
          loading: false,
          status: "success",
          data: json.data.filter((el) => el.type === "bun"),
        })
      )
      .catch((e) => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoading, hasError, data } = state;
  return (
    <div className="burgerCategory">
      <Heading heading="Булки" />
      <div className={`${burgerCategoryStyle.block} mt-6 mb-10`}>
        {isLoading && "Загрузка..."}
        {hasError && "Произошла ошибка"}
        {!isLoading &&
          !hasError &&
          data.length &&
          data.map((elem, index) =>
            index === 0 ? (
              <BurgerIngredient
                key={elem._id}
                image={elem.image}
                quantity={elem.price}
                description={elem.name}
                alt={elem.name}
                children={<Counter count={1} size="default" />}
              />
            ) : (
              <BurgerIngredient
                key={elem._id}
                image={elem.image}
                quantity={elem.price}
                description={elem.name}
                alt={elem.name}
              />
            )
          )}
      </div>
    </div>
  );
};
