import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateCustomer,
  getCurrentCustomer,
  setGrowler,
  getCurrentOrder,
  updateCurrentCustomer,
} from '../../actions';

import { ValidateEmail } from '../../utils/validations';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import SectionHeader from '../SectionHeader.js';
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
    updateCurrentCustomer: PropTypes.func.isRequired, // mapDispatchToProps
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

  handleSubmit = e => {
    e.preventDefault();
    const {
      currentStore,
      currentOrder,
      getCurrentOrder,
      setGrowler,
      currentCustomer: customer,
      currentCustomer: { email },
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
  };

  render() {
    const {
      currentOrder: { id: currentOrderId },
      currentCustomer: {
        id,
        email,
        first_name,
        last_name,
        phone,
        street,
        unit,
        city,
        state_province,
        zip_code,
      },
      updateCurrentCustomer,
    } = this.props;

    const backLink = `/orders/${currentOrderId}`;
    const callback = e => this.handleSubmit(e);

    let headerText = `Customer / Edit`;
    if (id) {
      headerText = `Customer / Edit / #${id}`;
    }

    const formName = 'customer-edit-form';
    const containerClass = `${formName}-container`;
    const buttonContainerClass = `${formName}-button-container`;
    const buttonRowClass = `${formName}-button-row`;

    return (
      <div>
        <SectionHeader text={headerText} includeLink={false} />
        <Link to={backLink}>Back</Link>
        <div className={containerClass}>
          <form className={formName} onSubmit={callback}>
            <FormField
              value={email}
              fieldName={'email'}
              formName={formName}
              title={'Email: '}
              onChange={updateCurrentCustomer}
            />
            <FormField
              value={first_name}
              fieldName={'first_name'}
              formName={formName}
              title={'First Name: '}
              onChange={updateCurrentCustomer}
            />
            <FormField
              value={last_name}
              fieldName={'last_name'}
              formName={formName}
              title={'Last Name: '}
              onChange={updateCurrentCustomer}
            />
            <FormField
              value={phone}
              fieldName={'phone'}
              formName={formName}
              title={'Phone: '}
              onChange={updateCurrentCustomer}
            />
            <FormField
              value={street}
              fieldName={'street'}
              formName={formName}
              title={'Street: '}
              onChange={updateCurrentCustomer}
            />
            <FormField
              value={unit}
              fieldName={'unit'}
              formName={formName}
              title={'Unit: '}
              onChange={updateCurrentCustomer}
            />
            <FormField
              value={city}
              fieldName={'city'}
              formName={formName}
              title={'City: '}
              onChange={updateCurrentCustomer}
            />
            <FormField
              value={state_province}
              fieldName={'state_province'}
              formName={formName}
              title={'State/Province: '}
              onChange={updateCurrentCustomer}
            />
            <FormField
              value={zip_code}
              fieldName={'zip_code'}
              formName={formName}
              title={'Zip Code: '}
              onChange={updateCurrentCustomer}
            />
            <div className={buttonContainerClass}>
              <div className={buttonRowClass}>
                <input
                  className="standard-button"
                  type="submit"
                  value="Update"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEdit);
