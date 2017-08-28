import React from 'react';

const RenderGarments = (props) => {
  const {garments} = props;
  return garments.map((garment, index) => {
    return (
      <div 
        key={index} 
        className='garment-card'
        onClick={() => props.handleSelect(garment)}>
        <h2>{garment.title}</h2>
        <img className='garment-image' src={garment.image} />
      </div>
    );
  });

}

const SelectGarment = (props) => {
  return (
    <div className='select-garment'>
       <h2>Add New Garment</h2>
       {RenderGarments(props)}
    </div>
  );
}

export default SelectGarment;
