import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DecisionTable from './pages/DecisionTable/DecisionTable';
import './App.less';
import HeaderContainer from './components/Header/HeaderContainer';
import Home from './pages/Home/Home';
import FooterContainer from './components/Footer/FooterContainer';
import PrivateLayout from './components/PrivateLayout/PrivateLayout';
import RouteWithLayout from './RouteWithLayout';

const App: FC = () => (
  <div className="App">
    <Router>
      <HeaderContainer />
      <div className="mainContent">
        <Switch>
          <Route exact path="/" component={Home} />

          <RouteWithLayout
            layout={PrivateLayout}
            path="/decisions"
            component={DecisionTable}
          />
        </Switch>
      </div>
      <FooterContainer />
    </Router>
  </div>
);

export default App;
