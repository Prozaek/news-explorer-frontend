import React from "react";
import "./SearchForm.css";
import { useFormWithValidation } from "../../utils/FormValidation";

function SearchForm({ setKeyword }) {
    const { values, handleChange, errors, isValid, resetForm, setIsValid } = useFormWithValidation();
    
    const { search } = values;

    React.useEffect(()=> {
        setIsValid(true);
    }, [setIsValid, resetForm])

    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword(search);
        resetForm();
        setIsValid(true)
    };

    return (
        <form className="search" method="GET" onSubmit={handleSubmit}>
            <label className="search__label">
                <input 
                required minLength="2" 
                maxLength="30" 
                type="search" 
                className="search__input" 
                placeholder="Введите тему новости" 
                id="search" 
                name="search" 
                value={search || ""} 
                onChange={handleChange} 
                />
                <span id="search-input-error" className={errors ? "search__input-error search__input-error_visible" : "search__input-error"}>
                    {errors.search}
                </span>
            </label>
            <button disabled={!isValid} className={!isValid ? "search__button search__button_lock" : "search__button"} type="submit">
                Искать
            </button>
        </form>
    );
}

export default SearchForm;
