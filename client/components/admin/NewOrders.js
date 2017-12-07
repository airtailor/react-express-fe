import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewOrders, getCurrentOrder, setCurrentOrder } from '../../actions';
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
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getNewOrders, getCurrentOrder, setCurrentOrder },
    dispatch
  );
};

class NewOrders extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    newOrders: PropTypes.object.isRequired, // mapStateToProps
    currentOrder: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    getNewOrders: PropTypes.func.isRequired, // mapDispatchToProps
    getCurrentOrder: PropTypes.func.isRequired, // mapDispatchToProps
    setCurrentOrder: PropTypes.func.isRequired, // mapDispatchToProps
  };

  selectOrderDetail = order => {
    this.props
      .getCurrentOrder(order.provider_id, order.id)
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

  render() {
    console.log('new orders', this.props.currentOrder);
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

export default connect(mapStateToProps, mapDispatchToProps)(NewOrders);
