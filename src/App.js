import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </>
  );
}

export default App;
