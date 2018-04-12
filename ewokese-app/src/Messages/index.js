import React, { Component } from "react";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messagesLoaded: false
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
        this.setState({
          messages: messagesAPIResponse,
          messagesLoaded: true
        })
      })

    }

  render() {
    return (
      <div>
        {this.state.messagesLoaded ? (
          this.state.messages.map(message => <div> {message.message} </div>)
        ) : (<p>Loading messages</p>)}
      </div>
    )}
}
export default Messages;
