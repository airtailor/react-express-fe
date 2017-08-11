import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreInfo from './StoreInfo';
import CustomerInfo from './CustomerInfo';
import SectionHeader from '../SectionHeader';

class RetailerOrderForm extends Component {
  constructor(){
    super();
    this.state = {
      customer: {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: ''
      },
      sales_associate: {
        first_name: '',
        last_name: ''
      },
      deliverToCustomer: null,
      stage: 0
    }

    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(step, data){

  }

  renderStage(stage){
    switch (stage){
      case 0:
        return (
          <StoreInfo
            stage={stage}
            nextStep={this.nextStep}
            store={this.props.store} />
        );
    }
  }

  render(){
    const {stage, first_name, last_name, phone, email} = this.state;
    const {store, user} = this.props
    const headerText = 'New Order';
    const storeRoute = `/stores/${store.id}`;

    return (
      <div>
        <SectionHeader text={headerText} />
        <div className='order-form'>
        { this.renderStage(stage) }
        </div>
      </div>
    )

  }
}

const mapStateToProps = (store) => {
  return {
    store: store.currentStore,
    user: store.currentUser
  }
}

export default connect(mapStateToProps)(RetailerOrderForm);
