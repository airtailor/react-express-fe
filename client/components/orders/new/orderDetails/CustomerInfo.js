import React from 'react';
import FormField from '../../../FormField';

const CustomerInfo = props => {
  const {
    customerInfo: {first_name, last_name, phone, email},
    updateCustomerInfo,
  } = props;

  return (
    <div>
      <div>
        <FormField
          value={first_name}
          fieldName={'first_name'}
          title={'First Name'}
          className="order-details-input"
          onChange={updateCustomerInfo}
        />

        <FormField
          value={last_name}
          fieldName={'last_name'}
          title={'Last Name'}
          className="order-details-input"
          onChange={updateCustomerInfo}
        />
      </div>

      <div>
        <FormField
          value={phone}
          fieldName={'phone'}
          title={'Phone'}
          className="order-details-input"
          onChange={updateCustomerInfo}
        />

        <FormField
          value={email}
          fieldName={'email'}
          title={'Email'}
          className="order-details-input"
          onChange={updateCustomerInfo}
        />
      </div>
    </div>
  );
};

export default CustomerInfo;
