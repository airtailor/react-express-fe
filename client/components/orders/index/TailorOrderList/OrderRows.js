import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import OrderRow from './OrderRow';

class OrderRows extends Component {
  render() {
    const {
      openOrders,
      sortOrdersByStatus,
      loadingOrders,
      userRoles,
    } = this.props;

    if (!isEmpty(openOrders)) {
      const ordersWithShipments = sortOrdersByStatus('new_orders');
      if (!isEmpty(ordersWithShipments)) {
        return (
          <div className="order-data-container">
            {ordersWithShipments.map((order, i) => (
              <OrderRow order={order} userRoles={userRoles} key={i} />
            ))}
          </div>
        );
      } else {
        return (
          <div className="table-row">
            <div className="no-orders">No orders found!</div>
          </div>
        );
      }
    } else if (loadingOrders) {
      return (
        <div className="table-row">
          <div className="loading-orders">Loading Orders...</div>
        </div>
      );
    } else {
      return <div className="table-row" />;
    }
    return <div />;
  }
}

export default OrderRows;
