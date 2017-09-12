import React, { Component } from 'react';
import Modal from 'react-modal';
import {eyeImage} from '../../../../images';

class HowToPinModal extends Component {
  constructor(){
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }


  render(){
    return (
      <div className='how-to-pin-modal-container'>
        <img
          className='modal-eye'
          alt='how-to-pin'
          src={eyeImage}
          onClick={this.openModal} />

        <Modal
          isOpen={this.state.modalIsOpen}
          style={{backgroundColor: 'blue'}}
          onRequestClose={this.closeModal}
          contentLabel='Example Modal'>

          <div>
            <p className='close-modal' onClick={this.closeModal}>CLOSE</p>
            <img
              className='how-to-pin-image'
              alt='how-to-pin-image'
              src={this.props.image} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default HowToPinModal;
