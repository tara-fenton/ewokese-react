import React, { Component } from 'react';
import Profile from "./Profile";
import Conversations from "./Conversations";
import CurrentConversation from "./CurrentConversation";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditNickName from "./EditNickName";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/profile/:id" component={Profile} />
          <Route path="/profile/:id/edit" component={EditNickName} />
          <Route exact path="/conversations" component={Conversations} />
          <Route exact path="/list" component={CurrentConversation} />
        </div>
      </Router>
    );
  }
}

export default App;
