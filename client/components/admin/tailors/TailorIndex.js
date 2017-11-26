import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import isEmpty from "lodash/isEmpty";
import { Redirect, Link } from "react-router-dom";
import { getTailorList, setLoader, removeLoader } from "../../../actions";
import SectionHeader from "../../SectionHeader";

class TailorsIndex extends Component {
  constructor(props) {
    super();

    this.renderTailorHeaders = this.renderTailorHeaders.bind(this);
    this.renderTailorRows = this.renderTailorRows.bind(this);
  }
  componentDidMount() {
    const { setLoader, removeLoader, getTailorList } = this.props;
    setLoader();
    getTailorList().then(() => removeLoader());
  }

  truncatedTailorName(name) {
    const length = 14;
    return name.length > 14 ? `${name.substring(0, 11)}...` : name;
  }

  renderTailorRow(tailor) {
    const {
      id,
      name,
      active_orders_count: assigned,
      arrived_orders_count: arrived,
      late_orders_count: late
    } = tailor;

    const truncatedTailorName = this.truncatedTailorName(name);
    const route = `/stores/${id}/orders`;

    return (
      <div key={id}>
        <div className="tailor-data-row">
          <Link to={route} className="tailor-link">
            <div className="tailor-data-cell">{truncatedTailorName}</div>
            <div className="tailor-data-cell">{assigned}</div>
            <div className="tailor-data-cell">{arrived}</div>
            <div className="tailor-data-cell" style={{ color: "red" }}>
              {late}
            </div>
          </Link>
        </div>
        <hr className="tailor-break-row" />
      </div>
    );
  }

  renderTailorRows() {
    const { tailorList } = this.props;
    if (!isEmpty(tailorList)) {
      return (
        <div className="tailor-container">
          {tailorList.map(tailor => this.renderTailorRow(tailor))}
        </div>
      );
    } else {
      return (
        <div className="table-row">
          <div className="loading-orders">Loading Tailors...</div>
        </div>
      );
    }
  }

  renderTailorHeaders() {
    return (
      <div>
        <div className="tailor-headers-container">
          <div className="tailor-headers-row">
            <h3 className="tailor-header-cell">Tailor</h3>
            <h3 className="tailor-header-cell">Assigned</h3>
            <h3 className="tailor-header-cell">In Stock</h3>
            <h3 className="tailor-header-cell">Late</h3>
          </div>
          <hr className="tailor-header-break-row" />
        </div>
      </div>
    );
  }

  render() {
    const tailorOrderHeaders = this.renderTailorHeaders;
    const tailorOrderRows = this.renderTailorRows;
    return (
      <div>
        <SectionHeader text={"Manage Tailors"} />
        <div className="tailors">
          {tailorOrderHeaders()}
          {tailorOrderRows()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    tailorList: store.tailorList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setLoader, removeLoader, getTailorList },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TailorsIndex);
