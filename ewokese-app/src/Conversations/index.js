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

  sendConversationId(id) {
    console.log(id);
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
        let conversations = conversationsAPIResponse.map(conversation => {
          return (
            <div
              className="noselect"
              key={conversation.id}
              id={conversation.id}
              onClick={() => this.sendConversationId(conversation.id)}
            >
              {" "}
              {conversation.name}{" "}
            </div>
          );
        });
        this.setState({
          conversations: conversations,
          conversationsLoaded: true
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.conversationsLoaded ? (
          <div>{this.state.conversations}</div>
        ) : (
          // this.state.conversations.map(conversation => <div key={conversation.id} onClick={ () => this.sendConversationId(conversation.id)}> {conversation.name} </div>)
          <p>Loading conversations</p>
        )}
      </div>
    );
  }
}
export default Conversations;
