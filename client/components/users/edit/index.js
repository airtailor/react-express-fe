import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePassword, setGrowler } from '../../../actions';
import FormField from '../../FormField';
import WithSectionHeader from '../../HOC/WithSectionHeader';
import { ValidatePassword } from '../../../utils/validations';
import EditPassword from './EditPassword';
import SelectRole from '../SelectRole';

const mapStateToProps = store => {
  return {
    user: store.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updatePassword, setGrowler }, dispatch);
};

class UsersEdit extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      passwordConfirmation: '',
      submitDisabled: true,
    };
  }

  updateState = (key, value) => {
    this.setState({ [key]: value }, () => {
      this.validatePasswords(
        this.state.password,
        this.state.passwordConfirmation
      );
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { password, passwordConfirmation } = this.state;
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
      }
    }
    this.setState({ submitDisabled: true });
  }

  render() {
    const { password, passwordConfirmation, submitDisabled } = this.state;
    return (
      <div>
        <h2> Edit User </h2>
        <p> Full Functionality Available Soon </p>
        {/*
          <SelectRole {...this.props} />
          <EditPassword {...this.props} />;
        */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithSectionHeader(UsersEdit)
);
