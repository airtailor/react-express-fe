import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignIn from '../../components/SignIn';

class AuthRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        <Route
          path="/sign_in"
          render={props => (loggedIn ? <Redirect to="/" /> : <SignIn />)}
        />
      </div>
    );
  }
}

export default AuthRoutes;
