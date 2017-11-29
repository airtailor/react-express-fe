import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

class OrderReportRows extends Component {
  static propTypes = {
    orders: PropTypes.array.isRequired, // parentComponent
  };

  renderReportRows() {
    const { orders } = this.props;
    return orders.map((order, index) => {
      const {
        id,
        fulfilled_date,
        retailer: { name: retailerName },
        tailor: { name: tailorName },
        total,
      } = order;

      const formattedDate = moment(fulfilled_date).format('MM-DD-YYYY');

      const route = `/orders/${id}`;

      return (
        <div key={index}>
          <div className="report-row-container">
            <div className="report-row">
              <Link to={route} className="report-row-link">
                <div className="report-cell">#{id}</div>
                <div className="report-cell">${total.toFixed(2)}</div>
                <div className="report-cell">{formattedDate}</div>
                <div className="report-cell">{tailorName}</div>
                <div className="report-cell">{retailerName}</div>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="orders">
        <div className="reports-container">{this.renderReportRows()}</div>
      </div>
    );
  }
}

export default OrderReportRows;
