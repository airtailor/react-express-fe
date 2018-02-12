import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';
import moment from 'moment';

class OrderRow extends Component {
  render() {
    const {
      userRoles: roles,
      order,
      order: { id, alterations_count, customer: { first_name, last_name } },
    } = this.props;

    const { color, status } = getOrderStatus(order, roles);

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
