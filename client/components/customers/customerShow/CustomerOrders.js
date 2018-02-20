import React from 'react';
import CustomerOrder from './CustomerOrder';

const CustomerOrders = props => {
  const { customerOrders } = props;
  return (
    <div>
      <ul className='customer-orders'>
        { customerOrders.map((o, i) => <CustomerOrder order={o} key={i} i={i} />) }
      </ul>
    </div>
  )
}

export default CustomerOrders;
