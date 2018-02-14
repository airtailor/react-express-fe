import React, { Component } from 'react';
import { notesImage } from '../images/';

class AddNotesButton extends Component {
  render() {
    const text = this.props.text || 'Add Order Notes';
    return (
      <p className="clear-button" onClick={this.props.onClick}>
        <img src={notesImage} className="notes-image" />
        <span className="notes-button-text">{text}</span>
      </p>
    );
  }
}

export default AddNotesButton;
