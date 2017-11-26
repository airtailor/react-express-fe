import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import TailorIndex from '../../components/admin/tailors/TailorIndex';

class AdminRoutes extends Component {
  static propTypes = {
    admin: PropTypes.bool.isRequired, // parentComponent
  };
  render() {
    const {admin} = this.props;
    return (
      <div>
        <Route
          exact
          path="/admin/tailors"
          render={props =>
            admin ? <TailorIndex {...props} /> : <Redirect to="/" />}
        />
      </div>
    );
  }
}

export default AdminRoutes;
