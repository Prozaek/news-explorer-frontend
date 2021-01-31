import React from "react";
import './Results.css';
import NewsCardList from "../NewsCardList/NewsCardList"

function Results({cards}) {
  return (
    <section className="results">
        <h2 className="results__title">Результаты поиска</h2>
           <NewsCardList cards={cards}/>
        <button className="results__btn" aria-label="Кнопка добавления карточек">Показать еще</button>
    </section>
  );
}

export default Results;
