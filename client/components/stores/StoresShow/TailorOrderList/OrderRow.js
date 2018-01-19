import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';
import moment from 'moment';

class OrderRow extends Component {
  formatStatusString = (dueDate, late) => {
    const todaysDate = moment(new Date());
    const momentDueDate = moment(dueDate);
    const diff = Math.abs(momentDueDate.diff(todaysDate, 'days'));
    const additionalString = late ? ' days late' : ' days to go';
    const status = (diff + additionalString).toUpperCase();
    return status;
  };

  getOrderStatus = order => {
    const {
      shipments,
      arrived,
      late,
      due_date,
      fulfilled,
      customer_alerted,
      ship_to_store,
    } = order;

    const { retailer, admin, tailor } = this.props.userRoles;

    let status, color;

    if (isEmpty(order.shipments)) {
      status = 'Needs Transit';
      color = 'red';
    } else if (!isEmpty(order.shipments) && !order.arrived) {
      const lastShipment = order.shipments[order.shipments.length - 1];
      const { delivery_type } = lastShipment;

      if (delivery_type === 'mail_shipment') {
        status = 'In Transit';
        color = 'gold';
      } else if (delivery_type === 'messenger_shipment') {
        const shipmentStatus = lastShipment.status;

        if (shipmentStatus === 'pending') {
          status = 'Contacting';
          color = 'red';
        } else if (shipmentStatus === 'pickup') {
          status = 'Picking Up';
          color = 'goldenrod';
        } else if (
          shipmentStatus === 'pickup_complete' ||
          shipmentStatus === 'dropoff'
        ) {
          status = 'Dropping Off';
          color = 'gold';
        } else if (shipmentStatus === 'delivered') {
          status = 'Delivered';
          color = 'green';
        }
      }
    } else if (order.late && !order.fulfilled) {
      if (admin || tailor) {
        const dueTime = this.formatStatusString(order.due_date, true);
        status = dueTime;
      } else if (retailer) {
        status = 'Delayed';
      }
      color = 'red';
    } else if (
      order.fulfilled &&
      !order.customer_alerted &&
      order.ship_to_store
    ) {
      status = 'In Transit';
      color = 'gold';
    } else if (
      order.fulfilled &&
      order.customer_alerted &&
      order.ship_to_store
    ) {
      status = 'Notified';
      color = 'red';
    } else if (order.arrived && !order.fulfilled) {
      status = this.formatStatusString(order.due_date, false);
      const statusNum = status.split('')[0];

      if (statusNum > 3) {
        color = 'green';
      } else if (statusNum > 0) {
        color = 'gold';
      } else if (statusNum < 1) {
        color = 'red';
      }
    }
    return { status, color };
  };

  render() {
    const {
      order,
      order: { id, alterations_count, customer: { first_name, last_name } },
    } = this.props;

    const { color, status } = this.getOrderStatus(order);

    const route = `/orders/${id}`;
    return (
      <div className="order-row" key={id}>
        <Link to={route} className="order-row-link-no-select">
          <div className="order-cell-no-select">#{id}</div>
          <div style={{ color }} className="order-cell-no-select">
            {status}
          </div>
          <div className="order-cell-no-select">
            {first_name} {last_name}
          </div>
          <div className="order-cell-no-select">{alterations_count}</div>
        </Link>
        <div className="order-data-break-row" />
      </div>
    );
  }
}

export default OrderRow;
