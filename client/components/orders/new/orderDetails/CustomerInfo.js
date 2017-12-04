import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { updateCartCustomer } from '../../../../actions';
import { formatPhone } from '../../../../utils/format';
import FindCustomerByPhone from './FindCustomerByPhone';

import FormField from '../../../FormField';

const mapStateToProps = store => {
  return {
    cartCustomer: store.cartCustomer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateCartCustomer,
    },
    dispatch
  );
};

class CustomerInfo extends Component {
  constructor() {
    super();
    this.state = {
      customerExists: null,
    };
  }

  static propTypes = {
    cartCustomer: PropTypes.object.isRequired, // mapStateToProps
    updateCartCustomer: PropTypes.func.isRequired, // mapDispatchToProps
  };

  firstName(first_name) {
    return (
      <FormField
        value={first_name}
        fieldName={'first_name'}
        title={'First Name'}
        className="order-details-input"
        onChange={this.props.updateCartCustomer}
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
        onChange={this.props.updateCartCustomer}
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
        onChange={this.props.updateCartCustomer}
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
        onChange={this.props.updateCartCustomer}
      />
    );
  }

  updateCustomerExists = value => {
    this.setState({ customerExists: value });
  };

  render() {
    const {
      cartCustomer: { first_name, last_name, phone, email, id },
      updateCartCustomer,
    } = this.props;

    const { customerExists } = this.state;

    if (customerExists === null && !id) {
      return (
        <FindCustomerByPhone updateCustomerExists={this.updateCustomerExists} />
      );
    } else {
      return (
        <div>
          {customerExists || id ? '' : <h4>Create Customer:</h4>}
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo);
