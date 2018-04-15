import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditNickName from "../EditNickName/index";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userLoaded: false
    };
  }
  // Request messages data if not already loaded
  componentDidMount() {
    this.fetchUser();
  }
  // Fetch all messages from API endpoint and put them in state.
  fetchUser() {

    console.log(this.props.userId);
    fetch(`http://localhost:3000/api/user/1`)
      // we need to put ${id} where 1 is so when user signs in it will take them to their user profile
      .then(response => response.json())
      .then(usersAPIResponse => {
        console.log(22, usersAPIResponse);


        this.setState({ userData: usersAPIResponse, userLoaded: true });
      });
  }

  render() {
    // Check if there is a token in local storage
    const isLoggedIn = window.localStorage.authToken;
    //need to know if log in is true then display profile
    return isLoggedIn ? (
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
          <ul className="messages">
            <li className="message left appeared">
              <div className="avatar" />
              <div className="text_wrapper">
                <div className="text">
                  PROFILE PAGE
                  <div>
                    {this.state.userLoaded ? (
                      <div>
                        <div>Username: {this.state.userData.user_name}</div>

                        <div>Nickname: {this.state.userData.nick_name}</div>
                        {/* <Router>
                            <div> */}
                        <Link to={`/profile/1/edit`}>Edit</Link>
                        {/* <Route
                                exact
                                path="/profile/1/edit"
                                component={EditNickName}
                              />
                            </div>
                          </Router> */}
                      </div>
                    ) : (
                      <p>Loading messages</p>
                    )}
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div className="bottom_wrapper clearfix" />
        </div>
      </div>
    ) : (
      // redirect to login if no token exisits
      <Redirect to={"/login"} />
    );
  }
}
export default Profile;
