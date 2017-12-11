import React from 'react';

const OrderCardIcon = props => {
  const { url, alt } = props;
  return <img className="order-card-icon" src={url} alt={alt} />;
};

export default OrderCardIcon;
