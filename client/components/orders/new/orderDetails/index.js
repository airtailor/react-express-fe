import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateCartCustomerInfo, updateCartShipTo} from '../../../../actions';
import FormField from '../../../FormField';
import Checkbox from '../../../Checkbox';
import Zippopotam from '../../../../lib/zippopotam';
import {ValidateZip} from '../../../../utils/validations';
import {redirectToStageOneIfNoAlterations} from '../../ordersHelper';
import CustomerInfo from './CustomerInfo';

class OrderDetails extends Component {
  constructor() {
    super();
    this.updateCustomerInfo = this.updateCustomerInfo.bind(this);
  }

  updateCustomerInfo(key, value) {
    let custInfo = this.props.cart.customerInfo;
    custInfo[key] = value;
    this.props.updateCartCustomerInfo(custInfo);
  }

  // renderCustomerInfo(cart) {
  //   const {first_name, last_name, phone, email} = cart.customerInfo;
  //
  //   return (
  //     <div>
  //       <div>
  //         <FormField
  //           value={first_name}
  //           fieldName={'first_name'}
  //           title={'First Name'}
  //           className="order-details-input"
  //           onChange={this.updateCustomerInfo}
  //         />
  //
  //         <FormField
  //           value={last_name}
  //           fieldName={'last_name'}
  //           title={'Last Name'}
  //           className="order-details-input"
  //           onChange={this.updateCustomerInfo}
  //         />
  //       </div>
  //
  //       <div>
  //         <FormField
  //           value={phone}
  //           fieldName={'phone'}
  //           title={'Phone'}
  //           className="order-details-input"
  //           onChange={this.updateCustomerInfo}
  //         />
  //
  //         <FormField
  //           value={email}
  //           fieldName={'email'}
  //           title={'Email'}
  //           className="order-details-input"
  //           onChange={this.updateCustomerInfo}
  //         />
  //       </div>
  //     </div>
  //   );
  // }

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
            value={customerInfo.street1}
            fieldName={'street1'}
            title={'Address 1'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />

          <FormField
            value={customerInfo.street2}
            fieldName={'street2'}
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
            value={customerInfo.state}
            fieldName={'state'}
            title={'State'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />

          <FormField
            value={customerInfo.zip}
            fieldName={'zip'}
            title={'Zip'}
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
