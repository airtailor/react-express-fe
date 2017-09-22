import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// const CustomerLink = props => {
//   const {linkTo, linkText, role} = props;
//
//   if (linkTo && linkText) {
//     if (role !== 'retailer') {
//       return (
//         <Link className="link" to={props.linkTo}>
//           {props.linkText}
//         </Link>
//       );
//     } else {
//       return <h3 className="fake-link">{props.linkText}</h3>;
//     }
//   }
// };

const CartRibbon = props => {
  const {rotate} = props;
  let link = props.link;
  if (!link) {
    link = '/orders/new';
  }

  if (props.currentUser.user.roles[0].name === 'tailor') {
    return <div />;
  }

  return (
    <Link className="cart-ribbon" to={link}>
      <h1 className={`cart-ribbon-sign ${rotate}`}>+</h1>
      <div className="cart-ribbon-triangle" />
    </Link>
  );
};

const SectionHeader = props => {
  return (
    <div className="section-header">
      <h2>{props.text}</h2>
      {/*CustomerLink(props)*/}
      {CartRibbon(props)}
    </div>
  );
};

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
  };
};

export default connect(mapStateToProps)(SectionHeader);
