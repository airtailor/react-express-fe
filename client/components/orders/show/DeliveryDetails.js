import React, { Component } from 'react';
import OrderShowTitle from './OrderShowTitle';

class DeliveryDetails extends Component {
  render() {
    const deliveryText = this.props.order.ship_to_store
      ? 'DELIVERY TO STORE'
      : 'DELIVERY TO CUSTOMER';

    const deliveryAddress = this.props.order.ship_to_store
      ? this.props.order.retailer
      : this.props.order.customer;

    console.log('deliveryAddress', deliveryAddress);

    return (
      <div>
        <OrderShowTitle title={deliveryText} />
        <div style={{ paddingLeft: '15px', fontSize: '14px' }}>
          <p>{deliveryAddress.name}</p>
          <p>{deliveryAddress.street1}</p>
          <p>{deliveryAddress.street2}</p>
          <p>
            {deliveryAddress.city}, {deliveryAddress.state}{' '}
            {deliveryAddress.zip}
          </p>
        </div>
      </div>
    );
  }
}

export default DeliveryDetails;
