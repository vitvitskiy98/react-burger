import React from "react";
import { data } from "../../data/data";
import sauceCategoryStyle from './sauce-category.module.css';
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";


export const SauceCategory = () => {
    return (
        <div className="burgerCategory">
            <Heading heading="Соусы" />
            <div className={`${sauceCategoryStyle.block} mt-6 mb-10`}>
                <BurgerIngredient image={`${data[3].image}`} quantity={90} description={data[3].name} key={data[3]._id} />
                <BurgerIngredient image={`${data[6].image}`} quantity={80} description={data[6].name} key={data[6].id} />
                <BurgerIngredient image={`${data[5].image}`} quantity={15} description={data[5].name} key={data[5]._id} />
                <BurgerIngredient image={`${data[9].image}`} quantity={88} description={data[9].name} key={data[9].id} />
            </div>
        </div>

    );
};
