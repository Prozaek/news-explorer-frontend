import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader() {
    return (
        <section className="sn-header">
            <p className="sn-header__subtitle">Сохраненные статьи</p>
            <h2 className="sn-header__title">Грета, у вас 5 сохраненных статей</h2>
            <p className="sn-header__keywords">
                По ключевым словам: <span className="sn-header__span">Природа, Тайга и 2-м другим</span>
            </p>
        </section>
    );
}

export default SavedNewsHeader;
