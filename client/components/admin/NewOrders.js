import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNewOrders, getCurrentOrder} from '../../actions';
import {bindActionCreators} from 'redux';
import {RenderNewOrderList} from '../../utils/newOrderLists';
import NewOrderDetail from './NewOrderDetail';
import NewOrderCustomerDetail from './NewOrderCustomerDetail';
import SectionHeader from '../SectionHeader';

class NewOrders extends Component {
  constructor() {
    super();
    this.selectOrderDetail = this.selectOrderDetail.bind(this);
  }

  selectOrderDetail(order) {
    this.props
      .getCurrentOrder(order.provider_id, order.id)
      //.then(res => console.log('res', res))
      .catch(err => console.log('err', err));
  }

  componentDidMount() {
    this.props
      .getNewOrders()
      //.then(res => console.log(res))
      .catch(err => console.log(err));
  }

  renderNewOrders(orders) {
    //return renderAlterationList(this.props.newOrders.unassigned, 'new-orders')
    return (
      <RenderNewOrderList
        orders={orders}
        className={'new-orders'}
        selectOrder={this.selectOrderDetail}
      />
    );
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
            <div className="new-order detail-container">
              <NewOrderDetail
                order={this.props.currentOrder}
                selectOrder={this.selectOrderDetail}
                getNewOrders={this.props.getNewOrders}
              />
            </div>
            <div className="new-order customer-container">
              <NewOrderCustomerDetail order={this.props.currentOrder} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    newOrders: store.newOrders,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getNewOrders, getCurrentOrder}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewOrders);
