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
import NewsApi from "../../utils/NewsAPI";
import MainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../auth";

function App() {
    // стейты модальных окон
    const [isAuthorizationPopupOpen, setIsAuthorizationPopupOpen] = React.useState(false);
    const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);
    const [isSignupSuccessPopupOpen, setIsSignupSuccessPopupOpen] = React.useState(false);

    //
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSavedMenuOpen, setIsSavedMenuOpen] = React.useState(false);

    // стейты для авторизации
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});

    // в случае удачной регистрации открывает попап с сообщением
    const [successOpen, setSuccessOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    // если юзер уже зарегистрирован появится сообщение в попапе регистрации
    const [error409, setError409] = React.useState("");

    // cтейт для карточек results
    const [saveArticles, setSaveArticles] = React.useState([]);

    const jsonArt = JSON.parse(localStorage.getItem("articles")) 
    // cтейт для cохраненных статей
    const [articles, setArticles] = React.useState(jsonArt || {});

    // стейт спиннера
    const [isLoading, setIsLoading] = React.useState(false);
    // стейт компонента "NotFound"
    const [noResult, setNoResult] = React.useState(false);

    const [redirOpenAuth, setRedirOpenAuth] = React.useState(false)

    // получает фразу из поля поиска
    const [keyword, setKeyword] = React.useState("");

    const [waitResponse, setWaitResponse] = React.useState(false);

    //проверяет токен при загрузке страницы
    React.useEffect(() => {
        tokenCheck()
    }, []);

    // проверяет токен, меняет состояние loggedIn
    const tokenCheck  = () => {
        const jwt =  localStorage.getItem("jwt");
        if (jwt) {
          auth.getContent(jwt)
                .then((res) => {
                    if (res) {
                        setCurrentUser(res.user);
                        setLoggedIn(jwt);
                    }
                })
                .catch((err) => console.error(err));
        }
    };

    // Запрос к API за информацией о пользователе и массиве карточек выполняется единожды при монтировании. / 1.88

    React.useEffect(() => {
        MainApi.getUser()
            .then((results) => {
                setCurrentUser(results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loggedIn]);

    React.useEffect(() => {
        loggedIn &&
            MainApi.getArticles()
            .then(setIsLoading(true))
                .then((results) => {
                    setIsLoading(false);
                    const articles = results.data;
                    setSaveArticles(articles);
                })
                .catch((err) => {
                    console.log(err);
                });
    }, [loggedIn]);

    // получает данные карточки
    React.useEffect(() => {
        keyword !== "" &&
            NewsApi.getArticles(keyword)
                .then(setIsLoading(true))
                .then((results) => {
                    const resArticles = results.articles;
                    const jsonArticles = JSON.stringify({keyword, resArticles});
                    localStorage.setItem("articles", jsonArticles);
                    setNoResult(false);
                    setArticles({keyword, resArticles});
                    setIsLoading(false);
                    results.totalResults === 0 && setNoResult(true);
                })
                .catch((err) => {
                    console.log(err);
                });
    }, [keyword]);

    // регистрирует нового пользователя
    const handleRegister = (name, email, password) => {
        setWaitResponse(true)
        auth.register(name, email, password)
            .then((res) => {
                if(res.data){
                setSuccess(true);
                setError409("");
                setWaitResponse(false);
            }
            })
            .catch((err) => {
                err === "Ошибка: 409" && setError409("Такой пользователь уже есть.");
                setWaitResponse(false);
            });
    };
    
    // часть логики авторизации, добавление токена в хранилище
    const handleResponse = (data) => {
        if (data) {
            localStorage.setItem("jwt", data.token);
            MainApi.updateToken();
            setLoggedIn(true);
        }
    };

    // авторизация
    const handleLogin = (email, password) => {
        auth.authorize(email, password)
            .then(setWaitResponse(true))
            .then(handleResponse)
            .then(tokenCheck)
            .catch((err) => {
                console.error(err);
            });
    };

    // удаляет jwt при выходе
    const handleSignOut = () => {
        localStorage.removeItem("jwt");
        setCurrentUser({});
        setLoggedIn(false);
        // localStorage.removeItem("articles");
        // setArticles([]);
    };

    // публикация карточки
    function handleAddArticles({ keyword, article }) {
        MainApi.postArticles(keyword, article)
            .then(() => {
                MainApi.getArticles()
                .then((res) => 
                setSaveArticles(res.data)
                )
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // удаление карточки
    function handleCardDelete(article) {
        MainApi.deleteArticles(article._id)
            .then(() => {
                const newArticles = saveArticles.filter((a) => a._id !== article._id);
                setSaveArticles(newArticles);
            })
            .catch((err) => {
                console.log(err);
            });
    }

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

    // function handleSuccessOpen() {
    //     setSuccessOpen(true);
    // }

    // закрывает все попапы
    function closeAllPopups() {
        setIsAuthorizationPopupOpen(false);
        setIsRegistrationPopupOpen(false);
        setSuccessOpen(false);
        setIsMenuOpen(false);
        setIsSavedMenuOpen(false);
        setWaitResponse(false);
    }
   
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Main
                            onSignOut={handleSignOut}
                            onOpenAuthorization={handleAuthorizationPopupClick}
                            onClose={closeAllPopups}
                            openBurgerMenu={setIsMenuOpen}
                            isOpenAuthor={isAuthorizationPopupOpen}
                            isOpenRegistr={isRegistrationPopupOpen}
                            isOpenSignSucc={isSignupSuccessPopupOpen}
                            articles={articles}
                            setKeyword={setKeyword}
                            keyword={keyword}
                            isLoading={isLoading}
                            noResult={noResult}
                            setNoResult={setNoResult}
                            loggedIn={loggedIn}
                            onAddArticles={handleAddArticles}
                            handleCardDelete={handleCardDelete}
                            redirOpenAuth={redirOpenAuth}
                            saveArticles={saveArticles}
                        />
                    </Route>
                    <ProtectedRoute
                        path="/saved-news"
                        loggedIn={loggedIn}
                        component={SavedNews}
                        onSignOut={handleSignOut}
                        openSavedBurgerMenu={setIsSavedMenuOpen}
                        onClose={closeAllPopups}
                        keyword={keyword}
                        saveArticles={saveArticles}
                        handleCardDelete={handleCardDelete}
                        isLoading={isLoading}
                        onOpenAuthorization={handleAuthorizationPopupClick}
                        setRedirOpenAuth={setRedirOpenAuth}
                        articles={articles}
                    />
                </Switch>
                <Footer />

                <PopupSignupSuccess onClose={closeAllPopups} onOpenAuthorization={handleAuthorizationPopupClick} successOpen={successOpen} />

                <PopupAuthorization onClose={closeAllPopups} onOpenRegistration={handleRegistrationPopupClick} isOpenAuthor={isAuthorizationPopupOpen} onLogin={handleLogin} loggedIn={loggedIn} waitResponse={waitResponse} />

                <PopupRegistration
                    isOpenRegistr={isRegistrationPopupOpen}
                    onClose={closeAllPopups}
                    onOpenAuthorization={handleAuthorizationPopupClick}
                    setIsSignupSuccessPopupOpen={handleESignupSuccessPopupClick}
                    onRegister={handleRegister}
                    success={success}
                    setSuccessOpen={setSuccessOpen}
                    error409={error409}
                    setSuccess={setSuccess}
                    waitResponse={waitResponse}
                />

                <MenuButton isMenuOpen={isMenuOpen} isSavedMenuOpen={isSavedMenuOpen} onClose={closeAllPopups} onOpenAuthorization={handleAuthorizationPopupClick} loggedIn={loggedIn} onSignOut={handleSignOut} />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
