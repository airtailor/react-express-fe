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

if (localStorage.AirTailorToken) {
  const parsedUser = JSON.parse(localStorage.AirTailorToken);
  setAuthToken(parsedUser);
  store.dispatch(setCurrentUser(parsedUser));
}

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#root')
);
