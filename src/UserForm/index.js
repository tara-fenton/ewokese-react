import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      username: '',
      password: '',
      nickname: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // preventDefault and lift state back up to the parent
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  // update form state
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className='form'>
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username} />
        </label>
        <label>Password:
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password} />
        </label>
        <label>Nickname:
          <input
            type="nickname"
            name="nickname"
            onChange={this.handleChange}
            value={this.state.nickname} />
        </label>
        <button type="submit" value="Submit" className='send_message'>Submit</button>
      </form>
    </div>
    );
  }
}
