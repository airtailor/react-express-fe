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
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    companies: store.companyList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getCompanies }, dispatch);
};

import SectionHeader from '../SectionHeader';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    companies: store.companyList,
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
  static propTypes = {
    companies: PropTypes.array.isRequired, // mapStateToProps
    getCompanies: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor(props) {
    super();
    this.state = this.initialStateObject();
  }

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
    };
  }

  componentDidMount() {
    this.props.setLoader();
    this.props
      .getCompanies()
      .then(() => this.props.removeLoader())
      .catch(err => console.log(err));
  }

<<<<<<< HEAD
  updateState = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const store = this.state;
    createStore({ store }).catch(err => console.log('err', err));
=======
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

  emptyParamsPresent = () => {
    const store = this.state;
    const { address } = store;
    const missingStoreParams = !this.hasAllParams(store);
    const missingAddressParams = !this.hasAllParams(address);
    return missingStoreParams && missingAddressParams;
  };

  handleSubmit = e => {
    e.preventDefault();
    const missingParams = this.emptyParamsPresent();
    if (!missingParams) {
      const store = this.state;
      this.props.setLoader();
      createStore({ store })
        .then(res => {
          this.props.removeLoader();
          console.log(res);
          const errors = res.data.body.errors;
          if (isEmpty(errors)) {
            this.setState(this.initialStateObject());
            this.props.setGrowler({
              kind: 'success',
              message: 'New Store Created!',
            });
          } else {
            if (errors['invalid_address']) {
              this.props.setGrowler({
                kind: 'warning',
                message: 'Invalid Address! Check your inputs.',
              });
            }
          }
        })
        .catch(err => console.log(err));
    } else {
      const errorString = 'Please enter all fields before submitting.';
      this.props.setGrowler({ kind: 'warning', message: errorString });
    }
>>>>>>> sandbox
  };

  render() {
    console.log(this.state);
    const { companies } = this.props;
    const {
      company_id,
      name,
      phone,
<<<<<<< HEAD
      street,
      street_two,
      city,
      state_province,
      zip_code,
    } = this.state;
    const { companies } = this.props;
    const updateState = this.updateState;
    const submit = e => this.handleSubmit(e);

    if (!isEmpty(companies)) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>Store New</h3>
=======
      address: { type, street, street_two, city, state_province, zip_code },
    } = this.state;

    const updateStoreState = this.updateStoreState;
    const updateAddressState = this.updateAddressState;
    const submit = e => this.handleSubmit(e);
    const headerText = 'Stores / New';

    if (isEmpty(companies)) {
      return <SectionHeader text={headerText} includeLink={false} />;
    } else {
      return (
        <div>
          <SectionHeader text={headerText} includeLink={false} />
>>>>>>> sandbox
          <form onSubmit={submit}>
            <FormField
              value={name}
              fieldName={'name'}
              title={'Name: '}
<<<<<<< HEAD
              onChange={updateState}
=======
              onChange={updateStoreState}
>>>>>>> sandbox
            />

            <FormField
              value={phone}
              fieldName={'phone'}
              title={'Phone: '}
<<<<<<< HEAD
              onChange={updateState}
=======
              onChange={updateStoreState}
>>>>>>> sandbox
            />

            <FormField
              value={street}
              fieldName={'street'}
              title={'Street:'}
<<<<<<< HEAD
              onChange={updateState}
=======
              onChange={updateAddressState}
>>>>>>> sandbox
            />

            <FormField
              value={street_two}
              fieldName={'street_two'}
              title={'Unit:'}
<<<<<<< HEAD
              onChange={updateState}
=======
              onChange={updateAddressState}
>>>>>>> sandbox
            />

            <FormField
              value={city}
              fieldName={'city'}
              title={'City:'}
<<<<<<< HEAD
              onChange={updateState}
=======
              onChange={updateAddressState}
>>>>>>> sandbox
            />

            <FormField
              value={state_province}
              fieldName={'state_province'}
              title={'State:'}
<<<<<<< HEAD
              onChange={updateState}
=======
              onChange={updateAddressState}
>>>>>>> sandbox
            />

            <FormField
              value={zip_code}
              fieldName={'zip_code'}
              title={'Zip:'}
<<<<<<< HEAD
              onChange={updateState}
=======
              onChange={updateAddressState}
>>>>>>> sandbox
            />

            <FormSelect
              value={company_id}
              options={companies}
              fieldName={'company_id'}
              title={'Company:'}
<<<<<<< HEAD
              onChange={updateState}
=======
              onChange={updateStoreState}
>>>>>>> sandbox
            />

            <FormSelect
              value={type}
              options={storeTypes}
              fieldName={'type'}
              title={'Store Type:'}
<<<<<<< HEAD
              onChange={updateState}
=======
              onChange={updateStoreState}
>>>>>>> sandbox
            />

            <input
              type="submit"
              className="Standard Button"
              value="Create New Store"
            />
          </form>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresNew);
