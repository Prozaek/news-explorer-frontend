import React from "react";
import './MenuButton.css';
import {  Link } from "react-router-dom";

function MenuButton({isMenuOpen, onClose, onOpenAuthorization}) {

  function handleClick () {
onClose();
onOpenAuthorization();
}

  return (
    <section 
      className={`menu-button ${isMenuOpen ? "menu-button_opened" : ""}`}
      onClick={(e) => e.target.classList.contains("menu-button") && onClose()}
      >

       <div className="menu-button__container">
         <div className="menu-button__header">
       <h2 className="menu-button__logo">
                        NewsExplorer
      </h2>
      <button onClick={onClose} className="menu-button__close"></button>
      </div>
<nav className="menu-button__nav">
  <ul className="menu-button__menu">
    <li className="menu-button__li">
    <Link onClick={onClose} className="menu-button__link" to='/'>
     Главная
    </Link>
    </li>
    <li className="menu-button__li">
      <Link onClick={onClose} className="menu-button__link" to='/saved-news'>
      Сохранённые статьи
      </Link>
    </li>

  </ul>
    <button onClick={handleClick} className="menu-button__btn-authorization" aria-label="кнопка авторизации и выхода" type="button">
    Авторизоваться
    </button>
</nav>

       </div>
       
    </section>
  );
}

export default MenuButton;
