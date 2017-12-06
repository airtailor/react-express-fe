import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser, setGrowler } from '../../actions';
import FormField from './../FormField';
import SectionHeader from './../SectionHeader';
import { ValidatePassword, ValidateEmail } from '../../utils/validations';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createUser, setGrowler }, dispatch);
};

class UsersNew extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      role: '',
      password: '',
      passwordConfirmation: '',
      submitDisabled: true,
    };
  }

  static propTypes = {
    createUser: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

  updateState = (key, value) => {
    this.setState({ [key]: value }, () => {
      const { password, passwordConfirmation, email } = this.state;
      if (password && passwordConfirmation) {
        this.validatePasswords(
          this.state.password,
          this.state.passwordConfirmation
        );
      }

      if (email) {
        this.validateEmail(this.state.email);
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { password, passwordConfirmation, email } = this.state;
    if (password === passwordConfirmation && email) {
      console.log('FIRING EVENT');
      debugger;
      this.props
        .createUser({
          email,
          password,
          password_confirmation: passwordConfirmation,
        })
        .then(res => {
          console.log('RES CAME BACK', res);
          debugger;
          const kind = 'success';
          const message = 'User Created!';
          this.props.setGrowler({ kind, message });
          this.setState({
            password: '',
            passwordConfirmation: '',
            submitDisabled: true,
          });
        })
        .catch(err => console.log('err', err));
    }
  };

  validatePasswords(password, passwordConfirmation) {
    if (password === passwordConfirmation) {
      if (ValidatePassword(password)) {
        this.setState({ submitDisabled: false });
        return;
      } else {
        const kind = 'warning';
        const message =
          'Please enter a valid password! It should be longer than 6 characters';
        this.props.setGrowler({ kind, message });
      }
    } else {
      const kind = 'warning';
      const message =
        'Your password confirmation did not match your chosen password.';
      this.props.setGrowler({ kind, message });
    }
    this.setState({ submitDisabled: true });
  }

  validateEmail(email) {
    if (ValidateEmail(email)) {
      this.setState({ submitDisabled: false });
      return;
    } else {
      const kind = 'warning';
      const message = 'Please enter a valid email!';
      this.props.setGrowler({ kind, message });
    }
    this.setState({ submitDisabled: true });
  }

  render() {
    const {
      name,
      email,
      role,
      password,
      passwordConfirmation,
      submitDisabled,
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
          // probably needs to be a selectRole
          <FormField
            value={role}
            type="role"
            fieldName={'role'}
            title={'Role:'}
            onChange={this.updateState}
          />
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
            disabled={submitDisabled}
            type="submit"
            value="Create User"
            className="short-button"
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersNew);
