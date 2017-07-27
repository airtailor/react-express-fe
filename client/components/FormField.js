import React from 'react';

const FormField = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <br />
      <input size='50' value={props.value} onChange={(e) => props.onChange(props.fieldName, e.target.value)} />
      <br /><br />
    </div>
  );
}

export default FormField;
