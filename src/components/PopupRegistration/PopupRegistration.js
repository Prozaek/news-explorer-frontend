import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./PopupRegistration.css";

const PopupRegistration = ({isOpenRegistr, onClose, onOpenAuthorization, setIsSignupSuccessPopupOpen}) => {

  function handleSubmit(e) {
    e.preventDefault();
    onClose();
    setIsSignupSuccessPopupOpen(true);
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
    >
      <label className="popup__label">
      <span className="popup__input-title">Email</span>
        <input
          id="mailRegistration-input"
          autoComplete="off"
          name="mail"
          placeholder="Введите почту"
          required
          type="email"
          className="popup__input popup__input_mail-registration"
        />
        <span id="mailRegistration-input-error" className="popup__input-error"></span>
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
          className="popup__input popup__input_password-registration"
        />
        <span id="mailRegistration-input-error" className="popup__input-error"></span>
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
          className="popup__input popup__input_password-registration"
        />
        <span id="mailRegistration-input-error" className="popup__input-error"></span>
      </label>
      
    </PopupWithForm>
  );
};
export default PopupRegistration;
