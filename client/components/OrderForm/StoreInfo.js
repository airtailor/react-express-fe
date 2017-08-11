import React, { Component } from 'react';
import FormField from '../FormField';

class StoreInfo extends Component {
  constructor(props){
    super();
    this.state = {
      storeName: {
        text: props.store.name,
        valid: true
      },
      firstName: {
        text: '',
        valid: false
      },
      lastName: {
        text: '',
        valid: false
      },
      buttonDisabled: true
    }
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
  }

  updateFirstName(value){
    this.setState({firstName: {text: value}});
  }

  updateLastName(value){
    this.setState({lastName: {text: value}});
  }

  updateButtonStatus(bool){
    this.setState({buttonDisabled: bool});
  }

  validateInputs(state){
    const {storeName, firstName, lastName} = state;
    if (storeName.text && firstName.text && lastName.text){
      this.setState({
        storeName: {text: storeName.text, valid: true},
        firstName: {text: firstName.text, valid: true},
        lastName: {text: lastName.text, valid: true}
      });
      this.updateButtonStatus(false);
    } else {
      this.updateButttonStatus(true);
    }
  }

  render(){
    const {storeName, firstName, lastName, buttonDisabled} = this.state;
    return (
      <div>
        <h2>Store Info</h2>
        <FormField
          title='Store Name'
          value={storeName.text} />

        <p>Sales Associate</p>

        <FormField
          title='First Name'
          value={firstName.text}
          fieldName={'firstName'}
          onChange={this.updateFirstName} />

        <FormField
          title='Last Name'
          value={lastName.text}
          fieldName={'lastName'}
          onChange={this.updateLastName} />

        <input
          disabled={buttonDisabled}
          type="submit"
          value="Next" />
      </div>
    );
  }
}

export default StoreInfo;
