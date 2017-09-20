import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {removeGarmentFromCart} from '../../../actions';
import {
  ValidateEmail,
  ValidatePhone,
  ValidateZip,
} from '../../../utils/validations';
import {basketImage} from '../../../images';

class Cart extends Component {
  componentWillReceiveProps(nextProps) {
    //console.log('componentWillReceiveProps');
    if (
      nextProps.cart.garments.length > 0 &&
      nextProps.cart.garments[0].alterations &&
      nextProps.cart.garments[0].alterations.length > 1
    ) {
      // debugger;
    }
  }

  renderGarmentAlterations(garment) {
    // this garment is being injected from the menu, not the car
    //console.log('cart js 10', garment);
    if (garment.alterations.length > 0) {
      return garment.alterations.map((alt, index) => {
        return (
          <p key={index} className="cart-alteration">
            {alt.title}
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

  readyToCheckout(props) {
    const {customerInfo, shipToStore} = props.cart;
    const {
      first_name,
      last_name,
      phone,
      email,
      street1,
      city,
      state,
      zip,
    } = customerInfo;

    if (
      first_name &&
      last_name &&
      ValidatePhone(phone) &&
      ValidateEmail(email) &&
      // Condition Below:
      // Tailor will ship to store, OR customer has provided address
      (shipToStore || (street1 && city && state && ValidateZip(zip)))
    ) {
      return true;
    } else {
      return false;
    }
  }

  renderNextButton(props) {
    if (props.cart.garments.length > 0) {
      if (props.stage === 4) {
        return <div />;
      } else if (this.readyToCheckout(props) && props.stage !== 3) {
        return (
          <div className="cart-buttons-container">
            <input
              onClick={props.renderOrderDetails}
              className="short-button"
              type="submit"
              value="Edit Order Details"
            />

            <input
              onClick={() => this.props.renderCheckout()}
              className="short-button"
              type="submit"
              value="Checkout"
            />
          </div>
        );
      } else if (this.readyToCheckout(props) && props.stage === 3) {
        return (
          <div className="cart-buttons-container">
            <input
              onClick={() => this.props.renderCheckout()}
              className="short-button"
              type="submit"
              value="Checkout"
            />
            <input
              onClick={() => this.props.renderStageOne()}
              className="short-button"
              type="submit"
              value="Add More Items"
            />
          </div>
        );
      } else if (!this.readyToCheckout(props) && props.stage === 3) {
        return (
          <div className="cart-buttons-container">
            <input
              onClick={() => this.props.renderCheckout()}
              className="short-button"
              type="submit"
              value="Checkout"
              disabled={true}
            />
            <input
              onClick={() => this.props.renderStageOne()}
              className="short-button"
              type="submit"
              value="Add More Items"
            />
          </div>
        );
      } else if (props.stage === 2 || props.stage === 1) {
        return (
          <div className="cart-buttons-container">
            <input
              onClick={props.renderOrderDetails}
              className="short-button"
              type="submit"
              value="Add Order Details"
            />
          </div>
        );
      }
    }
  }

  render() {
    if (this.props.cart.garments.length > 0) {
      return (
        <div className="cart-container">
          <h2 className="cart-title">
            <img src={basketImage} className="cart-icon" /> BASKET
          </h2>
          <hr className="cart-line" />
          <div className="cart-items">{this.renderCartItems(this.props)}</div>
          <p className="customer-agrees-prompt">
            By submitting this form, customer agrees to receive production
            status updates via text
          </p>
          {this.renderNextButton(this.props)}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = store => {
  return {
    cart: store.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({removeGarmentFromCart}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
