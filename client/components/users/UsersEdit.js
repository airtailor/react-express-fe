import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updatePassword, setGrowler} from '../../actions';
import FormField from './../FormField';
import SectionHeader from './../SectionHeader';
import {ValidatePassword} from '../../utils/validations';

class UsersEdit extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      passwordConfirmation: '',
      submitDisabled: true,
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(key, value) {
    this.setState({[key]: value}, () => {
      this.validatePasswords(
        this.state.password,
        this.state.passwordConfirmation
      );
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {password, passwordConfirmation} = this.state;
    if (password === passwordConfirmation) {
      const id = this.props.user.user.id;
      this.props
        .updatePassword({
          id,
          password,
          password_confirmation: passwordConfirmation,
        })
        .then(res => {
          const kind = 'success';
          const message = 'Password Updated';
          this.props.setGrowler({kind, message});
          this.setState({
            password: '',
            passwordConfirmation: '',
            submitDisabled: true,
          });
        })
        .catch(err => console.log('err', err));
    }
  }

  validatePasswords(password, passwordConfirmation) {
    if (password === passwordConfirmation) {
      if (ValidatePassword(password)) {
        this.setState({submitDisabled: false});
        return;
      }
    }
    this.setState({submitDisabled: true});
  }

  render() {
    const {password, passwordConfirmation, submitDisabled} = this.state;
    return (
      <div>
        <h3>Edit User</h3>
        <form onSubmit={this.handleSubmit}>
          <FormField
            value={password}
            type="password"
            fieldName={'password'}
            title={'Reset Password:'}
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
            value="Update Password"
            className="small-button"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updatePassword, setGrowler}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersEdit);
