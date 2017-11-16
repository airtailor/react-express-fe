import React, {Component} from 'react';
import FormField from '../../../FormField';
import {formatPhone} from '../../../../utils/format';
import FindCustomerByPhone from './FindCustomerByPhone';

class CustomerInfo extends Component {
  constructor() {
    super();
    this.state = {
      customerExists: null,
    };

    this.updateCustomerExists = this.updateCustomerExists.bind(this);
  }

  firstName(first_name) {
    return (
      <FormField
        value={first_name}
        fieldName={'first_name'}
        title={'First Name'}
        className="order-details-input"
        onChange={this.props.updateCustomerInfo}
      />
    );
  }

  lastName(last_name) {
    return (
      <FormField
        value={last_name}
        fieldName={'last_name'}
        title={'Last Name'}
        className="order-details-input"
        onChange={this.props.updateCustomerInfo}
      />
    );
  }

  phone(phone) {
    const displayPhone = formatPhone(phone);
    return (
      <FormField
        value={displayPhone}
        fieldName={'phone'}
        title={'Mobile Phone'}
        className="order-details-input"
        onChange={this.props.updateCustomerInfo}
      />
    );
  }

  email(email) {
    return (
      <FormField
        value={email}
        fieldName={'email'}
        title={'Email'}
        className="order-details-input"
        onChange={this.props.updateCustomerInfo}
      />
    );
  }

  updateCustomerExists(value) {
    this.setState({customerExists: value});
  }

  render() {
    const {
      customerInfo: {first_name, last_name, phone, email, id},
      updateCustomerInfo,
    } = this.props;

    const {customerExists} = this.state;

    if (customerExists === null) {
      return (
        <FindCustomerByPhone
          updateCustomerInfo={updateCustomerInfo}
          updateCustomerExists={this.updateCustomerExists}
        />
      );
    } else {
      return (
        <div>
          {customerExists ? '' : <h4>Create Customer:</h4>}
          <div>
            {this.phone(phone)}
            {this.email(email)}
          </div>

          <div>
            {this.firstName(first_name)}
            {this.lastName(last_name)}
          </div>
        </div>
      );
    }
  }
}

export default CustomerInfo;
