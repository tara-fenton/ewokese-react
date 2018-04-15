
import React, {Component} from "react";
import {BroswerRouter as Router, Route, Link, Redirect} from "react-router-dom";


class Conversations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversationSelected: null
    };
    // bind event handlers here
  }

  sendConversationId(id) {
    this.props.sendId(id)
    // this.setState({
    //   conversationSelected: id
    // })
    // console.log(this.state.conversationSelected);
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
          <div className='convoNames'>

          {" "}{conversation.name}{" "}
        </div>


      </div>
      );
    });
    return (
      <div>
        {conversations}
      </div>
    );

  }
}
export default Conversations;
