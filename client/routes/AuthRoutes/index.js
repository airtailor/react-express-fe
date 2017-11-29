import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

class AuthRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const {loggedIn} = this.props;
    return (
      <div>
        <Route
          path="/sign_in"
          render={props => (loggedIn ? <Redirect to="/" /> : <SignIn />)}
        />

        <Route
          path="/sign_up"
          render={props => (loggedIn ? <Redirect to="/" /> : <SignUp />)}
        />
      </div>
    );
  }
}

export default AuthRoutes;