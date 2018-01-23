import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithDynamicImport from '../../../components/HOC/WithDynamicImport/';

const CompaniesNew = WithDynamicImport(() =>
  import('../../../components/admin/companies/CompaniesNew')
);

class CompanyRoutes extends Component {
  static propTypes = {
    admin: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const { admin } = this.props;
    const companiesNewRoute = props =>
      admin ? <CompaniesNew {...props} /> : <Redirect to="/sign_in" />;
    return (
      <Route exact path="/admin/companies/new" render={companiesNewRoute} />
    );
  }
}

export default CompanyRoutes;
