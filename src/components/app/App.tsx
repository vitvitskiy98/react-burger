import React from "react";
import style from "./app.module.css";
import "../../fonts/fonts.css";
import { BurgerIngredients } from "../burger-ingrediens/BurgerIngredients";
import { AppHeader } from "../app-header/AppHeader";
import { BurgerConstructor } from "../burger-constructor/BurgerConstructor";
function App() {
  return (
    <div className={`${style.appContainer}`}>
      <AppHeader />
      <main className={style.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
