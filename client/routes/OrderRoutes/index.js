import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import StoresShow from '../../components/stores/StoresShow';
import OrdersShow from '../../components/orders/show/OrdersShow';
import OrdersEdit from '../../components/orders/OrdersEdit';
import ArchivedOrders from '../../components/orders/ArchivedOrders';
import OrdersNew from '../../components/orders/new/OrdersNew';
import SearchResults from '../../components/search/searchResults';
import OrderConfirmation from '../../components/orders/new/OrderConfirmation';

import AdminOrderRoutes from './AdminOrderRoutes';
import StoreOrdersRoutes from './StoreOrdersRoutes';

class OrderRoutes extends Component {
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
        <StoreOrdersRoutes {...props} />
        <AdminOrderRoutes {...props} />
      </div>
    );
  }
}

export default OrderRoutes;
