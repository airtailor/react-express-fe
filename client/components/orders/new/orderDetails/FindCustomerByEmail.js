import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  findOrCreateCustomer,
  setLoader,
  removeLoader,
  setGrowler,
  setCartCustomer,
  updateCartCustomer,
} from '../../../../actions';
import { ValidateEmail } from '../../../../utils/validations';
import { formatEmail } from '../../../../utils/format';

import FormField from '../../../FormField';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setLoader,
      removeLoader,
      setGrowler,
      setCartCustomer,
      updateCartCustomer,
    },
    dispatch
  );
};

class FindCustomerByEmail extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      customer: null,
    };
  }

  static propTypes = {
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
    setCartCustomer: PropTypes.func.isRequired, // mapDispatchToProps
    updateCustomerExists: PropTypes.func.isRequired, // parentComponent
  };

  updateEmail = (field, email) => {
    this.setState({
      [field]: email,
    });
  };

  renderSubmitButton(email) {
    if (ValidateEmail(email)) {
      return (
        <div>
          <input
            type="submit"
            value="Submit"
            className="short-button"
            onClick={() => this.searchForCustomerByEmail(email)}
          />
          <br />
          <br />
        </div>
      );
    }
  }

  searchForCustomerByEmail(email) {
    const formattedEmail = formatEmail(email);
    const {
      setLoader,
      removeLoader,
      setGrowler,
      updateCustomerExists,
      setCartCustomer,
      updateCartCustomer,
    } = this.props;

    setLoader();
    findOrCreateCustomer({ email: formattedEmail }).then(res => {
      removeLoader();

      const { body: { status, id }, body: customer } = res.data;

      if (status && status === 404) {
        updateCartCustomer('email', formattedEmail);
        updateCustomerExists(false);
      } else if (id) {
        const kind = 'success';
        const message = 'Found Customer';
        setGrowler({ kind, message });
        setCartCustomer(customer);
        updateCustomerExists(true);
      }
    });
  }

  render() {
    const { email, customer } = this.state;
    return (
      <div>
        <FormField
          value={email}
          fieldName={'email'}
          title={'Search for Customer by Email'}
          className="order-details-input"
          onChange={this.updateEmail}
        />
        {this.renderSubmitButton(this.state.email)}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(FindCustomerByEmail);
