import React from 'react';
import './App.css';

import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Forgot from './components/Forgot/Forgot'

import {withRouter} from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={withRouter(Login)} />
        <Route path="/Login" component={withRouter(Login)} />
        <Route path="/SignUp" component={withRouter(SignUp)} />
        <Route path="/Forgot" component={withRouter(Forgot)} />
      </Router>
    </div>
  );
}

export default App;
