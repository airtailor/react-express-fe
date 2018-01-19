import React, { Component } from 'react';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';

import Checkbox from '../../../Checkbox';
import StatusCard from '../StatusCard';

class OrderRow extends Component {
  formatStatusString(dueDate, late) {
    const todaysDate = moment(new Date());
    const momentDueDate = moment(dueDate);
    const diff = Math.abs(momentDueDate.diff(todaysDate, 'days'));
    const additionalString = late ? ' days late' : ' days to go';
    const status = (diff + additionalString).toUpperCase();
    return status;
  }

  getOrderStatus(order) {
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
  }

  render() {
    const {
      userRoles: roles,
      order,
      showOrderState,
      selectedOrders,
      toggleOrderSelect,
    } = this.props;

    const {
      id,
      customer,
      alterations_count,
      created_at,
      arrival_date,
      fulfilled_date,
    } = order;

    const { first_name, last_name } = customer;
    const { color, status } = this.getOrderStatus(order);
    const route = `/orders/${id}`;
    const orderIsToggled = selectedOrders.has(order);
    const orderToggle = () => toggleOrderSelect(order);

    let displayDate;
    if (showOrderState === 'new_orders') {
      displayDate = created_at;
    } else if (showOrderState === 'in_progress_orders') {
      displayDate = arrival_date;
    } else if (showOrderState === 'ready_orders') {
      displayDate = fulfilled_date;
    }

    const momentDate = moment(displayDate);
    const isToday = momentDate.isSame(new Date(), 'day');
    const yesterday = moment(new Date()).add(-1, 'days');
    const wasYest = momentDate.isSame(yesterday, 'day');
    const dateTextFormat = isToday
      ? '[Today,] h:mma'
      : wasYest ? '[Yesterday,] h:mma' : 'MMM Do, h:mma';

    let dateText = momentDate.format(dateTextFormat);
    if (dateText === 'Invalid date' && !arrival_date) {
      dateText = 'Pending';
    }

    const orderSelect = (
      <Checkbox
        checked={orderIsToggled}
        type="checkbox"
        name={id}
        onChange={orderToggle}
      />
    );

    return (
      <div className="order-row" key={id}>
        <div className="order-select-cell">{orderSelect}</div>
        <Link to={route} className="order-row-link">
          <div className="order-data-cell">#{id}</div>
          <div className="order-data-cell">{dateText}</div>
          <div className="order-data-cell">
            {first_name} {last_name}
          </div>
          <StatusCard color={color} text={status} />
        </Link>
        <div className="order-data-break-row" />
      </div>
    );
  }
}

export default OrderRow;
