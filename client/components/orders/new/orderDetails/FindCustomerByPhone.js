import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {
  findOrCreateCustomer,
  setLoader,
  removeLoader,
  setGrowler,
  setCartCustomer,
  updateCartCustomer,
} from '../../../../actions';
import {ValidatePhone} from '../../../../utils/validations';
import {formatPhone} from '../../../../utils/format';

import FormField from '../../../FormField';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {setLoader, removeLoader, setGrowler, setCartCustomer, updateCartCustomer},
    dispatch
  );
};

class FindCustomerByPhone extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
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

  updatePhone = (field, phone) => {
    this.setState({
      [field]: phone,
    });
  };

  renderSubmitButton(phone) {
    if (ValidatePhone(phone)) {
      return (
        <div>
          <input
            type="submit"
            value="Submit"
            className="short-button"
            onClick={() => this.searchForCustomerByPhone(phone)}
          />
        </div>
      );
    }
  }

  searchForCustomerByPhone(phone) {
    const {
      setLoader,
      removeLoader,
      setGrowler,
      updateCustomerExists,
      setCartCustomer,
      updateCartCustomer,
    } = this.props;

    setLoader();
    findOrCreateCustomer({phone}).then(res => {
      removeLoader();

      const {body: {errors, id}, body: customer} = res.data;

      if (errors && errors.status === 404) {
        updateCartCustomer('phone', phone);
        updateCustomerExists(false);
      } else if (id) {
        const kind = 'success';
        const message = 'Found Customer';
        setGrowler({kind, message});
        setCartCustomer(customer);
        updateCustomerExists(true);
      }
    });
  }

  render() {
    const {phone, customer} = this.state;
    const displayPhone = formatPhone(phone);
    return (
      <div>
        <FormField
          // phone.replace regex taken from https://stackoverflow.com/a/37066380/4859818 - JCM
          // phone.replace(/^(\d{3})(\d{3})(\d)+$/, '($1) $2-$3')
          value={displayPhone}
          fieldName={'phone'}
          title={'Search for Customer by Mobile Phone'}
          className="order-details-input"
          onChange={this.updatePhone}
        />
        {this.renderSubmitButton(this.state.phone)}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(FindCustomerByPhone);
