import React, { Component } from "react";
import {
  BroswerRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Conversations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      null: null
    }
    //bind events
  }
  //functions


  render() {
    return (
      <div className="profile-container">
        <div className="user-id-message-one">
          <p>Omg I love your hair!</p>
        </div>
        <div className="user-id-message-two">
          <p>Omg thanks! It's Nandita's</p>
        </div>
          </div>
          )
  }
}

export default Conversations;
