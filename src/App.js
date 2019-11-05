import React, { Component } from 'react';
import Home from './components/home';
import Profile from './components/profile';
import Navigation from './components/navigation';
import auth from './Auth';
import Callback from './Callback';
import Public from './components/Public';
import Private from './components/Private';
import Courses from './components/Courses';
import SecureRoute from './Security/SecureRoute';
import AuthContext from './Auth/AuthContext';
import PublicRoute from './Security/PublicRoute';

class App extends Component {
  constructor(props) {
    super(props);
    auth.history = this.props.history;
    this.state = {
      tokenRenewed: false
    };
  }

  componentDidMount() {
    auth.renewToken(() => this.setState({ tokenRenewed: true }));
  }
  render() {
    return !this.state.tokenRenewed ? (
      <h1>Loading...</h1>
    ) : (
      <AuthContext.Provider value={auth}>
        <Navigation />
        <div className="body">
          <PublicRoute path="/" exact component={Home} />
          <PublicRoute path="/callback" exact component={Callback} />
          <PublicRoute path="/public" component={Public} />
          <SecureRoute path="/profile" component={Profile} />
          <SecureRoute path="/private" component={Private} />
          <SecureRoute
            path="/courses"
            scopes={['read:courses']}
            component={Courses}
          />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
