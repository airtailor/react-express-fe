import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Redirect, Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import { getArchivedOrders, setLoader, removeLoader } from '../../actions';

import SectionHeader from '../SectionHeader';

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    archivedOrders: store.archivedOrders,
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getArchivedOrders, setLoader, removeLoader },
    dispatch
  );
};

class ArchivedOrders extends Component {
  constructor(props) {
    super();
    this.state = { loadingOrders: true };
  }

  static propTypes = {
    currentUser: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    archivedOrders: PropTypes.array.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    getArchivedOrders: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
  };

  componentDidMount() {
    const { setLoader, removeLoader, getArchivedOrders } = this.props;

    setLoader();
    getArchivedOrders().then(() => removeLoader());
  }

  renderArchivedOrderRow(order) {
    const { userRoles: roles } = this.props;
    const { id, tailor, retailer, customer, alterations_count } = order;

    const fulfilledDate = moment(order.fulfilled_date).format('MM-DD-YYYY');
    let customerOrTailor, quantityOrRetailer;
    if (roles.admin) {
      if (!tailor || !retailer) {
        return '';
      }
      customerOrTailor = tailor.name;
      quantityOrRetailer = retailer.name;
    } else {
      const { first_name, last_name } = customer;
      const name = `${first_name} ${last_name}`;
      customerOrTailor = name;
      quantityOrRetailer = alterations_count;
    }

    const route = `/orders/${id}`;
    return (
      <div className="archive-row" key={id}>
        <Link to={route} className="archive-link">
          <div className="archive-order-cell">#{id}</div>
          <div className="archive-order-cell" style={{ color: 'green' }}>
            {fulfilledDate}
          </div>
          <div className="archive-order-cell">{customerOrTailor}</div>
          <div className="archive-order-cell">{quantityOrRetailer}</div>
        </Link>
        <div className="archive-break-row" />
      </div>
    );
  }

  renderArchivedOrderRows = () => {
    const { archivedOrders } = this.props;

    if (!isEmpty(archivedOrders)) {
      return (
        <div className="archive-container">
          {archivedOrders.map(order => this.renderArchivedOrderRow(order))}
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
  };

  renderArchivedOrderHeaders = () => {
    const { userRoles: role } = this.props;
    let customerOrTailor, quantityOrSource;

    if (role.admin) {
      customerOrTailor = 'Tailor';
      quantityOrSource = 'Source';
    } else {
      customerOrTailor = 'Customer';
      quantityOrSource = 'Quantity';
    }

    return (
      <div>
        <div className="archive-headers-container">
          <div className="archive-headers-row">
            <h3 className="archive-header-cell">Order</h3>
            <h3 className="archive-header-cell">FulFilled Date</h3>
            <h3 className="archive-header-cell">{customerOrTailor}</h3>
            <h3 className="archive-header-cell">{quantityOrSource}</h3>
          </div>
        </div>
        <div className="archive-header-break-row" />
      </div>
    );
  };
  render() {
    if (!this.props.currentStore) {
      return <Redirect to="/" />;
    }
    const headerText = `Archived Orders / ${this.props.currentStore.name}`;
    const archivedOrderHeaders = this.renderArchivedOrderHeaders;
    const archivedOrderRows = this.renderArchivedOrderRows;

    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="archive">
          {archivedOrderHeaders()}
          {archivedOrderRows()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedOrders);
