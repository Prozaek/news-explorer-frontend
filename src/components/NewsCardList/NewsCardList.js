import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useLocation} from "react-router-dom";

function NewsCardList({ articles, keyword, loggedIn, onAddArticles, saveArticles, handleCardDelete, keywordResArticles, onOpenAuthorization }) {
    
    const location = useLocation();
    const locationPathMain = location.pathname === "/";

    return (
        <section className="news-list">
            {(locationPathMain ? articles : saveArticles).map((article, index) => (
                <NewsCard key={index} article={article} keyword={keyword} loggedIn={loggedIn}  onAddArticles={onAddArticles} handleCardDelete={handleCardDelete} articles={articles} saveArticles={saveArticles} keywordResArticles={keywordResArticles} onOpenAuthorization={onOpenAuthorization}/>
            ))}
        </section>
    );
}

export default NewsCardList;
