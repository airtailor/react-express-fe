import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getCompanies,
  createStore,
  setLoader,
  removeLoader,
  setGrowler,
} from '../../actions';
import { storeTypes } from '../../utils/constants';

import FormField from '../FormField';
import FormSelect from '../FormSelect';
import PropTypes from 'prop-types';
import WithSectionHeader from '../HOC/WithSectionHeader';
import isEmpty from 'lodash/isEmpty';
import SelectTailor from '../orders/orderForms/SelectTailor';

const mapStateToProps = store => {
  return {
    companies: store.companyList,
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCompanies,
      setLoader,
      removeLoader,
      setGrowler,
    },
    dispatch
  );
};

class StoresNew extends Component {
  constructor() {
    super();
    this.state = this.initialStateObject();
  }

  static propTypes = {
    companies: PropTypes.array.isRequired, // mapStateToProps
    getCompanies: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

  initialStateObject() {
    return {
      company_id: '',
      name: '',
      primary_contact_id: '',
      phone: '',
      type: '',
      address: {
        street: '',
        street_two: '',
        city: '',
        state_province: '',
        zip_code: '',
      },
      default_tailor_id: 0,
    };
  }

  componentDidMount() {
    this.props.setLoader();
    this.props
      .getCompanies()
      .then(() => this.props.removeLoader())
      .catch(err => console.log(err));
  }

  renderTailorSelect(tailorId, admin) {
    if (admin) {
      return (
        <SelectTailor
          onChange={this.updateStoreState}
          fieldName="default_tailor_id"
          headerText="Set Default Tailor"
          tailorId={tailorId}
        />
      );
    }
  }

  updateStoreState = (field, value) => {
    this.setState({ [field]: value });
  };

  updateAddressState = (field, value) => {
    const { address } = this.state;
    address[field] = value;
    this.setState({ address });
  };

  hasAllParams(obj) {
    return isEmpty(Object.keys(obj).filter(k => k == ''));
  }

  retailerMissingDefaultTailor() {
    const { type, default_tailor_id } = this.state;
    if (type === 'retailer' && default_tailor_id < 1) {
      return true;
    } else {
      return false;
    }
  }

  emptyParamsPresent = () => {
    const store = this.state;
    const { address } = store;
    const missingStoreParams = !this.hasAllParams(store);
    const missingAddressParams = !this.hasAllParams(address);
    const missingDefaultTailor = !this.retailerMissingDefaultTailor();
    return missingStoreParams && missingAddressParams && missingDefaultTailor;
  };

  handleSubmit = e => {
    e.preventDefault();
    const { setLoader, removeLoader, setGrowler } = this.props;
    const missingParams = this.emptyParamsPresent();

    if (!missingParams) {
      const store = this.state;
      setLoader();
      createStore({ store })
        .then(res => {
          removeLoader();

          const errors = res.data.body.errors;
          if (isEmpty(errors)) {
            this.setState(this.initialStateObject());

            setGrowler({
              kind: 'success',
              message: 'New Store Created!',
            });
          } else {
            if (errors['invalid_address']) {
              setGrowler({
                kind: 'warning',
                message: 'Invalid Address! Check your inputs.',
              });
            }
          }
        })
        .catch(err => console.log(err));
    } else {
      const errorString = 'Please enter all fields before submitting.';
      setGrowler({ kind: 'warning', message: errorString });
    }
  };

  render() {
    const { companies, userRoles: { admin } } = this.props;
    const {
      company_id,
      type,
      name,
      phone,
      address: { street, street_two, city, state_province, zip_code },
      default_tailor_id,
    } = this.state;

    const tailorId = default_tailor_id ? default_tailor_id : '';

    const updateStoreState = this.updateStoreState;
    const updateAddressState = this.updateAddressState;
    const submit = e => this.handleSubmit(e);

    if (isEmpty(companies)) {
      return <div />;
    } else {
      return (
        <div>
          <form onSubmit={submit}>
            <FormField
              value={name}
              fieldName={'name'}
              title={'Name: '}
              onChange={updateStoreState}
            />

            <FormField
              value={phone}
              fieldName={'phone'}
              title={'Phone: '}
              onChange={updateStoreState}
            />

            <FormField
              value={street}
              fieldName={'street'}
              title={'Street:'}
              onChange={updateAddressState}
            />

            <FormField
              value={street_two}
              fieldName={'street_two'}
              title={'Unit:'}
              onChange={updateAddressState}
            />

            <FormField
              value={city}
              fieldName={'city'}
              title={'City:'}
              onChange={updateAddressState}
            />

            <FormField
              value={state_province}
              fieldName={'state_province'}
              title={'State:'}
              onChange={updateAddressState}
            />

            <FormField
              value={zip_code}
              fieldName={'zip_code'}
              title={'Zip:'}
              onChange={updateAddressState}
            />

            <FormSelect
              value={company_id}
              options={companies}
              fieldName={'company_id'}
              title={'Company:'}
              onChange={updateStoreState}
            />

            <FormSelect
              value={type}
              options={storeTypes}
              fieldName={'type'}
              title={'Store Type:'}
              onChange={updateStoreState}
            />

            {this.renderTailorSelect(tailorId, admin)}

            <input
              type="submit"
              className="short-button"
              value="Create New Store"
            />
          </form>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithSectionHeader(StoresNew)
);
