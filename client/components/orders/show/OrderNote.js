import React, { Component } from 'react';
import OrderShowTitle from './OrderShowTitle';
class OrderNote extends Component {
  render() {
    const { field, title } = this.props;
    const notes = this.props.currentOrder[field] || 'Not Provided';
    return (
      <div>
        <OrderShowTitle title={title} />
        <p className="notes">{notes}</p>
      </div>
    );
  }
}

export default OrderNote;
