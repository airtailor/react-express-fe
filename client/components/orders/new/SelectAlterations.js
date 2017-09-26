import React from 'react';
import {connect} from 'react-redux';
import HowToPinModal from './modals/HowToPinModal';

const renderAlterations = props => {
  const {garment, alterations} = props;
  const altsForGarment = alterations.filter(
    alt => alt.garmentId === garment.id
  );
  return altsForGarment.map((alt, index) => {
    // array of selected alteration ids - props.selectedAlterations

    // array of those alterations vvv
    const arr = props.selectedAlterations.map(alt => {
      return props.alterations.filter(a => a.id === alt)[0];
    });

    const altTypes = arr.map(alt => alt.type);

    const style = props.selectedAlterations.includes(alt.id)
      ? 'unclickable alteration-card'
      : 'alteration-card';

    const disabled =
      altTypes.includes(alt.type) && !props.selectedAlterations.includes(alt.id)
        ? 'disabled-alt'
        : '';

    const selected = props.selectedAlterations.includes(alt.id)
      ? 'selected-alt'
      : '';

    let handleClick;

    if (!disabled) {
      handleClick = () => props.handleSelect(alt);
    }

    return (
      <div key={index} className={`${disabled}`}>
        <div className={`${style} ${selected}`} onClick={handleClick}>
          <h3>{alt.title}</h3>
        </div>
        <div className="price-how-to-pin-container">
          <h3 className="alt-price-info">${alt.price.toFixed(2)}</h3>
          <HowToPinModal image={alt.howToPin} />
        </div>
      </div>
    );
  });
};

const renderAddToCart = props => {
  if (props.selectedAlterations.length > 0) {
    if (typeof props.garmentIndex === 'number') {
      return (
        <input
          type="submit"
          className="short-button"
          value="Update Garment"
          onClick={props.updateGarment}
        />
      );
    } else {
      return (
        <input
          type="submit"
          className="short-button"
          value="Add To Basket"
          onClick={props.addToCart}
        />
      );
    }
  }
};

const SelectAlterations = props => {
  return (
    <div className="alteration-select">
      <h2 className="full-width">
        Select {props.garment.title.toLowerCase()} alterations:
      </h2>
      <br />
      {renderAlterations(props)}
      <br />

      <div className="cart-buttons full-width">
        <input
          type="submit"
          className="short-button"
          value="Back"
          onClick={props.renderStageOne}
        />
        {renderAddToCart(props)}
      </div>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    alterations: store.alterations.alterations,
    cart: store.cart,
  };
};

export default connect(mapStateToProps)(SelectAlterations);
