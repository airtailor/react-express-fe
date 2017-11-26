import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import OrderReports from '../../components/reports/orders';

class ReportRoutes extends Component {
  static propTypes = {
    admin: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const {admin} = this.props;
    return (
      <div>
        <Route
          path="/admin/reports/orders"
          render={props =>
            loggedIn ? <OrderReports {...props} /> : <Redirect to="/sign_in" />}
        />
      </div>
    );
  }
}

export default ReportRoutes;
