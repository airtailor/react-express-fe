import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {Redirect, Link} from 'react-router-dom';
import {getStoreOrders} from '../../actions';
import SectionHeader from '../SectionHeader';
import isEmpty from 'lodash/isEmpty';
import Checkbox from '../Checkbox';

import {
  shipmentTypes,
  shipmentActions,
  labelState,
  messengerAllowed,
  fireShipmentCreate,
} from '../shipping/shippingFunctions';

class StoresShow extends Component {
  // NOTE: still needs A) count of ordrs in the title, and B) a loooot of styling
  constructor(props) {
    super();
    this.state = {
      showOrderState: 'new_orders',
      selectedOrders: new Set
    }

    this.toggleOrderSelect = this.toggleOrderSelect.bind(this)
    this.setOrderState = this.setOrderState.bind(this)

    this.renderShippingControls = this.renderShippingControls.bind(this)
    this.renderOrderStateTabs = this.renderOrderStateTabs.bind(this)
    this.renderOrderRowsByStatus = this.renderOrderRowsByStatus.bind(this)
  }

  componentDidMount() {
    const {currentUser: {store_id: storeId }} =  this.props
    this.props
      .getStoreOrders(storeId)
      .catch(err => console.log(err));
  }

  formatStatusString(dueDate, late) {
    const todaysDate = moment(new Date());
    const momentDueDate = moment(dueDate);
    const diff = momentDueDate.diff(todaysDate, 'days');
    const additionalString = late ? ' days late' : ' days to go';
    const status = (diff + additionalString).toUpperCase();
    return status;
  }

  sortOrdersByStatus(status) {
    const {openOrders: orders} = this.props
    switch(status) {
      case 'new_orders':
        return orders.filter(o => !o.arrived || !o.tailor )
      case 'ready_orders':
        return orders.filter(o => o.fulfilled )
      case 'in_progress_orders':
        return orders.filter(order => order.arrived && !order.fulfilled )
      case 'late_orders':
        return orders.filter(order =>  order.late)
      default:
        return orders
    }
  }

  getOrderStatus(order) {
    if (!order.arrived) {
      return {status: 'In Transit', color: 'green'};
    } else if (order.late) {
      let dueTime = this.formatStatusString(order.due_date, true);
      return {status: dueTime, color: 'red'};
    } else {
      let dueTime = this.formatStatusString(order.due_date, false);
      return {status: dueTime, color: 'orange'};
    }
  }

  postShipment(orders, action, type) {
    this.props.setLoader();
    fireShipmentCreate(orders, action, type)
      .then(res => {
        this.props.removeLoader();
        this.setState({loadingLabel: false});
        // this.refreshCurrentOrder();
      })
      .catch(err => console.log('err', err));
  }

  // NOTE: these should go in shippingFunctions.js
  makeLabels(orderIds) {
    // This should print once with X separate labels (x == number of orders)
    console.log(orderIds)
    // return this.postShipment(orderIds, action, 'mail_shipment')

    // return fireShipmentCreate()
  }

  sendMessenger(orderIds) {
    console.log(orderIds)
    // return this.postShipment(orderIds, action, 'messenger_shipment')
  }

  toggleOrderSelect(id) {
    if (!this.state.selectedOrders.has(id)) {
      const newSelectedOrders = this.state.selectedOrders
      newSelectedOrders.add(id);
      this.setState({seletecdOrders: newSelectedOrders})
    } else {
      const newSelectedOrders = this.state.selectedOrders
      newSelectedOrders.delete(id);
      this.setState({seletecdOrders: newSelectedOrders})
    }
  }

  setOrderState(state) {
    return this.setState({showOrderState: state})
  }

  renderShippingControls() {
    const orders = this.state.selectedOrders
    return(
      <div>
        <div onClick={() => this.makeLabels(orders)}>
          Print Labels
        </div>
        <div onClick={() => this.sendMessenger(orders)}>
          Send Messenger
        </div>
      </div>
    )
  }

  renderOrderRow(order) {
    const {id, customer, alterations_count} = order;
    const {first_name, last_name} = customer;
    const {color, status} = this.getOrderStatus(order);
    const route = `/orders/${id}`;

    const orderIsToggled = this.state.selectedOrders.has(id)
    const orderToggle = () => this.toggleOrderSelect(id)

    return (
      <div key={id}>
        <div className="order-row flex-container">
          <div className="order-select">
            <Checkbox
              checked={orderIsToggled}
              type="checkbox"
              name={id}
              onChange={orderToggle}
            />
          </div>
          <Link to={route} className="order-data flex-container">
            <div>#{id}</div>
            <div style={{color}}>
              {status}
            </div>
            <div>
              {first_name} {last_name}
            </div>
            <div>{alterations_count}</div>
          </Link>
        </div>
        <hr className="order-row-hr" />
      </div>
    );
  }

  renderOrderRowsByStatus() {
    const {openOrders} = this.props;
    if (!isEmpty(openOrders)) {
      const status = this.state.showOrderState
      const sortedOrders = this.sortOrdersByStatus(status)
      return sortedOrders.map( order => this.renderOrderRow(order) )
    } else {
      return <div>Loading...</div>;
    }
  }

  countOrdersByStatus(status) {
    return this.sortOrdersByStatus(status).length
  }

  renderOrderStateTabs() {
    const setOrderState = this.setOrderState
    const newCount = this.countOrdersByStatus('new_orders')
    const readyCount = this.countOrdersByStatus('ready_orders')
    const inProgressCount = this.countOrdersByStatus('in_progress_orders')
    const lateCount = this.countOrdersByStatus('late_orders')

    return (
      <div className="order-state-row">
        <div onClick={() => setOrderState('new_orders')} className="order-state-button" >
          New Orders ({newCount})
        </div>
        <div onClick={() => setOrderState('ready_orders')} className="order-state-button" >
          Ready for Customer ({readyCount})
        </div>
        < div onClick={() => setOrderState('in_progress_orders')} className="order-state-button" >
          In Progress ({inProgressCount})
        </div>
        <div  onClick={() => setOrderState('late_orders')} className="order-state-button">
          Late Orders ({lateCount})
        </div>
      </div>
    )
  }

  renderOrderHeaders() {
    return (
      <div className="order-row-header">
        <h3 className="order-column">Select:</h3>
        <h3 className="order-column">Order</h3>
        <h3 className="order-column">Status</h3>
        <h3 className="order-column">Customer</h3>
        <h3 className="order-column">Quantity</h3>
      </div>
    )
  }

  render() {
    if (!this.props.currentStore) { return <Redirect to="/" />; }

    const headerText = `Orders / ${this.props.currentStore.name}`;
    const orderHeaders = this.renderOrderHeaders
    const orderRows = this.renderOrderRowsByStatus
    const orderStateTabs = this.renderOrderStateTabs
    const shippingControls = this.renderShippingControls

    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="orders">
          <div className="order-state">
            { orderStateTabs() }
          </div>
          <div>
            { orderHeaders() }
          </div>
          <hr className="order-header-hr" />
          <div className="order-rows">
            { orderRows() }
          </div>
          <div>
            { shippingControls() }
          </div>
        </div>
      </div>
    )
  };
}

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    userRoles:  store.userRoles
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getStoreOrders}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresShow);
