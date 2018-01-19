import React, { Component } from 'react';

import SectionHeader from '../../../SectionHeader';

import OrderTabs from './OrderTabs';
import OrderHeaders from './OrderHeaders';
import OrderRows from './OrderRows';

import SendOrder from '../retailerOrderMgmtControls/SendOrder';
import CustomerOptions from '../retailerOrderMgmtControls/CustomerOptions';

class RetailerOrderList extends Component {
  mgmtControls = () => {
    const {
      showOrderState,
      selectedOrders,
      selectedOrderShipments,
      handleBulkMailRes,
      handleMessengerRes,
      refreshStoreOrders,
      markCustomerReceived,
      alertCustomers,
    } = this.props;

    if (showOrderState === 'new_orders') {
      return (
        <SendOrder
          selectedOrders={[...selectedOrders]}
          selectedOrderShipments={[...selectedOrderShipments]}
          handleBulkMailRes={handleBulkMailRes}
          handleMessengerRes={handleMessengerRes}
          refreshStoreOrders={refreshStoreOrders}
        />
      );
    } else if (showOrderState === 'ready_orders') {
      return (
        <CustomerOptions
          selectedOrders={[...selectedOrders]}
          alertCustomers={alertCustomers}
          markCustomerReceived={markCustomerReceived}
        />
      );
    }
  };

  render() {
    const {
      headerText,
      showOrderState,
      openOrders,
      userRoles,
      loadingOrders,
      selectedOrders,
      setOrderTabState,
      toggleOrderSelect,
      sortOrdersByStatus,
    } = this.props;

    return (
      <div>
        <SectionHeader text={headerText} />
        <div className="orders">
          <div className="order-state-container">
            <OrderTabs
              userRoles={userRoles}
              openOrders={openOrders}
              showOrderState={showOrderState}
              setOrderTabState={setOrderTabState}
            />
          </div>
          <div>
            <OrderHeaders showOrderState={showOrderState} />
          </div>
          <div className="order-header-break-row" />
          <div>
            <OrderRows
              showOrderState={showOrderState}
              openOrders={openOrders}
              userRoles={userRoles}
              loadingOrders={loadingOrders}
              selectedOrders={selectedOrders}
              toggleOrderSelect={toggleOrderSelect}
              sortOrdersByStatus={sortOrdersByStatus}
            />
          </div>
          <div>{this.mgmtControls()}</div>
        </div>
      </div>
    );
  }
}

export default RetailerOrderList;
