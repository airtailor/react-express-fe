import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import WithSectionHeader from '../HOC/WithSectionHeader';
import CustomerDetails from '../orders/show/CustomerDetails';
import CustomerMeasurementsLink from '../CustomerMeasurementsLink';

import {
  getCurrentCustomer,
  setGrowler,
  getCustomerOrders,
} from '../../actions';

const mapStateToProps = store => {
  return {
    currentCustomer: store.currentCustomer,
    currentStore: store.currentStore,
    userRoles: store.userRoles,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setGrowler, getCurrentCustomer, getCustomerOrders },
    dispatch
  );
};

class CustomerShow extends Component {
  static propTypes = {
    currentCustomer: PropTypes.object.isRequired, // mapStateToProps
    userRoles: PropTypes.object.isRequired, // mapStateToProps
    currentStore: PropTypes.object.isRequired, // mapStateToProps
    setGrowler: PropTypes.func.isRequired, // mapDispatchToProps
    getCurrentCustomer: PropTypes.func.isRequired, // mapDispatchToProps
    getCustomerOrders: PropTypes.func.isRequired, // mapDispatchToProps
  };

  componentDidMount() {
    const customerId = this.props.match.params.customer_id;
    this.props.getCurrentCustomer(customerId);
    this.props
      .getCustomerOrders(customerId)
      .then(res => console.log('comp did mount', res));
  }

  refreshCurrentCustomer = customer => {
    this.setState(customer);
  };

  updateState = (field, value) => {
    this.setState({ [field]: value });
  };

  editLink() {
    const {
      userRoles: { tailor, admin },
      currentCustomer: { id },
    } = this.props;

    if (tailor || admin) {
      return (
        <Link
          to={`/customers/${id}/edit`}
          className="blue-link"
          style={{ paddingLeft: '50px' }}
        >
          EDIT
        </Link>
      );
    }
  }

  render() {
    if (isEmpty(this.props.currentCustomer)) {
      return <div />;
    }

    return (
      <div className="order-show" style={{ paddingTop: '50px' }}>
        <div
          className="flex-container"
          style={{ justifyContent: 'space-between', maxWidth: '1200px' }}
        >
          <div
            style={{
              width: '52%',
              borderRight: '1px solid gray',
              paddingRight: '3%',
            }}
          >
            <h2 className="sans-serif">
              CUSTOMER DETAILS
              {this.editLink()}
            </h2>

            <CustomerDetails
              withAddress={true}
              customer={this.props.currentCustomer}
            />

            <CustomerMeasurementsLink customer={this.props.currentCustomer} />
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <CustomerDetails customer={this.props.currentCustomer} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithSectionHeader(CustomerShow)
);
