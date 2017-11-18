import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, Redirect} from 'react-router-dom';
import {formatPhone} from '../../../utils/format';
import {
  submitOrder,
  setGrowler,
  setLoader,
  removeLoader,
} from '../../../actions';
import {redirectToStageOneIfNoAlterations} from '../ordersHelper';
import {getTotal} from './utils';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      orderCompleted: false,
    };
  }

  renderCustomerInfo(props) {
    const {first_name, last_name, phone, email} = props.cart.customerInfo;
    const {shipToStore} = props.cart;
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

  renderOrderInfo(props) {
    const {garments, notes} = props.cart;
    return (
      <div>
        <h2>Order Info:</h2>
        {this.renderGarments(garments)}
        <h3>Order Notes:</h3>
        <p style={{paddingLeft: '15px'}}>{notes || 'Not Provided'}</p>
      </div>
    );
  }

  submitOrder(props) {
    this.props.setLoader();
    this.props
      .submitOrder(props)
      .then(res => {
        if (res.errors) {
          const kind = 'warning';
          const message = res.message;
          this.props.setGrowler({message, kind});
          this.props.renderOrderDetails();
        } else {
          this.setState({orderCompleted: true});
        }
      })
      .catch(err => {
        debugger;
      })
      .then(() => this.props.removeLoader());
  }

  renderButtons(props) {
    return (
      <div>
        <input
          onClick={() => props.renderStageOne()}
          type="submit"
          className="short-button"
          value="Make Changes"
        />

        <input
          onClick={() => this.submitOrder(this.props)}
          type="submit"
          className="short-button"
          value="Submit"
        />
      </div>
    );
  }

  renderShipToCustomer(customerInfo) {
    const {
      first_name,
      last_name,
      street,
      street_two,
      city,
      state_province,
      zip_code,
    } = customerInfo;
    let address_two;
    if (street_two) {
      address_two = street_two.length > 0 ? <p>{street_two}</p> : '';
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

  renderShipToStore(currentStore) {
    const {name, street, street_two, city, state_province, zip_code} = currentStore;
    let address_two

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

  renderShippingInfo(props) {
    if (props.cart.shipToStore) {
      return this.renderShipToStore(props.currentStore);
    } else if (!props.shipToStore) {
      return this.renderShipToCustomer(props.cart.customerInfo);
    }
  }

  renderOrderCompleteRedirect(state) {
    if (state.orderCompleted) {
      return <Redirect to="/orders/new/order-confirmation" />;
    }
  }

  render() {
    return (
      <div>
        <div className="checkout-container">
          {redirectToStageOneIfNoAlterations(this.props)}
          {this.renderCustomerInfo(this.props)}
          <br />
          {this.renderOrderInfo(this.props)}
          <br />
          {this.renderShippingInfo(this.props)}
          <br />
          <h2>Total: ${getTotal(this.props.cart.garments)}</h2>
          <br />
          {this.renderButtons(this.props)}
          {this.renderOrderCompleteRedirect(this.state)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    cart: store.cart,
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
