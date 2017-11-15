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
    this.setOrderTabState = this.setOrderTabState.bind(this)

    this.renderOrderHeaders = this.renderOrderHeaders.bind(this)
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

  countOrdersByStatus(status) {
    return this.sortOrdersByStatus(status).length
  }

  getOrderStatus(order) {
    // NOTE: this needs a few more statuses.
    // "Needs Shipping Details" - Order doesn't have shipping yet. Create Label or Send messenger.
    // "Ready for Shipping" - shipment ready to go, print it or send a messenger.
    if (isEmpty(order.shipments)) {
      return {status: 'Needs Shipping Details', color: 'gold'};
    } else if (!(isEmpty(order.shipments) && !order.arrived)) {
      return {status: 'Ready for Shipping', color: 'green'};
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

  setOrderTabState(state) {
    this.setState({showOrderState: state})
  }

  renderShippingControls() {
    const {userRoles: roles} = this.props
    if (roles.admin || roles.retailer) {
      const orders = this.state.selectedOrders
      const labelFunction = () => this.makeLabels(orders)
      const messengerFunction = () => this.sendMessenger(orders)

      return(
        <div className="shipping-button-container">
          <div>
            <input
              type="submit"
              className="print-label-button"
              onClick={labelFunction}
              value="Print Labels"
            />
          </div>
          <div>
            <input
              type="submit"
              className="messenger-button"
              onClick={messengerFunction}
              value="Send Messenger"
            />
          </div>
        </div>
      )
    } else {
      return (<div />)
    }
  }

  renderOrderRow(order) {
    const {userRoles: roles} = this.props;
    const {id, customer, alterations_count} = order;
    const {first_name, last_name} = customer;
    const {color, status} = this.getOrderStatus(order);
    const route = `/orders/${id}`;

    let orderSelect = (<div />);
    if (roles.admin || roles.retailer) {
      const orderIsToggled = this.state.selectedOrders.has(id)
      const orderToggle = () => this.toggleOrderSelect(id)

      orderSelect = (
        <div className="order-select">
          <Checkbox
            checked={orderIsToggled}
            type="checkbox"
            name={id}
            onChange={orderToggle}
          />
        </div>
      )
    }

    return (
      <div key={id}>
        <div className="order-row flex-container">
          {orderSelect}
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

  renderOrderStateTabs() {
    const allTabs = [
      {className: 'order-state-tab', status: 'new_orders', text:  'New' },
      {className: 'order-state-tab', status: 'in_progress_orders', text:  'Current' },
      {className: 'order-state-tab', status: 'ready_orders', text:  'Finished' },
      {className: 'order-state-tab', status: 'late_orders', text:  'Late' }
    ]

    allTabs.map((obj, i) => {
      if (obj.status == this.state.showOrderState) {
        obj.className = obj.className.concat(" selected");
      }
      return obj
    })

    const tabs = allTabs.map((tab, i) => {
      return (
        <div
          key={i}
          className={tab.className}
          onClick={() => this.setOrderTabState(tab.status)}
        >
          <h3>
            {tab.text} ({this.countOrdersByStatus(tab.status)})
          </h3>
        </div>
      )
    })

    return (
      <div className="order-state-row">
        {tabs}
      </div>
    )
  }

  renderOrderHeaders() {
    const {userRoles: roles} = this.props;
    let selectHeader = (<div />)
    if (roles.admin || roles.retailer) {
       selectHeader = (<h3 className="order-column">Select:</h3>)
    }

    return (
      <div className="order-row-header">
        {selectHeader}
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
