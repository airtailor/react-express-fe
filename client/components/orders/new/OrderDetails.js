import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  updateCartCustomerInfo,
  updateCartShipTo,
  updateCartNotes,
} from '../../../actions';
import FormField from '../../FormField';
import Checkbox from '../../Checkbox';
import Zippopotam from '../../../lib/zippopotam';
import {ValidateZip} from '../../../utils/validations';

class OrderDetails extends Component {
  constructor() {
    super();
    this.updateCustomerInfo = this.updateCustomerInfo.bind(this);
    //this.props.updateCartShipTo = this.props.updateCartShipTo.bind(this);
  }

  updateCustomerInfo(key, value) {
    let custInfo = this.props.cart.customerInfo;
    custInfo[key] = value;
    this.props.updateCartCustomerInfo(custInfo);
  }

  renderCustomerInfo(cart) {
    const {first_name, last_name, phone, email} = cart.customerInfo;

    return (
      <div>
        <div>
          <FormField
            value={first_name}
            fieldName={'first_name'}
            title={'First Name'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />

          <FormField
            value={last_name}
            fieldName={'last_name'}
            title={'Last Name'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />
        </div>

        <div>
          <FormField
            value={phone}
            fieldName={'phone'}
            title={'Phone'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />

          <FormField
            value={email}
            fieldName={'email'}
            title={'Email'}
            className="order-details-input"
            onChange={this.updateCustomerInfo}
          />
        </div>

        <div>
          {/*     <h3 className='customer-agrees-prompt'>Customer agrees to receive important updates from Air Tailor:</h3>
      <label>Yes! </label> i*/}

          {/*<input
            type='checkbox'
            checked={agrees_to_terms}
            onChange={() => this.updateCustomerInfo('agrees_to_terms', !agrees_to_terms)}/>*/}

          {/*<Checkbox
            checked={agrees_to_terms}
            fieldName={'agrees_to_terms'}
            name="agrees-to-terms"
            text="Customer agrees to receive important updates from Air Tailor"
            onChange={this.updateCustomerInfo}
          />*/}

          {/*<input type="checkbox" id="check" name="check" value="" />
          <label htmlFor="check" className="customer-agrees-prompt">
            <span></span>
            Customer agrees to receive important updates from Air Tailor
          </label>*/}
        </div>
      </div>
    );
  }

  renderCustomerAddress(shipToStore, customerInfo) {
    if (shipToStore) {
      // do nothing
    } else {
      const zippo = ValidateZip(customerInfo.zip)
        ? Zippopotam.get(customerInfo.zip)
        : '';

      // if (zippo.catch) {
      //   zippo.catch(err => {
      //     debugger;
      //   });
      // }

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

          {/*<label>To Store: </label>
          <input
            type='checkbox'
            checked={shipToStore}
            onChange={() => this.props.updateCartShipTo(!shipToStore)}/>
          <br />
          <label>To Customer: </label>
          <input
            type='checkbox'
            checked={!shipToStore}
            onChange={() => this.props.updateCartShipTo(!shipToStore)}/>*/}
        </div>
        {this.renderCustomerAddress(shipToStore, customerInfo)}
      </div>
    );
  }

  render() {
    return (
      <div className="order-details">
        <h2>ORDER DETAILS</h2>
        {this.renderCustomerInfo(this.props.cart)}

        <h3>Order Notes</h3>
        <textarea
          className="order-details-notes-textarea"
          value={this.props.cart.notes}
          onChange={e => this.props.updateCartNotes(e.target.value)}
          cols={36}
          rows={10}
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
      updateCartNotes,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
