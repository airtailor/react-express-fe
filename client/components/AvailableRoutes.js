import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import '../../styles/main.scss';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import StoreOrders from './stores/StoresShow';
import OrdersShow from './orders/show/OrdersShow';
import OrdersEdit from './orders/OrdersEdit';
import ArchivedOrders from './orders/ArchivedOrders';
import StoresEdit from './stores/StoresEdit';
import StoresNew from './stores/StoresNew';
import CustomerEdit from './CustomerEdit';
import NewOrders from './admin/NewOrders';
import ConversationsIndex from './conversations/ConversationsIndex';
import ConversationShow from './conversations/ConversationsShow';
import OrdersNew from './orders/new/OrdersNew';
import OrderConfirmation from './orders/new/OrderConfirmation';
import SearchResults from './search/searchResults';
import SelectAlterations from './orders/new/SelectAlterations';
import TailorIndex from './admin/tailors/TailorIndex';

const AvailableRoutes = props => {
  const {loggedIn, admin, retailer, tailor} = props;
  return (
    <div className="content">
      <Route
        exact
        path="/"
        render={props => (loggedIn ? <Home /> : <Redirect to="/sign_in" />)}
      />

      <Route
        path="/sign_in"
        render={props => (loggedIn ? <Redirect to="/" /> : <SignIn />)}
      />

      <Route
        path="/sign_up"
        render={props => (loggedIn ? <Redirect to="/" /> : <SignUp />)}
      />

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
