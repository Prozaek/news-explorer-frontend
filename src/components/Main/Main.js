import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Results from "../Results/Results";
import Preloader from "../Preloader/Preloader"
import NotFound from "../NotFound/NotFound"
import "./Main.css";

function Main({ loggedIn, onLogin, onSignOut, onOpenAuthorization, isAuthorBtnChange, onClose, openBurgerMenu, isOpenAuthor, isOpenRegistr, isOpenSignSucc, cards, setKeyword, keyword, isLoading, noResult }) {
    return (
        <section className="main">
            <Header
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
            />
            <div className="main__title-container">
                <h1 className="main__title">Что творится в мире?</h1>
                <p className="main__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            </div>

            <SearchForm setKeyword={setKeyword} />
            {keyword === '' ? <></> 
             : isLoading ? <Preloader />
             : noResult ?  <NotFound />
             : <Results cards={cards} keyword={keyword} /> }
            <About />
        </section>
    );
}

export default Main;
