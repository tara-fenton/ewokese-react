import React, { Component } from "react";
import {
  BroswerRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//NOT NEEDED YET
// import TokenService from "../services/TokenService"

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nickname: '',
      registered: false
    }
    //bind event handlers
    this.handleInput = this.handleInput.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }
//create event functions
  handleInput(evt) {
    this.setState({
      [evt.target.attributes.dataname.value]: evt.target.value
    });
  }

  registerUser(evt) {
    evt.preventDefault();
    const body = { ...this.state };
    fetch(`http://localhost:4567/register`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
    // .then(response => response.json()).then(response => {
    //   TokenService.save(response.token)
    // })
    .then(response => {
      this.setState({
        registered: true
      });
    });
  }

render() {
  return(
    <form onChange={this.handleInput} onSubmit={this.registerUser}>
      <input dataname="username" type="text" placeholder="Username" />
      <input dataname="nickname" type="text" placeholder="Nickname" />
      <input dataname="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  )
}
}

export default Register;
