import React from 'react';

const RenderGarments = (props) => {
  const {garments} = props;
  return garments.map((garment, index) => {
    return (
      <div 
        key={index} 
        className='garment-card'
        onClick={() => props.handleSelect(garment)}>
        <h2>{garment.title.toUpperCase()}</h2>
        <img className='garment-image' src={garment.image} />
      </div>
    );
  });

}

const SelectGarment = (props) => {
  return (
    <div>
      <h2>Select garment type:</h2>
      <div className='select-garment'>
         {RenderGarments(props)}
      </div>
    </div>
  );
}

export default SelectGarment;
