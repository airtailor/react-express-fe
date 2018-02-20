import React, { Component } from 'react';
import OrderShowTitle from './OrderShowTitle';
import { formatPhone } from '../../../utils/format';

class CustomerDetails extends Component {
  renderCustomerAddress() {
    if (this.props.withAddress && this.props.customer.street) {
      const {
        street,
        street_two,
        city,
        state_province,
        zip_code,
      } = this.props.customer;

      return (
        <div>
          <OrderShowTitle title={'ADDRESS'} />
          <p className="order-show-p-content">{street}</p>
          <p className="order-show-p-content">{street_two}</p>
          <p className="order-show-p-content">
            {city}, {state_province} {zip_code}
          </p>
        </div>
      );
    }
  }

  render() {
    const {
      customer: { first_name, last_name, phone, email },
      withAddress,
    } = this.props;

    return (
      <div>
        <OrderShowTitle title={'CUSTOMER'} />
        <p className="order-show-p-content">{`${first_name} ${last_name}`}</p>

        <OrderShowTitle title={'PHONE'} />
        <p className="order-show-p-content">{`${formatPhone(phone)}`}</p>

        <OrderShowTitle title={'EMAIL'} />
        <p className="order-show-p-content">{`${email}`}</p>

        {this.renderCustomerAddress()}
      </div>
    );
  }
}

export default CustomerDetails;
