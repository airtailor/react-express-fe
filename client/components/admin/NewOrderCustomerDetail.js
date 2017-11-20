import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NewOrderCustomerDetail extends Component {
  render() {
    if (this.props.order.customer) {
      const {
        id,
        first_name,
        last_name,
        email,
        phone,
        street,
        street_two,
        city,
        state_province,
        zip_code,
      } = this.props.order.customer;
      const customerEditLink = `/customers/${id}/edit`;
      return (
        <div>
          <h3>Customer Details:</h3>
          <p>
            Name: {first_name} {last_name}
          </p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>
            Address: {street} {street_two} {city}, {state_province} {zip_code}
          </p>
          <Link to={customerEditLink}>
            <button className="button short-button"> Edit Customer</button>
          </Link>
        </div>
      );
    } else {
      return <div>Select a Customer</div>;
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
