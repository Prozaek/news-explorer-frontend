import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./PopupRegistration.css";
import { useFormWithValidation } from "../../utils/FormValidation";

const PopupRegistration = ({ isOpenRegistr, onClose, onOpenAuthorization, setIsSignupSuccessPopupOpen }) => {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const { email, password, name } = values;
    // const [resetAuthForm, setResetAuthForm]=React.useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        onClose();
        setIsSignupSuccessPopupOpen();
        resetForm();
    }

    return (
        <PopupWithForm
            name="registration"
            nameBtn="Зарегистрироваться"
            textUnderBtn="Войти"
            title="Регистрация"
            isOpen={isOpenRegistr}
            onClose={onClose}
            onOpenAuthorization={onOpenAuthorization}
            onSubmit={handleSubmit}
            isFormValid={isValid}
        >
            <label className="popup__label">
                <span className="popup__input-title">Email</span>
                <input id="mailRegistration-input" autoComplete="off" name="email" placeholder="Введите почту" required type="email" className="popup__input popup__input_mail-registration" value={email} onChange={handleChange} />
                <span id="emailRegistration-input-error" className={errors ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                    {errors.email}
                </span>
            </label>
            <label className="popup__label">
                <span className="popup__input-title">Пароль</span>
                <input
                    id="passwordRegistration-input"
                    autoComplete="off"
                    name="password"
                    placeholder="Введите пароль"
                    required
                    type="password"
                    minLength="2"
                    pattern="^[a-zA-Z\s]+$"
                    className="popup__input popup__input_password-registration"
                    value={password}
                    onChange={handleChange}
                />
                <span id="mailRegistration-input-error" className={errors ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                    {errors.password === "Введите данные в указанном формате." ? "Смените пожалуйста раскладку клавиатуры." : errors.password}
                </span>
            </label>

            <label className="popup__label">
                <span className="popup__input-title">Имя</span>
                <input
                    id="nameRegistration-input"
                    autoComplete="off"
                    name="name"
                    placeholder="Введите свое имя"
                    required
                    type="text"
                    minLength="2"
                    maxLength="30"
                    className="popup__input popup__input_password-registration"
                    value={name}
                    onChange={handleChange}
                />
                <span id="mailRegistration-input-error" className={true ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                    {errors.name}
                </span>
            </label>
        </PopupWithForm>
    );
};
export default PopupRegistration;
