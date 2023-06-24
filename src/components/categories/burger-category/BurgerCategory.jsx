import React from "react";
 import { data } from "../../data/data";
import burgerCategoryStyle from './burger-category.module.css'
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";


export const BurgerCategory = () => {
    return (
        <div className="burgerCategory">
            <Heading heading="Булки" />
            <div className={`${burgerCategoryStyle.block} mt-6 mb-10`}>
                <BurgerIngredient image={`${data[0].image}`} quantity={20} description={data[0].name} key ={data[0]._id}>
                    <Counter count={1} size="default" />
                </BurgerIngredient>
                <BurgerIngredient image={`${data[14].image}`} quantity={20} description={data[14].name} key ={data[14].id} />
            </div>
        </div>

    );
};
