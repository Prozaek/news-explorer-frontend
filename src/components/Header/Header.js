import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, onLogin, onSignOut, onOpenAuthorization, isAuthorBtnChange, onClose, openBurgerMenu, isOpenAuthor, isOpenRegistr, isOpenSignSucc, openSavedBurgerMenu }) {
    return (
        <header className="header">
            <Navigation
                loggedIn={loggedIn}
                onSignOut={onSignOut}
                onLogin={onLogin}
                onOpenAuthorization={onOpenAuthorization}
                isAuthorBtnChange={isAuthorBtnChange}
                onClose={onClose}
                openBurgerMenu={openBurgerMenu}
                isOpenAuthor={isOpenAuthor}
                isOpenRegistr={isOpenRegistr}
                isOpenSignSucc={isOpenSignSucc}
                openSavedBurgerMenu={openSavedBurgerMenu}
            />
        </header>
    );
}

export default Header;
