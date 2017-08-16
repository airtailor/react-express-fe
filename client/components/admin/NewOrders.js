import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNewOrders} from '../../actions';
import { bindActionCreators } from 'redux'
import {RenderNewOrderList} from '../../utils/newOrderLists';
import NewOrderDetail from './NewOrderDetail';

class NewOrders extends Component {
  constructor(){
    super();
    this.state = {
      orderDetail: {}
    }
    this.selectOrderDetail = this.selectOrderDetail.bind(this);
  }

  selectOrderDetail(order){
    this.setState({orderDetail: order});
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
          <div className='new-orders-container'>
            <h1>New Orders</h1>
            {this.renderNewOrders(this.props.newOrders)}
          </div>
          <div className='new-order-detail-container'>
            <NewOrderDetail order={this.state.orderDetail} getNewOrders={this.props.getNewOrders} />
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
    newOrders: store.newOrders
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getNewOrders}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewOrders);
