import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = props => {
  const { icon, count, type, call, styleClass } = props;
  const className = `${styleClass} order-card`;
  let countKind, link;

  if (styleClass === 'current-orders' || styleClass === 'late-orders') {
    countKind = 'Orders';
    link = '/orders';
  }

  return (
    <Link to={link}>
      <div className={className}>
        {icon}
        <p className="order-card-text order-card-count">{count}</p>
        <p className="order-card-text order-card-type">{type}</p>
        <p className="order-card-text">{countKind}</p>
        <p className="order-card-text order-card-call">{call}</p>
      </div>
    </Link>
  );
};

export default OrderCard;
