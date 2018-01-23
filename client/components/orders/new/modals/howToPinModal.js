import React, { Component } from 'react';
import Modal from 'react-modal';
import { infoImage } from '../../../../images';

class HowToPinModal extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="how-to-pin-modal-container">
        <img
          className="modal-eye"
          alt="how-to-pin"
          src={infoImage}
          onClick={this.openModal}
        />

        <Modal
          isOpen={this.state.modalIsOpen}
          style={{ backgroundColor: 'blue' }}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <div>
            <input
              value="CLOSE"
              type="submit"
              className="short-button"
              onClick={this.closeModal}
            />

            <h1 className="how-to-pin">{this.props.title}</h1>
            <p className="how-to-pin">{this.props.instructions}</p>

            <img
              className="how-to-pin-image"
              alt="how-to-pin-image"
              src={this.props.image}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default HowToPinModal;
