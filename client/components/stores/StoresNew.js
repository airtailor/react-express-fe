import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCompanies, createStore } from '../../actions';
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

class StoresNew extends Component {
  static propTypes = {
    companies: PropTypes.array.isRequired, // mapStateToProps
    getCompanies: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor(props) {
    super();
    this.state = {
      company_id: '',
      type: '',
      name: '',
      primary_contact_id: '',
      phone: '',
      street: '',
      street_two: '',
      city: '',
      state_province: '',
      zip_code: '',
    };
  }

  componentDidMount() {
    this.props.getCompanies().catch(err => console.log(err));
  }

  updateState = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const store = this.state;
    createStore({ store }).catch(err => console.log('err', err));
  };

  render() {
    const {
      company_id,
      type,
      name,
      phone,
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
          <form onSubmit={submit}>
            <FormField
              value={name}
              fieldName={'name'}
              title={'Name: '}
              onChange={updateState}
            />

            <FormField
              value={phone}
              fieldName={'phone'}
              title={'Phone: '}
              onChange={updateState}
            />

            <FormField
              value={street}
              fieldName={'street'}
              title={'Street:'}
              onChange={updateState}
            />

            <FormField
              value={street_two}
              fieldName={'street_two'}
              title={'Unit:'}
              onChange={updateState}
            />

            <FormField
              value={city}
              fieldName={'city'}
              title={'City:'}
              onChange={updateState}
            />

            <FormField
              value={state_province}
              fieldName={'state_province'}
              title={'State:'}
              onChange={updateState}
            />

            <FormField
              value={zip_code}
              fieldName={'zip_code'}
              title={'Zip:'}
              onChange={updateState}
            />

            <FormSelect
              value={company_id}
              options={this.props.companies}
              fieldName={'company_id'}
              title={'Company:'}
              onChange={updateState}
            />

            <FormSelect
              value={type}
              options={storeTypes}
              fieldName={'type'}
              title={'Store Type:'}
              onChange={updateState}
            />

            <input type="submit" value="Create New Store" />
          </form>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresNew);
