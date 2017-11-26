import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import WithSectionHeader from '../HOC/WithSectionHeader';

class ReportsIndex extends Component {
  render() {
    return (
      <div>
        <h1>Hi Im Reports Index</h1>
        <Link to="/admin/reports/orders">Order Reports</Link>
      </div>
    );
  }
}

export default WithSectionHeader(ReportsIndex);
