import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NavigationBar from './components/NavigationBar';
import AvailableRoutes from './components/AvailableRoutes';

const Router = (props) => {
  const loggedIn = props.currentUser.isAuthenticated;
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />

        <hr/>
        <AvailableRoutes loggedIn={loggedIn} />
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser
  }
}

export default connect(mapStateToProps)(Router);
