import React from "react";
import "./SearchForm.css";

function SearchForm() {
    return (
        <form className="search" method="GET">
            <input type="search" className="search__input" placeholder="Введите тему новости" id="search" name="search"  />
            <button className="search__button" type="submit">
                Искать
            </button>
        </form>
    );
}

export default SearchForm;
