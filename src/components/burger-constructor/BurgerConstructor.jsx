import React from 'react'
import { data } from '../data/data';
import burgerConstructorStyle from './burger-constructor.module.css'
import { BurgerConstructorIngredient } from '../burger-constructor-ingredient/BurgerConstructorIngredient';
import { DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
export const BurgerConstructor = () => {

    let total2 = [20, 30, 300, 80, 80, 80, 20].reduce((acc, cur) => acc + cur, 0);

    return (
        <div className={`${burgerConstructorStyle.block} mt-25`}>
            <div className={`${burgerConstructorStyle.ingredientsBlock}`}>
            <BurgerConstructorIngredient type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={20}
                thumbnail={data[0].image} />

            <div className={`${burgerConstructorStyle.chosenIngredients}`}>
            <BurgerConstructorIngredient type="top"
                text={data[5].name}
                price={30}
                thumbnail={data[5].image} >
                <DragIcon type="primary" />
            </BurgerConstructorIngredient>

            <BurgerConstructorIngredient type="top"
                text={data[4].name}
                price={300}
                thumbnail={data[4].image} >
                <DragIcon type="primary" />
            </BurgerConstructorIngredient>

            <BurgerConstructorIngredient type="top"
                text={data[7].name}
                price={80}
                thumbnail={data[7].image} >
                <DragIcon type="primary" />
            </BurgerConstructorIngredient>

            <BurgerConstructorIngredient type="top"
                text={data[8].name}
                price={80}
                thumbnail={data[8].image} >
                <DragIcon type="primary" />
            </BurgerConstructorIngredient>

            <BurgerConstructorIngredient type="top"
                text={data[8].name}
                price={80}
                thumbnail={data[8].image} >
                <DragIcon type="primary" />
            </BurgerConstructorIngredient>
            </div>

            <BurgerConstructorIngredient type="top"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={20}
                thumbnail={data[0].image} />
              </div>
            <div className={`${burgerConstructorStyle.totalBlock} mt-10`}>
                <div className={`${burgerConstructorStyle.total}`}>
                <h1 className={`${burgerConstructorStyle.totalHeading}`}>{total2}</h1>
                <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="large" extraClass={`${burgerConstructorStyle.button}`}>
                   Оформить заказ
                </Button>
            </div>
        </div>
    )
}
