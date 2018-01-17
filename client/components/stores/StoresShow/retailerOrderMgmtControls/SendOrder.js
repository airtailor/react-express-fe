import React, { Component } from 'react';
import Button from '../../../Button';
import ShippingOptions from './ShippingOptions';

class SendOrder extends Component {
  constructor() {
    super();
    this.state = {
      showOptions: false,
    };
  }

  hideShow = () => {
    const bool = !this.state.showOptions;
    this.setState({ showOptions: bool });
  };

  handleSubmit = selection => {
    console.log('HANDLE SUBMIT!!!!!', selection, this.props.selectedOrders);
  };

  render() {
    const { showOptions } = this.state;
    const { selectedOrders } = this.props;
    const disabled = selectedOrders.size === 0;

    if (showOptions) {
      return (
        <div className="shipping-option-container">
          <ShippingOptions
            handleSubmit={this.handleSubmit}
            hideShow={this.hideShow}
          />
        </div>
      );
    } else {
      return (
        <div className="shipping-option-container">
          <Button
            className="send-order-button"
            onClick={this.hideShow}
            disabled={disabled}
            text="SEND ORDER"
          />
        </div>
      );
    }
  }
}

export default SendOrder;
