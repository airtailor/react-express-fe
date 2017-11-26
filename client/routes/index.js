import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import '../../styles/main.scss';
import Home from '../components/Home';
import SignIn from '../components/Signin';
import SignUp from '../components/SignUp';
import StoreOrders from '../components/stores/StoresShow';
import OrdersShow from '../components/orders/show/OrdersShow';
import OrdersEdit from '../components/orders/OrdersEdit';
import ArchivedOrders from '../components/orders/ArchivedOrders';
import StoresEdit from '../components/stores/StoresEdit';
import StoresNew from '../components/stores/StoresNew';
import CustomerEdit from '../components/customers/CustomerEdit';
import NewOrders from '../components/admin/NewOrders';
import ConversationsIndex from '../components/conversations/ConversationsIndex';
import ConversationShow from '../components/conversations/ConversationsShow';
import OrdersNew from '../components/orders/new/OrdersNew';
import OrderConfirmation from '../components/orders/new/OrderConfirmation';
import SearchResults from '../components/search/searchResults';
import SelectAlterations from '../components/orders/new/SelectAlterations';
import TailorIndex from '../components/admin/tailors/TailorIndex';

import AuthRoutes from './AuthRoutes';

const AvailableRoutes = props => {
  const {loggedIn, admin, retailer, tailor} = props;
  return (
    <div className="content">
      <Route
        exact
        path="/"
        render={props => (loggedIn ? <Home /> : <Redirect to="/sign_in" />)}
      />

      <AuthRoutes loggedIn={loggedIn} />

      <Route
        exact
        path="/orders"
        render={props =>
          loggedIn ? <StoreOrders {...props} /> : <Redirect to="/sign_in" />}
      />

      <Switch>
        <Route
          exact
          path="/orders/new"
          render={props =>
            admin || retailer ? (
              <OrdersNew {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />

        <Route
          exact
          path="/orders/:order_id"
          render={props =>
            loggedIn ? <OrdersShow {...props} /> : <Redirect to="/sign_in" />}
        />
      </Switch>

      <Route
        exact
        path="/orders/:order_id/edit"
        render={props =>
          loggedIn ? <OrdersEdit {...props} /> : <Redirect to="/sign_in" />}
      />
      <Switch>
        <Route
          exact
          path="/stores/:store_id/edit"
          render={props =>
            loggedIn ? <StoresEdit {...props} /> : <Redirect to="/sign_in" />}
        />

        <Route
          exact
          path="/stores/:store_id/orders"
          render={props =>
            loggedIn ? <StoreOrders {...props} /> : <Redirect to="/sign_in" />}
        />

        <Route
          exact
          path="/stores/:store_id/orders/archived"
          render={props =>
            loggedIn ? (
              <ArchivedOrders {...props} />
            ) : (
              <Redirect to="/sign_in" />
            )}
        />
      </Switch>

      <Switch>
        <Route
          path="/stores/new"
          render={props =>
            admin ? <StoresNew {...props} /> : <Redirect to="/sign_in" />}
        />

        <Route
          exact
          path="/stores/:id"
          render={props => (loggedIn ? <Home /> : <Redirect to="/sign_in" />)}
        />
      </Switch>

      <Route
        path="/customers/:customer_id/edit"
        render={props =>
          admin || tailor ? (
            <CustomerEdit {...props} />
          ) : (
            <Redirect to="/sign_in" />
          )}
      />
      <Switch>
        <Route
          exact
          path="/admin/orders/new"
          render={props =>
            admin ? <NewOrders {...props} /> : <Redirect to="/" />}
        />
        <Route
          exact
          path="/admin/orders/archived"
          render={props =>
            admin ? <ArchivedOrders {...props} /> : <Redirect to="/sign_in" />}
        />
      </Switch>

      <Route
        exact
        path="/admin/tailors"
        render={props =>
          admin ? <TailorIndex {...props} /> : <Redirect to="/" />}
      />

      <Route
        exact
        path="/messages"
        render={props =>
          loggedIn ? <ConversationShow {...props} /> : <Redirect to="/" />}
      />

      <Route
        exact
        path="/conversations"
        render={props =>
          admin ? <ConversationsIndex {...props} /> : <Redirect to="/" />}
      />

      <Route
        exact
        path="/conversations/:id"
        render={props =>
          admin ? <ConversationShow {...props} /> : <Redirect to="/" />}
      />

      <Route
        exact
        path="/orders/new/order-confirmation"
        render={props =>
          admin || retailer ? (
            <OrderConfirmation {...props} />
          ) : (
            <Redirect to="/" />
          )}
      />

      <Route
        exact
        path="/search-results"
        render={props =>
          loggedIn ? <SearchResults {...props} /> : <Redirect to="/" />}
      />
    </div>
  );
};

export default AvailableRoutes;
