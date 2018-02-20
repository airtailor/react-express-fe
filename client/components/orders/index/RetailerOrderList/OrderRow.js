import React, { Component } from 'react';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';

import Checkbox from '../../../Checkbox';
import StatusCard from '../../StatusCard';
import { getOrderStatus } from '../../OrderHelpers';

class OrderRow extends Component {
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
    const { color, status } = getOrderStatus(order, roles);
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
