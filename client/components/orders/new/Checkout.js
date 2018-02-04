import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { formatPhone } from '../../../utils/format';
import { redirectToStageOneIfNoAlterations } from '../ordersHelper';

const mapStateToProps = store => {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer,
    currentStore: store.currentStore,
  };
};

class Checkout extends Component {
  static propTypes = {
    cartCustomer: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    cart: PropTypes.object.isRequired, // mapStateToProps
    renderOrderDetails: PropTypes.func.isRequired, // Parent Component
    renderStageOne: PropTypes.func.isRequired, // Parent Component
  };

  renderCustomerInfo() {
    const {
      cartCustomer: { first_name, last_name, phone, email },
      cart: { shipToStore },
    } = this.props;

    return (
      <div>
        <h2>Customer Info:</h2>
        <p>
          {first_name} {last_name}
        </p>
        <p>{formatPhone(phone)}</p>
        <p>{email}</p>
      </div>
    );
  }

  renderShipToCustomer() {
    const {
      first_name,
      last_name,
      street,
      street_two,
      city,
      state_province,
      zip_code,
    } = this.props.cartCustomer;

    let address_two;
    if (street_two) {
      address_two = street_two.length > 0 ? <p>{street_two}</p> : '';
    } else {
      address_two = '';
    }

    return (
      <div>
        <h2>Ship To Customer:</h2>
        <p>
          {first_name} {last_name}
        </p>
        <p>{street}</p>
        {address_two}
        <p>
          {city}, {state_province} {zip_code}
        </p>
      </div>
    );
  }

  renderShipToStore() {
    const {
      name,
      street,
      street_two,
      city,
      state_province,
      zip_code,
    } = this.props.currentStore;
    let address_two;

    if (street_two) {
      address_two = street_two.length > 0 ? <p>{street_two}</p> : '';
    } else {
      address_two = '';
    }

    return (
      <div>
        <h2>Ship To Store:</h2>
        <p>{name}</p>
        <p>{street}</p>
        {address_two}
        <p>
          {city}, {state_province} {zip_code}
        </p>
      </div>
    );
  }

  renderShippingInfo() {
    const { cart: { shipToStore } } = this.props;
    if (shipToStore) {
      return this.renderShipToStore();
    } else if (!shipToStore) {
      return this.renderShipToCustomer();
    }
  }

  render() {
    const { cart: { garments } } = this.props;
    return (
      <div>
        <div className="checkout-container">
          {redirectToStageOneIfNoAlterations(this.props)}
          {this.renderCustomerInfo()}
          <br />
          {this.renderShippingInfo()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Checkout);
