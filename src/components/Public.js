import React, { Component } from 'react';

class Public extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    fetch('/public')
      .then(response => {
        if (response) return response.json();
        throw new Error('error fetching /public');
      })
      .then(response => this.setState({ message: response.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Public;
