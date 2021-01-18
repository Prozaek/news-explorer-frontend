import React from "react";
import { useLocation } from "react-router-dom";
import './NewsCard.css';
import { checkBox, trash, checkMarked } from "../../utils/constants"

function NewsCard() {
  const location = useLocation();
  const locationPathMain = location.pathname === "/";

  const checkBoxClassName = () => locationPathMain ? checkBox : trash;
  const handleClick = (e) => e.target.className === checkBox ? e.target.className = checkMarked : e.target.className = checkBox; 

  function handleSubmit(e) {
    e.preventDefault();
   
    
  }

  return (
    <section className="news-card">
        <div className="news-card__img-place">
        { !locationPathMain ? <div className="news-card__keyword">Природа</div> : <div></div>}
        <button type="button" aria-label="Кнопка выбора карточек" onSubmit={handleSubmit} onClick={locationPathMain && handleClick } className={checkBoxClassName()}></button>
        </div>
        <div className="news-card__text-place">
            <p className="news-card__date">2 августа, 2019</p>
            <h2 className="news-card__title">Национальное достояние - парки</h2>
            <p className="news-card__description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
            <p className="news-card__source">ДЗЕН</p>
        </div>
    </section>
  );
}

export default NewsCard;