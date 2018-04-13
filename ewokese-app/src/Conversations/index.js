import React, { Component } from "react";

class Conversations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversationSelected: null
    };
    // bind event handlers here
  }

  sendConversationId(id) {
    this.setState({
      conversationSelected: id
    });
    console.log(this.state.conversationSelected);
  }
  // Request conversations data if not already loaded

  render() {
    const conversations = this.props.conversations.map(conversation => {
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
    return <div>{conversations}</div>;
  }
}
export default Conversations;
