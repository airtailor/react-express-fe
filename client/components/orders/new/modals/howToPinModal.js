import React, { Component } from 'react';
import Modal from 'react-modal';

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
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={{backgroundColor: 'blue'}}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal">
          
          <div>
            <p onClick={this.closeModal}>Close</p>
            <img style={{maxHeight: "500px"}} src={this.props.image} />
          </div>
      
        
        </Modal>
      </div>
    );
  }
}

export default HowToPinModal;
