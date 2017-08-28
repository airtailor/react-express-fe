import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NavigationBar from './components/NavigationBar';
import AvailableRoutes from './components/AvailableRoutes';
import SignIn from './components/SignIn';

const Router = (props) => {
  const loggedIn = props.currentUser.isAuthenticated;
  const admin = (props.currentUser.user.roles && props.currentUser.user.roles[0].name === 'admin');
  const retailer = (props.currentUser.user.roles && props.currentUser.user.roles[0].name === 'retailer');
  const storeName = props.currentStore.name;
  if (loggedIn){
    return (
      <BrowserRouter>
        <div className="container">
          <NavigationBar retailer={retailer} loggedIn={loggedIn} admin={admin} />
          <AvailableRoutes retailer={retailer} loggedIn={loggedIn} admin={admin} />
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div>
          <SignIn />
        </div>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore
  }
}

export default connect(mapStateToProps)(Router);
