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
//import OrderForm from './OrderForm/RetailerOrderForm';
import NewOrders from './admin/NewOrders';
import ConversationsIndex from './conversations/ConversationsIndex';
import ConversationShow from './conversations/ConversationsShow';
import OrdersNew from './orders/new/OrdersNew';
import Checkout from './orders/new/Checkout';
import OrderConfirmation from './orders/new/OrderConfirmation';

const AvailableRoutes = (props) => {
  const { loggedIn, admin, retailer } = props;
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
            <OrdersNew {...props} />
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

      <Route exact path='/messages' render={props => (
        loggedIn ? (
          <ConversationShow {...props} />
        ) : (
          <Redirect to='/' />
        )
      )}/>

      <Route exact path='/orders/new/checkout' render={props => (
        (admin || retailer) ? (
          <Checkout {...props} />
        ) : (
          <Redirect to='/' />
        )
      )}/>

      <Route exact path='/orders/new/order-confirmation' render={props => (
        (admin || retailer) ? (
          <OrderConfirmation {...props} />
        ) : (
          <Redirect to='/' />
        )
      )}/>

    </div>
  );
}

export default AvailableRoutes;
