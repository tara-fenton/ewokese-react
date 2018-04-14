import React, { Component } from "react";
import {
  BroswerRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Conversations from "../Conversations";
import Messages from "../Messages";

class CurrentConversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      conversationsLoaded: false,
      conversationSelected: 1,
      messages: [],
      messagesLoaded: [],
      users: [],
      userConversations: []
    };
    //bind events
    this.sendId = this.sendId.bind(this);
  }
  //get id of conversation clicked to send to Messages
  sendId(id) {
    console.log("clicked in CC ", id);
    this.setState({
      conversationSelected: id
    });
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
        });
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevConversationId = prevState.conversationSelected;
    const newConversationId = this.state.conversationSelected;
    if (prevConversationId !== newConversationId) {
      this.fetchMessages(this.state.conversationSelected);
    }
  }

  fetchMessages(selected) {
    fetch(`http://localhost:3000/api/messages/conversation/${selected}`)
      .then(response => response.json())
      .then(messagesAPIResponse => {
        // console.log(conversationsAPIResponse);
        this.setState({
          messages: messagesAPIResponse,
          messagesLoaded: true
        });
      });
  }

  render() {
    return (
      <div className="current-conversations">
        <div className="conversations-container">
          {this.state.conversationsLoaded ? (
            <Conversations
              conversations={this.state.conversations}
              sendId={this.sendId}
              conversationSelected={this.state.conversationSelected}
            />
          ) : (
            <p>Loading...</p>
          )}{" "}
        </div>
        <div className="messages-container">
          {this.state.messagesLoaded ? (
            <Messages messages={this.state.messages} />
          ) : (
            <p>Loading...</p>
          )}{" "}
        </div>
        <div className="user-id-message-two" />
      </div>
    );
  }
}

export default CurrentConversation;
