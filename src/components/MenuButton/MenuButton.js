import React from "react";
import "./MenuButton.css";
import { Link, useHistory } from "react-router-dom";
import logoutIconWhite from "../../images/svg/logout_white.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MenuButton({ isMenuOpen, onClose, onOpenAuthorization, isSavedMenuOpen, loggedIn, onSignOut}) {
    const currentUser = React.useContext(CurrentUserContext);
    const history = useHistory();

    function handleClick() {
        onClose();
        if(loggedIn){
            history.push("/");
            onSignOut();
        }else{
            onOpenAuthorization()
        }
    }

    return (
        <section className={`menu-button ${isMenuOpen || isSavedMenuOpen ? "menu-button_opened" : ""}`} onClick={(e) => e.target.classList.contains("menu-button") && onClose()}>
            <div className="menu-button__container" >
                <div className="menu-button__header">
                    <h2 className="menu-button__logo">NewsExplorer</h2>
                    <button onClick={onClose} className="menu-button__close"></button>
                </div>
                <nav className="menu-button__nav">
                    <ul className="menu-button__menu">
                        <li className="menu-button__li">
                            <Link onClick={onClose} className="menu-button__link" to="/">
                                Главная
                            </Link>
                        </li>
                        <li className="menu-button__li">
                        {loggedIn ?<Link onClick={onClose} className="menu-button__link" to="/saved-news">
                                Сохранённые статьи
                            </Link> : <></>}
                        </li>
                    </ul>
                    {!loggedIn  ? (
                        <button onClick={handleClick} className="menu-button__btn-authorization" aria-label="кнопка авторизации и выхода" type="button">
                            Авторизоваться
                        </button>
                    ) : ( 
                        <button onClick={handleClick} className="menu-button__btn-authorization" aria-label="кнопка авторизации и выхода" type="button">
                            {currentUser.user}
                            <img src={logoutIconWhite} alt="стрелка выхода" className="navigation__img-logout" />
                        </button>
                    )}
                </nav>
            </div>
        </section>
    );
}

export default MenuButton;
