import React, { Component } from 'react';
import OrderShowTitle from './OrderShowTitle';

class DeliveryDetails extends Component {
  renderOldAddress(address){
    return (
      <div className="order-show-p-content">
        <p>{address.name || `${address.first_name} ${address.last_name}`}</p>
        <p>{address.street1}</p>
        <p>{address.street2}</p>
        <p>
          {address.city}, {address.state} {address.zip}
        </p>
      </div>
    );
  }

  renderNewAddress(address){
    return (
      <div className="order-show-p-content">
        <p>{address.name}</p>
        <p>{address.street}</p>
        <p>{address.street_two}</p>
        <p>
          {address.city}, {address.state_province} {address.zip_code}
        </p>
      </div>
    );
  }


  determineAddress(){
    const { ship_to_store, retailer, customer } = this.props.order;
    if (ship_to_store) {
      return retailer.address || retailer;
    } else {
      if (customer.addresses){
        return customer.addresses[0] || customer;
      } else {
        return customer;
      }
    }
  }

  determineAddressName(){
    const { ship_to_store, retailer, customer } = this.props.order;
    if (ship_to_store){
      return retailer.name;
    } else {
      return `${customer.first_name} ${customer.last_name}`;
    }
  }

  render() {
    const { ship_to_store, retailer, customer } = this.props.order;

    const address = this.determineAddress();
    address.name = this.determineAddressName();

    const displayAddress = address.street ? 
      this.renderNewAddress(address) : 
      this.renderOldAddress(address);

    const deliveryText = ship_to_store
      ? 'DELIVERY TO STORE'
      : 'DELIVERY TO CUSTOMER';

    return (
      <div>
        <OrderShowTitle title={deliveryText} />
        { displayAddress }
      </div>
    );
  }
}

export default DeliveryDetails;
