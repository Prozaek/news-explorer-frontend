import React from "react";
import Header from "../Header/Header"
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader"
import NewsCardList from "../NewsCardList/NewsCardList"
import './SavedNews.css';

function SavedNews() {

  return (
    <div className="saved-news">
      <Header />
      <SavedNewsHeader />
      <NewsCardList />
    </div>
  );
}

export default SavedNews;
