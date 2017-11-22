import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {removeGarmentFromCart, updateCartNotes} from '../../../actions';
import {
  ValidateEmail,
  ValidatePhone,
  ValidateZip,
} from '../../../utils/validations';
import {getTotal} from './utils';

import {basketImage} from '../../../images';

const mapStateToProps = store => {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({removeGarmentFromCart, updateCartNotes}, dispatch);
};

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired, // mapStateToProps
    cartCustomer: PropTypes.object.isRequired, // mapStateToProps
    removeGarmentFromCart: PropTypes.func.isRequired, // mapDispatchToProps
    updateCartNotes: PropTypes.func.isRequired, // mapDispatchToProps
    renderStageOne: PropTypes.func.isRequired, // Parent Component
    stage: PropTypes.number.isRequired, // Parent Component
  };

  renderGarmentAlterations(garment) {
    // this garment is being injected from the menu, not the Cart
    //console.log('cart js 10', garment);
    if (garment.alterations.length > 0) {
      return garment.alterations.map((alt, index) => {
        return (
          <p key={index} className="cart-alteration">
            {alt.title} - ${alt.price.toFixed(2)}
          </p>
        );
      });
    } else {
      return <div />;
    }
  }

  renderCartItems(props) {
    const {garments} = props.cart;
    const garmentList = garments;
    const {removeGarmentFromCart, renderSelectAlterations} = props;
    if (garmentList.length > 0) {
      return garmentList.map((garment, index) => {
        return (
          <div key={index} style={{marginLeft: '15px'}}>
            <h3>
              <span
                className="cart-item cart-item-title"
                onClick={() => {
                  renderSelectAlterations(index, garment, garment.alterations);
                }}
              >
                {garment.title}
              </span>
              <span
                className="cart-item"
                onClick={() => removeGarmentFromCart(index)}
                className="remove-from-cart-button"
              >
                X
              </span>
            </h3>
            <span
              className="cart-item"
              onClick={() => {
                renderSelectAlterations(index, garment, garment.alterations);
              }}
            >
              {this.renderGarmentAlterations(garment)}
            </span>
            <hr className="alteration-hr" />
          </div>
        );
      });
    } else {
      return <div />;
    }
  }

  readyToCheckout() {
    const {cartCustomer, cart: {shipToStore}} = this.props;
    const {
      id,
      first_name,
      last_name,
      phone,
      email,
      street,
      city,
      state_province,
      zip_code,
    } = cartCustomer;

    if (
      first_name &&
      last_name &&
      ValidatePhone(phone) &&
      ValidateEmail(email) &&
      // Condition Below:
      // Tailor will ship to store, OR customer has provided address
      (shipToStore ||
        (street && city && state_province && ValidateZip(zip_code)))
    ) {
      return true;
    } else {
      return false;
    }
  }

  createNextButton(onClick, text, disabled = false) {
    return (
      <input
        onClick={() => onClick()}
        disabled={disabled}
        className="short-button"
        type="submit"
        value={text}
      />
    );
  }

  renderNextButton(props) {
    const {
      cart: {garments},
      renderOrderDetails,
      renderCheckout,
      renderStageOne,
      stage,
    } = this.props;

    if (garments.length > 0) {
      if (stage === 4) {
        return <div />;
      } else if (this.readyToCheckout() && stage !== 3) {
        return (
          <div className="cart-buttons-container">
            {this.createNextButton(renderOrderDetails, 'Edit Order Details')}

            {this.createNextButton(renderCheckout, 'Checkout')}
          </div>
        );
      } else if (this.readyToCheckout(this.props) && stage === 3) {
        return (
          <div className="cart-buttons-container">
            {this.createNextButton(renderStageOne, 'Add More Items')}

            {this.createNextButton(renderCheckout, 'Checkout')}
          </div>
        );
      } else if (!this.readyToCheckout(props) && props.stage === 3) {
        return (
          <div className="cart-buttons-container">
            {this.createNextButton(renderStageOne, 'Add More Items')}

            {this.createNextButton(renderCheckout, 'Checkout', true)}
          </div>
        );
      } else if (props.stage === 2 || props.stage === 1) {
        return (
          <div className="cart-buttons-container">
            {this.createNextButton(renderOrderDetails, 'Add Order Details')}
          </div>
        );
      }
    }
  }

  customerAgreesPrompt(stage) {
    if (stage === 3) {
      return (
        <p className="customer-agrees-prompt">
          By submitting this form, customer agrees to receive production status
          updates via text
        </p>
      );
    }
  }

  renderOrderNotes(props) {
    return (
      <div style={{marginLeft: '15px'}}>
        <h3>Order Notes</h3>
        <textarea
          className="order-details-notes-textarea"
          value={this.props.cart.notes}
          onChange={e => this.props.updateCartNotes(e.target.value)}
          cols={36}
          rows={10}
        />
      </div>
    );
  }

  render() {
    const {cart, stage} = this.props;

    if (cart.garments.length > 0) {
      return (
        <div className="cart-container">
          <h2 className="cart-title">
            <img src={basketImage} className="cart-icon" /> BASKET
          </h2>
          <hr className="cart-line" />
          <div className="cart-items">{this.renderCartItems(this.props)}</div>

          {this.renderOrderNotes(this.props)}
          {this.customerAgreesPrompt(stage)}

          <div style={{marginLeft: '15px'}}>
            <h3>Total: ${getTotal(cart.garments)}</h3>
          </div>

          {this.renderNextButton(this.props)}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
