import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationBar from './components/navigation/NavigationBar';
import AvailableRoutes from './routes/';
import SignIn from './components/SignIn';
import Growler from './components/growler';
import Loader from './components/loader';
import Intercom from 'react-intercom';

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

  const user = {
    user_id: props.currentUser.user.id,
    email: props.currentUser.user.email,
    name: props.currentUser.user.email,
  };

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

          <div className="add">
            <Intercom appID="j5szofcq" {...user} />
          </div>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div>
          <Growler />
          <AvailableRoutes
            retailer={false}
            loggedIn={false}
            admin={false}
            tailor={false}
          />

          <div className="add">
            <Intercom appID="j5szofcq" {...user} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(mapStateToProps)(Router);
