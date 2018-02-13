import React from 'react';
import ArrowButton from './ArrowButton';

const BackButton = props => {
  return (
    <ArrowButton
      className="order-show-back-button"
      onClick={props.history.goBack}
      text={'BACK'}
    />
  );
};

export default BackButton;
