import React, {useState} from "react";
import PropTypes from "prop-types";
import burgerIngredientStyle from "./burger-ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modals/Modal";
import ingredientDetails from "./ingredientDetails.module.css"
import IngredientDetails from "./IngredientDetails";

export const BurgerIngredient = ({
  image,
  quantity,
  description,
  children,
  alt,
  ingredient
}) => {
    const [showModal, setShowModal] = useState(false);
    console.log({...ingredient})

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
            <IngredientDetails image = {image} alt={alt} description={description} ingredientObj={ingredient}/>
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
