import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { resetCart } from '../actions';

const CartRibbon = props => {
  const { rotate, userRoles, includeLink = true } = props;
  let link = props.link;
  let onClick;

  if (!link) {
    link = '/orders/new';
    onClick = () => console.log('');
  } else {
    onClick = () => props.resetCart();
  }

  if (props.userRoles.admin || props.userRoles.retailer) {
    return (
      <Link className="cart-ribbon" to={link}>
        <h1 className={`cart-ribbon-sign ${rotate}`} onClick={onClick}>
          +
        </h1>
        <div className="cart-ribbon-triangle" />
      </Link>
    );
  }
};

const SectionHeader = props => {
  return (
    <div className="section-header">
      <h2>{props.text}</h2>
      {CartRibbon(props)}
    </div>
  );
};

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      resetCart,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SectionHeader);
