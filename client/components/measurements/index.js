import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
  getCustomerMeasurements,
  createCustomerMeasurements,
  setGrowler,
  getCurrentCustomer,
} from '../../actions';

import InputMeasurement from './InputMeasurement';
import { FrontImage, BackImage } from '../../images/measurements';
import WithSectionHeader from '../HOC/WithSectionHeader';
import BackButton from '../BackButton';
import { frontMeasurements, backMeasurements } from './helper';
import Button from '../Button';

const mapStateToProps = store => {
  return {
    measurements: store.measurements,
    userRoles: store.userRoles,
    currentCustomer: store.currentCustomer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCustomerMeasurements,
      createCustomerMeasurements,
      setGrowler,
      getCurrentCustomer,
    },
    dispatch
  );
};

class Measurements extends Component {
  static propTypes = {
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    currentCustomer: PropTypes.object.isRequired, // mapStateToProps
    measurements: PropTypes.object.isRequired, // mapStateToProps
    getCurrentCustomer: PropTypes.func.isRequired, // mapDispatchToProps
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

    const {
      getCustomerMeasurements,
      match: { params: { customer_id } },
    } = this.props;

    this.props.getCurrentCustomer(customer_id);
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

  enableEditButton = editEnabled => {
    const {
      userRoles: { retailer },
      measurements: { created_at },
    } = this.props;
    if (retailer) {
      return '';
    }

    let text, onClick;

    if (!editEnabled) {
      text = 'EDIT';
      onClick = () => this.toggleEditEnabled(editEnabled);
    } else {
      text = 'SUBMIT';
      onClick = () => this.submitNewMeasurements();
    }

    return (
      <div style={{ display: 'inline', float: 'right', marginLeft: '55px' }}>
        <Button
          className="order-show-control-button measurements-edit-button"
          text={text}
          onClick={onClick}
        />
        <p style={{ color: 'grey', fontSize: '12px', fontStyle: 'italic' }}>
          Last Updated {moment(created_at).format('MM-DD-YYYY')}
        </p>
      </div>
    );
  };

  submitNewMeasurements = () => {
    this.setState({ editEnabled: false });
    this.props
      .createCustomerMeasurements(this.state.measurements)
      .then(res => {
        const kind = 'success';
        const message = 'Measurements Have Been Updated!';
        this.props.setGrowler({ kind, message });
        this.resetCustomerMeasurements();
      })
      .catch(err => console.log('err', err));
  };

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
    const {
      match: { params: { customer_id } },
      currentCustomer: { first_name, last_name },
    } = this.props;

    return (
      <div className="customer-measurements">
        <BackButton {...this.props} />
        <div className="measurements-header">
          <h1 className="sans-serif">
            CUSTOMER MEASUREMENTS
            {this.enableEditButton(editEnabled)}
            <br />
            <Link className="blue-link" to={`/customers/${customer_id}`}>
              {first_name} {last_name}
            </Link>
          </h1>
        </div>

        {this.renderImages()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithSectionHeader(Measurements)
);
