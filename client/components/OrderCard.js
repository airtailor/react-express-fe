import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = props => {
  const { icon, count, type, call, styleClass } = props;
  const className = `${styleClass} order-card`;
  let ordersOrMessages, link;

  if (styleClass === 'current-orders' || styleClass === 'late-orders') {
    ordersOrMessages = 'Orders';
    link = '/orders';
  } else if (styleClass === 'unread-messages') {
    ordersOrMessages = 'Messages';
    link = '/messages';
  } else if (styleClass === 'unread-messages-admin') {
    ordersOrMessages = 'Messages';
    link = '/conversations';
  }

  return (
    <Link to={link}>
      <div className={className}>
        {icon}
        <p className="order-card-text order-card-count">{count}</p>
        <p className="order-card-text order-card-type">{type}</p>
        <p className="order-card-text">{ordersOrMessages}</p>
        <p className="order-card-text order-card-call">{call}</p>
      </div>
    </Link>
  );
};

export default OrderCard;
