import React, {Component} from 'react';
import '../../styles/main.scss';
import PropTypes from 'prop-types';

import SiteRoutes from './SiteRoutes';
import AuthRoutes from './AuthRoutes';
import OrderRoutes from './OrderRoutes';
import MessageRoutes from './MessageRoutes';
import ConversationRoutes from './ConversationRoutes';
import AdminRoutes from './AdminRoutes';

class AvailableRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
    admin: PropTypes.bool.isRequired, // parentComponent
    retailer: PropTypes.bool.isRequired, // parentComponent
    tailor: PropTypes.bool.isRequired, // parentComponent
  };
  render() {
    const {loggedIn, admin, retailer, tailor} = this.props;
    return (
      <div className="content">
        <SiteRoutes {...props} />
        <AuthRoutes {...props} />
        <OrderRoutes {...props} />
        <MessageRoutes {...props} />
        <ConversationRoutes {...props} />
        <AdminRoutes {...props} />
      </div>
    );
  }
}

export default AvailableRoutes;
