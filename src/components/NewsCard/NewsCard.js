import React from "react";
import { useLocation } from "react-router-dom";
import './NewsCard.css';
import { check, trash } from "../../utils/constants"

function NewsCard() {
  const location = useLocation();
  const locationPathMain = location.pathname === "/";
  const checkMarked = "news-card__check_marked"
 const handleClick = () => setIsToggleOn(true);
  const classNameBox = () => {
    if(locationPathMain ){
     return isToggleOn ? checkMarked : check; 
     }
     return  trash}
 
const [isToggleOn, setIsToggleOn] = React.useState(false);


  return (
    <section className="news-card">
        <div className="news-card__img-place">
        { !locationPathMain ? <div className="news-card__keyword">Природа</div> : <div></div>}
        <div onClick={handleClick} className={classNameBox()}></div>
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