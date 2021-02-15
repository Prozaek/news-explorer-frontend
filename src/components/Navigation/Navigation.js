import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navigation.css";
import logoutIconWhite from "../../images/svg/logout_white.svg";
import { navigationDisable, navigation } from "../../constants/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NavigationSavedNews from "./NavigationSavedNews";

function Navigation({ loggedIn, onSignOut, onOpenAuthorization, openBurgerMenu, isOpenAuthor, isOpenRegistr, isOpenSignSucc, openSavedBurgerMenu }) {
    const location = useLocation();
    const locationPathMain = location.pathname === "/";
    const currentUser = React.useContext(CurrentUserContext);

    // при клике на "Авторизация" открывает попап onOpenAuthorization, при клике на "Выход" вылогинивается.
    const handleClick = (e) => (e.target.className === "navigation__btn-authorization" ? onOpenAuthorization() : onSignOut());

    // открывает черное мобильное меню
    function handleClickBurgerMenu() {
        openBurgerMenu(true);
    }

    // делает невидимой панель navigation если открыты попапы авторизации или регистрации и при этом ширина окна меньше 400 px
    let navigationClassName = "";

    const classNavigationChange = () => ((isOpenRegistr || isOpenAuthor || isOpenSignSucc) & (window.innerWidth < 401) ? (navigationClassName = navigationDisable) : (navigationClassName = navigation));
    classNavigationChange();

    return (
        <nav className={navigationClassName}>
            {locationPathMain ? (
                <ul className="navigation__ul">
                    <li className="navigation__li">
                        <Link className="navigation__logo" to="/">
                            NewsExplorer
                        </Link>
                    </li>
                    <div className="navigation__container">
                        <li className="navigation__li">
                            <Link className="navigation__main-link" to="/">
                                Главная
                            </Link>
                        </li>
                        <li className="navigation__li">
                            <Link className="navigation__saved-news" to="/saved-news">
                                {loggedIn ? "Сохраненные статьи" : ""}
                            </Link>
                        </li>
                        {/* замена кнопки "авторизация" на "выход" */}
                        {loggedIn ? (
                            <li className="navigation__li">
                                <button onClick={handleClick} className="navigation__btn-logout navigation__btn-logout_main" aria-label="кнопка выхода" type="button">
                                    {currentUser.user}
                                    <img src={logoutIconWhite} alt="стрелка выхода" className="navigation__img-logout" />
                                </button>
                            </li>
                        ) : (
                            <li className="navigation__li">
                                <button onClick={handleClick} className="navigation__btn-authorization" aria-label="кнопка авторизации" type="button">
                                    Авторизоваться
                                </button>
                            </li>
                        )}

                        <li className="navigation__li">
                            <button onClick={handleClickBurgerMenu} className="navigation__butter"></button>
                        </li>
                    </div>
                </ul>
            ) : (
                <NavigationSavedNews openSavedBurgerMenu={openSavedBurgerMenu} onSignOut={onSignOut} />
            )}
        </nav>
    );
}

export default Navigation;
