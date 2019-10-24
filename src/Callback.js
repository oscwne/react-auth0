import React, { Component } from 'react';
import auth from './Auth';

class Callback extends Component {
  componentDidMount() {
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      auth.handleAuthentication();
    } else {
      throw new Error('Invalid Callback.');
    }
  }

  render() {
    return <h1>Loading...</h1>;
  }
}

export default Callback;
