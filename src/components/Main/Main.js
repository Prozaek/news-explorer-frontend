import React from "react";
import Header from "../Header/Header"
import SearchForm from "../SearchForm/SearchForm"
import About from "../About/About"
import Results from "../Results/Results"
// import PopupAuthorization from "../PopupAuthorization/PopupAuthorization"
// import PopupRegistration from "../PopupRegistration/PopupRegistration"
import './Main.css';

function Main({loggedIn, onLogin, onSignOut, onOpenAuthorization, isAuthorBtnChange}) {
  return (
    <section className="main">
     
      <Header loggedIn={loggedIn} onSignOut={onSignOut} onLogin={onLogin} onOpenAuthorization={onOpenAuthorization} isAuthorBtnChange={isAuthorBtnChange}/>
      <div className="main__title-container">
        <h1 className="main__title">Что творится в мире?</h1>
        <p className="main__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      </div>
      <SearchForm />
      <Results />
      <About />
      {/* <PopupAuthorization onOpenRegistration={onOpenRegistration} isOpen={isOpenAuthor} onClose={onClose}/>
      <PopupRegistration isOpen={isOpenRegistr} onClose={onClose} onOpenAuthorization={onOpenAuthorization} /> */}
    </section>
  );
}

export default Main;
