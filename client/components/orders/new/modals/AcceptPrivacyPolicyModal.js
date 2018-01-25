import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import PrivacyPolicy from '../../../terms/PrivacyPolicy';

class AcceptPrivacyPolicyModal extends Component {
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
        <Link
          style={{
            paddingLeft: '40px',
            lineHeight: '40px',
            textDecoration: 'underline',
            fontSize: '13px',
            fontFamily: 'Alegreya',
          }}
          to="#"
          onClick={this.openModal}
        >
          See Privacy Policy Here
        </Link>

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

            <PrivacyPolicy />
          </div>
        </Modal>
      </div>
    );
  }
}

export default AcceptPrivacyPolicyModal;
