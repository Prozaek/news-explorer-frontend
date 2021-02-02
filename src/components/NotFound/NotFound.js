import React from "react";
import "./NotFound.css";

function NotFound() {
    return (
        <section className="notfound">
            <div className="notfound__img"></div>
            <div className="notfound__textplace">
                <h2 className="notfound__title">Ничего не найдено</h2>
                <p className="notfound__subtitle">К сожалению по вашему запросу ничего не найдено</p>
            </div>
        </section>
    );
}

export default NotFound;
