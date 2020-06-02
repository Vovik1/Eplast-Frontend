import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Home from './pages/Home/Home';
import DecisionTable from './pages/DecisionTable/DecisionTable';
import FooterContainer from './components/Footer/FooterContainer';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer />
        <div className="mainContent">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/decisions" component={DecisionTable} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
        <FooterContainer />
      </Router>
    </div>
  );
}

export default App;
