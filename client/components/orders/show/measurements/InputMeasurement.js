import React from 'react';

const InputMeasurement = (props) => {
  const {kind, value, updateMeasurement, disabled} = props;
  const styling = `input-measurement ${kind}`;
  const val = `${value.toFixed(1)}"`;
  return (
    <input className={styling} value={val} disabled={!disabled} />
  )
}

export default InputMeasurement;
