import React from "react";
import Popup from "../Popup/Popup";
import "./PopupSignupSuccess.css";

const PopupSignupSuccess = ({ onClose, onOpenAuthorization, successOpen }) => {
    const handleClick = () => onClose() & onOpenAuthorization();

    return (
        <Popup name="signup_success" title="Пользователь успешно зарегистрирован" isOpen={successOpen} onClose={onClose}>
            <h2 className="popup__signup-success-title">Пользователь успешно зарегистрирован</h2>
            <p onClick={handleClick} className="popup__signup-success-link">
                Войти
            </p>
        </Popup>
    );
};
export default PopupSignupSuccess;
