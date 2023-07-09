import React, { useState, useEffect, useMemo } from "react";
import style from "./app.module.css";
import "../../fonts/fonts.css";
import { BurgerIngredients } from "../burger-ingrediens/BurgerIngredients";
import { AppHeader } from "../app-header/AppHeader";
import { BurgerConstructor } from "../burger-constructor/BurgerConstructor";
import { DataContext } from "../services/DataContext";
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
          return res.json();
          // eslint-disable-next-line no-unreachable
          if (!res.ok) {
            throw new Error("Ответ сети был не ok.");
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
      console.log("Возникла проблема с вашим fetch запросом: ", error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoading, hasError, data } = state;

  const contextValue = useMemo(
    () => ({ isLoading, hasError, data, setState }),
    [isLoading, hasError, data, setState]
  );
  
  return (
    <div className={`${style.appContainer}`}>
      <AppHeader />
      <DataContext.Provider value={contextValue}>
        <main className={style.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DataContext.Provider>
    </div>
  );
}

export default App;
