import React from 'react';

const FormField = props => {
  const {
    title,
    value,
    fieldName,
    onChange,
    className,
    type,
    formName = 'form',
  } = props;

  const inputType = type ? type : 'text';

  const rowClass = `${formName}-row`;
  const rowContainerClass = `${formName}-row-container`;
  const labelClass = `${formName}-label`;
  const inputClass = `${formName}-input`;
  const callback = e => onChange(fieldName, e.target.value);

  return (
    <div className={rowContainerClass}>
      <div className={rowClass}>
        <label className={labelClass}>{title}</label>
        <input
          type={inputType}
          className={inputClass}
          size="50"
          value={value}
          onChange={callback}
        />
      </div>
    </div>
  );
};

export default FormField;
