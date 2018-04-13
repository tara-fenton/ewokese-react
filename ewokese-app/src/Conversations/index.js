
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

    return (
      <div>
      <div className="chat_window">
        <div className="top_menu">
          <div className="buttons">
            <div className="button close"></div>
            <div className="button minimize"></div>
            <div className="button maximize"></div>
          </div>
          <div className="title">EwokeseApp</div>

        </div>
        <ul className="messages">
          <li className="message left appeared">
            <div className="avatar"></div>
              <div className="text_wrapper">
                <div className="text">
                  OMG, hi I like your hair!
                </div>
              </div>
          </li>

          <li className="message right appeared">
            <div className="avatar"></div>
              <div className="text_wrapper">
                <div className="text">
                  Omg Thanks, its Nandita!
                </div>
              </div>
          </li>

          <li className="message left appeared">
            <div className="avatar"></div>
              <div className="text_wrapper">
                <div className="text">
                  goodbye
                </div>
              </div>
          </li>



        </ul>


        <div className="bottom_wrapper clearfix">
          <div className="message_input_wrapper"><input className="message_input" placeholder="Type your message here..." /></div>
          <div className="send_message">


            <div className="icon"></div>
            <div className="text">Send</div>
          </div>
        </div>
      </div>
      <div className="message_template">
        <li className="message">
          hey

          <div className="avatar"></div>
          <div className="text_wrapper">
            <div className="text"></div>
            hey
          </div>
        </li>
      </div>
</div>
)

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
    return (
      <div>

        {conversations}

      </div>
    );

  }
}
export default Conversations;
