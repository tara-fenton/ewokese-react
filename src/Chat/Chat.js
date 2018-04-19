import React, { Component } from "react";
import CurrentConversation from './CurrentConversation';
import Messages from './Messages';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentConversationName: '',
      currentConversationInfo: {},
      conversationDataLoaded: false
    }
  }

  handleConversationClick(conversationName) {
    this.setState({
      currentConversationName: conversationName
    })
    fetch('/api/conversations')
    .then(response => response.json())
    .then(conversationInfoJson => {
      this.setState({
        currentConversationInfo: conversationInfoJson,
        conversationDataLoaded: true
      });
    });
  }

  componentDidMount() {
    fetch('/api/conversations')
    .then()
  }
}

export default Chat;
