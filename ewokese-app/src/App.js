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
      userId: null,
      loggedIn: false
    };
     this.logOut = this.logOut.bind(this);
     this.fetchUser = this.fetchUser.bind(this);
  }
  logOut(evt) {
    evt.preventDefault();
    TokenService.destroy();
  }

  register(data) {
    createUser(data)
      .then(response => {
        TokenService.save(response.token);
        // set the state of logged in to true
        this.setState({
          loggedIn: true
        })
      })
      .catch(err => console.log(`err: ${err}`));
  }

  // same as above except route is login
  // as above, we are saving the token locally using
  // the TokenService
  login(data) {
    this.fetchUser(data.username)
    console.log('data in login in app ',data)
    login(data)
      .then(response => {
        TokenService.save(response.token);

      })
      .catch(err => console.log(`err: ${err}`));
  }
  fetchUser(name) {
    fetch(`http://localhost:3000/api/username/${name}`)
      .then(response => response.json())
      .then(user => {
        console.log('user in fetch user ',user);
        this.setState({
          userId: user.id
        });
      });
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


          {/* <Route exact path="/profile" component={Profile} /> */}
          <Route exact path="/" component={CurrentConversation} />

          <Route
            exact
            path="/profile"
            component={props => (
              <Profile {...props} />
            )}
          />
          <Route exact path="/profile/1/edit" component={EditNickName} />
          {/* <Route exact path="/profile/:id/edit" component={EditNickName} /> */}


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
