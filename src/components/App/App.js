import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews"
import Footer from "../Footer/Footer"
import PopupSignupSuccess from "../PopupSignupSuccess/PopupSignupSuccess"
import PopupAuthorization from "../PopupAuthorization/PopupAuthorization"
import PopupRegistration from "../PopupRegistration/PopupRegistration"
import MenuButton from "../MenuButton/MenuButton"
// import NewsApi from "../../utils/NewsAPI"
import MainApi from "../../utils/MainApi"

function App() {

// стейты модальных окон
  const [isAuthorizationPopupOpen, setIsAuthorizationPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);
  const [isSignupSuccessPopupOpen, setIsSignupSuccessPopupOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // стейты для авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);
  //  const [email, setEmail] = React.useState("");


  // cтейт срабатывает при нажатии на кнопку войти в окне авторизации и переключает кнопку "авторизация" на кнопку "выход"
  const [isAuthorBtnChange, setIsAuthorBtnChange]=React.useState(false);

  // cтейт для карточек статей
  const [cards, setCards] = React.useState([]);
  
  const handleSignOut = () => {
    setLoggedIn(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  // получает данные карточки и юзера
  React.useEffect(() => {
    MainApi.getInitialArticles()
      .then((results) => {
        
        const cardsData = results.articles;
        
        setCards(cardsData);
        // console.log(cardsData)
      })
      .catch((err) => {
      });
  }, []);




  
  // эффект закрытия эскейпом
  React.useEffect(() => {
    const closeOnEsc = (e) => e.key === "Escape" && closeAllPopups();
    document.addEventListener("keyup", closeOnEsc);
    return () => document.removeEventListener("keyup", closeOnEsc);
  }, []);


  function handleAuthorizationPopupClick() {
    setIsAuthorizationPopupOpen(true)
  }

  function handleRegistrationPopupClick() {
    setIsRegistrationPopupOpen(true);
  }
  function handleESignupSuccessPopupClick() {
    setIsSignupSuccessPopupOpen(true);
  }
  function handlesetIsMenuClick() {
    setIsMenuOpen(true);
  }
  // закрывает все попапы
    function closeAllPopups() {
    setIsAuthorizationPopupOpen(false);
    setIsRegistrationPopupOpen(false);
    setIsSignupSuccessPopupOpen(false);
    setIsMenuOpen(false);
  }

  return (
    <div className="App">
       <Switch>
         <Route exact path="/">
          <Main  loggedIn={loggedIn} onSignOut={handleSignOut} onLogin={handleLogin} onOpenAuthorization={handleAuthorizationPopupClick}  
            isAuthorBtnChange={isAuthorBtnChange} onClose={closeAllPopups}  openBurgerMenu = {setIsMenuOpen} isOpenAuthor={isAuthorizationPopupOpen} isOpenRegistr={isRegistrationPopupOpen} isOpenSignSucc={isSignupSuccessPopupOpen} cards={cards}/>
        </Route>
        <Route path="/saved-news">
          <SavedNews openBurgerMenu = {setIsMenuOpen} cards={cards}/>
        </Route>
      </Switch>
      <Footer />

      <PopupSignupSuccess isOpenSignSucc={isSignupSuccessPopupOpen} onClose={closeAllPopups} onOpenAuthorization={handleAuthorizationPopupClick}/>

      <PopupAuthorization  onClose={closeAllPopups} onOpenRegistration={setIsRegistrationPopupOpen} isOpenAuthor={isAuthorizationPopupOpen} setIsAuthorBtnChange={setIsAuthorBtnChange}/>
      
      <PopupRegistration isOpenRegistr={isRegistrationPopupOpen} onClose={closeAllPopups} onOpenAuthorization={handleAuthorizationPopupClick} setIsSignupSuccessPopupOpen={setIsSignupSuccessPopupOpen}/>

      <MenuButton isMenuOpen={isMenuOpen} onClose={closeAllPopups} onOpenAuthorization={handleAuthorizationPopupClick}/>
    </div>
  );
}

export default App;
