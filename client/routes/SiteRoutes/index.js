import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../../components/Home';
import TermsOfServicePage from '../../components/terms/TermsOfServicePage';

const SiteRoutes = (props) => {
  const {loggedIn} = props;
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/site/terms_of_service"
          render={props => <TermsOfServicePage {...props} />}
          />

        <Route
          exact
          path="/"
          render={props =>
            loggedIn ? <Home {...props} /> : <Redirect to="/sign_in" />}
          />
        </Switch>
      </div>
  );
}

SiteRoutes.propTypes = {
  loggedIn: PropTypes.bool.isRequired, // parentComponent
};

export default SiteRoutes;
