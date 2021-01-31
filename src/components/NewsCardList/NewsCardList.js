import React from "react";
import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard"

function NewsCardList({cards}) {

  return (
    <section className="news-list">
      {cards.map((card, index) => (
           <NewsCard 
              key={index}
              card={card}
            />
          ))}
        {/* <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard /> */}
    </section>
  );
}

export default NewsCardList;
