import React, { Component } from 'react';
import { clearImage } from '../images/';

class ClearButton extends Component {
  render() {
    return (
      <p className="clear-button" onClick={this.props.onClick}>
        <img src={clearImage} className="clear-image" />
        <span className="clear-text">Clear</span>
      </p>
    );
  }
}

export default ClearButton;
