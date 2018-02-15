import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import { getCurrentCustomer, setGrowler } from '../../actions';

import { ValidateEmail } from '../../utils/validations';

import FormField from '../FormField.js';

const mapStateToProps = store => {
  return {
    currentCustomer: store.currentCustomer,
    currentStore: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setGrowler, getCurrentCustomer }, dispatch);
};

class CustomerShow extends Component {
  static propTypes = {
    currentCustomer: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
    getCurrentOrder: PropTypes.func.isRequired, // mapDispatchToProps
    getCurrentCustomer: PropTypes.func.isRequired, // mapDispatchToProps
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

  render() {
    console.log('customer show', this.props);
    const {
      currentCustomer: {
        email,
        first_name,
        last_name,
        phone,
        street,
        street_two,
        city,
        state_province,
        zip_code,
      },
    } = this.props;

    return (
      <div>
        <h1>HIii </h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerShow);
