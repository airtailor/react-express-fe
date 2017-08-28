import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import SectionHeader from '../../SectionHeader';
import {formatPhone} from '../../../utils/format';
import {submitOrder} from '../../../actions';

class Checkout extends Component {
  renderCustomerInfo(props){
    const {first_name, last_name, phone, email} = props.cart.customerInfo;
    const {shipToStore} = props.cart;
    return (
      <div>
        <h2>Customer Info:</h2>
        <p>{first_name} {last_name}</p>
        <p>{formatPhone(phone)}</p>
        <p>{email}</p>
      </div>
    );
  }

  renderGarmentAlterations(garment){
    return garment.alterations.map((alt, index) => {
      return <p key={index} className='cart-alteration'>{alt.title}</p>;
    });
  }

  renderGarments(garments){
    return garments.map((garment, index) => {
      return (
        <div key={index}>
          <h3>
            {garment.title} #{index + 1}
          </h3>
          {this.renderGarmentAlterations(garment)}
          <hr />
        </div>
      )
    });
  }

  renderOrderInfo(props){
    const {garments} = props.cart;
    return (
      <div>
        <h2>Order Info:</h2>
        {this.renderGarments(garments)}
      </div>
    );
  }

  renderButtons(props){
    return (
      <div>
        <Link to='/orders/new'>
          <input type='submit' className='short-button' value='Back' />
        </Link>
        <input
          onClick={() => this.props.submitOrder(this.props)}
          type='submit'
          className='short-button'
          value='Submit' />
      </div>
    );
  }

  renderShipToCustomer(customerInfo){
    const {first_name, last_name, street1, street2, city, state, zip} = customerInfo;
    return (
      <div>
        <h2>Ship To Customer:</h2>
        <p>{first_name} {last_name}</p>
        <p>{street1}</p>
        {street2 ? <p>{street2}</p> : ''}
        <p>{city}, {state} {zip}</p>
      </div>
    );
  }

  renderShipToStore(currentStore){
    const {name, street1, street2, city, state, zip} = currentStore;
    return (
      <div>
        <h2>Ship To Store:</h2>
        <p>{name}</p>
        <p>{street1}</p>
        {street2 ? <p>street2</p> : ''}
        <p>{city}, {state} {zip}</p>
      </div>
    );
  }

  renderShippingInfo(props){
    if (props.cart.shipToStore){
      return this.renderShipToStore(props.currentStore);
    } else if (!props.shipToStore){
      return this.renderShipToCustomer(props.cart.customerInfo);
    }
  }

  render(){
    return (
      <div>
       <SectionHeader text='Checkout' />
        <div className='checkout-container'>
          {this.renderCustomerInfo(this.props)}
          <br />
          {this.renderOrderInfo(this.props)}
          <br />
          {this.renderShippingInfo(this.props)}
          <br />
          {this.renderButtons(this.props)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    cart: store.cart,
    currentStore: store.currentStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // updateCartCustomer,
    // updateCartShipTo,
    // updateCartNotes,
    // updateCartStore,
    submitOrder
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
