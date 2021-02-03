import React from "react";
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ openBurgerMenu, cards, openSavedBurgerMenu, onClose, keyword }) {
    return (
        <div className="saved-news">
            <Header openBurgerMenu={openBurgerMenu} openSavedBurgerMenu={openSavedBurgerMenu} onClose={onClose} />
            <SavedNewsHeader />
           {keyword === '' || undefined ? <></> :  <NewsCardList cards={cards} />}
        </div>
    );
}

export default SavedNews;
