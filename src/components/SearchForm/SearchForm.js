import React from "react";
import "./SearchForm.css";
import { useFormWithValidation } from "../../utils/FormValidation";

function SearchForm({ setKeyword}) {
    const { values, handleChange, errors, isValid, resetForm, setErrors } = useFormWithValidation();
    const {searchInput} = values;
    
// записывает сообщение об ошибке при отправке пустой формы
function handleBtnClick(e) {
    const event = e.target.closest("form").searchInput;
   const name = event.name;
   return setErrors({...errors, [name]: event.validationMessage})
}

    const handleSubmit = (e) => {
        e.preventDefault();
        searchInput &&
        setKeyword(searchInput);
        resetForm()
        handleBtnClick(e)
    };

    return (
        <form 
        noValidate
        className="search" 
        name="search"
        method="GET" 
        onSubmit={handleSubmit}
        >
            <label  className="search__label">
                <input 
                required 
                minLength="2" 
                maxLength="30" 
                type="search" 
                className="search__input" 
                placeholder="Введите тему новости" 
                id="search" 
                name="searchInput" 
                value={searchInput || ""} 
                onChange={handleChange} 
                />
                <span id="search-input-error" className={!isValid ? "search__input-error" : "search__input-error search__input-error_visible"}>
                    { 
                    errors.searchInput === "Заполните это поле." 
                    ? "Нужно ввести ключевое слово" 
                    : errors.searchInput
                    }
                </span>
            </label>
            <button  className={ !searchInput || isValid ? "search__button" : "search__button search__button_lock"} type="submit">
                Искать
            </button>
        </form>
    );
}

export default SearchForm;
