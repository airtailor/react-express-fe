import React from 'react';

const renderOrders = (orders, className, selectOrder) => {
  if (orders.length > 0){
    return orders.map((order, index) => {
      const {id, customer, total} = order;
      const {first_name, last_name} = customer;
      return (
        <li className={`${className}-li`} key={index} onClick={() => selectOrder(order)}>
          #{order.id} - {first_name} {last_name} - ${total}
        </li>
      )
    });
  }
}

export const RenderNewOrderList = (props) => {
  const {orders, className, selectOrder} = props;
  return (
    <div className={`${className}-div`}>
      <h3>Manage New Orders</h3>
      <ul className={`${className}-ul`}>
        {renderOrders(orders.unassigned, className, selectOrder)}
      </ul>

      <h3>Manage New Kits</h3>
      <ul className={`${className}-ul`}>
        {renderOrders(orders.welcome_kits, className, selectOrder)}
      </ul>
    </div>
  );
}
