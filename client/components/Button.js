import React from 'react';

const Button = props => {
  const {
    className,
    clickArgs = undefined,
    onClick = () => console.log(''),
    disabled,
    text,
  } = props;

  return (
    <input
      type="submit"
      onClick={() => onClick(clickArgs)}
      disabled={disabled}
      className={className}
      value={text}
    />
  );
};

export default Button;
