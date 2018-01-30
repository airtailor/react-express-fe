import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Router from './Router';
import MainPrint from './components/prints/MainPrint';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';
import { loadState, saveState } from './utils/setLocalStorage';
import { setCurrentUser, setCurrentStore, setUserRole } from './actions/';

// uncomment below to toggle on/off redux logger
// import logger from 'redux-logger';
//const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const persistedState = loadState();

const wipeLocalData = () => {
  delete localStorage.AirTailorToken;
  delete localStorage.CurrentUser;
  delete localStorage.CurrentStore;
  delete localStorage.state;
};

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

// webpack hot reloading for react // not sure how to make this work for BOTH
// react components and reducers. seems like we need to pick one or the other.
if (module.hot) {
  module.hot.accept();

  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    cartCustomer: store.getState().cartCustomer,
  });
});

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
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#root')
);
