import React, { Component } from "react";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      null: null
    };
    // bind event handlers here
  }
  // Request messages data if not already loaded
  componentDidMount() {
    this.fetchMessages();
  }
  // Fetch all messages from API endpoint and put them in state.
  fetchMessages() {
    fetch("http://localhost:3000/api/messages")
      .then(response => response.json())
      .then(messagesAPIResponse => {
        let messagesById = {};
        messagesAPIResponse.forEach(message => {
          messagesById[message.id] = message;
        });
        this.setState((previousState, props) => {
          messagesById = Object.assign(
            previousState.messagesById,
            messagesById
          );
          return {
            messagesById: messagesById
          };
        });
      });
  }
  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}

export default Messages;
