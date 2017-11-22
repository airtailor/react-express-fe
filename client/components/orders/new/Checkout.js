import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  submitOrder,
  setGrowler,
  setLoader,
  removeLoader,
} from '../../../actions';
import {formatPhone} from '../../../utils/format';
import {redirectToStageOneIfNoAlterations} from '../ordersHelper';
import {getTotal} from './utils';

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
      submitOrder,
      setGrowler,
      setLoader,
      removeLoader,
    },
    dispatch
  );
};

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      orderCompleted: false,
    };
  }

  static propTypes = {
    cartCustomer: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    cart: PropTypes.object.isRequired, // mapStateToProps
    submitOrder: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    renderOrderDetails: PropTypes.func.isRequired, // Parent Component
    renderStageOne: PropTypes.func.isRequired, // Parent Component
  };

  renderCustomerInfo() {
    const {
      cartCustomer: {first_name, last_name, phone, email},
      cart: {shipToStore},
    } = this.props;

    return (
      <div>
        <h2>Customer Info:</h2>
        <p>
          {first_name} {last_name}
        </p>
        <p>{formatPhone(phone)}</p>
        <p>{email}</p>
      </div>
    );
  }

  renderGarmentAlterations(garment) {
    return garment.alterations.map((alt, index) => {
      return (
        <p key={index} className="cart-alteration">
          {alt.title}
        </p>
      );
    });
  }

  renderGarments(garments) {
    return garments.map((garment, index) => {
      return (
        <div key={index}>
          <h3>
            {garment.title} #{index + 1}
          </h3>
          {this.renderGarmentAlterations(garment)}
          <hr />
        </div>
      );
    });
  }

  renderOrderInfo() {
    const {garments, notes} = this.props.cart;
    return (
      <div>
        <h2>Order Info:</h2>
        {this.renderGarments(garments)}
        <h3>Order Notes:</h3>
        <p style={{paddingLeft: '15px'}}>{notes || 'Not Provided'}</p>
      </div>
    );
  }

  submitOrder() {
    const {
      setLoader,
      submitOrder,
      setGrowler,
      renderOrderDetails,
      removeLoader,
    } = this.props;

    setLoader();

    submitOrder(this.props)
      .then(res => {
        if (res.errors) {
          const kind = 'warning';
          const message = res.message;
          setGrowler({message, kind});
          renderOrderDetails();
        } else {
          this.setState({orderCompleted: true});
        }
      })
      .catch(err => {
        debugger;
      })
      .then(() => removeLoader());
  }

  renderButtons() {
    return (
      <div>
        <input
          onClick={() => this.props.renderStageOne()}
          type="submit"
          className="short-button"
          value="Make Changes"
        />

        <input
          onClick={() => this.submitOrder()}
          type="submit"
          className="short-button"
          value="Submit"
        />
      </div>
    );
  }

  renderShipToCustomer() {
    const {
      first_name,
      last_name,
      street,
      unit,
      city,
      state_province,
      zip_code,
    } = this.props.cartCustomer;

    let address_two;
    if (unit) {
      address_two = street_two.length > 0 ? <p>{unit}</p> : '';
    } else {
      address_two = '';
    }

    return (
      <div>
        <h2>Ship To Customer:</h2>
        <p>
          {first_name} {last_name}
        </p>
        <p>{street}</p>
        {address_two}
        <p>
          {city}, {state_province} {zip_code}
        </p>
      </div>
    );
  }

  renderShipToStore() {
    const {
      name,
      street,
      street_two,
      city,
      state_province,
      zip_code,
    } = this.props.currentStore;
    let address_two;

    if (street_two) {
      address_two = street_two.length > 0 ? <p>{street_two}</p> : '';
    } else {
      address_two = '';
    }

    return (
      <div>
        <h2>Ship To Store:</h2>
        <p>{name}</p>
        <p>{street}</p>
        {address_two}
        <p>
          {city}, {state_province} {zip_code}
        </p>
      </div>
    );
  }

  renderShippingInfo() {
    const {cart: {shipToStore}} = this.props;
    if (shipToStore) {
      return this.renderShipToStore();
    } else if (!shipToStore) {
      return this.renderShipToCustomer();
    }
  }

  renderOrderCompleteRedirect() {
    if (this.state.orderCompleted) {
      return <Redirect to="/orders/new/order-confirmation" />;
    }
  }

  render() {
    const {cart: {garments}} = this.props;
    console.log(this.props);
    return (
      <div>
        <div className="checkout-container">
          {redirectToStageOneIfNoAlterations(this.props)}
          {this.renderCustomerInfo()}
          <br />
          {this.renderOrderInfo()}
          <br />
          {this.renderShippingInfo()}
          <br />
          <h2>Total: ${getTotal(garments)}</h2>
          <br />
          {this.renderButtons()}
          {this.renderOrderCompleteRedirect()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
