import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from '../../images/logo.png';
import isEmpty from 'lodash';
import {renderAlterationList} from '../../utils/alterationsLists';

class OrderComplete extends Component {
  render(){
      const {currentOrder, CurrentStore, shippingType} = this.props;
      const type = shippingType === 'OutgoingShipment' ? 'outgoing_shipment' : 'incoming_shipment';

      if (currentOrder){
        const {first_name} = currentOrder.customer;
        const {id} = currentOrder;
        const {shipping_label} = currentOrder[type];
        return (
          <div className='print'>
            <div className='packing-slip-info'>
              <img className='packing-slip-label' src={shipping_label} />
              <h3>Thank you for your Air Tailor order, {first_name}</h3>
              <p>We hope everything arrived exactly as you expected and that you are pleased with our work. If you have any questions or would like to alter/repair more clothes using Air Tailor, please text us or email hello@airtailor.com. We look forward to serving you again soon, {first_name}!</p>
              <p className='packing-slip-info-orderid'><b>Order: #{id}</b></p>
              {renderAlterationList(currentOrder.items, 'print-alteration')}
              <img className='packing-slip-info-img' src={logo} alt='air tailor logo' id='logo' />
            </div>
          </div>
        );
      } else {
        return (
          <div className='print'>
            <h1>HIiiiiiiiiiiiasdflasdfjasdofjaosfjosadifjasdoijfds</h1>
          </div>
        )
      }
  }
}

const mapStateToProps = (store) => {
  return {
    currentStore: store.currentStore,
    currentOrder: store.currentOrder
  }
}
export default connect(mapStateToProps)(OrderComplete);
