import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import {
  getCustomerMeasurements,
  createCustomerMeasurements,
} from '../../actions';

import InputMeasurement from './InputMeasurement';
import { FrontImage, BackImage } from '../../images/measurements';
import WithSectionHeader from '../HOC/WithSectionHeader';
import BackButton from '../BackButton';
import { frontMeasurements, backMeasurements } from './helper';

const mapStateToProps = store => {
  return {
    measurements: store.measurements,
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getCustomerMeasurements, createCustomerMeasurements },
    dispatch
  );
};

class Measurements extends Component {
  static propTypes = {
    userRoles: PropTypes.object.isRequired,
    measurements: PropTypes.object.isRequired, // mapStateToProps
    getCustomerMeasurements: PropTypes.func.isRequired, // mapDispatchToProps
    createCustomerMeasurements: PropTypes.func.isRequired, // mapDispatchToProps
    match: PropTypes.shape({
      params: PropTypes.shape({
        customer_id: PropTypes.string.isRequired, // router
      }),
    }),
  };

  constructor(props) {
    super();
    this.state = {
      editEnabled: false,
      measurements: props.measurements,
    };
  }

  componentDidMount() {
    this.resetCustomerMeasurements();
  }

  resetCustomerMeasurements = () => {
    const {
      getCustomerMeasurements,
      match: { params: { customer_id } },
    } = this.props;

    const self = this;
    getCustomerMeasurements({ customer_id })
      .then(res => {
        self.setState({ measurements: res });
      })
      .catch(err => console.log('err', err));
  };

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
    this.setState({ editEnabled: false });
    this.props
      .createCustomerMeasurements(this.state.measurements)
      .then(res => this.resetCustomerMeasurements())
      .catch(err => console.log('err', err));
  }

  renderButtons(editEnabled) {
    const { userRoles: { tailor, retailer, admin } } = this.props;
    if (!tailor || !admin) {
      return <div />;
    }

    return (
      <div className="measurement-buttons-container">
        <input className="tiny-button" readOnly={true} value="Front" />
        <input className="tiny-button" readOnly={true} value="Back" />
        {this.enableEditButton(editEnabled)}
      </div>
    );
  }

  toggleEditEnabled = editEnabled => {
    this.setState({ editEnabled: !editEnabled });
  };

  updateMeasurement = (kind, value) => {
    let newState = this.state;
    newState.measurements[kind] = value;
    this.setState(newState);
  };

  validateMeasurement = value => {
    const last = value[0];
    const lastCharInt = last.isNaN() ? true : false;
  };

  renderInputMeasurement = (meas, i) => {
    const { editEnabled, measurements } = this.state;
    return (
      <InputMeasurement
        key={i}
        update={this.updateMeasurement}
        disabled={editEnabled}
        kind={meas}
        value={measurements[meas]}
      />
    );
  };

  renderInputs = (show, measurements) => {
    if (!isEmpty(measurements)) {
      if (show === 'front') {
        return (
          <form>{frontMeasurements.map(this.renderInputMeasurement)}</form>
        );
      } else if (show === 'back') {
        return <form>{backMeasurements.map(this.renderInputMeasurement)}</form>;
      }
    }
  };

  renderImages() {
    const { measurements } = this.state;
    return (
      <div className="measurements-image-container">
        <div className="input-measurements-container">
          <img className="measurements-image" src={FrontImage} />
          {this.renderInputs('front', measurements)}
        </div>
        <div className="input-measurements-container">
          <img className="measurements-image" src={BackImage} />
          {this.renderInputs('back', measurements)}
        </div>
      </div>
    );
  }

  render() {
    const { editEnabled, measurements } = this.state;
    return (
      <div className="customer-measurements">
        <BackButton {...this.props} />
        <div className="measurements-header">
          <h1 className="sans-serif">CUSTOMER MEASUREMENTS</h1>
          {this.renderButtons(editEnabled)}
        </div>

        {this.renderImages()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithSectionHeader(Measurements)
);
