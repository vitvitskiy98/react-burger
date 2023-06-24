import React, {useState} from 'react'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyle from './tabs.module.css';
export const Tabs = () => {
    const [current, setCurrent] = useState("one");
    return (
       
        <div style={{ display: "flex" }} className='mt-10' >
          <Tab value="one" active={current === "one"} onClick={setCurrent} className ={tabsStyle.tab}>
            Булки
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent} className ={tabsStyle.tab}>
            Соусы
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent} className ={tabsStyle.tab}>
            Начинки
          </Tab>
        </div>
      
    );
}
