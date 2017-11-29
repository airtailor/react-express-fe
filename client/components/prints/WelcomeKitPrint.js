import React, {Component} from 'react';
import {connect} from 'react-redux';

class WelcomeKitPrint extends Component {
  render() {
    const {currentOrder} = this.props;

    if (currentOrder) {
      const {shipping_label} = currentOrder.shipments[0];
      return (
        <div className="print">
          <div className="packing-slip-info">
            <img
              className="packing-slip-label"
              src={shipping_label}
              alt="shipping label"
            />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = store => {
  return {
    currentStore: store.currentStore,
    currentOrder: store.currentOrder,
  };
};

export default connect(mapStateToProps)(WelcomeKitPrint);
