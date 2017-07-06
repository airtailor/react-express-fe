import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import currentStoreReducer from './currentStoreReducer';
import storeOrdersReducer from './storeOrdersReducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  currentStore: currentStoreReducer,
  storeOrders: storeOrdersReducer
});

export default rootReducer;
