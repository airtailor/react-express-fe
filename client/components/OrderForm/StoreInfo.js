import React, { Component } from 'react';
import FormField from '../FormField';

class StoreInfo extends Component {
  constructor(){
    super();
    this.state = {
      storeName: '',
      firstName: '',
      lastName: ''
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(key, value){
    this.setState({[key]: value});
  }

  render(){
    const {storeName, firstName, lastName} = this.state;
    return (
      <div>
        <h2>Store Info</h2>
        <FormField
          title='Store Name'
          value={storeName}
          onChange={this.updateState} />

        <p>Sales Associate</p>

        <FormField
          title='First Name'
          value={firstName}
          onChange={this.updateState} />

        <FormField
          title='Last Name'
          value={lastName}
          onChange={this.updateState} />
      </div>
    );
  }
}

export default StoreInfo;
