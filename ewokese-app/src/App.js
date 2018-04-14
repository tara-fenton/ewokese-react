import React, { Component } from 'react';
import Profile from "./Profile";
import Messages from "./Messages";
import Conversations from "./Conversations";
import CurrentConversation from "./CurrentConversation";
import Register from "./Register";
import Login from "./Login";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditNickName from "./EditNickName";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //
  //   }
  // }
  render() {
    return (
      <Router>

        <div className="container">

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile/1/edit" component={EditNickName} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/" component={CurrentConversation} />

          {/* <div className="conversations-container">
            <Conversations />
          </div> */}
          {/* <div className="messages-container">
            <Messages />
          </div> */}

        </div>
      </Router>
    );
  }
}

export default App;
