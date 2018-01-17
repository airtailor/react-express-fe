import React from 'react';

const Checkbox = props => {
  const { onChange, checked, fieldName, text, name, labelClass } = props;
  if (!fieldName) {
    return (
      <div style={{ display: 'inline' }}>
        <input
          type="checkbox"
          id={`${name}-check`}
          name={name}
          checked={checked}
          onChange={onChange}
        />

        <label
          htmlFor={`${name}-check`}
          className={`checkbox-label ${labelClass}`}
        >
          <span />
          {text}
        </label>
      </div>
    );
  }

  return (
    <div style={{ display: 'inline' }}>
      <input
        type="checkbox"
        id={`${name}-check`}
        name={name}
        checked={checked}
        onChange={() => onChange(fieldName, !checked)}
      />

      <label htmlFor={`${name}-check`} className="checkbox-label">
        <span />
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
