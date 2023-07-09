import React, {
  useState,
  useMemo,
  useContext,
} from "react";
import burgerConstructorStyle from "./burger-constructor.module.css";
// import orderDetailsStyle from "./orderDetails.module.css";
import { BurgerConstructorIngredient } from "../burger-constructor-ingredient/BurgerConstructorIngredient";
import Modal from "../modals/Modal";
import { v4 as uuidv4 } from "uuid";
import {
  DragIcon,
  CurrencyIcon,
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "./OrderDetails";
import { DataContext } from "../services/DataContext";
export const BurgerConstructor = () => {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    orders: [],
  });
  const dataState = useContext(DataContext);
  const [openModal, setOpenModal] = useState(false);
  const bun = dataState.data.filter((el) => el.type === "bun")[0];

  const filteredData = useMemo(
    () => [
      dataState.data[8],
      dataState.data[5],
      dataState.data[11],
      dataState.data[10],
      dataState.data[10],
    ],
    [dataState]
  );

  let total = useMemo(
    () =>
      filteredData
        .map((elem, index) => elem?.price)
        .reduce((acc, cur) => acc + cur, bun?.price * 2),
    [filteredData, bun?.price]
  );

  const { isLoading, hasError } = dataState;

  const ingredients = filteredData.map((elem) => elem?._id);

  const fetchPostData = () => {
    setState({ ...state, hasError: false, isLoading: true });
    try {
      fetch("https://norma.nomoreparties.space/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ ingredients }),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            return Promise.reject('response status is not 200!');
          }
        })
        .then((json) =>
          setState({
            loading: false,
            status: "success",
            orders: json,
          })
        )
        .catch((e) => {
          setState({ ...state, hasError: true, isLoading: false });
        });
    } catch (error) {
      console.log("Возникла проблема с вашим fetch запросом: ", error.message);
    }
  };


  return (
    <div className={`${burgerConstructorStyle.block} mt-25`}>
      <div className={`${burgerConstructorStyle.ingredientsBlock}`}>
        <ConstructorElement
          type="top"
          isLocked={bun?.isLocked}
          text={`${bun?.name} (верх)`}
          price={bun?.price}
          thumbnail={bun?.image}
        />
      </div>
      <div className={`${burgerConstructorStyle.chosenIngredients}`}>
        {isLoading && "Загрузка..."}
        {hasError && "Произошла ошибка"}
        {!isLoading &&
          !hasError &&
          filteredData.length &&
          filteredData.map((elem, index) => (
            <BurgerConstructorIngredient
              key={uuidv4()}
              text={elem?.name}
              price={elem?.price}
              thumbnail={elem?.image}
              children={<DragIcon type="primary"/>}
            />
          ))}
      </div>
      <div className={`${burgerConstructorStyle.ingredientsBlock}`}>
        <ConstructorElement
          type="top"
          isLocked={bun?.isLocked}
          text={`${bun?.name} (низ)`}
          price={bun?.price}
          thumbnail={bun?.image}
        />
      </div>
      <div className={`${burgerConstructorStyle.totalBlock} mt-10`}>
        <div className={`${burgerConstructorStyle.total}`}>
          <h1 className={`${burgerConstructorStyle.totalHeading}`}>{total}</h1>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={`${burgerConstructorStyle.button}`}
          onClick={() => {fetchPostData(); setOpenModal(true)}}
        >
          Оформить заказ
        </Button>

        <Modal open={openModal} closeModal={() => setOpenModal(false)}>
          <OrderDetails number={state.orders?.order?.number} />
        </Modal>
      </div>
    </div>
  );
};
