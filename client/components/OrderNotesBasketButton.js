import React, { Component } from 'react';
import { notesImage } from '../images/';

class OrderNotesBasketButton extends Component {
  render() {
    return (
      <p className="clear-button" onClick={this.props.onClick}>
        <img src={notesImage} className="notes-image" />
        <span className="notes-button-text">Add Order Notes</span>
      </p>
    );
  }
}

export default OrderNotesBasketButton;
