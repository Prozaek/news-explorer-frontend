import React from "react";
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ openBurgerMenu, cards, openSavedBurgerMenu, onClose }) {
    return (
        <div className="saved-news">
            <Header openBurgerMenu={openBurgerMenu} openSavedBurgerMenu={openSavedBurgerMenu} onClose={onClose} />
            <SavedNewsHeader />
            <NewsCardList cards={cards} />
        </div>
    );
}

export default SavedNews;
