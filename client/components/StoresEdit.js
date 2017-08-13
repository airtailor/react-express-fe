import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentStore, updateStore } from '../actions';
import FormField from './FormField';
import SectionHeader from './SectionHeader';

class StoresEdit extends Component {
  constructor(props){
    super();
    this.state = props.store;
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    this.props.getCurrentStore(this.props.match.params.store_id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  updateState(field, value){
    this.setState({[field]: value});
  }

  handleSubmit(e){
    e.preventDefault();
    const store = this.state;
    this.props.updateStore({store})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  renderForm(data){
    const { name, phone, street1, street2, city, state, zip } = data;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormField value={name}
            fieldName={'name'} title={'Name:'}
            onChange={this.updateState} />

          <FormField value={phone}
            fieldName={'phone'} title={'Phone:'}
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

          <input className='short-button' type="submit" value="Update Store" />
        </form>
      </div>
    );
  }

  render(){
    console.log('props', this.props);
    console.log('state', this.state);
    const {store} = this.props;
    const backLink = `/stores/${store.id}`;
    if (!store){
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <SectionHeader text={`Edit / ${store.name}`} />
          <Link className='backLink' to={backLink}>
              Back
          </Link>
          <div className='form-container'>
            <h3>Edit Store</h3>

            { this.renderForm(this.state) }
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (store) => {
  return {
    store: store.currentStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentStore, updateStore}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresEdit);
