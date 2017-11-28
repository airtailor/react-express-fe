import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

import { createCompany } from '../../../actions';
import isEmpty from 'lodash/isEmpty';
import SectionHeader from '../../SectionHeader';
import PropTypes from 'prop-types';

import FormField from '../../FormField';

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

class CompaniesNew extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
    };
  }

  updateState = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const company = this.state;
    createCompany({ company }).catch(err => console.log('err', err));
  };

  render() {
    const { name, hq_store_id } = this.state;
    const headerText = 'Companies / New';
    const submit = e => this.handleSubmit(e);
    const setField = this.updateState;

    return (
      <div>
        <SectionHeader text={headerText} includeLink={false} />
        <form onSubmit={submit}>
          <FormField
            value={name}
            fieldName={'name'}
            title={'Name: '}
            onChange={setField}
          />
          <input
            type="submit"
            className="standard-button"
            value="Create New Company"
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesNew);
