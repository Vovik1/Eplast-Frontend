import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Home from "./pages/Home/Home";
import FooterContainer from "./components/Footer/FooterContainer";

function App() {
    return (
        <div className="App">
            <Router>
                <HeaderContainer/>
                <div className="mainContent">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </div>
                <FooterContainer/>
            </Router>
        </div>
    );
}

export default App;
