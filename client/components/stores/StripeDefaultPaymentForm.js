import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { setGrowler, setLoader, removeLoader } from '../../actions';

const mapStateToProps = store => {
  return {
    currentStore: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setGrowler, setLoader, removeLoader }, dispatch);
};

class StripeDefaultPaymentForm extends Component {
  static propTypes = {
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
    stripe: PropTypes.shape({
      createToken: PropTypes.func.isRequired,
      _apiKey: PropTypes.string.isRequired,
    }), // injectStripe HOC
  };

  handleSuccess(res) {
    const { setGrowler } = this.props;
    const kind = 'success';
    const message = 'Default Payment Updated';
    setGrowler({ kind, message });
  }

  handleError(err) {
    const { setGrowler } = this.props;
    const kind = 'warning';
    const message = err.message;
    setGrowler({ kind, message });
  }

  handleSubmit = e => {
    e.preventDefault();

    const {
      stripe: { createToken },
      setLoader,
      currentStore: { name: storeName },
      removeLoader,
    } = this.props;
    setLoader();

    // we should be passing in the store's stripe id once that is a thing
    createToken({ name: storeName })
      .then(res => {
        removeLoader();
        if (res.error) {
          this.handleError(res.error);
        } else {
          this.handleSuccess(res);
        }
      })
      .catch(err => {
        removeLoader();
        this.handleError(err);
      });
  };

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

export default connect(mapStateToProps, mapDispatchToProps)(
  injectStripe(StripeDefaultPaymentForm)
);
