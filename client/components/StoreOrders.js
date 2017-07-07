import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const StoreOrders = (props) => {
  const { currentUser, currentStore, openOrders } = props;
  console.log(openOrders);

  const formatDueDate = (dueDate, late) => {
    const additionalString = late ? " ago" : " to go";
    return (moment(dueDate).fromNow().split("in ")[1] + additionalString).toUpperCase();
  }

  const getOrderStatus = (order) => {
    if (!order.due_date){
      return {status: 'In Transit', color: 'green'};
    } else if (order.late){
      let dueTime = formatDueDate(order.due_date, true);
      return {status: dueTime, color: 'red'};
    } else {
      let dueTime = formatDueDate(order.due_date, false);
      return {status: dueTime, color: 'orange'};
    } 
  }

  const renderOrderRows = () => {
    return openOrders.map((order, i) => {
      const orderStatus = getOrderStatus(order);
      return (
        <tr key={i}>
          <td>{order.id}</td>
          <td style={{color: orderStatus.color}}>{orderStatus.status}</td>
          <td>{order.customer_id}</td>
          <td>Quantity</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <h3>Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          { renderOrderRows() }
        </tbody>
      </table>
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
