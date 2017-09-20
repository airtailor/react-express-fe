import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, Redirect} from 'react-router-dom';
import {formatPhone} from '../../../utils/format';
import {submitOrder, setGrowler} from '../../../actions';
import {redirectToStageOneIfNoAlterations} from '../ordersHelper';

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
        <h3>Order Notes</h3>
        <p>{notes}</p>
      </div>
    );
  }

  submitOrder(props) {
    this.props
      .submitOrder(props)
      .then(res => {
        if (res.errors) {
          console.log('errors', res);
          const kind = 'warning';
          //const message = res.message.customer[0];
          const message = res.message;
          console.log('message', message);
          this.props.setGrowler({message, kind});
          this.props.renderOrderDetails();
        } else {
          this.setState({orderCompeted: true});
          //console.log('success', res)
        }
      })
      .catch(err => {
        debugger;
      });
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
      street1,
      street2,
      city,
      state,
      zip,
    } = customerInfo;
    let address2;
    if (street2) {
      address2 = street2.length > 0 ? <p>{street2}</p> : '';
    } else {
      address2 = '';
    }

    return (
      <div>
        <h2>Ship To Customer:</h2>
        <p>
          {first_name} {last_name}
        </p>
        <p>{street1}</p>
        {address2}
        <p>
          {city}, {state} {zip}
        </p>
      </div>
    );
  }

  renderShipToStore(currentStore) {
    const {name, street1, street2, city, state, zip} = currentStore;
    let address2;

    if (street2) {
      address2 = street2.length > 0 ? <p>{street2}</p> : '';
    } else {
      address2 = '';
    }

    return (
      <div>
        <h2>Ship To Store:</h2>
        <p>{name}</p>
        <p>{street1}</p>
        {address2}
        <p>
          {city}, {state} {zip}
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
    if (state.orderCompeted) {
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
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
