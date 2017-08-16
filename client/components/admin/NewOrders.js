import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNewOrders, getCurrentOrder} from '../../actions';
import { bindActionCreators } from 'redux'
import {RenderNewOrderList} from '../../utils/newOrderLists';
import NewOrderDetail from './NewOrderDetail';
import NewOrderCustomerDetail from './NewOrderCustomerDetail';

class NewOrders extends Component {
  constructor(){
    super();
    this.state = {
      orderDetail: {}
    }
    this.selectOrderDetail = this.selectOrderDetail.bind(this);
  }

  selectOrderDetail(order){
    console.log(this.props.getCurrentOrder)
    this.setState({orderDetail: order});
    console.log('props', this.props, 'order', order)

    this.props.getCurrentOrder(order.provider_id, order.id)
      .then(res => console.log('res', res))
      .catch(err => console.log('err', err))
  }

  componentDidMount(){
    this.props.getNewOrders()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  renderNewOrders(orders){
    //return renderAlterationList(this.props.newOrders.unassigned, 'new-orders')
    return <RenderNewOrderList orders={orders} className={'new-orders'} selectOrder={this.selectOrderDetail} />
  }

  render(){
      return (
        <div>
          <div className='new-order-listcontainer'>
            <h1>New Orders</h1>
            {this.renderNewOrders(this.props.newOrders)}
          </div>
          <div className='new-order-detail-container'>
            <NewOrderDetail order={this.state.orderDetail} getNewOrders={this.props.getNewOrders} />
          </div>
          <div className='new-order-customer-container'>
            <NewOrderCustomerDetail order={this.state.orderDetail} />
          </div>
        </div>
      );
  }
}

// export default NewOrders;

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    newOrders: store.newOrders,
    currentOrder: store.currentOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getNewOrders, getCurrentOrder}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewOrders);
