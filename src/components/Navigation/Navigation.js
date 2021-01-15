import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navigation.css";
import {logo, logoBlack, savedNews, savedNewsBlack, main, mainBlack,} from "../../utils/constants";

function Navigation() {
    const location = useLocation();
    const locationPathSavedNews = location.pathname === "/saved-news";

    return (
        <nav className="navigation">
            <ul className="navigation__ul">
                <li className="navigation__li">
                    <Link className={locationPathSavedNews ? logoBlack : logo} to="/">NewsExplorer</Link>
                </li>
                <div className="navigation__container">
                    <li className="navigation__li">
                        <Link className={locationPathSavedNews ? mainBlack : main} to="/">Главная</Link>
                    </li>
                    <li className="navigation__li">
                        <Link className={locationPathSavedNews ? savedNewsBlack : savedNews}  to="/saved-news">Сохраненные статьи</Link>
                    </li>
                    <li className="navigation__li">
                        <button className="navigation__authorization" aria-label="кнопка авторизации" type="button">
                            Авторизоваться
                        </button>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navigation;
