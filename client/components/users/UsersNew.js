import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { createUser, setGrowler } from '../../actions';
import FormField from './../FormField';
import SectionHeader from './../SectionHeader';
import { ValidatePassword, ValidateEmail } from '../../utils/validations';

import SelectRole from './SelectRole';
import SelectStore from './SelectStore';

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setGrowler }, dispatch);
};

class UsersNew extends Component {
  constructor() {
    super();
    this.state = this.initialStateObject();
  }

  static propTypes = {
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

  initialStateObject() {
    return {
      name: '',
      email: '',
      role: '',
      storeId: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  updateState = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { password, passwordConfirmation, email, role, storeId } = this.state;

    const emailIsValid = this.validateEmail(email);
    const passwordIsValid = this.validatePasswords(
      password,
      passwordConfirmation
    );
    if (emailIsValid && passwordIsValid) {
      createUser({
        name,
        store_id: storeId,
        email,
        password,
        password_confirmation: passwordConfirmation,
        role,
      })
        .then(res => {
          // error logging
          if (res.data === 422) {
            const kind = 'warning';
            const message =
              "User was not created. Make sure they don't already exist in the database.";
            this.props.setGrowler({ kind, message });
          } else {
            const kind = 'success';
            const message = 'User Created!';
            this.props.setGrowler({ kind, message });
            this.setState(this.initialStateObject());
          }
        })
        .catch(err => console.log('err', err));
    }
  };

  validatePasswords(password, passwordConfirmation) {
    if (password === passwordConfirmation) {
      if (ValidatePassword(password)) {
        return true;
      } else {
        const kind = 'warning';
        const message =
          'Please enter a valid password! It should be longer than 6 characters';
        this.props.setGrowler({ kind, message });
        return false;
      }
    } else {
      const kind = 'warning';
      const message =
        'Your password confirmation did not match your chosen password.';
      this.props.setGrowler({ kind, message });
      return false;
    }
  }

  validateEmail(email) {
    if (ValidateEmail(email)) {
      return true;
    } else {
      const kind = 'warning';
      const message = 'Please enter a valid email!';
      this.props.setGrowler({ kind, message });
      return false;
    }
  }

  render() {
    const {
      name,
      email,
      role,
      password,
      storeId,
      passwordConfirmation,
    } = this.state;
    return (
      <div>
        <SectionHeader includeLink={false} />
        <h3>Create User</h3>
        <form onSubmit={this.handleSubmit}>
          <FormField
            value={name}
            type="name"
            fieldName={'name'}
            title={'Name:'}
            onChange={this.updateState}
          />
          <FormField
            value={email}
            type="email"
            fieldName={'email'}
            title={'Email:'}
            onChange={this.updateState}
          />
          <SelectRole role={role} onChange={this.updateState} />
          <SelectStore storeId={storeId} onChange={this.updateState} />
          <FormField
            value={password}
            type="password"
            fieldName={'password'}
            title={'Password:'}
            onChange={this.updateState}
          />
          <FormField
            value={passwordConfirmation}
            fieldName={'passwordConfirmation'}
            title={'Password Confirmation:'}
            type="password"
            onChange={this.updateState}
          />
          <input
            type="submit"
            disabled={false}
            value="Create User"
            className="short-button"
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersNew);
