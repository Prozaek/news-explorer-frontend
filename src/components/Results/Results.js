import React from "react";
import "./Results.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function Results({ articles, keyword, loggedIn, onAddArticles, handleCardDelete, saveArticles, onOpenAuthorization, resAddArticle }) {

    // Комментарий: время за которое выполняется поиск (7) и количество отображаемых карточек (3) нужно вынести в константы в отдельный файл

    const [nextThree, setNextThree] = React.useState(3);
    const [btnHide, setBtnHide] = React.useState(true)

    const keywordResArticles = articles.keyword;

    function sliceArticles() {
        return articles.resArticles.slice(0, nextThree);
    }

    function handleClick() {
        setNextThree(nextThree + 3);
        if(nextThree >= articles.resArticles.length - 2) {
            setBtnHide(false)
        }
    }

    return (
        <section className="results">
            <h2 className="results__title">Результаты поиска</h2>

            <NewsCardList 
            articles={sliceArticles()} 
            keyword={keyword}
            loggedIn={loggedIn} 
            onAddArticles={onAddArticles}
            handleCardDelete={handleCardDelete}
            saveArticles={saveArticles}
            keywordResArticles={keywordResArticles}
            onOpenAuthorization={onOpenAuthorization}
            resAddArticle={resAddArticle}
            />
            {btnHide ? <button onClick={handleClick} className="results__btn" aria-label="Кнопка добавления карточек">
                Показать еще
            </button> : <></>}
        </section>
    );
}

export default Results;
