import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {removeGarmentFromCart} from '../../../actions';
import {ValidateEmail, ValidatePhone, ValidateZip} from '../../../utils/validations';
import {basketImage} from '../../../images';

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
  const garmentList = garments;
  const {removeGarmentFromCart, renderSelectAlterations} = props;
  if (garmentList.length > 0) {
    return garmentList.map((garment, index) => {
      // pass 2 as the stage for OrdersNew to go directly to
      // the SelectAlterations stage
      //
      // pass the index of the garment in the cart so that the
      // SelectAlterations page will render that garment in the cart
      const stage = 2; 
      const link = `/orders/new/${stage}/${index}`;
      return (
        <div 
          key={index}
          style={{marginLeft: '15px'}}>

          <h3>
            <span
             className="cart-item cart-item-title" 
              onClick={() => {
                renderSelectAlterations(index, garment, garment.alterations)
              }}>
              {garment.title}
            </span>
            <span
              className="cart-item" 
              onClick={() => removeGarmentFromCart(index)}
              className='remove-from-cart-button'>
              X
            </span>
          </h3>
          <span 
            className="cart-item" 
            onClick={() => {
              renderSelectAlterations(index, garment, garment.alterations)
            }}>
            {renderGarmentAlterations(garment)}
          </span>
          <hr className='alteration-hr' />
        </div>
      );
    });
  } else {
    return <div></div>;
  }
}

const readyToCheckout = (props) => {
  const {customerInfo, shipToStore} = props.cart;
  const {first_name, last_name, phone, email, street1, city, state, zip, agrees_to_terms} = customerInfo;

  if ( (first_name && last_name && ValidatePhone(phone) && ValidateEmail(email)) &&
       (shipToStore || (street1, city, state, ValidateZip(zip))) &&
       (agrees_to_terms)) {
        return true;
    } else {
        return false;
    }
}

const renderNextButton = (props) => {
  if (props.cart.garments.length > 0) {
    if (readyToCheckout(props) && props.stage !== 3){
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
    } else if (readyToCheckout(props) && props.stage == 3){
      return (
        <div>
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
  if (props.cart.garments.length > 0) {
    return (
      <div className='cart-container'>
        <h2 className='cart-title' ><img src={basketImage} className='cart-icon' /> BASKET</h2>
        <hr className='cart-line' />
        <div className='cart-items'>
          {renderCartItems(props)}
        </div>
        {renderNextButton(props)}
      </div>
    );
  } else {
    return <div></div>
  }
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
