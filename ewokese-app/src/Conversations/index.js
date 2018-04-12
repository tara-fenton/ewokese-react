import React, { Component } from "react";

class Conversations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      conversationsLoaded: false
    };
    // bind event handlers here
  }
  // Request conversations data if not already loaded
  componentDidMount() {
    this.fetchConversations();
  }
  // Fetch all conversations from API endpoint and put them in state.
  fetchConversations() {
    fetch("http://localhost:3000/api/conversations")
      .then(response => response.json())
      .then(conversationsAPIResponse => {
        this.setState({
          conversations: conversationsAPIResponse,
          conversationsLoaded: true
        })
      })

    }

  render() {
    return (
      <div>
        {this.state.conversationsLoaded ? (
          this.state.conversations.map(message => <div> {message.message} </div>)
        ) : (<p>Loading conversations</p>)}
      </div>
    )}
}
export default Conversations;
