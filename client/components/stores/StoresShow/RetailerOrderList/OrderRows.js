import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import OrderRow from './OrderRow';

class OrderRows extends Component {
  render() {
    const {
      openOrders,
      showOrderState,
      userRoles,
      loadingOrders,
      selectedOrders,
      toggleOrderSelect,
      sortOrdersByStatus,
    } = this.props;

    if (!isEmpty(openOrders)) {
      const sortedOrders = sortOrdersByStatus(showOrderState);
      if (!isEmpty(sortedOrders)) {
        return (
          <div className="order-data-container">
            {sortedOrders.map(order => (
              <OrderRow
                key={order.id}
                order={order}
                userRoles={userRoles}
                selectedOrders={selectedOrders}
                toggleOrderSelect={toggleOrderSelect}
                showOrderState={showOrderState}
              />
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
    }
    return <div />;
  }
}

export default OrderRows;
