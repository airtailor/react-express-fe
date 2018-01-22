import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  removeGarmentFromCart,
  updateCartNotes,
  createOrValidateCustomer,
  setCartCustomer,
  setGrowler,
} from '../../../actions';
import {
  ValidateEmail,
  ValidatePhone,
  ValidateZip,
} from '../../../utils/validations';
import { getTotal } from './utils';

import { basketImage } from '../../../images';

const mapStateToProps = store => {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { removeGarmentFromCart, updateCartNotes, setCartCustomer, setGrowler },
    dispatch
  );
};

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired, // mapStateToProps
    cartCustomer: PropTypes.object.isRequired, // mapStateToProps
    removeGarmentFromCart: PropTypes.func.isRequired, // mapDispatchToProps
    updateCartNotes: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
    setCartCustomer: PropTypes.func.isRequired, // mapDispatchToProps
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
    const { garments } = props.cart;
    const garmentList = garments;
    const { removeGarmentFromCart, renderSelectAlterations } = props;
    if (garmentList.length > 0) {
      return garmentList.map((garment, index) => {
        return (
          <div key={index} style={{ marginLeft: '15px' }}>
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
    const { cartCustomer, cart: { shipToStore } } = this.props;
    const {
      id,
      first_name,
      last_name,
      phone,
      email,
      street,
      unit,
      city,
      state_province,
      zip_code,
      agrees_to_01_10_2018,
    } = cartCustomer;

    if (
      first_name &&
      last_name &&
      ValidatePhone(phone) &&
      ValidateEmail(email) &&
      agrees_to_01_10_2018 &&
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

  checkForValidCustomer = () => {
    const {
      cartCustomer,
      renderCheckout,
      setCartCustomer,
      renderOrderDetails,
      setGrowler,
    } = this.props;

    createOrValidateCustomer(cartCustomer).then(res => {
      if (res.data.body && res.data.body.errors) {
        const kind = 'warning';
        const message = res.data.body.errors[0];
        setGrowler({ kind, message });
        renderOrderDetails();
      } else {
        setCartCustomer(res.data.body);
        renderCheckout();
      }
    });
  };

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
      cart: { garments },
      renderOrderDetails,
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

            {this.createNextButton(this.checkForValidCustomer, 'Checkout')}
          </div>
        );
      } else if (this.readyToCheckout(this.props) && stage === 3) {
        return (
          <div className="cart-buttons-container">
            {this.createNextButton(renderStageOne, 'Add More Items')}

            {this.createNextButton(this.checkForValidCustomer, 'Checkout')}
          </div>
        );
      } else if (!this.readyToCheckout(props) && props.stage === 3) {
        return (
          <div className="cart-buttons-container">
            {this.createNextButton(renderStageOne, 'Add More Items')}

            {this.createNextButton(
              this.checkForValidCustomer,
              'Checkout',
              true
            )}
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
      <div style={{ marginLeft: '15px' }}>
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
    const { cart, stage } = this.props;

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

          <div style={{ marginLeft: '15px' }}>
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
