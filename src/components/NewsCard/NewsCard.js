import React from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import { checkBox, checkMarked } from "../../constants/constants";
import Elipsis from "../../utils/Ellipsis"

function NewsCard({loggedIn, onAddArticles, article, handleCardDelete,  keywordResArticles, saveArticles }) {
    const location = useLocation();
    const locationPathMain = location.pathname === "/";

    // добавляет многоточие в конце обрезанного абзаца
    const {textRef} =  Elipsis()
    const [btnClassName, setBtnClassName]=React.useState(checkBox)

    // сравнивает входящую новость с новостями из базы и маркирует, если новость уже сохранена
 React.useEffect(()=> {
    saveArticles.find((saveArticle) => saveArticle.link === article.url &&  setBtnClassName(checkMarked));
 }, [saveArticles, article.url])
    
    const handleClick = (e) => {
        if( e.target.className === checkBox){
         onAddArticles({keyword: keywordResArticles, article: article})

        }else{
            // ищет совпадение по идентификаторам url/link и возвращает информацию для удаления в случае если пользователь передумал сохранять новость
            const foundArticle = saveArticles.find(saveArticle => saveArticle.link === article.url)
            // удаление новости из базы по клику на синий флажок
            handleCardDeleteClick(foundArticle)
        }
        // тоггл меняющий цвет кнопки
        e.target.className === checkBox  ?
             setBtnClassName(checkMarked) :
             setBtnClassName(checkBox) 
    }

    // удаляет по клику на флажок, либо по клику на корзину
    function handleCardDeleteClick(card) {
        locationPathMain ?
       handleCardDelete(card) : 
        handleCardDelete(article)
      }

      // конвертирует дату 
      let date = new Date(article.publishedAt || article.date).toLocaleDateString();

    return (
        <section className="news-card">
            <div className="news-card__img-place">
                {locationPathMain ? 
                <></>
                : <div className="news-card__keyword"><p className="news-card__keyword-text">{article.keyword}</p></div>}
               {locationPathMain 
               ? <div className="news-card__btn-container"><button disabled={!loggedIn} aria-label="Кнопка выбора карточек" onClick={handleClick} className={btnClassName}></button></div> 
               :  <div className="news-card__btn-container">
               <button onClick={handleCardDeleteClick} type="button" aria-label="Кнопка удаления карточек" className="news-card__trash"></button>
               </div>}
               <img className="news-card__img" src={article.urlToImage || article.image} alt="Иллюстрация новости" />
            </div>
            <div className="news-card__text-place">
                <p className="news-card__date">{date}</p>
                <a target="_blank" rel="noreferrer" className="news-card__link" href={article.url || article.link }>
                    <h2 className="news-card__title">{article.title}</h2>
                </a>
                <p className="news-card__text" ref={textRef}>
                    {article.description || article.text}
                </p>
                <p className="news-card__source">{article.source.name || article.source}</p>
            </div>
        </section>
    );
}

export default NewsCard;
