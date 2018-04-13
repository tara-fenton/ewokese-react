import React, { Component } from "react";

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

      .then(response => response.json())
      .then(usersAPIResponse => {
        console.log(22, usersAPIResponse)

        this.setState({
          userData: usersAPIResponse,
          userLoaded: true,
        })
      })

    }

  render() {
    return (
      <div>
        {this.state.userLoaded ? (
          <div>
          <div>
            {this.state.userData.user_name}
          </div>

          <div>
          {this.state.userData.nick_name}
        </div>
      </div>
        ) : (
            <p>
              Loading messages
            </p>
          )}
      </div>
    )}
}
export default Profile;
