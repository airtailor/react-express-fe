import React from 'react';

const Checkbox = (props) => {
  const {onChange, checked, fieldName, text, name} = props;
  if (!fieldName){
    return (
      <div style={{display: 'inline'}}>
        <input
          type="checkbox"
          id={`${name}-check`}
          name={name}
          checked={checked}
          onChange={onChange}/>

        <label htmlFor={`${name}-check`} className="customer-agrees-prompt">
           <span></span>
          {text}
        </label>
      </div>
    );
  }

  return (
    <div style={{display: 'inline'}}>
      <input
        type="checkbox"
        id={`${name}-check`}
        name={name}
        checked={checked}
        onChange={() => onChange(fieldName, !checked)}/>

      <label htmlFor={`${name}-check`} className="customer-agrees-prompt">
         <span></span>
        {text}
      </label>
    </div>
  );
}

export default Checkbox;
