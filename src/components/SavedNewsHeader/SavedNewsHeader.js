import React from "react";
import "./SavedNewsHeader.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader({ saveArticles }) {
    const currentUser = React.useContext(CurrentUserContext);

    // отбирает уникальные keywords
    const keywordsUniq = saveArticles.reduce((acc, el) => {
        !acc.includes(el.keyword) && acc.push(el.keyword);
        return acc;
    }, []);

    // ниже блок меняющий окончания в словах
    const lengthUniqKeywords = keywordsUniq.length;
    const allArticles = saveArticles.length;
    const twoKeywords = keywordsUniq.slice(0, 2).join(", ");
    const othersKeywords = keywordsUniq.length - 2;

    function declOfNum(n, text_forms) {
        n = Math.abs(n) % 100;
        let n1 = n % 10;
        if (n > 10 && n < 20) {
            return text_forms[2];
        }
        if (n1 > 1 && n1 < 5) {
            return text_forms[1];
        }
        if (n1 > 6 && n1 < 9) {
            return text_forms[0];
        }

        if (n1 === 1) {
            return text_forms[3];
        }
        return text_forms[2];
    }
    const endWordsSubtitle = declOfNum(othersKeywords, ["ми", "м", "ти", "им"]);
    const endWordsTitle = declOfNum(allArticles, ["ых", "ые", "ых", "ая"]);
    const endWordsTitle2 = declOfNum(allArticles, ["ей", "ьи", "ей", "ья"]);



    return (
        <section className="sn-header">
            <p className="sn-header__subtitle">Сохраненные статьи</p>
            <h2 className="sn-header__title">{`${currentUser.user}, у вас ${allArticles} сохраненн${endWordsTitle} стат${endWordsTitle2}`}</h2>

            <p className="sn-header__keywords">
                По ключевым словам:{" "}
                <span className="sn-header__span">
                    {`${twoKeywords || ""}`} {lengthUniqKeywords < 3 ? "" : `и ${othersKeywords || ""}-${endWordsSubtitle} другим.`}
                </span>
            </p>
        </section>
    );
}

export default SavedNewsHeader;
