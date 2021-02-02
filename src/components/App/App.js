import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import PopupSignupSuccess from "../PopupSignupSuccess/PopupSignupSuccess";
import PopupAuthorization from "../PopupAuthorization/PopupAuthorization";
import PopupRegistration from "../PopupRegistration/PopupRegistration";
import MenuButton from "../MenuButton/MenuButton";
// import NewsApi from "../../utils/NewsAPI"
import MainApi from "../../utils/MainApi";

function App() {
    // стейты модальных окон
    const [isAuthorizationPopupOpen, setIsAuthorizationPopupOpen] = React.useState(false);
    const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);
    const [isSignupSuccessPopupOpen, setIsSignupSuccessPopupOpen] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSavedMenuOpen, setIsSavedMenuOpen] = React.useState(false);

    // стейты для авторизации
    const [loggedIn, setLoggedIn] = React.useState(false);

    // cтейт срабатывает при нажатии на кнопку войти в окне авторизации и переключает кнопку "авторизация" на кнопку "выход"
    const [isAuthorBtnChange, setIsAuthorBtnChange] = React.useState(false);

    // cтейт для карточек статей
    const [cards, setCards] = React.useState({});

    // стейт спиннера
    const [isLoading, setIsLoading] = React.useState(false)
    // стейт компонента "NotFound"
    const [noResult, setNoResult] = React.useState(false)

    const handleSignOut = () => {
        setLoggedIn(false);
    };

    const handleLogin = () => {
        setLoggedIn(true);
    };

    // получает фразу из поля поиска
    const [keyword, setKeyword] = React.useState("");
    
    // получает данные карточки и юзера
    React.useEffect(() => {
        setIsLoading(true);
        keyword !== "" &&
            MainApi.getArticles(keyword)
                .then((results) => {
                    setNoResult(false)
                    setCards(results.articles)
                    setIsLoading(false);
                    results.totalResults  === 0 &&
                    setNoResult(true)
                })
                .catch((err) => {
                });
               
    }, [keyword]);

    // эффект закрытия эскейпом
    React.useEffect(() => {
        const closeOnEsc = (e) => e.key === "Escape" && closeAllPopups();
        document.addEventListener("keyup", closeOnEsc);
        return () => document.removeEventListener("keyup", closeOnEsc);
    }, []);

    function handleAuthorizationPopupClick() {
        setIsAuthorizationPopupOpen(true);
    }

    function handleRegistrationPopupClick() {
        setIsRegistrationPopupOpen(true);
    }
    function handleESignupSuccessPopupClick() {
        setIsSignupSuccessPopupOpen(true);
    }

    // закрывает все попапы
    function closeAllPopups() {
        setIsAuthorizationPopupOpen(false);
        setIsRegistrationPopupOpen(false);
        setIsSignupSuccessPopupOpen(false);
        setIsMenuOpen(false);
        setIsSavedMenuOpen(false);
    }

    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Main
                        loggedIn={loggedIn}
                        onSignOut={handleSignOut}
                        onLogin={handleLogin}
                        onOpenAuthorization={handleAuthorizationPopupClick}
                        isAuthorBtnChange={isAuthorBtnChange}
                        onClose={closeAllPopups}
                        openBurgerMenu={setIsMenuOpen}
                        isOpenAuthor={isAuthorizationPopupOpen}
                        isOpenRegistr={isRegistrationPopupOpen}
                        isOpenSignSucc={isSignupSuccessPopupOpen}
                        cards={cards}
                        setKeyword={setKeyword}
                        keyword={keyword}
                        isLoading={isLoading}
                        noResult={noResult}
                        setNoResult={setNoResult}
                    />
                </Route>
                <Route path="/saved-news">
                    <SavedNews openSavedBurgerMenu={setIsSavedMenuOpen} cards={cards} onClose={closeAllPopups} />
                </Route>
            </Switch>
            <Footer />

            <PopupSignupSuccess isOpenSignSucc={isSignupSuccessPopupOpen} onClose={closeAllPopups} onOpenAuthorization={handleAuthorizationPopupClick} />

            <PopupAuthorization onClose={closeAllPopups} onOpenRegistration={handleRegistrationPopupClick} isOpenAuthor={isAuthorizationPopupOpen} setIsAuthorBtnChange={setIsAuthorBtnChange} />

            <PopupRegistration isOpenRegistr={isRegistrationPopupOpen} onClose={closeAllPopups} onOpenAuthorization={handleAuthorizationPopupClick} setIsSignupSuccessPopupOpen={handleESignupSuccessPopupClick} />

            <MenuButton isMenuOpen={isMenuOpen} isSavedMenuOpen={isSavedMenuOpen} onClose={closeAllPopups} onOpenAuthorization={handleAuthorizationPopupClick} />
        </div>
    );
}

export default App;
