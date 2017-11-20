import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ValidatePhone} from '../../../../utils/validations';
import {formatPhone} from '../../../../utils/format';
import FormField from '../../../FormField';
import {
  findOrCreateCustomer,
  setLoader,
  removeLoader,
  setGrowler,
  updateCartCustomerInfo,
} from '../../../../actions';

class FindCustomerByPhone extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      customer: null,
    };
    this.updatePhone = this.updatePhone.bind(this);
  }

  updatePhone(field, phone) {
    this.setState({
      [field]: phone,
    });
  }

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
      updateCustomerInfo,
      updateCustomerExists,
      updateCartCustomerInfo,
    } = this.props;

    setLoader();
    findOrCreateCustomer({phone}).then(res => {
      removeLoader();

      const {body: {status, id}, body: customer} = res.data;

      if (status === 404) {
        updateCustomerInfo('phone', phone);
        updateCustomerExists(false);
      } else if (id) {
        const kind = 'success';
        const message = 'Found Customer';
        setGrowler({kind, message});
        updateCartCustomerInfo(customer);
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {setLoader, removeLoader, setGrowler, updateCartCustomerInfo},
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(FindCustomerByPhone);