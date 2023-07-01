/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import headerStyle from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
export const AppHeader = () => {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.headerContent}>
        <ul className={headerStyle.navigationItems}>
          <li className={headerStyle.navigationItem}>
            <BurgerIcon type="primary" />
            <a href="#" className={headerStyle.aStyle}>
              Конструктор
            </a>
          </li>

          <li className={headerStyle.navigationItem}>
            <ListIcon type="secondary" />
            <a href="#" className={headerStyle.aStyleInactive}>
              Лента заказов
            </a>
          </li>
        </ul>
        <div>
          <Logo />
        </div>

        <div className={headerStyle.personalAccount}>
          <ProfileIcon type="secondary" />
          <a href="#" className={headerStyle.personalAccountText}>
            Личный кабинет
          </a>
        </div>
      </nav>
    </header>
  );
};
