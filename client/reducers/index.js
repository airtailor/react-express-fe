import {combineReducers} from 'redux';
import currentUserReducer from './currentUserReducer';
import currentStoreReducer from './currentStoreReducer';
import storeOrdersReducer from './storeOrdersReducer';
import currentOrderReducer from './currentOrderReducer';
import itemTypesReducer from './itemTypesReducer';
import tailorListReducer from './tailorListReducer';
import companyListReducer from './companyListReducer';
import measurementsReducer from './measurementsReducer';
import newOrdersReducer from './newOrdersReducer';
import conversationsReducer from './conversationsReducer';
import messagesReducer from './messagesReducer';
import garmentsReducer from './garmentsReducer';
import alterationsReducer from './alterationsReducer';
import cartReducer from './cartReducer';
import confirmedNewOrderReducer from './confirmedNewOrderReducer';
import searchResultsReducer from './searchResultsReducer';
import growlerReducer from './growlerReducer';
import archivedOrdersReducer from './archivedOrdersReducer';
import loaderReducer from './loaderReducer';
import userRoleReducer from './userRoleReducer';
import currentCustomerReducer from './currentCustomerReducer';
import cartCustomerReducer from '../components/orders/new/reducers/cartCustomerReducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  currentStore: currentStoreReducer,
  storeOrders: storeOrdersReducer,
  currentOrder: currentOrderReducer,
  itemTypes: itemTypesReducer,
  tailorList: tailorListReducer,
  companyList: companyListReducer,
  measurements: measurementsReducer,
  newOrders: newOrdersReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  garments: garmentsReducer,
  alterations: alterationsReducer,
  cart: cartReducer,
  confirmedNewOrder: confirmedNewOrderReducer,
  searchResults: searchResultsReducer,
  growl: growlerReducer,
  archivedOrders: archivedOrdersReducer,
  loader: loaderReducer,
  userRoles: userRoleReducer,
  currentCustomer: currentCustomerReducer,
  cartCustomer: cartCustomerReducer,
});

export default rootReducer;
