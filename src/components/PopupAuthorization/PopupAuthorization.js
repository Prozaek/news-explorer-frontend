import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./PopupAuthorization.css";
import { useFormWithValidation } from "../../utils/FormValidation";

const PopupAuthorization = ({ isOpenAuthor, onClose, onOpenRegistration, onLogin, loggedIn, waitResponse }) => {
    // валидатор
    const { values, handleChange, errors, isValid, resetForm, setErrors } = useFormWithValidation();
    const { email, password } = values;

    // записывает сообщение об ошибке при отправке пустой формы
    function handleBtnClick(e) {
        let event = e.target.closest("form").email;
        const name = event.name;
        return setErrors({ ...errors, [name]: event.validationMessage });
    }
    function handleSubmit(e) {
        e.preventDefault();
        handleBtnClick(e);
        if (isValid) {
            let { email, password } = values;
            onLogin(email, password);

             onClose();
             resetForm();
        }
    }

    return (
        <PopupWithForm
            name="authorization"
            nameBtn="Войти"
            textUnderBtn="Зарегистрироваться"
            title="Вход"
            isOpen={isOpenAuthor}
            onClose={onClose}
            onOpenRegistration={onOpenRegistration}
            onSubmit={handleSubmit}
            isValid={isValid}
            errorsPassword={errors.password}
            errorsEmail={errors.email}
            waitResponse={waitResponse}
            resetForm={resetForm}
        >
            <label className="popup__label">
                <span className="popup__input-title">Email</span>
                <input id="emailAuthorization-input" autoComplete="off" name="email" placeholder="Введите почту" required type="email" className="popup__input popup__input_mail-authorization" value={email || ""} onChange={handleChange} />
                <span id="emailAuthorization-input-error" className={errors ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                    {errors.email}
                </span>
            </label>
            <label className="popup__label">
                <span className="popup__input-title">Пароль</span>
                <input
                    id="passwordAuthorization-input"
                    autoComplete="off"
                    name="password"
                    placeholder="Введите пароль"
                    required
                    type="password"
                    minLength="2"
                    // pattern="^[a-zA-Z\s]+$"
                    className="popup__input popup__input_password-authorization"
                    value={password || ""}
                    onChange={handleChange}
                />
                <span id="mailAuthorization-input-error" className={errors ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                    {errors.password === "Введите данные в указанном формате." ? "Смените пожалуйста раскладку клавиатуры." : errors.password}
                </span>
            </label>
        </PopupWithForm>
    );
};
export default PopupAuthorization;
