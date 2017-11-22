import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {updateCartCustomerInfo, updateCartShipTo} from '../../../../actions';

import FormField from '../../../FormField';
import Checkbox from '../../../Checkbox';
import CustomerInfo from './CustomerInfo';

import Zippopotam from '../../../../lib/zippopotam';
import {ValidateZip} from '../../../../utils/validations';
import {redirectToStageOneIfNoAlterations} from '../../ordersHelper';

const mapStateToProps = store => {
  return {
    cart: store.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateCartCustomerInfo,
      updateCartShipTo,
    },
    dispatch
  );
};

class OrderDetails extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired,
    updateCartCustomerInfo: PropTypes.func.isRequired,
    updateCartShipTo: PropTypes.func.isRequired,
    renderStageOne: PropTypes.func.isRequired,
  };

  updateCustomerInfo = (key, value) => {
    let custInfo = this.props.cart.customerInfo;
    custInfo[key] = value;
    this.props.updateCartCustomerInfo(custInfo);
  };

  renderCustomerAddress(shipToStore, customerInfo) {
    if (shipToStore) {
      // do nothing
    } else {
      const zippo = ValidateZip(customerInfo.zip)
        ? Zippopotam.get(customerInfo.zip)
        : '';

      if (zippo.then && (!customerInfo.city && !customerInfo.state)) {
        zippo.then(res => {
          const formatted_address = res.results[0].formatted_address;
          const city = formatted_address.split(', ')[0];
          const state = formatted_address.split(', ')[1].match(/[a-zA-Z]+/g)[0];
          this.updateCustomerInfo('city', city);
          this.updateCustomerInfo('state', state);
        });
      }

      return (
        <div>
          <FormField
            value={customerInfo.street}
            fieldName={'street'}
            title={'Address 1'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />

          <FormField
            value={customerInfo.street_two}
            fieldName={'street_two'}
            title={'Address 2'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />

          <FormField
            value={customerInfo.city}
            fieldName={'city'}
            title={'City'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />

          <FormField
            value={customerInfo.state_province}
            fieldName={'state_province'}
            title={'State'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />

          <FormField
            value={customerInfo.zip_code}
            fieldName={'zip_code'}
            title={'Zip Code:'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />
        </div>
      );
    }
  }

  renderShipTo(cart) {
    const {shipToStore, customerInfo} = cart;
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
        {this.renderCustomerAddress(shipToStore, customerInfo)}
      </div>
    );
  }

  render() {
    const {customerInfo} = this.props.cart;
    console.log('props', this.props);

    return (
      <div className="order-details">
        {redirectToStageOneIfNoAlterations(this.props)}

        <h2>ORDER DETAILS</h2>
        <CustomerInfo
          customerInfo={customerInfo}
          updateCustomerInfo={this.updateCustomerInfo}
        />

        <h3>Shipping</h3>
        {this.renderShipTo(this.props.cart)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
