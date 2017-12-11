import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { updateCartCustomer, updateCartShipTo } from '../../../../actions';
import Zippopotam from '../../../../lib/zippopotam';
import { ValidateZip } from '../../../../utils/validations';
import { redirectToStageOneIfNoAlterations } from '../../ordersHelper';

import FormField from '../../../FormField';
import Checkbox from '../../../Checkbox';
import CustomerInfo from './CustomerInfo';

const mapStateToProps = store => {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateCartCustomer,
      updateCartShipTo,
    },
    dispatch
  );
};

export class OrderDetails extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired, // mapStateToProps
    cartCustomer: PropTypes.object.isRequired, // mapStateToProps
    updateCartCustomer: PropTypes.func.isRequired, // mapDispatchToProps
    updateCartShipTo: PropTypes.func.isRequired, // mapDispatchToProps
  };

  renderCustomerAddress(shipToStore, customer) {
    const { updateCartCustomer } = this.props;
    if (shipToStore) {
      // do nothing
    } else {
      const zippo = ValidateZip(customer.zip_code)
        ? Zippopotam.get(customer.zip_code)
        : '';

      if (zippo.then && (!customer.city && !customer.state_province)) {
        zippo.then(res => {
          const formatted_address = res.results[0].formatted_address;
          const city = formatted_address.split(', ')[0];
          const state_province = formatted_address
            .split(', ')[1]
            .match(/[a-zA-Z]+/g)[0];
          updateCartCustomer('city', city);
          updateCartCustomer('state_province', state_province);
        });
      }

      return (
        <div>
          <FormField
            value={customer.street}
            fieldName={'street'}
            title={'Address 1'}
            className="order-details-input"
            onChange={updateCartCustomer}
          />

          <FormField
            value={customer.unit}
            fieldName={'unit'}
            title={'Address 2'}
            className="order-details-input"
            onChange={updateCartCustomer}
          />

          <FormField
            value={customer.city}
            fieldName={'city'}
            title={'City'}
            className="order-details-input"
            onChange={updateCartCustomer}
          />

          <FormField
            value={customer.state_province}
            fieldName={'state_province'}
            title={'State'}
            className="order-details-input"
            onChange={updateCartCustomer}
          />

          <FormField
            value={customer.zip_code}
            fieldName={'zip_code'}
            title={'Zip Code:'}
            className="order-details-input"
            onChange={updateCartCustomer}
          />
        </div>
      );
    }
  }

  renderShipTo(cart, customer) {
    const { shipToStore } = cart;
    return (
      <div>
        <br />
        <div>
          <Checkbox
            checked={shipToStore}
            text="Ship To Store"
            name="ship-to-store"
            onChange={() => this.props.updateCartShipTo(!shipToStore)}
          />

          <br />
          <br />

          <Checkbox
            checked={!shipToStore}
            text="Ship To Customer"
            name="ship-to-customer"
            onChange={() => this.props.updateCartShipTo(!shipToStore)}
          />
          <br />
          <br />
        </div>
        {this.renderCustomerAddress(shipToStore, customer)}
      </div>
    );
  }

  render() {
    const { cart, cartCustomer } = this.props;
    return (
      <div className="order-details">
        {redirectToStageOneIfNoAlterations(this.props)}

        <h2>ORDER DETAILS</h2>
        <CustomerInfo />

        <h3>Shipping</h3>
        {this.renderShipTo(cart, cartCustomer)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
