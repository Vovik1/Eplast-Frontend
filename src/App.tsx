import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Actions from './pages/Actions/Actions'
import ActionEvent from './pages/Actions/ActionEvent/ActionEvent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/actions" component={Actions} />
          <Route exact path="/actions/events/:id" component={ActionEvent} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
