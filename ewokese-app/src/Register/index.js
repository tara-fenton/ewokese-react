import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    return (

      <div>
        Register your account!
        <UserForm submit={this.onSubmit} />
        <p>
          <Link to="/">
            <button>Back Home</button>
          </Link>
        </p>
      </div>
    );
  }
}

export default Register;
