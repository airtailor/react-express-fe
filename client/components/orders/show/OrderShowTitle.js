import React from 'react';
import PropTypes from 'prop-types';

const OrderShowTitle = props => {
  return <h5 className="order-show-title">{props.title}</h5>;
};

OrderShowTitle.propTypes = {
  title: PropTypes.string.isRequired, // parentComponent
};

export default OrderShowTitle;
