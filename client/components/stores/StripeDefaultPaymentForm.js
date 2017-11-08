import React, {Component} from 'react';
import {injectStripe, CardElement} from 'react-stripe-elements';

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = change => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '18px',
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, Menlo, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class StripeDefaultPaymentForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      console.log('Received Stripe token:', token);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement {...createOptions()} />
        </label>
        <input type="submit" className="short-button" value="Update Card" />
      </form>
    );
  }
}

export default injectStripe(StripeDefaultPaymentForm);
