import React, { Component } from "react";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messagesLoaded: false
    };
  }

  render() {
    // set the counter for the alternating styles
    let counter = 0;
    // map through the messages
    const messages = this.props.messages.map(message => {
      // increase the counter for the alternating styles
      counter++;
      return (
        <div className="noselect" key={message.id} id={message.id}>
          {/* alternating styles */}
          <li
            className={
              counter % 2 === 0
                ? "message right appeared"
                : "message left appeared"
            }
          >
            <div className="avatar" />
            <div className="text_wrapper">
              <div className="text"> {message.message} </div>
            </div>
          </li>
        </div>
      );
    });
    return (
      <div>
        <ul className="messages">{messages}</ul>
      </div>
    );
  }
}
export default Messages;
