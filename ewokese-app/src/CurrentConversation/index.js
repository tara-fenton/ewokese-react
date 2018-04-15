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
      userConversations: [],
      message: '',
      sendMessage: false
    };
    //bind events
    window.localStorage.authToken;
    this.sendId = this.sendId.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onEditFormSubmit = this.onEditFormSubmit.bind(this);
  }
  // message input change
  onMessageChange(evt) {
    this.setState({
      message: evt.target.value
    });
  }
  // edit the form submitted
  // add to the conversations

  onEditFormSubmit(evt) {
    console.log('submit the form ');
    evt.preventDefault();
    const body = {
      message: this.state.message,
    };
    const cachedUser = localStorage.getItem('userId');
console.log(`http://localhost:3000/api/messages/${cachedUser}/${this.state.conversationSelected}`)
    fetch(`http://localhost:3000/api/messages/${cachedUser}/${this.state.conversationSelected}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      this.setState({
        sendMessage: true
      });
    });
  }

  //get id of conversation clicked to send to Messages
  sendId(id) {
    this.setState({ conversationSelected: id });
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
  // checks for state change, on click of conversations to change messages displayed
  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevConversationId = prevState.conversationSelected;
    const newConversationId = this.state.conversationSelected;
    if (prevConversationId !== newConversationId) {
      this.fetchMessages(this.state.conversationSelected);
    }
  }
  // get the messages from the selected conversation
  fetchMessages(selected) {
    fetch(`http://localhost:3000/api/messages/conversation/${selected}`)
      .then(response => response.json())
      .then(messagesAPIResponse => {
        this.setState({ messages: messagesAPIResponse, messagesLoaded: true });
      });
  }

  render() {
    return (
      <div>
        <div className="chat_window ">
          <div className="top_menu">
            <div className="buttons">
              <div className="button close" />
              <div className="button minimize" />
              <div className="button maximize" />
            </div>
            <div className="title">EwokeseApp</div>
          </div>

          <div className="current-conversations" onscroll="myFunction()">
            <div className="conversations-container" onscroll="myFunction()">
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
          </div>
          <div className="user-id-message-two" />
          <div className="bottom_wrapper clearfix">
            <form onSubmit={this.onEditFormSubmit}>
              <div className="message_input_wrapper">
                <input
                  className="message_input"
                  placeholder="Type your message here..."
                  value={this.state.message}
                  onChange={this.onMessageChange}
                  name='message'
                />;
              </div>
              <button className="send_message">
                <div className="icon" />
                <div className="text">Send</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentConversation;
