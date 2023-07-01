/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import sauceCategoryStyle from "./sauce-category.module.css";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";

export const SauceCategory = () => {
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
          data: json.data.filter((el) => el.type === "sauce"),
        })
      )
      .catch((e) => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  };
  //  let filtered = state.data.filter((elem,index) => index < 3);
  // console.log(state.data);
  useEffect(() => {
    getData();
  }, []);

   const {isLoading,hasError,data} = state;
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
