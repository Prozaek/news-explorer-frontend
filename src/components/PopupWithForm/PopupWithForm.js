import React from "react";
import Popup from "../Popup/Popup";
import './PopupWithForm.css';

const PopupWithForm = (props) => {

  const handleClick = (e) => e.target.textContent === "Зарегистрироваться" ? props.onClose() & props.onOpenRegistration(true) : props.onClose() & props.onOpenAuthorization(true) ;

  


  return (
    <Popup
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.onSubmit}
      name={props.name}
    >
      <h2 className="popup__title">{props.title}</h2>
      {props.children}
      <button type="submit" className="popup__btn">
        {props.nameBtn}
      </button>
      <p onClick={handleClick} className="popup__under-btn-text">или <span className="popup__under-btn-link">{props.textUnderBtn}</span> </p>
    </Popup>
  );
};

export default PopupWithForm;
