import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithDynamicImport from '../../components/HOC/WithDynamicImport/';

const ArchivedOrders = WithDynamicImport(() =>
  import('../../components/orders/ArchivedOrders')
);
const NewOrders = WithDynamicImport(() =>
  import('../../components/admin/NewOrders')
);

class AdminOrderRoutes extends Component {
  static propTypes = {
    admin: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const { admin } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/admin/orders/new"
            render={props =>
              admin ? <NewOrders {...props} /> : <Redirect to="/" />}
          />

          <Route
            exact
            path="/admin/orders/archived"
            render={props =>
              admin ? (
                <ArchivedOrders {...props} />
              ) : (
                <Redirect to="/sign_in" />
              )}
          />
        </Switch>
      </div>
    );
  }
}

export default AdminOrderRoutes;
