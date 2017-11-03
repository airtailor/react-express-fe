import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {Redirect, Link} from 'react-router-dom';
import {getStoreOrders, setLoader, removeLoader} from '../../actions';
import SectionHeader from '../SectionHeader';

class StoresShow extends Component {
  componentDidMount() {
    const {
      setLoader,
      removeLoader,
      currentUser: {user: {store_id: userStoreId, roles: [{name: roleName}]}},
      match: {params: {store_id: paramsStoreId}},
      getStoreOrders,
    } = this.props;

    const storeId = roleName === 'admin' ? paramsStoreId : userStoreId;

    setLoader();
    getStoreOrders(storeId).then(() => removeLoader());
  }

  formatDueDate(dueDate, late) {
    const todaysDate = moment(new Date());
    const momentDueDate = moment(dueDate);
    const diff = Math.abs(momentDueDate.diff(todaysDate, 'days'));
    const additionalString = late ? ' days late' : ' days to go';
    const status = (diff + additionalString).toUpperCase();
    return status;
  }

  getOrderStatus(order) {
    if (!order.due_date) {
      return {status: 'In Transit', color: 'green'};
    } else if (order.late) {
      let dueTime = this.formatDueDate(order.due_date, true);
      return {status: dueTime, color: 'red'};
    } else {
      let dueTime = this.formatDueDate(order.due_date, false);
      return {status: dueTime, color: 'orange'};
    }
  }

  renderOrderRows() {
    const {openOrders} = this.props;
    if (openOrders) {
      return openOrders.map((order, i) => {
        const orderStatus = this.getOrderStatus(order);
        const {id, customer, alterations_count} = order;
        const {first_name, last_name} = customer;
        const {color, status} = orderStatus;
        const route = `/orders/${id}`;
        return (
          <div key={id}>
            <div className="order-row">
              <Link to={route} className="flex-container">
                <div className="order-data">#{id}</div>
                <div className="order-data" style={{color}}>
                  {status}
                </div>
                <div className="order-data">
                  {first_name} {last_name}
                </div>
                <div className="order-data">{alterations_count}</div>
              </Link>
            </div>
            <hr className="order-row-hr" />
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    if (!this.props.currentStore) {
      return <Redirect to="/" />;
    }

    const headerText = `Orders / ${this.props.currentStore.name}`;
    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="orders">
          <div className="order-row-header">
            <h3 className="order-column">Order</h3>
            <h3 className="order-column">Status</h3>
            <h3 className="order-column">Customer</h3>
            <h3 className="order-column">Quantity</h3>
          </div>
          <hr className="order-header-hr" />
          <div className="order-rows">{this.renderOrderRows()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {getStoreOrders, setLoader, removeLoader},
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresShow);
