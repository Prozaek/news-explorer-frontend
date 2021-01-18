import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import "./Navigation.css";
import logoutIconBlack from "../../images/svg/logout.svg";
import logoutIconWhite from "../../images/svg/logout_white.svg";
import { logoWhite, logoBlack, savedNewsWhite, savedNewsBlack, mainWhite, mainBlack, btnLogoutMain, btnLogoutSaved } from "../../utils/constants";

function Navigation({ loggedIn, onLogin, onSignOut, onOpenAuthorization, isAuthorBtnChange }) {
    const history = useHistory();
    const location = useLocation();
    const locationPathSavedNews = location.pathname === "/saved-news";
    // стейт срабатывающий при нажатии на кнопку выход
    const [logoutBtn, setLogoutBtn] = React.useState(false);

    // для демонстрации - при клике по кнопке "Авторизация" открывает попап onOpenAuthorization, при клике по кнопке "Выход" переключает на "/" и перезагружает страницу. 
    const handleClick = (e) => e.target.className === "navigation__btn-authorization" ? onOpenAuthorization(true) : history.push("/") & window.location.reload();

    // эффект меняет кнопку "Выход" на "Авторизация" при рендере страницы по условию, что страница main 
    React.useEffect(() => {
        isAuthorBtnChange ? setLogoutBtn(false) :
        !locationPathSavedNews && setLogoutBtn(true)   
    }, [isAuthorBtnChange, locationPathSavedNews])

    
    return (
        <nav className="navigation">
            <ul className="navigation__ul">
                <li className="navigation__li">
                    <Link className={locationPathSavedNews ? logoBlack : logoWhite} to="/">
                        NewsExplorer
                    </Link>
                </li>
                <div className="navigation__container">
                    <li className="navigation__li">
                        {/* переход на "/" с изменением на белый цвет или остается черным на "/saved-news" */}
                        <Link className={locationPathSavedNews ? mainBlack : mainWhite} to="/">
                            Главная
                        </Link>
                    </li>

                    <li className="navigation__li">
                        {/* переход на "/saved-news" с изменением на черный цвет или остается белым на "/" */}
                        <Link className={locationPathSavedNews ? savedNewsBlack : savedNewsWhite} to="/saved-news">
                            {/* по клику на кнопку выхода убирает текст ссылки */}
                            {!logoutBtn ? "Сохраненные статьи" : ""}
                        </Link>
                    </li>
                     {/* ниже смена кнопок */}
                    {!logoutBtn ? (
                        <li className="navigation__li">
                            <button  onClick={handleClick} className={locationPathSavedNews ? btnLogoutSaved : btnLogoutMain} aria-label="кнопка авторизации и выхода" type="button">
                                Грета
                                <img src={locationPathSavedNews ? logoutIconBlack : logoutIconWhite} alt="стрелка выхода" className="navigation__img-logout" />
                            </button>
                        </li>
                    ) : (
                        <li className="navigation__li">
                            <button onClick={handleClick} className="navigation__btn-authorization" aria-label="кнопка авторизации и выхода" type="button">
                                Авторизоваться
                            </button>
                        </li>
                    )}
                </div>
            </ul>
        </nav>
    );
}

export default Navigation;
