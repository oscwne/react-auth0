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
          {auth.isAuthenticated() ? (
            <li>
              <Link to="/profile">Profile</Link>{' '}
            </li>
          ) : null}
          <li>
            <Link to="/public">Public</Link>{' '}
          </li>
          {auth.isAuthenticated() ? (
            <li>
              <Link to="/private">Private</Link>
            </li>
          ) : null}
          {auth.isAuthenticated() && auth.userHasScopes(['read:courses']) ? (
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          ) : null}
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
