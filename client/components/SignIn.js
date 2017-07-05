import React, { Component } from 'react';
import { ValidateEmail, ValidatePassword } from '../utils/validations';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userSignIn } from '../actions/';

class SignIn extends Component {
  constructor(){
    super();
    this.state={
      email: {
        text: '',
        valid: false
      },
      password: {
        text: '',
        valid: false
      },
      buttonDisabled: true,
      errors: ''
    }
  }

  signIn(e){
    e.preventDefault();
    this.props.userSignIn(this.state.email.text, this.state.password.text)
    .then((res) => {
      console.log('res', res);
    })
    .catch((err) => {
      console.log('err', err);
    });
  }

  updateInputText(input){
    this.setState({[input.name]: { text: input.value}}, () => {
      this.validateInputs(this.state);
    });
  }

  validateInputs(state){
    const { email, password } = state;
    if (ValidateEmail(email.text) && ValidatePassword(password.text)) {
      this.setState({
        email: {text: email.text, valid: true},
        password: {text: password.text, valid: true}
      });
      this.updateButtonStatus(false);
    } else {
      this.updateButtonStatus(true);
    }
  }

  updateButtonStatus(bool){
    this.setState({buttonDisabled: bool});
  }

  render() {
    console.log('user', this.props.currentUser);
    console.log('storage', JSON.parse(localStorage.AirTailorToken));
    const {buttonDisabled, email, password} = this.state;
    if (this.props.authenticated){
      return (
        <h1>Hi {this.props.currentUser.email}</h1>
      );
    }
    else { 
      return (
        <div>
            <h5> Sign In </h5>
            <form onSubmit={(e) => this.signIn(e)}>
              <label>
                Email:
                <input
                  autoFocus={true}
                  value={email.text}
                  name="email"
                  onChange={(e) => this.updateInputText(e.target)} />
              </label>
              <label>
                Password:
                <input
                  value={password.text}
                  name="password"
                  onChange={(e) => this.updateInputText(e.target)}
                  type='password'/>
              </label>
              <input disabled={buttonDisabled} type="submit" value="Submit" />
            </form>
        </div>
      );
   }
  }
}

const mapStateToProps = (store) => {
  return {
    authenticated: store.currentUser.isAuthenticated,
    currentUser: store.currentUser.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({userSignIn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
//export default SignIn;
