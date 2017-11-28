import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

import {
  createCompany,
  setLoader,
  removeLoader,
  setGrowler,
} from '../../../actions';
import SectionHeader from '../../SectionHeader';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import FormField from '../../FormField';

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setLoader,
      removeLoader,
      setGrowler,
    },
    dispatch
  );
};

class CompaniesNew extends Component {
  static propTypes = {
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

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
    this.props.setLoader();
    const company = this.state;
    createCompany({ company })
      .then(res => {
        this.props.removeLoader();
        console.log(res);
        const errors = res.data.body.errors;
        if (isEmpty(errors)) {
          this.setState({ name: '' });
          this.props.setGrowler({
            kind: 'success',
            message: 'Company created!',
          });
        } else {
          this.props.setGrowler({
            kind: 'warning',
            message: errors.message,
          });
        }
      })
      .catch(err => console.log('err', err));
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
