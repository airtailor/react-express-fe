import React, { Component } from 'react';
import FrontImage from '../../../../images/clothes-front-red.png';
import BackImage from '../../../../images/clothes-back-red.png';

class Measurements extends Component {
  constructor(){
    super();
    this.state = {
      showFront: true,
      editEnabled: false
    }
  }

  getImage(state){
    const {showFront} = this.state;
    let alt, image;

    if (showFront){
      alt = 'front';
      image = FrontImage;
    } else {
      alt = 'back';
      image = BackImage;
    }

    return <img className='measurements-image' src={image} alt={alt} />;
  }

  showFrontOrBack(boolean){
    this.setState({showFront: boolean});
  }

  renderButtons(){
    return (
      <div className='measurement-buttons-container'>
        <input className='pink-button tiny-button' value='Front' onClick={() => this.showFrontOrBack(true)} />
        <input className='pink-button tiny-button' value='Back' onClick={() => this.showFrontOrBack(false)} />
        <input className='pink-button tiny-button' value='Edit' onClick={() => console.log('edit selected')} />
      </div>
    )
  }

  render(){
    return (
      <div className='customer-measurements'>
        <div className='measurements-header'>
          <h3>Customer Measurements</h3>
          {this.renderButtons()}
        </div>

      {this.getImage(this.state)}
      </div>
    );
  }
}

export default Measurements;
