import React from "react";
import "./Popup.css";

const Popup = (props) => {
    const handleClick = () => {
        props.onClose();
    };

    return (
        <section className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`} onClick={(e) => e.target.classList.contains("popup") && props.onClose()}>
            <form onSubmit={props.onSubmit} noValidate name="popup" action="#" method="GET" className={`popup__container popup__container_${props.name}`}>
                <button onClick={handleClick} aria-label="кнопка закрывающая форму-редактор" className="popup__btn-close" type="button"></button>
                {props.children}
            </form>
        </section>
    );
};

export default Popup;
