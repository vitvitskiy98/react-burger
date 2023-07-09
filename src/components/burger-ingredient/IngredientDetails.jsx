import React from "react";
import ingredientDetails from "./ingredientDetails.module.css";
import PropTypes from "prop-types";
export default function IngredientDetails({
  image,
  alt,
  description,
  ingredientObj,
}) {
  return (
    <>
      <h1 className={ingredientDetails.ingredientDetailsTitle}>
        Детали ингредиента
      </h1>

      <div className={ingredientDetails.ingredientDetailsBody}>
        <img
          className={ingredientDetails.ingredientDetailsImg}
          src={image}
          alt={alt}
        />

        <p className={ingredientDetails.ingredientDetailsDescription}>
          {description}
        </p>

        <div className={ingredientDetails.ingredientDetailsNutrientsGrid}>
          <div className={ingredientDetails.ingredientDetailsNutrientsBlock}>
            <span>Калории,ккал</span>
            <span
              className={ingredientDetails.ingredientDetailsNutrientsBlockValue}
            >
              {ingredientObj.calories}
            </span>
          </div>

          <div className={ingredientDetails.ingredientDetailsNutrientsBlock}>
            <span>Белки, г</span>
            <span
              className={ingredientDetails.ingredientDetailsNutrientsBlockValue}
            >
              {ingredientObj.proteins}
            </span>
          </div>

          <div className={ingredientDetails.ingredientDetailsNutrientsBlock}>
            <span>Жиры, г</span>
            <span
              className={ingredientDetails.ingredientDetailsNutrientsBlockValue}
            >
              {ingredientObj.fat}
            </span>
          </div>

          <div className={ingredientDetails.ingredientDetailsNutrientsBlock}>
            <span>Углеводы, г</span>
            <span
              className={ingredientDetails.ingredientDetailsNutrientsBlockValue}
            >
              {ingredientObj.carbohydrates}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

IngredientDetails.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  ingredientObj: PropTypes.object.isRequired
};
