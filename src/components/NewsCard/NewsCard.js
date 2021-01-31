import React from "react";
import { useLocation} from "react-router-dom";
import "./NewsCard.css";
import { checkBox, trash, checkMarked } from "../../constants/constants";

function NewsCard({card}) {
    const location = useLocation();
    const locationPathMain = location.pathname === "/";

    let buttonClassName = ""
    locationPathMain ? buttonClassName = checkBox : buttonClassName = trash;
    
    const handleClick = (e) => e.target.className === checkBox ? e.target.className = checkMarked : e.target.className = checkBox;

    function handleSubmit(e) {
        e.preventDefault();
    }

    const textRef = React.useRef(); // записывает объект, возвращаемый хуком, в переменную

    // сравнивает оффсет и скролл контента
    function isEllipsisActive() {
        return textRef.current.offsetHeight < textRef.current.scrollHeight;
    }

    const text = React.useRef('');

    // обрезает текст при изменении размера экрана
    function resizeListener() {
        textRef.current.innerHTML = text.current;
     let words = text.current.split(' ')
        while (isEllipsisActive()) {
            words.pop();
         textRef.current.innerHTML = `${words.join(' ')}...`;
        }  
    }

    // слушает изменение размера и запускает обрезчик текста
    React.useEffect(() => {
        text.current = textRef.current.innerHTML;
        window.addEventListener("resize", resizeListener);
        resizeListener();
    });

    let backgroundImage =  {
        backgroundImage:  "url(" + card.urlToImage + ")" 
    }

    return (
        <section className="news-card">
            <div style={backgroundImage} className="news-card__img-place">
                {locationPathMain ? <div className="news-card__keyword">{card.source.id}</div> : <div></div>}
                <button type="button" aria-label="Кнопка выбора карточек" onSubmit={handleSubmit} onClick={locationPathMain && handleClick} className={buttonClassName}></button>
            </div>
            <div className="news-card__text-place">
                <p className="news-card__date">{card.publishedAt}</p>
                <a className="news-card__link" href={card.url}><h2 className="news-card__title" >{card.title}</h2></a>
                <p className="news-card__text" ref={textRef}>{card.description}
                </p>
                <p className="news-card__source">{card.source.name}</p>
            </div>
        </section>
    );
}

export default NewsCard;
