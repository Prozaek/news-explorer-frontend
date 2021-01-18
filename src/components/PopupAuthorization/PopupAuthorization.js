import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./PopupAuthorization.css";

const PopupAuthorization = ({isOpenAuthor, onClose, onOpenRegistration, setIsAuthorBtnChange}) => {

  function handleSubmit(e) {
    e.preventDefault();
    onClose();
    setIsAuthorBtnChange(true);
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
    >
      <label className="popup__label">
      <span className="popup__input-title">Email</span>
        <input
          id="mailAuthorization-input"
          autoComplete="off"
          name="mail"
          placeholder="Введите почту"
          required
          type="email"
          className="popup__input popup__input_mail-authorization"
        />
        <span id="mailAuthorization-input-error" className="popup__input-error"></span>
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
          className="popup__input popup__input_password-authorization"
        />
        <span id="mailAuthorization-input-error" className="popup__input-error"></span>
      </label>
      
    </PopupWithForm>
  );
};
export default PopupAuthorization;
