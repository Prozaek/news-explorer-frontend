import React from "react";
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ openBurgerMenu, openSavedBurgerMenu, onClose, keyword, onSignOut, saveArticles, handleCardDelete, choiceArticle, loggedIn, articles }) {
    
    
    return (
        
        <div className="saved-news">
            <Header openBurgerMenu={openBurgerMenu} openSavedBurgerMenu={openSavedBurgerMenu} onClose={onClose} onSignOut={onSignOut}/> 
            <SavedNewsHeader saveArticles={saveArticles}/> 
            <NewsCardList saveArticles={saveArticles} keyword={keyword} handleCardDelete={handleCardDelete} choiceArticle={choiceArticle} articles={articles}/>
        </div>
    );
}

export default SavedNews;
