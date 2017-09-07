import React from 'react';
import { Link } from 'react-router-dom';


const CustomerLink = (props) => {
  const { linkTo, linkText } = props;
  if (linkTo && linkText) {
    return (
      <Link to={props.linkTo}>
        {props.linkText}
      </Link>
    );
  }
}

const CartRibbon = (props) => {
  const rotate = props.rotate;

  if (props.showCart) {
    return (
      <Link className='cart-ribbon' to={props.link}>
        <h1 className={`cart-ribbon-sign rotate${rotate}`}>+</h1>
        <div className='cart-ribbon-triangle'></div>
      </Link>
    );
  }
}

const SectionHeader = (props) => {
  return (
    <div className='section-header'>
      <h2>{props.text}</h2>
      {CustomerLink(props)}
      {CartRibbon(props)}
    </div>
  );
}

export default SectionHeader;
