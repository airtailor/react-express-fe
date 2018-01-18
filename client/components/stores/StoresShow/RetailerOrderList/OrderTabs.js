import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

class OrderTabs extends Component {
  countOrdersByStatus = status => {
    return this.sortOrdersByStatus(status).length;
  };

  sortOrdersByStatus = status => {
    const { openOrders: orders, userRoles: roles } = this.props;

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
  };

  render() {
    const allTabs = [
      {
        className: 'order-state-tab',
        status: 'new_orders',
        text: 'New Orders',
      },
      {
        className: 'order-state-tab',
        status: 'in_progress_orders',
        text: 'In Process',
      },
      {
        className: 'order-state-tab',
        status: 'ready_orders',
        text: 'In-Store Pickup',
      },
    ];

    const tabs = allTabs.map((tab, i) => {
      console.log(this.props);
      if (tab.status === this.props.showOrderState) {
        tab.className = tab.className.concat(' selected');
      }

      return (
        <div
          key={i}
          className={tab.className}
          onClick={() => this.setOrderTabState(tab.status)}
        >
          <h3>
            {tab.text} ({this.countOrdersByStatus(tab.status)})
          </h3>
        </div>
      );
    });

    return <div className="order-state-row">{tabs}</div>;
  }
}

export default OrderTabs;
