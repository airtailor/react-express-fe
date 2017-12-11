import React from 'react';

const FlashMessage = props => {
  const messageClass = `${props.type}Message`;
  return (
    <div className={messageClass}>
      <p>{props.message}</p>
    </div>
  );
};

export default FlashMessage;
