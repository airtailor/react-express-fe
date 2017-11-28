import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import StoresShow from '../../components/stores/StoresShow';
import ArchivedOrders from '../../components/orders/ArchivedOrders';

class StoreOrder extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
    admin: PropTypes.bool.isRequired, // parentComponent
    retailer: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const {loggedIn, admin, retailer} = this.props;
    return (
      <div>
        <Route
          exact
          path="/stores/:store_id/orders"
          render={props =>
            loggedIn ? <StoresShow {...props} /> : <Redirect to="/sign_in" />}
        />

        <Route
          exact
          path="/stores/:store_id/orders/archived"
          render={props =>
            loggedIn ? (
              <ArchivedOrders {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />
      </div>
    );
  }
}

export default StoreOrder;
