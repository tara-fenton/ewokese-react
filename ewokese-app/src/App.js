import React, { Component } from 'react';

import Profile from "./Profile";
import Conversations from "./Conversations";
import CurrentConversation from "./CurrentConversation";
import Register from "./Register";
import Login from "./Login";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/conversations" component={Conversations} />
          <Route exact path="/list" component={CurrentConversation} />
        </div>
      </Router>
    );
  }
}

export default App;
