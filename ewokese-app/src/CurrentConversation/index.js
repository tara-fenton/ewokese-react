import React, {Component} from "react";
import {BroswerRouter as Router, Route, Link, Redirect} from "react-router-dom";
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
    this.setState({conversationSelected: id})
  }

  //functions
  componentDidMount() {
    this.fetchConversations();

  }
  // Fetch all conversations from API endpoint and put them in state.
  fetchConversations() {
    fetch("http://localhost:3000/api/conversations").then(response => response.json()).then(conversationsAPIResponse => {
      console.log(conversationsAPIResponse);
      this.setState({conversations: conversationsAPIResponse, conversationsLoaded: true});
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
    fetch(`http://localhost:3000/api/messages/conversation/${selected}`).then(response => response.json()).then(messagesAPIResponse => {
      // console.log(conversationsAPIResponse);
      this.setState({messages: messagesAPIResponse, messagesLoaded: true});
    });
  }

  render() {
    return (
      <div>
      <div className="chat_window ">
        <div className="top_menu">
          <div className="buttons">
            <div className="button close"></div>
            <div className="button minimize"></div>
            <div className="button maximize"></div>
          </div>
          <div className="title">EwokeseApp</div>
        </div>
          <div className="current-conversations" onscroll="myFunction()">
            <div className="conversations-container" onscroll="myFunction()">
              {
                this.state.conversationsLoaded
                  ? (<Conversations conversations={this.state.conversations} sendId={this.sendId} conversationSelected={this.state.conversationSelected}/>)
                  : (<p>Loading...</p>)
              }{" "}
            </div>
            <div className="messages-container">
              {
                this.state.messagesLoaded
                  ? (<Messages messages={this.state.messages}/>)
                  : (<p>Loading...</p>)
              }{" "}
            </div>
          </div>
          <div className="user-id-message-two"/>
          <div className="bottom_wrapper clearfix">
        <div className="message_input_wrapper"><input className="message_input" placeholder="Type your message here..."/></div>
        <div className="send_message">
          <div className="icon"></div>
          <div className="text">Send</div>
        </div>
      </div>
      </div>
    </div>
  );
  }

}

export default CurrentConversation;
