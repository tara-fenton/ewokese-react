import React, {Component} from "react";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messagesLoaded: false
    };

  }

  render() {
    const messages = this.props.messages.map(message => {
      return (<div>

          <div className="noselect" key={message.id} id={message.id}>

            <li className='message left appeared'>
              <div className="avatar"></div>
              <div className="text_wrapper">
                <div className="text">
                  {" "}
                  {message.message}{" "}
                </div>
              </div>
            </li>

          </div>

      </div>)

    })
    return <div>
      <ul className='messages'>{messages}</ul>
    </div>;
  }
}
export default Messages;
