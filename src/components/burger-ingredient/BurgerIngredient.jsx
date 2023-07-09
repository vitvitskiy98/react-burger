import React, {useState} from "react";
import PropTypes from "prop-types";
import burgerIngredientStyle from "./burger-ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modals/Modal";
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

BurgerIngredient.propTypes = {
  image: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
};
