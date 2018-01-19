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
  customerReceived,
  setGrowler,
} from '../../../actions';

import {
  imageLoader,
  waitingForPostmatesUpdate,
} from '../../shipping/shippingFunctions';

import SectionHeader from '../../SectionHeader';
import Checkbox from '../../Checkbox';
import StatusCard from './StatusCard';

import RetailerOrderList from './RetailerOrderList/';

import SendOrder from './retailerOrderMgmtControls/SendOrder';
import CustomerOptions from './retailerOrderMgmtControls/CustomerOptions';

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
      loadingOrders: true,
    };
  }

  componentDidMount() {
    this.refreshStoreOrders();
    if (this.props.userRoles.retailer || this.props.userRoles.admin) {
      this.newInterval = setInterval(this.timer, 10000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.newInterval);
  }

  timer = () => {
    if (waitingForPostmatesUpdate(this.props.openOrders)) {
      this.refreshStoreOrders();
    }
  };

  refreshStoreOrders = () => {
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
  };

  formatStatusString(dueDate, late) {
    const todaysDate = moment(new Date());
    const momentDueDate = moment(dueDate);
    const diff = Math.abs(momentDueDate.diff(todaysDate, 'days'));
    const additionalString = late ? ' days late' : ' days to go';
    const status = (diff + additionalString).toUpperCase();
    return status;
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

    const { retailer, admin, tailor } = this.props.userRoles;

    let status, color;

    if (isEmpty(order.shipments)) {
      status = 'Needs Transit';
      color = 'red';
    } else if (!isEmpty(order.shipments) && !order.arrived) {
      const lastShipment = order.shipments[order.shipments.length - 1];
      const { delivery_type } = lastShipment;

      if (delivery_type === 'mail_shipment') {
        status = 'In Transit';
        color = 'gold';
      } else if (delivery_type === 'messenger_shipment') {
        const shipmentStatus = lastShipment.status;

        if (shipmentStatus === 'pending') {
          status = 'Contacting';
          color = 'red';
        } else if (shipmentStatus === 'pickup') {
          status = 'Picking Up';
          color = 'goldenrod';
        } else if (
          shipmentStatus === 'pickup_complete' ||
          shipmentStatus === 'dropoff'
        ) {
          status = 'Dropping Off';
          color = 'gold';
        } else if (shipmentStatus === 'delivered') {
          status = 'Delivered';
          color = 'green';
        }
      }
    } else if (order.late && !order.fulfilled) {
      if (admin || tailor) {
        const dueTime = this.formatStatusString(order.due_date, true);
        status = dueTime;
      } else if (retailer) {
        status = 'Delayed';
      }
      color = 'red';
    } else if (
      order.fulfilled &&
      !order.customer_alerted &&
      order.ship_to_store
    ) {
      status = 'In Transit';
      color = 'gold';
    } else if (
      order.fulfilled &&
      order.customer_alerted &&
      order.ship_to_store
    ) {
      status = 'Notified';
      color = 'red';
    } else if (order.arrived && !order.fulfilled) {
      status = this.formatStatusString(order.due_date, false);
      const statusNum = status.split('')[0];

      if (statusNum > 3) {
        color = 'green';
      } else if (statusNum > 0) {
        color = 'gold';
      } else if (statusNum < 1) {
        color = 'red';
      }
    }
    return { status, color };
  }

  handleBulkMailRes = res => {
    const { errors } = res.data.body;
    if (isEmpty(errors)) {
      this.setState({ selectedOrderShipments: res.data.body }, () => {
        const { shipping_label } = this.state.selectedOrderShipments[0];

        const print = () => {
          window.print();

          setTimeout(() => {
            this.setState({
              selectedOrders: new Set(),
              selectedOrderShipments: [],
            });
          }, 1000);
        };
        imageLoader(shipping_label, print);
      });
    } else {
      Object.keys(errors).map(key => {
        this.props.setGrowler({
          kind: 'warning',
          message: errors[key][0].message,
        });
      });
    }
  };

  handleMessengerRes = res => {
    const kind = 'success';
    const message = 'Messenger has been requested!';

    this.props.setGrowler({ kind, message });
    this.setState({ selectedOrders: new Set() });
  };

  alertCustomers = () => {
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
  };

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

  markCustomerReceived = () => {
    const orders = this.state.selectedOrders;
    const {
      currentStore: { id: store_id },
      setLoader,
      removeLoader,
      setGrowler,
    } = this.props;

    const orderIds = [...orders].map(order => order.id);

    setLoader();
    customerReceived(orderIds, store_id)
      .then(res => {
        removeLoader();
        const kind = 'success';
        const message =
          'Order has been marked as Completed! You can now view it in the Archive.';
        setGrowler({ kind, message });
        this.refreshStoreOrders();
        this.setState({ selectedOrders: new Set() });
      })
      .catch(err => console.log('err'));
  };

  sortOrdersByStatus = status => {
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
            const notFulfilled = !order.fulfilled;

            const messengerNotDeliveredYet =
              shipments.length > 0 &&
              lastShipment.delivery_type === 'messenger_shipment' &&
              lastShipment.status != 'delivered';

            return notFulfilled && (noShipments || messengerNotDeliveredYet);
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
            const { status, delivery_type } = shipments[shipments.length - 1];

            const mailShipmentExists = delivery_type === 'mail_shipment';
            const messengerShipmentDelivered = status === 'delivered';

            return (
              (mailShipmentExists || messengerShipmentDelivered) &&
              tailor &&
              !fulfilled
            );
          });
        }
      case 'ready_orders':
        return orders.filter(order => order.fulfilled);
      default:
        return orders;
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

    const {
      userRoles: { tailor, retailer, admin },
      userRoles,
      openOrders,
    } = this.props;

    const {
      loadingOrders,
      selectedOrders,
      selectedOrderShipments,
      showOrderState,
    } = this.state;

    const headerText = `Orders / ${this.props.currentStore.name}`;

    if (retailer || admin) {
      return (
        <RetailerOrderList
          showOrderState={showOrderState}
          loadingOrders={loadingOrders}
          headerText={headerText}
          openOrders={openOrders}
          userRoles={userRoles}
          selectedOrders={selectedOrders}
          selectedOrderShipments={selectedOrderShipments}
          handleBulkMailRes={this.handleBulkMailRes}
          handleMessengerRes={this.handleMessengerRes}
          refreshStoreOrders={this.refreshStoreOrders}
          setOrderTabState={this.setOrderTabState}
          markCustomerReceived={this.markCustomerReceived}
          alertCustomers={this.alertCustomers}
          toggleOrderSelect={this.toggleOrderSelect}
          sortOrdersByStatus={this.sortOrdersByStatus}
        />
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
