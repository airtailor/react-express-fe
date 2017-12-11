import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationBar from './components/navigation/NavigationBar';
import AvailableRoutes from './routes/';
import SignIn from './components/SignIn';
import Growler from './components/growler';
import Loader from './components/loader';

const mapStateToProps = store => {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    userRoles: store.userRoles,
  };
};

const Router = props => {
  const loggedIn = props.currentUser.isAuthenticated;
  const { admin, retailer, tailor } = props.userRoles;
  const storeName = props.currentStore.name;

  if (loggedIn) {
    return (
      <BrowserRouter>
        <div className="container">
          <Growler />
          <Loader />
          <NavigationBar
            retailer={retailer}
            loggedIn={loggedIn}
            admin={admin}
            tailor={tailor}
          />
          <AvailableRoutes
            retailer={retailer}
            loggedIn={loggedIn}
            admin={admin}
            tailor={tailor}
          />
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div>
          <Growler />
          <SignIn />
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(mapStateToProps)(Router);
