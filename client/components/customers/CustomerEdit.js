import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import {
  updateCustomer,
  getCurrentCustomer,
  setGrowler,
  getCurrentOrder,
} from '../../actions';

import {ValidateEmail} from '../../utils/validations';

import FormField from '../FormField.js';

const mapStateToProps = store => {
  return {
    currentOrder: store.currentOrder,
    currentCustomer: store.currentCustomer,
    currentStore: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {setGrowler, getCurrentOrder, getCurrentCustomer},
    dispatch
  );
};

class CustomerEdit extends Component {
  static propTypes = {
    currentOrder: PropTypes.object.isRequired,
    currentCustomer: PropTypes.object.isRequired,
    currentStore: PropTypes.object.isRequired,
    setGrowler: PropTypes.func.isRequired,
    getCurrentOrder: PropTypes.func.isRequired,
    getCurrentCustomer: PropTypes.func.isReuired,
  };

  constructor() {
    super();
    this.state = {
      id: '',
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
      addresses: [
        {
          unit: '',
          street: '',
          city: '',
          zip_code: '',
          state_province: '',
        },
      ],
    };

    this.updateState = this.updateState.bind(this);
    this.refreshCurrentCustomer = this.refreshCurrentCustomer.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }

  componentDidMount() {
    const customerId = this.props.match.params.customer_id;
    this.props.getCurrentCustomer(customerId).then(res => {
      this.refreshCurrentCustomer(res);
    });
  }

  refreshCurrentCustomer(customer) {
    this.setState(customer);
  }

  updateState(field, value) {
    this.setState({[field]: value});
  }

  updateAddress(field, value) {
    let address = this.state.addresses[0];
    address[field] = value;
    this.setState({addresses: [address]});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      currentStore,
      currentOrder,
      getCurrentOrder,
      setGrowler,
    } = this.props;
    const {email} = this.state;

    const {addresses} = this.state;

    const customer = {
      id: this.state.id,
      address: addresses[0],
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email,
    };

    if (ValidateEmail(email)) {
      updateCustomer({customer})
        .then(res => {
          let kind, message;
          if (res.data.body.errors) {
            kind = 'warning';
            message = res.data.body.errors[0];
          } else {
            kind = 'success';
            message = 'Customer Updated';
            getCurrentOrder(currentStore.id, currentOrder.id);
          }
          setGrowler({kind, message});
        })
        .catch(err => {});
    } else {
      const kind = 'warning';
      const message = 'Email must be valid';
      this.props.setGrowler({kind, message});
    }
  }

  render() {
    const {currentOrder: {id: currentOrderId}} = this.props;
    const backLink = `/orders/${currentOrderId}`;
    const {email, first_name, last_name, phone} = this.state;

    const {
      street = '',
      unit = '',
      city = '',
      state_province = '',
      zip_code = '',
    } = this.state.addresses[0];

    return (
      <div>
        <Link to={backLink}>Back</Link>
        <form onSubmit={e => this.handleSubmit(e)}>
          <FormField
            value={email}
            fieldName={'email'}
            title={'Email'}
            onChange={this.updateState}
          />

          <FormField
            value={first_name}
            fieldName={'first_name'}
            title={'First Name'}
            onChange={this.updateState}
          />

          <FormField
            value={last_name}
            fieldName={'last_name'}
            title={'Last Name'}
            onChange={this.updateState}
          />

          <FormField
            value={phone}
            fieldName={'phone'}
            title={'Phone'}
            onChange={this.updateState}
          />

          <FormField
            value={street}
            fieldName={'street'}
            title={'Street'}
            onChange={this.updateAddress}
          />

          <FormField
            value={unit}
            fieldName={'unit'}
            title={'Unit'}
            onChange={this.updateAddress}
          />

          <FormField
            value={city}
            fieldName={'city'}
            title={'City'}
            onChange={this.updateAddress}
          />

          <FormField
            value={state_province}
            fieldName={'state_province'}
            title={'State/Province'}
            onChange={this.updateAddress}
          />

          <FormField
            value={zip_code}
            fieldName={'zip_code'}
            title={'Zip Code'}
            onChange={this.updateAddress}
          />

          <input className="short-button " type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEdit);
