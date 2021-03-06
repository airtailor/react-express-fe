import React, { Component } from 'react';
import '../../styles/main.scss';
import PropTypes from 'prop-types';

import SiteRoutes from './SiteRoutes';
import AuthRoutes from './AuthRoutes';
import OrderRoutes from './OrderRoutes';
import AdminRoutes from './AdminRoutes';
import StoreRoutes from './StoreRoutes';
import CustomerRoutes from './CustomerRoutes';
import UserRoutes from './UserRoutes';

class AvailableRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
    admin: PropTypes.bool.isRequired, // parentComponent
    retailer: PropTypes.bool.isRequired, // parentComponent
    tailor: PropTypes.bool.isRequired, // parentComponent
  };
  render() {
    const { loggedIn, admin, retailer, tailor } = this.props;
    return (
      <div className="content">
        <SiteRoutes {...this.props} />
        <AuthRoutes {...this.props} />
        <OrderRoutes {...this.props} />
        <StoreRoutes {...this.props} />
        <AdminRoutes {...this.props} />
        <CustomerRoutes {...this.props} />
        <UserRoutes {...this.props} />
      </div>
    );
  }
}

export default AvailableRoutes;
