import React from 'react';

const SuccessMessage = (props) => {
  return (
    <div className="successMessage">
      <p>{ props.message }</p>
    </div>
  )
}

export default SuccessMessage;
