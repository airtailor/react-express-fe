import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Router from './Router';
import MainPrint from './components/prints/MainPrint';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, setCurrentStore, setUserRole } from './actions/';
import { StripeProvider } from 'react-stripe-elements';

// uncomment below to toggle on/off redux logger
// import logger from 'redux-logger';
//const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const wipeLocalData = () => {
  delete localStorage.AirTailorToken;
  delete localStorage.CurrentUser;
  delete localStorage.CurrentStore;
};

const store = createStore(rootReducer, applyMiddleware(thunk));
const { AirTailorTokens, CurrentUser, CurrentStore } = localStorage;

if (AirTailorTokens && CurrentUser && CurrentStore) {
  const parsedToken = JSON.parse(AirTailorTokens);
  const parsedUser = JSON.parse(CurrentUser);
  const { valid_roles: roles } = parsedUser;
  const parsedStore = JSON.parse(CurrentStore);

  if (!roles || !parsedToken || !parsedStore) {
    wipeLocalData();
  } else {
    setAuthToken(parsedToken);
    store.dispatch(setUserRole(roles));
    store.dispatch(setCurrentStore(parsedStore));

    delete parsedUser.valid_roles;
    store.dispatch(setCurrentUser(parsedUser));
  }
} else {
  wipeLocalData();
}

ReactDOM.render(
  <StripeProvider apiKey="pk_test_esYxpGD8Z1xZ2xdw4aqQGupJ">
    <Provider store={store}>
      <Router />
    </Provider>
  </StripeProvider>,
  document.querySelector('#root')
);
