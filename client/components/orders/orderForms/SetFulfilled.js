import React from 'react';

export const SetFulfilledButton = (props) => {
  const {onClick} = props;
  return (
      <div>
        <button className='short-button button' onClick={onClick}>
          Fulfill Order
        </button>
      </div>
  );
}
