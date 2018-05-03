import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { updateCartCustomer, resetCartCustomer } from '../../../../actions';
import { formatPhone } from '../../../../utils/format';
import FindCustomerByEmail from './FindCustomerByEmail';

import FormField from '../../../FormField';
import Checkbox from '../../../Checkbox';
import ClearButton from '../../../ClearButton';
import AcceptPrivacyPolicyModal from '../modals/AcceptPrivacyPolicyModal';

const mapStateToProps = store => {
  return {
    cartCustomer: store.cartCustomer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateCartCustomer,
      resetCartCustomer,
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
    resetCartCustomer: PropTypes.func.isRequired, // mapDispatchToProps
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

  resetCartCustomerAndUpdateCustomerExists = () => {
    this.props.resetCartCustomer();
    this.updateCustomerExists(null);
  };

  privacyPolicy = agrees => {
    return (
      <Checkbox
        fieldName={'agrees_to_01_10_2018'}
        text={'Customer Agrees to Privacy Policy'}
        checked={agrees}
        onChange={this.props.updateCartCustomer}
      />
    );
  };

  updateCustomerExists = value => {
    this.setState({ customerExists: value });
  };

  render() {
    const {
      cartCustomer: {
        first_name,
        last_name,
        phone,
        email,
        id,
        agrees_to_01_10_2018,
      },
      updateCartCustomer,
    } = this.props;

    const { customerExists } = this.state;

    if (customerExists === null && !id) {
      return (
        <FindCustomerByEmail updateCustomerExists={this.updateCustomerExists} />
      );
    } else {
      return (
        <div>
          {customerExists || id ? '' : <h4>Create Customer:</h4>}
          <div>
            {this.email(email)}
            {this.phone(phone)}
          </div>
          <div>
            {this.firstName(first_name)}
            {this.lastName(last_name)}
            <ClearButton
              onClick={() => this.resetCartCustomerAndUpdateCustomerExists()}
            />
            <hr className="cart-line" />

            {this.privacyPolicy(agrees_to_01_10_2018)}
            <div style={{ marginTop: '-10px', marginBottom: '-10px' }}>
              <AcceptPrivacyPolicyModal />
            </div>

            <hr className="cart-line" />
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo);
