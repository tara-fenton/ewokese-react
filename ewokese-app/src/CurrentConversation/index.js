import React, { Component } from "react";
import {
  BroswerRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Conversations from '../Conversations';
import Messages from '../Messages';


class CurrentConversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [{id: 1, name: 'jordan'}],
      conversationsLoaded: false,
      messages: [],
      users: [],
      userConversations: []
    }
    //bind events
  }
  //functions
  componentDidMount() {
    this.fetchConversations();
  }
  // Fetch all conversations from API endpoint and put them in state.
  fetchConversations() {
    fetch("http://localhost:3000/api/conversations")
      .then(response => response.json())
      .then(conversationsAPIResponse => {
        console.log(conversationsAPIResponse);
        this.setState({
          conversations: conversationsAPIResponse,
          conversationsLoaded: true
        })

      });
  }


  render() {
    return (
      <div className="current-conversations">
        <div className="conversations-container">
          {this.state.conversationsLoaded ?
            <Conversations
              conversations={this.state.conversations}

            /> : <p>Loading...</p> } </div>
        <div className="messages-container">
          <Messages />
        </div>
        <div className="user-id-message-two">
            </div>
            </div>
    )
  }
}

export default CurrentConversation;
