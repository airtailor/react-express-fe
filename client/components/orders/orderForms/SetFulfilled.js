import React from 'react';

export const SetFulfilledButton = props => {
  const { onClick, order } = props;
  return (
    <div>
      <button className="short-button button" onClick={() => onClick(order)}>
        Fulfill Order
      </button>
    </div>
  );
};
