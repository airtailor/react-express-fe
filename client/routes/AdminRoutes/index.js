import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithDynamicImport from '../../components/HOC/WithDynamicImport/';

import ReportRoutes from './ReportRoutes';
import CompanyRoutes from './CompanyRoutes';

const TailorIndex = WithDynamicImport(() =>
  import('../../components/admin/tailors/TailorIndex')
);
const RetailerIndex = WithDynamicImport(() =>
  import('../../components/admin/retailers/index')
);
const Dashboard = WithDynamicImport(() =>
  import('../../components/admin/index')
);

class AdminRoutes extends Component {
  static propTypes = {
    admin: PropTypes.bool.isRequired, // parentComponent
  };
  render() {
    const { admin } = this.props;
    return (
      <div>
        <Route
          exact
          path="/admin/tailors"
          render={props =>
            admin ? <TailorIndex {...props} /> : <Redirect to="/" />}
        />

        <Route
          exact
          path="/admin/retailers"
          render={props =>
            admin ? <RetailerIndex {...props} /> : <Redirect to="/" />}
        />

        <Route
          exact
          path="/admin/dashboard"
          render={props =>
            admin ? <Dashboard {...props} /> : <Redirect to="/" />}
        />

        <ReportRoutes {...this.props} />
        <CompanyRoutes {...this.props} />
      </div>
    );
  }
}

export default AdminRoutes;
