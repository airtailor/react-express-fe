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
  const {rotate} = props;
  let link = props.link;
  if (!link) {link = '/orders/new'}
  return (
    <Link className='cart-ribbon' to={link}>
      <h1 className={`cart-ribbon-sign ${rotate}`}>+</h1>
      <div className='cart-ribbon-triangle'></div>
    </Link>
  );
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
