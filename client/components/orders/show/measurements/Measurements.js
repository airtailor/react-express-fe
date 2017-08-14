import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import { getCustomerMeasurements, setCustomerMeasurements } from '../../../../actions';
import FrontImage from '../../../../images/clothes-front-red.png';
import BackImage from '../../../../images/clothes-back-red.png';
import InputMeasurement from './InputMeasurement';

class Measurements extends Component {
  constructor(){
    super();
    this.state = {
      showFront: true,
      editEnabled: false
    }
  }

  componentDidMount(){
    const {getCustomerMeasurements, customer} = this.props;
    getCustomerMeasurements({customer_id: customer.id})
      .then(res => console.log('res'))
      .catch(err => console.log('err'))
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

  renderInputs(showFront, editEnabled, measurements){
    if (!isEmpty(measurements)){
      if (showFront){
        return (
          <div>
            <InputMeasurement disabled={editEnabled} kind='ankle' value={measurements.ankle} />
            <InputMeasurement disabled={editEnabled} kind='calf' value={measurements.calf} />
            <InputMeasurement disabled={editEnabled} kind='chest_bust' value={measurements.chest_bust} />
            <InputMeasurement disabled={editEnabled} kind='elbow' value={measurements.elbow} />
            <InputMeasurement disabled={editEnabled} kind='hips' value={measurements.hips} />
            <InputMeasurement disabled={editEnabled} kind='knee' value={measurements.knee} />
            <InputMeasurement disabled={editEnabled} kind='pant_length' value={measurements.pant_length} />
            <InputMeasurement disabled={editEnabled} kind='shoulder_to_waist' value={measurements.shoulder_to_waist} />
            <InputMeasurement disabled={editEnabled} kind='thigh' value={measurements.thigh} />
            <InputMeasurement disabled={editEnabled} kind='upper_torso' value={measurements.upper_torso} />
            <InputMeasurement disabled={editEnabled} kind='waist' value={measurements.waist} />
          </div>
        );
      } else {
        return (
          <div>
          <InputMeasurement disabled={editEnabled} kind='back_width' value={measurements['back-width']} />
          </div>
        )
      }
    }
  }

  render(){
    console.log('measurements', this.props.measurements)
    const {showFront, editEnabled} = this.state;
    const {measurements} = this.props;
    return (
      <div className='customer-measurements'>
        <div className='measurements-header'>
          <h3>Customer Measurements</h3>
          {this.renderButtons()}
        </div>

      {this.getImage(this.state)}
      {this.renderInputs(showFront, editEnabled, measurements)}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    measurements: store.measurements
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCustomerMeasurements, setCustomerMeasurements}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Measurements);
