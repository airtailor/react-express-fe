import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import SectionHeader from '../../SectionHeader';
import {formatPhone} from '../../../utils/format';

class OrderConfirmation extends Component {
  componentDidlUnMount(){
    console.log('clean up cart', 'clean up confirmedNewOrder')
  }

  renderCustomerInfo(customer){
    const {first_name, last_name, phone, email} = customer;
    return (
      <div>
        <h2>Customer Info:</h2>
        <p>{first_name} {last_name}</p>
        <p>{formatPhone(phone)}</p>
        <p>{email}</p>
      </div>
    );
  }

  renderGarmentAlterations(garment){
    return garment.alterations.map((alt, index) => {
      return <p key={index} className='cart-alteration'>{alt.name}</p>;
    });
  }

  renderGarments(garments){
    return garments.map((garment, index) => {
      return (
        <div key={index}>
          <h3>
            {garment.name} #{index + 1}
          </h3>
          {this.renderGarmentAlterations(garment)}
          <hr />
        </div>
      )
    });
  }

  renderOrderInfo(confirmedNewOrder){
    const {items} = confirmedNewOrder;
    return (
      <div>
        <h2>Order Info:</h2>
        {this.renderGarments(items)}
      </div>
    );
  }

  submitOrder(props){
    this.props.submitOrder(props)
      .then(res => {
        if (!res){
          console.log('errors')
        } else {
          this.setState({orderCompeted: true})
          console.log('success', res)
        }
      })
      .catch(err => {
        debugger;
      })
  }

  renderButtons(confirmedNewOrder){
    const newOrderLink = `/orders/${confirmedNewOrder.id}`;

    return (
      <div>
        <Link to='#'>
          <input type='submit' className='short-button' value='Back' />
        </Link>
        <Link to={newOrderLink}>
          <input type='submit' className='short-button' value='View Order' />
        </Link>
      </div>
    );
    // return (
    //   <div>
    //     <Link to='/orders/new'>
    //       <input type='submit' className='short-button' value='Back' />
    //     </Link>
    //     <input
    //       onClick={() => this.submitOrder(this.props)}
    //       type='submit'
    //       className='short-button'
    //       value='Submit' />
    //   </div>
    // );
  }

  renderShipToCustomer(customerInfo){
    const {first_name, last_name, street1, street2, city, state, zip} = customerInfo;
    return (
      <div>
        <h2>Ship To Customer:</h2>
        <p>{first_name} {last_name}</p>
        <p>{street1}</p>
        {street2 ? <p>{street2}</p> : ''}
        <p>{city}, {state} {zip}</p>
      </div>
    );
  }

  renderShipToStore(store){
    const {name, street1, street2, city, state, zip} = store;
    return (
      <div>
        <h2>Ship To Store:</h2>
        <p>{name}</p>
        <p>{street1}</p>
        {street2 ? <p>{street2}</p> : ''}
        <p>{city}, {state} {zip}</p>
      </div>
    );
  }

  renderShippingInfo(confirmedNewOrder){
    const {ship_to_store, retailer, customer} = confirmedNewOrder;
    if (ship_to_store){
      return this.renderShipToStore(retailer);
    } else if (!ship_to_store){
      return this.renderShipToCustomer(customer);
    }
  }

  render(){
    const {confirmedNewOrder} = this.props;
    return (
      <div>
       <SectionHeader text='Order Completed' />
        <div className='order-completed-container'>
          {this.renderCustomerInfo(confirmedNewOrder.customer)}
          <br />
          {this.renderOrderInfo(confirmedNewOrder)}
          <br />
          {this.renderShippingInfo(confirmedNewOrder)}
          <br />
          {this.renderButtons(confirmedNewOrder)}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (store) => {
  return {
    confirmedNewOrder: store.confirmedNewOrder
  }
}

export default connect(mapStateToProps)(OrderConfirmation);
