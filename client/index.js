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

  if (!roles && parsedToken) {
    wipeLocalData();
  } else {
    setAuthToken(parsedToken);
    store.dispatch(setCurrentUser(parsedUser));
    store.dispatch(setUserRole(roles));
    store.dispatch(setCurrentStore(parsedStore));
  }
} else {
  wipeLocalData();
}

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#root')
);
