import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//import promise from 'redux-promise';

import Router from './Router';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

if (localStorage.AirTailorToken && localStorage.AirtailorToken) {
  const parsedToken = JSON.parse(localStorage.AirTailorToken);
  setAuthToken(parsedToken);
  const parsedUser = JSON.parase(localStorage.CurrentUser);
  store.dispatch(setCurrentUser(parsedUser));
} else {
  delete localStorage.AirTailorToken;
  delete localStorage.CurrentUser;
}

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#root')
);
