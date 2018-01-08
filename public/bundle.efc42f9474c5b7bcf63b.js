webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(663);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(664);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(321);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(665);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(666);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(667);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(668);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(669);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(670);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(671);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_11__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(672);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSignIn = exports.setTokens = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.validateToken = validateToken;
exports.signOutCurrentUser = signOutCurrentUser;
exports.getStoreOrders = getStoreOrders;
exports.getCurrentOrder = getCurrentOrder;
exports.getCurrentStore = getCurrentStore;
exports.updateOrder = updateOrder;
exports.alertCustomersPickup = alertCustomersPickup;
exports.updateCustomer = updateCustomer;
exports.createStore = createStore;
exports.createUser = createUser;
exports.createCompany = createCompany;
exports.getTailorList = getTailorList;
exports.getCompanies = getCompanies;
exports.createShipment = createShipment;
exports.setShipmentType = setShipmentType;
exports.getCustomerMeasurements = getCustomerMeasurements;
exports.createCustomerMeasurements = createCustomerMeasurements;
exports.getNewOrders = getNewOrders;
exports.getOrderCount = getOrderCount;
exports.findOrCreateCustomer = findOrCreateCustomer;
exports.createOrValidateCustomer = createOrValidateCustomer;
exports.submitOrder = submitOrder;
exports.updatePassword = updatePassword;
exports.searchOrders = searchOrders;
exports.getArchivedOrders = getArchivedOrders;
exports.getCurrentCustomer = getCurrentCustomer;
exports.getStoreList = getStoreList;
exports.updateCurrentCustomer = updateCurrentCustomer;
exports.resetUserRole = resetUserRole;
exports.setUserRole = setUserRole;
exports.removeLoader = removeLoader;
exports.setLoader = setLoader;
exports.setArchivedOrders = setArchivedOrders;
exports.removeGrowler = removeGrowler;
exports.setGrowler = setGrowler;
exports.setGarment = setGarment;
exports.setSearchResults = setSearchResults;
exports.setConfirmedNewOrder = setConfirmedNewOrder;
exports.resetCart = resetCart;
exports.updateCartShipTo = updateCartShipTo;
exports.updateCartNotes = updateCartNotes;
exports.updateCartCustomer = updateCartCustomer;
exports.resetCartCustomer = resetCartCustomer;
exports.setCartCustomer = setCartCustomer;
exports.removeGarmentFromCart = removeGarmentFromCart;
exports.addGarmentToCart = addGarmentToCart;
exports.setNewOrders = setNewOrders;
exports.setCustomerMeasurements = setCustomerMeasurements;
exports.setCompanyList = setCompanyList;
exports.setTailorList = setTailorList;
exports.setCurrentUser = setCurrentUser;
exports.setCurrentStore = setCurrentStore;
exports.setStoreOrders = setStoreOrders;
exports.setCurrentOrder = setCurrentOrder;
exports.setItemTypes = setItemTypes;

var _axios = __webpack_require__(29);

var _axios2 = _interopRequireDefault(_axios);

var _setAuthToken = __webpack_require__(119);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _setLocalStorage = __webpack_require__(457);

var _constants = __webpack_require__(10);

var _format = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var setTokens = exports.setTokens = function setTokens(res) {
  // if we get a 401 from the server, then log out the current user
  if (!res.data.headers || !res.data.headers['access-token']) {
    if (!res.data.body || res.data.body.status === 401) {
      resetTokens();
    }
    return;
  }
  var _res$data$headers = res.data.headers,
      client = _res$data$headers.client,
      uid = _res$data$headers.uid,
      expiry = _res$data$headers.expiry;

  var accessToken = res.data.headers['access-token'];
  var AirTailorTokens = { accessToken: accessToken, client: client, uid: uid, expiry: expiry };
  (0, _setAuthToken2.default)(AirTailorTokens);
  (0, _setLocalStorage.setLocalStorageAuth)(AirTailorTokens);
};

var resetTokens = function resetTokens() {
  delete localStorage.AirTailorTokens;
  delete localStorage.CurrentUser;
  delete localStorage.CurrentStore;
};

var userSignIn = exports.userSignIn = function userSignIn(email, password) {
  var url = _constants.expressApi + '/auth/sign_in';
  var data = { email: email, password: password };
  return function (dispatch) {
    return _axios2.default.post(url, data).then(function (res) {
      if (res.data.status === 401) {
        return { errors: true, status: 401 };
      } else if (res.data.body) {
        var dataRes = res.data.body.data;
        var id = dataRes.id,
            _email = dataRes.email,
            store_id = dataRes.store_id,
            valid_roles = dataRes.valid_roles,
            uid = dataRes.uid;

        setTokens(res);
        dispatch(setUserRole(valid_roles));
        (0, _setLocalStorage.setLocalStorageUser)(dataRes);

        // right now, the code assumes that a user has a single role, but it's
        // written to work with multiple roles if/when that becomes necessary.
        dispatch(setCurrentUser({ id: id, email: _email, store_id: store_id }));
        return { success: true };
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
};

function validateToken() {
  var dispatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

  var url = _constants.expressApi + '/auth/validate_token';
  return _axios2.default.post(url).then(function (res) {
    if (res.data.status === 401) {
      if (dispatch) {
        dispatch(signOutCurrentUser());
      } else {
        return { errors: true, status: 401 };
      }
    } else {
      if (dispatch) {
        var _res$data$body = res.data.body,
            id = _res$data$body.id,
            email = _res$data$body.email,
            store_id = _res$data$body.store_id,
            valid_roles = _res$data$body.valid_roles;

        dispatch(setUserRole(valid_roles));
        dispatch(setCurrentUser({ id: id, email: email, store_id: store_id }));
      }
      return res;
    }
  });
}

function signOutCurrentUser() {
  var url = _constants.expressApi + '/auth/sign_out';
  return function (dispatch) {
    delete localStorage.AirTailorTokens;
    delete localStorage.CurrentUser;
    delete localStorage.CurrentStore;
    (0, _setAuthToken2.default)({});
    dispatch(setCurrentUser({}), setCurrentStore({}), setUserRole({}));
    window.location = '/';

    return _axios2.default.post(url).then(function (res) {}).catch(function (err) {
      console.log('error from signOutCurrentUser linke 75', err);
    });
  };
}

function getStoreOrders(store_id) {
  var url = _constants.expressApi + '/stores/' + store_id + '/orders';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setStoreOrders(res.data.body));
      }).catch(function (err) {
        console.log('error', err);
      });
    });
  };
}

function getCurrentOrder(store_id, order_id) {
  var url = _constants.expressApi + '/stores/' + store_id + '/orders/' + order_id;
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setCurrentOrder(res.data.body));
        return res.data.body;
      }).catch(function (err) {
        console.log('error', err);
      });
    });
  };
}

function getCurrentStore(store_id) {
  var url = _constants.expressApi + '/stores/' + store_id;
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        (0, _setLocalStorage.setLocalStorageStore)(res.data.body);
        dispatch(setCurrentStore(res.data.body));
        return res;
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function updateOrder(data) {
  var url = _constants.expressApi + '/stores/' + data.order.store_id + '/orders/' + data.order.id + '/edit';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.post(url, data).then(function (res) {
        dispatch(setCurrentOrder(res.data.body));
        return res.data;
      }).catch(function (err) {
        debugger;
      });
    }).catch(function (err) {
      return console.log('err index.js line 155', err);
    });
  };
}

function alertCustomersPickup(orders, store_id) {
  var url = _constants.expressApi + '/stores/' + store_id + '/orders/alert_customers';
  var data = [].concat(_toConsumableArray(orders)).map(function (order) {
    return order.id;
  });

  return validateToken().then(setTokens).then(function () {
    return _axios2.default.put(url, data).then(function (res) {
      return res.data;
    }).catch(function (err) {
      debugger;
    });
  }).catch(function (err) {
    return console.log('err index.js line 155', err);
  });
}

function updateCustomer(customer) {
  var id = customer.id,
      street = customer.street,
      street_two = customer.unit,
      city = customer.city,
      state_province = customer.state_province,
      zip_code = customer.zip_code;

  customer.address = { street: street, street_two: street_two, city: city, state_province: state_province, zip_code: zip_code };

  var url = _constants.expressApi + '/customers/' + id;
  return validateToken().then(setTokens).then(function (res) {
    return _axios2.default.put(url, { customer: customer });
  }).catch(function (err) {
    return console.log(err);
  });
}

function createStore(data) {
  return validateToken().then(setTokens).then(function () {
    var url = _constants.expressApi + '/stores/';
    return _axios2.default.post(url, data);
  });
}

function createUser(data) {
  return validateToken().then(setTokens).then(function () {
    var url = _constants.expressApi + '/users/create_user';
    return _axios2.default.post(url, data);
  });
}

function createCompany(data) {
  return validateToken().then(setTokens).then(function () {
    var url = _constants.expressApi + '/companies/';
    return _axios2.default.post(url, data);
  });
}

function getTailorList() {
  var url = _constants.expressApi + '/stores/tailors';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setTailorList(res.data.body));
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function getCompanies() {
  var url = _constants.expressApi + '/companies';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setCompanyList(res.data.body));
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function createShipment(data) {
  if (Array.isArray(data.shipment.shipment_action)) {
    debugger;
  }
  return validateToken().then(setTokens).then(function () {
    var url = _constants.expressApi + '/shipments';
    return _axios2.default.post(url, data);
  });
}

function setShipmentType(typeString) {
  return {
    type: typeString,
    notes: notes
  };
}

function getCustomerMeasurements(data) {
  var url = _constants.expressApi + '/customers/' + data.customer_id + '/measurements/last';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setCustomerMeasurements(res.data.body));
        return res.data.body;
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function createCustomerMeasurements(measurement) {
  var url = _constants.expressApi + '/customers/' + measurement.customer_id + '/measurements';
  var data = { measurement: measurement };
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.post(url, data).then(function (res) {
        dispatch(setCustomerMeasurements(res.data.body));
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function getNewOrders() {
  var url = _constants.expressApi + '/orders/new_orders';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setNewOrders(res.data.body));
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function getOrderCount(store_id) {
  return validateToken().then(setTokens).then(function () {
    var url = _constants.expressApi + '/stores/' + store_id + '/orders_count';
    return _axios2.default.get(url);
  });
}

function findOrCreateCustomer(customerInfo) {
  var url = _constants.expressApi + '/customers/find_or_create';
  return validateToken().then(setTokens).then(function () {
    return _axios2.default.post(url, { customer: customerInfo });
  });
}

function createOrder(order) {
  var url = _constants.expressApi + '/orders';
  return validateToken().then(setTokens).then(function (res) {
    return _axios2.default.post(url, { order: order });
  });
}

function createOrValidateCustomer(customer) {
  var street = customer.street,
      street_two = customer.unit,
      city = customer.city,
      state_province = customer.state_province,
      zip_code = customer.zip_code;

  customer.address = { street: street, street_two: street_two, city: city, state_province: state_province, zip_code: zip_code };
  var url = _constants.expressApi + '/customers/create_or_validate_customer';
  return validateToken().then(setTokens).then(function (res) {
    return _axios2.default.post(url, _extends({}, customer));
  });
}

function getOrderWeight(cart) {
  return cart.garments.reduce(function (prev, curr) {
    return prev += curr.weight;
  }, 0);
}

function getOrderTotal(cart) {
  return cart.garments.reduce(function (prev, curr) {
    return prev += curr.alterations.reduce(function (prev, curr) {
      return prev += curr.price;
    }, 0);
  }, 0);
}

function submitOrder(props) {
  var cart = props.cart,
      currentStore = props.currentStore,
      customer_id = props.cartCustomer.id;


  return function (dispatch) {
    var requester_id = currentStore.id;
    var weight = getOrderWeight(cart);
    var total = getOrderTotal(cart);
    var source = 'React-Portal';

    var garments = cart.garments.map(function (garment) {
      delete garment.image;
      garment.alterations.map(function (alt) {
        delete alt.howToPin;
        return alt;
      });
      return garment;
    });

    var ship_to_store = cart.shipToStore;
    var requester_notes = cart.notes;
    var type = 'TailorOrder';

    var order = {
      customer_id: customer_id,
      requester_id: requester_id,
      weight: weight,
      total: total,
      garments: garments,
      source: source,
      requester_notes: requester_notes,
      type: type,
      ship_to_store: ship_to_store
    };

    return createOrder(order).then(function (res) {
      if (res.data.body.errors) {
        return {
          errors: true,
          message: res.data.body.errors
        };
      }
      return dispatch(setConfirmedNewOrder(res.data.body));
    }).catch(function (err) {
      debugger;
    });
  };
}

function updatePassword(data) {
  var url = _constants.expressApi + '/users/update_password';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.put(url, data).then(function (res) {
        if (res.data.body.email) {
          dispatch(setCurrentUser(res.data.body));
          return res;
        } else {
          console.log('hmmm something went wrong', res);
        }
      }).catch(function (err) {
        debugger;
      });
    }).catch(function (err) {
      return console.log('err index.js line 488', err);
    });
  };
}

function searchOrders(query) {
  var url = _constants.expressApi + '/orders/search/' + query;
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        if (!res.data.body.errors && !(res.data === 500)) {
          dispatch(setSearchResults(res.data.body));
          return res.data.body;
        } else {
          console.log('hmmm something went wrong', res);
          var message = 'Hmm something went wrong with your search.';
          var kind = 'warning';
          dispatch(setGrowler({ kind: kind, message: message }));
        }
      }).catch(function (err) {
        var message = 'Hmm something went wrong with your search.';
        var kind = 'warning';
        dispatch(setGrowler({ kind: kind, message: message }));
      });
    }).catch(function (err) {
      return console.log('err index.js line 488', err);
    });
  };
}

function getArchivedOrders() {
  var url = _constants.expressApi + '/orders/archived';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        if (!res.data.body.errors) {
          dispatch(setArchivedOrders(res.data.body));
          return res.data.body;
        } else {
          console.log('hmmm something went wrong', res);
        }
      }).catch(function (err) {
        debugger;
      });
    }).catch(function (err) {
      return console.log('err index.js line 488', err);
    });
  };
}

function getCurrentCustomer(id) {
  var url = _constants.expressApi + '/customers/' + id;
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        if (!res.data.body.errors) {
          dispatch(setCurrentCustomer(res.data.body));
          return res.data.body;
        } else {
          console.log('hmmm something went wrong', res);
        }
      }).catch(function (err) {
        debugger;
      });
    }).catch(function (err) {
      return console.log('err index.js line 488', err);
    });
  };
}

function getStoreList() {
  var url = _constants.expressApi + '/stores';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        if (!res.data.body.errors) {
          dispatch(setStoreList(res.data.body));
          return res.data.body;
        } else {
          console.log('hmmm something went wrong', res);
        }
      }).catch(function (err) {
        debugger;
      });
    }).catch(function (err) {
      return console.log('err index.js line 488', err);
    });
  };
}

// actions

function setStoreList(stores) {
  return {
    type: _constants.SET_STORE_LIST,
    stores: stores
  };
}

function setCurrentCustomer(customer) {
  return {
    type: _constants.SET_CURRENT_CUSTOMER,
    customer: customer
  };
}

function updateCurrentCustomer(field, value) {
  return {
    type: _constants.UPDATE_CURRENT_CUSTOMER,
    customer: { field: field, value: value }
  };
}

function resetUserRole() {
  return {
    type: _constants.RESET_USER_ROLE
  };
}

function setUserRole(roles) {
  return {
    type: _constants.SET_USER_ROLE,
    roles: roles
  };
}

function removeLoader() {
  return {
    type: _constants.REMOVE_LOADER
  };
}

function setLoader() {
  return {
    type: _constants.SET_LOADER
  };
}

function setArchivedOrders(orders) {
  return {
    type: _constants.SET_ARCHIVED_ORDERS,
    orders: orders
  };
}

function removeGrowler() {
  return {
    type: _constants.REMOVE_GROWLER
  };
}

function setGrowler(growl) {
  return {
    type: _constants.SET_GROWLER,
    growl: growl
  };
}

function setGarment(garment, index) {
  return {
    type: _constants.UPDATE_GARMENT_IN_CART,
    garment: garment,
    index: index
  };
}

function setSearchResults(orders) {
  return {
    type: _constants.SET_SEARCH_RESULTS,
    orders: orders
  };
}

function setConfirmedNewOrder(order) {
  return {
    type: _constants.SET_CONFIRMED_NEW_ORDER,
    order: order
  };
}

function resetCart() {
  return {
    type: _constants.RESET_CART,
    cart: {}
  };
}

function updateCartShipTo(boolean) {
  return {
    type: _constants.UPDATE_CART_SHIP_TO,
    boolean: boolean
  };
}

function updateCartNotes(notes) {
  return {
    type: _constants.UPDATE_CART_NOTES,
    notes: notes
  };
}

function updateCartCustomer(field, value) {
  return {
    type: _constants.UPDATE_CART_CUSTOMER,
    customer: { field: field, value: value }
  };
}

function resetCartCustomer() {
  return {
    type: _constants.RESET_CART_CUSTOMER
  };
}

function setCartCustomer(customer) {
  return {
    type: _constants.SET_CART_CUSTOMER,
    customer: customer
  };
}

function removeGarmentFromCart(index) {
  return {
    type: _constants.REMOVE_GARMENT_FROM_CART,
    index: index
  };
}

function addGarmentToCart(garment) {
  return {
    type: _constants.ADD_GARMENT_TO_CART,
    garment: garment
  };
}

function setNewOrders(newOrders) {
  return {
    type: _constants.SET_NEW_ORDERS,
    newOrders: newOrders
  };
}

function setCustomerMeasurements(measurements) {
  return {
    type: 'SET_CUSTOMER_MEASUREMENTS',
    measurements: measurements
  };
}
function setCompanyList(companies) {
  return {
    type: _constants.SET_COMPANY_LIST,
    companies: companies
  };
}

function setTailorList(tailors) {
  return {
    type: _constants.SET_TAILOR_LIST,
    tailors: tailors
  };
}

function setCurrentUser(user) {
  return {
    type: _constants.SET_CURRENT_USER,
    user: user
  };
}

function setCurrentStore(store) {
  return {
    type: _constants.SET_CURRENT_STORE,
    store: store
  };
}

function setStoreOrders(orders) {
  return {
    type: _constants.SET_STORE_ORDERS,
    orders: orders
  };
}

function setCurrentOrder(order) {
  return {
    type: _constants.SET_CURRENT_ORDER,
    order: order
  };
}

function setItemTypes(itemTypes) {
  return {
    type: _constants.SET_ITEM_TYPES,
    itemTypes: itemTypes
  };
}

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var expressApi = exports.expressApi = '/api';

var USER_SIGN_UP_REQUEST = exports.USER_SIGN_UP_REQUEST = 'USER_SIGN_UP_REQUEST';
var SET_CURRENT_USER = exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
var SET_CURRENT_STORE = exports.SET_CURRENT_STORE = 'SET_CURRENT_STORE';
var SET_STORE_ORDERS = exports.SET_STORE_ORDERS = 'SET_STORE_ORDERS';
var SET_CURRENT_ORDER = exports.SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';
var SET_ITEM_TYPES = exports.SET_ITEM_TYPES = 'SET_ITEM_TYPES';
var SET_TAILOR_LIST = exports.SET_TAILOR_LIST = 'SET_TAILOR_LIST';
var SET_STORE_LIST = exports.SET_STORE_LIST = 'SET_STORE_LIST';
var SET_COMPANY_LIST = exports.SET_COMPANY_LIST = 'SET_COMPANY_LIST';
var SET_CUSTOMER_MEASUREMENTS = exports.SET_CUSTOMER_MEASUREMENTS = 'SET_CUSTOMER_MEASUREMENTS';
var SET_CURRENT_PRINT = exports.SET_CURRENT_PRINT = 'SET_CURRENT_PRINT';
var SET_NEW_ORDERS = exports.SET_NEW_ORDERS = 'SET_NEW_ORDERS';
var ADD_GARMENT_TO_CART = exports.ADD_GARMENT_TO_CART = 'ADD_GARMENT_TO_CART';
var REMOVE_GARMENT_FROM_CART = exports.REMOVE_GARMENT_FROM_CART = 'REMOVE_GARMENT_FROM_CART';
var UPDATE_CART_CUSTOMER = exports.UPDATE_CART_CUSTOMER = 'UPDATE_CART_CUSTOMER';
var SET_CART_CUSTOMER = exports.SET_CART_CUSTOMER = 'SET_CART_CUSTOMER';
var RESET_CART_CUSTOMER = exports.RESET_CART_CUSTOMER = 'RESET_CART_CUSTOMER';
var UPDATE_CART_SHIP_TO = exports.UPDATE_CART_SHIP_TO = 'UPDATE_CART_SHIP_TO';
var SET_CONFIRMED_NEW_ORDER = exports.SET_CONFIRMED_NEW_ORDER = 'SET_CONFIRMED_NEW_ORDER';
var RESET_CART = exports.RESET_CART = 'RESET_CART';
var UPDATE_CART_NOTES = exports.UPDATE_CART_NOTES = 'UPDATE_CART_NOTES';
var SET_SEARCH_RESULTS = exports.SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
var UPDATE_GARMENT_IN_CART = exports.UPDATE_GARMENT_IN_CART = 'UPDATE_GARMENT_IN_CART';
var SET_GROWLER = exports.SET_GROWLER = 'SET_GROWLER';
var REMOVE_GROWLER = exports.REMOVE_GROWLER = 'REMOVE_GROWLER';
var SET_ARCHIVED_ORDERS = exports.SET_ARCHIVED_ORDERS = 'SET_ARCHIVED_ORDERS';
var SET_LOADER = exports.SET_LOADER = 'SET_LOADER';
var REMOVE_LOADER = exports.REMOVE_LOADER = 'REMOVE_LOADER';

var SHIP_RETAILER_TO_TAILOR = exports.SHIP_RETAILER_TO_TAILOR = 'SHIP_RETAILER_TO_TAILOR';
var SHIP_TAILOR_TO_RETAILER = exports.SHIP_TAILOR_TO_RETAILER = 'SHIP_TAILOR_TO_RETAILER';
var SHIP_CUSTOMER_TO_TAILOR = exports.SHIP_CUSTOMER_TO_TAILOR = 'SHIP_CUSTOMER_TO_TAILOR';
var SHIP_TAILOR_TO_CUSTOMER = exports.SHIP_TAILOR_TO_CUSTOMER = 'SHIP_TAILOR_TO_CUSTOMER';
var SHIP_RETAILER_TO_CUSTOMER = exports.SHIP_RETAILER_TO_CUSTOMER = 'SHIP_RETAILER_TO_CUSTOMER';

var SET_USER_ROLE = exports.SET_USER_ROLE = 'SET_USER_ROLE';
var RESET_USER_ROLE = exports.RESET_USER_ROLE = 'RESET_USER_ROLE';

var SET_CURRENT_CUSTOMER = exports.SET_CURRENT_CUSTOMER = 'SET_CURRENT_CUSTOMER';
var UPDATE_CURRENT_CUSTOMER = exports.UPDATE_CURRENT_CUSTOMER = 'UPDATE_CURRENT_CUSTOMER';

var storeTypes = exports.storeTypes = [{ name: 'Tailor', id: 'Tailor' }, { name: 'Retailer', id: 'Retailer' }];

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(530),
    getTag = __webpack_require__(534),
    isArguments = __webpack_require__(541),
    isArray = __webpack_require__(542),
    isArrayLike = __webpack_require__(543),
    isBuffer = __webpack_require__(544),
    isPrototype = __webpack_require__(157),
    isTypedArray = __webpack_require__(545);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const CustomerLink = props => {
//   const {linkTo, linkText, userRoles} = this.props;
//   const roles = userRoles;
//
//   if (linkTo && linkText) {
//     if (roles.retailer) {
//       return (
//         <Link className="link" to={props.linkTo}>
//           {props.linkText}
//         </Link>
//       );
//     } else {
//       return <h3 className="fake-link">{props.linkText}</h3>;
//     }
//   }
// };

var CartRibbon = function CartRibbon(props) {
  var rotate = props.rotate,
      userRoles = props.userRoles,
      _props$includeLink = props.includeLink,
      includeLink = _props$includeLink === undefined ? true : _props$includeLink;

  var link = props.link;
  if (!link) {
    link = '/orders/new';
  }

  if (props.userRoles.tailor || !includeLink) {
    return _react2.default.createElement('div', null);
  }

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { className: 'cart-ribbon', to: link },
    _react2.default.createElement(
      'h1',
      { className: 'cart-ribbon-sign ' + rotate },
      '+'
    ),
    _react2.default.createElement('div', { className: 'cart-ribbon-triangle' })
  );
};

var SectionHeader = function SectionHeader(props) {
  return _react2.default.createElement(
    'div',
    { className: 'section-header' },
    _react2.default.createElement(
      'h2',
      null,
      props.text
    ),
    CartRibbon(props)
  );
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    userRoles: store.userRoles
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SectionHeader);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormField = function FormField(props) {
  var title = props.title,
      value = props.value,
      fieldName = props.fieldName,
      _onChange = props.onChange,
      className = props.className,
      type = props.type;

  var inputType = type ? type : 'text';
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      { className: 'form-label' },
      title
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('input', {
      type: inputType,
      className: 'form-input ' + className,
      size: '50',
      value: value,
      onChange: function onChange(e) {
        return _onChange(fieldName, e.target.value);
      }
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null)
  );
};

exports.default = FormField;

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ValidateEmail = exports.ValidateEmail = function ValidateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

var ValidatePhone = exports.ValidatePhone = function ValidatePhone(phone) {
  if (phone) {
    return phone.match(/\d/g).length === 10;
  }
};

var ValidateZip = exports.ValidateZip = function ValidateZip(zip) {
  var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  return re.test(zip);
};

var ValidatePassword = exports.ValidatePassword = function ValidatePassword(password) {
  return password.length > 6;
};

var ValidatePasswordConfirmation = exports.ValidatePasswordConfirmation = function ValidatePasswordConfirmation(password, passwordConfirmation) {
  return password === passwordConfirmation;
};

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(156);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addPleaseSelect = function addPleaseSelect(options) {
  return [{ id: '', name: 'Please Select' }].concat(options);
};

var FormSelect = function FormSelect(props) {
  var selectOptions = addPleaseSelect(props.options);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      null,
      props.title
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'select',
      {
        value: props.value,
        onChange: function onChange(e) {
          return props.onChange(props.fieldName, e.target.value);
        }
      },
      renderOptions(selectOptions)
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null)
  );
};

var renderOptions = function renderOptions(options) {
  return options.map(function (option, index) {
    return _react2.default.createElement(
      'option',
      { key: index, value: option.id },
      option.name
    );
  });
};

exports.default = FormSelect;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _helper = __webpack_require__(363);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function WithSectionHeader(WrappedComponent) {
  return function (_Component) {
    _inherits(WithSectionHeader, _Component);

    function WithSectionHeader() {
      _classCallCheck(this, WithSectionHeader);

      var _this = _possibleConstructorReturn(this, (WithSectionHeader.__proto__ || Object.getPrototypeOf(WithSectionHeader)).call(this));

      _this.state = {
        text: ''
      };
      return _this;
    }

    _createClass(WithSectionHeader, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var text = (0, _helper.getSectionHeaderText)(this.props);
        this.setState({ text: text });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SectionHeader2.default, { text: this.state.text }),
          _react2.default.createElement(WrappedComponent, this.props)
        );
      }
    }]);

    return WithSectionHeader;
  }(_react.Component);
}

exports.default = WithSectionHeader;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var editStoreImage = exports.editStoreImage = 'https://i.imgur.com/4QrP2Hd.png';
var logoutImage = exports.logoutImage = 'https://i.imgur.com/rUDfvnm.png';
var homeImage = exports.homeImage = 'https://i.imgur.com/LzPhWe4.png';
var ordersImage = exports.ordersImage = 'https://i.imgur.com/BAlVzrj.png';
var basketImage = exports.basketImage = 'https://i.imgur.com/bH0HuMx.png';
var exclamationImage = exports.exclamationImage = 'https://i.imgur.com/8BHeWZK.png';
var eyeImage = exports.eyeImage = 'https://i.imgur.com/LA3D9sC.png';
var archivedImage = exports.archivedImage = 'https://i.imgur.com/02s7Y1c.png';
var infoImage = exports.infoImage = 'https://i.imgur.com/RcRyJzA.png';
var tailorsImage = exports.tailorsImage = 'https://i.imgur.com/49m15Gl.png';

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatPhone = exports.formatPhone = function formatPhone(phone) {
  return phone.replace(/[^\d]+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

var removeFalseyValuesFromObject = exports.removeFalseyValuesFromObject = function removeFalseyValuesFromObject(obj) {
  for (var k in obj) {
    if (!obj[k]) {
      delete obj[k];
    }
  }
  return obj;
};

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(528),
    getValue = __webpack_require__(535);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shipmentActions = exports.shipmentTypes = exports.messengerState = exports.labelState = exports.correctShipmentExists = exports.getShipmentForRole = exports.messengerAllowed = exports.messengerAvailable = exports.imageLoader = exports.fireShipmentCreate = undefined;

var _constants = __webpack_require__(10);

var _actions = __webpack_require__(8);

var fireShipmentCreate = exports.fireShipmentCreate = function fireShipmentCreate(orders, action, type) {
  var orderIds = orders.map(function (o) {
    return o.id;
  });
  return (0, _actions.createShipment)({
    shipment: {
      delivery_type: type,
      order_ids: orderIds,
      shipment_action: action
    }
  });
};

// this function is being used to wait until after a shipping_label 
// is fully loaded before calling window.print()
// HOW TO TEST???
var imageLoader = exports.imageLoader = function imageLoader(image, callback) {
  var ImageLoader = new Image();
  ImageLoader.onload = function () {
    return callback();
  };
  ImageLoader.src = image;
};

var messengerTime = function messengerTime(now) {
  var startTime = now.clone().startOf('day').hour(12);
  var endTime = now.clone().startOf('day').hour(17);
  var avail = now.isBetween(startTime, endTime);
  return avail;
};

var isNotSunday = function isNotSunday(now) {
  return now.day() != 0;
};

var messengerAvailable = exports.messengerAvailable = function messengerAvailable(now) {
  return isNotSunday(now) && messengerTime(now);
};

var messengerAllowed = exports.messengerAllowed = function messengerAllowed(action, roles) {
  var admin = roles.admin,
      retailer = roles.retailer;


  switch (action) {
    case _constants.SHIP_RETAILER_TO_TAILOR:
      if (admin || retailer) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
};

var getShipmentForRole = exports.getShipmentForRole = function getShipmentForRole(roles, order) {
  var shipments = order.shipments;

  if (roles.admin && order.type === 'WelcomeKit') {
    return shipments.find(function (s) {
      var sourceAddressType = s.source.address_type,
          _s$destination = s.destination,
          destinationAddressType = _s$destination.address_type,
          first_name = _s$destination.first_name,
          last_name = _s$destination.last_name;

      // return shipment if both
      // 1. the source is a retailers address
      // 2. the destination is either a customer or a customer's address

      return sourceAddressType === 'retailer' && (destinationAddressType === 'customer' || first_name && last_name);
    });
  } else if (roles.tailor || roles.admin) {
    if (order.ship_to_store) {
      return shipments.find(function (s) {
        return s.destination.address_type === 'retailer' && s.source.address_type === 'tailor';
      });
    } else {
      return shipments.find(function (s) {
        var destination_type = s.destination_type;
        var _s$destination2 = s.destination,
            address_type = _s$destination2.address_type,
            street1 = _s$destination2.street1,
            zip = _s$destination2.zip,
            first_name = _s$destination2.first_name;

        // if address's destination_type is 'customer'
        // or if this is a customer with a first name, street1, and street2

        var addressFieldsExist = address_type === 'customer' || destination_type === 'Customer';
        var customerFieldsExist = street1 && zip && first_name;
        var srcAddyIsTailor = s.source.address_type === 'tailor';

        return (addressFieldsExist || customerFieldsExist) && srcAddyIsTailor;
      });
    }
  } else if (roles.retailer) {
    return shipments.find(function (s) {
      return s.destination.address_type === 'source' && s.source.address_type === 'retailer';
    });
  }
};

var correctShipmentExists = exports.correctShipmentExists = function correctShipmentExists(roles, order) {
  var shipments = order.shipments;

  if (!shipments || shipments.length == 0) return false;
  var correctShipment = getShipmentForRole(roles, order);
  return correctShipment; // either an object, or undefined
};

var labelState = exports.labelState = function labelState(roles, order, loadingLabel) {
  var shipmentExists = correctShipmentExists(roles, order);
  if (!shipmentExists) {
    return 'needs_label';
  } else {
    if (loadingLabel) {
      return 'in_progress';
    } else {
      return 'label_created';
    }
  }
};

var messengerState = exports.messengerState = function messengerState(roles, order, sendingMessenger) {
  var shipmentExists = correctShipmentExists(roles, order);
  if (shipmentExists) {
    return 'needs_delivery';
  } else {
    if (sendingMessenger) {
      return 'in_progress';
    } else {
      return 'package_delivered';
    }
  }
};

var shipmentTypes = exports.shipmentTypes = function shipmentTypes(roles) {
  var retailer = roles.retailer,
      tailor = roles.tailor,
      admin = roles.admin,
      customer = roles.customer;

  var allShipmentTypes = new Set(['mail_shipment', 'messenger_shipment']);

  if (admin || retailer) {
    return allShipmentTypes;
  } else if (tailor) {
    allShipmentTypes.delete('messenger_shipment');
  } else if (customer) {
    allShipmentTypes.clear();
  }

  return allShipmentTypes;
};

var shipmentActions = exports.shipmentActions = function shipmentActions(order, roles) {
  var ship_to_store = order.ship_to_store,
      type = order.type;
  var retailer = roles.retailer,
      tailor = roles.tailor,
      admin = roles.admin,
      customer = roles.customer;


  if (ship_to_store && tailor) {
    return _constants.SHIP_TAILOR_TO_RETAILER;
  } else if (!ship_to_store && tailor) {
    return _constants.SHIP_TAILOR_TO_CUSTOMER;
  } else if (retailer && type == 'TailorOrder') {
    return _constants.SHIP_RETAILER_TO_TAILOR;
  } else if (admin) {
    if (type == 'WelcomeKit') {
      return _constants.SHIP_RETAILER_TO_CUSTOMER;
    } else if (type == 'TailorOrder') {
      return _constants.SHIP_RETAILER_TO_TAILOR;
    }
  }
};

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(52);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["a" /* parsePath */])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_value_equal__["default"])(a.state, b.state);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(155),
    getRawTag = __webpack_require__(533),
    objectToString = __webpack_require__(539);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(props) {
  var _onChange = props.onChange,
      checked = props.checked,
      fieldName = props.fieldName,
      text = props.text,
      name = props.name;

  if (!fieldName) {
    return _react2.default.createElement(
      'div',
      { style: { display: 'inline' } },
      _react2.default.createElement('input', {
        type: 'checkbox',
        id: name + '-check',
        name: name,
        checked: checked,
        onChange: _onChange
      }),
      _react2.default.createElement(
        'label',
        { htmlFor: name + '-check', className: 'checkbox-label' },
        _react2.default.createElement('span', null),
        text
      )
    );
  }

  return _react2.default.createElement(
    'div',
    { style: { display: 'inline' } },
    _react2.default.createElement('input', {
      type: 'checkbox',
      id: name + '-check',
      name: name,
      checked: checked,
      onChange: function onChange() {
        return _onChange(fieldName, !checked);
      }
    }),
    _react2.default.createElement(
      'label',
      { htmlFor: name + '-check', className: 'checkbox-label' },
      _react2.default.createElement('span', null),
      text
    )
  );
};

exports.default = Checkbox;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(6);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    archivedOrders: store.archivedOrders,
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getArchivedOrders: _actions.getArchivedOrders, setLoader: _actions.setLoader, removeLoader: _actions.removeLoader }, dispatch);
};

var ArchivedOrders = function (_Component) {
  _inherits(ArchivedOrders, _Component);

  function ArchivedOrders(props) {
    _classCallCheck(this, ArchivedOrders);

    var _this = _possibleConstructorReturn(this, (ArchivedOrders.__proto__ || Object.getPrototypeOf(ArchivedOrders)).call(this));

    _this.renderArchivedOrderRows = function () {
      var archivedOrders = _this.props.archivedOrders;


      if (!(0, _isEmpty2.default)(archivedOrders)) {
        return _react2.default.createElement(
          'div',
          { className: 'archive-container' },
          archivedOrders.map(function (order) {
            return _this.renderArchivedOrderRow(order);
          })
        );
      } else if (_this.state.loadingOrders) {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Orders...'
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'no-orders' },
            'No orders found!'
          )
        );
      }
    };

    _this.renderArchivedOrderHeaders = function () {
      var role = _this.props.userRoles;

      var customerOrTailor = void 0,
          quantityOrSource = void 0;

      if (role.admin) {
        customerOrTailor = 'Tailor';
        quantityOrSource = 'Source';
      } else {
        customerOrTailor = 'Customer';
        quantityOrSource = 'Quantity';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'archive-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'archive-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'archive-header-cell' },
              'Order'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'archive-header-cell' },
              'FulFilled Date'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'archive-header-cell' },
              customerOrTailor
            ),
            _react2.default.createElement(
              'h3',
              { className: 'archive-header-cell' },
              quantityOrSource
            )
          )
        ),
        _react2.default.createElement('div', { className: 'archive-header-break-row' })
      );
    };

    _this.state = { loadingOrders: true };
    return _this;
  }

  _createClass(ArchivedOrders, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          setLoader = _props.setLoader,
          removeLoader = _props.removeLoader,
          getArchivedOrders = _props.getArchivedOrders;


      setLoader();
      getArchivedOrders().then(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'renderArchivedOrderRow',
    value: function renderArchivedOrderRow(order) {
      var roles = this.props.userRoles;
      var id = order.id,
          tailor = order.tailor,
          retailer = order.retailer,
          customer = order.customer,
          alterations_count = order.alterations_count;


      var fulfilledDate = (0, _moment2.default)(order.fulfilled_date).format('MM-DD-YYYY');
      var customerOrTailor = void 0,
          quantityOrRetailer = void 0;
      if (roles.admin) {
        if (!tailor || !retailer) {
          return '';
        }
        customerOrTailor = tailor.name;
        quantityOrRetailer = retailer.name;
      } else {
        var first_name = customer.first_name,
            last_name = customer.last_name;

        var name = first_name + ' ' + last_name;
        customerOrTailor = name;
        quantityOrRetailer = alterations_count;
      }

      var route = '/orders/' + id;
      return _react2.default.createElement(
        'div',
        { className: 'archive-row', key: id },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: route, className: 'archive-link' },
          _react2.default.createElement(
            'div',
            { className: 'archive-order-cell' },
            '#',
            id
          ),
          _react2.default.createElement(
            'div',
            { className: 'archive-order-cell', style: { color: 'green' } },
            fulfilledDate
          ),
          _react2.default.createElement(
            'div',
            { className: 'archive-order-cell' },
            customerOrTailor
          ),
          _react2.default.createElement(
            'div',
            { className: 'archive-order-cell' },
            quantityOrRetailer
          )
        ),
        _react2.default.createElement('div', { className: 'archive-break-row' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.currentStore) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
      var headerText = 'Archived Orders / ' + this.props.currentStore.name;
      var archivedOrderHeaders = this.renderArchivedOrderHeaders;
      var archivedOrderRows = this.renderArchivedOrderRows;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          'div',
          { className: 'archive' },
          archivedOrderHeaders(),
          archivedOrderRows()
        )
      );
    }
  }]);

  return ArchivedOrders;
}(_react.Component);

ArchivedOrders.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  archivedOrders: _propTypes2.default.array.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  getArchivedOrders: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ArchivedOrders);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _FormSelect = __webpack_require__(46);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    tailors: store.tailorList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getTailorList: _actions.getTailorList }, dispatch);
};

var SelectTailor = function (_Component) {
  _inherits(SelectTailor, _Component);

  function SelectTailor() {
    _classCallCheck(this, SelectTailor);

    return _possibleConstructorReturn(this, (SelectTailor.__proto__ || Object.getPrototypeOf(SelectTailor)).apply(this, arguments));
  }

  _createClass(SelectTailor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getTailorList().catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tailors = _props.tailors,
          onChange = _props.onChange,
          tailorId = _props.tailorId,
          handleSubmit = _props.handleSubmit,
          _props$fieldName = _props.fieldName,
          fieldName = _props$fieldName === undefined ? 'provider_id' : _props$fieldName,
          _props$title = _props.title,
          title = _props$title === undefined ? 'Tailor Shop:' : _props$title,
          _props$headerText = _props.headerText,
          headerText = _props$headerText === undefined ? 'Select Tailor' : _props$headerText;


      if ((0, _isEmpty2.default)(tailors)) {
        return _react2.default.createElement('div', null);
      }

      return _react2.default.createElement(
        'div',
        { className: 'SelectTailor' },
        _react2.default.createElement(
          'h3',
          null,
          headerText
        ),
        _react2.default.createElement(_FormSelect2.default, {
          value: tailorId,
          options: tailors,
          fieldName: 'provider_id',
          title: title,
          onChange: onChange
        })
      );
    }
  }]);

  return SelectTailor;
}(_react.Component);

SelectTailor.propTypes = {
  tailors: _propTypes2.default.array.isRequired, // mapStateToProps
  getTailorList: _propTypes2.default.func.isRequired, // mapDispatchToProps
  onChange: _propTypes2.default.func.isRequired, // parentComponent
  provider_id: _propTypes2.default.string // parentComponent
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectTailor);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _logo = __webpack_require__(117);

var _logo2 = _interopRequireDefault(_logo);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _shippingFunctions = __webpack_require__(61);

var _alterationsLists = __webpack_require__(454);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentOrder: store.currentOrder,
    userRoles: store.userRoles
  };
};

var OrderComplete = function (_Component) {
  _inherits(OrderComplete, _Component);

  function OrderComplete() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderComplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderComplete.__proto__ || Object.getPrototypeOf(OrderComplete)).call.apply(_ref, [this].concat(args))), _this), _this.renderBulkShippingLabels = function (shipmentSet) {
      var shipment = shipmentSet[0];
      var orders = shipment.orders;
      var roles = _this.props.userRoles;

      var labelShipment = shipment || (0, _shippingFunctions.getShipmentForRole)(roles, order);
      var shippingLabel = labelShipment.shipping_label;


      var ordersContent = _this.renderBulkShippingOrderContent(orders);

      var cssPagedMedia = function () {
        var style = document.createElement('style');
        document.head.appendChild(style);
        return function (rule) {
          style.innerHTML = rule;
        };
      }();

      cssPagedMedia.size = function () {
        cssPagedMedia('@page { size: 5.5in 8.5in; ');
      };

      if (roles.retailer) {
        cssPagedMedia.size();
      }

      var label = _this.renderShippingLabelImage(shippingLabel);
      if (!(0, _isEmpty2.default)(shipmentSet)) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'packing-slip-info' },
            label
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          ordersContent,
          _react2.default.createElement('hr', null),
          _react2.default.createElement('img', {
            className: 'packing-slip-info-img',
            src: _logo2.default,
            alt: 'air tailor logo',
            id: 'logo'
          })
        );
      }
    }, _this.renderShippingLabel = function (order, shipment) {
      var roles = _this.props.userRoles;

      var labelShipment = shipment || (0, _shippingFunctions.getShipmentForRole)(roles, order);
      var shippingLabel = labelShipment.shipping_label;


      var label = _this.renderShippingLabelImage;
      var text = _this.renderOrderText;
      var items = _this.renderOrderItems;

      return _react2.default.createElement(
        'div',
        { className: 'packing-slip-info' },
        label(shippingLabel),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        text(order),
        items(order)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderComplete, [{
    key: 'renderShippingLabelImage',
    value: function renderShippingLabelImage(shippingLabel) {
      return _react2.default.createElement('img', {
        className: 'packing-slip-label',
        alt: 'Shipping Label',
        src: shippingLabel
      });
    }
  }, {
    key: 'renderOrderText',
    value: function renderOrderText(order) {
      var id = order.id,
          items = order.items,
          firstName = order.customer.first_name;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Thank you for your Air Tailor order, ',
          firstName
        ),
        _react2.default.createElement(
          'p',
          null,
          'We hope everything arrived exactly as you expected and that you are pleased with our work. If you have any questions or would like to alter/repair more clothes using Air Tailor, please text us or email hello@airtailor.com. We look forward to serving you again soon,',
          ' ',
          firstName,
          '!'
        )
      );
    }
  }, {
    key: 'renderOrderItems',
    value: function renderOrderItems(order) {
      var id = order.id,
          items = order.items;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { className: 'packing-slip-info-orderid' },
          _react2.default.createElement(
            'b',
            null,
            'Order: #',
            id
          )
        ),
        (0, _alterationsLists.renderAlterationList)(items, 'print-alteration'),
        _react2.default.createElement('img', {
          className: 'packing-slip-info-img',
          src: _logo2.default,
          alt: 'air tailor logo',
          id: 'logo'
        })
      );
    }
  }, {
    key: 'renderBulkShippingOrderItems',
    value: function renderBulkShippingOrderItems(order) {
      var id = order.id,
          items = order.items;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { className: 'packing-slip-info-orderid' },
          _react2.default.createElement(
            'b',
            null,
            'Order: #',
            id
          )
        ),
        (0, _alterationsLists.renderAlterationList)(items, 'print-alteration')
      );
    }
  }, {
    key: 'renderBulkShippingOrderContent',
    value: function renderBulkShippingOrderContent(orders) {
      var label = this.renderShippingLabelImage;
      var text = this.renderOrderText;
      var items = this.renderBulkShippingOrderItems;

      return orders.map(function (order, i) {
        return _react2.default.createElement(
          'div',
          { key: i, className: 'packing-slip-info' },
          items(order)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          order = _props.currentOrder,
          shipmentSet = _props.shipmentSet;

      if (shipmentSet || order) {
        var labelFunction = void 0,
            labelObj = void 0;
        if (shipmentSet && shipmentSet.length > 0) {
          labelFunction = this.renderBulkShippingLabels;
          labelObj = shipmentSet;
        } else if (order && !(0, _isEmpty2.default)(order.shipments)) {
          labelFunction = this.renderShippingLabel;
          labelObj = order;
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'print' },
            'Oops something went wrong'
          );
        }
        return _react2.default.createElement(
          'div',
          { className: 'print' },
          labelFunction(labelObj)
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'print' },
          'Oops something went wrong'
        );
      }
    }
  }]);

  return OrderComplete;
}(_react.Component);

OrderComplete.propTypes = {
  currentOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  shipmentSet: _propTypes2.default.array // parentComponent 
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(OrderComplete);

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(336);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(340);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(18);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(111);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 118 */,
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setAuthToken;

var _axios = __webpack_require__(29);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setAuthToken(token) {
  if (token) {
    var client = token.client,
        uid = token.uid,
        accessToken = token.accessToken,
        expiry = token.expiry;

    _axios2.default.defaults.headers.common['client'] = client;
    _axios2.default.defaults.headers.common['uid'] = uid;
    _axios2.default.defaults.headers.common['access-token'] = accessToken;
    _axios2.default.defaults.headers.common['expiry'] = expiry;
    return true;
  } else {
    debugger;
    delete _axios2.default.defaults.headers.common['client'];
    delete _axios2.default.defaults.headers.common['uid'];
    delete _axios2.default.defaults.headers.common['access-token'];
    delete _axios2.default.defaults.headers.common['expiry'];
    return false;
  }
}

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _redux = __webpack_require__(7);

var _reactRedux = __webpack_require__(5);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(8);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _OrderCard = __webpack_require__(364);

var _OrderCard2 = _interopRequireDefault(_OrderCard);

var _OrderCardIcon = __webpack_require__(365);

var _OrderCardIcon2 = _interopRequireDefault(_OrderCardIcon);

var _images = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    userRoles: store.userRoles,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getCurrentStore: _actions.getCurrentStore }, dispatch);
};

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      active_orders_count: 0,
      late_orders_count: 0
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          storeId = _props.currentUser.user.store_id,
          getCurrentStore = _props.getCurrentStore;


      (0, _actions.getOrderCount)(storeId).then(function (res) {
        _this2.setState(res.data.body);
      });

      getCurrentStore(storeId).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'retailerHome',
    value: function retailerHome(currentStore) {
      var _state = this.state,
          active_orders_count = _state.active_orders_count,
          late_orders_count = _state.late_orders_count;


      return _react2.default.createElement(
        'div',
        { className: 'store-boxes' },
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.ordersImage, alt: 'orders' }),
          count: active_orders_count,
          type: 'Current',
          call: 'VIEW >',
          styleClass: 'current-orders'
        })
      );
    }
  }, {
    key: 'adminHome',
    value: function adminHome(currentStore) {
      var _state2 = this.state,
          active_orders_count = _state2.active_orders_count,
          late_orders_count = _state2.late_orders_count;

      return _react2.default.createElement(
        'div',
        { className: 'store-boxes' },
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.exclamationImage, alt: 'orders' }),
          count: late_orders_count,
          type: 'Late',
          call: 'FULFILL >',
          styleClass: 'late-orders'
        }),
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.ordersImage, alt: 'orders' }),
          count: active_orders_count,
          type: 'Current',
          call: 'VIEW >',
          styleClass: 'current-orders'
        })
      );
    }
  }, {
    key: 'tailorHome',
    value: function tailorHome(currentStore) {
      var _state3 = this.state,
          active_orders_count = _state3.active_orders_count,
          late_orders_count = _state3.late_orders_count;

      return _react2.default.createElement(
        'div',
        { className: 'store-boxes' },
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.exclamationImage, alt: 'orders' }),
          count: late_orders_count,
          type: 'Late',
          call: 'FULFILL >',
          styleClass: 'late-orders'
        }),
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.ordersImage, alt: 'orders' }),
          count: active_orders_count,
          type: 'Current',
          call: 'VIEW >',
          styleClass: 'current-orders'
        })
      );
    }
  }, {
    key: 'renderCards',
    value: function renderCards(roles, currentStore) {
      if (roles.tailor) {
        return this.tailorHome(currentStore);
      } else if (roles.admin) {
        return this.adminHome(currentStore);
      } else if (roles.retailer) {
        return this.retailerHome(currentStore);
      }
    }
  }, {
    key: 'renderStore',
    value: function renderStore() {
      if (!(0, _isEmpty2.default)(this.props.currentStore)) {
        var _props2 = this.props,
            currentStore = _props2.currentStore,
            currentUser = _props2.currentUser,
            userRoles = _props2.userRoles;
        var id = currentStore.id,
            name = currentStore.name;

        var roles = userRoles;
        var storeEditPath = '/stores/' + id + '/edit';
        var storeOrShop = roles.retailer ? 'store' : 'shop';

        return _react2.default.createElement(
          'div',
          { className: 'home' },
          _react2.default.createElement(
            'h2',
            { className: 'greeting' },
            'Greetings, ',
            name
          ),
          _react2.default.createElement(
            'p',
            { className: 'greeting' },
            'Here\'s what\'s happening with your ',
            storeOrShop,
            ' right now.'
          ),
          this.renderCards(roles, currentStore)
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, {
          text: 'Home / ' + this.props.currentStore.name,
          showCart: !this.props.userRoles.tailor ? true : false,
          link: '/orders/new',
          rotate: ''
        }),
        this.renderStore()
      );
    }
  }]);

  return Home;
}(_react.Component);

Home.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  getCurrentStore: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _logo = __webpack_require__(117);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoMessage = function LogoMessage(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/', className: props.className },
      _react2.default.createElement('img', { className: 'logo', src: _logo2.default })
    ),
    _react2.default.createElement(
      'h5',
      null,
      props.text
    )
  );
};

exports.default = LogoMessage;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _validations = __webpack_require__(30);

var _redux = __webpack_require__(7);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(8);

var _LogoMessage = __webpack_require__(130);

var _LogoMessage2 = _interopRequireDefault(_LogoMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn() {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));

    _this.state = {
      email: {
        text: '',
        valid: false
      },
      password: {
        text: '',
        valid: false
      },
      buttonDisabled: true,
      errors: ''
    };
    return _this;
  }

  _createClass(SignIn, [{
    key: 'signIn',
    value: function signIn(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.userSignIn(this.state.email.text, this.state.password.text).then(function (res) {
        if (res.success) {
          // do nothing
        } else if (res.errors) {
          var kind = 'warning';
          var message = 'Email/password combination is incorrect. Try again!';
          _this2.props.setGrowler({ kind: kind, message: message });
        }
      }).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'updateInputText',
    value: function updateInputText(input) {
      var _this3 = this;

      this.setState(_defineProperty({}, input.name, { text: input.value }), function () {
        _this3.validateInputs(_this3.state);
      });
    }
  }, {
    key: 'validateInputs',
    value: function validateInputs(state) {
      var email = state.email,
          password = state.password;

      if ((0, _validations.ValidateEmail)(email.text) && (0, _validations.ValidatePassword)(password.text)) {
        this.setState({
          email: { text: email.text, valid: true },
          password: { text: password.text, valid: true }
        });
        this.updateButtonStatus(false);
      } else {
        this.updateButtonStatus(true);
      }
    }
  }, {
    key: 'updateButtonStatus',
    value: function updateButtonStatus(bool) {
      this.setState({ buttonDisabled: bool });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          buttonDisabled = _state.buttonDisabled,
          email = _state.email,
          password = _state.password;

      if (this.props.authenticated) {
        return _react2.default.createElement(
          'h1',
          null,
          'Hi ',
          this.props.currentUser.email
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'form-container' },
          _react2.default.createElement(_LogoMessage2.default, {
            className: 'sign-in-logo',
            text: 'Welcome, you can log in securely below.'
          }),
          _react2.default.createElement(
            'form',
            { onSubmit: function onSubmit(e) {
                return _this4.signIn(e);
              } },
            _react2.default.createElement('input', {
              className: 'form-input',
              autoFocus: true,
              value: email.text,
              name: 'email',
              placeholder: 'Email',
              type: 'email',
              onChange: function onChange(e) {
                return _this4.updateInputText(e.target);
              }
            }),
            _react2.default.createElement('input', {
              className: 'form-input',
              value: password.text,
              name: 'password',
              onChange: function onChange(e) {
                return _this4.updateInputText(e.target);
              },
              placeholder: 'Password',
              type: 'password'
            }),
            _react2.default.createElement('input', {
              disabled: buttonDisabled,
              type: 'submit',
              value: 'Log In',
              className: 'signin-button'
            }),
            _react2.default.createElement(
              'a',
              {
                className: 'forgot-password link',
                href: 'mailto:brian@airtailor.com?&subject=Forgot%20Password'
              },
              'Forgot your password?'
            )
          )
        );
      }
    }
  }]);

  return SignIn;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    authenticated: store.currentUser.isAuthenticated,
    currentUser: store.currentUser.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ userSignIn: _actions.userSignIn, setGrowler: _actions.setGrowler }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignIn);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_RETAILER_LIST = exports.SET_RETAILER_LIST = 'SET_RETAILER_LIST';

var _require = __webpack_require__(10);

var expressApi = _require.expressApi;
exports.expressApi = expressApi;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.formatNewCartCustomer = formatNewCartCustomer;
function formatNewCartCustomer(customer) {
  if (!customerHasAddress(customer)) {
    var newCustomerObj = updateNewFieldsForCustomer(customer);
    return removeOldAddressFieldsFromCustomer(newCustomerObj);
  } else if (customerHasAddress(customer)) {
    return formatValidAddressIntoCustomer(customer);
  } else {
    var _newCustomerObj = removeOldAddressFieldsFromCustomer(customer);
    return Object.assign(_newCustomerObj, blankAddress);
  }
}

var formatValidAddressIntoCustomer = function formatValidAddressIntoCustomer(customer) {
  var id = customer.id,
      first_name = customer.first_name,
      last_name = customer.last_name,
      phone = customer.phone,
      email = customer.email,
      addresses = customer.addresses;
  var _addresses$ = addresses[0],
      _addresses$$number = _addresses$.number,
      number = _addresses$$number === undefined ? '' : _addresses$$number,
      _addresses$$street = _addresses$.street,
      street = _addresses$$street === undefined ? '' : _addresses$$street,
      _addresses$$street_tw = _addresses$.street_two,
      street_two = _addresses$$street_tw === undefined ? '' : _addresses$$street_tw,
      _addresses$$unit = _addresses$.unit,
      unit = _addresses$$unit === undefined ? '' : _addresses$$unit,
      _addresses$$floor = _addresses$.floor,
      floor = _addresses$$floor === undefined ? '' : _addresses$$floor,
      _addresses$$city = _addresses$.city,
      city = _addresses$$city === undefined ? '' : _addresses$$city,
      _addresses$$state_pro = _addresses$.state_province,
      state_province = _addresses$$state_pro === undefined ? '' : _addresses$$state_pro,
      _addresses$$zip_code = _addresses$.zip_code,
      zip_code = _addresses$$zip_code === undefined ? '' : _addresses$$zip_code;


  var newStreet = (number + ' ' + street).replace(/null/g, '').trim();
  var newUnit = (street_two + ' ' + unit + ' ' + floor).replace(/null/g, '').trim();

  return {
    id: id,
    first_name: first_name,
    last_name: last_name,
    phone: phone,
    email: email,
    street: newStreet,
    unit: newUnit,
    city: city,
    state_province: state_province,
    zip_code: zip_code,
    agrees_to_terms: true
  };
};

var customerHasAddress = function customerHasAddress(customer) {
  var addresses = customer.addresses;


  if (addresses.length === 0) {
    return false;
  }

  var _addresses$2 = addresses[0],
      street = _addresses$2.street,
      zip_code = _addresses$2.zip_code,
      city = _addresses$2.city,
      state_province = _addresses$2.state_province;


  if (addresses.length > 0 && street && zip_code && city && state_province) {
    return true;
  } else {
    return false;
  }
};

var removeOldAddressFieldsFromCustomer = function removeOldAddressFieldsFromCustomer(customer) {
  delete customer.street1;
  delete customer.street2;
  delete customer.zip;
  delete customer.state;
  return customer;
};

var updateNewFieldsForCustomer = function updateNewFieldsForCustomer(customer) {
  var street1 = customer.street1,
      street2 = customer.street2,
      state = customer.state,
      zip = customer.zip;


  return _extends({}, customer, {
    street: street1,
    unit: street2,
    state_province: state,
    zip_code: zip
  });
};

var blankAddress = {
  street: '',
  street_two: '',
  city: '',
  state_province: '',
  zip_code: ''
};

var initialState = exports.initialState = {
  id: '',
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  street: '',
  unit: '',
  city: '',
  state_province: '',
  zip_code: '',
  agrees_to_terms: true
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTotal = undefined;

var _lodash = __webpack_require__(38);

var getTotal = exports.getTotal = function getTotal(garments) {
  var alterations = garments.reduce(function (prev, curr) {
    prev.push(curr.alterations);
    prev = (0, _lodash.flatten)(prev);
    return prev;
  }, []);
  var price = alterations.reduce(function (prev, curr) {
    return prev += curr.price;
  }, 0);
  return price.toFixed(2);
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirectToStageOneIfNoAlterations = redirectToStageOneIfNoAlterations;
function redirectToStageOneIfNoAlterations(props) {
  var alterationsCount = props.cart.garments.reduce(function (prev, curr) {
    return prev += curr.alterations.length;
  }, 0);

  if (!alterationsCount > 0) {
    props.renderStageOne();
  }
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_CURRENT_REPORT = exports.SET_CURRENT_REPORT = 'SET_CURRENT_REPORT';

var _require = __webpack_require__(10);

var expresApi = _require.expresApi;
exports.expresApi = expresApi;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(8);

var _shippingFunctions = __webpack_require__(61);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _OrderComplete = __webpack_require__(79);

var _OrderComplete2 = _interopRequireDefault(_OrderComplete);

var _Checkbox = __webpack_require__(76);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getStoreOrders: _actions.getStoreOrders,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var StoresShow = function (_Component) {
  _inherits(StoresShow, _Component);

  function StoresShow(props) {
    _classCallCheck(this, StoresShow);

    var _this = _possibleConstructorReturn(this, (StoresShow.__proto__ || Object.getPrototypeOf(StoresShow)).call(this));

    _this.makeLabels = function (_ref) {
      var _ref2 = _toArray(_ref),
          orders = _ref2.slice(0);

      var roles = _this.props.userRoles;

      if (!(0, _isEmpty2.default)(orders)) {
        var order = [].concat(_toConsumableArray(orders))[0];
        var action = (0, _shippingFunctions.shipmentActions)(order, roles);
        return Promise.all([_this.postShipment(orders, action, 'mail_shipment')]).then(function () {
          return _this.printBulkShippingLabel();
        });
      }
    };

    _this.sendMessenger = function (_ref3) {
      var _ref4 = _toArray(_ref3),
          orders = _ref4.slice(0);

      var roles = _this.props.userRoles;

      if (!(0, _isEmpty2.default)(orders)) {
        var order = orders[0];
        var action = (0, _shippingFunctions.shipmentActions)(order, roles);
        return _this.postShipment(orders, action, 'messenger_shipment').then(function () {
          var kind = "success";
          var message = "Messenger has been requested!";

          _this.props.setGrowler({ kind: kind, message: message });
          _this.setState({ selectedOrders: new Set() });
        });
      }
    };

    _this.toggleOrderSelect = function (order) {
      if (!_this.state.selectedOrders.has(order)) {
        var newSelectedOrders = _this.state.selectedOrders;
        newSelectedOrders.add(order);
        _this.setState({ selectedOrders: newSelectedOrders });
      } else {
        var _newSelectedOrders = _this.state.selectedOrders;
        _newSelectedOrders.delete(order);
        _this.setState({ selectedOrders: _newSelectedOrders });
      }
    };

    _this.setOrderTabState = function (state) {
      _this.setState({ showOrderState: state, selectedOrders: new Set() });
    };

    _this.renderMessengerButton = function (disabled) {
      var roles = _this.props.userRoles;

      var orders = _this.state.selectedOrders;
      var bool = disabled || _this.state.sendingMessenger;
      var onClick = _this.sendMessenger;
      var now = (0, _moment2.default)();
      if ((0, _shippingFunctions.messengerAvailable)(now)) {
        return _react2.default.createElement(
          'div',
          null,
          _this.renderButton('Send Messenger', {
            disabled: bool,
            className: 'messenger-button',
            clickArgs: orders
          }, onClick)
        );
      }
    };

    _this.renderLabelsButton = function (disabled) {
      var roles = _this.props.userRoles;

      var orders = [].concat(_toConsumableArray(_this.state.selectedOrders));
      var bool = disabled || _this.state.loadingLabel;
      var onClick = _this.makeLabels;

      return _react2.default.createElement(
        'div',
        null,
        _this.renderButton('Create Labels', {
          disabled: bool,
          className: 'print-label-button',
          clickArgs: orders
        }, onClick),
        _react2.default.createElement(_OrderComplete2.default, { shipmentSet: _this.state.selectedOrderShipments })
      );
    };

    _this.renderAlertButton = function (disabled) {
      var orders = _this.state.selectedOrders;
      var onClick = function onClick() {
        return _this.alertCustomers();
      };
      return _this.renderButton('Alert Customers', {
        disabled: disabled,
        className: 'print-label-button',
        clickArgs: orders
      }, onClick);
    };

    _this.renderShippingControls = function () {
      var _this$state = _this.state,
          showOrderState = _this$state.showOrderState,
          selectedOrders = _this$state.selectedOrders;
      var roles = _this.props.userRoles;


      if (roles.admin || roles.retailer) {
        var labelFunction = _this.renderLabelsButton;
        var labelBool = !(showOrderState === 'new_orders' && selectedOrders.size > 0);

        var messengerFunction = _this.renderMessengerButton;
        var messengerBool = !(showOrderState === 'new_orders' && selectedOrders.size > 0);

        var alertFunction = _this.renderAlertButton;
        var alertBool = !(showOrderState === 'ready_orders' && selectedOrders.size > 0);

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'shipping-button-container' },
            labelFunction(labelBool),
            messengerFunction(messengerBool),
            alertFunction(alertBool)
          )
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    };

    _this.renderStateTabs = function () {
      var allTabs = [{ className: 'order-state-tab', status: 'new_orders', text: 'New' }, {
        className: 'order-state-tab',
        status: 'in_progress_orders',
        text: 'Current'
      }, {
        className: 'order-state-tab',
        status: 'ready_orders',
        text: 'Finished'
      }];

      var tabs = allTabs.map(function (tab, i) {
        if (tab.status === _this.state.showOrderState) {
          tab.className = tab.className.concat(' selected');
        }
        return _react2.default.createElement(
          'div',
          {
            key: i,
            className: tab.className,
            onClick: function onClick() {
              return _this.setOrderTabState(tab.status);
            }
          },
          _react2.default.createElement(
            'h3',
            null,
            tab.text,
            ' (',
            _this.countOrdersByStatus(tab.status),
            ')'
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'order-state-row' },
        tabs
      );
    };

    _this.renderTailorHeaders = function () {
      var orderHeader = _this.renderHeaderCell;
      return _react2.default.createElement(
        'div',
        { className: 'order-headers-container' },
        _react2.default.createElement(
          'div',
          { className: 'order-headers-row-no-select' },
          _react2.default.createElement(
            'div',
            { className: 'order-headers-container-no-select' },
            orderHeader('Id', false),
            orderHeader('Status', false),
            orderHeader('Customer', false),
            orderHeader('Quantity', false)
          )
        )
      );
    };

    _this.renderRetailerHeaders = function () {
      var orderHeader = _this.renderHeaderCell;
      return _react2.default.createElement(
        'div',
        { className: 'order-headers-container' },
        _react2.default.createElement(
          'div',
          { className: 'order-headers-row' },
          orderHeader('Select:', false, true),
          _react2.default.createElement(
            'div',
            { className: 'order-data-headers-container' },
            orderHeader('Order', true, false),
            orderHeader('Status', true, false),
            orderHeader('Customer', true, false),
            orderHeader('Quantity', true, false)
          )
        )
      );
    };

    _this.renderRetailerRows = function () {
      var openOrders = _this.props.openOrders;

      if (!(0, _isEmpty2.default)(openOrders)) {
        var status = _this.state.showOrderState;
        var sortedOrders = _this.sortOrdersByStatus(status);
        if (!(0, _isEmpty2.default)(sortedOrders)) {
          return _react2.default.createElement(
            'div',
            { className: 'order-data-container' },
            sortedOrders.map(function (order) {
              return _this.renderOrderRowWithSelect(order);
            })
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'table-row' },
            _react2.default.createElement(
              'div',
              { className: 'no-orders' },
              'No orders found!'
            )
          );
        }
      } else if (_this.state.loadingOrders) {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Orders...'
          )
        );
      }
    };

    _this.renderTailorRows = function () {
      var openOrders = _this.props.openOrders;

      if (!(0, _isEmpty2.default)(openOrders)) {
        var ordersWithShipments = _this.sortOrdersByStatus('new_orders');
        if (!(0, _isEmpty2.default)(ordersWithShipments)) {
          return _react2.default.createElement(
            'div',
            { className: 'order-data-container' },
            ordersWithShipments.map(function (order) {
              return _this.renderOrderRow(order);
            })
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'table-row' },
            _react2.default.createElement(
              'div',
              { className: 'no-orders' },
              'No orders found!'
            )
          );
        }
      } else if (_this.state.loadingOrders) {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Orders...'
          )
        );
      }
    };

    _this.state = {
      showOrderState: 'new_orders',
      selectedOrders: new Set(),
      selectedOrderShipments: []
    };
    return _this;
  }

  _createClass(StoresShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refreshStoreOrders();
    }
  }, {
    key: 'refreshStoreOrders',
    value: function refreshStoreOrders() {
      var _this2 = this;

      this.props.setLoader();

      var _props = this.props,
          getStoreOrders = _props.getStoreOrders,
          paramsId = _props.match.params.store_id,
          currentUserId = _props.currentUser.user.id,
          admin = _props.userRoles.admin;


      var storeId = paramsId && admin ? paramsId : currentUserId;
      this.setState({ loadingOrders: true });
      getStoreOrders(storeId).then(function (res) {
        _this2.setState({ loadingOrders: false });
        _this2.props.removeLoader();
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'postShipment',
    value: function postShipment(orders, action, type) {
      var _this3 = this;

      this.props.setLoader();
      // NOTE: we'll need to update this once we're returning > 1 shipment per post.
      // OrderComplete is set up for arrays, but the API is returning objects right now.
      return (0, _shippingFunctions.fireShipmentCreate)(orders, action, type).then(function (res) {
        _this3.props.removeLoader();
        _this3.setState({ loadingLabel: false });

        var errors = res.data.body.errors;
        if ((0, _isEmpty2.default)(errors)) {
          _this3.setState({ selectedOrderShipments: res.data.body });
        } else {
          Object.keys(errors).map(function (key) {
            _this3.props.setGrowler({
              kind: 'warning',
              message: errors[key][0].message
            });
          });
        }
      }).then(function () {
        return _this3.refreshStoreOrders();
      }).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'formatStatusString',
    value: function formatStatusString(dueDate, late) {
      var todaysDate = (0, _moment2.default)(new Date());
      var momentDueDate = (0, _moment2.default)(dueDate);
      var diff = Math.abs(momentDueDate.diff(todaysDate, 'days'));
      var additionalString = late ? ' days late' : ' days to go';
      var status = (diff + additionalString).toUpperCase();
      return status;
    }
  }, {
    key: 'sortOrdersByStatus',
    value: function sortOrdersByStatus(status) {
      var _props2 = this.props,
          orders = _props2.openOrders,
          roles = _props2.userRoles;

      switch (status) {
        case 'new_orders':
          if (roles.tailor) {
            return orders.filter(function (order) {
              return !(0, _isEmpty2.default)(order.shipments) && order.tailor;
            });
          } else {
            return orders.filter(function (order) {
              var shipments = order.shipments;


              var noShipments = (0, _isEmpty2.default)(shipments);
              var lastShipment = shipments[shipments.length - 1];

              var messengerNotDeliveredYet = shipments.length > 0 && lastShipment.delivery_type === 'messenger_shipment' && lastShipment.status != 'delivered';

              return noShipments || messengerNotDeliveredYet;
            });
          }
        case 'in_progress_orders':
          if (roles.tailor) {
            return orders.filter(function (order) {
              return order.arrived && !order.fulfilled;
            });
          } else {
            return orders.filter(function (order) {
              if ((0, _isEmpty2.default)(order.shipments)) {
                return false;
              }

              var tailor = order.tailor,
                  fulfilled = order.fulfilled,
                  shipments = order.shipments;
              var _shipments = shipments[shipments.length - 1],
                  status = _shipments.status,
                  delivery_type = _shipments.delivery_type;


              var mailShipmentExists = delivery_type === 'mail_shipment';
              var messengerShipmentDelivered = status === 'delivered';

              return (mailShipmentExists || messengerShipmentDelivered) && tailor && !fulfilled;
            });
          }
        case 'ready_orders':
          return orders.filter(function (order) {
            return order.fulfilled;
          });
        default:
          return orders;
      }
    }
  }, {
    key: 'countOrdersByStatus',
    value: function countOrdersByStatus(status) {
      return this.sortOrdersByStatus(status).length;
    }
  }, {
    key: 'messengerDeliveryCompleted',
    value: function messengerDeliveryCompleted(order) {
      var delivered = false;
      if (order.shipments.last.status === "delivered") {
        delivered = true;
      }
      return delivered;
    }
  }, {
    key: 'getOrderStatus',
    value: function getOrderStatus(order) {
      var shipments = order.shipments,
          arrived = order.arrived,
          late = order.late,
          due_date = order.due_date,
          fulfilled = order.fulfilled,
          customer_alerted = order.customer_alerted,
          ship_to_store = order.ship_to_store;


      var status = void 0,
          color = void 0;

      if ((0, _isEmpty2.default)(order.shipments)) {
        status = 'Needs Shipping Details';
        color = 'gold';
      } else if (!(0, _isEmpty2.default)(order.shipments) && !order.arrived) {
        var lastShipment = order.shipments[order.shipments.length - 1];
        var delivery_type = lastShipment.delivery_type;


        if (delivery_type === 'mail_shipment') {
          status = 'In Transit';
          color = 'green';
        } else if (delivery_type === 'messenger_shipment') {
          var shipmentStatus = lastShipment.status;

          if (shipmentStatus === 'pending') {
            status = 'Contacting';
          } else if (shipmentStatus === 'pickup') {
            status = 'Picking Up';
          } else if (shipmentStatus === 'pickup_complete' || shipmentStatus === 'dropoff') {
            status = 'Dropping Off';
          } else if (shipmentStatus === 'delivered') {
            status = 'Delivered';
          }

          color = 'green';
        }
      } else if (order.late) {
        var dueTime = this.formatStatusString(order.due_date, true);
        status = dueTime;
        color = 'red';
      } else if (order.fulfilled && !order.customer_alerted && order.ship_to_store) {
        status = 'Ready for Customer';
        color: 'green';
      } else if (order.arrived && !order.fulfilled) {
        status = this.formatStatusString(order.due_date, false);
        color = 'orange';
      }
      return { status: status, color: color };
    }
  }, {
    key: 'printBulkShippingLabel',
    value: function printBulkShippingLabel() {
      var _this4 = this;

      var shipping_label = this.state.selectedOrderShipments[0].shipping_label;


      var print = function print() {
        window.print();

        setTimeout(function () {
          _this4.setState({
            selectedOrders: new Set(),
            selectedOrderShipments: []
          });
        }, 1000);
      };
      (0, _shippingFunctions.imageLoader)(shipping_label, print);
    }
  }, {
    key: 'alertCustomers',
    value: function alertCustomers() {
      var _this5 = this;

      var _props3 = this.props,
          roles = _props3.userRoles,
          store_id = _props3.currentStore.id;

      var orders = this.state.selectedOrders;
      this.props.setLoader();
      (0, _actions.alertCustomersPickup)(orders, store_id).then(function (res) {
        if (res.body.status === 200) {
          var kind = 'success';
          var message = 'Your customers have been notified to pick up their orders.';
          _this5.props.setGrowler({ kind: kind, message: message });
          _this5.props.removeLoader();
          _this5.refreshStoreOrders();
          _this5.setState({ selectedOrders: new Set() });
        }
      });
    }
  }, {
    key: 'renderButton',
    value: function renderButton(text, params) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return console.log('');
      };

      var className = params.className;
      var clickArgs = params.clickArgs || undefined;
      var disabled = params.disabled;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          type: 'submit',
          onClick: function onClick() {
            return callback(clickArgs);
          },
          disabled: disabled,
          className: className,
          value: text
        })
      );
    }
  }, {
    key: 'renderOrderRow',
    value: function renderOrderRow(order) {
      var orderStatus = this.getOrderStatus(order);
      var id = order.id,
          customer = order.customer,
          alterations_count = order.alterations_count;
      var first_name = customer.first_name,
          last_name = customer.last_name;
      var color = orderStatus.color,
          status = orderStatus.status;

      var route = '/orders/' + id;
      return _react2.default.createElement(
        'div',
        { className: 'order-row', key: id },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: route, className: 'order-row-link-no-select' },
          _react2.default.createElement(
            'div',
            { className: 'order-cell-no-select' },
            '#',
            id
          ),
          _react2.default.createElement(
            'div',
            { style: { color: color }, className: 'order-cell-no-select' },
            status
          ),
          _react2.default.createElement(
            'div',
            { className: 'order-cell-no-select' },
            first_name,
            ' ',
            last_name
          ),
          _react2.default.createElement(
            'div',
            { className: 'order-cell-no-select' },
            alterations_count
          )
        ),
        _react2.default.createElement('div', { className: 'order-data-break-row' })
      );
    }
  }, {
    key: 'renderOrderRowWithSelect',
    value: function renderOrderRowWithSelect(order) {
      var _this6 = this;

      var roles = this.props.userRoles;
      var id = order.id,
          customer = order.customer,
          alterations_count = order.alterations_count;
      var first_name = customer.first_name,
          last_name = customer.last_name;

      var _getOrderStatus = this.getOrderStatus(order),
          color = _getOrderStatus.color,
          status = _getOrderStatus.status;

      var route = '/orders/' + id;
      var orderIsToggled = this.state.selectedOrders.has(order);
      var orderToggle = function orderToggle() {
        return _this6.toggleOrderSelect(order);
      };

      var orderSelect = _react2.default.createElement(_Checkbox2.default, {
        checked: orderIsToggled,
        type: 'checkbox',
        name: id,
        onChange: orderToggle
      });

      return _react2.default.createElement(
        'div',
        { className: 'order-row', key: id },
        _react2.default.createElement(
          'div',
          { className: 'order-select-cell' },
          orderSelect
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: route, className: 'order-row-link' },
          _react2.default.createElement(
            'div',
            { className: 'order-data-cell' },
            '#',
            id
          ),
          _react2.default.createElement(
            'div',
            { style: { color: color }, className: 'order-data-cell' },
            status
          ),
          _react2.default.createElement(
            'div',
            { className: 'order-data-cell' },
            first_name,
            ' ',
            last_name
          ),
          _react2.default.createElement(
            'div',
            { className: 'order-data-cell' },
            alterations_count
          )
        ),
        _react2.default.createElement('div', { className: 'order-data-break-row' })
      );
    }
  }, {
    key: 'renderHeaderCell',
    value: function renderHeaderCell(text, withSelect, isSelect) {
      if (isSelect) {
        return _react2.default.createElement(
          'h3',
          { className: 'order-select-header-cell' },
          text
        );
      } else if (withSelect) {
        return _react2.default.createElement(
          'h3',
          { className: 'order-data-header-cell' },
          text
        );
      } else {
        return _react2.default.createElement(
          'h3',
          { className: 'order-header-cell-no-select' },
          text
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.currentStore) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }

      var _props$userRoles = this.props.userRoles,
          tailor = _props$userRoles.tailor,
          retailer = _props$userRoles.retailer,
          admin = _props$userRoles.admin;

      var headerText = 'Orders / ' + this.props.currentStore.name;

      if (retailer || admin) {
        var orderStateTabs = this.renderStateTabs;
        var orderRows = this.renderRetailerRows;
        var orderHeaders = this.renderRetailerHeaders;
        var shippingControls = this.renderShippingControls;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
          _react2.default.createElement(
            'div',
            { className: 'orders' },
            _react2.default.createElement(
              'div',
              { className: 'order-state-container' },
              orderStateTabs()
            ),
            _react2.default.createElement(
              'div',
              null,
              orderHeaders()
            ),
            _react2.default.createElement('div', { className: 'order-header-break-row' }),
            _react2.default.createElement(
              'div',
              null,
              orderRows()
            ),
            _react2.default.createElement(
              'div',
              null,
              shippingControls()
            )
          )
        );
      } else if (tailor) {
        var _orderRows = this.renderTailorRows;
        var _orderHeaders = this.renderTailorHeaders;
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
          _react2.default.createElement(
            'div',
            { className: 'orders' },
            _react2.default.createElement(
              'div',
              null,
              _orderHeaders()
            ),
            _react2.default.createElement('div', { className: 'order-header-break-row' }),
            _react2.default.createElement(
              'div',
              null,
              _orderRows()
            )
          )
        );
      }
    }
  }]);

  return StoresShow;
}(_react.Component);

StoresShow.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  openOrders: _propTypes2.default.array.isRequired, // mapStateToProps
  getStoreOrders: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StoresShow);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_EDIT_STORE = exports.SET_EDIT_STORE = 'SET_EDIT_STORE';
var UPDATE_EDIT_STORE = exports.UPDATE_EDIT_STORE = 'UPDATE_EDIT_STORE';

var _require = __webpack_require__(10);

var expressApi = _require.expressApi;
exports.expressApi = expressApi;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _FormSelect = __webpack_require__(46);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectRole = function (_Component) {
  _inherits(SelectRole, _Component);

  function SelectRole() {
    _classCallCheck(this, SelectRole);

    return _possibleConstructorReturn(this, (SelectRole.__proto__ || Object.getPrototypeOf(SelectRole)).apply(this, arguments));
  }

  _createClass(SelectRole, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          role = _props.role;


      if (role && role == 'admin') {
        return _react2.default.createElement('div', null);
      }

      var validRoles = [{ id: 'tailor', name: 'Tailor' }, { id: 'retailer', name: 'Retailer' }];

      return _react2.default.createElement(
        'div',
        { className: 'SelectRole' },
        _react2.default.createElement(
          'h3',
          null,
          'Roles'
        ),
        _react2.default.createElement(_FormSelect2.default, {
          value: role,
          options: validRoles,
          fieldName: 'role',
          title: 'Select Role:',
          onChange: onChange
        })
      );
    }
  }]);

  return SelectRole;
}(_react.Component);

SelectRole.propTypes = {
  onChange: _propTypes2.default.func.isRequired, // parentComponent
  role: _propTypes2.default.string.isRequired // parentComponent
};
exports.default = SelectRole;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _actions = __webpack_require__(8);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

var _validations = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    user: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updatePassword: _actions.updatePassword, setGrowler: _actions.setGrowler }, dispatch);
};

var EditPassword = function (_Component) {
  _inherits(EditPassword, _Component);

  function EditPassword() {
    _classCallCheck(this, EditPassword);

    var _this = _possibleConstructorReturn(this, (EditPassword.__proto__ || Object.getPrototypeOf(EditPassword)).call(this));

    _this.updateState = function (key, value) {
      _this.setState(_defineProperty({}, key, value), function () {
        _this.validatePasswords(_this.state.password, _this.state.passwordConfirmation);
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          password = _this$state.password,
          passwordConfirmation = _this$state.passwordConfirmation;

      if (password === passwordConfirmation) {
        var id = _this.props.user.user.id;
        _this.props.updatePassword({
          id: id,
          password: password,
          password_confirmation: passwordConfirmation
        }).then(function (res) {
          var kind = 'success';
          var message = 'Password Updated';
          _this.props.setGrowler({ kind: kind, message: message });
          _this.setState({
            password: '',
            passwordConfirmation: '',
            submitDisabled: true
          });
        }).catch(function (err) {
          return console.log('err', err);
        });
      }
    };

    _this.state = {
      password: '',
      passwordConfirmation: '',
      submitDisabled: true
    };
    return _this;
  }

  _createClass(EditPassword, [{
    key: 'validatePasswords',
    value: function validatePasswords(password, passwordConfirmation) {
      if (password === passwordConfirmation) {
        if ((0, _validations.ValidatePassword)(password)) {
          this.setState({ submitDisabled: false });
          return;
        }
      }
      this.setState({ submitDisabled: true });
    }
  }, {
    key: 'storeIdMatch',
    value: function storeIdMatch() {
      var _props = this.props,
          userStoreId = _props.user.user.store_id,
          paramsStoreId = _props.match.params.store_id;


      return userStoreId == paramsStoreId;
    }
  }, {
    key: 'userIdMatch',
    value: function userIdMatch() {
      var _props2 = this.props,
          userId = _props2.user.user.id,
          paramsUserId = _props2.match.params.user_id;


      return userId == paramsUserId;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.storeIdMatch() || this.userIdMatch()) {
        var _state = this.state,
            password = _state.password,
            passwordConfirmation = _state.passwordConfirmation,
            submitDisabled = _state.submitDisabled;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Edit Password'
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(_FormField2.default, {
              value: password,
              type: 'password',
              fieldName: 'password',
              title: 'Reset Password:',
              onChange: this.updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: passwordConfirmation,
              fieldName: 'passwordConfirmation',
              title: 'Password Confirmation:',
              type: 'password',
              onChange: this.updateState
            }),
            _react2.default.createElement('input', {
              disabled: submitDisabled,
              type: 'submit',
              value: 'Update Password',
              className: 'short-button'
            })
          )
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }]);

  return EditPassword;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditPassword);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_USERS_LIST = exports.SET_USERS_LIST = 'SET_USERS_LIST';

var _require = __webpack_require__(10);

var expressApi = _require.expressApi;
exports.expressApi = expressApi;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tieImage = exports.tieImage = 'https://i.imgur.com/PUnAR7i.png';
var shirtImage = exports.shirtImage = 'https://i.imgur.com/a7t107p.png';
var suitImage = exports.suitImage = 'https://i.imgur.com/EqpP7Hs.png';
var skirtImage = exports.skirtImage = 'https://i.imgur.com/EODAyOd.png';
var dressImage = exports.dressImage = 'https://i.imgur.com/imbBrh2.png';
var pantsImage = exports.pantsImage = 'https://i.imgur.com/L0CbJYT.png';
var coatImage = exports.coatImage = 'https://i.imgur.com/S6qHRxm.png';

/***/ }),
/* 143 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(32);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 157 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 158 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(63),
    isObject = __webpack_require__(161);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Link> outside a <Router>');

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(323);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(112);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(router, 'You should not use <Route> or withRouter() outside a <Router>');

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null : null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  sensitive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),
/* 337 */,
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(706);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 339 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAK8CAYAAAF6vVzVAAAACXBIWXMAAAsTAAALEwEAmpwYAAA59GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0xMC0yNlQxOTo1MTozMS0wNDowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTEwLTI2VDE5OjUyOjQxLTA0OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNi0xMC0yNlQxOTo1Mjo0MS0wNDowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDoxZGFmY2Y4OC1mYmZmLTQyZDMtYjU1Zi0zNTM5MjBmZGZhM2I8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDphZTE1NjY4Zi1kYzY1LTExNzktOGIxNi1kZDdjYTA4M2UwOWU8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDoyMTY5YTRhNS03MzEzLTRkODItOTQ1Ni0wN2IzMWZjZTcxYzQ8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjE2OWE0YTUtNzMxMy00ZDgyLTk0NTYtMDdiMzFmY2U3MWM0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTEwLTI2VDE5OjUxOjMxLTA0OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MWRhZmNmODgtZmJmZi00MmQzLWI1NWYtMzUzOTIwZmRmYTNiPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTEwLTI2VDE5OjUyOjQxLTA0OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NzAwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjcwMDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+nUfdmgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAdo0lEQVR42uzcwQ3DIAyF4YA6UnfyTN6pO9F7FFVViLGN/3frIUj94gChVtsY4yB26RAADDABGGCACcAAA0wABpgADDDA5M+8rAZu7X33Uj19lpUgY3xyAE+AhgLPDKyT16WA7slwz2MoFfwfrExcr5GruVn9JnexyOkErOVYpotcd6zcGRC5uD7kdOE1B4vROFoR2HqbFXo30ZPjWu1QUk4RknRsziIiV3Hf6EtK5QqWo2h2Pq5UgAs8KRy4AwwwKQSsABdb8HrVytoBeHUFcR5ccT/cN6mwsFNQX1xJugBXKgGvQmYfbICsR4KuH8/jSjW4QeGejpV9Eb8A5OHKv13JT/dFrAa2qDR56OaZAGfuizg3n0jEacOzu1JuIty5OW79axH6g1et/i7I1c6DFWD7J0EB3gi58mmaArwB8u6LnDtyhV2EK3KVbZobcqV9sAtytRcN3uR2Q67aOiUA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"

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _NavigationBar = __webpack_require__(379);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _routes = __webpack_require__(453);

var _routes2 = _interopRequireDefault(_routes);

var _SignIn = __webpack_require__(131);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _growler = __webpack_require__(377);

var _growler2 = _interopRequireDefault(_growler);

var _loader = __webpack_require__(378);

var _loader2 = _interopRequireDefault(_loader);

var _reactIntercom = __webpack_require__(121);

var _reactIntercom2 = _interopRequireDefault(_reactIntercom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    userRoles: store.userRoles
  };
};

var Router = function Router(props) {
  var loggedIn = props.currentUser.isAuthenticated;
  var _props$userRoles = props.userRoles,
      admin = _props$userRoles.admin,
      retailer = _props$userRoles.retailer,
      tailor = _props$userRoles.tailor;

  var storeName = props.currentStore.name;

  var user = {
    user_id: props.currentUser.user.id,
    email: props.currentUser.user.email,
    name: props.currentUser.user.email
  };

  if (loggedIn) {
    return _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_growler2.default, null),
        _react2.default.createElement(_loader2.default, null),
        _react2.default.createElement(_NavigationBar2.default, {
          retailer: retailer,
          loggedIn: loggedIn,
          admin: admin,
          tailor: tailor
        }),
        _react2.default.createElement(_routes2.default, {
          retailer: retailer,
          loggedIn: loggedIn,
          admin: admin,
          tailor: tailor
        }),
        _react2.default.createElement(
          'div',
          { className: 'add' },
          _react2.default.createElement(_reactIntercom2.default, _extends({ appID: 'j5szofcq' }, user))
        )
      )
    );
  } else {
    return _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_growler2.default, null),
        _react2.default.createElement(_SignIn2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'add' },
          _react2.default.createElement(_reactIntercom2.default, _extends({ appID: 'j5szofcq' }, user))
        )
      )
    );
  }
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Router);

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _OrderComplete = __webpack_require__(79);

var _OrderComplete2 = _interopRequireDefault(_OrderComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainPrint = function MainPrint(props) {
  return _react2.default.createElement(_OrderComplete2.default, { shippingType: 'OutgoingShipment' });
};

exports.default = MainPrint;

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _currentUserReducer = __webpack_require__(430);

var _currentUserReducer2 = _interopRequireDefault(_currentUserReducer);

var _currentStoreReducer = __webpack_require__(429);

var _currentStoreReducer2 = _interopRequireDefault(_currentStoreReducer);

var _storeOrdersReducer = __webpack_require__(439);

var _storeOrdersReducer2 = _interopRequireDefault(_storeOrdersReducer);

var _currentOrderReducer = __webpack_require__(428);

var _currentOrderReducer2 = _interopRequireDefault(_currentOrderReducer);

var _itemTypesReducer = __webpack_require__(433);

var _itemTypesReducer2 = _interopRequireDefault(_itemTypesReducer);

var _tailorListReducer = __webpack_require__(440);

var _tailorListReducer2 = _interopRequireDefault(_tailorListReducer);

var _companyListReducer = __webpack_require__(425);

var _companyListReducer2 = _interopRequireDefault(_companyListReducer);

var _measurementsReducer = __webpack_require__(435);

var _measurementsReducer2 = _interopRequireDefault(_measurementsReducer);

var _newOrdersReducer = __webpack_require__(436);

var _newOrdersReducer2 = _interopRequireDefault(_newOrdersReducer);

var _garmentsReducer = __webpack_require__(431);

var _garmentsReducer2 = _interopRequireDefault(_garmentsReducer);

var _alterationsReducer = __webpack_require__(422);

var _alterationsReducer2 = _interopRequireDefault(_alterationsReducer);

var _cartReducer = __webpack_require__(424);

var _cartReducer2 = _interopRequireDefault(_cartReducer);

var _confirmedNewOrderReducer = __webpack_require__(426);

var _confirmedNewOrderReducer2 = _interopRequireDefault(_confirmedNewOrderReducer);

var _searchResultsReducer = __webpack_require__(437);

var _searchResultsReducer2 = _interopRequireDefault(_searchResultsReducer);

var _growlerReducer = __webpack_require__(432);

var _growlerReducer2 = _interopRequireDefault(_growlerReducer);

var _archivedOrdersReducer = __webpack_require__(423);

var _archivedOrdersReducer2 = _interopRequireDefault(_archivedOrdersReducer);

var _loaderReducer = __webpack_require__(434);

var _loaderReducer2 = _interopRequireDefault(_loaderReducer);

var _userRoleReducer = __webpack_require__(441);

var _userRoleReducer2 = _interopRequireDefault(_userRoleReducer);

var _currentCustomerReducer = __webpack_require__(427);

var _currentCustomerReducer2 = _interopRequireDefault(_currentCustomerReducer);

var _storeListReducer = __webpack_require__(438);

var _storeListReducer2 = _interopRequireDefault(_storeListReducer);

var _cartCustomerReducer = __webpack_require__(393);

var _cartCustomerReducer2 = _interopRequireDefault(_cartCustomerReducer);

var _currentReportReducer = __webpack_require__(401);

var _currentReportReducer2 = _interopRequireDefault(_currentReportReducer);

var _editStoreFormReducer = __webpack_require__(407);

var _editStoreFormReducer2 = _interopRequireDefault(_editStoreFormReducer);

var _usersListReducer = __webpack_require__(415);

var _usersListReducer2 = _interopRequireDefault(_usersListReducer);

var _retailerListReducer = __webpack_require__(373);

var _retailerListReducer2 = _interopRequireDefault(_retailerListReducer);

var _editUserReducer = __webpack_require__(412);

var _editUserReducer2 = _interopRequireDefault(_editUserReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  currentUser: _currentUserReducer2.default,
  currentStore: _currentStoreReducer2.default,
  storeOrders: _storeOrdersReducer2.default,
  currentOrder: _currentOrderReducer2.default,
  itemTypes: _itemTypesReducer2.default,
  tailorList: _tailorListReducer2.default,
  retailerList: _retailerListReducer2.default,
  companyList: _companyListReducer2.default,
  measurements: _measurementsReducer2.default,
  newOrders: _newOrdersReducer2.default,
  garments: _garmentsReducer2.default,
  alterations: _alterationsReducer2.default,
  cart: _cartReducer2.default,
  confirmedNewOrder: _confirmedNewOrderReducer2.default,
  searchResults: _searchResultsReducer2.default,
  growl: _growlerReducer2.default,
  archivedOrders: _archivedOrdersReducer2.default,
  loader: _loaderReducer2.default,
  userRoles: _userRoleReducer2.default,
  currentCustomer: _currentCustomerReducer2.default,
  cartCustomer: _cartCustomerReducer2.default,
  currentReport: _currentReportReducer2.default,
  editStore: _editStoreFormReducer2.default,
  usersList: _usersListReducer2.default,
  storeList: _storeListReducer2.default,
  editUser: _editUserReducer2.default
});

exports.default = rootReducer;

/***/ }),
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSectionHeaderText = exports.getSectionHeaderText = function getSectionHeaderText(props) {
  var path = props.match.path;

  if (path === '/admin/reports') {
    return 'Air Tailor / Reports';
  } else if (path === '/admin/reports/orders') {
    return 'Air Tailor / Order Reports';
  } else if (path === '/stores/new') {
    return 'Stores / New';
  } else if (path === '/users/:user_id/edit') {
    return 'Edit User';
  }
};

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderCard = function OrderCard(props) {
  var icon = props.icon,
      count = props.count,
      type = props.type,
      call = props.call,
      styleClass = props.styleClass;

  var className = styleClass + ' order-card';
  var countKind = void 0,
      link = void 0;

  if (styleClass === 'current-orders' || styleClass === 'late-orders') {
    countKind = 'Orders';
    link = '/orders';
  }

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: link },
    _react2.default.createElement(
      'div',
      { className: className },
      icon,
      _react2.default.createElement(
        'p',
        { className: 'order-card-text order-card-count' },
        count
      ),
      _react2.default.createElement(
        'p',
        { className: 'order-card-text order-card-type' },
        type
      ),
      _react2.default.createElement(
        'p',
        { className: 'order-card-text' },
        countKind
      ),
      _react2.default.createElement(
        'p',
        { className: 'order-card-text order-card-call' },
        call
      )
    )
  );
};

exports.default = OrderCard;

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderCardIcon = function OrderCardIcon(props) {
  var url = props.url,
      alt = props.alt;

  return _react2.default.createElement('img', { className: 'order-card-icon', src: url, alt: alt });
};

exports.default = OrderCardIcon;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _actions = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(6);

var _search = __webpack_require__(339);

var _search2 = _interopRequireDefault(_search);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    searchResults: store.searchResults
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ searchOrders: _actions.searchOrders }, dispatch);
};

var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));

    _this.handleChange = function (e) {
      var value = e.target.value;

      _this.setState({ value: value });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.searchOrders(_this.state.value).then(function (res) {
        _this.setState({ redirect: true, value: '' });
      }).then(function (err) {
        return console.log('err', err);
      });
    };

    _this.resetRedirectState = function () {
      setTimeout(function () {
        _this.setState({ redirect: false });
      }, 1000);
    };

    _this.state = {
      value: '',
      redirect: false
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'renderRedirect',
    value: function renderRedirect(state) {
      if (state.redirect) {
        this.resetRedirectState();
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/search-results' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement('input', {
          value: this.state.value,
          onChange: this.handleChange,
          className: 'orders-search',
          placeholder: 'Search Orders',
          name: 'search',
          type: 'text'
        }),
        this.renderRedirect(this.state)
      );
    }
  }]);

  return SearchBar;
}(_react.Component);

SearchBar.propTypes = {
  searchResults: _propTypes2.default.array.isRequired, // mapStateToProps
  searchOrders: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchBar);

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentCustomer: store.currentCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({}, dispatch);
};

var NewOrderCustomerDetail = function (_Component) {
  _inherits(NewOrderCustomerDetail, _Component);

  function NewOrderCustomerDetail() {
    _classCallCheck(this, NewOrderCustomerDetail);

    return _possibleConstructorReturn(this, (NewOrderCustomerDetail.__proto__ || Object.getPrototypeOf(NewOrderCustomerDetail)).apply(this, arguments));
  }

  _createClass(NewOrderCustomerDetail, [{
    key: "render",
    value: function render() {
      var customer = this.props.currentCustomer;

      if (!(0, _isEmpty2.default)(customer)) {
        var id = customer.id,
            first_name = customer.first_name,
            last_name = customer.last_name,
            email = customer.email,
            phone = customer.phone,
            city = customer.city,
            state_province = customer.state_province,
            zip_code = customer.zip_code;


        var customerEditLink = "/customers/" + id + "/edit";

        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "h3",
            null,
            "Customer Details:"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Name: ",
            first_name,
            " ",
            last_name
          ),
          _react2.default.createElement(
            "p",
            null,
            "Email: ",
            email
          ),
          _react2.default.createElement(
            "p",
            null,
            "Phone: ",
            phone
          ),
          _react2.default.createElement(
            "p",
            null,
            "Address: ",
            city,
            ", ",
            state_province,
            " ",
            zip_code
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: customerEditLink },
            _react2.default.createElement(
              "button",
              { className: "button short-button" },
              " Edit Customer"
            )
          )
        );
      } else {
        return _react2.default.createElement(
          "div",
          null,
          "Select a Customer"
        );
      }
    }
  }]);

  return NewOrderCustomerDetail;
}(_react.Component);

NewOrderCustomerDetail.propTypes = {
  currentCustomer: _propTypes2.default.object.isRequired // mapStateToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewOrderCustomerDetail);

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _shippingFunctions = __webpack_require__(61);

var _WelcomeKitPrint = __webpack_require__(397);

var _WelcomeKitPrint2 = _interopRequireDefault(_WelcomeKitPrint);

var _SelectTailor = __webpack_require__(78);

var _SelectTailor2 = _interopRequireDefault(_SelectTailor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    tailors: store.tailorList,
    currentUser: store.currentUser,
    userRoles: store.userRoles,
    currentCustomer: store.currentCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updateOrder: _actions.updateOrder, setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, setGrowler: _actions.setGrowler }, dispatch);
};

var NewOrderDetail = function (_Component) {
  _inherits(NewOrderDetail, _Component);

  function NewOrderDetail(props) {
    _classCallCheck(this, NewOrderDetail);

    var _this = _possibleConstructorReturn(this, (NewOrderDetail.__proto__ || Object.getPrototypeOf(NewOrderDetail)).call(this));

    _this.updateState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    };

    _this.handleSubmit = function () {
      _this.props.setLoader();
      var obj = _this.state;
      obj.id = _this.props.order.id;
      _this.props.updateOrder({ order: obj }).then(function (res) {
        _this.refreshNewOrdersList({ order: {} });
        var message = 'Tailor Assigned';
        var kind = 'success';
        _this.props.setGrowler({ kind: kind, message: message });
        _this.props.removeLoader();
      }).catch(function (err) {
        return console.log('errr', err);
      });
    };

    _this.updateOrderNotes = function (notes, order) {
      order.requester_notes = notes;
      _this.props.updateOrder({ order: order }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.postShipment = function (orders, action, type) {
      _this.props.setLoader();
      (0, _shippingFunctions.fireShipmentCreate)(orders, action, type).then(function (res) {
        _this.setState({ loadingLabel: false });
        _this.props.removeLoader();
        _this.props.selectOrder(orders[0]);
      }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.makeShippingLabel = function (action) {
      return _this.postShipment([_this.props.order], action, 'mail_shipment');
    };

    _this.fulfillOrder = function () {
      var _this$props$order = _this.props.order,
          orderId = _this$props$order.id,
          storeId = _this$props$order.store_id;

      var data = { order: { id: orderId, store_id: storeId, fulfilled: true } };

      _this.props.setLoader();
      _this.setState({ loadingLabel: true });

      _this.props.updateOrder(data).then(function (res) {
        var _this$props = _this.props,
            order = _this$props.order,
            roles = _this$props.userRoles;

        var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);
        var shipmentType = (0, _shippingFunctions.shipmentTypes)(roles);

        if (shipmentType.has('mail_shipment')) {
          _this.makeShippingLabel(shipmentAction);
        }
      }).catch(function (err) {
        return console.log(err);
      });
    };

    _this.state = {
      loadingLabel: false,
      notes: '',
      provider_id: ''
    };
    return _this;
  }

  _createClass(NewOrderDetail, [{
    key: 'refreshNewOrdersList',
    value: function refreshNewOrdersList(props) {
      var _props = this.props,
          setLoader = _props.setLoader,
          getNewOrders = _props.getNewOrders,
          removeLoader = _props.removeLoader;

      setLoader();
      getNewOrders().then(function () {
        return removeLoader();
      }).catch(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refreshNewOrdersList(this.props);
    }
  }, {
    key: 'resetState',
    value: function resetState(props) {
      this.setState(props.order);
    }
  }, {
    key: 'updateOrderFromProps',
    value: function updateOrderFromProps() {
      var order = this.props.order;
      this.setState({ order: order });
    }
  }, {
    key: 'renderFulfillButton',
    value: function renderFulfillButton() {
      return this.renderButton('Fulfill This Order', { disabled: false }, this.fulfillOrder);
    }
  }, {
    key: 'renderButton',
    value: function renderButton(text, params) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return console.log('');
      };

      var className = params.className || 'pink-button';
      var clickArgs = params.clickArgs || undefined;
      var disabled = params.disabled;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return callback(clickArgs);
            },
            disabled: disabled,
            className: className
          },
          text
        )
      );
    }
  }, {
    key: 'renderPrintLabel',
    value: function renderPrintLabel() {
      var _this2 = this;

      var _props2 = this.props,
          order = _props2.order,
          roles = _props2.userRoles;

      var disabled = this.state.loadingLabel;
      var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);

      var onClick = void 0,
          printPrompt = void 0,
          clickArgs = void 0,
          shipmentDiv = void 0;
      switch ((0, _shippingFunctions.labelState)(roles, order, disabled)) {
        case 'needs_label':
          printPrompt = 'Create Label';
          onClick = this.makeShippingLabel;
          clickArgs = shipmentAction;
          break;
        case 'in_progress':
          printPrompt = 'Creating Label';
        case 'label_created':
          printPrompt = 'Print Label';
          onClick = function onClick() {
            _this2.refreshNewOrdersList();
            window.print();
          };
          // NOTE: we need to make sure that orderComplete gets the correct shipment.
          shipmentDiv = _react2.default.createElement(_WelcomeKitPrint2.default, null);
          break;
        default:
          break;
      }

      return _react2.default.createElement(
        'div',
        null,
        this.renderButton(printPrompt, { disabled: disabled, clickArgs: clickArgs }, onClick),
        shipmentDiv
      );
    }
  }, {
    key: 'welcomeKit',
    value: function welcomeKit(order) {
      if (!order.fulfilled) {
        return this.renderFulfillButton();
      } else {
        return this.renderPrintLabel();
      }
    }
  }, {
    key: 'updateNotes',
    value: function updateNotes(notes) {
      this.setState({ notes: notes });
    }
  }, {
    key: 'submitNotes',
    value: function submitNotes(event) {
      var _this3 = this;

      event.preventDefault();

      var data = {
        order: {
          requester_notes: this.state.notes,
          id: this.props.order.id,
          store_id: this.props.order.store_id
        }
      };

      var kind = 'success';
      var message = 'Notes Updated Successfully';
      this.props.updateOrder(data).then(function (res) {
        return _this3.props.setGrowler({ kind: kind, message: message });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'renderNotes',
    value: function renderNotes() {
      var _this4 = this;

      return _react2.default.createElement(
        'form',
        { className: 'notes-form', onSubmit: function onSubmit(e) {
            return _this4.submitNotes(e);
          } },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Order Notes:'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('textarea', {
            cols: 43,
            rows: 10,
            defaultValue: this.props.order['requester_notes'],
            onChange: function onChange(e) {
              return _this4.updateNotes(e.target.value);
            }
          })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('input', { className: 'short-button', type: 'submit', value: 'Submit' }),
        _react2.default.createElement('hr', null)
      );
    }
  }, {
    key: 'renderGarmentAlterations',
    value: function renderGarmentAlterations(garment) {
      return garment.alterations.map(function (alt, index) {
        return _react2.default.createElement(
          'p',
          { key: index, className: 'cart-alteration' },
          alt.name
        );
      });
    }
  }, {
    key: 'renderGarments',
    value: function renderGarments(garments) {
      var _this5 = this;

      return garments.map(function (garment, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'h3',
            null,
            garment.name
          ),
          _this5.renderGarmentAlterations(garment),
          _react2.default.createElement('hr', null)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          order = _props3.order,
          currentCustomer = _props3.currentCustomer;
      var id = order.id,
          weight = order.weight,
          created_at = order.created_at,
          total = order.total,
          provider_notes = order.provider_notes,
          items = order.items;
      var provider_id = this.state.provider_id;


      var orderDate = (0, _moment2.default)(created_at).format('MM-DD-YYYY');

      var selectTailor = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Alterations:'
        ),
        this.renderGarments(order.items),
        _react2.default.createElement(_SelectTailor2.default, { onChange: this.updateState, tailorId: provider_id }),
        _react2.default.createElement(
          'button',
          { className: 'button short-button', onClick: this.handleSubmit },
          'Change Tailor'
        )
      );

      var display = order.type === 'TailorOrder' ? selectTailor : this.welcomeKit(order);

      return _react2.default.createElement(
        'div',
        { className: 'order-details' },
        _react2.default.createElement(
          'h3',
          null,
          'Order Details:'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Order ID: ',
          id
        ),
        _react2.default.createElement(
          'p',
          null,
          'Order Weight: ',
          weight
        ),
        _react2.default.createElement(
          'p',
          null,
          'Order Date: ',
          orderDate
        ),
        _react2.default.createElement(
          'p',
          null,
          'Total Charges: $',
          total
        ),
        _react2.default.createElement(
          'p',
          null,
          'Order Notes:'
        ),
        this.renderNotes(),
        display
      );
    }
  }]);

  return NewOrderDetail;
}(_react.Component);

NewOrderDetail.propTypes = {
  tailors: _propTypes2.default.array.isRequired, // mapStateToProps
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  updateOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  order: _propTypes2.default.object.isRequired // parentComponent
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewOrderDetail);

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(8);

var _redux = __webpack_require__(7);

var _newOrderLists = __webpack_require__(455);

var _NewOrderDetail = __webpack_require__(368);

var _NewOrderDetail2 = _interopRequireDefault(_NewOrderDetail);

var _NewOrderCustomerDetail = __webpack_require__(367);

var _NewOrderCustomerDetail2 = _interopRequireDefault(_NewOrderCustomerDetail);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    newOrders: store.newOrders,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles,
    currentCustomer: store.currentCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getNewOrders: _actions.getNewOrders, getCurrentOrder: _actions.getCurrentOrder, setCurrentOrder: _actions.setCurrentOrder, getCurrentCustomer: _actions.getCurrentCustomer }, dispatch);
};

var NewOrders = function (_Component) {
  _inherits(NewOrders, _Component);

  function NewOrders() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewOrders);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewOrders.__proto__ || Object.getPrototypeOf(NewOrders)).call.apply(_ref, [this].concat(args))), _this), _this.selectOrderDetail = function (order) {
      _this.props.getCurrentOrder(order.provider_id, order.id).then(function (res) {
        _this.props.getCurrentCustomer(res.customer_id);
      }).catch(function (err) {
        return console.log('err', err);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewOrders, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setCurrentOrder({});
      this.props.getNewOrders().catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'renderNewOrders',
    value: function renderNewOrders(orders) {
      return _react2.default.createElement(_newOrderLists.RenderNewOrderList, {
        orders: orders,
        className: 'new-orders',
        selectOrder: this.selectOrderDetail
      });
    }
  }, {
    key: 'renderOrderDetails',
    value: function renderOrderDetails() {
      var _props = this.props,
          customerId = _props.currentCustomer.id,
          orderCustId = _props.currentOrder.customer_id;


      if (customerId === orderCustId) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'new-order detail-container' },
            _react2.default.createElement(_NewOrderDetail2.default, {
              order: this.props.currentOrder,
              selectOrder: this.selectOrderDetail,
              getNewOrders: this.props.getNewOrders
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'new-order customer-container' },
            _react2.default.createElement(_NewOrderCustomerDetail2.default, null)
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'new-order-page' },
        _react2.default.createElement(_SectionHeader2.default, { text: 'Home / ' + this.props.currentStore.name }),
        _react2.default.createElement(
          'div',
          { className: 'new-order-container' },
          _react2.default.createElement(
            'div',
            { className: 'new-order list-container' },
            this.renderNewOrders(this.props.newOrders)
          ),
          _react2.default.createElement(
            'div',
            { className: 'detail-and-customer' },
            this.renderOrderDetails()
          )
        )
      );
    }
  }]);

  return NewOrders;
}(_react.Component);

NewOrders.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  newOrders: _propTypes2.default.object.isRequired, // mapStateToProps
  currentOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  getNewOrders: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentCustomer: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewOrders);

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(6);

var _actions = __webpack_require__(8);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var CompaniesNew = function (_Component) {
  _inherits(CompaniesNew, _Component);

  function CompaniesNew(props) {
    _classCallCheck(this, CompaniesNew);

    var _this = _possibleConstructorReturn(this, (CompaniesNew.__proto__ || Object.getPrototypeOf(CompaniesNew)).call(this));

    _this.updateState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.setLoader();
      var company = _this.state;
      (0, _actions.createCompany)({ company: company }).then(function (res) {
        _this.props.removeLoader();

        var errors = res.data.body.errors;
        if ((0, _isEmpty2.default)(errors)) {
          _this.setState({ name: '' });
          _this.props.setGrowler({
            kind: 'success',
            message: 'Company created!'
          });
        } else {
          _this.props.setGrowler({
            kind: 'warning',
            message: errors.message
          });
        }
      }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.state = {
      name: ''
    };
    return _this;
  }

  _createClass(CompaniesNew, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          name = _state.name,
          hq_store_id = _state.hq_store_id;

      var headerText = 'Companies / New';
      var submit = function submit(e) {
        return _this2.handleSubmit(e);
      };
      var setField = this.updateState;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText, includeLink: false }),
        _react2.default.createElement(
          'form',
          { onSubmit: submit },
          _react2.default.createElement(_FormField2.default, {
            value: name,
            fieldName: 'name',
            title: 'Name: ',
            onChange: setField
          }),
          _react2.default.createElement('input', {
            type: 'submit',
            className: 'standard-button',
            value: 'Create New Company'
          })
        )
      );
    }
  }]);

  return CompaniesNew;
}(_react.Component);

CompaniesNew.propTypes = {
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CompaniesNew);

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _WithSectionHeader = __webpack_require__(47);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Dashboard'
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Lists'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/reports' },
            'Reports'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/users/list' },
            'User List'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/tailors' },
            'Tailor List'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/retailers' },
            'Retailer List'
          )
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Make a New Thing'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/companies/new' },
            'New Company'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/stores/new' },
            'New Store'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/users/new' },
            'New User'
          )
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = (0, _WithSectionHeader2.default)(Dashboard);

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTokens = exports.validateToken = exports.removeLoader = exports.setLoader = undefined;
exports.getRetailerList = getRetailerList;

var _axios = __webpack_require__(29);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(132);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(8);

var setLoader = _require.setLoader,
    removeLoader = _require.removeLoader,
    validateToken = _require.validateToken,
    setTokens = _require.setTokens;
exports.setLoader = setLoader;
exports.removeLoader = removeLoader;
exports.validateToken = validateToken;
exports.setTokens = setTokens;
function getRetailerList() {
  var url = _constants.expressApi + '/stores/retailers';
  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setRetailerList(res.data.body));
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function setRetailerList(retailers) {
  return {
    type: _constants.SET_RETAILER_LIST,
    retailers: retailers
  };
}

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(132);

var initialState = [];

var retailerListReducer = function retailerListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_RETAILER_LIST:
      return action.retailers;
    default:
      return state;
  }
};

exports.default = retailerListReducer;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouterDom = __webpack_require__(6);

var _actions = __webpack_require__(372);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    retailerList: store.retailerList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, getRetailerList: _actions.getRetailerList }, dispatch);
};

var RetailerIndex = function (_Component) {
  _inherits(RetailerIndex, _Component);

  function RetailerIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RetailerIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RetailerIndex.__proto__ || Object.getPrototypeOf(RetailerIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderRetailerRow = function (retailer) {
      var id = retailer.id,
          name = retailer.name,
          active = retailer.active_orders_count;


      var truncatedRetailerName = _this.truncatedRetailerName(name);
      var route = '/stores/' + id + '/orders';
      var editRoute = '/stores/' + id + '/edit';

      return _react2.default.createElement(
        'div',
        { key: id },
        _react2.default.createElement(
          'div',
          { className: 'tailor-data-row' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: route, className: 'tailor-link' },
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              truncatedRetailerName
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              active
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: editRoute },
                'Edit'
              )
            )
          )
        ),
        _react2.default.createElement('hr', { className: 'tailor-break-row' })
      );
    }, _this.renderRetailerRows = function () {
      var retailerList = _this.props.retailerList;

      if (!(0, _isEmpty2.default)(retailerList)) {
        return _react2.default.createElement(
          'div',
          { className: 'tailor-container' },
          retailerList.map(function (tailor) {
            return _this.renderRetailerRow(tailor);
          })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Retailers...'
          )
        );
      }
    }, _this.renderRetailerHeaders = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'tailor-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'tailor-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Retailer'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Assigned Orders'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Edit'
            )
          ),
          _react2.default.createElement('hr', { className: 'tailor-header-break-row' })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RetailerIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          setLoader = _props.setLoader,
          removeLoader = _props.removeLoader,
          getRetailerList = _props.getRetailerList;

      setLoader();
      getRetailerList().then(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'truncatedRetailerName',
    value: function truncatedRetailerName(name) {
      // const length = 14;
      // return name.length > 20 ? `${name.substring(0, 11)}...` : name;
      return name;
    }
  }, {
    key: 'render',
    value: function render() {
      var retailerOrderHeaders = this.renderRetailerHeaders;
      var retailerOrderRows = this.renderRetailerRows;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Manage Retailers' }),
        _react2.default.createElement(
          'div',
          { className: 'tailors' },
          retailerOrderHeaders(),
          retailerOrderRows()
        )
      );
    }
  }]);

  return RetailerIndex;
}(_react.Component);

RetailerIndex.propTypes = {
  retailerList: _propTypes2.default.array.isRequired, // mapStateToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getRetailerList: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RetailerIndex);

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouterDom = __webpack_require__(6);

var _actions = __webpack_require__(8);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    tailorList: store.tailorList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, getTailorList: _actions.getTailorList }, dispatch);
};

var TailorsIndex = function (_Component) {
  _inherits(TailorsIndex, _Component);

  function TailorsIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TailorsIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TailorsIndex.__proto__ || Object.getPrototypeOf(TailorsIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderTailorRow = function (tailor) {
      var id = tailor.id,
          name = tailor.name,
          assigned = tailor.active_orders_count,
          arrived = tailor.arrived_orders_count,
          late = tailor.late_orders_count;


      var truncatedTailorName = _this.truncatedTailorName(name);
      var route = '/stores/' + id + '/orders';

      return _react2.default.createElement(
        'div',
        { key: id },
        _react2.default.createElement(
          'div',
          { className: 'tailor-data-row' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: route, className: 'tailor-link' },
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              truncatedTailorName
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              assigned
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell' },
              arrived
            ),
            _react2.default.createElement(
              'div',
              { className: 'tailor-data-cell', style: { color: 'red' } },
              late
            )
          )
        ),
        _react2.default.createElement('hr', { className: 'tailor-break-row' })
      );
    }, _this.renderTailorRows = function () {
      var tailorList = _this.props.tailorList;

      if (!(0, _isEmpty2.default)(tailorList)) {
        return _react2.default.createElement(
          'div',
          { className: 'tailor-container' },
          tailorList.map(function (tailor) {
            return _this.renderTailorRow(tailor);
          })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Tailors...'
          )
        );
      }
    }, _this.renderTailorHeaders = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'tailor-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'tailor-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Tailor'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Assigned'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'In Stock'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'tailor-header-cell' },
              'Late'
            )
          ),
          _react2.default.createElement('hr', { className: 'tailor-header-break-row' })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TailorsIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          setLoader = _props.setLoader,
          removeLoader = _props.removeLoader,
          getTailorList = _props.getTailorList;

      setLoader();
      getTailorList().then(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'truncatedTailorName',
    value: function truncatedTailorName(name) {
      var length = 14;
      return name.length > 14 ? name.substring(0, 11) + '...' : name;
    }
  }, {
    key: 'render',
    value: function render() {
      var tailorOrderHeaders = this.renderTailorHeaders;
      var tailorOrderRows = this.renderTailorRows;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Manage Tailors' }),
        _react2.default.createElement(
          'div',
          { className: 'tailors' },
          tailorOrderHeaders(),
          tailorOrderRows()
        )
      );
    }
  }]);

  return TailorsIndex;
}(_react.Component);

TailorsIndex.propTypes = {
  tailorList: _propTypes2.default.array.isRequired, // mapStateToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getTailorList: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TailorsIndex);

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _validations = __webpack_require__(30);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentOrder: store.currentOrder,
    currentCustomer: store.currentCustomer,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setGrowler: _actions.setGrowler, getCurrentOrder: _actions.getCurrentOrder, getCurrentCustomer: _actions.getCurrentCustomer, updateCurrentCustomer: _actions.updateCurrentCustomer }, dispatch);
};

var CustomerEdit = function (_Component) {
  _inherits(CustomerEdit, _Component);

  function CustomerEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomerEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomerEdit.__proto__ || Object.getPrototypeOf(CustomerEdit)).call.apply(_ref, [this].concat(args))), _this), _this.refreshCurrentCustomer = function (customer) {
      _this.setState(customer);
    }, _this.updateState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomerEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var customerId = this.props.match.params.customer_id;
      this.props.getCurrentCustomer(customerId);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var _props = this.props,
          currentStore = _props.currentStore,
          currentOrder = _props.currentOrder,
          getCurrentOrder = _props.getCurrentOrder,
          setGrowler = _props.setGrowler,
          customer = _props.currentCustomer,
          email = _props.currentCustomer.email;


      if ((0, _validations.ValidateEmail)(email)) {
        (0, _actions.updateCustomer)(customer).then(function (res) {
          var kind = void 0,
              message = void 0;
          if (res.data.body.errors) {
            kind = 'warning';
            message = res.data.body.errors[0];
          } else {
            kind = 'success';
            message = 'Customer Updated';
            (0, _actions.getCurrentCustomer)(customer.id);
            getCurrentOrder(currentStore.id, currentOrder.id);
          }
          setGrowler({ kind: kind, message: message });
        }).catch(function (err) {});
      } else {
        var kind = 'warning';
        var message = 'Email must be valid';
        this.props.setGrowler({ kind: kind, message: message });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentOrderId = this.props.currentOrder.id;

      var backLink = '/orders/' + currentOrderId;
      var _props2 = this.props,
          _props2$currentCustom = _props2.currentCustomer,
          email = _props2$currentCustom.email,
          first_name = _props2$currentCustom.first_name,
          last_name = _props2$currentCustom.last_name,
          phone = _props2$currentCustom.phone,
          street = _props2$currentCustom.street,
          unit = _props2$currentCustom.unit,
          city = _props2$currentCustom.city,
          state_province = _props2$currentCustom.state_province,
          zip_code = _props2$currentCustom.zip_code,
          updateCurrentCustomer = _props2.updateCurrentCustomer;


      console.log('customer edit');
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: backLink },
          'Back'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.handleSubmit(e);
            } },
          _react2.default.createElement(_FormField2.default, {
            value: email,
            fieldName: 'email',
            title: 'Email',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: first_name,
            fieldName: 'first_name',
            title: 'First Name',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: last_name,
            fieldName: 'last_name',
            title: 'Last Name',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: phone,
            fieldName: 'phone',
            title: 'Phone',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: street,
            fieldName: 'street',
            title: 'Street',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: unit,
            fieldName: 'unit',
            title: 'Unit',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: city,
            fieldName: 'city',
            title: 'City',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: state_province,
            fieldName: 'state_province',
            title: 'State/Province',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: zip_code,
            fieldName: 'zip_code',
            title: 'Zip Code',
            onChange: updateCurrentCustomer
          }),
          _react2.default.createElement('input', { className: 'short-button ', type: 'submit', value: 'Update' })
        )
      );
    }
  }]);

  return CustomerEdit;
}(_react.Component);

CustomerEdit.propTypes = {
  currentOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  currentCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateCurrentCustomer: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomerEdit);

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(7);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(8);

var _lodash = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Growler = function (_Component) {
  _inherits(Growler, _Component);

  function Growler() {
    _classCallCheck(this, Growler);

    return _possibleConstructorReturn(this, (Growler.__proto__ || Object.getPrototypeOf(Growler)).apply(this, arguments));
  }

  _createClass(Growler, [{
    key: 'setTimer',
    value: function setTimer() {
      var _this2 = this;

      setTimeout(function () {
        _this2.props.removeGrowler();
      }, 4000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!(0, _lodash.isEmpty)(this.props.growl)) {
        this.setTimer();
        var _props$growl = this.props.growl,
            kind = _props$growl.kind,
            message = _props$growl.message;

        var titleClass = 'growl-title ' + kind + '-growl';
        var messageClass = 'growl-text ' + kind + '-growl';
        return _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this3.props.removeGrowler();
            }, className: 'growl' },
          _react2.default.createElement(
            'div',
            { className: 'growl-header' },
            _react2.default.createElement(
              'h4',
              { className: titleClass },
              kind
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'growl-body' },
            _react2.default.createElement(
              'h3',
              { className: messageClass },
              message
            )
          )
        );
      } else {
        return _react2.default.createElement('div', { className: 'empty-div' });
      }
    }
  }]);

  return Growler;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    growl: store.growl
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ removeGrowler: _actions.removeGrowler }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Growler);

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _lodash = __webpack_require__(38);

__webpack_require__(707);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(props) {
  if (!(0, _lodash.isEmpty)(props.loader)) {
    return _react2.default.createElement('div', { className: 'loader' });
  }
  return _react2.default.createElement('div', { className: 'empty-div' });
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    loader: store.loader
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Loader);

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _NavigationLinks = __webpack_require__(381);

var _NavigationLinks2 = _interopRequireDefault(_NavigationLinks);

var _LogoMessage = __webpack_require__(130);

var _LogoMessage2 = _interopRequireDefault(_LogoMessage);

var _hamburger = __webpack_require__(714);

var _hamburger2 = _interopRequireDefault(_hamburger);

var _images = __webpack_require__(48);

var _actions = __webpack_require__(8);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ signOutCurrentUser: _actions.signOutCurrentUser }, dispatch);
};

var NavigationBar = function (_Component) {
  _inherits(NavigationBar, _Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this));

    _this.handleSignOut = function () {
      _this.props.signOutCurrentUser().then(function (res) {
        console.log('signed out');
      }).catch(function (err) {
        console.log('oops something went wrong');
      });
    };

    _this.handleResize = function () {
      var state = _this.getNavActive(window);
      _this.setState({ active: state });
    };

    _this.toggleActiveState = function (boolean) {
      // If the Nav Bar should NOT be open by default (based on the window size)
      if (!_this.getNavActive(window)) {
        var state = !boolean;
        _this.setState({ active: state });
      }
    };

    _this.state = {
      active: _this.getNavActive(window)
    };
    return _this;
  }

  _createClass(NavigationBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'getNavActive',
    value: function getNavActive(window) {
      return window.innerWidth > 980;
    }
  }, {
    key: 'navBar',
    value: function navBar() {
      var _props = this.props,
          loggedIn = _props.loggedIn,
          admin = _props.admin,
          retailer = _props.retailer;

      var logoText = retailer ? 'STORE PORTAL' : 'SHOP PORTAL';
      var active = this.state.active;

      return _react2.default.createElement(
        'nav',
        { className: 'navbar' },
        _react2.default.createElement(_LogoMessage2.default, { className: 'navbar-logo', text: logoText }),
        _react2.default.createElement(
          'div',
          { className: 'navbar-links-container' },
          _react2.default.createElement(_NavigationLinks2.default, {
            loggedIn: loggedIn,
            retailer: retailer,
            admin: admin,
            toggleNavState: this.toggleActiveState,
            navState: active,
            handleSignOut: this.handleSignOut
          })
        )
      );
    }
  }, {
    key: 'hamburger',
    value: function hamburger() {
      var _this2 = this;

      return _react2.default.createElement('img', {
        className: 'hamburger',
        src: _hamburger2.default,
        alt: 'menu',
        onClick: function onClick() {
          return _this2.toggleActiveState(_this2.state.active);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var active = this.state.active;

      if (active) {
        return this.navBar();
      } else {
        return this.hamburger();
      }
    }
  }]);

  return NavigationBar;
}(_react.Component);

NavigationBar.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  signOutCurrentUser: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavigationBar);

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationLink = function NavigationLink(props) {
  var route = props.route,
      cssClass = props.cssClass,
      text = props.text,
      image = props.image;

  var className = 'navbar-links-li ' + cssClass;
  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: className, to: route },
      _react2.default.createElement('img', { src: image, alt: text }),
      text
    )
  );
};

exports.default = NavigationLink;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(6);

var _NavigationLink = __webpack_require__(380);

var _NavigationLink2 = _interopRequireDefault(_NavigationLink);

var _SearchBar = __webpack_require__(366);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _images = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationLinks = function (_Component) {
  _inherits(NavigationLinks, _Component);

  function NavigationLinks() {
    _classCallCheck(this, NavigationLinks);

    return _possibleConstructorReturn(this, (NavigationLinks.__proto__ || Object.getPrototypeOf(NavigationLinks)).apply(this, arguments));
  }

  _createClass(NavigationLinks, [{
    key: 'adminNavbar',
    value: function adminNavbar() {
      var _this2 = this;

      var _props = this.props,
          toggleNavState = _props.toggleNavState,
          navState = _props.navState,
          store = _props.store;

      var editStoreRoute = '/stores/' + store.id + '/edit';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'ul',
          {
            className: 'navbar-links-ul',
            onClick: function onClick() {
              return toggleNavState(navState);
            }
          },
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'home-link',
            route: '/',
            text: 'Home',
            image: _images.homeImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'orders-link',
            route: '/admin/orders/new',
            text: 'Orders',
            image: _images.ordersImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'orders-link',
            route: '/admin/orders/archived',
            text: 'Archive',
            image: _images.archivedImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'edit-store-link',
            route: editStoreRoute,
            text: 'Edit Store',
            image: _images.editStoreImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'new-order-link',
            route: '/admin/dashboard',
            text: 'Dashboard',
            image: _images.tailorsImage
          }),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'navbar-links-li close-menu-link',
                onClick: function onClick() {
                  return toggleNavState(navState);
                }
              },
              _react2.default.createElement('img', { src: _images.logoutImage, alt: 'close menu' }),
              ' Close Menu'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'signout-link' },
            _react2.default.createElement(
              'a',
              {
                className: 'navbar-links-li',
                onClick: function onClick() {
                  return _this2.props.handleSignOut();
                }
              },
              _react2.default.createElement('img', { src: _images.logoutImage, alt: 'logout' }),
              ' LOGOUT'
            )
          )
        )
      );
    }
  }, {
    key: 'tailorNavbar',
    value: function tailorNavbar() {
      var _this3 = this;

      var _props2 = this.props,
          toggleNavState = _props2.toggleNavState,
          navState = _props2.navState,
          store = _props2.store;

      var editStoreRoute = '/stores/' + store.id + '/edit';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'ul',
          {
            className: 'navbar-links-ul',
            onClick: function onClick() {
              return toggleNavState(navState);
            }
          },
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'home-link',
            route: '/',
            text: 'Home',
            image: _images.homeImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'orders-link',
            route: '/orders',
            text: 'Orders',
            image: _images.ordersImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'orders-link',
            route: '/stores/' + store.id + '/orders/archived',
            text: 'Archive',
            image: _images.archivedImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'edit-store-link',
            route: editStoreRoute,
            text: 'Account',
            image: _images.editStoreImage
          }),
          _react2.default.createElement(
            'li',
            { className: 'signout-link' },
            _react2.default.createElement(
              'a',
              {
                className: 'navbar-links-li',
                onClick: function onClick() {
                  return _this3.props.handleSignOut();
                }
              },
              _react2.default.createElement('img', { src: _images.logoutImage, alt: 'logout' }),
              ' LOGOUT'
            )
          )
        ),
        this.closeMenu(this.props)
      );
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu(props) {
      var toggleNavState = props.toggleNavState,
          navState = props.navState;

      if (window.innerWidth < 981) {
        return _react2.default.createElement(
          'div',
          { style: { marginTop: '50%' } },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'navbar-links-li close-menu-link',
                onClick: function onClick() {
                  return toggleNavState(navState);
                }
              },
              _react2.default.createElement(
                'p',
                null,
                'Close Menu'
              ),
              _react2.default.createElement('div', { className: 'triangle' })
            )
          )
        );
      }
    }
  }, {
    key: 'retailerNavbar',
    value: function retailerNavbar() {
      var _this4 = this;

      var _props3 = this.props,
          currentUser = _props3.currentUser,
          toggleNavState = _props3.toggleNavState,
          navState = _props3.navState,
          store = _props3.store;

      var editStoreRoute = '/stores/' + store.id + '/edit';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'ul',
          {
            className: 'navbar-links-ul',
            onClick: function onClick() {
              return toggleNavState(navState);
            }
          },
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'home-link',
            route: '/',
            text: 'Home',
            image: _images.homeImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'orders-link',
            route: '/orders',
            text: 'Orders',
            image: _images.ordersImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'orders-link',
            route: '/stores/' + store.id + '/orders/archived',
            text: 'Archive',
            image: _images.archivedImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'edit-store-link',
            route: editStoreRoute,
            text: 'Account',
            image: _images.editStoreImage
          }),
          _react2.default.createElement(
            'li',
            { className: 'signout-link' },
            _react2.default.createElement(
              'a',
              {
                className: 'navbar-links-li',
                onClick: function onClick() {
                  return _this4.props.handleSignOut();
                }
              },
              _react2.default.createElement('img', { src: _images.logoutImage, alt: 'logout' }),
              ' LOGOUT'
            )
          )
        ),
        this.closeMenu(this.props)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      if (this.props.admin) {
        return this.adminNavbar();
      } else if (this.props.retailer) {
        return this.retailerNavbar();
      } else if (this.props.loggedIn) {
        return this.tailorNavbar();
      } else {
        return _react2.default.createElement(
          'ul',
          { className: 'navbar-links-ul' },
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'sign-in-link',
            route: '/sign_in',
            text: 'Sign In'
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'sign-up-link',
            route: '/sign_up',
            text: 'Sign Up'
          }),
          _react2.default.createElement(
            'li',
            { className: 'signout-link' },
            _react2.default.createElement(
              'a',
              {
                className: 'navbar-links-li',
                onClick: function onClick() {
                  return _this5.props.handleSignOut();
                }
              },
              _react2.default.createElement('img', { src: _images.logoutImage, alt: 'logout' }),
              ' LOGOUT'
            )
          )
        );
      }
    }
  }]);

  return NavigationLinks;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    store: store.currentStore
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NavigationLinks);

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormSelect = __webpack_require__(46);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

var _actions = __webpack_require__(8);

var _SelectTailor = __webpack_require__(78);

var _SelectTailor2 = _interopRequireDefault(_SelectTailor);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _Checkbox = __webpack_require__(76);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    order: store.currentOrder,
    store: store.currentStore,
    tailors: store.tailorList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getTailorList: _actions.getTailorList,
    getCurrentOrder: _actions.getCurrentOrder,
    updateOrder: _actions.updateOrder,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var OrdersEdit = function (_Component) {
  _inherits(OrdersEdit, _Component);

  function OrdersEdit(props) {
    _classCallCheck(this, OrdersEdit);

    var _this = _possibleConstructorReturn(this, (OrdersEdit.__proto__ || Object.getPrototypeOf(OrdersEdit)).call(this));

    _this.updateState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    };

    _this.state = props.order;
    return _this;
  }

  _createClass(OrdersEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var order = this.props.order;

      if ((0, _isEmpty2.default)(order)) {
        var _props = this.props,
            orderId = _props.match.params.order_id,
            storeId = _props.store.id;


        this.props.setLoader();
        this.props.getCurrentOrder(storeId, orderId).then(function () {
          _this2.props.removeLoader();

          var order = _this2.props.order;

          _this2.setState(order);
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      this.props.updateOrder({ order: this.state }).then(function (res) {
        _this3.props.setGrowler({ kind: 'success', message: 'Order updated!' });
      }).catch(function (err) {
        return console.log('errr', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var order = this.state;
      var submit = function submit(e) {
        return _this4.handleSubmit(e);
      };
      var updateState = this.updateState;

      var headerText = 'Orders / Edit';
      if ((0, _isEmpty2.default)(order)) {
        return _react2.default.createElement(_SectionHeader2.default, { text: headerText });
      } else {
        var id = order.id,
            fulfilled = order.fulfilled,
            arrived = order.arrived,
            _order$customer = order.customer,
            firstName = _order$customer.first_name,
            lastName = _order$customer.last_name,
            total = order.total,
            weight = order.weight,
            tailorId = order.provider_id;


        headerText = 'Orders / Edit / ' + id;
        var backLink = '/orders/' + this.state.id;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: backLink },
            'Back'
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: submit },
            _react2.default.createElement(_FormField2.default, {
              value: firstName,
              fieldName: 'first_name',
              title: 'First Name:',
              onChange: function onChange() {}
            }),
            _react2.default.createElement(_FormField2.default, {
              value: lastName,
              fieldName: 'last_name',
              title: 'Last Name:',
              onChange: function onChange() {}
            }),
            _react2.default.createElement(_Checkbox2.default, {
              checked: arrived,
              type: 'checkbox',
              text: 'Arrived?',
              name: 'arrived',
              fieldName: 'arrived',
              onChange: updateState
            }),
            _react2.default.createElement(_Checkbox2.default, {
              checked: fulfilled,
              type: 'checkbox',
              text: 'Fulfilled?',
              name: 'fulfilled',
              fieldName: 'fulfilled',
              onChange: updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: total,
              fieldName: 'total',
              title: 'Total: $',
              onChange: updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: weight,
              fieldName: 'weight',
              title: 'Weight (grams):',
              onChange: updateState
            }),
            _react2.default.createElement(_SelectTailor2.default, { tailorId: tailorId, onChange: this.updateState }),
            _react2.default.createElement(_FormField2.default, {
              value: total,
              fieldName: 'total',
              title: 'Total:',
              onChange: updateState
            }),
            _react2.default.createElement('input', { type: 'submit', className: 'short-button', value: 'Update' })
          )
        );
      }
    }
  }]);

  return OrdersEdit;
}(_react.Component);

OrdersEdit.propTypes = {
  order: _propTypes2.default.object.isRequired, // mapStateToProps
  tailors: _propTypes2.default.array.isRequired, // mapStateToProps
  getTailorList: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrdersEdit);

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _validations = __webpack_require__(30);

var _utils = __webpack_require__(134);

var _images = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ removeGarmentFromCart: _actions.removeGarmentFromCart, updateCartNotes: _actions.updateCartNotes, setCartCustomer: _actions.setCartCustomer, setGrowler: _actions.setGrowler }, dispatch);
};

var Cart = function (_Component) {
  _inherits(Cart, _Component);

  function Cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.checkForValidCustomer = function () {
      var _this$props = _this.props,
          cartCustomer = _this$props.cartCustomer,
          renderCheckout = _this$props.renderCheckout,
          setCartCustomer = _this$props.setCartCustomer,
          renderOrderDetails = _this$props.renderOrderDetails,
          setGrowler = _this$props.setGrowler;


      (0, _actions.createOrValidateCustomer)(cartCustomer).then(function (res) {
        if (res.data.body && res.data.body.errors) {
          var kind = 'warning';
          var message = res.data.body.errors[0];
          setGrowler({ kind: kind, message: message });
          renderOrderDetails();
        } else {
          setCartCustomer(res.data.body);
          renderCheckout();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cart, [{
    key: 'renderGarmentAlterations',
    value: function renderGarmentAlterations(garment) {
      // this garment is being injected from the menu, not the Cart
      //console.log('cart js 10', garment);
      if (garment.alterations.length > 0) {
        return garment.alterations.map(function (alt, index) {
          return _react2.default.createElement(
            'p',
            { key: index, className: 'cart-alteration' },
            alt.title,
            ' - $',
            alt.price.toFixed(2)
          );
        });
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }, {
    key: 'renderCartItems',
    value: function renderCartItems(props) {
      var _this2 = this;

      var garments = props.cart.garments;

      var garmentList = garments;
      var removeGarmentFromCart = props.removeGarmentFromCart,
          renderSelectAlterations = props.renderSelectAlterations;

      if (garmentList.length > 0) {
        return garmentList.map(function (garment, index) {
          return _react2.default.createElement(
            'div',
            { key: index, style: { marginLeft: '15px' } },
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'span',
                {
                  className: 'cart-item cart-item-title',
                  onClick: function onClick() {
                    renderSelectAlterations(index, garment, garment.alterations);
                  }
                },
                garment.title
              ),
              _react2.default.createElement(
                'span',
                _defineProperty({
                  className: 'cart-item',
                  onClick: function onClick() {
                    return removeGarmentFromCart(index);
                  }
                }, 'className', 'remove-from-cart-button'),
                'X'
              )
            ),
            _react2.default.createElement(
              'span',
              {
                className: 'cart-item',
                onClick: function onClick() {
                  renderSelectAlterations(index, garment, garment.alterations);
                }
              },
              _this2.renderGarmentAlterations(garment)
            ),
            _react2.default.createElement('hr', { className: 'alteration-hr' })
          );
        });
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }, {
    key: 'readyToCheckout',
    value: function readyToCheckout() {
      var _props = this.props,
          cartCustomer = _props.cartCustomer,
          shipToStore = _props.cart.shipToStore;
      var id = cartCustomer.id,
          first_name = cartCustomer.first_name,
          last_name = cartCustomer.last_name,
          phone = cartCustomer.phone,
          email = cartCustomer.email,
          street = cartCustomer.street,
          unit = cartCustomer.unit,
          city = cartCustomer.city,
          state_province = cartCustomer.state_province,
          zip_code = cartCustomer.zip_code;


      if (first_name && last_name && (0, _validations.ValidatePhone)(phone) && (0, _validations.ValidateEmail)(email) && (
      // Condition Below:
      // Tailor will ship to store, OR customer has provided address
      shipToStore || street && city && state_province && (0, _validations.ValidateZip)(zip_code))) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'createNextButton',
    value: function createNextButton(_onClick, text) {
      var disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return _react2.default.createElement('input', {
        onClick: function onClick() {
          return _onClick();
        },
        disabled: disabled,
        className: 'short-button',
        type: 'submit',
        value: text
      });
    }
  }, {
    key: 'renderNextButton',
    value: function renderNextButton(props) {
      var _props2 = this.props,
          garments = _props2.cart.garments,
          renderOrderDetails = _props2.renderOrderDetails,
          renderStageOne = _props2.renderStageOne,
          stage = _props2.stage;


      if (garments.length > 0) {
        if (stage === 4) {
          return _react2.default.createElement('div', null);
        } else if (this.readyToCheckout() && stage !== 3) {
          return _react2.default.createElement(
            'div',
            { className: 'cart-buttons-container' },
            this.createNextButton(renderOrderDetails, 'Edit Order Details'),
            this.createNextButton(this.checkForValidCustomer, 'Checkout')
          );
        } else if (this.readyToCheckout(this.props) && stage === 3) {
          return _react2.default.createElement(
            'div',
            { className: 'cart-buttons-container' },
            this.createNextButton(renderStageOne, 'Add More Items'),
            this.createNextButton(this.checkForValidCustomer, 'Checkout')
          );
        } else if (!this.readyToCheckout(props) && props.stage === 3) {
          return _react2.default.createElement(
            'div',
            { className: 'cart-buttons-container' },
            this.createNextButton(renderStageOne, 'Add More Items'),
            this.createNextButton(this.checkForValidCustomer, 'Checkout', true)
          );
        } else if (props.stage === 2 || props.stage === 1) {
          return _react2.default.createElement(
            'div',
            { className: 'cart-buttons-container' },
            this.createNextButton(renderOrderDetails, 'Add Order Details')
          );
        }
      }
    }
  }, {
    key: 'customerAgreesPrompt',
    value: function customerAgreesPrompt(stage) {
      if (stage === 3) {
        return _react2.default.createElement(
          'p',
          { className: 'customer-agrees-prompt' },
          'By submitting this form, customer agrees to receive production status updates via text'
        );
      }
    }
  }, {
    key: 'renderOrderNotes',
    value: function renderOrderNotes(props) {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { style: { marginLeft: '15px' } },
        _react2.default.createElement(
          'h3',
          null,
          'Order Notes'
        ),
        _react2.default.createElement('textarea', {
          className: 'order-details-notes-textarea',
          value: this.props.cart.notes,
          onChange: function onChange(e) {
            return _this3.props.updateCartNotes(e.target.value);
          },
          cols: 36,
          rows: 10
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          cart = _props3.cart,
          stage = _props3.stage;


      if (cart.garments.length > 0) {
        return _react2.default.createElement(
          'div',
          { className: 'cart-container' },
          _react2.default.createElement(
            'h2',
            { className: 'cart-title' },
            _react2.default.createElement('img', { src: _images.basketImage, className: 'cart-icon' }),
            ' BASKET'
          ),
          _react2.default.createElement('hr', { className: 'cart-line' }),
          _react2.default.createElement(
            'div',
            { className: 'cart-items' },
            this.renderCartItems(this.props)
          ),
          this.renderOrderNotes(this.props),
          this.customerAgreesPrompt(stage),
          _react2.default.createElement(
            'div',
            { style: { marginLeft: '15px' } },
            _react2.default.createElement(
              'h3',
              null,
              'Total: $',
              (0, _utils.getTotal)(cart.garments)
            )
          ),
          this.renderNextButton(this.props)
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }]);

  return Cart;
}(_react.Component);

Cart.propTypes = {
  cart: _propTypes2.default.object.isRequired, // mapStateToProps
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  removeGarmentFromCart: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateCartNotes: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setCartCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  renderStageOne: _propTypes2.default.func.isRequired, // Parent Component
  stage: _propTypes2.default.number.isRequired // Parent Component
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _format = __webpack_require__(49);

var _ordersHelper = __webpack_require__(135);

var _utils = __webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    submitOrder: _actions.submitOrder,
    setGrowler: _actions.setGrowler,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader
  }, dispatch);
};

var Checkout = function (_Component) {
  _inherits(Checkout, _Component);

  function Checkout() {
    _classCallCheck(this, Checkout);

    var _this = _possibleConstructorReturn(this, (Checkout.__proto__ || Object.getPrototypeOf(Checkout)).call(this));

    _this.state = {
      orderCompleted: false
    };
    return _this;
  }

  _createClass(Checkout, [{
    key: 'renderCustomerInfo',
    value: function renderCustomerInfo() {
      var _props = this.props,
          _props$cartCustomer = _props.cartCustomer,
          first_name = _props$cartCustomer.first_name,
          last_name = _props$cartCustomer.last_name,
          phone = _props$cartCustomer.phone,
          email = _props$cartCustomer.email,
          shipToStore = _props.cart.shipToStore;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Customer Info:'
        ),
        _react2.default.createElement(
          'p',
          null,
          first_name,
          ' ',
          last_name
        ),
        _react2.default.createElement(
          'p',
          null,
          (0, _format.formatPhone)(phone)
        ),
        _react2.default.createElement(
          'p',
          null,
          email
        )
      );
    }
  }, {
    key: 'renderGarmentAlterations',
    value: function renderGarmentAlterations(garment) {
      return garment.alterations.map(function (alt, index) {
        return _react2.default.createElement(
          'p',
          { key: index, className: 'cart-alteration' },
          alt.title
        );
      });
    }
  }, {
    key: 'renderGarments',
    value: function renderGarments(garments) {
      var _this2 = this;

      return garments.map(function (garment, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'h3',
            null,
            garment.title,
            ' #',
            index + 1
          ),
          _this2.renderGarmentAlterations(garment),
          _react2.default.createElement('hr', null)
        );
      });
    }
  }, {
    key: 'renderOrderInfo',
    value: function renderOrderInfo() {
      var _props$cart = this.props.cart,
          garments = _props$cart.garments,
          notes = _props$cart.notes;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Order Info:'
        ),
        this.renderGarments(garments),
        _react2.default.createElement(
          'h3',
          null,
          'Order Notes:'
        ),
        _react2.default.createElement(
          'p',
          { style: { paddingLeft: '15px' } },
          notes || 'Not Provided'
        )
      );
    }
  }, {
    key: 'submitOrder',
    value: function submitOrder() {
      var _this3 = this;

      var _props2 = this.props,
          setLoader = _props2.setLoader,
          submitOrder = _props2.submitOrder,
          setGrowler = _props2.setGrowler,
          renderOrderDetails = _props2.renderOrderDetails,
          removeLoader = _props2.removeLoader,
          customer_id = _props2.cartCustomer.id,
          cart = _props2.cart;


      setLoader();

      submitOrder(_extends({}, this.props)).then(function (res) {
        if (res.errors) {
          var kind = 'warning';
          var message = res.message;
          setGrowler({ message: message, kind: kind });
          renderOrderDetails();
        } else {
          _this3.setState({ orderCompleted: true });
        }
      }).catch(function (err) {
        debugger;
      }).then(function () {
        return removeLoader();
      });
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          onClick: function onClick() {
            return _this4.props.renderStageOne();
          },
          type: 'submit',
          className: 'short-button',
          value: 'Make Changes'
        }),
        _react2.default.createElement('input', {
          onClick: function onClick() {
            return _this4.submitOrder();
          },
          type: 'submit',
          className: 'short-button',
          value: 'Submit'
        })
      );
    }
  }, {
    key: 'renderShipToCustomer',
    value: function renderShipToCustomer() {
      var _props$cartCustomer2 = this.props.cartCustomer,
          first_name = _props$cartCustomer2.first_name,
          last_name = _props$cartCustomer2.last_name,
          street = _props$cartCustomer2.street,
          unit = _props$cartCustomer2.unit,
          city = _props$cartCustomer2.city,
          state_province = _props$cartCustomer2.state_province,
          zip_code = _props$cartCustomer2.zip_code;


      var address_two = void 0;
      if (unit) {
        address_two = unit.length > 0 ? _react2.default.createElement(
          'p',
          null,
          unit
        ) : '';
      } else {
        address_two = '';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Ship To Customer:'
        ),
        _react2.default.createElement(
          'p',
          null,
          first_name,
          ' ',
          last_name
        ),
        _react2.default.createElement(
          'p',
          null,
          street
        ),
        address_two,
        _react2.default.createElement(
          'p',
          null,
          city,
          ', ',
          state_province,
          ' ',
          zip_code
        )
      );
    }
  }, {
    key: 'renderShipToStore',
    value: function renderShipToStore() {
      var _props$currentStore = this.props.currentStore,
          name = _props$currentStore.name,
          street = _props$currentStore.street,
          street_two = _props$currentStore.street_two,
          city = _props$currentStore.city,
          state_province = _props$currentStore.state_province,
          zip_code = _props$currentStore.zip_code;

      var address_two = void 0;

      if (street_two) {
        address_two = street_two.length > 0 ? _react2.default.createElement(
          'p',
          null,
          street_two
        ) : '';
      } else {
        address_two = '';
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Ship To Store:'
        ),
        _react2.default.createElement(
          'p',
          null,
          name
        ),
        _react2.default.createElement(
          'p',
          null,
          street
        ),
        address_two,
        _react2.default.createElement(
          'p',
          null,
          city,
          ', ',
          state_province,
          ' ',
          zip_code
        )
      );
    }
  }, {
    key: 'renderShippingInfo',
    value: function renderShippingInfo() {
      var shipToStore = this.props.cart.shipToStore;

      if (shipToStore) {
        return this.renderShipToStore();
      } else if (!shipToStore) {
        return this.renderShipToCustomer();
      }
    }
  }, {
    key: 'renderOrderCompleteRedirect',
    value: function renderOrderCompleteRedirect() {
      if (this.state.orderCompleted) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/orders/new/order-confirmation' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var garments = this.props.cart.garments;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'checkout-container' },
          (0, _ordersHelper.redirectToStageOneIfNoAlterations)(this.props),
          this.renderCustomerInfo(),
          _react2.default.createElement('br', null),
          this.renderOrderInfo(),
          _react2.default.createElement('br', null),
          this.renderShippingInfo(),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h2',
            null,
            'Total: $',
            (0, _utils.getTotal)(garments)
          ),
          _react2.default.createElement('br', null),
          this.renderButtons(),
          this.renderOrderCompleteRedirect()
        )
      );
    }
  }]);

  return Checkout;
}(_react.Component);

Checkout.propTypes = {
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  cart: _propTypes2.default.object.isRequired, // mapStateToProps
  submitOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  renderOrderDetails: _propTypes2.default.func.isRequired, // Parent Component
  renderStageOne: _propTypes2.default.func.isRequired // Parent Component
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Checkout);

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _format = __webpack_require__(49);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    confirmedNewOrder: store.confirmedNewOrder,
    cartCustomer: store.cartCustomer,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    resetCart: _actions.resetCart,
    setConfirmedNewOrder: _actions.setConfirmedNewOrder,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var OrderConfirmation = function (_Component) {
  _inherits(OrderConfirmation, _Component);

  function OrderConfirmation() {
    _classCallCheck(this, OrderConfirmation);

    return _possibleConstructorReturn(this, (OrderConfirmation.__proto__ || Object.getPrototypeOf(OrderConfirmation)).apply(this, arguments));
  }

  _createClass(OrderConfirmation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var kind = 'success';
      var message = 'Order completed!';
      this.props.setGrowler({ kind: kind, message: message });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.resetCart();
      this.props.setConfirmedNewOrder({});
    }
  }, {
    key: 'renderCustomerInfo',
    value: function renderCustomerInfo(customer) {
      var first_name = customer.first_name,
          last_name = customer.last_name,
          phone = customer.phone,
          email = customer.email;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Customer Info:'
        ),
        _react2.default.createElement(
          'p',
          null,
          first_name,
          ' ',
          last_name
        ),
        _react2.default.createElement(
          'p',
          null,
          (0, _format.formatPhone)(phone)
        ),
        _react2.default.createElement(
          'p',
          null,
          email
        )
      );
    }
  }, {
    key: 'renderGarmentAlterations',
    value: function renderGarmentAlterations(garment) {
      return garment.alterations.map(function (alt, index) {
        return _react2.default.createElement(
          'p',
          { key: index, className: 'cart-alteration' },
          alt.name
        );
      });
    }
  }, {
    key: 'renderGarments',
    value: function renderGarments(garments) {
      var _this2 = this;

      return garments.map(function (garment, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'h3',
            null,
            garment.name,
            ' #',
            index + 1
          ),
          _this2.renderGarmentAlterations(garment),
          _react2.default.createElement('hr', null)
        );
      });
    }
  }, {
    key: 'renderOrderInfo',
    value: function renderOrderInfo(confirmedNewOrder) {
      var items = confirmedNewOrder.items;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Order Info:'
        ),
        this.renderGarments(items)
      );
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons(confirmedNewOrder) {
      var newOrderLink = '/orders/' + confirmedNewOrder.id;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/orders/new' },
          _react2.default.createElement('input', { type: 'submit', className: 'short-button', value: 'New Order' })
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: newOrderLink },
          _react2.default.createElement('input', { type: 'submit', className: 'short-button', value: 'View Order' })
        )
      );
    }
  }, {
    key: 'renderShipToCustomer',
    value: function renderShipToCustomer(customerInfo) {
      var first_name = customerInfo.first_name,
          last_name = customerInfo.last_name,
          street = customerInfo.street,
          unit = customerInfo.unit,
          city = customerInfo.city,
          state_province = customerInfo.state_province,
          zip_code = customerInfo.zip_code;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Ship To Customer:'
        ),
        _react2.default.createElement(
          'p',
          null,
          first_name,
          ' ',
          last_name
        ),
        _react2.default.createElement(
          'p',
          null,
          street
        ),
        unit ? _react2.default.createElement(
          'p',
          null,
          unit
        ) : '',
        _react2.default.createElement(
          'p',
          null,
          city,
          ', ',
          state_province,
          ' ',
          zip_code
        )
      );
    }
  }, {
    key: 'renderShipToStore',
    value: function renderShipToStore(store) {
      var name = store.name,
          street = store.street,
          unit = store.unit,
          city = store.city,
          state_province = store.state_province,
          zip_code = store.zip_code;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Ship To Store:'
        ),
        _react2.default.createElement(
          'p',
          null,
          name
        ),
        _react2.default.createElement(
          'p',
          null,
          street
        ),
        unit ? _react2.default.createElement(
          'p',
          null,
          unit
        ) : '',
        _react2.default.createElement(
          'p',
          null,
          city,
          ', ',
          state_province,
          ' ',
          zip_code
        )
      );
    }
  }, {
    key: 'renderShippingInfo',
    value: function renderShippingInfo() {
      var _props = this.props,
          currentStore = _props.currentStore,
          ship_to_store = _props.confirmedNewOrder.ship_to_store,
          customer = _props.cartCustomer;


      if (ship_to_store) {
        return this.renderShipToStore(currentStore);
      } else if (!ship_to_store) {
        return this.renderShipToCustomer(customer);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          confirmedNewOrder = _props2.confirmedNewOrder,
          cartCustomer = _props2.cartCustomer;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Order Completed' }),
        _react2.default.createElement(
          'div',
          { className: 'checkout-container' },
          this.renderCustomerInfo(cartCustomer),
          _react2.default.createElement('br', null),
          this.renderOrderInfo(confirmedNewOrder),
          _react2.default.createElement('br', null),
          this.renderShippingInfo(),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h2',
            null,
            'Total: $',
            confirmedNewOrder.total.toFixed(2)
          ),
          _react2.default.createElement('br', null),
          this.renderButtons(confirmedNewOrder)
        )
      );
    }
  }]);

  return OrderConfirmation;
}(_react.Component);

OrderConfirmation.propTypes = {
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  confirmedNewOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  resetCart: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setConfirmedNewOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrderConfirmation);

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _actions = __webpack_require__(8);

var _SelectGarment = __webpack_require__(388);

var _SelectGarment2 = _interopRequireDefault(_SelectGarment);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _SelectAlterations = __webpack_require__(387);

var _SelectAlterations2 = _interopRequireDefault(_SelectAlterations);

var _Cart = __webpack_require__(383);

var _Cart2 = _interopRequireDefault(_Cart);

var _Checkout = __webpack_require__(384);

var _Checkout2 = _interopRequireDefault(_Checkout);

var _orderDetails = __webpack_require__(392);

var _orderDetails2 = _interopRequireDefault(_orderDetails);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    cart: store.cart,
    garments: store.garments.garments
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ addGarmentToCart: _actions.addGarmentToCart, setGarment: _actions.setGarment }, dispatch);
};

var OrdersNew = function (_Component) {
  _inherits(OrdersNew, _Component);

  function OrdersNew() {
    _classCallCheck(this, OrdersNew);

    var _this = _possibleConstructorReturn(this, (OrdersNew.__proto__ || Object.getPrototypeOf(OrdersNew)).call(this));

    _this.selectGarment = function (garment) {
      _this.setState({ selectedGarment: garment, stage: 2 });
    };

    _this.renderStageOne = function () {
      _this.setState({
        selectedGarment: null,
        selectedAlterations: [],
        stage: 1,
        selectedGarmentIndex: null
      }); //, notes: ''});
    };

    _this.renderSelectAlterations = function (index, garment, alterations) {
      var selectedGarment = _this.props.garments.filter(function (g) {
        return g.id === garment.id;
      })[0];

      _this.setState({
        selectedGarment: selectedGarment,
        selectedAlterations: alterations,
        selectedGarmentIndex: index,
        stage: 2
      });
    };

    _this.renderOrderDetails = function () {
      _this.setState({ stage: 3 });
    };

    _this.renderCheckout = function () {
      _this.setState({ stage: 4 });
    };

    _this.addAlteration = function (alteration) {
      var newSelectedAlterations = _this.state.selectedAlterations;
      var newList = void 0;
      if (!_this.alterationsIncludeNewSelection(newSelectedAlterations, alteration)) {
        // spread operator is needed here in order to create a copy of the array
        // that does not point to the array in redux.
        newList = [].concat(_toConsumableArray(newSelectedAlterations));
        newList.push(alteration);
      } else {
        newList = newSelectedAlterations.filter(function (alt) {
          return alt.id !== alteration.id;
        });
      }
      var alts = [].concat(_toConsumableArray(newList));
      _this.setState({ selectedAlterations: alts });
    };

    _this.addToCart = function () {
      var _this$state = _this.state,
          selectedGarment = _this$state.selectedGarment,
          selectedAlterations = _this$state.selectedAlterations;

      var garmentForCart = _this.state.selectedGarment;
      garmentForCart.alterations = selectedAlterations;
      _this.props.addGarmentToCart(garmentForCart);
      _this.renderStageOne();
    };

    _this.updateGarment = function () {
      var _this$state2 = _this.state,
          selectedGarment = _this$state2.selectedGarment,
          selectedGarmentIndex = _this$state2.selectedGarmentIndex,
          selectedAlterations = _this$state2.selectedAlterations;

      var garmentForCart = _this.state.selectedGarment;
      garmentForCart.alterations = selectedAlterations;
      _this.props.setGarment(garmentForCart, selectedGarmentIndex);
      _this.setState({
        stage: 1,
        selectedGarmentIndex: null,
        selectedGarment: null,
        selectedAlterations: []
      });
    };

    _this.state = {
      stage: 1,
      selectedGarment: null,
      selectedAlterations: [],
      selectedGarmentIndex: null
    };
    return _this;
  }

  // going to try to just pull up the garment type of the item instad of injecting the item from props

  _createClass(OrdersNew, [{
    key: 'alterationsIncludeNewSelection',
    value: function alterationsIncludeNewSelection(newSelectedAlterations, alteration) {
      for (var i = 0; i < newSelectedAlterations.length; i++) {
        if (newSelectedAlterations[i].id === alteration.id) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'renderStage',
    value: function renderStage(stage) {
      switch (this.state.stage) {
        case 1:
          return _react2.default.createElement(_SelectGarment2.default, {
            handleSelect: this.selectGarment,
            garments: this.props.garments
          });
          break;
        case 2:
          return _react2.default.createElement(_SelectAlterations2.default, {
            addToCart: this.addToCart,
            handleSelect: this.addAlteration,
            renderOrderDetails: this.renderOrderDetails,
            selectedAlterations: this.state.selectedAlterations.map(function (alt) {
              return alt.id;
            }),
            renderStageOne: this.renderStageOne,
            garmentIndex: this.state.selectedGarmentIndex,
            updateGarment: this.updateGarment,
            garment: this.state.selectedGarment
          });
          break;
        case 3:
          return _react2.default.createElement(_orderDetails2.default, { renderStageOne: this.renderStageOne });
          break;
        case 4:
          return _react2.default.createElement(_Checkout2.default, {
            renderStageOne: this.renderStageOne,
            renderOrderDetails: this.renderOrderDetails
          });
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var headerText = void 0;
      switch (this.state.stage) {
        case 1:
          headerText = 'New Garment';
          break;
        case 2:
          headerText = 'Select Alterations';
          break;
        case 3:
          headerText = 'Order Details';
          break;
        case 4:
          headerText = 'Order Review';
          break;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, {
          text: headerText,
          rotate: 'rotate',
          link: '/',
          showCart: true
        }),
        _react2.default.createElement(
          'div',
          { className: 'new-order-content' },
          _react2.default.createElement(
            'div',
            { className: 'stage-section' },
            this.renderStage(this.state.stage)
          ),
          _react2.default.createElement(_Cart2.default, {
            renderCheckout: this.renderCheckout,
            renderStageOne: this.renderStageOne,
            renderSelectAlterations: this.renderSelectAlterations,
            stage: this.state.stage,
            renderOrderDetails: this.renderOrderDetails
          })
        )
      );
    }
  }]);

  return OrdersNew;
}(_react.Component);

OrdersNew.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  cart: _propTypes2.default.object.isRequired, // mapStateToProps
  garments: _propTypes2.default.array.isRequired, // mapStateToProps
  addGarmentToCart: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGarment: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrdersNew);

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _HowToPinModal = __webpack_require__(389);

var _HowToPinModal2 = _interopRequireDefault(_HowToPinModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderAlterations = function renderAlterations(props) {
  var garment = props.garment,
      alterations = props.alterations;

  var altsForGarment = alterations.filter(function (alt) {
    return alt.garmentId === garment.id;
  });
  return altsForGarment.map(function (alt, index) {
    // array of selected alteration ids - props.selectedAlterations

    // array of those alterations vvv
    var arr = props.selectedAlterations.map(function (alt) {
      return props.alterations.filter(function (a) {
        return a.id === alt;
      })[0];
    });

    var altTypes = arr.map(function (alt) {
      return alt.type;
    });

    var style = props.selectedAlterations.includes(alt.id) ? 'unclickable alteration-card' : 'alteration-card';

    var disabled = altTypes.includes(alt.type) && !props.selectedAlterations.includes(alt.id) ? 'disabled-alt' : '';

    var selected = props.selectedAlterations.includes(alt.id) ? 'selected-alt' : '';

    var handleClick = void 0;

    if (!disabled) {
      handleClick = function handleClick() {
        return props.handleSelect(alt);
      };
    }

    return _react2.default.createElement(
      'div',
      { key: index, className: '' + disabled },
      _react2.default.createElement(
        'div',
        { className: style + ' ' + selected, onClick: handleClick },
        _react2.default.createElement(
          'h3',
          null,
          alt.title
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'price-how-to-pin-container' },
        _react2.default.createElement(
          'h3',
          { className: 'alt-price-info' },
          '$',
          alt.price.toFixed(2)
        ),
        _react2.default.createElement(_HowToPinModal2.default, { image: alt.howToPin })
      )
    );
  });
};

var renderAddToCart = function renderAddToCart(props) {
  var disabled = props.selectedAlterations.length > 0 ? false : true;
  if (typeof props.garmentIndex === 'number') {
    return _react2.default.createElement('input', {
      disabled: disabled,
      type: 'submit',
      className: 'short-button',
      value: 'Update Garment',
      onClick: props.updateGarment
    });
  } else {
    return _react2.default.createElement('input', {
      disabled: disabled,
      type: 'submit',
      className: 'short-button',
      value: 'Add To Basket',
      onClick: props.addToCart
    });
  }
};

var SelectAlterations = function SelectAlterations(props) {
  return _react2.default.createElement(
    'div',
    { className: 'alteration-select' },
    _react2.default.createElement(
      'h2',
      { className: 'full-width' },
      'Select ',
      props.garment.title.toLowerCase(),
      ' alterations:'
    ),
    _react2.default.createElement('br', null),
    renderAlterations(props),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'cart-buttons full-width' },
      _react2.default.createElement('input', {
        type: 'submit',
        className: 'short-button',
        value: 'Back',
        onClick: props.renderStageOne
      }),
      renderAddToCart(props)
    )
  );
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    alterations: store.alterations.alterations,
    cart: store.cart
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SelectAlterations);

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderGarments = function RenderGarments(props) {
  var garments = props.garments;

  return garments.map(function (garment, index) {
    return _react2.default.createElement(
      'div',
      {
        key: index,
        className: 'garment-card',
        onClick: function onClick() {
          return props.handleSelect(garment);
        } },
      _react2.default.createElement(
        'h2',
        null,
        garment.title.toUpperCase()
      ),
      _react2.default.createElement('img', { className: 'garment-image', src: garment.image })
    );
  });
};

var SelectGarment = function SelectGarment(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Select garment type:'
    ),
    _react2.default.createElement(
      'div',
      { className: 'select-garment' },
      RenderGarments(props)
    )
  );
};

exports.default = SelectGarment;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(122);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _images = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HowToPinModal = function (_Component) {
  _inherits(HowToPinModal, _Component);

  function HowToPinModal() {
    _classCallCheck(this, HowToPinModal);

    var _this = _possibleConstructorReturn(this, (HowToPinModal.__proto__ || Object.getPrototypeOf(HowToPinModal)).call(this));

    _this.openModal = function () {
      _this.setState({ modalIsOpen: true });
    };

    _this.closeModal = function () {
      _this.setState({ modalIsOpen: false });
    };

    _this.state = {
      modalIsOpen: false
    };
    return _this;
  }

  _createClass(HowToPinModal, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'how-to-pin-modal-container' },
        _react2.default.createElement('img', {
          className: 'modal-eye',
          alt: 'how-to-pin',
          src: _images.infoImage,
          onClick: this.openModal
        }),
        _react2.default.createElement(
          _reactModal2.default,
          {
            isOpen: this.state.modalIsOpen,
            style: { backgroundColor: 'blue' },
            onRequestClose: this.closeModal,
            contentLabel: 'Example Modal'
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', {
              value: 'CLOSE',
              type: 'submit',
              className: 'short-button',
              onClick: this.closeModal
            }),
            _react2.default.createElement('img', {
              className: 'how-to-pin-image',
              alt: 'how-to-pin-image',
              src: this.props.image
            })
          )
        )
      );
    }
  }]);

  return HowToPinModal;
}(_react.Component);

HowToPinModal.propTypes = {};
exports.default = HowToPinModal;

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _format = __webpack_require__(49);

var _FindCustomerByPhone = __webpack_require__(391);

var _FindCustomerByPhone2 = _interopRequireDefault(_FindCustomerByPhone);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    cartCustomer: store.cartCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    updateCartCustomer: _actions.updateCartCustomer,
    resetCartCustomer: _actions.resetCartCustomer
  }, dispatch);
};

var CustomerInfo = function (_Component) {
  _inherits(CustomerInfo, _Component);

  function CustomerInfo() {
    _classCallCheck(this, CustomerInfo);

    var _this = _possibleConstructorReturn(this, (CustomerInfo.__proto__ || Object.getPrototypeOf(CustomerInfo)).call(this));

    _this.resetCartCustomerAndUpdateCustomerExists = function () {
      console.log('should be clearing customer');
      _this.props.resetCartCustomer();
      _this.updateCustomerExists(null);
    };

    _this.clearCustomerFromCartButton = function () {
      return _react2.default.createElement('input', {
        type: 'submit',
        className: 'short-button',
        value: 'Clear Customer',
        onClick: function onClick() {
          return _this.resetCartCustomerAndUpdateCustomerExists();
        } });
    };

    _this.updateCustomerExists = function (value) {
      _this.setState({ customerExists: value });
    };

    _this.state = {
      customerExists: null
    };
    return _this;
  }

  _createClass(CustomerInfo, [{
    key: 'firstName',
    value: function firstName(first_name) {
      return _react2.default.createElement(_FormField2.default, {
        value: first_name,
        fieldName: 'first_name',
        title: 'First Name',
        className: 'order-details-input',
        onChange: this.props.updateCartCustomer
      });
    }
  }, {
    key: 'lastName',
    value: function lastName(last_name) {
      return _react2.default.createElement(_FormField2.default, {
        value: last_name,
        fieldName: 'last_name',
        title: 'Last Name',
        className: 'order-details-input',
        onChange: this.props.updateCartCustomer
      });
    }
  }, {
    key: 'phone',
    value: function phone(_phone) {
      var displayPhone = (0, _format.formatPhone)(_phone);
      return _react2.default.createElement(_FormField2.default, {
        value: displayPhone,
        fieldName: 'phone',
        title: 'Mobile Phone',
        className: 'order-details-input',
        onChange: this.props.updateCartCustomer
      });
    }
  }, {
    key: 'email',
    value: function email(_email) {
      return _react2.default.createElement(_FormField2.default, {
        value: _email,
        fieldName: 'email',
        title: 'Email',
        className: 'order-details-input',
        onChange: this.props.updateCartCustomer
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$cartCustomer = _props.cartCustomer,
          first_name = _props$cartCustomer.first_name,
          last_name = _props$cartCustomer.last_name,
          phone = _props$cartCustomer.phone,
          email = _props$cartCustomer.email,
          id = _props$cartCustomer.id,
          updateCartCustomer = _props.updateCartCustomer;
      var customerExists = this.state.customerExists;


      if (customerExists === null && !id) {
        return _react2.default.createElement(_FindCustomerByPhone2.default, { updateCustomerExists: this.updateCustomerExists });
      } else {
        return _react2.default.createElement(
          'div',
          null,
          customerExists || id ? '' : _react2.default.createElement(
            'h4',
            null,
            'Create Customer:'
          ),
          _react2.default.createElement(
            'div',
            null,
            this.phone(phone),
            this.email(email)
          ),
          _react2.default.createElement(
            'div',
            null,
            this.firstName(first_name),
            this.lastName(last_name)
          ),
          _react2.default.createElement(
            'div',
            null,
            this.clearCustomerFromCartButton()
          )
        );
      }
    }
  }]);

  return CustomerInfo;
}(_react.Component);

CustomerInfo.propTypes = {
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  updateCartCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  resetCartCustomer: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomerInfo);

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _validations = __webpack_require__(30);

var _format = __webpack_require__(49);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler,
    setCartCustomer: _actions.setCartCustomer,
    updateCartCustomer: _actions.updateCartCustomer
  }, dispatch);
};

var FindCustomerByPhone = function (_Component) {
  _inherits(FindCustomerByPhone, _Component);

  function FindCustomerByPhone() {
    _classCallCheck(this, FindCustomerByPhone);

    var _this = _possibleConstructorReturn(this, (FindCustomerByPhone.__proto__ || Object.getPrototypeOf(FindCustomerByPhone)).call(this));

    _this.updatePhone = function (field, phone) {
      _this.setState(_defineProperty({}, field, phone));
    };

    _this.state = {
      phone: '',
      customer: null
    };
    return _this;
  }

  _createClass(FindCustomerByPhone, [{
    key: 'renderSubmitButton',
    value: function renderSubmitButton(phone) {
      var _this2 = this;

      if ((0, _validations.ValidatePhone)(phone)) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', {
            type: 'submit',
            value: 'Submit',
            className: 'short-button',
            onClick: function onClick() {
              return _this2.searchForCustomerByPhone(phone);
            }
          })
        );
      }
    }
  }, {
    key: 'searchForCustomerByPhone',
    value: function searchForCustomerByPhone(phone) {
      var _props = this.props,
          setLoader = _props.setLoader,
          removeLoader = _props.removeLoader,
          setGrowler = _props.setGrowler,
          updateCustomerExists = _props.updateCustomerExists,
          setCartCustomer = _props.setCartCustomer,
          updateCartCustomer = _props.updateCartCustomer;


      setLoader();
      (0, _actions.findOrCreateCustomer)({ phone: phone }).then(function (res) {
        removeLoader();

        var _res$data = res.data,
            _res$data$body = _res$data.body,
            status = _res$data$body.status,
            id = _res$data$body.id,
            customer = _res$data.body;


        if (status && status === 404) {
          updateCartCustomer('phone', phone);
          updateCustomerExists(false);
        } else if (id) {
          var kind = 'success';
          var message = 'Found Customer';
          setGrowler({ kind: kind, message: message });
          setCartCustomer(customer);
          updateCustomerExists(true);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          phone = _state.phone,
          customer = _state.customer;

      var displayPhone = (0, _format.formatPhone)(phone);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_FormField2.default
        // phone.replace regex taken from https://stackoverflow.com/a/37066380/4859818 - JCM
        // phone.replace(/^(\d{3})(\d{3})(\d)+$/, '($1) $2-$3')
        , { value: displayPhone,
          fieldName: 'phone',
          title: 'Search for Customer by Mobile Phone',
          className: 'order-details-input',
          onChange: this.updatePhone
        }),
        this.renderSubmitButton(this.state.phone)
      );
    }
  }]);

  return FindCustomerByPhone;
}(_react.Component);

FindCustomerByPhone.propTypes = {
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setCartCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateCustomerExists: _propTypes2.default.func.isRequired // parentComponent
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(FindCustomerByPhone);

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _zippopotam = __webpack_require__(421);

var _zippopotam2 = _interopRequireDefault(_zippopotam);

var _validations = __webpack_require__(30);

var _ordersHelper = __webpack_require__(135);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

var _Checkbox = __webpack_require__(76);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CustomerInfo = __webpack_require__(390);

var _CustomerInfo2 = _interopRequireDefault(_CustomerInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.cart,
    cartCustomer: store.cartCustomer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    updateCartCustomer: _actions.updateCartCustomer,
    updateCartShipTo: _actions.updateCartShipTo
  }, dispatch);
};

var OrderDetails = exports.OrderDetails = function (_Component) {
  _inherits(OrderDetails, _Component);

  function OrderDetails() {
    _classCallCheck(this, OrderDetails);

    return _possibleConstructorReturn(this, (OrderDetails.__proto__ || Object.getPrototypeOf(OrderDetails)).apply(this, arguments));
  }

  _createClass(OrderDetails, [{
    key: 'renderCustomerAddress',
    value: function renderCustomerAddress(shipToStore, customer) {
      var updateCartCustomer = this.props.updateCartCustomer;

      if (shipToStore) {
        // do nothing
      } else {
        var zippo = (0, _validations.ValidateZip)(customer.zip_code) ? _zippopotam2.default.get(customer.zip_code) : '';

        if (zippo.then && !customer.city && !customer.state_province) {
          zippo.then(function (res) {
            var formatted_address = res.results[0].formatted_address;
            var city = formatted_address.split(', ')[0];
            var state_province = formatted_address.split(', ')[1].match(/[a-zA-Z]+/g)[0];
            updateCartCustomer('city', city);
            updateCartCustomer('state_province', state_province);
          });
        }

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_FormField2.default, {
            value: customer.street,
            fieldName: 'street',
            title: 'Address 1',
            className: 'order-details-input',
            onChange: updateCartCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customer.unit,
            fieldName: 'unit',
            title: 'Address 2',
            className: 'order-details-input',
            onChange: updateCartCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customer.city,
            fieldName: 'city',
            title: 'City',
            className: 'order-details-input',
            onChange: updateCartCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customer.state_province,
            fieldName: 'state_province',
            title: 'State',
            className: 'order-details-input',
            onChange: updateCartCustomer
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customer.zip_code,
            fieldName: 'zip_code',
            title: 'Zip Code:',
            className: 'order-details-input',
            onChange: updateCartCustomer
          })
        );
      }
    }
  }, {
    key: 'renderShipTo',
    value: function renderShipTo(cart, customer) {
      var _this2 = this;

      var shipToStore = cart.shipToStore;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Checkbox2.default, {
            checked: shipToStore,
            text: 'Ship To Store',
            name: 'ship-to-store',
            onChange: function onChange() {
              return _this2.props.updateCartShipTo(!shipToStore);
            }
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_Checkbox2.default, {
            checked: !shipToStore,
            text: 'Ship To Customer',
            name: 'ship-to-customer',
            onChange: function onChange() {
              return _this2.props.updateCartShipTo(!shipToStore);
            }
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        ),
        this.renderCustomerAddress(shipToStore, customer)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          cart = _props.cart,
          cartCustomer = _props.cartCustomer;

      return _react2.default.createElement(
        'div',
        { className: 'order-details' },
        (0, _ordersHelper.redirectToStageOneIfNoAlterations)(this.props),
        _react2.default.createElement(
          'h2',
          null,
          'ORDER DETAILS'
        ),
        _react2.default.createElement(_CustomerInfo2.default, null),
        _react2.default.createElement(
          'h3',
          null,
          'Shipping'
        ),
        this.renderShipTo(cart, cartCustomer)
      );
    }
  }]);

  return OrderDetails;
}(_react.Component);

OrderDetails.propTypes = {
  cart: _propTypes2.default.object.isRequired, // mapStateToProps
  cartCustomer: _propTypes2.default.object.isRequired, // mapStateToProps
  updateCartCustomer: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateCartShipTo: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrderDetails);

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helpers = __webpack_require__(133);

var _constants = __webpack_require__(10);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cartCustomerReducer = function cartCustomerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helpers.initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CART_CUSTOMER:
      var customer = (0, _helpers.formatNewCartCustomer)(action.customer);
      return customer;
      break;
    case _constants.UPDATE_CART_CUSTOMER:
      return _extends({}, state, _defineProperty({}, action.customer.field, action.customer.value));
      break;
    case _constants.RESET_CART_CUSTOMER:
      return _helpers.initialState;
      break;
    case _constants.RESET_CART:
      return _helpers.initialState;
      break;
    default:
      return state;
  }
};

exports.default = cartCustomerReducer;

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(38);

var _actions = __webpack_require__(8);

var _shippingFunctions = __webpack_require__(61);

var _garments = __webpack_require__(142);

var _supplies = __webpack_require__(715);

var _supplies2 = _interopRequireDefault(_supplies);

var _logo = __webpack_require__(117);

var _logo2 = _interopRequireDefault(_logo);

var _Measurements = __webpack_require__(396);

var _Measurements2 = _interopRequireDefault(_Measurements);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _OrderComplete = __webpack_require__(79);

var _OrderComplete2 = _interopRequireDefault(_OrderComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    openOrders: store.storeOrders,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getCurrentOrder: _actions.getCurrentOrder,
    updateOrder: _actions.updateOrder,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var OrdersShow = function (_Component) {
  _inherits(OrdersShow, _Component);

  function OrdersShow(props) {
    _classCallCheck(this, OrdersShow);

    var _this = _possibleConstructorReturn(this, (OrdersShow.__proto__ || Object.getPrototypeOf(OrdersShow)).call(this));

    _this.checkOrderIn = function () {
      var _this$props = _this.props,
          _this$props$currentOr = _this$props.currentOrder,
          orderId = _this$props$currentOr.id,
          storeId = _this$props$currentOr.store_id,
          tailor = _this$props.userRoles.tailor;

      var data = { order: { id: orderId, store_id: storeId, arrived: true } };

      _this.props.updateOrder(data).catch(function (err) {
        return console.log(err);
      });
    };

    _this.fulfillOrder = function () {
      var _this$props$currentOr2 = _this.props.currentOrder,
          orderId = _this$props$currentOr2.id,
          storeId = _this$props$currentOr2.store_id;

      var data = { order: { id: orderId, store_id: storeId, fulfilled: true } };

      _this.props.setLoader();
      _this.setState({ loadingLabel: true });

      _this.props.updateOrder(data).then(function (res) {
        var _this$props2 = _this.props,
            order = _this$props2.currentOrder,
            roles = _this$props2.userRoles;

        var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);
        var shipmentType = (0, _shippingFunctions.shipmentTypes)(roles);

        if (shipmentType.has('mail_shipment')) {
          _this.makeShippingLabel(shipmentAction);
        }
      }).catch(function (err) {
        return console.log(err);
      });
    };

    _this.postShipment = function (orders, action, type) {
      _this.props.setLoader();
      (0, _shippingFunctions.fireShipmentCreate)(orders, action, type).then(function (res) {
        if (res.data.body.errors) {
          var message = res.data.body.errors[0];
          var kind = 'warning';
          _this.props.setGrowler({ kind: kind, message: message });
        } else {
          _this.refreshCurrentOrder();
        }
        _this.setState({ loadingLabel: false });
        _this.props.removeLoader();
      }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.makeShippingLabel = function (action) {
      return _this.postShipment([_this.props.currentOrder], action, 'mail_shipment');
    };

    _this.toggleMeasurementDetailButton = function (boolean) {
      _this.setState({ showMeasurements: !boolean });
    };

    _this.renderArrivedButton = function () {
      return _this.renderButton('Check Order In', { disabled: false }, _this.checkOrderIn);
    };

    _this.renderFulfillButton = function () {
      return _this.renderButton('Fulfill This Order', { disabled: false }, _this.fulfillOrder);
    };

    _this.renderCompletedButton = function () {
      return _this.renderButton('Order Completed ✔️', { disabled: true });
    };

    _this.renderPrintLabel = function () {
      var _this$props3 = _this.props,
          order = _this$props3.currentOrder,
          roles = _this$props3.userRoles;

      var disabled = _this.state.loadingLabel;
      var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);

      var onClick = void 0,
          printPrompt = void 0,
          clickArgs = void 0,
          shipmentDiv = void 0;
      switch ((0, _shippingFunctions.labelState)(roles, order, disabled)) {
        case 'needs_label':
          printPrompt = 'Create Label';
          onClick = _this.makeShippingLabel;
          clickArgs = shipmentAction;
          break;
        case 'in_progress':
          printPrompt = 'Creating Label';
        case 'label_created':
          printPrompt = 'Print Label';
          onClick = function onClick() {
            return window.print();
          };
          shipmentDiv = _react2.default.createElement(_OrderComplete2.default, null);
          break;
        default:
          break;
      }

      return _react2.default.createElement(
        'div',
        null,
        _this.renderButton(printPrompt, { disabled: disabled, clickArgs: clickArgs }, onClick),
        shipmentDiv
      );
    };

    _this.renderNotesForm = function () {
      if (_this.state.displayNotesForm) {
        var _this$props$userRoles = _this.props.userRoles,
            isTailor = _this$props$userRoles.tailor,
            isAdmin = _this$props$userRoles.admin;

        var prompt = void 0,
            party = void 0;

        if (isTailor) {
          prompt = 'Add Tailor Notes?';
          party = 'provider_notes';
        } else if (isAdmin) {
          prompt = 'Add Admin Notes?';
          party = 'requester_notes';
        }

        var notesField = _this.props.currentOrder[party];

        return _react2.default.createElement(
          'form',
          { className: 'notes-form', onSubmit: function onSubmit(e) {
              return _this.submitNotes(e);
            } },
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement(
              'h3',
              null,
              prompt
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('textarea', {
              cols: 43,
              rows: 10,
              defaultValue: notesField,
              onChange: function onChange(e) {
                return _this.updateNotes(e.target.value);
              }
            })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { className: 'short-button', type: 'submit', value: 'Submit' }),
          _react2.default.createElement('hr', null)
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    };

    _this.renderToggleNotesFormButton = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            className: 'pink-button',
            onClick: function onClick() {
              return _this.showHideNotesForm();
            }
          },
          _this.state.displayNotesForm ? 'Hide' : 'Add Notes'
        )
      );
    };

    _this.renderPrintInstructions = function () {
      var _this$props$currentOr3 = _this.props.currentOrder,
          orderId = _this$props$currentOr3.id,
          requesterNotes = _this$props$currentOr3.requester_notes,
          providerNotes = _this$props$currentOr3.provider_notes,
          _this$props$currentOr4 = _this$props$currentOr3.customer,
          firstName = _this$props$currentOr4.first_name,
          lastName = _this$props$currentOr4.last_name;

      var orderNotes = requesterNotes || 'Not Provided';
      var tailorNotes = providerNotes || 'Not Provided';
      var printableContent = _this.renderList();

      return _react2.default.createElement(
        'div',
        null,
        _this.renderButton('Print Instructions', { disabled: false }, function () {
          return window.print();
        }),
        _react2.default.createElement(
          'div',
          { className: 'print print-instructions' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: _logo2.default, style: { maxWidth: '100px' } })
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Alterations for Order #',
            orderId
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Customer Name: ',
            firstName + ' ' + lastName
          ),
          printableContent,
          _react2.default.createElement(
            'h3',
            null,
            'Order Notes: ',
            _react2.default.createElement(
              'p',
              { style: { display: 'inline' } },
              orderNotes
            )
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Taior Notes: ',
            _react2.default.createElement(
              'p',
              { style: { display: 'inline' } },
              tailorNotes
            )
          )
        )
      );
    };

    _this.state = {
      notes: '',
      displayNotesForm: false,
      showMeasurements: false,
      loadingLabel: false,
      sendingMessenger: false
    };
    return _this;
  }

  _createClass(OrdersShow, [{
    key: 'refreshCurrentOrder',
    value: function refreshCurrentOrder() {
      var _this2 = this;

      this.props.setLoader();
      var order_id = this.props.match.params.order_id;

      var store_id = this.props.currentStore.id;
      var getCurrentOrder = this.props.getCurrentOrder;


      getCurrentOrder(store_id, order_id).then(function () {
        return _this2.props.removeLoader();
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refreshCurrentOrder();
    }
  }, {
    key: 'getUniqueItemTypes',
    value: function getUniqueItemTypes(items) {
      return (0, _lodash.uniqBy)(items.map(function (i) {
        return { type: i.item_type.name, items: [] };
      }), 'type');
    }
  }, {
    key: 'sortItemsByType',
    value: function sortItemsByType() {
      var items = this.props.currentOrder.items;


      if ((0, _lodash.isEmpty)(items)) return [];

      var sortedItems = new Set(this.getUniqueItemTypes(items));

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          var itemType = item.item_type.name;
          var sortedItemsIterator = sortedItems.values();
          var sortingItem = true;

          while (sortingItem) {
            var currentIter = sortedItemsIterator.next();
            var currentValue = currentIter.value;

            if (currentIter.done) {
              sortingItem = false;
            } else if (currentValue.type === itemType) {
              currentValue.items.push(item);
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return [].concat(_toConsumableArray(sortedItems));
    }
  }, {
    key: 'getImageForItemType',
    value: function getImageForItemType(name) {
      switch (name) {
        case 'Pants':
          return _garments.pantsImage;
        case 'Shirt':
          return _garments.shirtImage;
        case 'Dress':
          return _garments.dressImage;
        case 'Suit Jacket':
          return _garments.suitImage;
        case 'SuitJacket':
          return _garments.suitImage;
        case 'Necktie':
          return _garments.tieImage;
        case 'Skirt':
          return _garments.skirtImage;
        default:
          return _supplies2.default;
      }
    }
  }, {
    key: 'updateNotes',
    value: function updateNotes(notes) {
      this.setState({ notes: notes });
    }
  }, {
    key: 'submitNotes',
    value: function submitNotes(event) {
      var _order;

      event.preventDefault();
      var _props = this.props,
          _props$currentOrder = _props.currentOrder,
          orderId = _props$currentOrder.id,
          storeId = _props$currentOrder.store_id,
          tailor = _props.userRoles.tailor;

      var key = tailor ? 'provider_notes' : 'requester_notes';
      var data = {
        order: (_order = {}, _defineProperty(_order, key, this.state.notes), _defineProperty(_order, 'id', orderId), _defineProperty(_order, 'store_id', storeId), _order)
      };

      this.props.updateOrder(data).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'showHideNotesForm',
    value: function showHideNotesForm() {
      this.setState({ displayNotesForm: !this.state.displayNotesForm });
    }
  }, {
    key: 'printShippingLabel',
    value: function printShippingLabel() {
      return window.print();
    }
  }, {
    key: 'renderDisabledCustLink',
    value: function renderDisabledCustLink() {
      var _props$currentOrder$c = this.props.currentOrder.customer,
          first_name = _props$currentOrder$c.first_name,
          last_name = _props$currentOrder$c.last_name;

      return this.renderLink({
        text: first_name + ' ' + last_name,
        enabled: false
      });
    }
  }, {
    key: 'renderEnabledCustLink',
    value: function renderEnabledCustLink() {
      var _props$currentOrder$c2 = this.props.currentOrder.customer,
          first_name = _props$currentOrder$c2.first_name,
          last_name = _props$currentOrder$c2.last_name,
          id = _props$currentOrder$c2.id;

      return this.renderLink({
        text: first_name + ' ' + last_name,
        path: '/customers/' + id + '/edit',
        enabled: true
      });
    }
  }, {
    key: 'renderOrderNotes',
    value: function renderOrderNotes(field) {
      var notes = this.props.currentOrder[field] || 'Not Provided';
      var title = field === 'provider_notes' ? 'Tailor Notes:' : 'Order Notes:';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          title
        ),
        _react2.default.createElement(
          'p',
          { className: 'notes' },
          notes
        )
      );
    }
  }, {
    key: 'renderAlteration',
    value: function renderAlteration(alteration, index) {
      // original, blind stitch, and cuffed hems should be red
      var hemAlts = ['Shorten Pant Length - Original Hem', 'Shorten Pant Length - Blind Stitch Hem', 'Shorten Pant Length - Cuffed Hem'];

      var className = hemAlts.includes(alteration.name) ? 'red' : '';
      var splitAlt = alteration.name.split(' - ');
      var alt = { name: splitAlt[0] + ' - ', specific: splitAlt[1] };

      if (splitAlt[1]) {
        return _react2.default.createElement(
          'li',
          { key: index },
          alt.name,
          _react2.default.createElement(
            'span',
            { className: className },
            alt.specific
          )
        );
      } else {
        return _react2.default.createElement(
          'li',
          { key: index },
          alteration.name
        );
      }
    }
  }, {
    key: 'renderLink',
    value: function renderLink(args) {
      var text = args.text,
          path = args.path,
          enabled = args.enabled;

      var linkDiv = void 0;

      if (enabled == true) {
        linkDiv = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: path },
          ' ',
          text,
          ' '
        );
      } else {
        linkDiv = _react2.default.createElement(
          'div',
          null,
          text
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Customer:'
        ),
        _react2.default.createElement(
          'h3',
          { className: 'blue-link' },
          linkDiv
        )
      );
    }
  }, {
    key: 'renderButton',
    value: function renderButton(text, params) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      var className = params.className || 'pink-button';
      var clickArgs = params.clickArgs || undefined;
      var disabled = params.disabled;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return callback(clickArgs);
            },
            disabled: disabled,
            className: className
          },
          text
        )
      );
    }
  }, {
    key: 'renderItemCaption',
    value: function renderItemCaption(item, itemType, index) {
      var alterations = item.alterations.map(this.renderAlteration);
      var itemCaption = itemType.type + ' #' + (index + 1);
      var image = this.getImageForItemType(itemType.type);

      return _react2.default.createElement(
        'div',
        { className: 'card', key: index },
        _react2.default.createElement(
          'div',
          { className: 'type-heading' },
          _react2.default.createElement('img', { className: 'item-type-image', src: image, alt: itemType.name }),
          _react2.default.createElement(
            'h3',
            null,
            itemCaption
          ),
          _react2.default.createElement(
            'ul',
            null,
            alterations
          )
        )
      );
    }
  }, {
    key: 'renderList',
    value: function renderList() {
      var _this3 = this;

      return this.sortItemsByType().map(function (itemType, index) {
        return itemType.items.map(function (item, index) {
          return _this3.renderItemCaption(item, itemType, index);
        });
      });
    }
  }, {
    key: 'renderEmptyDiv',
    value: function renderEmptyDiv() {
      return _react2.default.createElement('div', null);
    }
  }, {
    key: 'renderEmptyButtonDivs',
    value: function renderEmptyButtonDivs(count) {
      var output = [];
      while (count > 0) {
        output.push(this.renderEmptyDiv);
        count--;
      }
      return output;
    }
  }, {
    key: 'renderEditOrderButton',
    value: function renderEditOrderButton() {
      var _props2 = this.props,
          admin = _props2.userRoles.admin,
          order = _props2.currentOrder;

      var orderEditPath = '/orders/' + order.id + '/edit';

      if (admin) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: orderEditPath },
            _react2.default.createElement('input', { className: 'short-button', type: 'submit', value: 'Edit Order' })
          )
        );
      }
    }
  }, {
    key: 'renderOrderControls',
    value: function renderOrderControls() {
      var _props3 = this.props,
          order = _props3.currentOrder,
          roles = _props3.userRoles;
      var admin = roles.admin,
          tailor = roles.tailor,
          retailer = roles.retailer,
          customer = roles.customer;
      var arrived = order.arrived,
          fulfilled = order.fulfilled;

      var action = (0, _shippingFunctions.shipmentActions)(order, roles);

      // NOTE: This all needs to go into a higher-order interface component.
      // If a new button, is assigned, this will error out and help you realize it.

      var _renderEmptyButtonDiv = this.renderEmptyButtonDivs(8),
          _renderEmptyButtonDiv2 = _slicedToArray(_renderEmptyButtonDiv, 8),
          notesForm = _renderEmptyButtonDiv2[0],
          arrivedButton = _renderEmptyButtonDiv2[1],
          instructionButton = _renderEmptyButtonDiv2[2],
          fulfillButton = _renderEmptyButtonDiv2[3],
          labelButton = _renderEmptyButtonDiv2[4],
          messengerButton = _renderEmptyButtonDiv2[5],
          notesButton = _renderEmptyButtonDiv2[6],
          completedButton = _renderEmptyButtonDiv2[7];

      if (tailor || admin) {
        notesForm = this.renderNotesForm;
        notesButton = this.renderToggleNotesFormButton;

        if (!arrived && !fulfilled) {
          arrivedButton = this.renderArrivedButton;
        }

        if (arrived && !fulfilled) {
          instructionButton = this.renderPrintInstructions;
          fulfillButton = this.renderFulfillButton;
        }

        if (arrived && fulfilled) {
          labelButton = this.renderPrintLabel;
          completedButton = this.renderCompletedButton;

          if ((0, _shippingFunctions.messengerAllowed)(action, roles)) {
            messengerButton = this.renderSendMessenger;
          }
        }
      }

      return _react2.default.createElement(
        'div',
        null,
        notesButton(),
        notesForm(),
        arrivedButton(),
        instructionButton(),
        fulfillButton(),
        completedButton(),
        labelButton()
      );
    }
  }, {
    key: 'renderOrderDetails',
    value: function renderOrderDetails() {
      var _props$userRoles = this.props.userRoles,
          admin = _props$userRoles.admin,
          retailer = _props$userRoles.retailer,
          tailor = _props$userRoles.tailor,
          customer = _props$userRoles.customer;


      var renderList = this.renderList();
      var requesterNotes = this.renderOrderNotes('requester_notes');
      var providerNotes = this.renderOrderNotes('provider_notes');
      var customerLink = tailor || admin ? this.renderEnabledCustLink() : this.renderDisabledCustLink();

      return _react2.default.createElement(
        'div',
        null,
        renderList,
        customerLink,
        requesterNotes,
        providerNotes
      );
    }
  }, {
    key: 'renderDetailsOrMeasurementsButton',
    value: function renderDetailsOrMeasurementsButton() {
      var showMeasurements = this.state.showMeasurements;
      var _props$userRoles2 = this.props.userRoles,
          tailor = _props$userRoles2.tailor,
          admin = _props$userRoles2.admin;

      var value = showMeasurements ? 'See Order Details' : 'See Measurements';
      var toggleFunction = this.toggleMeasurementDetailButton;

      if (tailor || admin) {
        return _react2.default.createElement('input', {
          type: 'submit',
          value: value,
          className: 'short-button',
          onClick: function onClick() {
            return toggleFunction(showMeasurements);
          }
        });
      }
    }
  }, {
    key: 'renderMeasurements',
    value: function renderMeasurements() {
      var customer = this.props.currentOrder.customer;

      return _react2.default.createElement(_Measurements2.default, { customer: customer });
    }
  }, {
    key: 'setMainContent',
    value: function setMainContent() {
      var mainContent = void 0;

      if (this.state.showMeasurements) {
        var measurements = this.renderMeasurements();
        mainContent = _react2.default.createElement(
          'div',
          null,
          measurements
        );
      } else {
        var editButton = this.renderEditOrderButton();
        var measurementsButton = this.renderDetailsOrMeasurementsButton();
        var details = this.renderOrderDetails();
        var controls = this.renderOrderControls();
        // NOTE: here we should be rendering 1 of 2 main components
        mainContent = _react2.default.createElement(
          'div',
          null,
          editButton,
          measurementsButton,
          details,
          controls
        );
      }

      return mainContent;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          store = _props4.currentStore,
          order = _props4.currentOrder;

      var mainContent = _react2.default.createElement('div', null);
      var headerText = '';

      if (!(0, _lodash.isEmpty)(order)) {
        mainContent = this.setMainContent();
        headerText = 'Orders / ' + store.name + ' / #' + order.id;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          'div',
          { className: 'order-show' },
          mainContent
        )
      );
    }
  }]);

  return OrdersShow;
}(_react.Component);

OrdersShow.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  openOrders: _propTypes2.default.array.isRequired, // mapStateToProps
  currentOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
OrdersShow.propTypes = {
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  currentStore: _propTypes2.default.object.isRequired, // mapStateToProps
  openOrders: _propTypes2.default.array.isRequired, // mapStateToProps
  currentOrder: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  getCurrentOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateOrder: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrdersShow);

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputMeasurement = function (_Component) {
  _inherits(InputMeasurement, _Component);

  function InputMeasurement() {
    _classCallCheck(this, InputMeasurement);

    return _possibleConstructorReturn(this, (InputMeasurement.__proto__ || Object.getPrototypeOf(InputMeasurement)).apply(this, arguments));
  }

  _createClass(InputMeasurement, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          kind = _props.kind,
          value = _props.value,
          update = _props.update,
          disabled = _props.disabled;

      var editEnabled = disabled;
      var styling = 'input-measurement ' + kind;
      var val = void 0;

      if (value) {
        val = editEnabled ? '' + value : value + '"';
      } else {
        val = value;
      }

      return _react2.default.createElement('input', {
        className: styling,
        value: val,
        disabled: !editEnabled,
        onChange: function onChange(e) {
          return update(kind, e.target.value);
        }
      });
    }
  }]);

  return InputMeasurement;
}(_react.Component);

exports.default = InputMeasurement;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _InputMeasurement = __webpack_require__(395);

var _InputMeasurement2 = _interopRequireDefault(_InputMeasurement);

var _measurements = __webpack_require__(418);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    measurements: store.measurements
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getCustomerMeasurements: _actions.getCustomerMeasurements, createCustomerMeasurements: _actions.createCustomerMeasurements }, dispatch);
};

var Measurements = function (_Component) {
  _inherits(Measurements, _Component);

  function Measurements(props) {
    _classCallCheck(this, Measurements);

    var _this = _possibleConstructorReturn(this, (Measurements.__proto__ || Object.getPrototypeOf(Measurements)).call(this));

    _this.resetCustomerMeasurements = function () {
      var _this$props = _this.props,
          getCustomerMeasurements = _this$props.getCustomerMeasurements,
          customer = _this$props.customer;


      var customer_id = customer.id;
      var self = _this;
      getCustomerMeasurements({ customer_id: customer_id }).then(function (res) {
        self.setState({ measurements: res });
      }).catch(function (err) {
        return console.log('err', err);
      });
    };

    _this.updateMeasurement = function (kind, value) {
      var newState = _this.state;
      newState.measurements[kind] = value;
      _this.setState(newState);
    };

    _this.state = {
      showFront: true,
      editEnabled: false,
      measurements: props.measurements
    };
    return _this;
  }

  _createClass(Measurements, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resetCustomerMeasurements();
    }
  }, {
    key: 'getImage',
    value: function getImage(state) {
      var showFront = this.state.showFront;

      var alt = void 0,
          image = void 0;

      if (showFront) {
        alt = 'front';
        image = _measurements.FrontImage;
      } else {
        alt = 'back';
        image = _measurements.BackImage;
      }

      return _react2.default.createElement('img', { className: 'measurements-image', src: image, alt: alt });
    }
  }, {
    key: 'showFrontOrBack',
    value: function showFrontOrBack(boolean) {
      this.setState({ showFront: boolean });
    }
  }, {
    key: 'enableEditButton',
    value: function enableEditButton(editEnabled) {
      var _this2 = this;

      if (!editEnabled) {
        return _react2.default.createElement('input', {
          className: 'tiny-button',
          readOnly: true,
          value: 'Edit',
          onClick: function onClick() {
            return _this2.toggleEditEnabled(editEnabled);
          }
        });
      } else {
        return _react2.default.createElement('input', {
          className: 'tiny-button',
          readOnly: true,
          value: 'Submit',
          onClick: function onClick() {
            return _this2.submitNewMeasurements(_this2.state.measurements);
          }
        });
      }
    }
  }, {
    key: 'submitNewMeasurements',
    value: function submitNewMeasurements(measurements) {
      var _this3 = this;

      this.setState({ editEnabled: false });
      this.props.createCustomerMeasurements(this.state.measurements).then(function (res) {
        return _this3.resetCustomerMeasurements();
      }).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons(editEnabled) {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'measurement-buttons-container' },
        _react2.default.createElement('input', {
          className: 'tiny-button',
          readOnly: true,
          value: 'Front',
          onClick: function onClick() {
            return _this4.showFrontOrBack(true);
          }
        }),
        _react2.default.createElement('input', {
          className: 'tiny-button',
          readOnly: true,
          value: 'Back',
          onClick: function onClick() {
            return _this4.showFrontOrBack(false);
          }
        }),
        this.enableEditButton(editEnabled)
      );
    }
  }, {
    key: 'toggleEditEnabled',
    value: function toggleEditEnabled(editEnabled) {
      this.setState({ editEnabled: !editEnabled });
    }
  }, {
    key: 'validateMeasurement',
    value: function validateMeasurement(value) {
      var last = value[0];
      var lastCharInt = last.isNaN() ? true : false;
    }
  }, {
    key: 'renderInputs',
    value: function renderInputs(showFront, editEnabled, measurements) {
      if (!(0, _isEmpty2.default)(measurements)) {
        if (showFront) {
          return _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'ankle',
              value: measurements.ankle
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'calf',
              value: measurements.calf
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'chest_bust',
              value: measurements.chest_bust
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'hips',
              value: measurements.hips
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'knee',
              value: measurements.knee
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'pant_length',
              value: measurements.pant_length
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'sleeve_length',
              value: measurements.sleeve_length
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'shoulder_to_waist',
              value: measurements.shoulder_to_waist
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'thigh',
              value: measurements.thigh
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'upper_torso',
              value: measurements.upper_torso
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'waist',
              value: measurements.waist
            })
          );
        } else {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'back_width',
              value: measurements.back_width
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'bicep',
              value: measurements.bicep
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'elbow',
              value: measurements.elbow
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'forearm',
              value: measurements.forearm
            }),
            _react2.default.createElement(_InputMeasurement2.default, {
              update: this.updateMeasurement,
              disabled: editEnabled,
              kind: 'inseam',
              value: measurements.inseam
            })
          );
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          showFront = _state.showFront,
          editEnabled = _state.editEnabled,
          measurements = _state.measurements;

      return _react2.default.createElement(
        'div',
        { className: 'customer-measurements' },
        _react2.default.createElement(
          'div',
          { className: 'measurements-header' },
          _react2.default.createElement(
            'h3',
            null,
            'Customer Measurements'
          ),
          this.renderButtons(editEnabled)
        ),
        this.getImage(this.state),
        this.renderInputs(showFront, editEnabled, measurements)
      );
    }
  }]);

  return Measurements;
}(_react.Component);

Measurements.propTypes = {
  measurements: _propTypes2.default.array.isRequired, // mapStateToProps
  getCustomerMeasurements: _propTypes2.default.func.isRequired, // mapDispatchToProps
  createCustomerMeasurements: _propTypes2.default.func.isRequired // mapDispatchToProps
};
Measurements.propTypes = {
  measurements: _propTypes2.default.object.isRequired, // mapStateToProps
  getCustomerMeasurements: _propTypes2.default.func.isRequired, // mapDispatchToProps
  createCustomerMeasurements: _propTypes2.default.func.isRequired, // mapDispatchToProps
  customer: _propTypes2.default.object.isRequired // parentComponent
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Measurements);

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WelcomeKitPrint = function (_Component) {
  _inherits(WelcomeKitPrint, _Component);

  function WelcomeKitPrint() {
    _classCallCheck(this, WelcomeKitPrint);

    return _possibleConstructorReturn(this, (WelcomeKitPrint.__proto__ || Object.getPrototypeOf(WelcomeKitPrint)).apply(this, arguments));
  }

  _createClass(WelcomeKitPrint, [{
    key: 'render',
    value: function render() {
      var currentOrder = this.props.currentOrder;


      if (currentOrder) {
        var shipping_label = currentOrder.shipments[0].shipping_label;

        return _react2.default.createElement(
          'div',
          { className: 'print' },
          _react2.default.createElement(
            'div',
            { className: 'packing-slip-info' },
            _react2.default.createElement('img', {
              className: 'packing-slip-label',
              src: shipping_label,
              alt: 'shipping label'
            })
          )
        );
      }
    }
  }]);

  return WelcomeKitPrint;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentStore: store.currentStore,
    currentOrder: store.currentOrder
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(WelcomeKitPrint);

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _WithSectionHeader = __webpack_require__(47);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportsIndex = function (_Component) {
  _inherits(ReportsIndex, _Component);

  function ReportsIndex() {
    _classCallCheck(this, ReportsIndex);

    return _possibleConstructorReturn(this, (ReportsIndex.__proto__ || Object.getPrototypeOf(ReportsIndex)).apply(this, arguments));
  }

  _createClass(ReportsIndex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reports-container' },
        _react2.default.createElement(
          'h1',
          null,
          'Order Reports Index'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/reports/orders' },
          'Order Reports'
        )
      );
    }
  }]);

  return ReportsIndex;
}(_react.Component);

exports.default = (0, _WithSectionHeader2.default)(ReportsIndex);

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderReportRows = function (_Component) {
  _inherits(OrderReportRows, _Component);

  function OrderReportRows() {
    _classCallCheck(this, OrderReportRows);

    return _possibleConstructorReturn(this, (OrderReportRows.__proto__ || Object.getPrototypeOf(OrderReportRows)).apply(this, arguments));
  }

  _createClass(OrderReportRows, [{
    key: 'renderReportRows',
    value: function renderReportRows() {
      var orders = this.props.orders;

      return orders.map(function (order, index) {
        var id = order.id,
            fulfilled_date = order.fulfilled_date,
            retailerName = order.retailer.name,
            tailorName = order.tailor.name,
            total = order.total;


        var formattedDate = (0, _moment2.default)(fulfilled_date).format('MM-DD-YYYY');

        var route = '/orders/' + id;

        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'div',
            { className: 'report-row-container' },
            _react2.default.createElement(
              'div',
              { className: 'report-row' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: route, className: 'report-row-link' },
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  '#',
                  id
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  '$',
                  total.toFixed(2)
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  formattedDate
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  tailorName
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'report-cell' },
                  retailerName
                )
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'orders' },
        _react2.default.createElement(
          'div',
          { className: 'reports-container' },
          this.renderReportRows()
        )
      );
    }
  }]);

  return OrderReportRows;
}(_react.Component);

OrderReportRows.propTypes = {
  orders: _propTypes2.default.array.isRequired // parentComponent
};
exports.default = OrderReportRows;

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentReport = exports.setTokens = exports.validateToken = exports.removeLoader = exports.setLoader = undefined;

var _axios = __webpack_require__(29);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(8);

var setLoader = _require.setLoader,
    removeLoader = _require.removeLoader,
    validateToken = _require.validateToken,
    setTokens = _require.setTokens;
exports.setLoader = setLoader;
exports.removeLoader = removeLoader;
exports.validateToken = validateToken;
exports.setTokens = setTokens;
var getCurrentReport = exports.getCurrentReport = function getCurrentReport() {
  var url = '/api/reports/currentReport';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setCurrentReport(res.data.body));
        return res;
      }).catch(function (err) {
        debugger;
      });
    });
  };
};

var setCurrentReport = function setCurrentReport(report) {
  return {
    type: _constants.SET_CURRENT_REPORT,
    report: report
  };
};

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(136);

var _helper = __webpack_require__(402);

var CurrentReportReducer = function CurrentReportReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helper.initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CURRENT_REPORT:
      return action.report;
      break;
    default:
      return state;
  }
};

exports.default = CurrentReportReducer;

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {
  start_date: '',
  end_data: '',
  total_sales: '',
  total_items_fulfilled: '',
  total_late_orders: 0,
  orders: []
};

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(7);

var _WithSectionHeader = __webpack_require__(47);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

var _OrderReportRows = __webpack_require__(399);

var _OrderReportRows2 = _interopRequireDefault(_OrderReportRows);

var _actions = __webpack_require__(400);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    report: store.currentReport
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getCurrentReport: _actions.getCurrentReport, setLoader: _actions.setLoader, removeLoader: _actions.removeLoader }, dispatch);
};

var OrdersReport = function (_Component) {
  _inherits(OrdersReport, _Component);

  function OrdersReport() {
    _classCallCheck(this, OrdersReport);

    return _possibleConstructorReturn(this, (OrdersReport.__proto__ || Object.getPrototypeOf(OrdersReport)).apply(this, arguments));
  }

  _createClass(OrdersReport, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getCurrentReport();
    }
  }, {
    key: 'renderReportHeaders',
    value: function renderReportHeaders() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'report-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'report-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'Order'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'Total'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'Fulfilled'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'Tailor'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'report-header-cell' },
              'retailer'
            )
          )
        ),
        _react2.default.createElement('div', { className: 'report-header-break-row' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$report = this.props.report,
          start_date = _props$report.start_date,
          end_date = _props$report.end_date,
          orders = _props$report.orders;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'reports-container' },
          _react2.default.createElement(
            'h1',
            null,
            'Current Orders Report'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Start Date: ',
            start_date
          ),
          _react2.default.createElement(
            'p',
            null,
            'End Date: ',
            end_date
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admin/reports' },
            'All Reports'
          )
        ),
        this.renderReportHeaders(),
        _react2.default.createElement(_OrderReportRows2.default, { orders: orders })
      );
    }
  }]);

  return OrdersReport;
}(_react.Component);

OrdersReport.propTypes = {
  report: _propTypes2.default.object.isRequired, // mapStateToProps
  getCurrentReport: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithSectionHeader2.default)(OrdersReport));

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(6);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    searchResults: store.searchResults
  };
};

var SearchResults = function (_Component) {
  _inherits(SearchResults, _Component);

  function SearchResults() {
    _classCallCheck(this, SearchResults);

    return _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).apply(this, arguments));
  }

  _createClass(SearchResults, [{
    key: 'formatDueDate',
    value: function formatDueDate(dueDate, late) {
      var todaysDate = (0, _moment2.default)(new Date());
      var momentDueDate = (0, _moment2.default)(dueDate);
      var diff = momentDueDate.diff(todaysDate, 'days');
      var additionalString = late ? ' days late' : ' days to go';
      var status = (diff + additionalString).toUpperCase();
      return status;
    }
  }, {
    key: 'getOrderStatus',
    value: function getOrderStatus(order) {
      if (!order.due_date) {
        return { status: 'In Transit', color: 'green' };
      } else if (order.late) {
        var dueTime = this.formatDueDate(order.due_date, true);
        return { status: dueTime, color: 'red' };
      } else {
        var _dueTime = this.formatDueDate(order.due_date, false);
        return { status: _dueTime, color: 'orange' };
      }
    }
  }, {
    key: 'renderOrderRows',
    value: function renderOrderRows() {
      var _this2 = this;

      var searchResults = this.props.searchResults;

      if (searchResults) {
        return searchResults.map(function (order, i) {
          var orderStatus = _this2.getOrderStatus(order);
          var id = order.id,
              customer = order.customer,
              alterations_count = order.alterations_count;
          var first_name = customer.first_name,
              last_name = customer.last_name;
          var color = orderStatus.color,
              status = orderStatus.status;

          var route = '/orders/' + id;
          return _react2.default.createElement(
            'div',
            { key: id },
            _react2.default.createElement(
              'div',
              { className: 'order-row' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: route, className: 'order-row-link' },
                _react2.default.createElement(
                  'div',
                  { className: 'order-data-cell' },
                  '#',
                  id
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'order-data-cell', style: { color: color } },
                  status
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'order-data-cell' },
                  first_name,
                  ' ',
                  last_name
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'order-data-cell' },
                  alterations_count
                )
              )
            ),
            _react2.default.createElement('hr', { className: 'order-row-break-row' })
          );
        });
      } else {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.currentStore) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
      var headerText = 'Orders / ' + this.props.currentStore.name;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          'div',
          { className: 'orders' },
          _react2.default.createElement(
            'div',
            { className: 'order-headers-container' },
            _react2.default.createElement(
              'div',
              { className: 'order-headers-row' },
              _react2.default.createElement(
                'h3',
                { className: 'order-data-header-cell' },
                'Order'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'order-data-header-cell' },
                'Status'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'order-data-header-cell' },
                'Customer'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'order-data-header-cell' },
                'Quantity'
              )
            )
          ),
          _react2.default.createElement('div', { className: 'order-header-break-row' }),
          _react2.default.createElement(
            'div',
            { className: 'order-data-container' },
            this.renderOrderRows()
          )
        )
      );
    }
  }]);

  return SearchResults;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SearchResults);

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _actions = __webpack_require__(8);

var _constants = __webpack_require__(10);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

var _FormSelect = __webpack_require__(46);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WithSectionHeader = __webpack_require__(47);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    companies: store.companyList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getCompanies: _actions.getCompanies,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

var StoresNew = function (_Component) {
  _inherits(StoresNew, _Component);

  function StoresNew() {
    _classCallCheck(this, StoresNew);

    var _this = _possibleConstructorReturn(this, (StoresNew.__proto__ || Object.getPrototypeOf(StoresNew)).call(this));

    _this.updateStoreState = function (field, value) {
      _this.setState(_defineProperty({}, field, value));
    };

    _this.updateAddressState = function (field, value) {
      var address = _this.state.address;

      address[field] = value;
      _this.setState({ address: address });
    };

    _this.emptyParamsPresent = function () {
      var store = _this.state;
      var address = store.address;

      var missingStoreParams = !_this.hasAllParams(store);
      var missingAddressParams = !_this.hasAllParams(address);
      return missingStoreParams && missingAddressParams;
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          setLoader = _this$props.setLoader,
          removeLoader = _this$props.removeLoader,
          setGrowler = _this$props.setGrowler;

      var missingParams = _this.emptyParamsPresent();

      if (!missingParams) {
        var store = _this.state;
        setLoader();
        (0, _actions.createStore)({ store: store }).then(function (res) {
          removeLoader();

          var errors = res.data.body.errors;
          if ((0, _isEmpty2.default)(errors)) {
            _this.setState(_this.initialStateObject());

            setGrowler({
              kind: 'success',
              message: 'New Store Created!'
            });
          } else {
            if (errors['invalid_address']) {
              setGrowler({
                kind: 'warning',
                message: 'Invalid Address! Check your inputs.'
              });
            }
          }
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        var errorString = 'Please enter all fields before submitting.';
        setGrowler({ kind: 'warning', message: errorString });
      }
    };

    _this.state = _this.initialStateObject();
    return _this;
  }

  _createClass(StoresNew, [{
    key: 'initialStateObject',
    value: function initialStateObject() {
      return {
        company_id: '',
        name: '',
        primary_contact_id: '',
        phone: '',
        type: '',
        address: {
          street: '',
          street_two: '',
          city: '',
          state_province: '',
          zip_code: ''
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.setLoader();
      this.props.getCompanies().then(function () {
        return _this2.props.removeLoader();
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'hasAllParams',
    value: function hasAllParams(obj) {
      return (0, _isEmpty2.default)(Object.keys(obj).filter(function (k) {
        return k == '';
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var companies = this.props.companies;
      var _state = this.state,
          company_id = _state.company_id,
          type = _state.type,
          name = _state.name,
          phone = _state.phone,
          _state$address = _state.address,
          street = _state$address.street,
          street_two = _state$address.street_two,
          city = _state$address.city,
          state_province = _state$address.state_province,
          zip_code = _state$address.zip_code;


      var updateStoreState = this.updateStoreState;
      var updateAddressState = this.updateAddressState;
      var submit = function submit(e) {
        return _this3.handleSubmit(e);
      };

      if ((0, _isEmpty2.default)(companies)) {
        return _react2.default.createElement('div', null);
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'form',
            { onSubmit: submit },
            _react2.default.createElement(_FormField2.default, {
              value: name,
              fieldName: 'name',
              title: 'Name: ',
              onChange: updateStoreState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: phone,
              fieldName: 'phone',
              title: 'Phone: ',
              onChange: updateStoreState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: street,
              fieldName: 'street',
              title: 'Street:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: street_two,
              fieldName: 'street_two',
              title: 'Unit:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: city,
              fieldName: 'city',
              title: 'City:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: state_province,
              fieldName: 'state_province',
              title: 'State:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: zip_code,
              fieldName: 'zip_code',
              title: 'Zip:',
              onChange: updateAddressState
            }),
            _react2.default.createElement(_FormSelect2.default, {
              value: company_id,
              options: companies,
              fieldName: 'company_id',
              title: 'Company:',
              onChange: updateStoreState
            }),
            _react2.default.createElement(_FormSelect2.default, {
              value: type,
              options: _constants.storeTypes,
              fieldName: 'type',
              title: 'Store Type:',
              onChange: updateStoreState
            }),
            _react2.default.createElement('input', {
              type: 'submit',
              className: 'short-button',
              value: 'Create New Store'
            })
          )
        );
      }
    }
  }]);

  return StoresNew;
}(_react.Component);

StoresNew.propTypes = {
  companies: _propTypes2.default.array.isRequired, // mapStateToProps
  getCompanies: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithSectionHeader2.default)(StoresNew));

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEditStore = exports.getEditStore = exports.setTokens = exports.validateToken = exports.removeLoader = exports.setLoader = exports.setGrowler = exports.getCurrentStore = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.updateStore = updateStore;

var _axios = __webpack_require__(29);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(8);

var getCurrentStore = _require.getCurrentStore,
    setGrowler = _require.setGrowler,
    setLoader = _require.setLoader,
    removeLoader = _require.removeLoader,
    validateToken = _require.validateToken,
    setTokens = _require.setTokens;
exports.getCurrentStore = getCurrentStore;
exports.setGrowler = setGrowler;
exports.setLoader = setLoader;
exports.removeLoader = removeLoader;
exports.validateToken = validateToken;
exports.setTokens = setTokens;
var getEditStore = exports.getEditStore = function getEditStore(id) {
  var url = _constants.expressApi + '/stores/' + id;
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setEditStore(res.data.body));
        return res;
      }).catch(function (err) {
        debugger;
      });
    });
  };
};

function updateStore(data) {
  var store = data.store,
      _data$store = data.store,
      id = _data$store.id,
      street = _data$store.street,
      street_two = _data$store.unit,
      city = _data$store.city,
      state_province = _data$store.state_province,
      zip_code = _data$store.zip_code;


  var url = _constants.expressApi + '/stores/' + id;
  var storeObj = _extends({}, data.store);
  storeObj.address = { street: street, street_two: street_two, city: city, state_province: state_province, zip_code: zip_code };

  return function (dispatch) {
    return validateToken(dispatch).then(setTokens).then(function () {
      return _axios2.default.put(url, { store: storeObj }).then(function (res) {
        if (!res.data.body.errors) {
          dispatch(setEditStore(storeObj));
        }
        return res;
      }).catch(function (err) {
        debugger;
        return err;
      });
    });
  };
}

var setEditStore = function setEditStore(store) {
  return {
    type: _constants.SET_EDIT_STORE,
    store: store
  };
};

var updateEditStore = exports.updateEditStore = function updateEditStore(field, value) {
  if (field === 'provider_id') {
    field = 'default_tailor_id';
  }

  return {
    type: _constants.UPDATE_EDIT_STORE,
    store: _defineProperty({}, field, value)
  };
};

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(138);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

// lots of repeated code from currentStoreReducer espec. with address stuff

var editStoreFormReducer = function editStoreFormReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_EDIT_STORE:
      var store = formatAddressForStore(action.store);
      return store;
    case _constants.UPDATE_EDIT_STORE:
      return _extends({}, state, action.store);
    default:
      return _extends({}, state);
  }
};

var formatAddressForStore = function formatAddressForStore(store) {
  if (storeHasAddress(store)) {
    return formatValidAddressIntoStore(store);
  } else if (storeHasOldAddress(store)) {
    store = updateNewFieldsForStore(store);
    store = removeOldAddressFieldsFromStore(store);
    return store;
  }
};

var formatValidAddressIntoStore = function formatValidAddressIntoStore(store) {
  var id = store.id,
      phone = store.phone,
      type = store.type,
      name = store.name,
      address = store.address,
      default_tailor_id = store.default_tailor_id;
  var _address$number = address.number,
      number = _address$number === undefined ? '' : _address$number,
      _address$street = address.street,
      street = _address$street === undefined ? '' : _address$street,
      _address$street_two = address.street_two,
      street_two = _address$street_two === undefined ? '' : _address$street_two,
      _address$unit = address.unit,
      unit = _address$unit === undefined ? '' : _address$unit,
      _address$floor = address.floor,
      floor = _address$floor === undefined ? '' : _address$floor,
      _address$city = address.city,
      city = _address$city === undefined ? '' : _address$city,
      _address$state_provin = address.state_province,
      state_province = _address$state_provin === undefined ? '' : _address$state_provin,
      _address$zip_code = address.zip_code,
      zip_code = _address$zip_code === undefined ? '' : _address$zip_code;


  var newStreet = (number + ' ' + street).replace(/null/g, '').trim();
  var newUnit = (street_two + ' ' + unit + ' ' + floor).replace(/null/g, '').trim();

  return {
    id: id,
    name: name,
    phone: phone,
    number: '',
    street: newStreet,
    unit: newUnit,
    city: city,
    state_province: state_province,
    zip_code: zip_code,
    default_tailor_id: default_tailor_id
  };
};

var storeHasOldAddress = function storeHasOldAddress(store) {
  var street1 = store.street1,
      city = store.city,
      state = store.state,
      zip = store.zip;

  if (street1 && city && state && zip) {
    return true;
  } else {
    return false;
  }
};

var removeOldAddressFieldsFromStore = function removeOldAddressFieldsFromStore(store) {
  delete store.street1;
  delete store.street2;
  delete store.zip;
  delete store.state;
  return store;
};

var updateNewFieldsForStore = function updateNewFieldsForStore(store) {
  var street1 = store.street1,
      street2 = store.street2,
      state = store.state,
      zip = store.zip;


  return _extends({}, store, {
    street: street1,
    unit: street2,
    state_province: state,
    zip_code: zip
  });
};

var storeHasAddress = function storeHasAddress(store) {
  if (!(0, _isEmpty2.default)(store.address)) {
    var _store$address = store.address,
        street = _store$address.street,
        city = _store$address.city,
        zip_code = _store$address.zip_code,
        state_province = _store$address.state_province;


    if (street && city && zip_code && state_province) {
      return true;
    }
  }

  return false;
};

exports.default = editStoreFormReducer;

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(406);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _EditPassword = __webpack_require__(140);

var _EditPassword2 = _interopRequireDefault(_EditPassword);

var _SelectTailor = __webpack_require__(78);

var _SelectTailor2 = _interopRequireDefault(_SelectTailor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    store: store.editStore,
    tailors: store.tailorList,
    userRoles: store.userRoles,
    currentUser: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getEditStore: _actions.getEditStore,
    updateStore: _actions.updateStore,
    updateEditStore: _actions.updateEditStore,
    setGrowler: _actions.setGrowler,
    setLoader: _actions.setLoader,
    removeLoader: _actions.removeLoader
  }, dispatch);
};

var StoresEdit = function (_Component) {
  _inherits(StoresEdit, _Component);

  function StoresEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StoresEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StoresEdit.__proto__ || Object.getPrototypeOf(StoresEdit)).call.apply(_ref, [this].concat(args))), _this), _this.updateState = function (field, value) {
      _this.props.updateEditStore(field, value);
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      var self = _this;
      var store = _this.props.store;

      _this.props.setLoader();
      _this.props.updateStore({ store: store }).then(function (res) {
        _this.props.removeLoader();

        if (res.data.body.errors) {
          var kind = 'warning';
          var message = res.data.body.errors[0];
          self.setState(self.props.store);
          self.props.setGrowler({ kind: kind, message: message });
        } else if (res.data.body) {
          var _kind = 'success';
          var _message = 'Store Updated Successfully!';
          _this.props.setGrowler({ kind: _kind, message: _message });
        }
      }).catch(function (err) {
        debugger;
        console.log(err);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StoresEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          getEditStore = _props.getEditStore,
          paramsId = _props.match.params.store_id,
          userStoreId = _props.currentUser.user.store_id,
          admin = _props.userRoles.admin;


      var storeId = admin ? paramsId : userStoreId;

      getEditStore(storeId).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'renderTailorSelect',
    value: function renderTailorSelect(tailorId, admin) {
      if (admin) {
        return _react2.default.createElement(_SelectTailor2.default, {
          onChange: this.updateState,
          fieldName: 'default_tailor_id',
          headerText: 'Set Default Tailor',
          tailorId: tailorId
        });
      }
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      var _this2 = this;

      var _props$store = this.props.store,
          name = _props$store.name,
          phone = _props$store.phone,
          street = _props$store.street,
          unit = _props$store.unit,
          city = _props$store.city,
          state_province = _props$store.state_province,
          zip_code = _props$store.zip_code,
          default_tailor_id = _props$store.default_tailor_id;
      var admin = this.props.userRoles.admin;


      var tailorId = default_tailor_id ? default_tailor_id : '';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.handleSubmit(e);
            } },
          _react2.default.createElement(_FormField2.default, {
            value: name,
            fieldName: 'name',
            title: 'Name:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: phone,
            fieldName: 'phone',
            title: 'Phone:',
            onChange: this.updateState
          }),
          this.renderTailorSelect(tailorId, admin),
          _react2.default.createElement(_FormField2.default, {
            value: street,
            fieldName: 'street',
            title: 'Street:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: unit,
            fieldName: 'unit',
            title: 'Unit:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: city,
            fieldName: 'city',
            title: 'City:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: state_province,
            fieldName: 'state_province',
            title: 'State:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: zip_code,
            fieldName: 'zip_code',
            title: 'Zip:',
            onChange: this.updateState
          }),
          _react2.default.createElement('input', { className: 'short-button', type: 'submit', value: 'Update Store' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var store = this.props.store;


      if ((0, _isEmpty2.default)(store)) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'pos-rel' },
        _react2.default.createElement(_SectionHeader2.default, { text: 'Edit / ' + store.name }),
        _react2.default.createElement(
          'div',
          { className: 'form-container edit-account' },
          _react2.default.createElement(
            'h3',
            null,
            'Edit Store'
          ),
          this.renderForm(),
          _react2.default.createElement('br', null),
          _react2.default.createElement('hr', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_EditPassword2.default, { match: this.props.match })
        )
      );
    }
  }]);

  return StoresEdit;
}(_react.Component);

StoresEdit.propTypes = {
  store: _propTypes2.default.object.isRequired, // mapStateToProps
  userRoles: _propTypes2.default.object.isRequired, // mapStateToProps
  currentUser: _propTypes2.default.object.isRequired, // mapStateToProps
  getEditStore: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateStore: _propTypes2.default.func.isRequired, // mapDispatchToProps
  updateEditStore: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setGrowler: _propTypes2.default.func.isRequired, // mapDispatchToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps,
  removeLoader: _propTypes2.default.func.isRequired // mapDispatchToProps,
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StoresEdit);

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _actions = __webpack_require__(8);

var _FormSelect = __webpack_require__(46);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    stores: store.storeList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getStoreList: _actions.getStoreList }, dispatch);
};

var SelectStore = function (_Component) {
  _inherits(SelectStore, _Component);

  function SelectStore() {
    _classCallCheck(this, SelectStore);

    return _possibleConstructorReturn(this, (SelectStore.__proto__ || Object.getPrototypeOf(SelectStore)).apply(this, arguments));
  }

  _createClass(SelectStore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getStoreList = this.props.getStoreList;

      getStoreList().catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          stores = _props.stores,
          onChange = _props.onChange,
          storeId = _props.storeId;

      if (stores) {
        return _react2.default.createElement(
          'div',
          { className: 'SelectStore' },
          _react2.default.createElement(
            'h3',
            null,
            'Select Store'
          ),
          _react2.default.createElement(_FormSelect2.default, {
            value: storeId,
            options: stores,
            fieldName: 'storeId',
            title: 'Store:',
            onChange: onChange
          })
        );
      }
    }
  }]);

  return SelectStore;
}(_react.Component);

SelectStore.propTypes = {
  stores: _propTypes2.default.array.isRequired, // mapStateToProps
  getStoreList: _propTypes2.default.func.isRequired, // mapDispatchToProps
  onChange: _propTypes2.default.func.isRequired, // parentComponent
  storeId: _propTypes2.default.string // parentComponent
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectStore);

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(8);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _validations = __webpack_require__(30);

var _SelectRole = __webpack_require__(139);

var _SelectRole2 = _interopRequireDefault(_SelectRole);

var _SelectStore = __webpack_require__(409);

var _SelectStore2 = _interopRequireDefault(_SelectStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setGrowler: _actions.setGrowler }, dispatch);
};

var UsersNew = function (_Component) {
  _inherits(UsersNew, _Component);

  function UsersNew() {
    _classCallCheck(this, UsersNew);

    var _this = _possibleConstructorReturn(this, (UsersNew.__proto__ || Object.getPrototypeOf(UsersNew)).call(this));

    _this.updateState = function (key, value) {
      _this.setState(_defineProperty({}, key, value));
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          password = _this$state.password,
          passwordConfirmation = _this$state.passwordConfirmation,
          email = _this$state.email,
          role = _this$state.role,
          storeId = _this$state.storeId;


      var emailIsValid = _this.validateEmail(email);
      var passwordIsValid = _this.validatePasswords(password, passwordConfirmation);
      if (emailIsValid && passwordIsValid) {
        (0, _actions.createUser)({
          name: name,
          store_id: storeId,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          role: role
        }).then(function (res) {
          // error logging
          if (res.data === 422) {
            var kind = 'warning';
            var message = "User was not created. Make sure they don't already exist in the database.";
            _this.props.setGrowler({ kind: kind, message: message });
          } else {
            var _kind = 'success';
            var _message = 'User Created!';
            _this.props.setGrowler({ kind: _kind, message: _message });
            _this.setState(_this.initialStateObject());
          }
        }).catch(function (err) {
          return console.log('err', err);
        });
      }
    };

    _this.state = _this.initialStateObject();
    return _this;
  }

  _createClass(UsersNew, [{
    key: 'initialStateObject',
    value: function initialStateObject() {
      return {
        name: '',
        email: '',
        role: '',
        storeId: '',
        password: '',
        passwordConfirmation: ''
      };
    }
  }, {
    key: 'validatePasswords',
    value: function validatePasswords(password, passwordConfirmation) {
      if (password === passwordConfirmation) {
        if ((0, _validations.ValidatePassword)(password)) {
          return true;
        } else {
          var kind = 'warning';
          var message = 'Please enter a valid password! It should be longer than 6 characters';
          this.props.setGrowler({ kind: kind, message: message });
          return false;
        }
      } else {
        var _kind2 = 'warning';
        var _message2 = 'Your password confirmation did not match your chosen password.';
        this.props.setGrowler({ kind: _kind2, message: _message2 });
        return false;
      }
    }
  }, {
    key: 'validateEmail',
    value: function validateEmail(email) {
      if ((0, _validations.ValidateEmail)(email)) {
        return true;
      } else {
        var kind = 'warning';
        var message = 'Please enter a valid email!';
        this.props.setGrowler({ kind: kind, message: message });
        return false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          name = _state.name,
          email = _state.email,
          role = _state.role,
          password = _state.password,
          storeId = _state.storeId,
          passwordConfirmation = _state.passwordConfirmation;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { includeLink: false }),
        _react2.default.createElement(
          'h3',
          null,
          'Create User'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(_FormField2.default, {
            value: name,
            type: 'name',
            fieldName: 'name',
            title: 'Name:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: email,
            type: 'email',
            fieldName: 'email',
            title: 'Email:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_SelectRole2.default, { role: role, onChange: this.updateState }),
          _react2.default.createElement(_SelectStore2.default, { storeId: storeId, onChange: this.updateState }),
          _react2.default.createElement(_FormField2.default, {
            value: password,
            type: 'password',
            fieldName: 'password',
            title: 'Password:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: passwordConfirmation,
            fieldName: 'passwordConfirmation',
            title: 'Password Confirmation:',
            type: 'password',
            onChange: this.updateState
          }),
          _react2.default.createElement('input', {
            type: 'submit',
            disabled: false,
            value: 'Create User',
            className: 'short-button'
          })
        )
      );
    }
  }]);

  return UsersNew;
}(_react.Component);

UsersNew.propTypes = {
  setGrowler: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersNew);

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_EDIT_USER = exports.SET_EDIT_USER = 'SET_EDIT_USER';
var UPDATE_EDIT_USER = exports.UPDATE_EDIT_USER = 'UPDATE_EDIT_USER';

var _require = __webpack_require__(10);

var expressApi = _require.expressApi;
exports.expressApi = expressApi;

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(411);

var initialState = {
  name: '',
  store_id: null
};

var ediUser = function ediUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_EDIT_USER:
      return action.user;
      break;
    case _constants.UPDATE_EDIT_USER:
      return _extends({}, action.user, state);
    default:
      return state;
  }
};

exports.default = ediUser;

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _actions = __webpack_require__(8);

var _FormField = __webpack_require__(25);

var _FormField2 = _interopRequireDefault(_FormField);

var _WithSectionHeader = __webpack_require__(47);

var _WithSectionHeader2 = _interopRequireDefault(_WithSectionHeader);

var _validations = __webpack_require__(30);

var _EditPassword = __webpack_require__(140);

var _EditPassword2 = _interopRequireDefault(_EditPassword);

var _SelectRole = __webpack_require__(139);

var _SelectRole2 = _interopRequireDefault(_SelectRole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return {
    user: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updatePassword: _actions.updatePassword, setGrowler: _actions.setGrowler }, dispatch);
};

var UsersEdit = function (_Component) {
  _inherits(UsersEdit, _Component);

  function UsersEdit() {
    _classCallCheck(this, UsersEdit);

    var _this = _possibleConstructorReturn(this, (UsersEdit.__proto__ || Object.getPrototypeOf(UsersEdit)).call(this));

    _this.updateState = function (key, value) {
      _this.setState(_defineProperty({}, key, value), function () {
        _this.validatePasswords(_this.state.password, _this.state.passwordConfirmation);
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          password = _this$state.password,
          passwordConfirmation = _this$state.passwordConfirmation;

      if (password === passwordConfirmation) {
        var id = _this.props.user.user.id;
        _this.props.updatePassword({
          id: id,
          password: password,
          password_confirmation: passwordConfirmation
        }).then(function (res) {
          var kind = 'success';
          var message = 'Password Updated';
          _this.props.setGrowler({ kind: kind, message: message });
          _this.setState({
            password: '',
            passwordConfirmation: '',
            submitDisabled: true
          });
        }).catch(function (err) {
          return console.log('err', err);
        });
      }
    };

    _this.state = {
      password: '',
      passwordConfirmation: '',
      submitDisabled: true
    };
    return _this;
  }

  _createClass(UsersEdit, [{
    key: 'validatePasswords',
    value: function validatePasswords(password, passwordConfirmation) {
      if (password === passwordConfirmation) {
        if ((0, _validations.ValidatePassword)(password)) {
          this.setState({ submitDisabled: false });
          return;
        }
      }
      this.setState({ submitDisabled: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          password = _state.password,
          passwordConfirmation = _state.passwordConfirmation,
          submitDisabled = _state.submitDisabled;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          ' Edit User '
        ),
        _react2.default.createElement(
          'p',
          null,
          ' Full Functionality Available Soon '
        )
      );
    }
  }]);

  return UsersEdit;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithSectionHeader2.default)(UsersEdit));

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsersList = exports.setTokens = exports.validateToken = exports.removeLoader = exports.setLoader = undefined;

var _axios = __webpack_require__(29);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(141);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(8);

var setLoader = _require.setLoader,
    removeLoader = _require.removeLoader,
    validateToken = _require.validateToken,
    setTokens = _require.setTokens;
exports.setLoader = setLoader;
exports.removeLoader = removeLoader;
exports.validateToken = validateToken;
exports.setTokens = setTokens;
var getUsersList = exports.getUsersList = function getUsersList(id) {
  var url = _constants.expressApi + '/users/list';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setUsersList(res.data.body));
        return res;
      }).catch(function (err) {
        debugger;
      });
    });
  };
};

var setUsersList = function setUsersList(users) {
  return {
    type: _constants.SET_USERS_LIST,
    users: users
  };
};

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(141);

var initialState = [];
var usersListReducer = function usersListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

exports.default = usersListReducer;

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _redux = __webpack_require__(7);

var _actions = __webpack_require__(414);

var _SectionHeader = __webpack_require__(17);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _lodash = __webpack_require__(38);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(store) {
  return { users: store.usersList };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, getUsersList: _actions.getUsersList }, dispatch);
};

var UsersList = function (_Component) {
  _inherits(UsersList, _Component);

  function UsersList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UsersList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UsersList.__proto__ || Object.getPrototypeOf(UsersList)).call.apply(_ref, [this].concat(args))), _this), _this.renderUserRow = function (user) {
      var id = user.id,
          email = user.email,
          store = user.store;
      var roles = user.valid_roles;

      var roleString = (0, _lodash.isEmpty)(roles) ? 'N/A' : _this.extractRoles(roles);
      var storeName = store ? store.name : 'N/A';
      var route = '/users/' + id + '/edit';

      return _react2.default.createElement(
        'div',
        { key: id },
        _react2.default.createElement(
          'div',
          { className: 'user-data-row' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: route, className: 'user-link' },
            _react2.default.createElement(
              'div',
              { className: 'user-data-cell' },
              id
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-data-cell' },
              email
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-data-cell' },
              storeName
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-data-cell' },
              roleString
            )
          )
        )
      );
    }, _this.renderUserRows = function () {
      var users = _this.props.users;

      if (!(0, _lodash.isEmpty)(users)) {
        var userRowSet = users.map(function (user) {
          return _this.renderUserRow(user);
        });
        return _react2.default.createElement(
          'div',
          { className: 'user-container' },
          userRowSet
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'table-row' },
          _react2.default.createElement(
            'div',
            { className: 'loading-orders' },
            'Loading Users...'
          )
        );
      }
    }, _this.renderUserHeaders = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'user-headers-container' },
          _react2.default.createElement(
            'div',
            { className: 'user-headers-row' },
            _react2.default.createElement(
              'h3',
              { className: 'user-header-cell' },
              'Id'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'user-header-cell' },
              'Email'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'user-header-cell' },
              'Store Name'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'user-header-cell' },
              'Role'
            )
          ),
          _react2.default.createElement('hr', { className: 'user-header-break-row' })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UsersList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var users = this.props.users;

      if ((0, _lodash.isEmpty)(users)) {
        var _props = this.props,
            _setLoader = _props.setLoader,
            _removeLoader = _props.removeLoader,
            _getUsersList = _props.getUsersList;

        _setLoader();
        _getUsersList().then(function (res) {
          return _removeLoader();
        });
      }
    }
  }, {
    key: 'extractRoles',
    value: function extractRoles(roles) {
      var initVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      return Object.keys(roles).reduce(function (acc, key, i) {
        return roles[key] ? (0, _lodash.startCase)(key) + (i == 0 ? '' : ', ') + acc : '';
      }, initVal);
    }
  }, {
    key: 'render',
    value: function render() {
      var userHeaders = this.renderUserHeaders;
      var userRows = this.renderUserRows;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Manage Users', link: '/users/new' }),
        _react2.default.createElement(
          'div',
          { className: 'users' },
          userHeaders(),
          userRows()
        )
      );
    }
  }]);

  return UsersList;
}(_react.Component);

UsersList.propTypes = {
  users: _propTypes2.default.array.isRequired, // mapStateToProps
  setLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  removeLoader: _propTypes2.default.func.isRequired, // mapDispatchToProps
  getUsersList: _propTypes2.default.func.isRequired // mapDispatchToProps
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersList);

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var takeUpPantHemImage = exports.takeUpPantHemImage = 'https://i.imgur.com/MbK4cu8.png';
var taperPantLegImage = exports.taperPantLegImage = 'https://i.imgur.com/y0NcpxQ.png';
var pantsSeatWaistbandTakenInImage = exports.pantsSeatWaistbandTakenInImage = 'https://i.imgur.com/fxEnVR8.png';
var shirtSleevesLengthTakenUp = exports.shirtSleevesLengthTakenUp = 'https://i.imgur.com/kYV3Kqb.png';
var shirtSleevesTakenIn = exports.shirtSleevesTakenIn = 'https://i.imgur.com/f1SDxZp.png';
var shirtHemTakenUp = exports.shirtHemTakenUp = 'https://i.imgur.com/Lcf2yaE.png';
var tShirtHemTakenUp = exports.tShirtHemTakenUp = 'https://i.imgur.com/O1puUBn.png';
var shirtShouldersTakenIn = exports.shirtShouldersTakenIn = 'https://i.imgur.com/UZ3mpJK.png';
var shortenSkirt = exports.shortenSkirt = 'https://i.imgur.com/ku1eh7y.png';
var takeInSkirt = exports.takeInSkirt = 'https://i.imgur.com/vSNwPk4.png';
var shortenDress = exports.shortenDress = 'https://i.imgur.com/dpx4LJB.png';
var takeInDress = exports.takeInDress = 'https://i.imgur.com/zroDFxp.png';
var shortenFromDressShoulders = exports.shortenFromDressShoulders = 'https://i.imgur.com/gaN3b3E.png';
var shortenJacketLength = exports.shortenJacketLength = 'https://i.imgur.com/ysN9RLc.png';
var shortenSleeveLength = exports.shortenSleeveLength = 'https://i.imgur.com/9twuKcb.png';
var jacketSidesTakenIn = exports.jacketSidesTakenIn = 'https://i.imgur.com/1LffUbS.png';
var jacketSleevesTakenIn = exports.jacketSleevesTakenIn = 'https://i.imgur.com/nSJSljk.png';
var shortenTie = exports.shortenTie = 'https://i.imgur.com/kH7dXbQ.png';
var jeansSeatWaistbandTakenInImage = exports.jeansSeatWaistbandTakenInImage = 'https://i.imgur.com/IuXGz61.png';
var shirtSideSeamsTakenIn = exports.shirtSideSeamsTakenIn = 'https://i.imgur.com/h6f6TKH.png';
var takeInJacketShoulders = exports.takeInJacketShoulders = 'https://i.imgur.com/NpA65pZ.png';

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FrontImage = exports.FrontImage = 'https://s3.us-east-2.amazonaws.com/airtailor-images/new_measurments_front.png';
var BackImage = exports.BackImage = 'https://s3.us-east-2.amazonaws.com/airtailor-images/new_measurements_back.png';

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(7);

var _reactRedux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(74);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _Router = __webpack_require__(341);

var _Router2 = _interopRequireDefault(_Router);

var _MainPrint = __webpack_require__(342);

var _MainPrint2 = _interopRequireDefault(_MainPrint);

var _reducers = __webpack_require__(343);

var _reducers2 = _interopRequireDefault(_reducers);

var _setAuthToken = __webpack_require__(119);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _actions = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// uncomment below to toggle on/off redux logger
// import logger from 'redux-logger';
//const store = createStore(rootReducer, applyMiddleware(thunk, logger));

var wipeLocalData = function wipeLocalData() {
  delete localStorage.AirTailorToken;
  delete localStorage.CurrentUser;
  delete localStorage.CurrentStore;
};

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
var _localStorage = localStorage,
    AirTailorTokens = _localStorage.AirTailorTokens,
    CurrentUser = _localStorage.CurrentUser,
    CurrentStore = _localStorage.CurrentStore;


if (AirTailorTokens && CurrentUser && CurrentStore) {
  var parsedToken = JSON.parse(AirTailorTokens);
  var parsedUser = JSON.parse(CurrentUser);
  var roles = parsedUser.valid_roles;

  var parsedStore = JSON.parse(CurrentStore);

  if (!roles || !parsedToken || !parsedStore) {
    wipeLocalData();
  } else {
    (0, _setAuthToken2.default)(parsedToken);
    store.dispatch((0, _actions.setUserRole)(roles));
    store.dispatch((0, _actions.setCurrentStore)(parsedStore));

    delete parsedUser.valid_roles;
    store.dispatch((0, _actions.setCurrentUser)(parsedUser));
  }
} else {
  wipeLocalData();
}

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_Router2.default, null)
), document.querySelector('#root'));

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  baseUrl: 'http://www.zippopotam.us/',
  country: 'us'
};

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(29);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(420);

var _config2 = _interopRequireDefault(_config);

var _nodeFetch = __webpack_require__(120);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  config: _config2.default,
  get: function get(zipCode) {
    //return fetch(`${this.config.baseUrl}${this.config.country}/${zipCode}`);
    return (0, _nodeFetch2.default)('https://maps.googleapis.com/maps/api/geocode/json?&address=' + zipCode).then(function (res) {
      return res.json();
    });
    //return Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${zipCode}`);
  }
};

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    alterations: [{
      id: 1,
      garmentId: 1,
      title: 'Shorten Pant Length - Regular Hem',
      price: 15.5,
      howToPin: _how_to_pin.takeUpPantHemImage,
      type: 'hem'
    }, {
      id: 2,
      garmentId: 1,
      title: 'Shorten Pant Length - Original Hem',
      price: 24.0,
      howToPin: _how_to_pin.takeUpPantHemImage,
      type: 'hem'
    }, {
      id: 4,
      garmentId: 1,
      title: 'Shorten Pant Length - Cuffed Hem',
      price: 24.0,
      howToPin: _how_to_pin.takeUpPantHemImage,
      type: 'hem'
    }, {
      id: 5,
      garmentId: 1,
      title: 'Slim Pants Legs (Taper)',
      price: 24.0,
      howToPin: _how_to_pin.taperPantLegImage,
      type: 'taper'
    }, {
      id: 6,
      garmentId: 1,
      title: 'Seat / Waistband Taken In — Pants',
      price: 24.0,
      howToPin: _how_to_pin.pantsSeatWaistbandTakenInImage,
      type: 'waistband'
    }, {
      id: 7,
      garmentId: 1,
      title: 'Seat / Waistband Taken In — Jeans',
      price: 50.0,
      howToPin: _how_to_pin.jeansSeatWaistbandTakenInImage,
      type: 'waistband'
    }, {
      id: 8,
      garmentId: 2,
      title: 'Shirt Sleeves Length Taken Up — With Cuff',
      price: 25.0,
      howToPin: _how_to_pin.shirtSleevesLengthTakenUp,
      type: 'sleevesTakenUp'
    }, {
      id: 9,
      garmentId: 2,
      title: 'Shirt Sleeves Length Taken Up — Without Cuff',
      price: 15.5,
      howToPin: _how_to_pin.shirtSleevesLengthTakenUp,
      type: 'sleevesTakenUp'
    }, {
      id: 10,
      garmentId: 2,
      title: 'Shirt Sleeves Taken In',
      price: 24.0,
      howToPin: _how_to_pin.shirtSleevesTakenIn,
      type: 'sleevesTakenIn'
    }, {
      id: 11,
      garmentId: 2,
      title: 'Shirt Side Seams Taken In',
      price: 25.0,
      howToPin: _how_to_pin.shirtSideSeamsTakenIn,
      type: 'shirtSideSeemsTakenIn'
    }, {
      id: 12,
      garmentId: 2,
      title: 'Shorten Dress Shirt Length',
      price: 24.0,
      howToPin: _how_to_pin.shirtHemTakenUp,
      type: 'shirtLength'
    }, {
      id: 13,
      garmentId: 2,
      title: 'Shorten T-Shirt Length',
      price: 15.5,
      howToPin: _how_to_pin.tShirtHemTakenUp,
      type: 'shirtLength'
    }, {
      id: 14,
      garmentId: 2,
      title: 'Shirt Shoulders Taken In',
      price: 35.0,
      howToPin: _how_to_pin.shirtShouldersTakenIn,
      type: 'shirtShoulders'
    }, {
      id: 15,
      garmentId: 3,
      title: 'Shorten Skirt Length',
      price: 24.0,
      howToPin: _how_to_pin.shortenSkirt,
      type: 'skirtLength'
    }, {
      id: 16,
      garmentId: 3,
      title: 'Take In Waist',
      price: 30.0,
      howToPin: _how_to_pin.takeInSkirt,
      type: 'takeInSkirt'
    }, {
      id: 17,
      garmentId: 4,
      title: 'Shorten Dress Length',
      price: 24.0,
      howToPin: _how_to_pin.shortenDress,
      type: 'dressLength'
    }, {
      id: 18,
      garmentId: 4,
      title: 'Take In Waist',
      price: 30.0,
      howToPin: _how_to_pin.takeInDress,
      type: 'takeInDressWaist'
    }, {
      id: 19,
      garmentId: 4,
      title: 'Shorten Dress Shoulder Straps',
      price: 15.0,
      howToPin: _how_to_pin.shortenFromDressShoulders,
      type: 'dressShoulders'
    }, {
      id: 20,
      garmentId: 5,
      title: 'Shorten Jacket Length',
      price: 70.0,
      howToPin: _how_to_pin.shortenJacketLength,
      type: 'jacketLength'
    }, {
      id: 21,
      garmentId: 5,
      title: 'Shorten Sleeve Length - From Wrist',
      price: 40.0,
      howToPin: _how_to_pin.shortenSleeveLength,
      type: 'jacketSleeveLength'
    }, {
      id: 22,
      garmentId: 5,
      title: 'Shorten Sleeve Length - From Shoulder',
      price: 85.0,
      howToPin: _how_to_pin.shortenSleeveLength,
      type: 'jacketSleeveLength'
    }, {
      id: 23,
      garmentId: 5,
      title: 'Jacket Sides Taken In',
      price: 50.0,
      howToPin: _how_to_pin.jacketSidesTakenIn,
      type: 'jacketSides'
    }, {
      id: 24,
      garmentId: 5,
      title: 'Jacket Sleeves Taken In',
      price: 50.0,
      howToPin: _how_to_pin.jacketSleevesTakenIn,
      type: 'jacketSleevesTakenIn'
    }, {
      id: 25,
      garmentId: 5,
      title: 'Take Shoulders In',
      price: 50.0,
      howToPin: _how_to_pin.takeInJacketShoulders,
      type: 'takeInJacketShoulders'
    }, {
      id: 26,
      garmentId: 6,
      title: 'Shorten Tie Length',
      price: 25.0,
      howToPin: _how_to_pin.shortenTie,
      type: 'tie'
    }, {
      id: 27,
      garmentId: 6,
      title: 'Narrow Tie Width',
      price: 25.0,
      howToPin: _how_to_pin.shortenTie,
      type: 'tie'
    }, {
      id: 28,
      garmentId: 6,
      title: 'Shorten and Narrow',
      price: 35.0,
      howToPin: _how_to_pin.shortenTie,
      type: 'tie'
    }]
  };
};

var _how_to_pin = __webpack_require__(417);

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = [];

var archivedOrdersReducer = function archivedOrdersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_ARCHIVED_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

exports.default = archivedOrdersReducer;

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(10);

var _reducerHelpers = __webpack_require__(456);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  garments: [],
  storeInfo: {},
  shipToStore: true,
  notes: ''
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.ADD_GARMENT_TO_CART:
      return _extends({}, state, {
        garments: [].concat(_toConsumableArray(state.garments), [action.garment])
      });
      break;
    case _constants.REMOVE_GARMENT_FROM_CART:
      return _extends({}, state, {
        garments: (0, _reducerHelpers.removeItem)(state.garments, action)
      });
      break;
    case _constants.UPDATE_CART_SHIP_TO:
      return _extends({}, state, {
        shipToStore: action.boolean
      });
      break;
    case _constants.UPDATE_CART_NOTES:
      return _extends({}, state, {
        notes: action.notes
      });
      break;
    case _constants.RESET_CART:
      return {
        garments: [],
        storeInfo: {},
        shipToStore: true,
        notes: ''
      };
      break;
    case _constants.UPDATE_GARMENT_IN_CART:
      var newGarments = (0, _reducerHelpers.updateObjectInArray)(state.garments, action, 'garment');

      var newState = _extends({}, state, {
        garments: newGarments
      });
      return newState;
    default:
      return state;
  }
};

exports.default = cartReducer;

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = [];
var tailorListReducer = function tailorListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_COMPANY_LIST:
      return action.companies;
    default:
      return state;
  }
};

exports.default = tailorListReducer;

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = {};
var confirmedNewOrderReducer = function confirmedNewOrderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CONFIRMED_NEW_ORDER:
      return action.order;
    default:
      return state;
  }
};

exports.default = confirmedNewOrderReducer;

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(10);

var _helpers = __webpack_require__(133);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var currentCustomerReducer = function currentCustomerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helpers.initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CURRENT_CUSTOMER:
      var customer = (0, _helpers.formatNewCartCustomer)(action.customer);
      return customer;
      break;
    case _constants.UPDATE_CURRENT_CUSTOMER:
      return _extends({}, state, _defineProperty({}, action.customer.field, action.customer.value));
      break;
    default:
      return state;
  }
};

exports.default = currentCustomerReducer;

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = {};

var currentOrderReducer = function currentOrderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CURRENT_ORDER:
      return action.order;
    default:
      return state;
  }
};

exports.default = currentOrderReducer;

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(10);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var currentStoreReducer = function currentStoreReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CURRENT_STORE:
      var store = formatAddressForStore(action.store);
      return store;
    default:
      return state;
  }
};

var formatAddressForStore = function formatAddressForStore(store) {
  if (storeHasAddress(store)) {
    return formatValidAddressIntoStore(store);
  } else if (storeHasOldAddress(store)) {
    store = updateNewFieldsForStore(store);
    store = removeOldAddressFieldsFromStore(store);
    return store;
  }
};

var formatValidAddressIntoStore = function formatValidAddressIntoStore(store) {
  var id = store.id,
      phone = store.phone,
      type = store.type,
      name = store.name,
      address = store.address;
  var _address$number = address.number,
      number = _address$number === undefined ? '' : _address$number,
      _address$street = address.street,
      street = _address$street === undefined ? '' : _address$street,
      _address$street_two = address.street_two,
      street_two = _address$street_two === undefined ? '' : _address$street_two,
      _address$unit = address.unit,
      unit = _address$unit === undefined ? '' : _address$unit,
      _address$floor = address.floor,
      floor = _address$floor === undefined ? '' : _address$floor,
      _address$city = address.city,
      city = _address$city === undefined ? '' : _address$city,
      _address$state_provin = address.state_province,
      state_province = _address$state_provin === undefined ? '' : _address$state_provin,
      _address$zip_code = address.zip_code,
      zip_code = _address$zip_code === undefined ? '' : _address$zip_code;


  var newStreet = (number + ' ' + street).replace(/null/g, '').trim();
  var newUnit = (street_two + ' ' + unit + ' ' + floor).replace(/null/g, '').trim();

  return {
    id: id,
    name: name,
    phone: phone,
    number: '',
    street: newStreet,
    unit: newUnit,
    city: city,
    state_province: state_province,
    zip_code: zip_code
  };
};

var storeHasOldAddress = function storeHasOldAddress(store) {
  var street1 = store.street1,
      city = store.city,
      state = store.state,
      zip = store.zip;

  if (street1 && city && state && zip) {
    return true;
  } else {
    return false;
  }
};

var removeOldAddressFieldsFromStore = function removeOldAddressFieldsFromStore(store) {
  delete store.street1;
  delete store.street2;
  delete store.zip;
  delete store.state;
  return store;
};

var updateNewFieldsForStore = function updateNewFieldsForStore(store) {
  var street1 = store.street1,
      street2 = store.street2,
      state = store.state,
      zip = store.zip;


  return _extends({}, store, {
    street: street1,
    unit: street2,
    state_province: state,
    zip_code: zip
  });
};

var storeHasAddress = function storeHasAddress(store) {
  if (!(0, _isEmpty2.default)(store.address)) {
    var _store$address = store.address,
        street = _store$address.street,
        city = _store$address.city,
        zip_code = _store$address.zip_code,
        state_province = _store$address.state_province;


    if (street && city && zip_code && state_province) {
      return true;
    }
  }

  return false;
};

exports.default = currentStoreReducer;

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var _isEmpty = __webpack_require__(16);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isAuthenticated: false,
  user: {}
};

var currentUserReducer = function currentUserReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CURRENT_USER:
      return {
        isAuthenticated: !(0, _isEmpty2.default)(action.user),
        user: action.user
      };
    default:
      return state;
  }
};

exports.default = currentUserReducer;

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    garments: [{
      id: 1,
      title: 'Pants',
      image: _garments.pantsImage,
      weight: 680
    }, {
      id: 2,
      title: 'Shirt',
      image: _garments.shirtImage,
      weight: 230
    }, {
      id: 3,
      title: 'Skirt',
      image: _garments.skirtImage,
      weight: 340
    }, {
      id: 4,
      title: 'Dress',
      image: _garments.dressImage,
      weight: 340
    }, {
      id: 5,
      title: 'Suit Jacket',
      image: _garments.suitImage,
      weight: 710
    }, {
      id: 6,
      title: 'Necktie',
      image: _garments.tieImage,
      weight: 115
    }]
  };
};

var _garments = __webpack_require__(142);

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = {};

var growlerReducer = function growlerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_GROWLER:
      return action.growl;
      break;
    case _constants.REMOVE_GROWLER:
      return initialState;
      break;
    default:
      return state;
  }
};

exports.default = growlerReducer;

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = [];

var itemTypesReducer = function itemTypesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_ITEM_TYPES:
      return action.itemTypes;
    default:
      return state;
  }
};

exports.default = itemTypesReducer;

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = {};

var loaderReducer = function loaderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_LOADER:
      return { loader: true };
      break;
    case _constants.REMOVE_LOADER:
      return initialState;
      break;
    default:
      return state;
  }
};

exports.default = loaderReducer;

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = {};

var measurementsReducer = function measurementsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CUSTOMER_MEASUREMENTS:
      return action.measurements;
    default:
      return state;
  }
};

exports.default = measurementsReducer;

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = {
  unassigned: [],
  welcome_kits: []
};

var newOrdersReducer = function newOrdersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_NEW_ORDERS:
      return action.newOrders;
    default:
      return state;
  }
};

exports.default = newOrdersReducer;

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = [];

var searchResultsReducer = function searchResultsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_SEARCH_RESULTS:
      return action.orders;
    default:
      return state;
  }
};

exports.default = searchResultsReducer;

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = [];
var storeListReducer = function storeListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_STORE_LIST:
      return action.stores;
    default:
      return state;
  }
};

exports.default = storeListReducer;

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = [];

var storeOrdersReducer = function storeOrdersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_STORE_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

exports.default = storeOrdersReducer;

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = [];
var tailorListReducer = function tailorListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_TAILOR_LIST:
      return action.tailors;
    default:
      return state;
  }
};

exports.default = tailorListReducer;

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(10);

var initialState = {
  retailer: false,
  customer: false,
  tailor: false,
  admin: false
};

var userRoleReducer = function userRoleReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_USER_ROLE:
      return _extends({}, state, action.roles);
    case _constants.RESET_USER_ROLE:
      return initialState;
    default:
      return state;
  }
};

exports.default = userRoleReducer;

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CompaniesNew = __webpack_require__(370);

var _CompaniesNew2 = _interopRequireDefault(_CompaniesNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompanyRoutes = function (_Component) {
  _inherits(CompanyRoutes, _Component);

  function CompanyRoutes() {
    _classCallCheck(this, CompanyRoutes);

    return _possibleConstructorReturn(this, (CompanyRoutes.__proto__ || Object.getPrototypeOf(CompanyRoutes)).apply(this, arguments));
  }

  _createClass(CompanyRoutes, [{
    key: 'render',
    value: function render() {
      var admin = this.props.admin;

      var companiesNewRoute = function companiesNewRoute(props) {
        return admin ? _react2.default.createElement(_CompaniesNew2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
      };
      return _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin/companies/new', render: companiesNewRoute });
    }
  }]);

  return CompanyRoutes;
}(_react.Component);

CompanyRoutes.propTypes = {
  admin: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = CompanyRoutes;

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _orders = __webpack_require__(403);

var _orders2 = _interopRequireDefault(_orders);

var _reports = __webpack_require__(398);

var _reports2 = _interopRequireDefault(_reports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportRoutes = function (_Component) {
  _inherits(ReportRoutes, _Component);

  function ReportRoutes() {
    _classCallCheck(this, ReportRoutes);

    return _possibleConstructorReturn(this, (ReportRoutes.__proto__ || Object.getPrototypeOf(ReportRoutes)).apply(this, arguments));
  }

  _createClass(ReportRoutes, [{
    key: 'render',
    value: function render() {
      var admin = this.props.admin;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/admin/reports',
          render: function render(props) {
            return admin ? _react2.default.createElement(_reports2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/admin/reports/orders',
          render: function render(props) {
            return admin ? _react2.default.createElement(_orders2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        })
      );
    }
  }]);

  return ReportRoutes;
}(_react.Component);

ReportRoutes.propTypes = {
  admin: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = ReportRoutes;

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TailorIndex = __webpack_require__(375);

var _TailorIndex2 = _interopRequireDefault(_TailorIndex);

var _index = __webpack_require__(374);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(371);

var _index4 = _interopRequireDefault(_index3);

var _ReportRoutes = __webpack_require__(443);

var _ReportRoutes2 = _interopRequireDefault(_ReportRoutes);

var _CompanyRoutes = __webpack_require__(442);

var _CompanyRoutes2 = _interopRequireDefault(_CompanyRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminRoutes = function (_Component) {
  _inherits(AdminRoutes, _Component);

  function AdminRoutes() {
    _classCallCheck(this, AdminRoutes);

    return _possibleConstructorReturn(this, (AdminRoutes.__proto__ || Object.getPrototypeOf(AdminRoutes)).apply(this, arguments));
  }

  _createClass(AdminRoutes, [{
    key: 'render',
    value: function render() {
      var admin = this.props.admin;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/admin/tailors',
          render: function render(props) {
            return admin ? _react2.default.createElement(_TailorIndex2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/admin/retailers',
          render: function render(props) {
            return admin ? _react2.default.createElement(_index2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/admin/dashboard',
          render: function render(props) {
            return admin ? _react2.default.createElement(_index4.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          }
        }),
        _react2.default.createElement(_ReportRoutes2.default, this.props),
        _react2.default.createElement(_CompanyRoutes2.default, this.props)
      );
    }
  }]);

  return AdminRoutes;
}(_react.Component);

AdminRoutes.propTypes = {
  admin: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = AdminRoutes;

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SignIn = __webpack_require__(131);

var _SignIn2 = _interopRequireDefault(_SignIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthRoutes = function (_Component) {
  _inherits(AuthRoutes, _Component);

  function AuthRoutes() {
    _classCallCheck(this, AuthRoutes);

    return _possibleConstructorReturn(this, (AuthRoutes.__proto__ || Object.getPrototypeOf(AuthRoutes)).apply(this, arguments));
  }

  _createClass(AuthRoutes, [{
    key: 'render',
    value: function render() {
      var loggedIn = this.props.loggedIn;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          path: '/sign_in',
          render: function render(props) {
            return loggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }) : _react2.default.createElement(_SignIn2.default, null);
          }
        })
      );
    }
  }]);

  return AuthRoutes;
}(_react.Component);

AuthRoutes.propTypes = {
  loggedIn: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = AuthRoutes;

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CustomerEdit = __webpack_require__(376);

var _CustomerEdit2 = _interopRequireDefault(_CustomerEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerRoutes = function (_Component) {
  _inherits(CustomerRoutes, _Component);

  function CustomerRoutes() {
    _classCallCheck(this, CustomerRoutes);

    return _possibleConstructorReturn(this, (CustomerRoutes.__proto__ || Object.getPrototypeOf(CustomerRoutes)).apply(this, arguments));
  }

  _createClass(CustomerRoutes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loggedIn = _props.loggedIn,
          admin = _props.admin,
          retailer = _props.retailer;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          path: '/customers/:customer_id/edit',
          render: function render(props) {
            return admin || tailor ? _react2.default.createElement(_CustomerEdit2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        })
      );
    }
  }]);

  return CustomerRoutes;
}(_react.Component);

CustomerRoutes.propTypes = {
  loggedIn: _propTypes2.default.bool.isRequired, // parentComponent
  admin: _propTypes2.default.bool.isRequired, // parentComponent
  retailer: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = CustomerRoutes;

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ArchivedOrders = __webpack_require__(77);

var _ArchivedOrders2 = _interopRequireDefault(_ArchivedOrders);

var _NewOrders = __webpack_require__(369);

var _NewOrders2 = _interopRequireDefault(_NewOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminOrderRoutes = function (_Component) {
  _inherits(AdminOrderRoutes, _Component);

  function AdminOrderRoutes() {
    _classCallCheck(this, AdminOrderRoutes);

    return _possibleConstructorReturn(this, (AdminOrderRoutes.__proto__ || Object.getPrototypeOf(AdminOrderRoutes)).apply(this, arguments));
  }

  _createClass(AdminOrderRoutes, [{
    key: 'render',
    value: function render() {
      var admin = this.props.admin;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/admin/orders/new',
            render: function render(props) {
              return admin ? _react2.default.createElement(_NewOrders2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/admin/orders/archived',
            render: function render(props) {
              return admin ? _react2.default.createElement(_ArchivedOrders2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
            }
          })
        )
      );
    }
  }]);

  return AdminOrderRoutes;
}(_react.Component);

AdminOrderRoutes.propTypes = {
  admin: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = AdminOrderRoutes;

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StoresShow = __webpack_require__(137);

var _StoresShow2 = _interopRequireDefault(_StoresShow);

var _ArchivedOrders = __webpack_require__(77);

var _ArchivedOrders2 = _interopRequireDefault(_ArchivedOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreOrder = function (_Component) {
  _inherits(StoreOrder, _Component);

  function StoreOrder() {
    _classCallCheck(this, StoreOrder);

    return _possibleConstructorReturn(this, (StoreOrder.__proto__ || Object.getPrototypeOf(StoreOrder)).apply(this, arguments));
  }

  _createClass(StoreOrder, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loggedIn = _props.loggedIn,
          admin = _props.admin,
          retailer = _props.retailer;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/stores/:store_id/orders',
          render: function render(props) {
            return loggedIn ? _react2.default.createElement(_StoresShow2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/stores/:store_id/orders/archived',
          render: function render(props) {
            return loggedIn ? _react2.default.createElement(_ArchivedOrders2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        })
      );
    }
  }]);

  return StoreOrder;
}(_react.Component);

StoreOrder.propTypes = {
  loggedIn: _propTypes2.default.bool.isRequired, // parentComponent
  admin: _propTypes2.default.bool.isRequired, // parentComponent
  retailer: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = StoreOrder;

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StoresShow = __webpack_require__(137);

var _StoresShow2 = _interopRequireDefault(_StoresShow);

var _OrdersShow = __webpack_require__(394);

var _OrdersShow2 = _interopRequireDefault(_OrdersShow);

var _OrdersEdit = __webpack_require__(382);

var _OrdersEdit2 = _interopRequireDefault(_OrdersEdit);

var _ArchivedOrders = __webpack_require__(77);

var _ArchivedOrders2 = _interopRequireDefault(_ArchivedOrders);

var _OrdersNew = __webpack_require__(386);

var _OrdersNew2 = _interopRequireDefault(_OrdersNew);

var _searchResults = __webpack_require__(404);

var _searchResults2 = _interopRequireDefault(_searchResults);

var _OrderConfirmation = __webpack_require__(385);

var _OrderConfirmation2 = _interopRequireDefault(_OrderConfirmation);

var _AdminOrderRoutes = __webpack_require__(447);

var _AdminOrderRoutes2 = _interopRequireDefault(_AdminOrderRoutes);

var _StoreOrdersRoutes = __webpack_require__(448);

var _StoreOrdersRoutes2 = _interopRequireDefault(_StoreOrdersRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderRoutes = function (_Component) {
  _inherits(OrderRoutes, _Component);

  function OrderRoutes() {
    _classCallCheck(this, OrderRoutes);

    return _possibleConstructorReturn(this, (OrderRoutes.__proto__ || Object.getPrototypeOf(OrderRoutes)).apply(this, arguments));
  }

  _createClass(OrderRoutes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loggedIn = _props.loggedIn,
          admin = _props.admin,
          retailer = _props.retailer;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/orders',
          render: function render(props) {
            return loggedIn ? _react2.default.createElement(_StoresShow2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        }),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/orders/new',
            render: function render(props) {
              return admin || retailer ? _react2.default.createElement(_OrdersNew2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/orders/:order_id',
            render: function render(props) {
              return loggedIn ? _react2.default.createElement(_OrdersShow2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
            }
          })
        ),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/orders/:order_id/edit',
          render: function render(props) {
            return loggedIn ? _react2.default.createElement(_OrdersEdit2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/orders/new/order-confirmation',
          render: function render(props) {
            return admin || retailer ? _react2.default.createElement(_OrderConfirmation2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/search-results',
          render: function render(props) {
            return loggedIn ? _react2.default.createElement(_searchResults2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          }
        }),
        _react2.default.createElement(_StoreOrdersRoutes2.default, this.props),
        _react2.default.createElement(_AdminOrderRoutes2.default, this.props)
      );
    }
  }]);

  return OrderRoutes;
}(_react.Component);

OrderRoutes.propTypes = {
  loggedIn: _propTypes2.default.bool.isRequired, // parentComponent
  admin: _propTypes2.default.bool.isRequired, // parentComponent
  retailer: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = OrderRoutes;

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Home = __webpack_require__(129);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SiteRoutes = function (_Component) {
  _inherits(SiteRoutes, _Component);

  function SiteRoutes() {
    _classCallCheck(this, SiteRoutes);

    return _possibleConstructorReturn(this, (SiteRoutes.__proto__ || Object.getPrototypeOf(SiteRoutes)).apply(this, arguments));
  }

  _createClass(SiteRoutes, [{
    key: 'render',
    value: function render() {
      var loggedIn = this.props.loggedIn;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/',
          render: function render(props) {
            return loggedIn ? _react2.default.createElement(_Home2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        })
      );
    }
  }]);

  return SiteRoutes;
}(_react.Component);

SiteRoutes.propTypes = {
  loggedIn: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = SiteRoutes;

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _edit = __webpack_require__(408);

var _edit2 = _interopRequireDefault(_edit);

var _StoresNew = __webpack_require__(405);

var _StoresNew2 = _interopRequireDefault(_StoresNew);

var _Home = __webpack_require__(129);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreRoutes = function (_Component) {
  _inherits(StoreRoutes, _Component);

  function StoreRoutes() {
    _classCallCheck(this, StoreRoutes);

    return _possibleConstructorReturn(this, (StoreRoutes.__proto__ || Object.getPrototypeOf(StoreRoutes)).apply(this, arguments));
  }

  _createClass(StoreRoutes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loggedIn = _props.loggedIn,
          admin = _props.admin;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/stores/:store_id/edit',
            render: function render(props) {
              return loggedIn ? _react2.default.createElement(_edit2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/stores/new',
            render: function render(props) {
              return admin ? _react2.default.createElement(_StoresNew2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/stores/:id',
            render: function render(props) {
              return loggedIn ? _react2.default.createElement(_Home2.default, null) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
            }
          })
        )
      );
    }
  }]);

  return StoreRoutes;
}(_react.Component);

StoreRoutes.propTypes = {
  loggedIn: _propTypes2.default.bool.isRequired, // parentComponent
  admin: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = StoreRoutes;

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UsersNew = __webpack_require__(410);

var _UsersNew2 = _interopRequireDefault(_UsersNew);

var _edit = __webpack_require__(413);

var _edit2 = _interopRequireDefault(_edit);

var _list = __webpack_require__(416);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserRoutes = function (_Component) {
  _inherits(UserRoutes, _Component);

  function UserRoutes() {
    _classCallCheck(this, UserRoutes);

    return _possibleConstructorReturn(this, (UserRoutes.__proto__ || Object.getPrototypeOf(UserRoutes)).apply(this, arguments));
  }

  _createClass(UserRoutes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loggedIn = _props.loggedIn,
          admin = _props.admin;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          path: '/users/new',
          render: function render(props) {
            return loggedIn && admin ? _react2.default.createElement(_UsersNew2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          path: '/users/:user_id/edit',
          render: function render(props) {
            return loggedIn && admin ? _react2.default.createElement(_edit2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          path: '/users/list',
          render: function render(props) {
            return loggedIn && admin ? _react2.default.createElement(_list2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
          }
        })
      );
    }
  }]);

  return UserRoutes;
}(_react.Component);

UserRoutes.propTypes = {
  loggedIn: _propTypes2.default.bool.isRequired, // parentComponent
  admin: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = UserRoutes;

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(708);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SiteRoutes = __webpack_require__(450);

var _SiteRoutes2 = _interopRequireDefault(_SiteRoutes);

var _AuthRoutes = __webpack_require__(445);

var _AuthRoutes2 = _interopRequireDefault(_AuthRoutes);

var _OrderRoutes = __webpack_require__(449);

var _OrderRoutes2 = _interopRequireDefault(_OrderRoutes);

var _AdminRoutes = __webpack_require__(444);

var _AdminRoutes2 = _interopRequireDefault(_AdminRoutes);

var _StoreRoutes = __webpack_require__(451);

var _StoreRoutes2 = _interopRequireDefault(_StoreRoutes);

var _CustomerRoutes = __webpack_require__(446);

var _CustomerRoutes2 = _interopRequireDefault(_CustomerRoutes);

var _UserRoutes = __webpack_require__(452);

var _UserRoutes2 = _interopRequireDefault(_UserRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvailableRoutes = function (_Component) {
  _inherits(AvailableRoutes, _Component);

  function AvailableRoutes() {
    _classCallCheck(this, AvailableRoutes);

    return _possibleConstructorReturn(this, (AvailableRoutes.__proto__ || Object.getPrototypeOf(AvailableRoutes)).apply(this, arguments));
  }

  _createClass(AvailableRoutes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loggedIn = _props.loggedIn,
          admin = _props.admin,
          retailer = _props.retailer,
          tailor = _props.tailor;

      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_SiteRoutes2.default, this.props),
        _react2.default.createElement(_AuthRoutes2.default, this.props),
        _react2.default.createElement(_OrderRoutes2.default, this.props),
        _react2.default.createElement(_StoreRoutes2.default, this.props),
        _react2.default.createElement(_AdminRoutes2.default, this.props),
        _react2.default.createElement(_CustomerRoutes2.default, this.props),
        _react2.default.createElement(_UserRoutes2.default, this.props)
      );
    }
  }]);

  return AvailableRoutes;
}(_react.Component);

AvailableRoutes.propTypes = {
  loggedIn: _propTypes2.default.bool.isRequired, // parentComponent
  admin: _propTypes2.default.bool.isRequired, // parentComponent
  retailer: _propTypes2.default.bool.isRequired, // parentComponent
  tailor: _propTypes2.default.bool.isRequired // parentComponent
};
exports.default = AvailableRoutes;

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderAlterationList = exports.renderAlterationListItems = exports.getAlterationsList = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlterationsList = exports.getAlterationsList = function getAlterationsList(items) {
  return items.map(function (item, index) {
    return item.alterations.map(function (alt, index) {
      return alt.name;
    });
  }).join().split(",");
};

var renderAlterationListItems = exports.renderAlterationListItems = function renderAlterationListItems(alterations, className) {
  return alterations.map(function (alt, index) {
    return _react2.default.createElement(
      "li",
      { className: className + "-li", key: index },
      alt
    );
  });
};

var renderAlterationList = exports.renderAlterationList = function renderAlterationList(items, className) {
  var alterations = renderAlterationListItems(getAlterationsList(items), className);
  return _react2.default.createElement(
    "ul",
    { className: className + "-ul" },
    alterations
  );
};

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderNewOrderList = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderOrders = function renderOrders(orders, className, selectOrder) {
  if (orders.length > 0) {
    return orders.map(function (order, index) {
      var id = order.id,
          customer = order.customer,
          total = order.total;
      var first_name = customer.first_name,
          last_name = customer.last_name;

      return _react2.default.createElement(
        'li',
        {
          className: className + '-li',
          key: index,
          onClick: function onClick() {
            return selectOrder(order);
          }
        },
        '#',
        order.id,
        ' - ',
        first_name,
        ' ',
        last_name,
        ' - $',
        total
      );
    });
  } else {
    return _react2.default.createElement(
      'p',
      null,
      'No New Orders'
    );
  }
};

var RenderNewOrderList = exports.RenderNewOrderList = function RenderNewOrderList(props) {
  var orders = props.orders,
      className = props.className,
      selectOrder = props.selectOrder;

  return _react2.default.createElement(
    'div',
    { className: className + '-div' },
    _react2.default.createElement(
      'h3',
      null,
      'Manage New Orders'
    ),
    _react2.default.createElement(
      'ul',
      { className: className + '-ul' },
      renderOrders(orders.unassigned, className, selectOrder)
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Manage New Kits'
    ),
    _react2.default.createElement(
      'ul',
      { className: className + '-ul' },
      renderOrders(orders.welcome_kits, className, selectOrder)
    )
  );
};

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.updateObjectInArray = updateObjectInArray;
exports.removeItem = removeItem;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// example call updateObjectInArray(state.garments, action, 'garment')
function updateObjectInArray(array, action, item_name) {
  return array.map(function (item, index) {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item;
    }
    // Otherwise, this is the one we want - return an updated value
    return _extends({}, item, action[item_name]);
  });
}

// example call const newGarments = removeItem(state.garments, action);
function removeItem(array, action) {
  return [].concat(_toConsumableArray(array.slice(0, action.index)), _toConsumableArray(array.slice(action.index + 1)));
}

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocalStorageAuth = setLocalStorageAuth;
exports.setLocalStorageUser = setLocalStorageUser;
exports.setLocalStorageStore = setLocalStorageStore;
function setLocalStorageAuth(AirTailorTokens) {
  var client = AirTailorTokens.client,
      uid = AirTailorTokens.uid,
      accessToken = AirTailorTokens.accessToken,
      expiry = AirTailorTokens.expiry;

  localStorage.setItem('AirTailorTokens', JSON.stringify(AirTailorTokens));
  return true;
}

function setLocalStorageUser(user) {
  var id = user.id,
      email = user.email,
      store_id = user.store_id,
      valid_roles = user.valid_roles,
      uid = user.uid;

  var CurrentUser = { uid: uid, email: email, store_id: store_id, valid_roles: valid_roles, id: id };
  localStorage.setItem('CurrentUser', JSON.stringify(CurrentUser));
  return true;
}

function setLocalStorageStore(store) {
  localStorage.setItem('CurrentStore', JSON.stringify(store));
  return true;
}

/***/ }),
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(143)(undefined);
// imports


// module
exports.push([module.i, ".loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em; }\n\n.loader {\n  margin: 60px auto;\n  font-size: 10px;\n  position: fixed;\n  top: 40%;\n  left: calc(50% - 60px);\n  z-index: 10;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(0, 0, 51, 0.2);\n  border-right: 1.1em solid rgba(0, 0, 51, 0.2);\n  border-bottom: 1.1em solid rgba(0, 0, 51, 0.2);\n  border-left: 1.1em solid #000033;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear; }\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.empty-div {\n  display: none; }\n", ""]);

// exports


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(143)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,600);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alegreya);", ""]);

// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\nhtml,\nbody,\n#root {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\na {\n  font-family: Raleway;\n  font-weight: normal;\n  color: #000033;\n  text-decoration: none; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: Alegreya;\n  color: #000033;\n  letter-spacing: 0.5px; }\n\nh3 {\n  font-size: 16px; }\n\nul {\n  list-style-type: none; }\n\nli {\n  color: #000033;\n  font-family: Raleway;\n  margin: auto;\n  line-height: 1.8; }\n\nh1 {\n  margin: 0; }\n\n.flex-container, .container, .section-header, .shipping-button-container, .table-row, .archive-headers-row, .archive-row, .order-row, .order-headers-row, .order-headers-row-no-select, .tailor-headers-row, .tailor-data-row, .report-headers-row, .report-row, .user-headers-row, .user-data-row, .store-boxes, .type-heading, .measurement-buttons-container, .new-order-content, .alteration-select, .archive-link, .order-state-row, .order-row-link-no-select, .order-row-link, .order-data-headers-container, .order-headers-container-no-select, .tailor-link, .report-row-link, .user-link {\n  display: flex;\n  flex-wrap: wrap; }\n\n.content {\n  flex: 1 0 25%;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch; }\n\n.hoverable, nav li:hover, .table-link:hover, .archive-link:hover, .order-row-link-no-select:hover, .order-row-link:hover, .tailor-link:hover, .report-row-link:hover, .user-link:hover, .garment-card, .alteration-card, .modal-eye, .close-modal, .remove-from-cart-button, .cart-item {\n  background-color: rgba(0, 0, 51, 0.1);\n  cursor: pointer; }\n\n.container {\n  width: 100%;\n  height: 100%; }\n\n.backLink {\n  display: inline-block;\n  position: absolute;\n  font-size: 20px;\n  font-family: Raleway;\n  text-decoration: underline;\n  margin-left: 90px;\n  margin-top: 50px; }\n\n.flatcard, .card, .order-card, .garment-card, .alteration-card {\n  background: #fff;\n  border-radius: 5px;\n  margin: 50px 0;\n  position: relative;\n  width: 80%;\n  padding: 25px;\n  border: 2px solid #000033; }\n\n.card {\n  border: 1px solid #000033;\n  background: #fff;\n  border-radius: 2px;\n  margin: 50px 0;\n  position: relative;\n  width: 80%;\n  padding: 25px;\n  overflow: scroll;\n  /*box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);*/\n  /*box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);*/ }\n\n.pos-rel {\n  position: relative; }\n\n.unclickable, .disabled-alt, .disabled-alt * {\n  /*pointer-events: none;*/\n  cursor: not-allowed; }\n\n.full-width {\n  width: 100%; }\n\n.checkbox-container {\n  background-color: #000033;\n  display: inline; }\n\ninput[type='submit']:disabled {\n  cursor: not-allowed; }\n\n.link {\n  color: white;\n  font-family: Alegreya; }\n\n.blue-link {\n  color: #000033;\n  font-family: Raleway;\n  font-size: 16px;\n  font-weight: normal;\n  padding-bottom: 20px;\n  padding-left: 20px; }\n\n.blue-link a:hover {\n  text-decoration: underline; }\n\n.text-area {\n  margin-top: 10px;\n  border-radius: 5px;\n  border: 1px solid #000033;\n  padding-left: 10px;\n  padding-top: 10px; }\n\n.ReactModal__Overlay.ReactModal__Overlay--after-open {\n  z-index: 100; }\n\n.red {\n  color: #de0421; }\n\n.navbar {\n  width: 175px;\n  margin: 0;\n  font-family: Raleway;\n  border-right: 1px solid #000033;\n  height: 100%;\n  position: relative; }\n\ndiv.navbar-logo {\n  border-bottom: 1px solid #000033;\n  height: 93px; }\n\n.navbar-logo > h5 {\n  margin-left: 36px;\n  margin-top: 8px;\n  margin-bottom: 20px;\n  font-family: Raleway;\n  letter-spacing: 2px;\n  font-size: 11px; }\n\n.navbar-logo > .logo {\n  width: 125px;\n  margin-left: 25px;\n  margin-top: 20px; }\n\nnav ul {\n  padding-left: 0px; }\n\nnav img {\n  display: inline-block;\n  width: 25px;\n  padding-right: 20px;\n  vertical-align: -9px; }\n\nnav li {\n  list-style: none;\n  height: 45px; }\n\nnav li:hover {\n  background-color: lightgrey; }\n\nnav li a {\n  padding-left: 9%;\n  display: inline-block;\n  width: 91%;\n  line-height: 40px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n  color: #000033; }\n\n.hamburger {\n  width: 50px;\n  height: 50px;\n  padding-top: 20px;\n  padding-left: 10px;\n  position: absolute;\n  z-index: 1; }\n\n.hamburger:hover {\n  cursor: pointer; }\n\n.orders-search {\n  width: 90%;\n  height: 30px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 25px;\n  text-indent: 35px;\n  border-radius: 20px;\n  border: none;\n  background-color: lightgrey;\n  background-image: url(" + __webpack_require__(339) + ");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  font-size: 12px;\n  background-position: 5px 50%; }\n\n.navbar-links-li {\n  height: 45px;\n  padding-top: 2px; }\n\n.signout-link {\n  position: absolute;\n  bottom: 5px;\n  width: 100%; }\n\n.close-menu-link {\n  font-size: 11px;\n  line-height: normal;\n  padding: 0;\n  display: inline-block;\n  float: right;\n  width: 100%;\n  padding-top: 10px; }\n\n.close-menu-link > p {\n  display: inline;\n  margin: 0px;\n  padding-left: 50px;\n  line-height: 2; }\n\n.triangle {\n  display: inline;\n  width: 0;\n  height: 0;\n  border-top: 22px solid transparent;\n  border-right: 25px solid #000033;\n  border-bottom: 22px solid transparent;\n  float: right;\n  margin-top: -10px; }\n\n.form-input {\n  border: none;\n  background-color: rgba(216, 237, 252, 0.5);\n  margin-top: 10px;\n  height: 40px;\n  width: 360px;\n  padding-left: 15px;\n  border-radius: 5px;\n  border: 1px solid #000033; }\n\n.form-label {\n  padding-top: 0px;\n  color: #000033;\n  font-family: Alegreya; }\n\ninput[type='submit']:disabled {\n  opacity: 0.65;\n  cursor: not-allowed; }\n\n.button, input[type='submit'], .pink-button, .standard-button, .signin-button, .long-button, .short-button, .shipping-button, .print-label-button, .messenger-button, .tiny-button {\n  color: white;\n  margin-top: 15px;\n  height: 40px;\n  border-radius: 5px;\n  font-size: 12px;\n  cursor: pointer;\n  font-weight: bold;\n  height: 50px; }\n\n.pink-button {\n  background-color: pink;\n  border: 2px hotpink solid;\n  color: #000033;\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.standard-button, .signin-button {\n  background-color: #000033;\n  width: 200px; }\n\n.long-button, .pink-button {\n  width: 365px; }\n\n.short-button, .shipping-button, .print-label-button, .messenger-button {\n  background-color: #000033;\n  width: 150px; }\n\n.tiny-button {\n  background-color: #000033;\n  text-align: center;\n  width: 80px;\n  padding: 0; }\n\n.shipping-button, .print-label-button, .messenger-button {\n  margin: 20px; }\n\n.messenger-button {\n  background-color: #de0421; }\n\n.shipping-button-container {\n  justify-content: center; }\n\n.shipping-button-container:first-child {\n  margin-top: 10px; }\n\n.table-row-container, .table-headers-container, .archive-headers-container, .tailor-headers-container, .user-headers-container, .archive-container, .tailor-container, .report-row-container, .user-container {\n  padding-left: 5%;\n  padding-right: 5%; }\n\n.table-cell, .table-header-cell, .archive-header-cell, .order-header-cell-no-select, .order-select-header-cell, .order-data-header-cell, .order-data-headers-container, .order-headers-container-no-select, .tailor-header-cell, .report-header-cell, .user-header-cell, .archive-link, .archive-order-cell, .order-row-link-no-select, .order-row-link, .order-row-cell, .order-cell-no-select, .order-select-cell, .order-data-cell, .tailor-link, .tailor-data-cell, .report-row-link, .report-cell, .user-link, .user-data-cell {\n  text-align: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 15%; }\n\n.full-width-text-row, .loading-orders, .no-orders {\n  padding-top: 2%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 100%;\n  text-align: center;\n  font-family: Alegreya; }\n\n.table-headers-container, .archive-headers-container, .tailor-headers-container, .user-headers-container {\n  padding-left: 2%;\n  padding-right: 2%; }\n\n.table-header-cell, .archive-header-cell, .order-header-cell-no-select, .order-select-header-cell, .order-data-header-cell, .order-data-headers-container, .order-headers-container-no-select, .tailor-header-cell, .report-header-cell, .user-header-cell {\n  text-transform: uppercase; }\n\n.row-border-bottom {\n  border-bottom: 1px solid gray; }\n\n.row-border-top, .break-row, .archive-header-break-row, .archive-break-row, .order-header-break-row, .order-data-break-row, .tailor-header-break-row, .tailor-break-row, .report-header-break-row, .report-break-row, .user-header-break-row, .user-break-row {\n  border-top: 1px solid gray; }\n\n.break-row, .archive-header-break-row, .archive-break-row, .order-header-break-row, .order-data-break-row, .tailor-header-break-row, .tailor-break-row, .report-header-break-row, .report-break-row, .user-header-break-row, .user-break-row {\n  flex-basis: 1 1 100%; }\n\n.form-container {\n  width: 30px;\n  min-width: 400px;\n  /*margin: 10% auto; */\n  margin: 110px auto; }\n\n.sign-in-logo > .logo {\n  width: 200px; }\n\n.sign-in-logo > h5 {\n  font-family: Alegreya;\n  letter-spacing: 0.5px;\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-size: 24px; }\n\n.forgot-password {\n  color: #000033;\n  margin-left: 20px; }\n\n.section-header {\n  background-color: #000033;\n  border-bottom: 1px solid #000033;\n  height: 93px;\n  line-height: 93px;\n  width: 100%; }\n\n.section-header > h2 {\n  color: white;\n  padding-left: 50px;\n  margin-top: 0;\n  width: 60%;\n  font-weight: normal;\n  font-family: Alegreya;\n  letter-spacing: 0.5px;\n  font-size: 21px; }\n\n.section-header a {\n  color: white;\n  font-family: Alegreya; }\n\n.cart-ribbon {\n  background-color: #de0421;\n  width: 75px;\n  margin-left: auto;\n  margin-right: 10%;\n  height: 94px; }\n\n.cart-ribbon-triangle {\n  width: 0;\n  height: 0;\n  border-left: 37px solid transparent;\n  border-right: 38px solid transparent;\n  border-top: 26px solid #de0421;\n  position: relative;\n  z-index: 10; }\n\n.cart-ribbon-sign {\n  color: white;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 96px;\n  font-weight: 900;\n  font-family: Raleway;\n  -webkit-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.rotate {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n/*.rotate0 {\n  -webkit-transform:rotate(0deg);\n  transform:rotate(0deg);\n}\n\n.rotate45 {\n  -webkit-transform:rotate(45deg);\n  transform:rotate(45deg);\n}*/\n@media screen and (max-width: 981px) {\n  .section-header > h2 {\n    padding-left: 80px; } }\n\n@media screen and (max-width: 1039px) {\n  .section-header > h2 {\n    max-width: 418px; } }\n\n.greeting {\n  font-weight: bold;\n  letter-spacing: .5px;\n  text-align: center;\n  max-width: 90%;\n  margin: 0 auto; }\n\nh2.greeting {\n  font-size: 45px;\n  margin-bottom: 0;\n  margin-top: 60px; }\n\np.greeting {\n  font-size: 18px;\n  font-family: Raleway;\n  margin-top: 10px;\n  color: #000033; }\n\n.store-boxes {\n  justify-content: center; }\n\n.order-card {\n  padding: 0;\n  flex: 1 0 25%;\n  border: 1px solid #000033;\n  width: 150px;\n  height: 300px;\n  margin: 5px 40px;\n  border-radius: 3px;\n  margin-top: 60px; }\n\n.order-card-icon {\n  max-width: 45px;\n  display: block;\n  margin: 0 auto;\n  padding-top: 35px; }\n\n.order-card-text {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 15px; }\n\n.order-card-call {\n  text-decoration: underline;\n  margin-top: 29px;\n  font-weight: bold; }\n\n.order-card-count {\n  font-size: 45px;\n  font-family: Alegreya;\n  margin: 0;\n  padding-top: 30px;\n  padding-bottom: 15px; }\n\n.order-card-type {\n  line-height: 0; }\n\n.late-orders {\n  color: red; }\n\n.late-exclamation {\n  color: red;\n  font-family: Alegreya;\n  font-size: 48px;\n  font-weight: bold;\n  line-height: 40px; }\n\n.order-form {\n  padding-left: 90px; }\n\n.order-show {\n  padding-left: 80px; }\n\n.item-type-image {\n  width: 75px;\n  height: 75px;\n  padding-right: 20px; }\n\n.type-heading {\n  justify-content: flex-start; }\n\n.notes {\n  padding: 20px;\n  padding-top: 0;\n  font-family: Raleway; }\n\n.type-list {\n  margin-left: 40px;\n  list-style: unset;\n  line-height: 2; }\n\n.notes-form > textarea {\n  width: 355px; }\n\n.measurements-image {\n  display: block;\n  margin: 0;\n  width: 500px; }\n\n.measurement-buttons-container {\n  justify-content: space-around;\n  max-width: 500px;\n  margin-bottom: 50px; }\n\n.customer-measurements {\n  position: relative; }\n\n.input-measurement {\n  width: 40px;\n  height: 25px;\n  line-height: 25px;\n  text-align: center;\n  border: 3px solid pink;\n  border-radius: 5px;\n  position: absolute; }\n\n.chest_bust {\n  top: 271px;\n  left: 178px; }\n\n.upper_torso {\n  top: 350px;\n  left: 178px; }\n\n.elbow {\n  top: 277px;\n  left: 39px; }\n\n.sleeve_length {\n  top: 257px;\n  left: 40px; }\n\n.waist {\n  top: 430px;\n  left: 178px; }\n\n.shoulder_to_waist {\n  top: 205px;\n  left: 262px; }\n\n.hips {\n  top: 510px;\n  left: 350px; }\n\n.pant_length {\n  top: 580px;\n  left: 100px; }\n\n.thigh {\n  top: 665px;\n  left: 168px; }\n\n.knee {\n  top: 770px;\n  left: 168px; }\n\n.calf {\n  top: 880px;\n  left: 168px; }\n\n.ankle {\n  top: 1000px;\n  left: 168px; }\n\n.back_width {\n  top: 195px;\n  left: 225px; }\n\n.bicep {\n  top: 226px;\n  left: 66px; }\n\n.forearm {\n  top: 329px;\n  left: 16px; }\n\n.inseam {\n  top: 900px;\n  left: 226px; }\n\n.print {\n  visibility: hidden;\n  display: none;\n  margin-top: 20px;\n  margin-left: 20px; }\n\n@media print {\n  body * {\n    visibility: hidden; }\n  .print,\n  .print * {\n    visibility: visible;\n    display: block; }\n  .print {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block; } }\n\n.packing-slip-info {\n  font-family: arial; }\n\n.packing-slip-info h3,\n.packing-slip-info p,\n.packing-slip-info-img,\n.print-alteration {\n  margin-left: -30px;\n  margin-right: 30px; }\n\n.packing-slip-info h3 {\n  font-family: Alegreya;\n  font-size: 27px;\n  margin-bottom: 20px;\n  padding-top: 20px;\n  margin-left: 10px;\n  font-weight: bold; }\n\n.packing-slip-info p {\n  font-size: 10px;\n  margin-left: 10px;\n  font-family: arial; }\n\n.packing-slip-info-orderid {\n  text-align: center;\n  font-weight: bold; }\n\n.packing-slip-label {\n  display: block;\n  width: 100%;\n  margin: auto; }\n\n.print-alteration-li {\n  font-family: arial;\n  font-size: 10px;\n  line-height: 1.2; }\n\n.print-alteration-ul {\n  font-family: arial;\n  list-style-type: none;\n  padding-left: 0;\n  text-align: center;\n  margin-right: 30px; }\n\n.packing-slip-info-img {\n  display: block;\n  width: 100px;\n  margin: 20px auto;\n  padding-right: 30px; }\n\n.print-instructions {\n  width: 90%; }\n\n.print-instructions > h2 {\n  font-size: 20px; }\n\n.print-instructions > h4 {\n  font-size: 14px; }\n\n.print .card {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  margin: 20px;\n  padding-right: 10px; }\n\n.print .card .item-type-image {\n  width: 50px;\n  height: 50px;\n  padding-right: 0px; }\n\n.print .card ul {\n  padding-left: 10px;\n  margin-bottom: 0px; }\n\n.print .card ul li {\n  font-size: 10px; }\n\n.print h2 {\n  font-size: 15px; }\n\n.print h3 {\n  font-size: 12px; }\n\n.print h4 {\n  font-size: 10px; }\n\n.print .card .type-heading h3,\n.print .card .type-heading ul,\n.print .card .type-heading li {\n  display: inline; }\n\n.new-order-content {\n  margin-left: 50px;\n  justify-content: flex-start;\n  margin-bottom: 50px; }\n\n.stage-section {\n  margin-right: 30px; }\n\n.alteration-select {\n  max-width: 570px;\n  justify-content: flex-start; }\n\n.select-garment {\n  max-width: 675px; }\n\n.garment-image {\n  height: 90px; }\n\n.garment-card, .alteration-card {\n  width: 150px;\n  height: 150px;\n  text-align: center;\n  display: inline-block;\n  overflow: unset;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 20px;\n  margin-top: 20px; }\n\n.garment-card > h2, .alteration-card > h2 {\n  margin-top: 5px;\n  margin-bottom: 30px;\n  font-family: Raleway;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center; }\n\n.alteration-card {\n  width: 180px;\n  height: 60px;\n  margin-bottom: 5px; }\n\n.alt-price-info {\n  padding-right: 15px;\n  margin-top: 12px; }\n\n.modal-eye {\n  background-color: white;\n  width: 35px; }\n\n.how-to-pin-image {\n  height: 460px;\n  display: block;\n  margin: 0 auto; }\n\n.close-modal {\n  background-color: white;\n  font-family: Raleway;\n  color: #000033;\n  font-weight: bold; }\n\n.how-to-pin-modal-container {\n  display: inline; }\n\n.order-details {\n  max-width: 325px; }\n\n.order-details-input {\n  width: 264px; }\n\n.customer-agrees-prompt {\n  font-size: 20px;\n  word-wrap: break-word;\n  font-family: Alegreya;\n  color: #000033;\n  font-weight: bold;\n  line-height: 1.5; }\n\n.order-details-notes-textarea {\n  background-color: rgba(216, 237, 252, 0.5);\n  margin-top: 10px;\n  height: 107px;\n  width: calc(100% - 30px);\n  border-radius: 5px;\n  border: 1px solid #000033;\n  padding-left: 10px; }\n\n.disabled-alt {\n  opacity: 0.3; }\n\n.selected-alt {\n  background-color: #dcdcdc;\n  cursor: pointer; }\n\n.selected-alt * {\n  background-color: #dcdcdc;\n  cursor: pointer; }\n\n.price-how-to-pin-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 15px;\n  background-color: white;\n  cursor: pointer; }\n\n.price-how-to-pin-container * {\n  background-color: white;\n  cursor: pointer; }\n\n.cart-container {\n  min-width: 275px;\n  max-width: 400px;\n  border: 2px solid #000033;\n  border-radius: 5px;\n  padding: 5px;\n  margin-top: 85px;\n  height: max-content;\n  float: right; }\n\n.cart-icon {\n  width: 40px;\n  padding-right: 20px;\n  vertical-align: -4px; }\n\n.cart-title {\n  text-align: center;\n  font-family: Raleway; }\n\n.remove-from-cart-button {\n  background-color: white;\n  float: right;\n  padding-right: 10px;\n  font-size: 20px;\n  color: red;\n  font-weight: bold;\n  font-family: arial; }\n\n.cart-alteration {\n  padding-left: 10px; }\n\n/*\n.cart-buttons {\n  @extend .flex-container;\n  justify-content: space-between;\n}\n*/\n.cart-buttons-container {\n  display: flex;\n  justify-content: space-around; }\n\n.cart-buttons > input {\n  margin-left: 5px;\n  margin-right: 105px;\n  margin-bottom: 50px; }\n\n.cart-line {\n  color: #000033;\n  background-color: #000033;\n  height: 2px;\n  width: 90%; }\n\n.alteration-hr {\n  color: #000033;\n  background-color: #000033;\n  width: 90%; }\n\n.cart-item {\n  background-color: white; }\n\n.cart-item-title {\n  padding-right: 180px; }\n\n.customer-agrees-prompt {\n  font-family: Raleway;\n  margin: 15px;\n  font-size: 12px;\n  color: #de0421;\n  font-weight: bold; }\n\n.checkout-container {\n  margin-left: 87px; }\n\n.order-completed-container {\n  @extends margin-left; }\n\n.detail-and-customer {\n  max-width: 48%;\n  display: inline-block;\n  margin-left: auto;\n  float: right; }\n\n.new-order.list-container {\n  max-width: 48%;\n  display: inline-block; }\n\n.checkbox-label {\n  display: inline-block;\n  color: #000033;\n  cursor: pointer;\n  position: relative; }\n\nlabel span {\n  display: inline-block;\n  position: relative;\n  background-color: transparent;\n  width: 25px;\n  height: 25px;\n  transform-origin: center;\n  border: 2px solid #000033;\n  border-radius: 50%;\n  vertical-align: -6px;\n  margin-right: 10px;\n  transition: background-color 150ms 200ms, transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89); }\n\nlabel span:before {\n  content: '';\n  width: 0px;\n  height: 2px;\n  border-radius: 2px;\n  background: #000033;\n  position: absolute;\n  transform: rotate(45deg);\n  top: 13px;\n  left: 9px;\n  transition: width 50ms ease 50ms;\n  transform-origin: 0% 0%; }\n\nlabel span:after {\n  content: '';\n  width: 0;\n  height: 2px;\n  border-radius: 2px;\n  background: #000033;\n  position: absolute;\n  transform: rotate(305deg);\n  top: 16px;\n  left: 10px;\n  transition: width 50ms ease;\n  transform-origin: 0% 0%; }\n\nlabel:hover span:before {\n  width: 5px;\n  transition: width 100ms ease; }\n\nlabel:hover span:after {\n  width: 10px;\n  transition: width 150ms ease 100ms; }\n\ninput[type='checkbox'] {\n  display: none; }\n\ninput[type='checkbox']:checked + label span {\n  transform: scale(1.08); }\n\ninput[type='checkbox']:checked + label span:after {\n  width: 10px;\n  background: #000033;\n  transition: width 150ms ease 100ms; }\n\ninput[type='checkbox']:checked + label span:before {\n  width: 5px;\n  background: #000033;\n  transition: width 150ms ease 100ms; }\n\ninput[type='checkbox']:checked + label:hover span {\n  transform: scale(1.16); }\n\ninput[type='checkbox']:checked + label:hover span:after {\n  width: 10px;\n  background: #000033;\n  transition: width 150ms ease 100ms; }\n\ninput[type='checkbox']:checked + label:hover span:before {\n  width: 5px;\n  background: #000033;\n  transition: width 150ms ease 100ms; }\n\n.growl {\n  z-index: 100000;\n  position: fixed;\n  top: 5px;\n  left: 236px;\n  height: 120px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  min-width: 500px;\n  background-color: #dcdcdc; }\n\n.growl-header {\n  background-color: #f5f5f5;\n  height: 35px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  line-height: 1px;\n  display: flex;\n  align-items: center; }\n\n.growl-title {\n  display: inline-block;\n  font-family: Raleway;\n  padding-left: 20px;\n  text-transform: uppercase; }\n\n.growl-body {\n  display: flex;\n  align-items: center;\n  position: absolute; }\n\n.growl-text {\n  padding-top: 15px;\n  font-family: Raleway;\n  padding-left: 20px; }\n\n.notice-growl {\n  color: #000033; }\n\n.warning-growl {\n  color: #de0421; }\n\n.success-growl {\n  color: green; }\n\n@media screen and (min-width: 981px) {\n  .growl {\n    left: 50%;\n    margin-left: -175px; } }\n\n.empty-div {\n  display: none; }\n\n.edit-account {\n  margin-top: 50px; }\n\n.archive-headers-row {\n  padding-top: 10px; }\n\n.archive-header-cell {\n  flex-basis: 25%; }\n\n.archive-header-break-row {\n  width: 95%; }\n\n.archive-link {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 100%; }\n\n.archive-break-row {\n  width: 100%; }\n\n.archive-headers-container {\n  padding-left: 6%;\n  padding-right: 8%; }\n\n.archive-container {\n  padding-left: 6%;\n  padding-right: 8%; }\n\n.archive-order-cell {\n  flex-basis: 25%; }\n\n.orders, .archive {\n  color: #000033;\n  width: 100%; }\n\n.order-state-container {\n  background: rgba(0, 0, 51, 0.1); }\n\n.order-state-tab {\n  flex: 1 0 20%;\n  text-align: center;\n  padding-top: 2%;\n  height: 5%; }\n\n.order-state-tab.selected {\n  background: white;\n  -webkit-clip-path: polygon(20% 0, 0 100%, 100% 100%, 80% 0);\n  clip-path: polygon(20% 0, 0 100%, 100% 100%, 80% 0); }\n\n.order-state-tab.selected:nth-child(1) {\n  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 80% 0);\n  clip-path: polygon(0 0, 0 100%, 100% 100%, 80% 0); }\n\n.order-state-tab.selected:last-child {\n  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 80% 0);\n  clip-path: polygon(20% 0, 0 100%, 100% 100%, 100% 0); }\n\n.order-state-tab h3 {\n  font-family: Raleway;\n  text-transform: uppercase;\n  font-weight: lighter; }\n\n.late-orders h3 {\n  color: #de0421; }\n\n.break-row, .archive-header-break-row, .archive-break-row, .order-header-break-row, .order-data-break-row, .tailor-header-break-row, .tailor-break-row, .report-header-break-row, .report-break-row, .user-header-break-row, .user-break-row {\n  width: 95%;\n  margin: 0 auto;\n  border-top: 1px solid gray; }\n\n.order-data-break-row {\n  width: 90%; }\n\n.order-data-container {\n  width: 100%; }\n\n.order-headers {\n  width: 100%; }\n\n.order-headers-row-no-select {\n  flex-basis: 100%; }\n\n.order-row-link-no-select {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 100%; }\n\n.order-cell-no-select {\n  flex-basis: 25%; }\n\n.order-header-cell-no-select {\n  flex-basis: 25%; }\n\n.order-headers-row, .order-headers-row-no-select {\n  flex-basis: 95%;\n  font-family: arial;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase; }\n\n.order-row-link {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 80%; }\n\n.order-select-header-cell {\n  flex-basis: 15%;\n  text-align: right; }\n\n.order-data-header-cell {\n  flex-basis: 25%; }\n\n.order-data-headers-container {\n  flex-basis: 80%; }\n\n.order-headers-container-no-select {\n  flex-basis: 100%; }\n\n.order-row-cell, .order-cell-no-select, .order-select-cell, .order-data-cell {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.order-select-cell {\n  text-align: right;\n  flex-basis: 15%;\n  padding-top: 15px;\n  padding-bottom: 12px; }\n\n.order-data-cell {\n  flex-basis: 25%; }\n\n.loading-orders {\n  font-style: italic; }\n\n.tailors {\n  color: #000033;\n  width: 100%; }\n\n.tailor-headers-row {\n  padding-top: 10px; }\n\n.tailor-header-cell {\n  flex-basis: 25%; }\n\n.tailor-header-break-row {\n  width: 95%; }\n\n.tailor-link {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 100%; }\n\n.tailor-break-row {\n  width: 100%; }\n\n.tailor-headers-container {\n  padding-left: 6%;\n  padding-right: 8%; }\n\n.tailor-container {\n  padding-left: 6%;\n  padding-right: 8%; }\n\n.tailor-data-cell {\n  flex-basis: 25%; }\n\n.report-headers-row {\n  padding-top: 10px; }\n\n.report-header-cell {\n  flex-basis: 18.5%; }\n\n.report-header-break-row {\n  width: 85%; }\n\n.reports-container {\n  width: 100%;\n  padding-left: 3%;\n  padding-right: 5%; }\n\n.report-row-link {\n  border-bottom: 1px solid gray;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 85%; }\n\n.report-cell {\n  flex-basis: 20%;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.users {\n  color: #000033;\n  width: 100%; }\n\n.user-headers-row {\n  padding-top: 10px; }\n\n.user-header-cell {\n  flex-basis: 25%; }\n\n.user-header-break-row {\n  width: 95%; }\n\n.user-link {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 100%; }\n\n.user-break-row {\n  width: 100%; }\n\n.user-headers-container {\n  padding-left: 0%;\n  padding-right: 0%; }\n\n.user-container {\n  padding-left: 0%;\n  padding-right: 0%; }\n\n.user-data-cell {\n  flex-basis: 25%;\n  word-break: break-all; }\n", ""]);

// exports


/***/ }),
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(18);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(23);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(82);

var _PathUtils = __webpack_require__(51);

var _createTransitionManager = __webpack_require__(83);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(148);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(18);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(23);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(82);

var _PathUtils = __webpack_require__(51);

var _createTransitionManager = __webpack_require__(83);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(148);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(18);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(51);

var _LocationUtils = __webpack_require__(82);

var _createTransitionManager = __webpack_require__(83);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(149);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* canUseDOM */], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsHistory */])();
  var needsHashChangeListener = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsPopStateOnHashChange */])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripTrailingSlash */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["d" /* addLeadingSlash */])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripBasename */])(path, basename);

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* isExtraneousPopstateEvent */])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* addEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createBrowserHistory);

/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(149);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* stripLeadingSlash */])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* stripLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["d" /* addLeadingSlash */]
  },
  slash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["d" /* addLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["d" /* addLeadingSlash */]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* canUseDOM */], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* supportsGoWithoutReloadUsingHash */])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripTrailingSlash */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["d" /* addLeadingSlash */])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripBasename */])(path, basename);

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
  };

  var transitionManager = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createHashHistory);

/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(84);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createMemoryHistory);

/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(488);
/* unused harmony reexport createBrowserHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(489);
/* unused harmony reexport createHashHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(490);
/* unused harmony reexport createMemoryHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(52);
/* unused harmony reexport parsePath */
/* unused harmony reexport createPath */










/***/ }),
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(53),
    root = __webpack_require__(32);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(53),
    root = __webpack_require__(32);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(53),
    root = __webpack_require__(32);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(53),
    root = __webpack_require__(32);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(53),
    root = __webpack_require__(32);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(63),
    isObjectLike = __webpack_require__(87);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(159),
    isMasked = __webpack_require__(536),
    isObject = __webpack_require__(161),
    toSource = __webpack_require__(158);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(63),
    isLength = __webpack_require__(160),
    isObjectLike = __webpack_require__(87);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(157),
    nativeKeys = __webpack_require__(537);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 531 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(32);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(155);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(522),
    Map = __webpack_require__(523),
    Promise = __webpack_require__(524),
    Set = __webpack_require__(525),
    WeakMap = __webpack_require__(526),
    baseGetTag = __webpack_require__(63),
    toSource = __webpack_require__(158);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 535 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(532);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(540);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(156);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)(module)))

/***/ }),
/* 539 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 540 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(527),
    isObjectLike = __webpack_require__(87);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 542 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(159),
    isLength = __webpack_require__(160);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(32),
    stubFalse = __webpack_require__(546);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)(module)))

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(529),
    baseUnary = __webpack_require__(531),
    nodeUtil = __webpack_require__(538);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 546 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(110);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),
/* 664 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(110);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),
/* 665 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(673);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),
/* 666 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(321);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref.ariaCurrent,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        'aria-current': isActive && ariaCurrent
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  ariaCurrent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['page', 'step', 'location', 'true'])
};

NavLink.defaultProps = {
  activeClassName: 'active',
  ariaCurrent: 'true'
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 667 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(674);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),
/* 668 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(675);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),
/* 669 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(676);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),
/* 670 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(677);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),
/* 671 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(112);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),
/* 672 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(678);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),
/* 673 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(111);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
  };

  MemoryRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  initialIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

/***/ }),
/* 674 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Prompt> outside a <Router>');

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Prompt.propTypes = {
  when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Prompt);

/***/ }),
/* 675 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(491);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Redirect> outside a <Router>');

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_history__["a" /* createLocation */])(prevProps.to);
    var nextTo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_history__["a" /* createLocation */])(this.props.to);

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_history__["b" /* locationsAreEqual */])(prevTo, nextTo)) {
      __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, 'You tried to redirect to the same route you\'re currently on: ' + ('"' + nextTo.pathname + nextTo.search + '"'));
      return;
    }

    this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;


    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Redirect.propTypes = {
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),
/* 676 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Router__ = __webpack_require__(111);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;


  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["parsePath"])(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["createPath"])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Router__["a" /* default */], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

StaticRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  context: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

/***/ }),
/* 677 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(112);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Switch> outside a <Router>');
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
      if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          sensitive = _element$props.sensitive,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
      }
    });

    return match ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Switch.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 678 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(323);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], { render: function render(routeComponentProps) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withRouter);

/***/ }),
/* 679 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(679)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 707 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(463);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(338)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./loader.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./loader.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 708 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(464);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(338)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 715 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi8AAAJmCAYAAAHjhFB2AAAACXBIWXMAAAsTAAALEwEAmpwYAAA59GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNy0wMi0yMVQyMjozNzozNy0wNTowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE3LTAyLTIxVDIyOjM5OjA3LTA1OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNy0wMi0yMVQyMjozOTowNy0wNTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDoxZGI3NzE2Zi0wOTNkLTQzMDYtYTJiOC02OWEyMGNlMTg4N2Q8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3YTBiMDliMi0zOTEyLTExN2EtYWJiYi04ZjE2ZTk2MTgyYWM8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo3ZGQzZjZhNC1kMzhlLTQxZjEtOWMzMy1iMzM0MzEyYzdiNTQ8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6N2RkM2Y2YTQtZDM4ZS00MWYxLTljMzMtYjMzNDMxMmM3YjU0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTAyLTIxVDIyOjM3OjM3LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MWRiNzcxNmYtMDkzZC00MzA2LWEyYjgtNjlhMjBjZTE4ODdkPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTAyLTIxVDIyOjM5OjA3LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NTU5PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjYxNDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+H7u/4AAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAiC0lEQVR42uycW47CMAxF44x3NPtfAktCno8BUZBa8vAzsSXED22d0+sbJ60AIirPAIBSfn6LYVApBbqOuN94E3jwqMVH0ONTDt+mUZ1AuQJlEugMyNlvYAcwNHEMrFhKHOVBq4EhZ4DNS4kUzg2RwGhJHqIoJjwQCTA2UDg79UMXjYuphLiUhYsCGV97TYIh50CmZy9cUCUsgHADIEOAcCMgXf6DAXxEMpdT9eBmKmkGhCcJ0yZATvPCky5SAo5/IIcuGi8kBUzJWvtIa15v5YQNjj0DKELZ0OisNAIohI9c5YAdA4AG/wkP5Bk9W5v0cSEIWjZNOYyulcC5sTb5iOTqGlYoG04wkabf4g1MmLLRBgMKygEphVahEqKBzrcXCEiWrYbHSC4vxNSo8Yj2W/8j2o94N1/O5YXKbKc9K80sL1Snf6vp+sp/TIF46WNe2xv32//3a7PI9FWzyjAw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"

/***/ })
],[419]);
//# sourceMappingURL=bundle.efc42f9474c5b7bcf63b.js.map