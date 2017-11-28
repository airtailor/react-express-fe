import React from 'react';

const FormField = props => {
  const { title, value, fieldName, onChange, className, type } = props;
  const inputType = type ? type : 'text';
  return (
    <div>
      <label>{title}</label>
      <br />
      <input
        type={inputType}
        className={`form-input ${className}`}
        size="50"
        value={value}
        onChange={e => onChange(fieldName, e.target.value)}
      />
      <br />
      <br />
    </div>
  );
};

export default FormField;
