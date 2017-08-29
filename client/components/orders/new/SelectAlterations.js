import React from 'react';
import {connect} from 'react-redux';

const renderAlterations = (props) => {
  const {garment, alterations} = props;
  const altsForGarment = alterations.filter(alt => alt.garmentId === garment.id);
  return altsForGarment.map((alt, index) => {
    const style = props.selectedAlterations.includes(alt.id) ? 'unclickable alteration-card' : 'alteration-card';

      return (
        <div key={index} className={style} onClick={() => props.handleSelect(alt)}>
          <h3>{alt.title} - ${alt.price.toFixed(2)}</h3>
        </div>
      );
  });
}

const SelectAlterations = (props) => {
  return (
    <div>
      <h2>Select Alterations for {props.garment.title}</h2>
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
