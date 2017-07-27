import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';
import SignIn from './Signin';
import SignUp from './SignUp';
import StoreOrders from './StoreOrders';
import OrdersShow from './OrdersShow';
import OrdersEdit from './OrdersEdit';
import StoresEdit from './StoresEdit';
import StoresNew from './StoresNew';
import CustomerEdit from './CustomerEdit';

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


      <Route exact path="/orders" render={() => (
        loggedIn ? (
          <StoreOrders />
        ) : (
          <Redirect to="/sign_in" />
        )
      )}/>

      <Route exact path="/orders/:order_id" render={(props) => (
        loggedIn ? (
          <OrdersShow {...props} />
        ) : (
          <Redirect to="/sign_in" />
        )
      )}/>

      <Route path="/orders/:order_id/edit" render={(props) => (
        loggedIn ? (
          <OrdersEdit {...props} />
        ) : (
          <Redirect to="/sign_in" />
        )
      )}/>

      <Route path="/stores/:store_id/edit" render={(props) => (
        loggedIn ? (
          <StoresEdit {...props} />
        ) : (
          <Redirect to="/sign_in" />
        )
      )}/>


      <Route path="/stores/new" render={(props) => (
        loggedIn ? (
          <StoresNew {...props} />
        ) : (
          <Redirect to="/sign_in" />
        )
      )}/>

      <Route path="/customers/:customer_id" render={(props) => (
        loggedIn ? (
          <CustomerEdit {...props} />
        ) : (
          <Redirect to="/sign_in" />
        )
      )}/>

    </div>
  );
}


export default AvailableRoutes;
