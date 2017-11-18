import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import { Redirect, Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import { getArchivedOrders, setLoader, removeLoader } from "../../actions";

class ArchivedOrders extends Component {
  componentDidMount() {
    const { setLoader, removeLoader, getArchivedOrders } = this.props;

    setLoader();
    getArchivedOrders().then(() => removeLoader());
  }

  renderOrderRows() {
    const { archivedOrders } = this.props;
    if (archivedOrders.length > 0) {
      return archivedOrders.map((order, i) => {
        const fulfilledDate = moment(order.fulfilled_date).format("MM-DD-YYYY");
        let customerOrTailor, quantityOrRetailer;
        const { id, tailor, retailer, customer, alterations_count } = order;

        if (tailor) {
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
          <div key={id}>
            <div className="order-row">
              <Link to={route} className="order-row-link">
                <div className="order-data-cell">#{id}</div>
                <div className="order-data-cell" style={{ color: "green" }}>
                  {fulfilledDate}
                </div>
                <div className="order-data-cell">{customerOrTailor}</div>
                <div className="order-data-cell">{quantityOrRetailer}</div>
              </Link>
            </div>
            <div className="order-data-break-row" />
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
    const role = this.props.userRoles;
    let customerOrTailor, quantityOrSource;

    if (role.admin) {
      customerOrTailor = "Tailor";
      quantityOrSource = "Source";
    } else {
      customerOrTailor = "Customer";
      quantityOrSource = "Quantity";
    }
    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="orders">
          <div className="order-headers-row">
            <h3 className="order-select-header-cell">Order</h3>
            <h3 className="order-select-header-cell">FulFilled Date</h3>
            <h3 className="order-select-header-cell">{customerOrTailor}</h3>
            <h3 className="order-select-header-cell">{quantityOrSource}</h3>
          </div>
          <div className="order-header-break-row" />
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
