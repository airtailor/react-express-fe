import React, { Component } from 'react';
import moment from 'moment';
import OrderShowTitle from './OrderShowTitle';
import { getOrderStatus } from '../OrderHelpers';
import StatusCard from '../StatusCard';
import DeliveryDetails from './DeliveryDetails';

class RenderOrderDetails extends Component {
  formatOrderDate(order) {
    const momentDate = moment(order.created_at);
    const dateTextFormat = 'MMMM Do, Y';
    return momentDate.format(dateTextFormat);
  }

  formatOrderTime(order) {
    const momentDate = moment(order.created_at);
    const dateTextFormat = 'h:mma';
    return momentDate.format(dateTextFormat);
  }

  render() {
    const { status, color } = getOrderStatus(
      this.props.currentOrder,
      this.props.userRoles
    );
    return (
      <div>
        <OrderShowTitle title="ORDER PLACED" />

        <p className="order-show-p-content">
          {this.formatOrderDate(this.props.currentOrder)}
        </p>

        <p style={{ marginBottom: '25px' }} className="order-show-p-content">
          {this.formatOrderTime(this.props.currentOrder)}
        </p>

        <OrderShowTitle title="STATUS" />
        <StatusCard
          text={status}
          color={color}
          className="order-show-status-card"
        />

        <DeliveryDetails order={this.props.currentOrder} />
      </div>
    );
  }
}

export default RenderOrderDetails;
