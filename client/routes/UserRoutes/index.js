import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import UsersNew from '../../components/users/UsersNew';
import UsersEdit from '../../components/users/UsersEdit';
import UsersList from '../../components/users/list/';

class UserRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
    admin: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const { loggedIn, admin } = this.props;
    return (
      <div>
        <Route
          path="/users/new"
          render={props =>
            loggedIn && admin ? (
              <UsersNew {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />
        <Route
          path="/users/:user_id/edit"
          render={props =>
            loggedIn && admin ? (
              <UsersEdit {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />
        <Route
          path="/users/list"
          render={props =>
            loggedIn && admin ? (
              <UsersList {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />
      </div>
    );
  }
}

export default UserRoutes;
