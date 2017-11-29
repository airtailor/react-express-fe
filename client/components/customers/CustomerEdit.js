import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import {
  updateCustomer,
  getCurrentCustomer,
  setGrowler,
  getCurrentOrder,
  updateCurrentCustomer
} from '../../actions';

import { ValidateEmail } from '../../utils/validations';

import FormField from '../FormField.js';

const mapStateToProps = store => {
  return {
    currentOrder: store.currentOrder,
    currentCustomer: store.currentCustomer,
    currentStore: store.currentStore
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setGrowler, getCurrentOrder, getCurrentCustomer, updateCurrentCustomer },
    dispatch
  );
};

class CustomerEdit extends Component {
  static propTypes = {
    currentOrder: PropTypes.object.isRequired, // mapStateToProps
    currentCustomer: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
    getCurrentOrder: PropTypes.func.isRequired, // mapDispatchToProps
    getCurrentCustomer: PropTypes.func.isRequired, // mapDispatchToProps
    updateCurrentCustomer: PropTypes.func.isRequired // mapDispatchToProps
  };

  componentDidMount() {
    const customerId = this.props.match.params.customer_id;
    this.props.getCurrentCustomer(customerId);
  }

  refreshCurrentCustomer = customer => {
    this.setState(customer);
  };

  updateState = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const {
      currentStore,
      currentOrder,
      getCurrentOrder,
      setGrowler,
      currentCustomer: customer,
      currentCustomer: { email }
    } = this.props;

    if (ValidateEmail(email)) {
      updateCustomer(customer)
        .then(res => {
          let kind, message;
          if (res.data.body.errors) {
            kind = 'warning';
            message = res.data.body.errors[0];
          } else {
            kind = 'success';
            message = 'Customer Updated';
            getCurrentCustomer(customer.id);
            getCurrentOrder(currentStore.id, currentOrder.id);
          }
          setGrowler({ kind, message });
        })
        .catch(err => {});
    } else {
      const kind = 'warning';
      const message = 'Email must be valid';
      this.props.setGrowler({ kind, message });
    }
  }

  render() {
    const { currentOrder: { id: currentOrderId } } = this.props;
    const backLink = `/orders/${currentOrderId}`;
    const {
      currentCustomer: {
        email,
        first_name,
        last_name,
        phone,
        street,
        unit,
        city,
        state_province,
        zip_code
      },
      updateCurrentCustomer
    } = this.props;

    return (
      <div>
        <Link to={backLink}>Back</Link>
        <form onSubmit={e => this.handleSubmit(e)}>
          <FormField
            value={email}
            fieldName={'email'}
            title={'Email'}
            onChange={updateCurrentCustomer}
          />

          <FormField
            value={first_name}
            fieldName={'first_name'}
            title={'First Name'}
            onChange={updateCurrentCustomer}
          />

          <FormField
            value={last_name}
            fieldName={'last_name'}
            title={'Last Name'}
            onChange={updateCurrentCustomer}
          />

          <FormField
            value={phone}
            fieldName={'phone'}
            title={'Phone'}
            onChange={updateCurrentCustomer}
          />

          <FormField
            value={street}
            fieldName={'street'}
            title={'Street'}
            onChange={updateCurrentCustomer}
          />

          <FormField
            value={unit}
            fieldName={'unit'}
            title={'Unit'}
            onChange={updateCurrentCustomer}
          />

          <FormField
            value={city}
            fieldName={'city'}
            title={'City'}
            onChange={updateCurrentCustomer}
          />

          <FormField
            value={state_province}
            fieldName={'state_province'}
            title={'State/Province'}
            onChange={updateCurrentCustomer}
          />

          <FormField
            value={zip_code}
            fieldName={'zip_code'}
            title={'Zip Code'}
            onChange={updateCurrentCustomer}
          />

          <input className="short-button " type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEdit);
