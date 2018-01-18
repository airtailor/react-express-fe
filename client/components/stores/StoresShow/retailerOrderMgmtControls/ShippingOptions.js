import React, { Component } from 'react';
import moment from 'moment';

import Checkbox from '../../../Checkbox';
import Button from '../../../Button';

import { messengerAvailable } from '../../../shipping/shippingFunctions';

class ShippingOptions extends Component {
  constructor() {
    super();
    this.state = {
      selected: null,
    };
  }

  updateSelected(name) {
    const { selected } = this.state;
    const newValue = name === selected ? null : name;
    this.setState({ selected: newValue });
  }

  clearSelection() {
    this.setState({ selected: null });
    this.props.hideShow();
  }

  renderMessengerOption = () => {
    const now = moment();

    if (messengerAvailable(now)) {
      return (
        <div className="shipping-option">
          <hr style={{ float: 'right', width: '85%', marginTop: '20px' }} />
          <Checkbox
            name="messenge_shipmentr"
            checked={this.state.selected === 'messenger_shipment'}
            onChange={e => this.updateSelected(e.target.name)}
            text="Call Postmates Messenger (est. $13)"
            labelClass={'shipping-option-label'}
          />
        </div>
      );
    }
  };

  render() {
    const { selected } = this.state;
    const selectButtonDisabled = selected ? false : true;

    return (
      <div
        style={{
          width: '380px',
          border: '3px solid #000033',
          borderRadius: '8px',
          padding: '30px',
          marginTop: '50px',
        }}
      >
        <div className="shipping-option">
          <Checkbox
            name="mail_shipment"
            checked={selected === 'mail_shipment'}
            onChange={e => this.updateSelected(e.target.name)}
            text="Print USPS Shipping Label (est. $6)"
            labelClass={'shipping-option-label'}
          />
        </div>

        {this.renderMessengerOption()}
        <br />

        <div
          className="flex-container"
          style={{ justifyContent: 'space-between' }}
        >
          <Button
            className="send-order-button"
            onClick={this.props.hideShow}
            disabled={false}
            text="CANCEL"
          />

          <Button
            className="send-order-button"
            onClick={() => this.props.handleSubmit(selected)}
            disabled={selectButtonDisabled}
            text="SELECT"
          />
        </div>
      </div>
    );
  }
}

export default ShippingOptions;
