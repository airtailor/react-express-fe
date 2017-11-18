import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormField from './FormField.js';
import {
  updateCustomer,
  getCustomer,
  setGrowler,
  getCurrentOrder,
} from '../actions';
import {ValidateEmail} from '../utils/validations';

class CustomerEdit extends Component {
  constructor(props) {
    super();
    const {
      id,
      email,
      first_name,
      last_name,
      phone,
      street,
      street_two,
      city,
      state_province,
      zip_code,
    } = props.customer;
    this.state = {
      id,
      email,
      first_name,
      last_name,
      phone,
      street,
      street_two,
      city,
      state_province,
      zip_code,
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(field, value) {
    //console.log('field', field, 'value', value);
    this.setState({[field]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      currentStore,
      currentOrder,
      getCurrentOrder,
      setGrowler,
    } = this.props;
    const {email} = this.state;

    if (ValidateEmail(email)) {
      updateCustomer({customer: this.state})
        .then(res => {
          let kind, message;
          if (res.data.body.errors) {
            kind = 'warning';
            message = res.data.body.errors[0];
          } else {
            kind = 'success';
            message = 'Customer Updated';
            getCurrentOrder(currentStore.id, currentOrder.id);
          }
          setGrowler({kind, message});
        })
        .catch(err => {});
    } else {
      const kind = 'warning';
      const message = 'Email must be valid';
      this.props.setGrowler({kind, message});
    }
  }

  render() {
    const {currentOrder, customer} = this.props;
    const {
      email,
      first_name,
      last_name,
      phone,
      street,
      street_two,
      city,
      state_province,
      zip_code,
    } = customer;
    const backLink = `/orders/${currentOrder.id}`;
    return (
      <div>
        <Link to={backLink}>Back</Link>

        <form onSubmit={e => this.handleSubmit(e)}>
          <FormField
            value={this.state.email}
            fieldName={'email'}
            title={'Email'}
            onChange={this.updateState}
          />

          <FormField
            value={this.state.first_name}
            fieldName={'first_name'}
            title={'First Name'}
            onChange={this.updateState}
          />

          <FormField
            value={this.state.last_name}
            fieldName={'last_name'}
            title={'Last Name'}
            onChange={this.updateState}
          />

          <FormField
            value={this.state.phone}
            fieldName={'phone'}
            title={'Phone'}
            onChange={this.updateState}
          />

          <FormField
            value={this.state.street}
            fieldName={'street'}
            title={'Street'}
            onChange={this.updateState}
          />

          <FormField
            value={this.state.street_two}
            fieldName={'street_two'}
            title={'Unit'}
            onChange={this.updateState}
          />

          <FormField
            value={this.state.city}
            fieldName={'city'}
            title={'City'}
            onChange={this.updateState}
          />

          <FormField
            value={this.state.state_province}
            fieldName={'state'}
            title={'State'}
            onChange={this.updateState}
          />

          <FormField
            value={this.state.zip_code}
            fieldName={'zip_code'}
            title={'Zip Code'}
            onChange={this.updateState}
          />

          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    currentOrder: store.currentOrder,
    customer: store.currentOrder.customer,
    currentStore: store.currentStore,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({setGrowler, getCurrentOrder}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEdit);
