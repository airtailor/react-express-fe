import React, { Component } from 'react';
import OrderShowTitle from './OrderShowTitle';

class DeliveryDetails extends Component {
  render() {
    const { ship_to_store, retailer, customer } = this.props.order;

    const address = ship_to_store ? retailer : customer;
    const deliveryText = ship_to_store
      ? 'DELIVERY TO STORE'
      : 'DELIVERY TO CUSTOMER';

    return (
      <div>
        <OrderShowTitle title={deliveryText} />
        <div style={{ paddingLeft: '15px', fontSize: '14px' }}>
          <p>{address.name || `${address.first_name} ${address.last_name}`}</p>
          <p>{address.street1}</p>
          <p>{address.street2}</p>
          <p>
            {address.city}, {address.state} {address.zip}
          </p>
        </div>
      </div>
    );
  }
}

export default DeliveryDetails;
