import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  removeGarmentFromCart,
  updateCartNotes,
  createOrValidateCustomer,
  setCartCustomer,
  setGrowler,
  submitOrder,
  setLoader,
  removeLoader,
} from '../../../actions';

import {
  ValidateEmail,
  ValidatePhone,
  ValidateZip,
} from '../../../utils/validations';
import Button from '../../Button';
import ArrowButton from '../../ArrowButton';
import AddNotesButton from '../../AddNotesButton';
import { getTotal } from './utils';

import { basketImage } from '../../../images';

const mapStateToProps = store => {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer,
    currentStore: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeGarmentFromCart,
      updateCartNotes,
      setCartCustomer,
      setGrowler,
      submitOrder,
      setLoader,
      removeLoader,
    },
    dispatch
  );
};

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    cartCustomer: PropTypes.object.isRequired, // mapStateToProps
    removeGarmentFromCart: PropTypes.func.isRequired, // mapDispatchToProps
    updateCartNotes: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
    setCartCustomer: PropTypes.func.isRequired, // mapDispatchToProps
    renderStageOne: PropTypes.func.isRequired, // Parent Component
    stage: PropTypes.number.isRequired, // Parent Component
  };

  constructor() {
    super();
    this.state = {
      showNotes: false,
      orderCompleted: false,
    };
  }

  renderOrderCompleteRedirect() {
    if (this.state.orderCompleted) {
      return <Redirect to="/orders/new/order-confirmation" />;
    }
  }

  renderGarmentAlterations(garment) {
    // this garment is being injected from the menu, not the Cart
    if (garment.alterations.length > 0) {
      return garment.alterations.map((alt, index) => {
        return (
          <p key={index} className="cart-alteration">
            <span>{alt.title}</span>{' '}
            <span style={{ float: 'right', paddingRight: '25px' }}>
              ${alt.price.toFixed(2)}
            </span>
          </p>
        );
      });
    } else {
      return <div />;
    }
  }

  confirmRemoveFromCart = index => {
    if (confirm('Are you sure you want to delete this garment?')) {
      this.props.removeGarmentFromCart(index);
    }
  };

  renderCartItems(props) {
    const { cart: { garments }, renderSelectAlterations } = props;
    if (garments.length > 0) {
      return garments.map((garment, index) => {
        return (
          <div key={index} style={{ marginLeft: '15px' }}>
            <h3 style={{ paddingRight: '15px' }}>
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
                onClick={() => this.confirmRemoveFromCart(index)}
                className="remove-from-cart-button"
              >
                DELETE
              </span>
              <span
                style={{
                  paddingRight: '10px',
                  float: 'right',
                  fontSize: '8px',
                  lineHeight: 2.8,
                }}
              >
                {' | '}
              </span>
              <span
                onClick={() => {
                  renderSelectAlterations(index, garment, garment.alterations);
                }}
                className="cart-item edit-cart-item-button"
              >
                EDIT
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
      street_two,
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

  submitOrder() {
    const {
      setLoader,
      submitOrder,
      setGrowler,
      renderOrderDetails,
      removeLoader,
    } = this.props;

    setLoader();

    submitOrder({ ...this.props })
      .then(res => {
        if (res.errors) {
          const kind = 'warning';
          const message = res.message;
          setGrowler({ message, kind });
          renderOrderDetails();
        } else {
          this.setState({ orderCompleted: true });
        }
      })
      .catch(err => {
        debugger;
      })
      .then(() => removeLoader());
  }

  renderSubmitButtons = () => {
    return (
      <div className="vert-cart-buttons-container">
        <Button
          onClick={() => this.submitOrder()}
          className="submit-order-button"
          text="SUBMIT ORDER"
        />

        <ArrowButton
          onClick={this.props.renderOrderDetails}
          text="Edit customer details"
        />
      </div>
    );
  };

  renderNextButton(props) {
    const {
      cart: { garments },
      renderOrderDetails,
      renderStageOne,
      stage,
    } = this.props;

    const checkoutButton = (
      <Button
        onClick={this.checkForValidCustomer}
        text="CHECKOUT"
        className="big-button"
      />
    );

    const adddMoreItems = (
      <ArrowButton onClick={renderStageOne} text="Add more items" />
    );

    const editOrderDetails = (
      <ArrowButton onClick={renderOrderDetails} text="Edit Order Details" />
    );

    if (garments.length > 0) {
      if (stage === 4) {
        return this.renderSubmitButtons();
      } else if (this.readyToCheckout() && stage !== 3) {
        return (
          <div className="vert-cart-buttons-container">
            {checkoutButton}
            {editOrderDetails}
          </div>
        );
      } else if (this.readyToCheckout(this.props) && stage === 3) {
        return (
          <div className="vert-cart-buttons-container">
            {checkoutButton}
            {adddMoreItems}
          </div>
        );
      } else if (!this.readyToCheckout(props) && props.stage === 3) {
        return (
          <div className="vert-cart-buttons-container">
            <Button
              onClick={this.checkForValidCustomer}
              text="CHECKOUT"
              disabled={true}
              className="big-button"
            />
            {adddMoreItems}
          </div>
        );
      } else if (props.stage === 2 || props.stage === 1) {
        return (
          <div className="cart-buttons-container">
            <Button onClick={renderOrderDetails} text="Add Order Details" />
          </div>
        );
      }
    }
  }

  renderOrderNotes(props) {
    const { showNotes } = this.state;
    return (
      <div style={{ marginLeft: '15px' }}>
        <AddNotesButton
          onClick={() => this.setState({ showNotes: !showNotes })}
        />

        {showNotes ? (
          <textarea
            className="order-details-notes-textarea"
            value={this.props.cart.notes}
            onChange={e => this.props.updateCartNotes(e.target.value)}
            cols={36}
            rows={10}
            placeholder="Is this a special order or customer? Enter any important notes about the overall order here to help us serve you best!"
          />
        ) : null}
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

          <hr className="cart-line" />
          <div style={{ marginLeft: '15px' }}>
            <h3>
              <span className="form-label">Total: </span>
              <span
                style={{
                  float: 'right',
                  paddingRight: '15px',
                  fontFamily: 'Raleway',
                  fontWeight: 600,
                }}
              >
                ${getTotal(cart.garments)}
              </span>
            </h3>
          </div>
          <hr className="cart-line" />
          {this.renderOrderNotes(this.props)}
          {this.renderNextButton(this.props)}
          {this.renderOrderCompleteRedirect()}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
