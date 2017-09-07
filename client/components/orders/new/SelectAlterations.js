import React from 'react';
import {connect} from 'react-redux';
import HowToPinModal from './modals/HowToPinModal';

const renderAlterations = (props) => {
  const {garment, alterations} = props;
  const altsForGarment = alterations.filter(alt => alt.garmentId === garment.id);
  return altsForGarment.map((alt, index) => {
    const style = props.selectedAlterations.includes(alt.id) ? 'unclickable alteration-card' : 'alteration-card';

      return (
        <div key={index}>
          <div className={style} onClick={() => props.handleSelect(alt)}>
            <h3>{alt.title}</h3>
          </div>
          <div>
            <h3 className='alt-price-info'>
              ${alt.price.toFixed(2)} 
              <HowToPinModal image={alt.howToPin} />
            </h3>
          </div>
        </div>
      );
  });
}

const SelectAlterations = (props) => {
  return (
    <div>
      <h2>Select {props.garment.title.toLowerCase()} alterations:</h2>
      {renderAlterations(props)}
      <br />

      <input type='submit' className='short-button' value='Back' onClick={props.renderStageOne} />
      <input type='submit' className='short-button' value='Add To Cart' onClick={props.addToCart} />
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    alterations: store.alterations.alterations
  }
}

export default connect(mapStateToProps)(SelectAlterations);
