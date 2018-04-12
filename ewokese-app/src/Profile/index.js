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
    fetch("http://localhost:3000/api/users")
      .then(response => response.json())
      .then(usersAPIResponse => {

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
          this.state.userData.map(user => <div> {user.user_name} </div>)
        ) : (<p>Loading Users</p>)}
      </div>
    )}
}
export default Profile;
