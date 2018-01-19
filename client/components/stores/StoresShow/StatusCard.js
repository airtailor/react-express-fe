import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatusCard extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired, // parentComponent
    text: PropTypes.string.isRequired, // parentComponent
  };

  render() {
    const { color, text } = this.props;
    return <div className={`${color} status-card order-data-cell`}>{text}</div>;
  }
}

export default StatusCard;
