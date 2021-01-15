import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard"

function NewsCardList() {
  return (
    <section className="news-list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
    </section>
  );
}

export default NewsCardList;
