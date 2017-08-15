import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Router from './Router';
import MainPrint from './components/prints/MainPrint';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

if (localStorage.AirTailorTokens && localStorage.CurrentUser) {
  console.log('main indexjs line 20');
  const parsedToken = JSON.parse(localStorage.AirTailorTokens);
  setAuthToken(parsedToken);
  const parsedUser = JSON.parse(localStorage.CurrentUser);
  store.dispatch(setCurrentUser(parsedUser));
} else {
  delete localStorage.AirTailorToken;
  delete localStorage.CurrentUser;
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <div id="react-no-print">
        <Router />
      </div>

      <div id="print-mount">
        <MainPrint />
      </div>
    </div>
  </Provider>,
  document.querySelector('#root')
);

// ReactDOM.render(
//     <Provider store={store}>
//       <Router />
//     </Provider>,
//   document.querySelector('#root')
// );
