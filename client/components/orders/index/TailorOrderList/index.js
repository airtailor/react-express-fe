import React, { Component } from 'react';

import SectionHeader from '../../../SectionHeader';
import OrderHeaders from './OrderHeaders';
import OrderRows from './OrderRows';

class TailorOrderList extends Component {
  render() {
    const {
      headerText,
      openOrders,
      loadingOrders,
      sortOrdersByStatus,
      userRoles,
    } = this.props;
    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="orders">
          <div>
            <OrderHeaders />
          </div>
          <div className="order-header-break-row" />
          <div>
            <OrderRows
              openOrders={openOrders}
              loadingOrders={loadingOrders}
              sortOrdersByStatus={sortOrdersByStatus}
              userRoles={userRoles}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TailorOrderList;
