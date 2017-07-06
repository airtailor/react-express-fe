import React from 'react';
import { connect } from 'react-redux';

const StoreOrders = (props) => {
  const { currentUser, currentStore, openOrders } = props;
  console.log(openOrders)
  const renderOrderItems = () => {
    return openOrders.map((order, i) => {
      return (
        <li>Order Item</li>
      );
    });

  }
  return (
    <div>
      <h3>Orders</h3>
      <ul>
        { renderOrderItems() }
      </ul>
    </div>


 );
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders
  }
}

export default connect(mapStateToProps)(StoreOrders);
