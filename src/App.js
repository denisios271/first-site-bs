import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Button } from 'react-bootstrap';
import { NaviBar } from './Components/Navibar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import {Home} from './Pages/Home';
import {Users} from './Pages/Users';
import {About} from './Pages/About';

function App() {
  return (
  <>
  <Router>
    <NaviBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/about" component={About}/>
    </Switch>
    </Router>
  </>
  );
}

export default App;
