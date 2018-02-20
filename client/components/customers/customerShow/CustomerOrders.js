import React from 'react';
import CustomerOrder from './CustomerOrder';

const CustomerOrders = props => {
  const { customerOrders } = props;
  return (
    <div>
      <ul className='customer-orders'>
        { customerOrders.map((order, i) => <CustomerOrder order={order} i={i} />) }
      </ul>
    </div>
  )
}

export default CustomerOrders;
