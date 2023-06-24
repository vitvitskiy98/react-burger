import React from "react";
import { data } from "../../data/data";
import fillingCategoryStyle from './filling-category.module.css';
import { Heading } from "../../heading/Heading";
import { BurgerIngredient } from "../../burger-ingredient/BurgerIngredient";


export const FillingCategory = () => {
    return (
        <div className="burgerCategory">
            <Heading heading="Начинки" />
            <div className={`${fillingCategoryStyle.block} mt-6 mb-10`}>
                <BurgerIngredient image={`${data[2].image}`} quantity={424} description={data[2].name} key ={data[2]._id}/>
                <BurgerIngredient image={`${data[12].image}`} quantity={988} description={data[12].name} key ={data[12].id} />
                <BurgerIngredient image={`${data[4].image}`} quantity={1337} description={data[4].name} key ={data[4].id}/>
                <BurgerIngredient image={`${data[1].image}`} quantity={3000} description={data[1].name} key ={data[1]._id}/>
                <BurgerIngredient image={`${data[8].image}`} quantity={300} description={data[8].name} key ={data[8]._id}/>
                <BurgerIngredient image={`${data[7].image}`} quantity={874} description={data[7].name} key ={data[7].id} />
                <BurgerIngredient image={`${data[10].image}`} quantity={752} description={data[10].name} key ={data[10].id}/>
                <BurgerIngredient image={`${data[11].image}`} quantity={4400} description={data[11].name} key ={data[11]._id}/>
                <BurgerIngredient image={`${data[13].image}`} quantity={4142} description={data[13].name} key ={data[13]._id}/>
            </div>
        </div>

    );
};
