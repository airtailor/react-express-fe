import React, { Component } from 'react';
import { ValidateEmail, ValidatePassword, ValidatePasswordConfirmation } from '../utils/validations';
import { SignUpRequest, SignUpStatusResponse } from '../utils/requests';
import FlashMessage from './FlashMessage';

class SignUp extends Component {
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
      passwordConfirmation: {
        text: '',
        valid: false
      },
      buttonDisabled: true,
      successMessage: '',
      errorMessage: ''
    }
  }

  signUp(e) {
    e.preventDefault();
    this.updateMessage({name: 'successMessage', value: ''});
    this.updateMessage({name: 'errorMessage', value: ''});

    const { email, password, passwordConfirmation } = this.state;

    SignUpRequest(email.text, password.text, passwordConfirmation.text)
    .then(res => {
      if (res.data.error){
        const message = res.data.error[0];
        this.updateMessage({name: 'errorMessage', value: message});
      } else {
        const message = SignUpStatusResponse(res.status);
        this.updateMessage({name: "successMessage", value: message});
      }
    })
    .catch(err => {;
      console.log(err);
    });
  }

  updateInputText(input){
    this.setState({[input.name]: { text: input.value}}, () => {
      this.validateInputs(this.state);
    });
  }

  updateMessage(obj){
    this.setState({[obj.name]: obj.value});
  }

  validateInputs(state){
    const { email, password, passwordConfirmation } = state;

    if (ValidateEmail(email.text) &&
      ValidatePassword(password.text) &&
      ValidatePasswordConfirmation(password.text, passwordConfirmation.text)) {

      this.setState({
        email: {text: email.text, valid: true},
        password: {text: password.text, valid: true},
        passwordConfirmation: {text: passwordConfirmation.text, valid: true}
      });
      this.updateButtonStatus(false);

    } else {
      this.updateButtonStatus(true);
    }
  }

  updateButtonStatus(bool){
    this.setState({buttonDisabled: bool});
  }

  renderMessages(){
    const { successMessage, errorMessage } = this.state;
    let message;
    if (successMessage){
      message = <FlashMessage type='success' message={successMessage} />
    } else if (errorMessage){
      message = <FlashMessage type='error' message={errorMessage} />
    }
    return message;
  }

  render() {
    const {buttonDisabled, email, password, passwordConfirmation} = this.state;
    return (
      <div>
          { this.renderMessages() }
          <h5> Sign Up </h5>
          <form onSubmit={(e) => this.signUp(e)}>
            <label>
              Email:
              <input
                autoFocus={true}
                value={email.text}
                name="email"
                onChange={(e) => this.updateInputText(e.target) } />
            </label>
            <label>
              Password:
              <input
                value={password.text}
                name="password"
                onChange={(e) => this.updateInputText(e.target) }
                type='password'/>
            </label>
            <label>
              Password Confirmation:
              <input
                value={passwordConfirmation.text}
                name="passwordConfirmation"
                onChange={(e) => this.updateInputText(e.target) }
                type='password'/>
            </label>
            <input disabled={buttonDisabled} type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default SignUp;
// SignUp.propTypes = {
//   userSignUpRequest: React.PropTypes.func.isRequired
// }

// function mapStateToProps(store){
//   return {
//     currentUser: store.currentUser
//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({userSignUpRequest}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
