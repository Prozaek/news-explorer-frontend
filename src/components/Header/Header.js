import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, onSignOut, onOpenAuthorization, onClose, openBurgerMenu, isOpenAuthor, isOpenRegistr, isOpenSignSucc, openSavedBurgerMenu }) {
    
    return (
        <header className="header">
            <Navigation
                loggedIn={loggedIn}
                onSignOut={onSignOut}
                onOpenAuthorization={onOpenAuthorization}
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
