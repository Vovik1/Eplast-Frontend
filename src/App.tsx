import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DecisionTable from './pages/DecisionTable/DecisionTable';
import './App.less';
import HeaderContainer from './components/Header/HeaderContainer';
import Home from './pages/Home/Home';
import FooterContainer from './components/Footer/FooterContainer';
import Contacts from './pages/Contacts/Contacts';
import PrivateLayout from './components/PrivateLayout/PrivateLayout';
import RouteWithLayout from './RouteWithLayout';
import Cities from './pages/Cities/Cities';
import City from './pages/City/City';
import EventInfo from './pages/Actions/ActionEvent/EventInfo/EventInfo';
import UserProfile from './pages/userPage/personalData/PersonalData';
import EventCreate from './pages/Actions/ActionEvent/EventCreate/EventCreate';
import Notifications from './pages/Notifications/Notifications';
import Actions from './pages/Actions/Actions';
import ActionEvent from './pages/Actions/ActionEvent/ActionEvent';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';

const App: FC = () => (
  <div className="App">
    <Router>
      <HeaderContainer />
      <div className="mainContent">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/contacts" component={Contacts} />
          <Route exact path="/actions/eventinfo/:id" component={EventInfo} />
          {/* <Route exact path="/actions/events/:id" component={ActionEvent} /> */}
          <Route exact path="/actions/eventCreate" component={EventCreate} />
          <Route path="/userpage/:specify" component={UserProfile} />
          <Route path="/notification" component={Notifications} />
          <RouteWithLayout
            layout={PrivateLayout}
            path="/menu"
            component={Contacts}
          />
          <RouteWithLayout
            layout={PrivateLayout}
            path="/decisions"
            component={DecisionTable}
          />
          <RouteWithLayout
            layout={PrivateLayout}
            exact
            path="/cities"
            component={Cities}
          />
          <RouteWithLayout
            layout={PrivateLayout}
            path="/cities/:id"
            component={City}
          />
          <RouteWithLayout
            layout={PrivateLayout}
            path="/actions/events"
            component={Actions}
          />
          <RouteWithLayout
            layout={PrivateLayout}
            path="/actions/events/:id"
            component={ActionEvent}
          />
        </Switch>
      </div>
      <FooterContainer />
    </Router>
  </div>
);

export default App;
