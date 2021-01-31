import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import "./Navigation.css";
import logoutIconBlack from "../../images/svg/logout.svg";
import logoutIconWhite from "../../images/svg/logout_white.svg";
import { logoWhite, logoBlack, savedNewsWhite, savedNewsBlack, mainWhite, mainBlack, btnLogoutMain, btnLogoutSaved, butterBlack, butterWhite, navigationDisable, navigation } from "../../constants/constants";

function Navigation({ loggedIn, onLogin, onSignOut, onOpenAuthorization, isAuthorBtnChange, openBurgerMenu, isOpenAuthor, isOpenRegistr, isOpenSignSucc }) {

    const history = useHistory();
    const location = useLocation();
    const locationPathSavedNews = location.pathname === "/saved-news";

    // стейт срабатывающий при нажатии на кнопку выход
    const [logoutBtn, setLogoutBtn] = React.useState(false);

    // при клике на "Авторизация" открывает попап onOpenAuthorization, при клике на "Выход" переключает на "/" и перезагружает страницу.
    const handleClick = (e) => (e.target.className === "navigation__btn-authorization" ? onOpenAuthorization() : history.push("/") & window.location.reload());

    // эффект меняет кнопку "Выход" на "Авторизация" при рендере страницы по условию, что страница main
    React.useEffect(() => {
        isAuthorBtnChange ? setLogoutBtn(false) : !locationPathSavedNews && setLogoutBtn(true);
    }, [isAuthorBtnChange, locationPathSavedNews]);

    
    // открывает черное мобильное меню
    function handleClickBurgerMenu(e) {
        (e.target.className === butterBlack || butterWhite) ?
        openBurgerMenu(true)    
        : openBurgerMenu(false);
    }

    // делает невидимой панель navigation если открыты попапы авторизации или регистрации и при этом ширина окна меньше 400 px
    let navigationClassName = "";

    const classNavigationChange = () => ((isOpenRegistr || isOpenAuthor || isOpenSignSucc) & (window.innerWidth < 401) ? (navigationClassName = navigationDisable) : (navigationClassName = navigation));
    classNavigationChange();

    return (
        <nav className={navigationClassName}>
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
                        <Link className={locationPathSavedNews ? savedNewsBlack : logoutBtn ? "" : savedNewsWhite} to="/saved-news">
                            {/* по клику на кнопку выхода убирает текст ссылки */}
                            {!logoutBtn ? "Сохраненные статьи" : ""}
                        </Link>
                    </li>
                    {/* ниже смена кнопок */}
                    {!logoutBtn ? (
                        <li className="navigation__li">
                            <button onClick={handleClick} className={locationPathSavedNews ? btnLogoutSaved : btnLogoutMain} aria-label="кнопка авторизации и выхода" type="button">
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
                    <li className="navigation__li">
                        <button onClick={handleClickBurgerMenu} className={locationPathSavedNews ? butterBlack : butterWhite}></button>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navigation;
