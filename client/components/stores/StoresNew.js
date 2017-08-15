import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCompanies, createStore } from '../../actions';
import { storeTypes } from '../../utils/constants';
import FormField from '../FormField';
import FormSelect from '../FormSelect';

class StoresNew extends Component {
  constructor(props){
    super();
    this.state = {
      company_id: '',
      type: '',
      name: '',
      primary_contact_id: '',
      phone: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    }
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    this.props.getCompanies()
      //.then(res => console.log(storeTypes))
      .catch(err => console.log(err));
  }

  updateState(field, value){
    this.setState({[field]: value});
  }

  handleSubmit(e){
    e.preventDefault();
    const store = this.state;
    createStore({store})
      //.then(res => console.log('res', res))
      .catch(err => console.log('err', err));
  }


  render(){
    const { company_id, type, name, phone, street1, street2, city, state, zip } = this.state;
    if (this.props.companies.length > 0){
      return (
        <div>
          <h3>Store New</h3>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <FormField value={name}
              fieldName={'name'} title={'Name: '}
              onChange={this.updateState} />

            <FormField value={phone}
              fieldName={'phone'} title={'Phone: '}
              onChange={this.updateState} />

            <FormField value={street1}
              fieldName={'street1'} title={'Street:'}
              onChange={this.updateState} />

            <FormField value={street2}
              fieldName={'street2'} title={'Unit:'}
              onChange={this.updateState} />

            <FormField value={city}
              fieldName={'city'} title={'City:'}
              onChange={this.updateState} />

            <FormField value={state}
              fieldName={'state'} title={'State:'}
              onChange={this.updateState} />

            <FormField value={zip}
              fieldName={'zip'} title={'Zip:'}
              onChange={this.updateState} />

            <FormSelect value={company_id}
              options={this.props.companies}
              fieldName={'company_id'} title={'Company:'}
              onChange={this.updateState} />

            <FormSelect value={type}
              options={storeTypes}
              fieldName={'type'} title={'Store Type:'}
              onChange={this.updateState} />

            <input type='submit' value='Create New Store' />

        </form>

        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (store) => {
  return {
    companies: store.companyList
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCompanies}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresNew);
