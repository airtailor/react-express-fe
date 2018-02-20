import React, { Component } from 'react';

class OrderHeaders extends Component {
  orderHeader = (text, withSelect, isSelect) => {
    if (isSelect) {
      return <h3 className="order-select-header-cell">{text}</h3>;
    } else if (withSelect) {
      return <h3 className="order-data-header-cell">{text}</h3>;
    } else {
      return <h3 className="order-header-cell-no-select">{text}</h3>;
    }
  };

  render() {
    const { showOrderState } = this.props;

    let dateText;
    if (showOrderState === 'new_orders') {
      dateText = 'Created';
    } else if (showOrderState === 'in_progress_orders') {
      dateText = 'Checked In';
    } else if (showOrderState === 'ready_orders') {
      dateText = 'Fulfilled';
    }

    return (
      <div className="order-headers-container">
        <div className="order-headers-row">
          {this.orderHeader('Select:', false, true)}
          <div className="order-data-headers-container">
            {this.orderHeader('Order', true, false)}
            {this.orderHeader(dateText, true, false)}
            {this.orderHeader('Customer', true, false)}
            {this.orderHeader('Status', true, false)}
          </div>
        </div>
      </div>
    );
  }
}

export default OrderHeaders;
