import React, { useState, useEffect } from "react";
import fillingCategoryStyle from "./filling-category.module.css";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";

export const FillingCategory = () => {
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
          data: json.data.filter((el) => el.type === "main"),
        })
      )
      .catch((e) => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const { isLoading, hasError, data } = state;
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
            />
          ))}
      </div>
    </div>
  );
};
