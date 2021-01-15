import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews"
import Footer from "../Footer/Footer"

function App() {
  
  return (
    <div className="App">
       <Switch>
         <Route exact path="/">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
