import React, {Component} from "react";

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
  //  Fetch all messages from API endpoint and put them in state.
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
