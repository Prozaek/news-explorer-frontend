import React from "react";
import "./Preloader.css";
import Spinner from "../Spinner/Spinner"

function Preloader() {
    return (
        <section className="preloader preloader_noresult">
            <Spinner />
            <h2 className="preloader__title">Идет поиск новостей...</h2>
        </section>
    );
}

export default Preloader;
