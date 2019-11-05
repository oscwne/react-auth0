import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../Auth/AuthContext';

const PublicRoute = ({ component: Component, path, ...rest }) => {
  return (
    <AuthContext.Consumer>
      {auth => (
        <Route
          {...rest}
          path={path}
          render={props => <Component auth={auth} {...props}></Component>}
        ></Route>
      )}
    </AuthContext.Consumer>
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PublicRoute;
