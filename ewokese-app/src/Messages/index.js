import React, { Component } from "react";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messagesLoaded: false,
      userId: 1
    };
    // bind event handlers here
  }


  render() {
    let counter = 0;
      const messages = this.props.messages.map(message => {
      // const className = `${this.state.userId} ? 'message left appeared' : 'message right appeared'}`
      const className = `${counter} ? 'message left appeared' : 'message right appeared'}`

        return (
            <div className="noselect" key={message.id} id={message.id}>
              <li className={className}>
                <div className="avatar"></div>
                <div className="text_wrapper">
                  <div className="text">
                    {" "}
                    {message.message}{" "}
                  </div>
                </div>
              </li>
            </div>
          )
          counter ? counter = 1 : counter = 0
        })
        return <div>{messages}</div>;
    }
}
export default Messages;
