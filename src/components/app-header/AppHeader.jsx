import React from "react";
import headerStyle from "./app-header.module.css";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
export const AppHeader = () => {
    return (
        <header className={headerStyle.header}>
            <nav className={headerStyle.headerContent}>
                <div className={headerStyle.navigationItems}>
                    <div className={headerStyle.navigationItem}>
                        <BurgerIcon type="primary" />
                        <p className={headerStyle.pStyle}>Конструктор</p>
                    </div>

                    <div className={headerStyle.navigationItem}>
                        <ListIcon type="secondary" />
                        <p className={headerStyle.pStyleInactive}>Лента заказов</p>
                    </div>
                </div>
                <div>
                    <Logo />
                </div>

                <div className={headerStyle.personalAccount}>
                    <ProfileIcon type="secondary"/>
                    <p className={headerStyle.personalAccountText}>Личный кабинет</p>
                </div>
            </nav>
        </header>
    );
};
