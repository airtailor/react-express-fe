import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import OrderReports from '../../../components/reports/orders';
import ReportsIndex from '../../../components/reports';

class ReportRoutes extends Component {
  static propTypes = {
    admin: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const {admin} = this.props;
    return (
      <div>
        <Route
          exact
          path="/admin/reports"
          render={props =>
            admin ? <ReportsIndex {...props} /> : <Redirect to="/sign_in" />}
        />

        <Route
          exact
          path="/admin/reports/orders"
          render={props =>
            admin ? <OrderReports {...props} /> : <Redirect to="/sign_in" />}
        />
      </div>
    );
  }
}

export default ReportRoutes;
