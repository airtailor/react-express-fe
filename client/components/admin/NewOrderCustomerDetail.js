import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NewOrderCustomerDetail extends Component {
  render(){
    if (this.props.order.customer){
      const {id, first_name, last_name, email, phone, street1, street2, city, state, zip} = this.props.order.customer;
      const customerEditLink = `/customers/${id}/edit`;
      return(
        <div>
          <h3>Customer Details:</h3>
          <p>Name: {first_name} {last_name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {street1} {street2} {city}, {state} {zip}</p>
          <Link to={customerEditLink}><button className='button small-button'> Edit Customer</button></Link>
        </div>
      )
    } else {
      return <div>Select a Customer</div>
    }
  }
}
export default NewOrderCustomerDetail;
// const mapStateToProps = (store) => {
//   return {
//     order: store.currentOrder
//   }
// }
//
// export default connect(mapStateToProps)(NewOrderCustomerDetail);
