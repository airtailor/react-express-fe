import React, { Component } from 'react';
import { ValidateEmail, ValidatePassword } from '../../utils/validations';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userSignIn, setGrowler } from '../../actions';
import LogoMessage from './../LogoMessage';
import Footer from '../footer';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        text: '',
        valid: false,
      },
      password: {
        text: '',
        valid: false,
      },
    };
  }

  handleInvalidCredentials() {
    const kind = 'warning';
    const message = 'Email/password combination is incorrect. Try again!';
    this.props.setGrowler({ kind, message });
  }

  signIn(e) {
    e.preventDefault();
    const {
      email: { text: emailText, valid: emailValid },
      password: { text: passwordText, valid: passwordValid },
    } = this.state;

    if (!emailValid || !passwordValid) {
      this.handleInvalidCredentials();
      return;
    }

    this.props
      .userSignIn(emailText, passwordText)
      .then(res => {
        if (res.errors) {
          this.handleInvalidCredentials();
        }
      })
      .catch(err => console.log('err', err));
  }

  updateInputText(input) {
    this.setState({ [input.name]: { text: input.value } }, () => {
      this.validateInputs(this.state);
    });
  }

  validateInputs(state) {
    const { email, password } = state;
    if (ValidateEmail(email.text) && ValidatePassword(password.text)) {
      this.setState({
        email: { text: email.text, valid: true },
        password: { text: password.text, valid: true },
      });
    } else {
    }
  }

  render() {
    const { email, password } = this.state;
    if (this.props.authenticated) {
      return <h1>Hi {this.props.currentUser.email}</h1>;
    } else {
      return (
        <div className="form-container">
          <LogoMessage
            className="sign-in-logo"
            text="Welcome, you can log in securely below."
          />
          <form onSubmit={e => this.signIn(e)}>
            <input
              className="form-input"
              autoFocus={true}
              value={email.text}
              name="email"
              placeholder="Email"
              type="email"
              onChange={e => this.updateInputText(e.target)}
            />
            <input
              className="form-input"
              value={password.text}
              name="password"
              onChange={e => this.updateInputText(e.target)}
              placeholder="Password"
              type="password"
            />
            <input type="submit" value="Log In" className="signin-button" />
            <a
              className="forgot-password link"
              href="mailto:brian@airtailor.com?&subject=Forgot%20Password"
            >
              Forgot your password?
            </a>
          </form>
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = store => {
  return {
    authenticated: store.currentUser.isAuthenticated,
    currentUser: store.currentUser.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userSignIn, setGrowler }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
