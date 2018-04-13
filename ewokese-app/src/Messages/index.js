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
  // componentDidMount() {
  //   this.fetchMessages();
  // }
  // // Fetch all messages from API endpoint and put them in state.
  // fetchMessages() {
  //   fetch("http://localhost:3000/api/messages")
  //     .then(response => response.json())
  //     .then(messagesAPIResponse => {
  //       this.setState({
  //         messages: messagesAPIResponse,
  //         messagesLoaded: true
  //       })
  //     })
  //
  //   }

  render() {
    const messages = this.props.messages.map(message => {
      return (
        <div className="noselect" key={message.id} id={message.id}>
          {" "}
          {message.message}{" "}
        </div>
      );
    });
    return <div>{messages}</div>;
  }
}
export default Messages;
