import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews"
import Footer from "../Footer/Footer"
import PopupSignupSuccess from "../PopupSignupSuccess/PopupSignupSuccess"
import PopupAuthorization from "../PopupAuthorization/PopupAuthorization"
import PopupRegistration from "../PopupRegistration/PopupRegistration"

function App() {

// стейты модальных окон
  const [isAuthorizationPopupOpen, setIsAuthorizationPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);
  const [isSignupSuccessPopupOpen, setIsSignupSuccessPopupOpen] = React.useState(false);

  // cтейт срабатывает при нажатии на кнопку войти в окне авторизации и переключает кнопку "авторизация" на кнопку "выход"
  const [isAuthorBtnChange, setIsAuthorBtnChange]=React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  
  const handleSignOut = () => {
    setLoggedIn(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };
  
  // эффект закрытия эскейпом
  React.useEffect(() => {
    const closeOnEsc = (e) => e.key === "Escape" && closeAllPopups();
    document.addEventListener("keyup", closeOnEsc);
    return () => document.removeEventListener("keyup", closeOnEsc);
  }, []);

    function closeAllPopups() {
    setIsAuthorizationPopupOpen(false);
    setIsRegistrationPopupOpen(false);
    setIsSignupSuccessPopupOpen(false)
  }

  
  return (
    <div className="App">
       <Switch>
         <Route exact path="/">
          <Main  isOpenAuthor={isAuthorizationPopupOpen} loggedIn={loggedIn} onSignOut={handleSignOut} onLogin={handleLogin} onOpenAuthorization={setIsAuthorizationPopupOpen}  
            isAuthorBtnChange={isAuthorBtnChange}/>
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      <Footer />

      <PopupSignupSuccess isOpenSignSucc={isSignupSuccessPopupOpen} onClose={closeAllPopups} onOpenAuthorization={setIsAuthorizationPopupOpen}/>

      <PopupAuthorization  onClose={closeAllPopups} onOpenRegistration={setIsRegistrationPopupOpen} isOpenAuthor={isAuthorizationPopupOpen} setIsAuthorBtnChange={setIsAuthorBtnChange}/>
      
      <PopupRegistration isOpenRegistr={isRegistrationPopupOpen} onClose={closeAllPopups} onOpenAuthorization={setIsAuthorizationPopupOpen} setIsSignupSuccessPopupOpen={setIsSignupSuccessPopupOpen}/>

    </div>
  );
}

export default App;
