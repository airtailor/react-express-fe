import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectStripe, CardElement } from 'react-stripe-elements';

class StripeDefaultPaymentForm extends Component {
  static propTypes = {
    stripe: PropTypes.shape({
      createToken: PropTypes.func.isRequired,
      _apiKey: PropTypes.string.isRequired,
    }), // injectStripe HOC
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(({ token }) => {
      console.log('Received Stripe token:', token);
    });
  }

  createOptions() {
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
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement {...this.createOptions()} />
        </label>
        <input type="submit" className="short-button" value="Update Card" />
      </form>
    );
  }
}

export default injectStripe(StripeDefaultPaymentForm);
