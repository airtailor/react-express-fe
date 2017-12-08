import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import StoresEdit from '../../components/stores/edit/';
import StoresNew from '../../components/stores/StoresNew';
import Home from '../../components/Home.js';

class StoreRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
    admin: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const { loggedIn, admin } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/stores/:store_id/edit"
            render={props =>
              loggedIn ? <StoresEdit {...props} /> : <Redirect to="/sign_in" />}
          />
          <Route
            path="/stores/new"
            render={props =>
              admin ? <StoresNew {...props} /> : <Redirect to="/sign_in" />}
          />

          <Route
            exact
            path="/stores/:id"
            render={props => (loggedIn ? <Home /> : <Redirect to="/sign_in" />)}
          />
        </Switch>
      </div>
    );
  }
}

export default StoreRoutes;
