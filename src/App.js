import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Navigation from './components/navigation';
import auth from './Auth';
import Callback from './Callback';

class App extends Component {
  constructor(props) {
    super(props);
    auth.history = this.props.history;
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/callback" exact component={Callback} />
          {auth.isAuthenticated() && (
            <Route path="/profile" component={Profile} />
          )}
        </div>
      </>
    );
  }
}

export default App;
