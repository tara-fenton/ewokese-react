import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EditNickName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      nickname: "",
      edited: false,
      nicknamePlaceholder: ""
    };
    //bind events
    this.onNicknameChange = this.onNicknameChange.bind(this);
    this.onEditFormSubmit = this.onEditFormSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchUserById();
  }
  fetchUserById() {
    const cachedUser = localStorage.getItem("userId");
    fetch(`http://localhost:3000/api/user/${cachedUser}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({
          userId: userData.id,
          nicknamePlaceholder: userData.nick_name
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
    const cachedUser = localStorage.getItem("userId");
    fetch(`http://localhost:3000/api/user/${cachedUser}`, {
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
      return <Redirect to="/profile" />;
    }

    return (
      <div>
        <div className="chat_window">
          <div className="top_menu">
            <div className="buttons">
              <div className="button close" />
              <div className="button minimize" />
              <div className="button maximize" />
            </div>
            <div className="title">EwokeseApp</div>
          </div>
          <div className="content-two">
            <div className="ewok" />
            <h1>Edit Nickname</h1>
            <form onSubmit={this.onEditFormSubmit}>
              <p>
                Nickname:{" "}
                <input
                  type="text"
                  placeholder={this.state.nicknamePlaceholder}
                  onChange={this.onNicknameChange}
                />
              </p>
              <p>
                <button type="submit" className="send_message">
                  Save
                </button>
              </p>
            </form>
          </div>
          <div className="bottom_wrapper clearfix" />
        </div>
      </div>
    );
  }
}

export default EditNickName;
