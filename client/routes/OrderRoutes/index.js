import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithDynamicImport from '../../components/HOC/WithDynamicImport/';

const StoresShow = WithDynamicImport(() =>
  import('../../components/stores/StoresShow/')
);
const OrdersShow = WithDynamicImport(() =>
  import('../../components/orders/show/OrdersShow')
);
const OrdersEdit = WithDynamicImport(() =>
  import('../../components/orders/OrdersEdit')
);
const ArchivedOrders = WithDynamicImport(() =>
  import('../../components/orders/ArchivedOrders')
);
const OrdersNew = WithDynamicImport(() =>
  import('../../components/orders/new/OrdersNew')
);
const SearchResults = WithDynamicImport(() =>
  import('../../components/search/searchResults')
);
const OrderConfirmation = WithDynamicImport(() =>
  import('../../components/orders/new/OrderConfirmation')
);

import AdminOrderRoutes from './AdminOrderRoutes';
import StoreOrdersRoutes from './StoreOrdersRoutes';

class OrderRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
    admin: PropTypes.bool.isRequired, // parentComponent
    retailer: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const { loggedIn, admin, retailer } = this.props;
    return (
      <div>
        <Route
          exact
          path="/orders"
          render={props =>
            loggedIn ? <StoresShow {...props} /> : <Redirect to="/sign_in" />}
        />

        <Switch>
          <Route
            exact
            path="/orders/new"
            render={props =>
              admin || retailer ? (
                <OrdersNew {...props} />
              ) : (
                <Redirect to="/sign_in" />
              )}
          />

          <Route
            exact
            path="/orders/:order_id"
            render={props =>
              loggedIn ? <OrdersShow {...props} /> : <Redirect to="/sign_in" />}
          />
        </Switch>
        <Route
          exact
          path="/orders/:order_id/edit"
          render={props =>
            loggedIn ? <OrdersEdit {...props} /> : <Redirect to="/sign_in" />}
        />

        <Route
          exact
          path="/orders/new/order-confirmation"
          render={props =>
            admin || retailer ? (
              <OrderConfirmation {...props} />
            ) : (
              <Redirect to="/" />
            )}
        />

        <Route
          exact
          path="/search-results"
          render={props =>
            loggedIn ? <SearchResults {...props} /> : <Redirect to="/" />}
        />
        <StoreOrdersRoutes {...this.props} />
        <AdminOrderRoutes {...this.props} />
      </div>
    );
  }
}

export default OrderRoutes;
