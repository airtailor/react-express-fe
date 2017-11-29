import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import StripeDefaultPaymentForm from './StripeDefaultPaymentForm';

class StripePaymentForm extends Component {
  render() {
    return (
      <Elements>
        <StripeDefaultPaymentForm />
      </Elements>
    );
  }
}

export default StripePaymentForm;
