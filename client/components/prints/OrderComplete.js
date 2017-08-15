import React, {Component} from 'react';
import {connect} from 'react-redux';
import PrintTemplate from 'react-print';

class OrderComplete extends Component {
  // render(){
  //   return (
  //     <PrintTemplate>
  //       <div><h1>Order Complete!</h1></div>
  //     </PrintTemplate>
  //   )
  // }
  render(){
    // if (this.props.currentPrint === 'OrderComplete') {
      const {order, store, shippingType} = this.props;
      const type = shippingType === 'OutgoingShipment' ? 'outgoing_shipment' : 'incoming_shipment';
      if (order){
        console.log('order is here in order complete')
        return (
          <div id="print-mount">
            <h1>HIiiiiiiiiiiiasdflasdfjasdofjaosfjosadifjasdoijfds</h1>
            <PrintTemplate>
              <div>
                <p>Order Complete</p>
                <img src={order[type].shipping_label} />
              </div>
            </PrintTemplate>
          </div>
        );
      } else {
        return <div></div>;
      }
    // }
  }
}

const mapStateToProps = (store) => {
  return {
    currentStore: store.currentStore,
    currentOrder: store.currentOrder,
    currentPrint: store.currentPrint
  }
}
export default connect(mapStateToProps)(OrderComplete);
