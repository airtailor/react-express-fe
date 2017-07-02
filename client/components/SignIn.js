import React, { Component } from 'react';
import { ValidateEmail, ValidatePassword } from '../utils/validations';

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
    console.log(`login in with these credentials: \n email: ${this.state.email.text} password: ${this.state.password.text}`);
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
    const {buttonDisabled, email, password} = this.state;

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

export default SignIn;
