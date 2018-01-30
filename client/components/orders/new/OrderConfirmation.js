import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setConfirmedNewOrder, resetCart, setGrowler } from '../../../actions';
import { formatPhone } from '../../../utils/format';

import SectionHeader from '../../SectionHeader';

const mapStateToProps = store => {
  return {
    confirmedNewOrder: store.confirmedNewOrder,
    cartCustomer: store.cartCustomer,
    currentStore: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      resetCart,
      setConfirmedNewOrder,
      setGrowler,
    },
    dispatch
  );
};

class OrderConfirmation extends Component {
  static propTypes = {
    cartCustomer: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    confirmedNewOrder: PropTypes.object.isRequired, // mapStateToProps
    resetCart: PropTypes.func.isRequired, // mapDispatchToProps
    setConfirmedNewOrder: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

  componentDidMount() {
    const kind = 'success';
    const message = 'Order completed!';
    this.props.setGrowler({ kind, message });
  }

  componentWillUnmount() {
    this.props.resetCart();
    this.props.setConfirmedNewOrder({});
  }

  renderCustomerInfo(customer) {
    const { first_name, last_name, phone, email } = customer;
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
          {alt.name}
        </p>
      );
    });
  }

  renderGarments(garments) {
    return garments.map((garment, index) => {
      return (
        <div key={index}>
          <h3>
            {garment.name} #{index + 1}
          </h3>
          {this.renderGarmentAlterations(garment)}
          <hr />
        </div>
      );
    });
  }

  renderOrderInfo(confirmedNewOrder) {
    const { items } = confirmedNewOrder;
    return (
      <div>
        <h2>Order Info:</h2>
        {this.renderGarments(items)}
      </div>
    );
  }

  renderButtons(confirmedNewOrder) {
    const newOrderLink = `/orders/${confirmedNewOrder.id}`;

    return (
      <div>
        <Link to="/orders">
          <input
            type="submit"
            className="submit-order-button"
            value="Manage Orders"
          />
        </Link>
      </div>
    );
  }

  renderShipToCustomer(customerInfo) {
    const {
      first_name,
      last_name,
      street,
      unit,
      city,
      state_province,
      zip_code,
    } = customerInfo;
    return (
      <div>
        <h2>Ship To Customer:</h2>
        <p>
          {first_name} {last_name}
        </p>
        <p>{street}</p>
        {unit ? <p>{unit}</p> : ''}
        <p>
          {city}, {state_province} {zip_code}
        </p>
      </div>
    );
  }

  renderShipToStore(store) {
    const { name, street, unit, city, state_province, zip_code } = store;
    return (
      <div>
        <h2>Ship To Store:</h2>
        <p>{name}</p>
        <p>{street}</p>
        {unit ? <p>{unit}</p> : ''}
        <p>
          {city}, {state_province} {zip_code}
        </p>
      </div>
    );
  }

  renderShippingInfo() {
    const {
      currentStore,
      confirmedNewOrder: { ship_to_store },
      cartCustomer: customer,
    } = this.props;

    if (ship_to_store) {
      return this.renderShipToStore(currentStore);
    } else if (!ship_to_store) {
      return this.renderShipToCustomer(customer);
    }
  }

  render() {
    const { confirmedNewOrder, cartCustomer } = this.props;

    return (
      <div>
        <SectionHeader text="Order Completed" />
        <div className="order-completed-container">
          {this.renderCustomerInfo(cartCustomer)}
          <br />
          {this.renderOrderInfo(confirmedNewOrder)}
          <br />
          {this.renderShippingInfo()}
          <br />
          <h2>Total: ${confirmedNewOrder.total.toFixed(2)}</h2>
          <br />
          {this.renderButtons(confirmedNewOrder)}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation);
