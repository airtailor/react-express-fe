import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../../components/Home';
import TermsOfServicePage from '../../components/terms/TermsOfServicePage';

class SiteRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const {loggedIn} = this.props;
    return (
      <div>
        <switch>
          <Route
            exact
            path="/terms_of_service"
            render={() => <TermsOfServicePage />}
          />

          <Route
            exact
            path="/"
            render={props =>
              loggedIn ? <Home {...props} /> : <Redirect to="/sign_in" />}
          />
        </switch>
      </div>
    );
  }
}

export default SiteRoutes;
