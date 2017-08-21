import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {updateOrder, createShipment} from '../../actions';
import {renderAlterationList} from '../../utils/alterationsLists';

import {
  getShippingType,
  getPrintButtonPrompt,
  lowerCaseFirstLetter,
  toSnakeCaseFromCamelCase,
  makeShippingLabel,
  //renderPrintLabels
} from '../shipping/shippingFunctions';

import OrderComplete from '../prints/OrderComplete.js';
import {SetFulfilledButton} from '../orders/orderForms/SetFulfilled';
import SelectTailor from '../orders/orderForms/SelectTailor';
import UpdateNotes from '../orders/orderForms/UpdateNotes';

class NewOrderDetail extends Component{
  constructor(props){
    super();
    this.state = props.order
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setFulfilled = this.setFulfilled.bind(this);
    this.updateOrderNotes = this.updateOrderNotes.bind(this);
  }

  refreshNewOrdersList(props){
    this.props.getNewOrders()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.refreshNewOrdersList(this.props);
  }

  resetState(props){
    this.setState(props.order)
  }

  updateOrderFromProps(){
    const order = this.props.order;
    this.setState({order})
  }

  updateState(field, value){
    this.setState({[field]: value});
  }

  handleSubmit(){
    let obj = this.state;
    obj.id = this.props.order.id
    this.props.updateOrder({order: obj})
      .then(res => this.refreshNewOrdersList({order: {}}))
      .catch(err => console.log('errr', err));
  }

  updateOrderNotes(notes, order){
    order.requester_notes = notes;
    this.props.updateOrder({order})
      .then(res => console.log('res', res))
      .catch(err => console.log('err', err));
  }

  makeShippingLabel(type, order){
    const data = { shipment: { type, order_id: order.id }};
    createShipment(data)
      .then(res => {
        const order = res.data.body;
        this.props.updateOrder({order})
          .then(res => this.props.selectOrder(order))
          .catch(err => console.log('err', err))
      })
      .catch(err => console.log(err));
  }

  renderPrintLabels(order){
    // const { currentUser, currentOrder } = this.props;
    // const role = currentUser.user.roles[0].name;
    const role = 'admin';
    const shippingType = getShippingType(role, order.type);
    const printPrompt = getPrintButtonPrompt(shippingType, order);

    console.log('print prompt', order.fulfilled, order, printPrompt)
    if (printPrompt.split(' ')[0] === "Print"){
      const url = order[toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType))].shipping_label;

      return (
        <div>
          <button className='pink-button' onClick={() => window.print()}>
            {printPrompt}
          </button>

          <OrderComplete currentOrder={order} shippingType={shippingType}/>
          {/* <OrderComplete order={currentOrder} shippingType={shippingType} /> */}
        </div>
      )
    } else if (printPrompt.split(' ')[0] === 'Create'){
      return (
        <button className='pink-button' onClick={() => this.makeShippingLabel(shippingType, order)}>
          {printPrompt}
        </button>
      );
    }
  }

  setFulfilled(order){
    order.fulfilled = true;
    this.props.updateOrder({ order })
      //.then(res => console.log('res',this.props))
      .catch(err => console.log('errr', err));
  }

  welcomeKit(order){
    if (!order.fulfilled){
      return (
        <div>
          {this.renderPrintLabels(order)}
          <SetFulfilledButton order={order} onClick={this.setFulfilled} />
        </div>
      );
    } else {
      return (
        <div>
          {this.renderPrintLabels(order)}
          <div>
            <button className='pink-button' disabled={true}>
              Order Completed ✔️
            </button>
          </div>
        </div>
      );
    }
  }


  render(){
    const {order} = this.props;
    console.log('order render', order.fulfilled)
    if (order.customer){
      const {id, weight, created_at, total, provider_notes, items} = order;
      const orderDate = moment(created_at).format('MM-DD-2017');
      const selectTailor = (
        <div>
          <p>Alterations:</p>
          {renderAlterationList(order.items, 'new-order-detail')}
          <SelectTailor onChange={this.updateState} provider_id={order.provider_id} />
          <button className='button short-button' onClick={this.handleSubmit}>Change Tailor</button>
        </div>
      );
      // const printLabelButton = (
      //   <button className='pink-button'>Print Shipping Label</button>
      // );
      const display = order.type === 'TailorOrder' ? selectTailor : this.welcomeKit(order);
      console.log('detail', this.props.order.provider_notes)
      return (
          <div className='order-details'>
            <h3>Order Details:</h3>
            <p>Order ID: {id}</p>
            <p>Order Weight: {weight}</p>
            <p>Order Date: {orderDate}</p>
            <p>Total Charges: ${total}</p>
            <p>Order Notes: {provider_notes}</p>
            <UpdateNotes
              notes={provider_notes}
              order={order}
              role={this.props.currentUser.user.roles[0].name}
              submitNotes={this.updateOrderNotes} />

            { display}

          </div>
      )
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (store) => {
  return {
    tailors: store.tailorList,
    currentUser: store.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateOrder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderDetail)
