import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import EditNickName from "../EditNickName/index";

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
    fetch("http://localhost:3000/api/user/1")
    // we need to put ${id} where 1 is so when user signs in it will take them to their user profile
      .then(response => response.json()).then(usersAPIResponse => {
      console.log(22, usersAPIResponse)

      this.setState({userData: usersAPIResponse, userLoaded: true})
    })

  }

  render() {
    return (<div>
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
            <div className="text_wrapper" >
              <div className="text">
                PROFILE PAGE
                <div>
                  {
                    this.state.userLoaded
                      ? (<div>
                        <div>
                          Username: {this.state.userData.user_name}
                        </div>

                        <div>
                          Nickname: {this.state.userData.nick_name}
                        </div>
                        <Link to={`/profile/1/edit`}>Edit</Link>
                      </div>)
                      : (<p>
                        Loading messages
                      </p>)
                  }
                </div>
              </div>
            </div>
          </li>

        </ul>

        <div className="bottom_wrapper clearfix"></div>
      </div>
    </div>
)
  }
}
export default Profile;
