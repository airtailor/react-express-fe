import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = (props) => {
  const {icon, count, type, call, styleClass} = props;
  const className = `${styleClass} order-card`;
  return (
    <Link to='/orders'>
      <div className={className}>
        {icon}
        <p className='order-card-text order-card-count'>{count}</p>
        <p className='order-card-text order-card-type'>{type}</p>
        <p className='order-card-text'>Orders</p>
        <p className='order-card-text order-card-call'>{call}</p>
      </div>
    </Link>
  );
}

export default OrderCard;
