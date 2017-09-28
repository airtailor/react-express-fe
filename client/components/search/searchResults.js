import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Redirect, Link} from 'react-router-dom';
import SectionHeader from '../SectionHeader';

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
    const {searchResults} = this.props;
    if (searchResults) {
      return searchResults.map((order, i) => {
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
    searchResults: store.searchResults,
  };
};

export default connect(mapStateToProps)(SearchResults);
