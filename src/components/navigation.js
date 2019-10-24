import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../Auth';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>{' '}
          </li>
          <li>
            <button onClick={auth.isAuthenticated() ? auth.logout : auth.login}>
              {auth.isAuthenticated() ? 'Log Out' : 'Log In'}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
