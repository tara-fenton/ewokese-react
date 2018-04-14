import React, { Component } from "react";
import Profile from "./Profile";
import Messages from "./Messages";
import Conversations from "./Conversations";
import CurrentConversation from "./CurrentConversation";
import Register from "./Register";
import Login from "./Login";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditNickName from "./EditNickName";
import TokenService from "./services/TokenService";
import { createUser, login } from "./api/user";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //winesBySlug: {}
    };
    // this.updateStateWithAllWines = this.updateStateWithAllWines.bind(this);
    // this.logOut = this.logOut.bind(this);
  }
  logOut(evt) {
    evt.preventDefault();
    TokenService.destroy();
  }

  register(data) {
    createUser(data)
      .then(response => {
        TokenService.save(response.token);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  // same as above except route is login
  // as above, we are saving the token locally using
  // the TokenService
  login(data) {
    login(data)
      .then(response => {
        TokenService.save(response.token);
      })
      .catch(err => console.log(`err: ${err}`));
  }
  render() {
    return (
      <Router>
        <div className="container">
          <h1 className="page-title">Ewokese</h1>
            <div>
              <Link to="/register"><button>Register</button></Link>
              <br />
              <Link to="/login"><button>Login</button></Link>
            </div>

          <a href="#" onClick={this.logOut}>Log out</a>

          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/register" component={Register} /> */}
          {/* <Route exact path="/login" component={Login} /> */}

          <Route exact path="/" component={CurrentConversation} />

          {/* <div className="conversations-container">
            <Conversations />
          </div> */}
          {/* <div className="messages-container">
            <Messages />
          </div> */}
          <Route
            exact
            path="/register"
            component={props => (
              <Register {...props} submit={this.register.bind(this)} />
            )}
          />
          <Route
            exact
            path="/login"
            component={props => (
              <Login {...props} submit={this.login.bind(this)} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
