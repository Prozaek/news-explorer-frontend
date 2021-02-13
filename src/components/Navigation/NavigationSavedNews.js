import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logoutIconBlack from "../../images/svg/logout.svg";

function NavigationSavedNews({ openSavedBurgerMenu, onSignOut }) {
    const currentUser = React.useContext(CurrentUserContext);
    
    // открывает черное мобильное меню
    function handleClickBurgerMenu() {
        openSavedBurgerMenu(true);
    }

    // по клику вылогинивается и переходит на "/"
    const handleClick = (e) => e.target.className === "navigation__btn-logout" && onSignOut() 

    return (
        <ul className="navigation__ul">
            <li className="navigation__li">
                <Link className="navigation__logo navigation__logo_black" to="/">
                    NewsExplorer
                </Link>
            </li>
            <div className="navigation__container">
                <li className="navigation__li">
                    <Link className="navigation__main-link navigation__main-link_black" to="/">
                        Главная
                    </Link>
                </li>
                <li className="navigation__li">
                    <Link className="navigation__saved-news navigation__saved-news_black" to="/saved-news">
                        Сохраненные статьи
                    </Link>
                </li>
                <li className="navigation__li">
                    <button onClick={handleClick} className="navigation__btn-logout" aria-label="кнопка выхода" type="button">
                        {currentUser.user}
                        <img src={logoutIconBlack} alt="стрелка выхода" className="navigation__img-logout" />
                    </button>
                </li>

                <li className="navigation__li">
                    <button onClick={handleClickBurgerMenu} className="navigation__butter navigation__butter_black"></button>
                </li>
            </div>
        </ul>
    );
}

export default NavigationSavedNews;
