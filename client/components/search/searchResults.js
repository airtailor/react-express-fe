import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Redirect, Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    searchResults: store.searchResults,
  };
};

class SearchResults extends Component {
  formatDueDate(dueDate, late) {
    const todaysDate = moment(new Date());
    const momentDueDate = moment(dueDate);
    const diff = momentDueDate.diff(todaysDate, 'days');
    const additionalString = late ? ' days late' : ' days to go';
    const status = (diff + additionalString).toUpperCase();
    return status;
  }

  getOrderStatus(order) {
    if (!order.due_date) {
      return { status: 'In Transit', color: 'green' };
    } else if (order.late) {
      let dueTime = this.formatDueDate(order.due_date, true);
      return { status: dueTime, color: 'red' };
    } else if (order.fulfilled) {
      return { status: 'Fulfilled', color: 'green' }
    } else {
      let dueTime = this.formatDueDate(order.due_date, false);
      return { status: dueTime, color: 'orange' };
    }
  }

  renderOrderRows() {
    const { searchResults } = this.props;
    if (searchResults) {
      return searchResults.map((order, i) => {
        const orderStatus = this.getOrderStatus(order);
        const { id, customer, alterations_count } = order;
        const { first_name, last_name } = customer;
        const { color, status } = orderStatus;
        const route = `/orders/${id}`;
        return (
          <div key={id}>
            <div className="order-row">
              <Link to={route} className="order-row-link">
                <div className="order-data-cell">#{id}</div>
                <div className="order-data-cell" style={{ color }}>
                  {status}
                </div>
                <div className="order-data-cell">
                  {first_name} {last_name}
                </div>
                <div className="order-data-cell">{alterations_count}</div>
              </Link>
            </div>
            <hr className="order-row-break-row" />
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
          <div className="order-headers-container">
            <div className="order-headers-row">
              <h3 className="order-data-header-cell">Order</h3>
              <h3 className="order-data-header-cell">Status</h3>
              <h3 className="order-data-header-cell">Customer</h3>
              <h3 className="order-data-header-cell">Quantity</h3>
            </div>
          </div>
          <div className="order-header-break-row" />
          <div className="order-data-container">{this.renderOrderRows()}</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SearchResults);
