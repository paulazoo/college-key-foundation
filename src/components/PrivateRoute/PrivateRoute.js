import React from 'react';
import * as JWT from 'jwt-decode';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let userLoggedIn = localStorage.getItem('user_token');

  // should be put into middleware
  if (userLoggedIn && JWT(userLoggedIn).exp < Date.now() / 1000) {
    userLoggedIn = false;
    localStorage.clear();
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !userLoggedIn || userLoggedIn === 'undefined' ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
