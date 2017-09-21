import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import {Redirect, Link} from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import {getArchivedOrders} from '../../actions';

class ArchivedOrders extends Component {
  componentDidMount() {
    this.props.getArchivedOrders();
  }

  renderOrderRows() {
    const {archivedOrders} = this.props;
    if (archivedOrders) {
      return archivedOrders.map((order, i) => {
        const fulfilledDate = moment(order.fulfilled_date).format('MM-DD-YYYY');
        const {id, customer, alterations_count} = order;
        const {first_name, last_name} = customer;
        const route = `/orders/${id}`;
        return (
          <div key={id}>
            <div className="order-row">
              <Link to={route} className="flex-container">
                <div className="order-data">#{id}</div>
                <div className="order-data" style={{color: 'green'}}>
                  {fulfilledDate}
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
    const headerText = `Archived Orders / ${this.props.currentStore.name}`;
    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="orders">
          <div className="order-row-header">
            <h3 className="order-column">Order</h3>
            <h3 className="order-column">FulFilled Date</h3>
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
    archivedOrders: store.archivedOrders,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getArchivedOrders}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedOrders);
