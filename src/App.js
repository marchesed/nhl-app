import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NhlMain from './components/NhlMain'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Standings from './components/Standings';

function App() {
  return (
    
    <div className="App">
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/standings'} className="nav-link">Standings</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={NhlMain} />
              <Route path='/standings' component={Standings} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
