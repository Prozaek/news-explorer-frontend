import React from "react";
import './Results.css';
import NewsCardList from "../NewsCardList/NewsCardList"

function Results() {
  return (
    <section className="results">
        <h2 className="results__title">Результаты поиска</h2>
        <NewsCardList />
        <button className="results__btn">Показать еще</button>
    </section>
  );
}

export default Results;
