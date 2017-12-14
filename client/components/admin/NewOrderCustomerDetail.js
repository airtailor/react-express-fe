import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

const mapStateToProps = store => {
  return {
    currentCustomer: store.currentCustomer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { }, dispatch
  );
};

class NewOrderCustomerDetail extends Component {
  static propTypes = {
    currentCustomer: PropTypes.object.isRequired, // mapStateToProps
  };

  render() {
    const { currentCustomer: customer } = this.props;
    if (!isEmpty(customer)) {

      const {
        id,
        first_name,
        last_name,
        email,
        phone,
        city,
        state_province ,
        zip_code,
      } = customer;

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
            Address: {city}, {state_province} {zip_code}
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
export default connect(mapStateToProps, mapDispatchToProps)(NewOrderCustomerDetail);
