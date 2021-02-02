import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ cards, keyword }) {
    return (
        <section className="news-list">
            {cards.map((card, index) => (
                <NewsCard key={index} card={card} keyword={keyword} />
            ))}
        </section>
    );
}

export default NewsCardList;
