import React from "react";
import "./Results.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function Results({ cards, keyword }) {
    const [nextThree, setNextThree] = React.useState(3);

    function sliceCards() {
        return cards.slice(0, nextThree);
    }

    function handleClick() {
        setNextThree(nextThree + 3);
    }

    return (
        <section className="results">
            <h2 className="results__title">Результаты поиска</h2>

            <NewsCardList cards={sliceCards()} keyword={keyword} />

            <button onClick={handleClick} className="results__btn" aria-label="Кнопка добавления карточек">
                Показать еще
            </button>
        </section>
    );
}

export default Results;
