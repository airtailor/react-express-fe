import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import WithDynamicImport from '../../components/HOC/WithDynamicImport/';

const TermsOfServicePage = WithDynamicImport(() =>
  import('../../components/terms/TermsOfServicePage')
);

const PrivacyPolicyPage = WithDynamicImport(() =>
  import('../../components/terms/PrivacyPolicyPage')
);

const Home = WithDynamicImport(() => import('../../components/Home'));

const SiteRoutes = props => {
  const { loggedIn } = props;
  return (
    <Switch>
      <Route
        exact
        path="/site/terms_of_service"
        render={props => <TermsOfServicePage {...props} />}
      />

      <Route
        exact
        path="/site/privacy_policy"
        render={props => <PrivacyPolicyPage {...props} />}
      />

      <Route
        exact
        path="/"
        render={props =>
          loggedIn ? <Home {...props} /> : <Redirect to="/sign_in" />}
      />
    </Switch>
  );
};

SiteRoutes.propTypes = {
  loggedIn: PropTypes.bool.isRequired, // parentComponent
};

export default SiteRoutes;
