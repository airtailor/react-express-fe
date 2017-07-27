import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NavigationBar from './components/NavigationBar';
import AvailableRoutes from './components/AvailableRoutes';

const Router = (props) => {
  const loggedIn = props.currentUser.isAuthenticated;
  const admin = (props.currentUser.user.roles && props.currentUser.user.roles[0].name === 'admin');
  return (
    <BrowserRouter>
      <div>
        <NavigationBar loggedIn={loggedIn} admin={admin}/>

        <hr/>
        <AvailableRoutes loggedIn={loggedIn} admin={admin} />
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
