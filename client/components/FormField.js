import React from 'react';

const FormField = props => {
  const { title, value, fieldName, onChange, className, type } = props;
  const inputType = type ? type : 'text';
  return (
    <div className="form-row">
      <label className="form-label">{title}</label>
      <input
        type={inputType}
        className={`form-input ${className}`}
        size="50"
        value={value}
        onChange={e => onChange(fieldName, e.target.value)}
      />
    </div>
  );
};

export default FormField;
