import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  updateCartCustomerInfo,
  updateCartShipTo,
  updateCartNotes
} from '../../../actions';
import FormField from '../../FormField';

class OrderDetails extends Component {
  constructor(){
    super();
    this.updateCustomerInfo = this.updateCustomerInfo.bind(this);
  }

  updateCustomerInfo(key, value){
    let custInfo = this.props.cart.customerInfo;
    custInfo[key] = value;
    this.props.updateCartCustomerInfo(custInfo);
  }

  renderCustomerInfo(cart){
    const {first_name, last_name, phone, email} = cart.customerInfo;
    return (
      <div>
        <div>
            <FormField value={first_name}
              fieldName={'first_name'} title={'First Name'}
              onChange={this.updateCustomerInfo} />

              <FormField value={last_name}
                fieldName={'last_name'} title={'Last Name'}
                onChange={this.updateCustomerInfo} />
        </div>

        <div>
            <FormField value={phone}
              fieldName={'phone'} title={'Phone'}
              onChange={this.updateCustomerInfo} />

            <FormField value={email}
              fieldName={'email'} title={'Email'}
              onChange={this.updateCustomerInfo} />
        </div>
      </div>
    )
  }

  renderCustomerAddress(shipToStore, customerInfo){
    if (shipToStore){
      // do nothing
    } else {
      return (
        <div>
          <FormField value={customerInfo.street1}
            fieldName={'street1'} title={'Address 1'}
            onChange={this.updateCustomerInfo} />

            <FormField value={customerInfo.street2}
              fieldName={'street2'} title={'Address 2'}
              onChange={this.updateCustomerInfo} />

            <FormField value={customerInfo.city}
              fieldName={'city'} title={'City'}
              onChange={this.updateCustomerInfo} />

            <FormField value={customerInfo.state}
              fieldName={'state'} title={'State'}
              onChange={this.updateCustomerInfo} />

            <FormField value={customerInfo.zip}
              fieldName={'zip'} title={'Zip'}
              onChange={this.updateCustomerInfo} />
        </div>
      );
    }
  }

  renderShipTo(cart){
    const {shipToStore, customerInfo} = cart;
    return (
      <div>
        <h3>Ship To:</h3>
        <div>
          <label>To Store: </label>
          <input
            type='checkbox'
            checked={shipToStore}
            onChange={() => this.props.updateCartShipTo(!shipToStore)}/>
          <br />
          <label>To Customer: </label>
          <input
            type='checkbox'
            checked={!shipToStore}
            onChange={() => this.props.updateCartShipTo(!shipToStore)}/>
        </div>
        {this.renderCustomerAddress(shipToStore, customerInfo)}
      </div>
    )
  }

  render(){
    return (
      <div className='order-details'>
        <h2>ORDER DETAILS</h2>
        {this.renderCustomerInfo(this.props.cart)}
        {this.renderShipTo(this.props.cart)}

        <h3>Order Notes</h3>
        <textarea
          value={this.props.cart.notes}
          onChange={e => this.props.updateCartNotes(e.target.value)}
          cols={43} rows={10}>
        </textarea>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    cart: store.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCartCustomerInfo,
    updateCartShipTo,
    updateCartNotes,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
