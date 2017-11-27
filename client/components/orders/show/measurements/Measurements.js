import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import {
  getCustomerMeasurements,
  createCustomerMeasurements,
} from '../../../../actions';

import InputMeasurement from './InputMeasurement';
import {FrontImage, BackImage} from '../../../../images/measurements';

const mapStateToProps = store => {
  return {
    measurements: store.measurements,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {getCustomerMeasurements, createCustomerMeasurements},
    dispatch
  );
};

const mapStateToProps = store => {
  return {
    measurements: store.measurements,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {getCustomerMeasurements, createCustomerMeasurements},
    dispatch
  );
};

class Measurements extends Component {
  static propTypes = {
    measurements: PropTypes.array.isRequired, // mapStateToProps
    getCustomerMeasurements: PropTypes.func.isRequired, // mapDispatchToProps
    createCustomerMeasurements: PropTypes.func.isRequired, // mapDispatchToProps
  };

  constructor(props) {
    super();
    this.state = {
      showFront: true,
      editEnabled: false,
      measurements: props.measurements,
    };
  }

  static propTypes = {
    measurements: PropTypes.object.isRequired, // mapStateToProps
    getCustomerMeasurements: PropTypes.func.isRequired, // mapDispatchToProps
    createCustomerMeasurements: PropTypes.func.isRequired, // mapDispatchToProps
    customer: PropTypes.object.isRequired, // parentComponent
  };

  componentDidMount() {
    this.resetCustomerMeasurements();
  }

  resetCustomerMeasurements = () => {
    const {getCustomerMeasurements, customer} = this.props;

    const customer_id = customer.id;
    const self = this;
    getCustomerMeasurements({customer_id})
      .then(res => {
        self.setState({measurements: res});
      })
      .catch(err => console.log('err', err));
  };

  getImage(state) {
    const {showFront} = this.state;
    let alt, image;

    if (showFront) {
      alt = 'front';
      image = FrontImage;
    } else {
      alt = 'back';
      image = BackImage;
    }

    return <img className="measurements-image" src={image} alt={alt} />;
  }

  showFrontOrBack(boolean) {
    this.setState({showFront: boolean});
  }

  enableEditButton(editEnabled) {
    if (!editEnabled) {
      return (
        <input
          className="tiny-button"
          readOnly={true}
          value="Edit"
          onClick={() => this.toggleEditEnabled(editEnabled)}
        />
      );
    } else {
      return (
        <input
          className="tiny-button"
          readOnly={true}
          value="Submit"
          onClick={() => this.submitNewMeasurements(this.state.measurements)}
        />
      );
    }
  }

  submitNewMeasurements(measurements) {
    this.setState({editEnabled: false});
    this.props
      .createCustomerMeasurements(this.state.measurements)
      .then(res => this.resetCustomerMeasurements())
      .catch(err => console.log('err', err));
  }

  renderButtons(editEnabled) {
    return (
      <div className="measurement-buttons-container">
        <input
          className="tiny-button"
          readOnly={true}
          value="Front"
          onClick={() => this.showFrontOrBack(true)}
        />
        <input
          className="tiny-button"
          readOnly={true}
          value="Back"
          onClick={() => this.showFrontOrBack(false)}
        />
        {this.enableEditButton(editEnabled)}
      </div>
    );
  }

  toggleEditEnabled(editEnabled) {
    this.setState({editEnabled: !editEnabled});
  }

  updateMeasurement = (kind, value) => {
    let newState = this.state;
    newState.measurements[kind] = value;
    this.setState(newState);
  };

  validateMeasurement(value) {
    const last = value[0];
    const lastCharInt = last.isNaN() ? true : false;
  }

  renderInputs(showFront, editEnabled, measurements) {
    if (!isEmpty(measurements)) {
      if (showFront) {
        return (
          <form>
            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="ankle"
              value={measurements.ankle}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="calf"
              value={measurements.calf}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="chest_bust"
              value={measurements.chest_bust}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="hips"
              value={measurements.hips}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="knee"
              value={measurements.knee}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="pant_length"
              value={measurements.pant_length}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="sleeve_length"
              value={measurements.sleeve_length}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="shoulder_to_waist"
              value={measurements.shoulder_to_waist}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="thigh"
              value={measurements.thigh}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="upper_torso"
              value={measurements.upper_torso}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="waist"
              value={measurements.waist}
            />
          </form>
        );
      } else {
        return (
          <div>
            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="back_width"
              value={measurements.back_width}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="bicep"
              value={measurements.bicep}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="elbow"
              value={measurements.elbow}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="forearm"
              value={measurements.forearm}
            />

            <InputMeasurement
              update={this.updateMeasurement}
              disabled={editEnabled}
              kind="inseam"
              value={measurements.inseam}
            />
          </div>
        );
      }
    }
  }

  render() {
    const {showFront, editEnabled, measurements} = this.state;
    return (
      <div className="customer-measurements">
        <div className="measurements-header">
          <h3>Customer Measurements</h3>
          {this.renderButtons(editEnabled)}
        </div>

        {this.getImage(this.state)}
        {this.renderInputs(showFront, editEnabled, measurements)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Measurements);
