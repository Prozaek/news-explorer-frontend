import React from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import { checkBox, trash, checkMarked } from "../../constants/constants";
import Elipsis from "../../utils/Ellipsis"


function NewsCard({ card, keyword }) {
    const location = useLocation();
    const locationPathMain = location.pathname === "/";

    let buttonClassName = "";
    locationPathMain ? (buttonClassName = checkBox) : (buttonClassName = trash);

    const handleClick = (e) => (e.target.className === checkBox ? (e.target.className = checkMarked) : (e.target.className = checkBox));

    function handleSubmit(e) {
        e.preventDefault();
    }

    // добавляет многоточие в конце обрезанного абзаца
    const {textRef} =  Elipsis()
   
    
    // фоновая картинка новости
    let backgroundImage = {
        backgroundImage: "url(" + card.urlToImage + ")",
    };

    return (
        <section className="news-card">
            <div style={backgroundImage} className="news-card__img-place">
                {locationPathMain ? 
                <div className="news-card__keyword">{keyword}</div>
                 : <div></div>}
                <button type="button" aria-label="Кнопка выбора карточек" onSubmit={handleSubmit} onClick={locationPathMain ? handleClick : undefined} className={buttonClassName}></button>
            </div>
            <div className="news-card__text-place">
                <p className="news-card__date">{card.publishedAt}</p>
                <a target="_blank" rel="noreferrer" className="news-card__link" href={card.url}>
                    <h2 className="news-card__title">{card.title}</h2>
                </a>
                <p className="news-card__text" ref={textRef}>
                    {card.description}
                </p>
                <p className="news-card__source">{card.source.name}</p>
            </div>
        </section>
    );
}

export default NewsCard;
