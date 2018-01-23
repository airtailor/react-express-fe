import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithDynamicImport from '../../components/HOC/WithDynamicImport/';

const SignIn = WithDynamicImport(() => import('../../components/auth/SignIn'));

class AuthRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        <Route
          exact
          path="/sign_in"
          render={props => (loggedIn ? <Redirect to="/" /> : <SignIn />)}
        />
      </div>
    );
  }
}

export default AuthRoutes;
