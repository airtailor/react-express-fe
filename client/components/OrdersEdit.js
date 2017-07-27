import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';  
import { bindActionCreators } from 'redux';
import FormSelect from './FormSelect';
import FormField from './FormField';
import { updateOrder, getTailorList } from '../actions'; 

class OrdersEdit extends Component {
  constructor(props){
    super();
    this.state = props.order;
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    this.props.getTailorList()
      .catch(err => console.log(err));
  }


  updateState(field, value){
    this.setState({[field]: value});
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.updateOrder({ order: this.state })
      .then(res => console.log('res', res))
      .catch(err => console.log('errr', err));
  }

  render(){
    const { customer, total, weight, provider_id } = this.state;
    const { first_name, last_name } = customer;
    const customerName = first_name + ' ' + last_name;
    const backLink = `/orders/${this.state.id}`; 
    console.log('state provider', this.state.provider_id);

    if (this.props.tailors && this.props.order){
      return ( 
        <div> 
        <Link to={backLink}>
            Back
          </Link>

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <FormField value={customerName} 
              fieldName={'name'} title={'Name:'} 
              onChange={() => console.log('dont do nuthin')} />

            <FormField value={total} 
              fieldName={'total'} title={'Total: $'} 
              onChange={this.updateState} />

            <FormField value={weight} 
              fieldName={'weight'} title={'Weight (grams):'} 
              onChange={this.updateState} />
           
            <FormSelect value={provider_id} 
              options={this.props.tailors}
              fieldName={'provider_id'} title={'Tailor Shop:'} 
              onChange={this.updateState} />

            <FormField value={this.state.total} 
              fieldName={'total'} title={'Total:'} 
              onChange={this.updateState} />

            <input type='submit' value='Update' />
          </form>
        </div>

      );
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = (store) => {
  return {
    order: store.currentOrder,
    tailors: store.tailorList
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getTailorList, updateOrder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersEdit);