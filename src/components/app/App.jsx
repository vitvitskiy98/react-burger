import React, {useState, useEffect} from "react";
import style from "./app.module.css";
import "../../fonts/fonts.css";
import { BurgerIngredients } from "../burger-ingrediens/BurgerIngredients";
import { AppHeader } from "../app-header/AppHeader";
import { BurgerConstructor } from "../burger-constructor/BurgerConstructor";

function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: [],
  });

  const getData = () => {
    try {
      setState({ ...state, hasError: false, isLoading: true });
      fetch("https://norma.nomoreparties.space/api/ingredients")
        .then((res) => {
          res.json();
          if (!res.ok) {
            throw new Error('Ответ сети был не ok.');
            }
        })
        .then((json) =>
          setState({
            loading: false,
            status: "success",
            data: json.data,
          })
        )
        .catch((e) => {
          setState({ ...state, hasError: true, isLoading: false });
        });
    } catch (error) {
      console.log('Возникла проблема с вашим fetch запросом: ', error.message);
    }

  };
 
  useEffect(() => {
    getData();
  }, []);


  
  console.log(state.data.map((elem) => console.log(elem)))
  return (
    <div className={`${style.appContainer}`}>
      <AppHeader />
      <main className={style.main}>
        <BurgerIngredients isLoading={state.isLoading} hasError={state.hasError} data={state.data}/>
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
