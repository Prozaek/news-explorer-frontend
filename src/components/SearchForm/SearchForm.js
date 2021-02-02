import React from "react";
import "./SearchForm.css";

function SearchForm({ setKeyword }) {
    const [value, setValue] = React.useState("");
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setValue(value);
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    }

    const resetForm = React.useCallback(
        (newValue = "", newErrors = "", newIsValid = false) => {
            setValue(newValue);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValue, setIsValid, setErrors]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
        setKeyword(value);
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
                id="search" name="search" 
                value={value || ""} 
                onChange={handleChange} 
                pattern="^[a-zA-Z\s]+$" />
                <span id="search-input-error" className={errors.search ? "search__input-error search__input-error_visible" : "search__input-error"}>
                    {errors.search === "Введите данные в указанном формате." ? "Смените пожалуйста раскладку клавиатуры" : errors.search}
                </span>
            </label>
            <button disabled={!isValid} className={!isValid ? "search__button search__button_lock" : "search__button"} type="submit">
                Искать
            </button>
        </form>
    );
}

export default SearchForm;
