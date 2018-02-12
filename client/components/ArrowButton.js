import React, { Component } from 'react';

class ArrowButton extends Component {
  render() {
    return (
      <p
        className={`arrow-button ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {'< '} {this.props.text}
      </p>
    );
  }
}

export default ArrowButton;
