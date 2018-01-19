import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

import RetailerOrderList from './RetailerOrderList/';
import TailorOrderList from './TailorOrderList/';

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
      return (
        <TailorOrderList
          headerText={headerText}
          openOrders={openOrders}
          loadingOrders={loadingOrders}
          userRoles={userRoles}
          sortOrdersByStatus={this.sortOrdersByStatus}
        />
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresShow);
