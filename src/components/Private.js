import React, { Component } from 'react';

class Private extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    fetch('/private', {
      headers: {
        Authorization: `Bearer ${this.props.auth.getAccessToken()}`
      }
    })
      .then(response => {
        if (response) return response.json();
        throw new Error('Error fetching /private');
      })
      .then(response => this.setState({ message: response.message }))
      .catch(error => console.log(error.message));
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Private;
