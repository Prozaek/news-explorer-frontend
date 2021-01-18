import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({loggedIn, onLogin, onSignOut, onOpenAuthorization, isAuthorBtnChange}) {
    return (
        <header className="header">
            <Navigation loggedIn={loggedIn} onSignOut={onSignOut} onLogin={onLogin} onOpenAuthorization={onOpenAuthorization} isAuthorBtnChange={isAuthorBtnChange}/>
        </header>
    );
}

export default Header;
