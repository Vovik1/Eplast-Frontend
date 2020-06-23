import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DecisionTable from './pages/DecisionTable/DecisionTable';
import './App.less';
import HeaderContainer from './components/Header/HeaderContainer';
import Home from './pages/Home/Home';
import FooterContainer from './components/Footer/FooterContainer';
import PrivateLayout from './components/PrivateLayout/PrivateLayout';
import RouteWithLayout from './RouteWithLayout';
import Actions from './pages/Actions/Actions';
import ActionEvent from './pages/Actions/ActionEvent/ActionEvent';
import UserProfile from "./pages/userPage/personalData/PersonalData";
import EventCreate from './pages/Actions/ActionEvent/EventCreate/EventCreate';

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
           <Route path="/userpage/:specify" component={UserProfile}/>
           <Route path="/actions/eventCreate" component={EventCreate}/>
          <Route exact path="/actions" component={Actions} />
          <Route exact path="/actions/events/:id" component={ActionEvent} />
        </Switch>
      </div>
      <FooterContainer />
    </Router>
  </div>
);

export default App;
