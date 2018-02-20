import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import currentStoreReducer from './currentStoreReducer';
import storeOrdersReducer from './storeOrdersReducer';
import currentOrderReducer from './currentOrderReducer';
import itemTypesReducer from './itemTypesReducer';
import tailorListReducer from './tailorListReducer';
import companyListReducer from './companyListReducer';
import measurementsReducer from './measurementsReducer';
import newOrdersReducer from './newOrdersReducer';
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
import storeListReducer from './storeListReducer';
import cartCustomerReducer from '../components/orders/new/reducers/cartCustomerReducer';
import currentReportReducer from '../components/reports/orders/ducks/currentReportReducer';
import editStoreFormReducer from '../components/stores/edit/ducks/editStoreFormReducer';
import usersListReducer from '../components/users/list/ducks/usersListReducer';
import retailerListReducer from '../components/admin/retailers/ducks/retailerListReducer';
import editUserReducer from '../components/users/edit/ducks/editUserReducer';
import customerOrdersReducer from './customerOrdersReducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  currentStore: currentStoreReducer,
  storeOrders: storeOrdersReducer,
  currentOrder: currentOrderReducer,
  itemTypes: itemTypesReducer,
  tailorList: tailorListReducer,
  retailerList: retailerListReducer,
  companyList: companyListReducer,
  measurements: measurementsReducer,
  newOrders: newOrdersReducer,
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
  currentReport: currentReportReducer,
  editStore: editStoreFormReducer,
  usersList: usersListReducer,
  storeList: storeListReducer,
  editUser: editUserReducer,
  customerOrders: customerOrdersReducer,
});

export default rootReducer;
