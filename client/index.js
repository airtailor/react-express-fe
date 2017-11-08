import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Router from './Router';
import MainPrint from './components/prints/MainPrint';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser, setCurrentStore} from './actions';
import {StripeProvider} from 'react-stripe-elements';

// uncomment below to toggle on/off redux logger
// import logger from 'redux-logger';
//const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const store = createStore(rootReducer, applyMiddleware(thunk));
const {AirTailorTokens, CurrentUser, CurrentStore} = localStorage;

if (AirTailorTokens && CurrentUser && CurrentStore) {
  const parsedToken = JSON.parse(AirTailorTokens);
  const parsedUser = JSON.parse(CurrentUser);
  const parsedStore = JSON.parse(CurrentStore);

  setAuthToken(parsedToken);
  store.dispatch(setCurrentUser(parsedUser));
  store.dispatch(setCurrentStore(parsedStore));
} else {
  delete localStorage.AirTailorToken;
  delete localStorage.CurrentUser;
  delete localStorage.CurrentStore;
}

ReactDOM.render(
  <StripeProvider apiKey="pk_test_esYxpGD8Z1xZ2xdw4aqQGupJ">
    <Provider store={store}>
      <Router />
    </Provider>
  </StripeProvider>,
  document.querySelector('#root')
);

// ReactDOM.render(
//     <Provider store={store}>
//       <Router />
//     </Provider>,
//   document.querySelector('#root')
// );
