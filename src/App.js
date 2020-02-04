import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NhlMain from './components/NhlMain'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Standings from './components/Standings';

function App() {
  window.onscroll = function() {scrollFunction()};
  return (
    
    <div className="App">
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Scores </Link></li>
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

function scrollFunction() {
  var navbar = document.getElementsByClassName("navbar")[0]
  var sticky = navbar.offsetHeight;
  
  if(navbar && sticky) {
    console.log(sticky,window.pageYOffset)
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky-navbar")
      
    } else {
      navbar.classList.remove("sticky-navbar");
    }
  }
  
}

export default App;
