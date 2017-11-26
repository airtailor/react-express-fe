import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../../components/Home';

class SiteRoutes extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired, // parentComponent
  };

  render() {
    const {loggedIn} = this.props;
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (loggedIn ? <Home /> : <Redirect to="/sign_in" />)}
        />
      </div>
    );
  }
}

export default SiteRoutes;
