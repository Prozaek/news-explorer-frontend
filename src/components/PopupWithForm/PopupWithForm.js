import React from "react";
import Popup from "../Popup/Popup";
import "./PopupWithForm.css";

const PopupWithForm = (props) => {
    const handleClick = (e) => (e.target.textContent === "Зарегистрироваться" ? props.onClose() & props.onOpenRegistration() : props.onClose() & props.onOpenAuthorization());

    const errorUndefined = props.errorsPassword || props.errorsEmail || props.errorsName;

    return (
        <Popup 
        isOpen={props.isOpen} 
        onClose={props.onClose} 
        onSubmit={props.onSubmit} 
        name={props.name}
        resetForm={props.resetForm}
        >
            <h2 className={props.waitResponse ? "popup__title-spinner" : "popup__title"}>{props.title}</h2>
            {props.children}
            {props.name === "registration" && <span className="popup__error-registration">{props.error409}</span>}
            <button  type="submit" className={ errorUndefined === undefined ||  props.isValid ? "popup__btn" : "popup__btn popup__btn_lock"}>
                {props.nameBtn}
            </button>
            <p onClick={handleClick} className="popup__under-btn-text">
                или <span className="popup__under-btn-link">{props.textUnderBtn}</span>{" "}
            </p>
        </Popup>
    );
};

export default PopupWithForm;
