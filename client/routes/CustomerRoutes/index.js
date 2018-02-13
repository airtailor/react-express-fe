import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithDynamicImport from '../../components/HOC/WithDynamicImport/';
import Measurements from '../../components/measurements/';

const CustomerEdit = WithDynamicImport(() =>
  import('../../components/customers/CustomerEdit')
);

class CustomerRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
    admin: PropTypes.bool.isRequired, // parentComponent
    retailer: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const { loggedIn, admin, tailor } = this.props;
    return (
      <div>
        <Route
          exact
          path="/customers/:customer_id/edit"
          render={props =>
            admin || tailor ? (
              <CustomerEdit {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />

        <Route
          exact
          path="/customers/:customer_id/measurements"
          render={props =>
            loggedIn ? <Measurements {...props} /> : <Redirect to="/sign_in" />}
        />
      </div>
    );
  }
}

export default CustomerRoutes;
