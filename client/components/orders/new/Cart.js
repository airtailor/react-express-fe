import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {removeGarmentFromCart} from '../../../actions';
import buttonImage from '../../../images/button.png';
import {ValidateEmail, ValidatePhone, ValidateZip} from '../../../utils/validations';

const renderGarmentAlterations = (garment) => {
  if (garment.alterations.length > 0) {
    return garment.alterations.map((alt, index) => {
      return <p key={index} className='cart-alteration'>{alt.title}</p>;
    });
  } else {
    return <div></div>;
  }
}

const renderCartItems = (props) => {
  const {garments} = props.cart;
  const {removeGarmentFromCart} = props;
  if (garments.length > 0) {
    return garments.map((garment, index) => {
      return (
        <div key={index}>
          <h3>
            {garment.title}
            <span
              onClick={() => removeGarmentFromCart(index)}
              className='remove-from-cart-button'>
              X
            </span>
          </h3>
          {renderGarmentAlterations(garment)}
          <hr />
        </div>
      )
    });
  } else {
    return <div></div>;
  }
}

const readyToCheckout = (props) => {
  const {customerInfo, shipToStore} = props.cart;
  const {first_name, last_name, phone, email, street1, city, state, zip} = customerInfo;

  if ( (first_name && last_name && ValidatePhone(phone) && ValidateEmail(email)) &&
       (shipToStore || (street1, city, state, ValidateZip(zip))) ) {
        return true;
    } else {
        return false;
    }
}

const renderNextButton = (props) => {
  if (props.cart.garments.length > 0) {
    if (readyToCheckout(props)){
      return (
        <div>
          <input
            onClick={props.renderOrderDetails}
            className='short-buton'
            type='submit'
            value='Add Order Details' />

          <Link to='/orders/new/checkout'>
            <input
              className='short-button'
              type='submit'
              value='Checkout' />
          </Link>
        </div>
      );
    } else if (props.stage === 2 || props.stage === 1) {
        return (
          <input
            onClick={props.renderOrderDetails}
            className='short-buton'
            type='submit'
            value='Add Order Details' />
        );
    }
  }
}

const Cart = (props) => {
  return (
    <div className='cart-container'>
      <h2 className='cart-title' ><img src={buttonImage} className='cart-icon' /> CART</h2>
      <hr />
      <div className='cart-items'>
        {renderCartItems(props)}
      </div>
      {renderNextButton(props)}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    cart: store.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({removeGarmentFromCart}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
