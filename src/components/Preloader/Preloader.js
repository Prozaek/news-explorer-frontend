import React from "react";
import "./Preloader.css";

function Preloader() {

    return (
        <section className="preloader preloader_noresult">
            <i className="preloader__circle"></i>
            <h2 className="preloader__title">Идет поиск новостей...</h2>
        </section>
    );
}

export default Preloader;
