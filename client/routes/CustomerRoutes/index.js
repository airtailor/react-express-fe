import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import StoresShow from '../../components/stores/StoresShow';
import OrdersShow from '../components/orders/show/OrdersShow';
import OrdersEdit from '../components/orders/OrdersEdit';
import ArchivedOrders from '../components/orders/ArchivedOrders';
import StoreOrdersRoutes from './StoreOrdersRoutes';
import OrdersNew from '../components/orders/new/OrdersNew';

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
          path="/customers/:customer_id/edit"
          render={props =>
            admin || tailor ? (
              <CustomerEdit {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />
      </div>
    );
  }
}

export default OrderRoutes;
