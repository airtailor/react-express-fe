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
  const link = props.sign === '+' ? '/orders/new' : '/';
  const signClassName = props.sign === '+' ?
    'cart-ribbon-sign' :
    'cart-ribbon-sign small-x';

  if (props.showCart) {
    return (
      <Link className='cart-ribbon' to={link}>
        <h1 className={signClassName}>{props.sign}</h1>
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
