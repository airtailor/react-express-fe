import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
import promise from 'redux-promise';

import Router from './Router';
import rootReducer from './reducers';

//const store = createStore(
//  rootReducer,
//  applyMiddleware(promise)
//);

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router />
  </Provider>,
  document.querySelector('#root')
);
