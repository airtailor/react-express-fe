import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import WithSectionHeader from '../../HOC/WithSectionHeader';
import OrderReportRows from './OrderReportRows';
import { setLoader, removeLoader, getCurrentReport } from './ducks/actions';

const mapStateToProps = store => {
  return {
    report: store.currentReport,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getCurrentReport, setLoader, removeLoader },
    dispatch
  );
};

class OrdersReport extends Component {
  static propTypes = {
    report: PropTypes.object.isRequired, // mapStateToProps
    getCurrentReport: PropTypes.func.isRequired, // mapDispatchToProps
    setLoader: PropTypes.func.isRequired, // mapDispatchToProps
    removeLoader: PropTypes.func.isRequired, // mapDispatchToProps
  };

  componentDidMount() {
    this.props.getCurrentReport();
  }

  renderReportHeaders() {
    return (
      <div>
        <div className="report-headers-container">
          <div className="report-headers-row">
            <h3 className="report-header-cell">Order</h3>
            <h3 className="report-header-cell">Total</h3>
            <h3 className="report-header-cell">Fulfilled</h3>
            <h3 className="report-header-cell">Tailor</h3>
            <h3 className="report-header-cell">retailer</h3>
          </div>
        </div>
        <div className="report-header-break-row" />
      </div>
    );
  }

  render() {
    const { start_date, end_date, orders } = this.props.report;
    return (
      <div>
        <div className="reports-container">
          <h1>Current Orders Report</h1>
          <p>Start Date: {start_date}</p>
          <p>End Date: {end_date}</p>
          <Link to="/admin/reports">All Reports</Link>
        </div>
        {this.renderReportHeaders()}
        <OrderReportRows orders={orders} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithSectionHeader(OrdersReport)
);
