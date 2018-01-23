import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithDynamicImport from '../../components/HOC/WithDynamicImport/';

const UsersNew = WithDynamicImport(() =>
  import('../../components/users/UsersNew')
);
const UsersEdit = WithDynamicImport(() =>
  import('../../components/users/edit')
);
const UsersList = WithDynamicImport(() =>
  import('../../components/users/list/')
);

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
          exact
          path="/users/new"
          render={props =>
            loggedIn && admin ? (
              <UsersNew {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />
        <Route
          exact
          path="/users/:user_id/edit"
          render={props =>
            loggedIn && admin ? (
              <UsersEdit {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />
        <Route
          exact
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
