import React, { Component } from "react";
import {
  BroswerRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      null: null
    }
  }



  render() {
    return (
      <div className="profile-container">
        <img src="https://storify.com/services/proxy/2/kPtsrjkSH4r9kwGHXc129w/https/pbs.twimg.com/media/C8qbpDOVoAAp-y4.jpg:large" />
        <h1>Username</h1>
        <p>I'm just a girl, standing in front of a boy...</p>
      </div>
    )
  }
}

export default Profile;
