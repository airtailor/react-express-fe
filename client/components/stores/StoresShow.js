import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {Redirect, Link} from 'react-router-dom';
import {getStoreOrders, setLoader, removeLoader} from '../../actions';
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
      selectedOrders: new Set(),
    };

    this.toggleOrderSelect = this.toggleOrderSelect.bind(this);
    this.setOrderTabState = this.setOrderTabState.bind(this);

    this.renderOrderHeaders = this.renderOrderHeaders.bind(this);
    this.renderShippingControls = this.renderShippingControls.bind(this);
    this.renderOrderStateTabs = this.renderOrderStateTabs.bind(this);
    this.renderOrderRowsByStatus = this.renderOrderRowsByStatus.bind(this);
  }

  componentDidMount() {
    const {currentUser: {store_id: storeId}} = this.props;
    this.refreshStoreOrders();
  }

  refreshStoreOrders() {
    this.props.setLoader();
    const {currentUser: {store_id: storeId}} = this.props;
    const {getStoreOrders} = this.props;

    this.setState({loadingOrders: true});
    getStoreOrders(storeId)
      .then(() => {
        this.state.selectedOrders = new Set();
        this.setState({loadingOrders: false});
        this.props.removeLoader();
      })
      .catch(err => console.log(err));
  }

  formatStatusString(dueDate, late) {
    const todaysDate = moment(new Date());
    const momentDueDate = moment(dueDate);
    const diff = Math.abs(momentDueDate.diff(todaysDate, 'days'));
    const additionalString = late ? ' days late' : ' days to go';
    const status = (diff + additionalString).toUpperCase();
    return status;
  }

  sortOrdersByStatus(status) {
    const {openOrders: orders, userRoles: roles} = this.props;
    switch (status) {
      case 'new_orders':
        if (roles.tailor) {
          // this is where i'd like shipped to exist.
          return orders.filter(
            order => !isEmpty(order.shipments) && order.tailor
          );
        } else {
          return orders.filter(order => isEmpty(order.shipments));
        }
      case 'in_progress_orders':
        if (roles.tailor) {
          return orders.filter(order => order.arrived && !order.fulfilled);
        } else {
          return orders.filter(
            order =>
              !isEmpty(order.shipments) && order.tailor && !order.fulfilled
          );
        }
      case 'ready_orders':
        return orders.filter(order => order.fulfilled);
      case 'late_orders':
        return orders.filter(order => order.late);
      default:
        return orders;
    }
  }

  countOrdersByStatus(status) {
    return this.sortOrdersByStatus(status).length;
  }

  getOrderStatus(order) {
    const {
      shipments,
      arrived,
      late,
      due_date,
      fulfilled,
      customer_alerted,
      ship_to_store,
    } = order;

    let status, color;

    if (isEmpty(order.shipments)) {
      status = 'Needs Shipping Details';
      color = 'gold';
    } else if (!isEmpty(order.shipments) && !order.arrived) {
      status = 'In Transit';
      color = 'green';
    } else if (order.late) {
      let dueTime = this.formatStatusString(order.due_date, true);
      status = dueTime;
      color = 'red';
    } else if (
      order.fulfilled &&
      !order.customer_alerted &&
      order.ship_to_store
    ) {
      status = 'Ready for Customer';
      color: 'green';
    } else {
      status = this.formatStatusString(order.due_date, false);
      color = 'orange';
    }
    return {status, color};
  }

  postShipment(orders, action, type) {
    this.props.setLoader();
    fireShipmentCreate(orders, action, type)
      .then(res => {
        this.props.removeLoader();
        this.setState({loadingLabel: false});
        this.refreshStoreOrders();
      })
      .catch(err => console.log('err', err));
  }

  // NOTE: these should go in shippingFunctions.js
  makeLabels([...orders]) {
    // This should [...print once with X separate labels (x == number of orders])
    const {userRoles: roles} = this.props;
    const order = [...orders][0];
    const action = shipmentActions(order, roles);
    return this.postShipment(orders, action, 'mail_shipment');
  }

  sendMessenger(orders) {
    // everything passed here
    const {userRoles: roles} = this.props;
    const order = orders[0];
    const action = shipmentActions(order, roles);
    console.log('POSTING MESSENGER', orders);
    return this.postShipment(orders, action, 'messenger_shipment');
  }

  toggleOrderSelect(order) {
    if (!this.state.selectedOrders.has(order)) {
      const newSelectedOrders = this.state.selectedOrders;
      newSelectedOrders.add(order);
      this.setState({seletecdOrders: newSelectedOrders});
    } else {
      const newSelectedOrders = this.state.selectedOrders;
      newSelectedOrders.delete(order);
      this.setState({seletecdOrders: newSelectedOrders});
    }
  }

  setOrderTabState(state) {
    this.setState({showOrderState: state});
  }

  renderShippingControls() {
    const {userRoles: roles} = this.props;
    if (roles.admin || roles.retailer) {
      const orders = this.state.selectedOrders;
      const labelFunction = () => this.makeLabels([...orders]);
      const messengerFunction = () => this.sendMessenger([...orders]);

      return (
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
      );
    } else {
      return <div />;
    }
  }

  renderOrderRow(order) {
    const {userRoles: roles} = this.props;
    const {id, customer, tailor, alterations_count} = order;
    const {first_name, last_name} = customer;
    let tailorDiv = <div />;

    if (tailor && (roles.admin || roles.retailer)) {
      tailorDiv = <div className="order-data-cell">{tailor.name}</div>;
    }
    const {color, status} = this.getOrderStatus(order);
    const route = `/orders/${id}`;

    let orderSelect = <div />;
    if (roles.admin || roles.retailer) {
      const orderIsToggled = this.state.selectedOrders.has(order);
      const orderToggle = () => this.toggleOrderSelect(order);

      orderSelect = (
        <Checkbox
          checked={orderIsToggled}
          type="checkbox"
          name={id}
          onChange={orderToggle}
        />
      );
    }

    return (
      <div className="order-row" key={id}>
        <div className="order-select-cell">{orderSelect}</div>
        <Link to={route} className="order-row-link">
          <div className="order-data-cell">#{id}</div>
          <div className="order-data-cell" style={{color}}>
            {status}
          </div>
          <div className="order-data-cell">
            {first_name} {last_name}
          </div>
          {tailorDiv}
          <div className="order-data-cell">{alterations_count}</div>
        </Link>
        <div className="order-data-break-row" />
      </div>
    );
  }

  renderOrderRowsByStatus() {
    const {openOrders} = this.props;
    if (!isEmpty(openOrders)) {
      const status = this.state.showOrderState;
      const sortedOrders = this.sortOrdersByStatus(status);
      return (
        <div className="order-data-container">
          {sortedOrders.map(order => this.renderOrderRow(order))}
        </div>
      );
    } else if (this.state.loadingOrders) {
      return (
        <div className="table-row">
          <div className="loading-orders">Loading Orders...</div>
        </div>
      );
    } else {
      return (
        <div className="table-row">
          <div className="no-orders">No orders found!</div>
        </div>
      );
    }
  }

  renderOrderStateTabs() {
    const allTabs = [
      {className: 'order-state-tab', status: 'new_orders', text: 'New'},
      {
        className: 'order-state-tab',
        status: 'in_progress_orders',
        text: 'Current',
      },
      {
        className: 'order-state-tab',
        status: 'ready_orders',
        text: 'Finished',
      },
      {className: 'order-state-tab', status: 'late_orders', text: 'Late'},
    ];

    const tabs = allTabs.map((tab, i) => {
      if (tab.status == this.state.showOrderState) {
        tab.className = tab.className.concat(' selected');
      }
      if (tab.status == 'late_orders') {
        if (this.countOrdersByStatus(tab.status) > 0) {
          tab.className = tab.className.concat(' late-orders');
        }
      }

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
      );
    });

    return <div className="order-state-row">{tabs}</div>;
  }

  renderOrderHeaders() {
    const {userRoles: roles} = this.props;
    let selectHeader = <h3 className="order-select-header-cell" />;
    let orderHeader = <h3 className="order-data-header-cell">Order</h3>;
    let statusHeader = <h3 className="order-data-header-cell">Status</h3>;
    let customerHeader = <h3 className="order-data-header-cell">Customer</h3>;
    let tailorHeader = <h3 className="order-data-header-cell" />;
    let quantityHeader = <h3 className="order-data-header-cell">Quantity</h3>;

    if (roles.admin || roles.retailer) {
      selectHeader = <h3 className="order-select-header-cell">Select:</h3>;
      tailorHeader = <h3 className="order-data-header-cell">Tailor</h3>;
    }

    return (
      <div className="order-headers-container">
        <div className="order-headers-row">
          {selectHeader}
          <div className="order-data-columns">
            {orderHeader}
            {statusHeader}
            {customerHeader}
            {tailorHeader}
            {quantityHeader}
          </div>
        </div>
      </div>
    );
  }

  renderTailorOrderRows() {
    const {openOrders} = this.props;
    const ordersWithShipments = this.sortOrdersByStatus('new_orders');

    if (!isEmpty(ordersWithShipments)) {
      return ordersWithShipments.map((order, i) => {
        const orderStatus = this.getOrderStatus(order);
        const {id, customer, alterations_count} = order;
        const {first_name, last_name} = customer;
        const {color, status} = orderStatus;
        const route = `/orders/${id}`;
        return <div />;
        // <div key={id}>
        //   <div className="order-row-link">
        //     <Link to={route}>
        //       <div className="order-row-cell">#{id}</div>
        //       <div style={{ color }}>{status}</div>
        //       <div className="order-row-cell">
        //         {first_name} {last_name}
        //       </div>
        //       <div className="order-row-cell">{alterations_count}</div>
        //     </Link>
        //   </div>
        //   <hr className="order-data-break-row" />
        // </div>
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    if (!this.props.currentStore) {
      return <Redirect to="/" />;
    }

    const {userRoles: {tailor, retailer, admin}} = this.props;

    const headerText = `Orders / ${this.props.currentStore.name}`;
    const orderHeaders = this.renderOrderHeaders;
    const orderRows = this.renderOrderRowsByStatus;
    const orderStateTabs = this.renderOrderStateTabs;
    const shippingControls = this.renderShippingControls;

    if (retailer || admin) {
      return (
        <div>
          <SectionHeader text={headerText} />
          <div className="orders">
            <div className="order-state-container">{orderStateTabs()}</div>
            <div className>{orderHeaders()}</div>
            <div className="order-header-break-row" />
            <div>{orderRows()}</div>
            <div>{shippingControls()}</div>
          </div>
        </div>
      );
    } else if (tailor) {
      return <div />;
      // <div>
      //   <SectionHeader text={headerText} />
      //   <div className="orders">
      //     <div>{orderHeaders()}</div>
      //     <hr className="order-header-hr" />
      //     <div className="order-data">{this.renderTailorOrderRows()}</div>
      //   </div>
      // </div>
    }
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getStoreOrders,
      setLoader,
      removeLoader,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresShow);
