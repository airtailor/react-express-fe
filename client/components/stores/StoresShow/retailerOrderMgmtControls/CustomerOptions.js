import React, { Component } from 'react';

import Button from '../../../Button';

class CustomerOptions extends Component {
  customerNotifiedSet = () => {
    const { selectedOrders } = this.props;
    return new Set(selectedOrders.map(order => order.customer_alerted));
  };

  customerNotifiedDisabled = () => {
    const set = this.customerNotifiedSet();
    return set.size < 1 || set.has(true);
  };

  customerPickupDisabled = () => {
    const set = this.customerNotifiedSet();
    return set.size < 1 || set.has(false);
  };

  render() {
    return (
      <div
        className="flex-container"
        style={{ justifyContent: 'space-around' }}
      >
        <Button
          className="send-order-button"
          onClick={this.props.alertCustomers}
          disabled={this.customerNotifiedDisabled()}
          text="NOTIFY CUSTOMER"
        />

        <Button
          className="send-order-button"
          onClick={this.props.markCustomerReceived}
          disabled={this.customerPickupDisabled()}
          text="CUSTOMER RECEIVED"
        />
      </div>
    );
  }
}

export default CustomerOptions;
