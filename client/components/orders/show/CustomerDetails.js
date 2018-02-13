import React, { Component } from 'react';
import OrderShowTitle from './OrderShowTitle';
import { formatPhone } from '../../../utils/format';

class CustomerDetails extends Component {
  render() {
    const {
      currentOrder: { customer: { first_name, last_name, phone, email } },
      userRoles: { admin, tailor, retailer },
    } = this.props;

    return (
      <div>
        <OrderShowTitle title={'CUSTOMER'} />
        <p className="order-show-p-content">{`${first_name} ${last_name}`}</p>

        <OrderShowTitle title={'PHONE'} />
        <p className="order-show-p-content">{`${formatPhone(phone)}`}</p>

        <OrderShowTitle title={'EMAIL'} />
        <p className="order-show-p-content">{`${email}`}</p>
      </div>
    );
  }
}

export default CustomerDetails;
