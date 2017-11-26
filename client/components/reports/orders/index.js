import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import WithSectionHeader from '../../HOC/WithSectionHeader';

class OrdersReport extends Component {
  render() {
    return (
      <div>
        <h1>Hi Im Order Reports</h1>
        <Link to="/admin/reports">All Reports</Link>
      </div>
    );
  }
}

export default WithSectionHeader(OrdersReport);
