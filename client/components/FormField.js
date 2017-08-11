import React from 'react';

const FormField = (props) => {
  const {title, value, fieldName, onChange} = props;
  return (
    <div>
      <label>{title}</label>
      <br />
      <input size='50' value={value} onChange={(e) => onChange(fieldName, e.target.value)} />
      <br /><br />
    </div>
  );
}

export default FormField;
