import React, { Component } from 'react';
import Checkbox from '../../../Checkbox';
import Button from '../../../Button';

class ShippingOptions extends Component {
  constructor() {
    super();
    this.state = {
      selected: null,
    };
  }

  updateSelected(e) {
    const { name } = e.target;
    const { selected } = this.state;
    const newValue = name === selected ? null : name;
    this.setState({ selected: newValue });
  }

  render() {
    const { selected } = this.state;
    const selectButtonDisabled = selected ? false : true;

    // width: 380px;
    //     border: 3px solid #000333;
    //     border-radius: 8px;
    //     padding: 30px;
    //     margin-top: 50px;
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
            name="mail"
            checked={this.state.selected === 'mail'}
            onChange={e => this.updateSelected(e)}
            text="Print USPS Shipping Label (est. $6)"
            labelClass={'shipping-option-label'}
          />
        </div>
        <div className="shipping-option">
          <hr style={{ float: 'right', width: '85%', marginTop: '20px' }} />
          <Checkbox
            name="messenger"
            checked={this.state.selected === 'messenger'}
            onChange={e => this.updateSelected(e)}
            text="Call Postmates Messenger (est. $13)"
            labelClass={'shipping-option-label'}
          />
        </div>
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
