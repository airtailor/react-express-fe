import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {updateOrder} from '../../actions';
import {renderAlterationList} from '../../utils/alterationsLists';
import SelectTailor from '../orders/orderForms/SelectTailor';

class NewOrderDetail extends Component{
  constructor(props){
    super();
    this.state = props.order
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  refreshNewOrdersList(props){
    this.props.getNewOrders()
      .then(res => this.resetState(props))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.refreshNewOrdersList(this.props);
  }

  resetState(props){
    this.setState(props.order)
  }

  updateState(field, value){
    this.setState({[field]: value});
  }

  handleSubmit(){
    let obj = this.state;
    obj.id = this.props.order.id
    this.props.updateOrder({ order: obj })
      .then(res => this.refreshNewOrdersList({order: {}}))
      .catch(err => console.log('errr', err));
  }

  render(){
    const {order} = this.props;
    if (order.customer){
      const {id, weight, created_at, total, provider_notes, items} = order;
      const orderDate = moment(created_at).format('MM-DD-2017');
      const selectTailor = (
        <div>
          <p>Alterations:</p>
          {renderAlterationList(order.items, 'new-order-detail')}
          <SelectTailor onChange={this.updateState} provider_id={order.provider_id} />;
          <button className='button short-button' onClick={this.handleSubmit}>Change Tailor</button>
        </div>
      );
      const printLabelButton = (
        <button className='pink-button'>Print Shipping Label</button>
      );
      const display = order.type === 'TailorOrder' ? selectTailor : printLabelButton;
      return (
          <div className='order-details'>
            <h3>Order Details:</h3>
            <p>Order ID: {id}</p>
            <p>Order Weight: {weight}</p>
            <p>Order Date: {orderDate}</p>
            <p>Total Charges: ${total}</p>
            <p>Order Notes: {provider_notes}</p>
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
    tailors: store.tailorList
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateOrder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderDetail)
