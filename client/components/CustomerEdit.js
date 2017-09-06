import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FormField from './FormField.js';
import { updateCustomer, getCustomer } from '../actions';

class CustomerEdit extends Component {
  constructor(props){
    super();
      const { id, email, first_name, last_name, phone, street1, street2, city, state, zip } = props.customer;
      this.state = {
        id,
        email,
        first_name,
        last_name,
        phone,
        street1,
        street2,
        city,
        state,
        zip
      }
    this.updateState = this.updateState.bind(this);
  }

  updateState(field, value){
    //console.log('field', field, 'value', value);
    this.setState({[field]: value});
  }

  handleSubmit(e){
    e.preventDefault();
    updateCustomer({ customer: this.state })
      //.then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render(){
    const { currentOrder, customer } = this.props;
    const { email, first_name, last_name, phone, street1, street2, city, state, zip } = customer;
    const backLink = `/orders/${currentOrder.id}`;
    return (
      <div>
        <Link to={backLink}>
          Back
        </Link>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormField value={this.state.email}
            fieldName={'email'} title={'Email'}
            onChange={this.updateState} />

          <FormField value={this.state.first_name}
            fieldName={'first_name'} title={'First Name'}
            onChange={this.updateState} />

          <FormField value={this.state.last_name}
            fieldName={'last_name'} title={'Last Name'}
            onChange={this.updateState} />

          <FormField value={this.state.phone}
            fieldName={'phone'} title={'Phone'}
            onChange={this.updateState} />

          <FormField value={this.state.street1}
            fieldName={'street1'} title={'Street'}
            onChange={this.updateState} />

          <FormField value={this.state.street2}
            fieldName={'street2'} title={'Unit'}
            onChange={this.updateState} />

          <FormField value={this.state.city}
            fieldName={'city'} title={'City'}
            onChange={this.updateState} />

          <FormField value={this.state.state}
            fieldName={'state'} title={'State'}
            onChange={this.updateState} />

          <FormField value={this.state.zip}
            fieldName={'zip'} title={'Zip'}
            onChange={this.updateState} />

          <input type='submit' value='Update' />
        </form>
      </div>

    );
  }
}

const mapStateToProps = (store) => {
  return {
    currentOrder: store.currentOrder,
    customer: store.currentOrder.customer
  }

}
export default connect(mapStateToProps)(CustomerEdit);
