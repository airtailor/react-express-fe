import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import {
  getStoreOrders,
  setLoader,
  removeLoader,
  alertCustomersPickup,
  setGrowler,
} from '../../actions';
import {
  fireShipmentCreate,
  shipmentTypes,
  shipmentActions,
  labelState,
  messengerAllowed,
  messengerAvailable,
  imageLoader,
} from '../shipping/shippingFunctions';

import SectionHeader from '../SectionHeader';
import OrderComplete from '../prints/OrderComplete';
import Checkbox from '../Checkbox';

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
      setGrowler,
    },
    dispatch
  );
};

class StoresShow extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    openOrders: PropTypes.array.isRequired, // mapStateToProps
    getStoreOrders: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor(props) {
    super();
    this.state = {
      showOrderState: 'new_orders',
      selectedOrders: new Set(),
      selectedOrderShipments: [],
    };
  }

  componentDidMount() {
    this.refreshStoreOrders();
  }

  refreshStoreOrders() {
    this.props.setLoader();

    const {
      getStoreOrders,
      match: { params: { store_id: paramsId } },
      currentUser: { user: { id: currentUserId } },
      userRoles: { admin },
    } = this.props;

    const storeId = paramsId && admin ? paramsId : currentUserId;
    this.setState({ loadingOrders: true });
    getStoreOrders(storeId)
      .then(res => {
        this.setState({ loadingOrders: false });
        this.props.removeLoader();
      })
      .catch(err => console.log(err));
  }

  postShipment(orders, action, type) {
    this.props.setLoader();
    // NOTE: we'll need to update this once we're returning > 1 shipment per post.
    // OrderComplete is set up for arrays, but the API is returning objects right now.
    return fireShipmentCreate(orders, action, type)
      .then(res => {
        this.props.removeLoader();
        this.setState({ loadingLabel: false });

        const errors = res.data.body.errors;
        if (isEmpty(errors)) {
          this.setState({ selectedOrderShipments: res.data.body });
        } else {
          Object.keys(errors).map(key => {
            this.props.setGrowler({
              kind: 'warning',
              message: errors[key][0].message,
            });
          });
        }
      })
      .then(() => {
        return this.refreshStoreOrders();
      })
      .catch(err => console.log('err', err));
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
    const { openOrders: orders, userRoles: roles } = this.props;
    switch (status) {
      case 'new_orders':
        if (roles.tailor) {
          return orders.filter(
            order => !isEmpty(order.shipments) && order.tailor
          );
        } else {
          return orders.filter(order => {
            const { shipments } = order;
            
            const noShipments = isEmpty(shipments);
            const lastShipment = shipments[shipments.length - 1];
            
            const messengerNotDeliveredYet = (
              shipments.length > 0 &&
              lastShipment.delivery_type === 'messenger_shipment' && 
              lastShipment.status != 'delivered'
            );

            return noShipments || messengerNotDeliveredYet;
          });
        }
      case 'in_progress_orders':
        if (roles.tailor) {
          return orders.filter(order => order.arrived && !order.fulfilled);
        } else {
          return orders.filter(order => {
            if (isEmpty(order.shipments)) {
              return false;
            }

            const { tailor, fulfilled, shipments } = order;
            const { status, delivery_type } = shipments[shipments.length -1];

            const mailShipmentExists = delivery_type === 'mail_shipment';
            const messengerShipmentDelivered = status === 'delivered';

            return (mailShipmentExists || messengerShipmentDelivered) && 
              tailor && 
              !fulfilled;
          });
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

  messengerDeliveryCompleted(order){
    let delivered = false;
    if (order.shipments.last.status === "delivered") {
      delivered = true;
    }
    return delivered;
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
      const lastShipment = order.shipments[order.shipments.length -1];
      const { delivery_type } = lastShipment;

      if (delivery_type === 'mail_shipment') {
        status = 'In Transit';
        color = 'green';
      } else if (delivery_type === 'messenger_shipment') {
        const shipmentStatus = lastShipment.status;

        if (shipmentStatus === 'pending') {
          status = 'Contacting';
        } else if (shipmentStatus === 'pickup') {
          status = 'Picking Up';
        } else if (
          shipmentStatus === 'pickup_complete' || 
          shipmentStatus === 'dropoff') {
          status = 'Dropping Off';
        } else if (shipmentStatus === 'delivered') {
          status = 'Delivered';
        }

        color = 'green';
      }
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
    } else if (order.arrived && !order.fulfilled) {
      status = this.formatStatusString(order.due_date, false);
      color = 'orange';
    }
    return { status, color };
  }

  printBulkShippingLabel() {
    const { shipping_label } = this.state.selectedOrderShipments[0];

    const print = () => {
      window.print();

        setTimeout(() => {
          this.setState({ 
            selectedOrders: new Set(), 
            selectedOrderShipments: [] 
          });
        }, 1000);
    }
    imageLoader(shipping_label, print);
  }

  makeLabels = ([...orders]) => {
    const { userRoles: roles } = this.props;
    if (!isEmpty(orders)) {
      const order = [...orders][0];
      const action = shipmentActions(order, roles);
      return Promise.all([
        this.postShipment(orders, action, 'mail_shipment'),
      ])
        .then(() => this.printBulkShippingLabel());
    }
  };

  sendMessenger = ([...orders]) => {
    const { userRoles: roles } = this.props;
    if (!isEmpty(orders)) {
      const order = orders[0];
      const action = shipmentActions(order, roles);
      return this.postShipment(orders, action, 'messenger_shipment')
        .then(() =>
        this.setState({ selectedOrders: new Set() })
      );
    }
  };

  alertCustomers() {
    const { userRoles: roles, currentStore: { id: store_id } } = this.props;
    const orders = this.state.selectedOrders;
    this.props.setLoader();
    alertCustomersPickup(orders, store_id).then(res => {
      if (res.body.status === 200) {
        const kind = 'success';
        const message =
          'Your customers have been notified to pick up their orders.';
        this.props.setGrowler({ kind, message });
        this.props.removeLoader();
        this.refreshStoreOrders();
        this.setState({ selectedOrders: new Set() });
      }
    });
  }

  toggleOrderSelect = order => {
    if (!this.state.selectedOrders.has(order)) {
      const newSelectedOrders = this.state.selectedOrders;
      newSelectedOrders.add(order);
      this.setState({ selectedOrders: newSelectedOrders });
    } else {
      const newSelectedOrders = this.state.selectedOrders;
      newSelectedOrders.delete(order);
      this.setState({ selectedOrders: newSelectedOrders });
    }
  };

  setOrderTabState = state => {
    this.setState({ showOrderState: state, selectedOrders: new Set() });
  };

  renderButton(text, params, callback = () => console.log('')) {
    const className = params.className;
    const clickArgs = params.clickArgs || undefined;
    const disabled = params.disabled;
    return (
      <div>
        <input
          type="submit"
          onClick={() => callback(clickArgs)}
          disabled={disabled}
          className={className}
          value={text}
        />
      </div>
    );
  }

  renderMessengerButton = disabled => {
    const { userRoles: roles } = this.props;
    const orders = this.state.selectedOrders;
    let bool = disabled || this.state.sendingMessenger;
    const onClick = this.sendMessenger;
    const now = moment();
    if (messengerAvailable(now)) {
      return (
        <div>
          {this.renderButton(
            'Send Messenger',
            {
              disabled: bool,
              className: 'messenger-button',
              clickArgs: orders,
            },
            onClick
          )}
        </div>
      );
    }
  };

  renderLabelsButton = disabled => {
    const { userRoles: roles } = this.props;
    const orders = [...this.state.selectedOrders];
    let bool = disabled || this.state.loadingLabel;
    const onClick = this.makeLabels;

    return (
      <div>
        {this.renderButton(
          'Create Labels',
          {
            disabled: bool,
            className: 'print-label-button',
            clickArgs: orders,
          },
          onClick
        )}
        <OrderComplete shipmentSet={this.state.selectedOrderShipments} />
      </div>
    );
  };

  renderAlertButton = disabled => {
    const orders = this.state.selectedOrders;
    const onClick = () => this.alertCustomers();
    return this.renderButton(
      'Alert Customers',
      {
        disabled: disabled,
        className: 'print-label-button',
        clickArgs: orders,
      },
      onClick
    );
  };

  renderShippingControls = () => {
    const { showOrderState, selectedOrders } = this.state;
    const { userRoles: roles } = this.props;

    if (roles.admin || roles.retailer) {
      const labelFunction = this.renderLabelsButton;
      const labelBool = !(
        showOrderState === 'new_orders' && selectedOrders.size > 0
      );

      const messengerFunction = this.renderMessengerButton;
      const messengerBool = !(
        showOrderState === 'new_orders' && selectedOrders.size > 0
      );

      const alertFunction = this.renderAlertButton;
      const alertBool = !(
        showOrderState === 'ready_orders' && selectedOrders.size > 0
      );

      return (
        <div>
          <div className="shipping-button-container">
            {labelFunction(labelBool)}
            {messengerFunction(messengerBool)}
            {alertFunction(alertBool)}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  };

  renderOrderRow(order) {
    const orderStatus = this.getOrderStatus(order);
    const { id, customer, alterations_count } = order;
    const { first_name, last_name } = customer;
    const { color, status } = orderStatus;
    const route = `/orders/${id}`;
    return (
      <div className="order-row" key={id}>
        <Link to={route} className="order-row-link-no-select">
          <div className="order-cell-no-select">#{id}</div>
          <div style={{ color }} className="order-cell-no-select">
            {status}
          </div>
          <div className="order-cell-no-select">
            {first_name} {last_name}
          </div>
          <div className="order-cell-no-select">{alterations_count}</div>
        </Link>
        <div className="order-data-break-row" />
      </div>
    );
  }

  renderOrderRowWithSelect(order) {
    const { userRoles: roles } = this.props;
    const { id, customer, tailor, alterations_count } = order;
    const { first_name, last_name } = customer;
    const { color, status } = this.getOrderStatus(order);
    const route = `/orders/${id}`;
    const orderIsToggled = this.state.selectedOrders.has(order);
    const orderToggle = () => this.toggleOrderSelect(order);

    let tailorDiv;
    if (tailor) {
      tailorDiv = <div className="order-data-cell">{tailor.name}</div>;
    } else {
      tailorDiv = <div className="order-data-cell">None</div>;
    }
    const orderSelect = (
      <Checkbox
        checked={orderIsToggled}
        type="checkbox"
        name={id}
        onChange={orderToggle}
      />
    );

    return (
      <div className="order-row" key={id}>
        <div className="order-select-cell">{orderSelect}</div>
        <Link to={route} className="order-row-link">
          <div className="order-data-cell">#{id}</div>
          <div style={{ color }} className="order-data-cell">
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

  renderStateTabs = () => {
    const allTabs = [
      { className: 'order-state-tab', status: 'new_orders', text: 'New' },
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
      { className: 'order-state-tab', status: 'late_orders', text: 'Late' },
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
  };

  renderHeaderCell(text, withSelect, isSelect) {
    if (isSelect) {
      return <h3 className="order-select-header-cell">{text}</h3>;
    } else if (withSelect) {
      return <h3 className="order-data-header-cell">{text}</h3>;
    } else {
      return <h3 className="order-header-cell-no-select">{text}</h3>;
    }
  }

  renderTailorHeaders = () => {
    const orderHeader = this.renderHeaderCell;
    return (
      <div className="order-headers-container">
        <div className="order-headers-row-no-select">
          <div className="order-headers-container-no-select">
            {orderHeader('Id', false)}
            {orderHeader('Status', false)}
            {orderHeader('Customer', false)}
            {orderHeader('Quantity', false)}
          </div>
        </div>
      </div>
    );
  };

  renderRetailerHeaders = () => {
    const orderHeader = this.renderHeaderCell;
    return (
      <div className="order-headers-container">
        <div className="order-headers-row">
          {orderHeader('Select:', false, true)}
          <div className="order-data-headers-container">
            {orderHeader('Order', true, false)}
            {orderHeader('Status', true, false)}
            {orderHeader('Customer', true, false)}
            {orderHeader('Tailor', true, false)}
            {orderHeader('Quantity', true, false)}
          </div>
        </div>
      </div>
    );
  };

  renderRetailerRows = () => {
    const { openOrders } = this.props;
    if (!isEmpty(openOrders)) {
      const status = this.state.showOrderState;
      const sortedOrders = this.sortOrdersByStatus(status);
      if (!isEmpty(sortedOrders)) {
        return (
          <div className="order-data-container">
            {sortedOrders.map(order => this.renderOrderRowWithSelect(order))}
          </div>
        );
      } else {
        return (
          <div className="table-row">
            <div className="no-orders">No orders found!</div>
          </div>
        );
      }
    } else if (this.state.loadingOrders) {
      return (
        <div className="table-row">
          <div className="loading-orders">Loading Orders...</div>
        </div>
      );
    }
  };

  renderTailorRows = () => {
    const { openOrders } = this.props;
    if (!isEmpty(openOrders)) {
      const ordersWithShipments = this.sortOrdersByStatus('new_orders');
      if (!isEmpty(ordersWithShipments)) {
        return (
          <div className="order-data-container">
            {ordersWithShipments.map(order => this.renderOrderRow(order))}
          </div>
        );
      } else {
        return (
          <div className="table-row">
            <div className="no-orders">No orders found!</div>
          </div>
        );
      }
    } else if (this.state.loadingOrders) {
      return (
        <div className="table-row">
          <div className="loading-orders">Loading Orders...</div>
        </div>
      );
    }
  };

  render() {
    if (!this.props.currentStore) {
      return <Redirect to="/" />;
    }

    const { userRoles: { tailor, retailer, admin } } = this.props;
    const headerText = `Orders / ${this.props.currentStore.name}`;

    if (retailer || admin) {
      const orderStateTabs = this.renderStateTabs;
      const orderRows = this.renderRetailerRows;
      const orderHeaders = this.renderRetailerHeaders;
      const shippingControls = this.renderShippingControls;

      return (
        <div>
          <SectionHeader text={headerText} />
          <div className="orders">
            <div className="order-state-container">{orderStateTabs()}</div>
            <div>{orderHeaders()}</div>
            <div className="order-header-break-row" />
            <div>{orderRows()}</div>
            <div>{shippingControls()}</div>
          </div>
        </div>
      );
    } else if (tailor) {
      const orderRows = this.renderTailorRows;
      const orderHeaders = this.renderTailorHeaders;
      return (
        <div>
          <SectionHeader text={headerText} />
          <div className="orders">
            <div>{orderHeaders()}</div>
            <div className="order-header-break-row" />
            <div>{orderRows()}</div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresShow);
