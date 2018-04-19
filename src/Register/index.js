import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserForm from '../UserForm';

class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(data) {
    this.props.submit(data);
  }

  render() {
    return (<div>
      <div className="chat_window">
        <div className="top_menu">
          <div className="buttons">
            <div className="button close"/>
            <div className="button minimize"/>
            <div className="button maximize"/>
          </div>
          <div className="title">EwokeseApp</div>
        </div>
        <div className='content'>
        <div className='ewok'></div>
        <div className='message'>Register your account!</div>
        <UserForm submit={this.onSubmit}/>
        <p>
          <Link to="/login">
            {/* <button className="send_message">Back Home</button> */}
          </Link>
        </p>
        <div className="bottom_wrapper clearfix" />
        </div>

      </div>
    </div>
  );
  }
}

export default Register;
