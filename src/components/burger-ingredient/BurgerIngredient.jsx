import React, {useState} from "react";
import PropTypes from "prop-types";
import burgerIngredientStyle from "./burger-ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modals/Modal";
import ingredientDetails from "./ingredientDetails.module.css"

export const BurgerIngredient = ({
  image,
  quantity,
  description,
  children,
  alt,
  ingredient
}) => {
    const [showModal, setShowModal] = useState(false)

  return (
    <>
        <div className={burgerIngredientStyle.burgerIngredientWrapper} onClick={() => setShowModal(true)}>
            <img src={image} alt={alt} />
            {children}
            <div className={burgerIngredientStyle.currencyBlock}>
                <span className={burgerIngredientStyle.quantity}>{quantity}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div>
                <p className={burgerIngredientStyle.description}>{description}</p>
            </div>
        </div>

        <Modal open={showModal} closeModal={() => {
            setShowModal(false)
        }}>
            <h1 className={ingredientDetails.ingredientDetailsTitle}>Детали ингредиента</h1>

            <div className={ingredientDetails.ingredientDetailsBody}>
                <img className={ingredientDetails.ingredientDetailsImg} src={image} alt={alt} />

                <p className={ingredientDetails.ingredientDetailsDescription}>{description}</p>

                <div className={ingredientDetails.ingredientDetailsNutrientsGrid}>
                    <div className={ingredientDetails.ingredientDetailsNutrientsBlock}>
                        <span>Калории,ккал</span>
                        <span className={ingredientDetails.ingredientDetailsNutrientsBlockValue}>{ingredient.calories}</span>
                    </div>

                    <div className={ingredientDetails.ingredientDetailsNutrientsBlock}>
                        <span>Белки, г</span>
                        <span className={ingredientDetails.ingredientDetailsNutrientsBlockValue}>{ingredient.proteins}</span>
                    </div>

                    <div className={ingredientDetails.ingredientDetailsNutrientsBlock}>
                        <span>Жиры, г</span>
                        <span className={ingredientDetails.ingredientDetailsNutrientsBlockValue}>{ingredient.fat}</span>
                    </div>

                    <div className={ingredientDetails.ingredientDetailsNutrientsBlock}>
                        <span>Углеводы, г</span>
                        <span className={ingredientDetails.ingredientDetailsNutrientsBlockValue}>{ingredient.carbohydrates}</span>
                    </div>
                </div>
            </div>
        </Modal>
    </>
  );
};

BurgerIngredient.propTypes = PropTypes.shape({
  image: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string,
  children: PropTypes.any,
  alt: PropTypes.string,
  key:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});
