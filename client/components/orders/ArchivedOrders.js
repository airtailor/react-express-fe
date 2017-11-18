import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import { Redirect, Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import isEmpty from "lodash/isEmpty";
import { getArchivedOrders, setLoader, removeLoader } from "../../actions";

class ArchivedOrders extends Component {
  constructor(props) {
    super();
    this.state = { loadingOrders: true };
    this.renderArchivedOrderHeaders = this.renderArchivedOrderHeaders.bind(
      this
    );
    this.renderArchivedOrderRows = this.renderArchivedOrderRows.bind(this);
  }
  componentDidMount() {
    const { setLoader, removeLoader, getArchivedOrders } = this.props;

    setLoader();
    getArchivedOrders().then(() => removeLoader());
  }

  renderArchivedOrderRow(order) {
    const { userRoles: roles } = this.props;
    const { id, tailor, retailer, customer, alterations_count } = order;

    const fulfilledDate = moment(order.fulfilled_date).format("MM-DD-YYYY");
    let customerOrTailor, quantityOrRetailer;
    if (roles.tailor) {
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
      <div className="order-row" key={id}>
        <Link to={route} className="order-row-link row-border-bottom">
          <div className="order-data-cell">#{id}</div>
          <div className="order-data-cell" style={{ color: "green" }}>
            {fulfilledDate}
          </div>
          <div className="order-data-cell">{customerOrTailor}</div>
          <div className="order-data-cell">{quantityOrRetailer}</div>
        </Link>
      </div>
    );
  }

  renderArchivedOrderRows() {
    const { archivedOrders } = this.props;
    if (!isEmpty(archivedOrders)) {
      return (
        <div className="order-data-container">
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
  }

  renderArchivedOrderHeaders() {
    const { userRoles: role } = this.props;
    let customerOrTailor, quantityOrSource;

    if (role.admin) {
      customerOrTailor = "Tailor";
      quantityOrSource = "Source";
    } else {
      customerOrTailor = "Customer";
      quantityOrSource = "Quantity";
    }

    return (
      <div className="order-headers-container">
        <div className="order-headers-row">
          <h3 className="order-data-header-cell">Order</h3>
          <h3 className="order-data-header-cell">FulFilled Date</h3>
          <h3 className="order-data-header-cell">{customerOrTailor}</h3>
          <h3 className="order-data-header-cell">{quantityOrSource}</h3>
        </div>
        <div className="order-header-break-row" />
      </div>
    );
  }
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
        <div className="orders">
          {archivedOrderHeaders()}
          {archivedOrderRows()}
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
    userRoles: store.userRoles
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getArchivedOrders, setLoader, removeLoader },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedOrders);
