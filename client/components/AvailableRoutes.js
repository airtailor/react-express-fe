import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import '../../styles/main.scss';
import Home from './Home';
import SignIn from './Signin';
import SignUp from './SignUp';
import StoreOrders from './stores/StoresShow';
import OrdersShow from './orders/show/OrdersShow';
import OrdersEdit from './orders/OrdersEdit';
import StoresEdit from './stores/StoresEdit';
import StoresNew from './stores/StoresNew';
import CustomerEdit from './CustomerEdit';
import OrderForm from './OrderForm/RetailerOrderForm';
import NewOrders from './admin/NewOrders';

const AvailableRoutes = (props) => {
  const { loggedIn, admin } = props;
  return (
    <div className='content'>
      <Route exact path='/' render={(props) => (
        loggedIn ? (
          <Home />
        ) : (
          <Redirect to='/sign_in'/>
        )
      )}/>

      <Route path='/sign_in' render={(props) => (
        loggedIn ? (
          <Redirect to='/' />
        ) : (
          <SignIn />
        )
      )}/>

      <Route path='/sign_up' render={(props) => (
        loggedIn ? (
          <Redirect to='/'/>
        ) : (
          <SignUp />
        )
      )}/>

      <Route exact path='/orders' render={(props) => (
        loggedIn ? (
          <StoreOrders {...props} />
        ) : (
          <Redirect to='/sign_in' />
        )
      )}/>

      <Switch>
        <Route exact path='/orders/new' render={(props) => (
          loggedIn ? (
            <OrderForm {...props} />
          ) : (
            <Redirect to='/sign_in' />
          )
        )}/>

        <Route exact path='/orders/:order_id' render={(props) => (
          loggedIn ? (
            <OrdersShow {...props} />
          ) : (
            <Redirect to='/sign_in' />
          )
        )}/>
      </Switch>

      <Route path='/orders/:order_id/edit' render={(props) => (
        loggedIn ? (
          <OrdersEdit {...props} />
        ) : (
          <Redirect to='/sign_in' />
        )
      )}/>

      <Route path='/stores/:store_id/edit' render={(props) => (
        loggedIn ? (
          <StoresEdit {...props} />
        ) : (
          <Redirect to='/sign_in' />
        )
      )}/>

      <Switch>
        <Route path='/stores/new' render={(props) => (
          admin ? (
            <StoresNew {...props} />
          ) : (
            <Redirect to='/sign_in' />
          )
        )}/>

        <Route exact path='/stores/:id' render={(props) => (
          loggedIn ? (
            <Home />
          ) : (
            <Redirect to='/sign_in'/>
          )
        )}/>
      </Switch>

      <Route path='/customers/:customer_id/edit' render={(props) => (
        loggedIn ? (
          <CustomerEdit {...props} />
        ) : (
          <Redirect to='/sign_in' />
        )
      )}/>

      <Route exact path='/admin/orders/new' render={props => (
        admin ? (
          <NewOrders {...props} />
        ) : (
          <Redirect to='/' />
        )
      )}/>

    </div>
  );
}

export default AvailableRoutes;
