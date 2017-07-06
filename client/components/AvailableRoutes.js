import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';
import SignIn from './Signin';
import SignUp from './SignUp';
import StoreOrders from './StoreOrders';

const AvailableRoutes = (props) => {
  const { loggedIn } = props;
  return (
    <div>
      <Route exact path="/" render={() => ( 
        loggedIn ? (
          <Home /> 
        ) : (
          <Redirect to="/sign_in"/>
        )
      )}/>

      <Route path="/sign_in" render={() => (
        loggedIn ? (
          <Redirect to="/" /> 
        ) : (
          <SignIn />
        )
      )}/>

      <Route path="/sign_up" render={() => (
        loggedIn ? (
          <Redirect to="/"/>
        ) : (
          <SignUp />
        )
      )}/>

      <Route path="/orders" render={() => (
        loggedIn ? (
          <StoreOrders />
        ) : (
          <Redirect to="/sign_in" />
        )
      )}/>
    </div>
  );
}


export default AvailableRoutes;
