import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import ArchivedOrders from '../../components/orders/ArchivedOrders';
import NewOrders from '../../components/admin/NewOrders';

class AdminOrderRoutes extends Component {
  static propTypes = {
    admin: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const {admin} = this.props;
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
