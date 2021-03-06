import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  getNewOrders, 
  getCurrentOrder, 
  setCurrentOrder, 
  getCurrentCustomer 
} from '../../actions';

import { bindActionCreators } from 'redux';
import { RenderNewOrderList } from '../../utils/newOrderLists';
import NewOrderDetail from './NewOrderDetail';
import NewOrderCustomerDetail from './NewOrderCustomerDetail';
import SectionHeader from '../SectionHeader';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    newOrders: store.newOrders,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles,
    currentCustomer: store.currentCustomer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getNewOrders, getCurrentOrder, setCurrentOrder, getCurrentCustomer },
    dispatch
  );
};

class NewOrders extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    currentCustomer: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    newOrders: PropTypes.object.isRequired, // mapStateToProps
    currentOrder: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    getNewOrders: PropTypes.func.isRequired, // mapDispatchToProps
    getCurrentOrder: PropTypes.func.isRequired, // mapDispatchToProps
    setCurrentOrder: PropTypes.func.isRequired, // mapDispatchToProps
    getCurrentCustomer: PropTypes.func.isRequired, // mapDispatchToProps
  };

  selectOrderDetail = order => {
    this.props
      .getCurrentOrder(order.provider_id, order.id)
      .then(res => {
        this.props.getCurrentCustomer(res.customer_id)
      })
      .catch(err => console.log('err', err));
  };

  componentDidMount() {
    this.props.setCurrentOrder({});
    this.props.getNewOrders().catch(err => console.log(err));
  }

  renderNewOrders(orders) {
    return (
      <RenderNewOrderList
        orders={orders}
        className={'new-orders'}
        selectOrder={this.selectOrderDetail}
      />
    );
  }

  renderOrderDetails(){
    const {
      currentCustomer: {
        id: customerId
      }, 
      currentOrder: {
        customer_id: orderCustId
      }
    } = this.props;

    if (customerId === orderCustId){
      return (
        <div>
          <div className="new-order detail-container">
            <NewOrderDetail
              order={this.props.currentOrder}
              selectOrder={this.selectOrderDetail}
              getNewOrders={this.props.getNewOrders}
            />
          </div>
          <div className="new-order customer-container">
            <NewOrderCustomerDetail />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="new-order-page">
        <SectionHeader text={`Home / ${this.props.currentStore.name}`} />
        <div className="new-order-container">
          <div className="new-order list-container">
            {this.renderNewOrders(this.props.newOrders)}
          </div>
          <div className="detail-and-customer">
            { this.renderOrderDetails() }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrders);
