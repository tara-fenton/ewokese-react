import React, { Component } from "react";
import { Redirect } from "react-router-dom";



class EditNickName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      nickname: '',
      edited: false,
    }
    //bind events
    this.onNicknameChange = this.onNicknameChange.bind(this);
    this.onEditFormSubmit = this.onEditFormSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchUserById();
  }
  //functions
  fetchUserById() {
    fetch(`http://localhost:3000/api/user/1`)
    .then(response => response.json())
    .then(userData => {
      this.setState({
        userId: userData.id,
        nickname: userData.nickname
      });
    });
  }

  onNicknameChange(evt) {
    this.setState({
      nickname: evt.target.value
    });
  }

  onEditFormSubmit(evt) {
    evt.preventDefault();
    const body = {
      nickname: this.state.nickname
    };
    console.log("body in EditNickName ", body);
    fetch(`http://localhost:3000/api/user/1`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      this.setState({
        edited: true
      });
    });
  }


  render() {
    const { nickname, edited } = this.state;
    if (edited) {
      return <Redirect to="/profile" />
    }

    return (
      <div>
        <h1>Edit Nickname</h1>
        <form onSubmit={this.onEditFormSubmit}>
          <p>
            Nickname:{" "}
            <input
              type="text"
              // value={nickname}
              onChange={this.onNicknameChange}
            />
          </p>
          <p>
            <button type="submit" className="saveButton">
              Save
            </button>
          </p>
        </form>
      </div>
    )
  }
}

export default EditNickName;
