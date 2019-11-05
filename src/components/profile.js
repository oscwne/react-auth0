import React, { Component } from 'react';

class Profile extends Component {
  state = {
    profile: null,
    error: ''
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile = () => {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ error, profile })
    );
  };

  render() {
    const { profile } = this.state;

    return (
      profile && (
        <>
          <p>{profile.nickname}</p>
          <img width="50" height="50" alt="profile pic" src={profile.picture} />
          <pre>{JSON.stringify(profile, null, 4)}</pre>
        </>
      )
    );
  }
}

export default Profile;
