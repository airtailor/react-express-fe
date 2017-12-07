import React from 'react';

const addPleaseSelect = options => {
  return [{ id: '', name: 'Please Select' }].concat(options);
};

const FormSelect = props => {
  const selectOptions = addPleaseSelect(props.options);
  return (
    <div>
      <label>{props.title}</label>
      <br />
      <select
        value={props.value}
        onChange={e => props.onChange(props.fieldName, e.target.value)}
      >
        {renderOptions(selectOptions)}
      </select>
      <br />
      <br />
    </div>
  );
};

const renderOptions = options => {
  return options.map((option, index) => {
    return (
      <option key={index} value={option.id}>
        {option.name}
      </option>
    );
  });
};

export default FormSelect;
