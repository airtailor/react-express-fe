import React, { Component } from 'react';

class OrderHeaders extends Component {
  renderHeaderCell = (text, withSelect, isSelect) => {
    if (isSelect) {
      return <h3 className="order-select-header-cell">{text}</h3>;
    } else if (withSelect) {
      return <h3 className="order-data-header-cell">{text}</h3>;
    } else {
      return <h3 className="order-header-cell-no-select">{text}</h3>;
    }
  };

  render() {
    return (
      <div className="order-headers-container">
        <div className="order-headers-row-no-select">
          <div className="order-headers-container-no-select">
            {this.renderHeaderCell('Id', false)}
            {this.renderHeaderCell('Status', false)}
            {this.renderHeaderCell('Customer', false)}
            {this.renderHeaderCell('Quantity', false)}
          </div>
        </div>
      </div>
    );
  }
}

export default OrderHeaders;
