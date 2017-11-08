import React, {Component} from 'react';
import {Elements} from 'react-stripe-elements';
import StripeDefaultPaymentForm from './StripeDefaultPaymentForm';

class StripePaymentForm extends Component {
  handleSubmit(e) {
    e.preventDefault();

    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      console.log('Received Stripe token:', token);
    });
  }

  render() {
    return (
      <Elements>
        <StripeDefaultPaymentForm />
      </Elements>
    );
  }
}

export default StripePaymentForm;
