import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import OrderRow from './OrderRow';

class OrderRows extends Component {
  sortOrdersByStatus() {
    const {
      openOrders: orders,
      userRoles: roles,
      showOrderState: status,
    } = this.props;

    switch (status) {
      case 'new_orders':
        if (roles.tailor) {
          return orders.filter(
            order => !isEmpty(order.shipments) && order.tailor
          );
        } else {
          return orders.filter(order => {
            const { shipments } = order;

            const noShipments = isEmpty(shipments);
            const lastShipment = shipments[shipments.length - 1];
            const notFulfilled = !order.fulfilled;

            const messengerNotDeliveredYet =
              shipments.length > 0 &&
              lastShipment.delivery_type === 'messenger_shipment' &&
              lastShipment.status != 'delivered';

            return notFulfilled && (noShipments || messengerNotDeliveredYet);
          });
        }
      case 'in_progress_orders':
        if (roles.tailor) {
          return orders.filter(order => order.arrived && !order.fulfilled);
        } else {
          return orders.filter(order => {
            if (isEmpty(order.shipments)) {
              return false;
            }

            const { tailor, fulfilled, shipments } = order;
            const { status, delivery_type } = shipments[shipments.length - 1];

            const mailShipmentExists = delivery_type === 'mail_shipment';
            const messengerShipmentDelivered = status === 'delivered';

            return (
              (mailShipmentExists || messengerShipmentDelivered) &&
              tailor &&
              !fulfilled
            );
          });
        }
      case 'ready_orders':
        return orders.filter(order => order.fulfilled);
      default:
        return orders;
    }
  }

  render() {
    const {
      openOrders,
      showOrderState,
      userRoles,
      loadingOrders,
      selectedOrders,
    } = this.props;

    if (!isEmpty(openOrders)) {
      const sortedOrders = this.sortOrdersByStatus(showOrderState);
      if (!isEmpty(sortedOrders)) {
        return (
          <div className="order-data-container">
            {sortedOrders.map(order => (
              <OrderRow
                key={order.id}
                order={order}
                userRoles={userRoles}
                selectedOrders={selectedOrders}
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
  }
}

export default OrderRows;
