import React from "react";
import Header from "../Header/Header";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Results from "../Results/Results";
import Preloader from "../Preloader/Preloader"
import NotFound from "../NotFound/NotFound"

function Main({ onSignOut, onOpenAuthorization, onClose, openBurgerMenu, isOpenAuthor, isOpenRegistr, isOpenSignSucc, articles, setKeyword, keyword, isLoading, noResult, loggedIn, onAddArticles, handleCardDelete, saveArticles, redirect}) {

    return (
        <section className="main">
            <Header
                onSignOut={onSignOut}
                onOpenAuthorization={onOpenAuthorization}
                onClose={onClose}
                openBurgerMenu={openBurgerMenu}
                isOpenAuthor={isOpenAuthor}
                isOpenRegistr={isOpenRegistr}
                isOpenSignSucc={isOpenSignSucc}
                loggedIn={loggedIn}
            />
            <div className="main__title-container">
                <h1 className="main__title">Что творится в мире?</h1>
                <p className="main__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            </div>

            <SearchForm 
            setKeyword={setKeyword} 
            />
            {!articles.keyword ? <></> 
             : isLoading ? <Preloader /> 
             : noResult ? <NotFound />
             : <Results articles={articles} keyword={keyword} loggedIn={loggedIn} onAddArticles={onAddArticles} handleCardDelete={handleCardDelete} saveArticles={saveArticles}/> }
            <About />
        </section>
    );
}

export default Main;
