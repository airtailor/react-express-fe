webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSignIn = undefined;
exports.validateToken = validateToken;
exports.signOutCurrentUser = signOutCurrentUser;
exports.getStoreOrders = getStoreOrders;
exports.getCurrentOrder = getCurrentOrder;
exports.getCurrentStore = getCurrentStore;
exports.updateOrder = updateOrder;
exports.alertCustomersPickup = alertCustomersPickup;
exports.updateCustomer = updateCustomer;
exports.createStore = createStore;
exports.getTailorList = getTailorList;
exports.updateStore = updateStore;
exports.getCompanies = getCompanies;
exports.createShipment = createShipment;
exports.setShipmentType = setShipmentType;
exports.getCustomerMeasurements = getCustomerMeasurements;
exports.createCustomerMeasurements = createCustomerMeasurements;
exports.getNewOrders = getNewOrders;
exports.getOrderAndMessagesCount = getOrderAndMessagesCount;
exports.getConversations = getConversations;
exports.getMessages = getMessages;
exports.createMessage = createMessage;
exports.updateMessage = updateMessage;
exports.findOrCreateCustomer = findOrCreateCustomer;
exports.submitOrder = submitOrder;
exports.updatePassword = updatePassword;
exports.searchOrders = searchOrders;
exports.getArchivedOrders = getArchivedOrders;
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
exports.updateCartCustomerInfo = updateCartCustomerInfo;
exports.removeGarmentFromCart = removeGarmentFromCart;
exports.addGarmentToCart = addGarmentToCart;
exports.setMessages = setMessages;
exports.setConversations = setConversations;
exports.setNewOrders = setNewOrders;
exports.setCustomerMeasurements = setCustomerMeasurements;
exports.setCompanyList = setCompanyList;
exports.setTailorList = setTailorList;
exports.setCurrentUser = setCurrentUser;
exports.setCurrentStore = setCurrentStore;
exports.setStoreOrders = setStoreOrders;
exports.setCurrentOrder = setCurrentOrder;
exports.setItemTypes = setItemTypes;

var _axios = __webpack_require__(46);

var _axios2 = _interopRequireDefault(_axios);

var _setAuthToken = __webpack_require__(133);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _setLocalStorage = __webpack_require__(451);

var _constants = __webpack_require__(10);

var _format = __webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var setTokens = function setTokens(res) {
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
  //console.log('new token', AirTailorTokens.accessToken)
};

var resetTokens = function resetTokens() {
  delete localStorage.AirTailorTokens;
  delete localStorage.CurrentUser;
  delete localStorage.CurrentStore;
};

var userSignIn = exports.userSignIn = function userSignIn(email, password) {
  var url = _constants.expressApi + '/sign_in';
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
            roles = dataRes.roles,
            uid = dataRes.uid;

        setTokens(res);
        dispatch(setUserRole(roles[0].name));
        (0, _setLocalStorage.setLocalStorageUser)(dataRes);

        // right now, the code assumes that a user has a single role, but it's
        // written to work with multiple roles if/when that becomes necessary.
        dispatch(setCurrentUser({ id: id, email: _email, store_id: store_id, roles: roles }));
        return { success: true };
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
};

function validateToken() {
  var url = _constants.expressApi + '/validate_token';
  return _axios2.default.post(url);
}

function signOutCurrentUser() {
  var url = _constants.expressApi + '/sign_out';
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
    return validateToken().then(setTokens).then(function () {
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
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        // if (res.data.headers.client && res.data.headers.uid){
        //   setTokens(res);
        //   setLocalStorageUser(res.data.body);
        // } else {
        //   // console.log('getStoreOrders - no new auth headers');
        // }
        dispatch(setCurrentOrder(res.data.body));
      }).catch(function (err) {
        console.log('error', err);
      });
    });
  };
}

function getCurrentStore(store_id) {
  var url = _constants.expressApi + '/stores/' + store_id;
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.post(url).then(function (res) {
        //if (res.data.headers.client && res.data.headers.uid){
        //  setTokens(res);
        //  setLocalStorageUser(res.data.body);
        //} else {
        //  // console.log('getStoreOrders - no new auth headers');
        //}
        // const {
        //   company_id,
        //   city,
        //   id,
        //   name,
        //   phone,
        //   primary_contact_id,
        //   state_province,
        //   street,
        //   street_two,
        //   zip_code,
        //   active_orders_count,
        //   late_orders_count,
        // } = res.data.body;

        // setLocalStorageStore({
        //   company_id,
        //   city,
        //   id,
        //   name,
        //   phone,
        //   primary_contact_id,
        //   state_province,
        //   street,
        //   street_two,
        //   zip_code,
        //   active_orders_count,
        //   late_orders_count,
        // });

        (0, _setLocalStorage.setLocalStorageStore)(res.data.body);

        // dispatch(
        //   setCurrentStore({
        //     company_id,
        //     city,
        //     id,
        //     name,
        //     phone,
        //     primary_contact_id,
        //     state_province,
        //     street,
        //     street_two,
        //     zip_code,
        //     active_orders_count,
        //     late_orders_count,
        //   })
        // );

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
    return validateToken().then(setTokens).then(function () {
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

function updateCustomer(data) {
  var url = _constants.expressApi + '/customers/' + data.customer.id;
  return validateToken().then(setTokens).then(function (res) {
    return _axios2.default.put(url, data);
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

function getTailorList() {
  var url = _constants.expressApi + '/tailors';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setTailorList(res.data.body));
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function updateStore(data) {
  var url = _constants.expressApi + '/stores/' + data.store.id;
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.put(url, data).then(function (res) {
        if (!res.data.body.errors) {
          dispatch(setCurrentStore(res.data.body));
        }
        return res;
      }).catch(function (err) {
        return res;
      });
    });
  };
}

function getCompanies() {
  var url = _constants.expressApi + '/companies';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
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
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setCustomerMeasurements(res.data.body));
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
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.post(url, data).then(function (res) {
        dispatch(setCustomerMeasurements(res.data.body));
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function getNewOrders() {
  var url = _constants.expressApi + '/new_orders';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setNewOrders(res.data.body));
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function getOrderAndMessagesCount(store_id) {
  return validateToken().then(setTokens).then(function () {
    var url = _constants.expressApi + '/stores/' + store_id + '/orders_and_messages_count';
    return _axios2.default.get(url);
  });
}

function getConversations(store_id) {
  var url = _constants.expressApi + '/stores/' + store_id + '/conversations';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setConversations(res.data.body));
        return res.data.body;
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function getMessages(store_id, conversation_id) {
  var url = _constants.expressApi + '/stores/' + store_id + '/conversations/' + conversation_id;
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.get(url).then(function (res) {
        dispatch(setMessages(res.data.body.messages));
        return res.data.body;
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function createMessage(message) {
  var store_id = message.store_id,
      conversation_id = message.conversation_id;

  var url = _constants.expressApi + '/stores/' + store_id + '/conversations/' + conversation_id + '/messages';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.post(url, { message: message }).then(function (res) {
        dispatch(setMessages(res.data.body.messages));
        return res;
      }).catch(function (err) {
        debugger;
      });
    });
  };
}

function updateMessage(message) {
  var store_id = message.store_id,
      conversation_id = message.conversation_id,
      id = message.id;

  var url = _constants.expressApi + '/stores/' + store_id + '/conversations/' + conversation_id + '/messages/' + id;
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
      return _axios2.default.put(url, { message: message }).then(function (res) {
        dispatch(setMessages(res.data.body.messages));
        return res;
      }).catch(function (err) {
        debugger;
      });
    });
  };
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
      currentStore = props.currentStore;
  var customerInfo = props.cart.customerInfo;

  return function (dispatch) {
    return findOrCreateCustomer((0, _format.removeFalseyValuesFromObject)(customerInfo)).then(function (res) {
      if (res.data.body.errors) {
        return {
          errors: true,
          message: res.data.body.errors.customer[0]
        };
      } else {
        var customer_id = res.data.body.id;
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
      }
    }).catch(function (err) {
      console.log('create order error', err);
    });
  };
}

function updatePassword(data) {
  var url = _constants.expressApi + '/users/update_password';
  return function (dispatch) {
    return validateToken().then(setTokens).then(function () {
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
    return validateToken().then(setTokens).then(function () {
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
    return validateToken().then(setTokens).then(function () {
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

// actions

function resetUserRole() {
  return {
    type: _constants.RESET_USER_ROLE
  };
}

function setUserRole(role) {
  return {
    type: _constants.SET_USER_ROLE,
    role: role
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

function updateCartCustomerInfo(customerInfo) {
  return {
    type: _constants.UPDATE_CART_CUSTOMER_INFO,
    customerInfo: customerInfo
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

function setMessages(messages) {
  return {
    type: _constants.SET_MESSAGES,
    messages: messages
  };
}

function setConversations(conversations) {
  return {
    type: _constants.SET_CONVERSATIONS,
    conversations: conversations
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
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(715);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(716);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(717);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(718);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(719);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(720);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(342);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(721);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(722);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(723);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_11__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(724);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),
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
var SET_COMPANY_LIST = exports.SET_COMPANY_LIST = 'SET_COMPANY_LIST';
var SET_CUSTOMER_MEASUREMENTS = exports.SET_CUSTOMER_MEASUREMENTS = 'SET_CUSTOMER_MEASUREMENTS';
var SET_CURRENT_PRINT = exports.SET_CURRENT_PRINT = 'SET_CURRENT_PRINT';
var SET_NEW_ORDERS = exports.SET_NEW_ORDERS = 'SET_NEW_ORDERS';
var SET_MESSAGES = exports.SET_MESSAGES = 'SET_MESSAGES';
var SET_CONVERSATIONS = exports.SET_CONVERSATIONS = 'SET_CONVERSATIONS';
var ADD_GARMENT_TO_CART = exports.ADD_GARMENT_TO_CART = 'ADD_GARMENT_TO_CART';
var REMOVE_GARMENT_FROM_CART = exports.REMOVE_GARMENT_FROM_CART = 'REMOVE_GARMENT_FROM_CART';
var UPDATE_CART_CUSTOMER_INFO = exports.UPDATE_CART_CUSTOMER_INFO = 'UPDATE_CART_CUSTOMER_INFO';
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

var storeTypes = exports.storeTypes = [{ name: 'Tailor', id: 'tailor' }, { name: 'Retailer', id: 'retailer' }];

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
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
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(9);

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
      userRoles = props.userRoles;

  var link = props.link;
  if (!link) {
    link = '/orders/new';
  }

  if (props.userRoles.tailor) {
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(171);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 27 */
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
/* 28 */,
/* 29 */
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
      null,
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
      } }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null)
  );
};

exports.default = FormField;

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(167),
    getTag = __webpack_require__(172),
    isArguments = __webpack_require__(96),
    isArray = __webpack_require__(27),
    isArrayLike = __webpack_require__(179),
    isBuffer = __webpack_require__(97),
    isPrototype = __webpack_require__(174),
    isTypedArray = __webpack_require__(101);

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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(536),
    getValue = __webpack_require__(555);

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
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var editStoreImage = exports.editStoreImage = 'https://i.imgur.com/4QrP2Hd.png';
var logoutImage = exports.logoutImage = 'https://i.imgur.com/rUDfvnm.png';
var messageImage = exports.messageImage = 'https://i.imgur.com/92lvKqY.png';
var homeImage = exports.homeImage = 'https://i.imgur.com/LzPhWe4.png';
var ordersImage = exports.ordersImage = 'https://i.imgur.com/BAlVzrj.png';
var basketImage = exports.basketImage = 'https://i.imgur.com/bH0HuMx.png';
var exclamationImage = exports.exclamationImage = 'https://i.imgur.com/8BHeWZK.png';
var eyeImage = exports.eyeImage = 'https://i.imgur.com/LA3D9sC.png';
var archivedImage = exports.archivedImage = 'https://i.imgur.com/02s7Y1c.png';
var infoImage = exports.infoImage = 'https://i.imgur.com/RcRyJzA.png';
var tailorsImage = exports.tailorsImage = 'https://i.imgur.com/49m15Gl.png';

/***/ }),
/* 48 */
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
/* 49 */,
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(65),
    getRawTag = __webpack_require__(553),
    objectToString = __webpack_require__(578);

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
/* 53 */
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
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shipmentActions = exports.shipmentTypes = exports.messengerState = exports.labelState = exports.correctShipmentExists = exports.getShipmentForRole = exports.messengerAllowed = exports.fireShipmentCreate = undefined;

var _constants = __webpack_require__(10);

var _actions = __webpack_require__(7);

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
      return s.source.address_type === 'retailer' && s.destination.address_type === 'customer';
    });
  } else if (roles.tailor || roles.admin) {
    if (order.ship_to_store) {
      return shipments.find(function (s) {
        return s.destination.address_type === 'retailer' && s.source.address_type === 'tailor';
      });
    } else {
      return shipments.find(function (s) {
        return s.destination.address_type === 'customer' && s.source.address_type === 'tailor';
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
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(51);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(564),
    listCacheDelete = __webpack_require__(565),
    listCacheGet = __webpack_require__(566),
    listCacheHas = __webpack_require__(567),
    listCacheSet = __webpack_require__(568);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(26);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(178);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(562);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(39);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(100);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
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
        defaultValue: props.value,
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _logo = __webpack_require__(131);

var _logo2 = _interopRequireDefault(_logo);

var _isEmpty = __webpack_require__(34);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _shippingFunctions = __webpack_require__(62);

var _alterationsLists = __webpack_require__(447);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderComplete = function (_Component) {
  _inherits(OrderComplete, _Component);

  function OrderComplete(props) {
    _classCallCheck(this, OrderComplete);

    var _this = _possibleConstructorReturn(this, (OrderComplete.__proto__ || Object.getPrototypeOf(OrderComplete)).call(this));

    _this.renderBulkShippingLabels = _this.renderBulkShippingLabels.bind(_this);
    _this.renderShippingLabel = _this.renderShippingLabel.bind(_this);
    return _this;
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

    // renderBulkShippingLabels(shipmentSet) {
    //   if (!isEmpty(shipmentSet)) {
    //     return shipmentSet.map(shipment => {
    //       return shipment.orders.map(o => {
    //         const render = this.renderShippingLabel;
    //         return render(o, shipment);
    //       });
    //     });
    //   }
    // }

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
    key: 'renderBulkShippingLabels',
    value: function renderBulkShippingLabels(shipmentSet) {
      var shipment = shipmentSet[0];
      var orders = shipment.orders;
      var roles = this.props.userRoles;

      var labelShipment = shipment || (0, _shippingFunctions.getShipmentForRole)(roles, order);
      var shippingLabel = labelShipment.shipping_label;


      var ordersContent = this.renderBulkShippingOrderContent(orders);
      var label = this.renderShippingLabelImage(shippingLabel);
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
    }
  }, {
    key: 'renderShippingLabel',
    value: function renderShippingLabel(order, shipment) {
      var roles = this.props.userRoles;

      var labelShipment = shipment || (0, _shippingFunctions.getShipmentForRole)(roles, order);
      var shippingLabel = labelShipment.shipping_label;


      var label = this.renderShippingLabelImage;
      var text = this.renderOrderText;
      var items = this.renderOrderItems;

      return _react2.default.createElement(
        'div',
        { className: 'packing-slip-info' },
        label(shippingLabel),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        text(order),
        items(order)
      );
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
        if (shipmentSet) {
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

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentOrder: store.currentOrder,
    userRoles: store.userRoles
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(OrderComplete);

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(356);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(360);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(50);

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(16);

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
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
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
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(39),
    root = __webpack_require__(26);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(569),
    mapCacheDelete = __webpack_require__(570),
    mapCacheGet = __webpack_require__(571),
    mapCacheHas = __webpack_require__(572),
    mapCacheSet = __webpack_require__(573);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(27),
    isSymbol = __webpack_require__(100);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(532),
    isObjectLike = __webpack_require__(53);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(26),
    stubFalse = __webpack_require__(596);

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
/* 98 */
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
/* 99 */
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(52),
    isObjectLike = __webpack_require__(53);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(537),
    baseUnary = __webpack_require__(545),
    nodeUtil = __webpack_require__(577);

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
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(125);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(15);
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
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(732);
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
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setAuthToken;

var _axios = __webpack_require__(46);

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
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _logo = __webpack_require__(131);

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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _validations = __webpack_require__(33);

var _redux = __webpack_require__(6);

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _LogoMessage = __webpack_require__(143);

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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _HowToPinModal = __webpack_require__(409);

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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTotal = undefined;

var _lodash = __webpack_require__(60);

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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _actions = __webpack_require__(7);

var _FormSelect = __webpack_require__(83);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          provider_id = _props.provider_id,
          handleSubmit = _props.handleSubmit;

      if (tailors) {
        return _react2.default.createElement(
          'div',
          { className: 'SelectTailor' },
          _react2.default.createElement(
            'h3',
            null,
            'Select Tailor'
          ),
          _react2.default.createElement(_FormSelect2.default, {
            value: provider_id,
            options: tailors,
            fieldName: 'provider_id',
            title: 'Tailor Shop:',
            onChange: onChange
          })
        );
      }
    }
  }]);

  return SelectTailor;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    tailors: store.tailorList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getTailorList: _actions.getTailorList }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectTailor);

/***/ }),
/* 148 */
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
/* 149 */
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
/* 150 */
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
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
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
/* 156 */
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
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(39),
    root = __webpack_require__(26);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(93),
    setCacheAdd = __webpack_require__(580),
    setCacheHas = __webpack_require__(581);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(64),
    stackClear = __webpack_require__(582),
    stackDelete = __webpack_require__(583),
    stackGet = __webpack_require__(584),
    stackHas = __webpack_require__(585),
    stackSet = __webpack_require__(586);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(169),
    toKey = __webpack_require__(69);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(533),
    isObjectLike = __webpack_require__(53);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(174),
    nativeKeys = __webpack_require__(576);

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
/* 168 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(27),
    isKey = __webpack_require__(94),
    stringToPath = __webpack_require__(588),
    toString = __webpack_require__(597);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(163),
    arraySome = __webpack_require__(527),
    cacheHas = __webpack_require__(168);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(516),
    Map = __webpack_require__(92),
    Promise = __webpack_require__(518),
    Set = __webpack_require__(162),
    WeakMap = __webpack_require__(520),
    baseGetTag = __webpack_require__(52),
    toSource = __webpack_require__(177);

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
/* 173 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 174 */
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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(99);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 177 */
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
/* 178 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(180),
    isLength = __webpack_require__(98);

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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(52),
    isObject = __webpack_require__(99);

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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(524),
    baseKeys = __webpack_require__(167),
    isArrayLike = __webpack_require__(179);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
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
/* 321 */,
/* 322 */,
/* 323 */,
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
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(22);
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
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(343);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(126);
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
/* 356 */
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
/* 357 */,
/* 358 */
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
	fixUrls = __webpack_require__(758);

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
/* 359 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAK8CAYAAAF6vVzVAAAACXBIWXMAAAsTAAALEwEAmpwYAAA59GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0xMC0yNlQxOTo1MTozMS0wNDowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTEwLTI2VDE5OjUyOjQxLTA0OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNi0xMC0yNlQxOTo1Mjo0MS0wNDowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDoxZGFmY2Y4OC1mYmZmLTQyZDMtYjU1Zi0zNTM5MjBmZGZhM2I8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDphZTE1NjY4Zi1kYzY1LTExNzktOGIxNi1kZDdjYTA4M2UwOWU8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDoyMTY5YTRhNS03MzEzLTRkODItOTQ1Ni0wN2IzMWZjZTcxYzQ8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MjE2OWE0YTUtNzMxMy00ZDgyLTk0NTYtMDdiMzFmY2U3MWM0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTEwLTI2VDE5OjUxOjMxLTA0OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MWRhZmNmODgtZmJmZi00MmQzLWI1NWYtMzUzOTIwZmRmYTNiPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTEwLTI2VDE5OjUyOjQxLTA0OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NzAwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjcwMDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+nUfdmgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAdo0lEQVR42uzcwQ3DIAyF4YA6UnfyTN6pO9F7FFVViLGN/3frIUj94gChVtsY4yB26RAADDABGGCACcAAA0wABpgADDDA5M+8rAZu7X33Uj19lpUgY3xyAE+AhgLPDKyT16WA7slwz2MoFfwfrExcr5GruVn9JnexyOkErOVYpotcd6zcGRC5uD7kdOE1B4vROFoR2HqbFXo30ZPjWu1QUk4RknRsziIiV3Hf6EtK5QqWo2h2Pq5UgAs8KRy4AwwwKQSsABdb8HrVytoBeHUFcR5ccT/cN6mwsFNQX1xJugBXKgGvQmYfbICsR4KuH8/jSjW4QeGejpV9Eb8A5OHKv13JT/dFrAa2qDR56OaZAGfuizg3n0jEacOzu1JuIty5OW79axH6g1et/i7I1c6DFWD7J0EB3gi58mmaArwB8u6LnDtyhV2EK3KVbZobcqV9sAtytRcN3uR2Q67aOiUA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"

/***/ }),
/* 360 */
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
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(4);

var _NavigationBar = __webpack_require__(387);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _AvailableRoutes = __webpack_require__(383);

var _AvailableRoutes2 = _interopRequireDefault(_AvailableRoutes);

var _SignIn = __webpack_require__(144);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _growler = __webpack_require__(400);

var _growler2 = _interopRequireDefault(_growler);

var _loader = __webpack_require__(401);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router(props) {
  var loggedIn = props.currentUser.isAuthenticated;
  var _props$userRoles = props.userRoles,
      admin = _props$userRoles.admin,
      retailer = _props$userRoles.retailer,
      tailor = _props$userRoles.tailor;

  var storeName = props.currentStore.name;

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
        _react2.default.createElement(_AvailableRoutes2.default, {
          retailer: retailer,
          loggedIn: loggedIn,
          admin: admin,
          tailor: tailor
        })
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
        _react2.default.createElement(_SignIn2.default, null)
      )
    );
  }
};

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    userRoles: store.userRoles
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Router);

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _OrderComplete = __webpack_require__(84);

var _OrderComplete2 = _interopRequireDefault(_OrderComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainPrint = function MainPrint(props) {
  return _react2.default.createElement(_OrderComplete2.default, { shippingType: 'OutgoingShipment' });
};

exports.default = MainPrint;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _currentUserReducer = __webpack_require__(435);

var _currentUserReducer2 = _interopRequireDefault(_currentUserReducer);

var _currentStoreReducer = __webpack_require__(434);

var _currentStoreReducer2 = _interopRequireDefault(_currentStoreReducer);

var _storeOrdersReducer = __webpack_require__(444);

var _storeOrdersReducer2 = _interopRequireDefault(_storeOrdersReducer);

var _currentOrderReducer = __webpack_require__(433);

var _currentOrderReducer2 = _interopRequireDefault(_currentOrderReducer);

var _itemTypesReducer = __webpack_require__(438);

var _itemTypesReducer2 = _interopRequireDefault(_itemTypesReducer);

var _tailorListReducer = __webpack_require__(445);

var _tailorListReducer2 = _interopRequireDefault(_tailorListReducer);

var _companyListReducer = __webpack_require__(430);

var _companyListReducer2 = _interopRequireDefault(_companyListReducer);

var _measurementsReducer = __webpack_require__(440);

var _measurementsReducer2 = _interopRequireDefault(_measurementsReducer);

var _newOrdersReducer = __webpack_require__(442);

var _newOrdersReducer2 = _interopRequireDefault(_newOrdersReducer);

var _conversationsReducer = __webpack_require__(432);

var _conversationsReducer2 = _interopRequireDefault(_conversationsReducer);

var _messagesReducer = __webpack_require__(441);

var _messagesReducer2 = _interopRequireDefault(_messagesReducer);

var _garmentsReducer = __webpack_require__(436);

var _garmentsReducer2 = _interopRequireDefault(_garmentsReducer);

var _alterationsReducer = __webpack_require__(427);

var _alterationsReducer2 = _interopRequireDefault(_alterationsReducer);

var _cartReducer = __webpack_require__(429);

var _cartReducer2 = _interopRequireDefault(_cartReducer);

var _confirmedNewOrderReducer = __webpack_require__(431);

var _confirmedNewOrderReducer2 = _interopRequireDefault(_confirmedNewOrderReducer);

var _searchResultsReducer = __webpack_require__(443);

var _searchResultsReducer2 = _interopRequireDefault(_searchResultsReducer);

var _growlerReducer = __webpack_require__(437);

var _growlerReducer2 = _interopRequireDefault(_growlerReducer);

var _archivedOrdersReducer = __webpack_require__(428);

var _archivedOrdersReducer2 = _interopRequireDefault(_archivedOrdersReducer);

var _loaderReducer = __webpack_require__(439);

var _loaderReducer2 = _interopRequireDefault(_loaderReducer);

var _userRoleReducer = __webpack_require__(446);

var _userRoleReducer2 = _interopRequireDefault(_userRoleReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  currentUser: _currentUserReducer2.default,
  currentStore: _currentStoreReducer2.default,
  storeOrders: _storeOrdersReducer2.default,
  currentOrder: _currentOrderReducer2.default,
  itemTypes: _itemTypesReducer2.default,
  tailorList: _tailorListReducer2.default,
  companyList: _companyListReducer2.default,
  measurements: _measurementsReducer2.default,
  newOrders: _newOrdersReducer2.default,
  conversations: _conversationsReducer2.default,
  messages: _messagesReducer2.default,
  garments: _garmentsReducer2.default,
  alterations: _alterationsReducer2.default,
  cart: _cartReducer2.default,
  confirmedNewOrder: _confirmedNewOrderReducer2.default,
  searchResults: _searchResultsReducer2.default,
  growl: _growlerReducer2.default,
  archivedOrders: _archivedOrdersReducer2.default,
  loader: _loaderReducer2.default,
  userRoles: _userRoleReducer2.default
});

exports.default = rootReducer;

/***/ }),
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

__webpack_require__(760);

var _Home = __webpack_require__(386);

var _Home2 = _interopRequireDefault(_Home);

var _SignIn = __webpack_require__(144);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _SignUp = __webpack_require__(393);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _StoresShow = __webpack_require__(420);

var _StoresShow2 = _interopRequireDefault(_StoresShow);

var _OrdersShow = __webpack_require__(413);

var _OrdersShow2 = _interopRequireDefault(_OrdersShow);

var _OrdersEdit = __webpack_require__(403);

var _OrdersEdit2 = _interopRequireDefault(_OrdersEdit);

var _ArchivedOrders = __webpack_require__(402);

var _ArchivedOrders2 = _interopRequireDefault(_ArchivedOrders);

var _StoresEdit = __webpack_require__(418);

var _StoresEdit2 = _interopRequireDefault(_StoresEdit);

var _StoresNew = __webpack_require__(419);

var _StoresNew2 = _interopRequireDefault(_StoresNew);

var _CustomerEdit = __webpack_require__(384);

var _CustomerEdit2 = _interopRequireDefault(_CustomerEdit);

var _NewOrders = __webpack_require__(396);

var _NewOrders2 = _interopRequireDefault(_NewOrders);

var _ConversationsIndex = __webpack_require__(398);

var _ConversationsIndex2 = _interopRequireDefault(_ConversationsIndex);

var _ConversationsShow = __webpack_require__(399);

var _ConversationsShow2 = _interopRequireDefault(_ConversationsShow);

var _OrdersNew = __webpack_require__(407);

var _OrdersNew2 = _interopRequireDefault(_OrdersNew);

var _OrderConfirmation = __webpack_require__(406);

var _OrderConfirmation2 = _interopRequireDefault(_OrderConfirmation);

var _searchResults = __webpack_require__(417);

var _searchResults2 = _interopRequireDefault(_searchResults);

var _SelectAlterations = __webpack_require__(145);

var _SelectAlterations2 = _interopRequireDefault(_SelectAlterations);

var _TailorIndex = __webpack_require__(397);

var _TailorIndex2 = _interopRequireDefault(_TailorIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvailableRoutes = function AvailableRoutes(props) {
  var loggedIn = props.loggedIn,
      admin = props.admin,
      retailer = props.retailer,
      tailor = props.tailor;

  return _react2.default.createElement(
    'div',
    { className: 'content' },
    _react2.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: '/',
      render: function render(props) {
        return loggedIn ? _react2.default.createElement(_Home2.default, null) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, {
      path: '/sign_in',
      render: function render(props) {
        return loggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }) : _react2.default.createElement(_SignIn2.default, null);
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, {
      path: '/sign_up',
      render: function render(props) {
        return loggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }) : _react2.default.createElement(_SignUp2.default, null);
      }
    }),
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
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: '/stores/:store_id/edit',
        render: function render(props) {
          return loggedIn ? _react2.default.createElement(_StoresEdit2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
        }
      }),
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
    ),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
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
    ),
    _react2.default.createElement(_reactRouterDom.Route, {
      path: '/customers/:customer_id/edit',
      render: function render(props) {
        return admin || tailor ? _react2.default.createElement(_CustomerEdit2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign_in' });
      }
    }),
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
    ),
    _react2.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: '/admin/tailors',
      render: function render(props) {
        return admin ? _react2.default.createElement(_TailorIndex2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: '/messages',
      render: function render(props) {
        return loggedIn ? _react2.default.createElement(_ConversationsShow2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: '/conversations',
      render: function render(props) {
        return admin ? _react2.default.createElement(_ConversationsIndex2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: '/conversations/:id',
      render: function render(props) {
        return admin ? _react2.default.createElement(_ConversationsShow2.default, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
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
    })
  );
};

exports.default = AvailableRoutes;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _FormField = __webpack_require__(29);

var _FormField2 = _interopRequireDefault(_FormField);

var _actions = __webpack_require__(7);

var _validations = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerEdit = function (_Component) {
  _inherits(CustomerEdit, _Component);

  function CustomerEdit(props) {
    _classCallCheck(this, CustomerEdit);

    var _this = _possibleConstructorReturn(this, (CustomerEdit.__proto__ || Object.getPrototypeOf(CustomerEdit)).call(this));

    var _props$customer = props.customer,
        id = _props$customer.id,
        email = _props$customer.email,
        first_name = _props$customer.first_name,
        last_name = _props$customer.last_name,
        phone = _props$customer.phone,
        street = _props$customer.street,
        street_two = _props$customer.street_two,
        city = _props$customer.city,
        state_province = _props$customer.state_province,
        zip_code = _props$customer.zip_code;

    _this.state = {
      id: id,
      email: email,
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      street: street,
      street_two: street_two,
      city: city,
      state_province: state_province,
      zip_code: zip_code
    };
    _this.updateState = _this.updateState.bind(_this);
    return _this;
  }

  _createClass(CustomerEdit, [{
    key: 'updateState',
    value: function updateState(field, value) {
      //console.log('field', field, 'value', value);
      this.setState(_defineProperty({}, field, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var _props = this.props,
          currentStore = _props.currentStore,
          currentOrder = _props.currentOrder,
          getCurrentOrder = _props.getCurrentOrder,
          setGrowler = _props.setGrowler;
      var email = this.state.email;


      if ((0, _validations.ValidateEmail)(email)) {
        (0, _actions.updateCustomer)({ customer: this.state }).then(function (res) {
          var kind = void 0,
              message = void 0;
          if (res.data.body.errors) {
            kind = 'warning';
            message = res.data.body.errors[0];
          } else {
            kind = 'success';
            message = 'Customer Updated';
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

      var _props2 = this.props,
          currentOrder = _props2.currentOrder,
          customer = _props2.customer;
      var email = customer.email,
          first_name = customer.first_name,
          last_name = customer.last_name,
          phone = customer.phone,
          street = customer.street,
          street_two = customer.street_two,
          city = customer.city,
          state_province = customer.state_province,
          zip_code = customer.zip_code;

      var backLink = '/orders/' + currentOrder.id;
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
            value: this.state.email,
            fieldName: 'email',
            title: 'Email',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: this.state.first_name,
            fieldName: 'first_name',
            title: 'First Name',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: this.state.last_name,
            fieldName: 'last_name',
            title: 'Last Name',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: this.state.phone,
            fieldName: 'phone',
            title: 'Phone',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: this.state.street,
            fieldName: 'street',
            title: 'Street',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: this.state.street_two,
            fieldName: 'street_two',
            title: 'Unit',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: this.state.city,
            fieldName: 'city',
            title: 'City',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: this.state.state_province,
            fieldName: 'state',
            title: 'State',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: this.state.zip_code,
            fieldName: 'zip_code',
            title: 'Zip Code',
            onChange: this.updateState
          }),
          _react2.default.createElement('input', { type: 'submit', value: 'Update' })
        )
      );
    }
  }]);

  return CustomerEdit;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentOrder: store.currentOrder,
    customer: store.currentOrder.customer,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setGrowler: _actions.setGrowler, getCurrentOrder: _actions.getCurrentOrder }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomerEdit);

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlashMessage = function FlashMessage(props) {
  var messageClass = props.type + 'Message';
  return _react2.default.createElement(
    'div',
    { className: messageClass },
    _react2.default.createElement(
      'p',
      null,
      props.message
    )
  );
};

exports.default = FlashMessage;

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

var _reactRouterDom = __webpack_require__(9);

var _redux = __webpack_require__(6);

var _reactRedux = __webpack_require__(4);

var _isEmpty = __webpack_require__(34);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(7);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _OrderCard = __webpack_require__(390);

var _OrderCard2 = _interopRequireDefault(_OrderCard);

var _OrderCardIcon = __webpack_require__(391);

var _OrderCardIcon2 = _interopRequireDefault(_OrderCardIcon);

var _images = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {
      active_orders_count: 0,
      late_orders_count: 0,
      unread_messages_count: 0
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          currentUser = _props.currentUser,
          getCurrentStore = _props.getCurrentStore;

      (0, _actions.getOrderAndMessagesCount)(this.props.currentUser.user.store_id).then(function (res) {
        _this2.setState(res.data.body);
      });
      getCurrentStore(currentUser.user.store_id).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'retailerHome',
    value: function retailerHome(currentStore) {
      var _state = this.state,
          active_orders_count = _state.active_orders_count,
          late_orders_count = _state.late_orders_count,
          unread_messages_count = _state.unread_messages_count;

      return _react2.default.createElement(
        'div',
        { className: 'store-boxes' },
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.ordersImage, alt: 'orders' }),
          count: active_orders_count,
          type: 'Current',
          call: 'VIEW >',
          styleClass: 'current-orders'
        }),
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.messageImage, alt: 'messages' }),
          count: unread_messages_count,
          type: 'Unread',
          call: 'READ >',
          styleClass: 'unread-messages'
        })
      );
    }
  }, {
    key: 'adminHome',
    value: function adminHome(currentStore) {
      var _state2 = this.state,
          active_orders_count = _state2.active_orders_count,
          late_orders_count = _state2.late_orders_count,
          unread_messages_count = _state2.unread_messages_count;

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
        }),
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.messageImage, alt: 'messages' }),
          count: unread_messages_count,
          type: 'Unread',
          call: 'READ >',
          styleClass: 'unread-messages-admin'
        })
      );
    }
  }, {
    key: 'tailorHome',
    value: function tailorHome(currentStore) {
      var _state3 = this.state,
          active_orders_count = _state3.active_orders_count,
          late_orders_count = _state3.late_orders_count,
          unread_messages_count = _state3.unread_messages_count;

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
        }),
        _react2.default.createElement(_OrderCard2.default, {
          icon: _react2.default.createElement(_OrderCardIcon2.default, { url: _images.messageImage, alt: 'messages' }),
          count: unread_messages_count,
          type: 'Unread',
          call: 'READ >',
          styleClass: 'unread-messages'
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _NavigationLinks = __webpack_require__(389);

var _NavigationLinks2 = _interopRequireDefault(_NavigationLinks);

var _LogoMessage = __webpack_require__(143);

var _LogoMessage2 = _interopRequireDefault(_LogoMessage);

var _hamburger = __webpack_require__(766);

var _hamburger2 = _interopRequireDefault(_hamburger);

var _images = __webpack_require__(47);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationBar = function (_Component) {
  _inherits(NavigationBar, _Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this));

    _this.state = {
      active: _this.getNavActive(window)
    };
    // Need to bind toggleActiveState in order to pass it down as a prop to
    // the NavigationLinks component
    _this.toggleActiveState = _this.toggleActiveState.bind(_this);

    // Need to bind handleResize in order to maintain the component as 'this'
    // after it is passed to the event listeners in comoponentWillMount and
    // componentDidMount
    _this.handleResize = _this.handleResize.bind(_this);
    return _this;
  }

  _createClass(NavigationBar, [{
    key: 'handleSignOut',
    value: function handleSignOut() {
      this.props.signOutCurrentUser().then(function (res) {
        console.log('signed out');
      }).catch(function (err) {
        console.log('oops something went wrong');
      });
    }
  }, {
    key: 'getNavActive',
    value: function getNavActive(window) {
      return window.innerWidth < 981 ? false : true;
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var state = this.getNavActive(window);
      this.setState({ active: state });
    }
  }, {
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
    key: 'toggleActiveState',
    value: function toggleActiveState(boolean) {
      // If the Nav Bar should NOT be open by default (based on the window size)
      if (!this.getNavActive(window)) {
        var state = !boolean;
        this.setState({ active: state });
      }
    }
  }, {
    key: 'navBar',
    value: function navBar() {
      var _this2 = this;

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
            navState: active
          })
        ),
        _react2.default.createElement(
          'li',
          { className: 'signout-link' },
          _react2.default.createElement(
            'a',
            { className: 'navbar-links-li', onClick: function onClick() {
                return _this2.handleSignOut();
              } },
            _react2.default.createElement('img', { src: _images.logoutImage, alt: 'logout' }),
            ' LOGOUT'
          )
        )
      );
    }
  }, {
    key: 'hamburger',
    value: function hamburger() {
      var _this3 = this;

      return _react2.default.createElement('img', {
        className: 'hamburger',
        src: _hamburger2.default,
        alt: 'menu',
        onClick: function onClick() {
          return _this3.toggleActiveState(_this3.state.active);
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

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ signOutCurrentUser: _actions.signOutCurrentUser }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavigationBar);

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

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
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(9);

var _NavigationLink = __webpack_require__(388);

var _NavigationLink2 = _interopRequireDefault(_NavigationLink);

var _SearchBar = __webpack_require__(392);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _reactIntercom = __webpack_require__(80);

var _reactIntercom2 = _interopRequireDefault(_reactIntercom);

var _images = __webpack_require__(47);

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
            cssClass: 'conversations-link',
            route: '/conversations',
            text: 'Conversations',
            image: _images.messageImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'edit-store-link',
            route: editStoreRoute,
            text: 'Edit Store',
            image: _images.editStoreImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'new-store-link',
            route: '/stores/new',
            text: 'New Store',
            image: _images.homeImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'new-order-link',
            route: '/orders/new',
            text: 'New Order',
            image: _images.homeImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'new-order-link',
            route: '/admin/tailors',
            text: 'Tailors',
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
              _react2.default.createElement('img', { src: _images.logoutImage, alt: 'logout' }),
              ' Close Menu'
            )
          )
        )
      );
    }
  }, {
    key: 'tailorNavbar',
    value: function tailorNavbar() {
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
            cssClass: 'messages-link',
            route: '/messages',
            text: 'Messages',
            image: _images.messageImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'edit-store-link',
            route: editStoreRoute,
            text: 'Account',
            image: _images.editStoreImage
          })
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
      var _props3 = this.props,
          currentUser = _props3.currentUser,
          toggleNavState = _props3.toggleNavState,
          navState = _props3.navState,
          store = _props3.store;

      var user = {
        user_id: currentUser.user.id,
        email: currentUser.user.email,
        name: currentUser.user.email
      };

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
            cssClass: 'messages-link',
            route: '/messages',
            text: 'Messages',
            image: _images.messageImage
          }),
          _react2.default.createElement(_NavigationLink2.default, {
            cssClass: 'edit-store-link',
            route: editStoreRoute,
            text: 'Account',
            image: _images.editStoreImage
          })
        ),
        this.closeMenu(this.props),
        _react2.default.createElement(
          'div',
          { className: 'add' },
          _react2.default.createElement(_reactIntercom2.default, _extends({ appID: 'j5szofcq' }, user))
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
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
          })
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
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderCard = function OrderCard(props) {
  var icon = props.icon,
      count = props.count,
      type = props.type,
      call = props.call,
      styleClass = props.styleClass;

  var className = styleClass + ' order-card';
  var ordersOrMessages = void 0,
      link = void 0;

  if (styleClass === 'current-orders' || styleClass === 'late-orders') {
    ordersOrMessages = 'Orders';
    link = '/orders';
  } else if (styleClass === 'unread-messages') {
    ordersOrMessages = 'Messages';
    link = '/messages';
  } else if (styleClass === 'unread-messages-admin') {
    ordersOrMessages = 'Messages';
    link = '/conversations';
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
        ordersOrMessages
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
/* 391 */
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
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _actions = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(9);

var _search = __webpack_require__(359);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));

    _this.state = {
      value: '',
      redirect: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.resetRedirectState = _this.resetRedirectState.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var value = e.target.value;

      this.setState({ value: value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.searchOrders(this.state.value).then(function (res) {
        _this2.setState({ redirect: true, value: '' });
      }).then(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'resetRedirectState',
    value: function resetRedirectState() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({ redirect: false });
      }, 1000);
    }
  }, {
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

var mapStateToProps = function mapStateToProps(store) {
  return {
    searchResults: store.searchResults
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ searchOrders: _actions.searchOrders }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchBar);

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _validations = __webpack_require__(33);

var _requests = __webpack_require__(450);

var _FlashMessage = __webpack_require__(385);

var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_Component) {
  _inherits(SignUp, _Component);

  function SignUp() {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this));

    _this.state = {
      email: {
        text: '',
        valid: false
      },
      password: {
        text: '',
        valid: false
      },
      passwordConfirmation: {
        text: '',
        valid: false
      },
      buttonDisabled: true,
      successMessage: '',
      errorMessage: ''
    };
    return _this;
  }

  _createClass(SignUp, [{
    key: 'signUp',
    value: function signUp(e) {
      var _this2 = this;

      e.preventDefault();
      this.updateMessage({ name: 'successMessage', value: '' });
      this.updateMessage({ name: 'errorMessage', value: '' });

      var _state = this.state,
          email = _state.email,
          password = _state.password,
          passwordConfirmation = _state.passwordConfirmation;


      (0, _requests.SignUpRequest)(email.text, password.text, passwordConfirmation.text).then(function (res) {
        if (res.data.error) {
          var message = res.data.error[0];
          _this2.updateMessage({ name: 'errorMessage', value: message });
        } else {
          var _message = (0, _requests.SignUpStatusResponse)(res.status);
          _this2.updateMessage({ name: "successMessage", value: _message });
        }
      }).catch(function (err) {
        ;
        console.log(err);
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
    key: 'updateMessage',
    value: function updateMessage(obj) {
      this.setState(_defineProperty({}, obj.name, obj.value));
    }
  }, {
    key: 'validateInputs',
    value: function validateInputs(state) {
      var email = state.email,
          password = state.password,
          passwordConfirmation = state.passwordConfirmation;


      if ((0, _validations.ValidateEmail)(email.text) && (0, _validations.ValidatePassword)(password.text) && (0, _validations.ValidatePasswordConfirmation)(password.text, passwordConfirmation.text)) {

        this.setState({
          email: { text: email.text, valid: true },
          password: { text: password.text, valid: true },
          passwordConfirmation: { text: passwordConfirmation.text, valid: true }
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
    key: 'renderMessages',
    value: function renderMessages() {
      var _state2 = this.state,
          successMessage = _state2.successMessage,
          errorMessage = _state2.errorMessage;

      var message = void 0;
      if (successMessage) {
        message = _react2.default.createElement(_FlashMessage2.default, { type: 'success', message: successMessage });
      } else if (errorMessage) {
        message = _react2.default.createElement(_FlashMessage2.default, { type: 'error', message: errorMessage });
      }
      return message;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state3 = this.state,
          buttonDisabled = _state3.buttonDisabled,
          email = _state3.email,
          password = _state3.password,
          passwordConfirmation = _state3.passwordConfirmation;

      return _react2.default.createElement(
        'div',
        null,
        this.renderMessages(),
        _react2.default.createElement(
          'h5',
          null,
          ' Sign Up '
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this4.signUp(e);
            } },
          _react2.default.createElement(
            'label',
            null,
            'Email:',
            _react2.default.createElement('input', {
              autoFocus: true,
              value: email.text,
              name: 'email',
              onChange: function onChange(e) {
                return _this4.updateInputText(e.target);
              } })
          ),
          _react2.default.createElement(
            'label',
            null,
            'Password:',
            _react2.default.createElement('input', {
              value: password.text,
              name: 'password',
              onChange: function onChange(e) {
                return _this4.updateInputText(e.target);
              },
              type: 'password' })
          ),
          _react2.default.createElement(
            'label',
            null,
            'Password Confirmation:',
            _react2.default.createElement('input', {
              value: passwordConfirmation.text,
              name: 'passwordConfirmation',
              onChange: function onChange(e) {
                return _this4.updateInputText(e.target);
              },
              type: 'password' })
          ),
          _react2.default.createElement('input', { disabled: buttonDisabled, type: 'submit', value: 'Submit' })
        )
      );
    }
  }]);

  return SignUp;
}(_react.Component);

exports.default = SignUp;
// SignUp.propTypes = {
//   userSignUpRequest: React.PropTypes.func.isRequired
// }

// function mapStateToProps(store){
//   return {
//     currentUser: store.currentUser
//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({userSignUpRequest}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewOrderCustomerDetail = function (_Component) {
  _inherits(NewOrderCustomerDetail, _Component);

  function NewOrderCustomerDetail() {
    _classCallCheck(this, NewOrderCustomerDetail);

    return _possibleConstructorReturn(this, (NewOrderCustomerDetail.__proto__ || Object.getPrototypeOf(NewOrderCustomerDetail)).apply(this, arguments));
  }

  _createClass(NewOrderCustomerDetail, [{
    key: 'render',
    value: function render() {
      if (this.props.order.customer) {
        var _props$order$customer = this.props.order.customer,
            id = _props$order$customer.id,
            first_name = _props$order$customer.first_name,
            last_name = _props$order$customer.last_name,
            email = _props$order$customer.email,
            phone = _props$order$customer.phone,
            street = _props$order$customer.street,
            street_two = _props$order$customer.street_two,
            city = _props$order$customer.city,
            state_province = _props$order$customer.state_province,
            zip_code = _props$order$customer.zip_code;

        var customerEditLink = '/customers/' + id + '/edit';
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Customer Details:'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Name: ',
            first_name,
            ' ',
            last_name
          ),
          _react2.default.createElement(
            'p',
            null,
            'Email: ',
            email
          ),
          _react2.default.createElement(
            'p',
            null,
            'Phone: ',
            phone
          ),
          _react2.default.createElement(
            'p',
            null,
            'Address: ',
            street,
            ' ',
            street_two,
            ' ',
            city,
            ', ',
            state_province,
            ' ',
            zip_code
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: customerEditLink },
            _react2.default.createElement(
              'button',
              { className: 'button small-button' },
              ' Edit Customer'
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          'Select a Customer'
        );
      }
    }
  }]);

  return NewOrderCustomerDetail;
}(_react.Component);

exports.default = NewOrderCustomerDetail;
// const mapStateToProps = (store) => {
//   return {
//     order: store.currentOrder
//   }
// }
//
// export default connect(mapStateToProps)(NewOrderCustomerDetail);

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

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _actions = __webpack_require__(7);

var _shippingFunctions = __webpack_require__(62);

var _WelcomeKitPrint = __webpack_require__(416);

var _WelcomeKitPrint2 = _interopRequireDefault(_WelcomeKitPrint);

var _SelectTailor = __webpack_require__(147);

var _SelectTailor2 = _interopRequireDefault(_SelectTailor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import {renderAlterationList} from '../../utils/alterationsLists';

//import {SetFulfilledButton} from '../orders/orderForms/SetFulfilled';


// import UpdateNotes from '../orders/orderForms/UpdateNotes';

var NewOrderDetail = function (_Component) {
  _inherits(NewOrderDetail, _Component);

  function NewOrderDetail(props) {
    _classCallCheck(this, NewOrderDetail);

    var _this = _possibleConstructorReturn(this, (NewOrderDetail.__proto__ || Object.getPrototypeOf(NewOrderDetail)).call(this));

    _this.state = {
      loadingLabel: false,
      notes: ''
    };
    _this.updateState = _this.updateState.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    //this.setFulfilled = this.setFulfilled.bind(this);
    _this.updateOrderNotes = _this.updateOrderNotes.bind(_this);
    _this.fulfillOrder = _this.fulfillOrder.bind(_this);
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
    key: 'updateState',
    value: function updateState(field, value) {
      this.setState(_defineProperty({}, field, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _this2 = this;

      this.props.setLoader();
      var obj = this.state;
      obj.id = this.props.order.id;
      this.props.updateOrder({ order: obj }).then(function (res) {
        _this2.refreshNewOrdersList({ order: {} });
        var message = 'Tailor Assigned';
        var kind = 'success';
        _this2.props.setGrowler({ kind: kind, message: message });
        _this2.props.removeLoader();
      }).catch(function (err) {
        return console.log('errr', err);
      });
    }
  }, {
    key: 'updateOrderNotes',
    value: function updateOrderNotes(notes, order) {
      order.requester_notes = notes;
      this.props.updateOrder({ order: order }).catch(function (err) {
        return console.log('err', err);
      });
    }

    // makeShippingLabel(type, order) {
    //   const data = {shipment: {type, order_id: order.id}};
    //   // here, we pass in our shipment stuff
    //   createShipment(data)
    //     .then(res => {
    //       const order = res.data.body;
    //       this.props
    //         .updateOrder({order})
    //         .then(res => {
    //           this.props.selectOrder(order);
    //           this.setState({loadingLabel: false});
    //           this.props.removeLoader();
    //         })
    //         .catch(err => console.log('err', err));
    //     })
    //     .catch(err => console.log('err', err));
    // }

    // renderPrintLabels(order) {
    //   const roles = this.props.userRoles;
    //   const shippingType = shipmentTypes(roles, order.type);
    //   const printPrompt = getPrintButtonPrompt(shippingType, order);
    //
    //   if (printPrompt.split(' ')[0] === 'Print') {
    //     const url = this.props.order[
    //       toSnakeCaseFromCamelCase(lowerCaseFirstLetter(shippingType))
    //     ].shipping_label;
    //     return (
    //       <div>
    //         <button className="pink-button" onClick={() => window.print()}>
    //           {printPrompt}
    //         </button>
    //
    //         <WelcomeKitPrint />
    //       </div>
    //     );
    //   } else if (printPrompt.split(' ')[0] === 'Creating') {
    //     return (
    //       <button className="pink-button" disabled={this.state.loadingLabel}>
    //         {printPrompt}
    //       </button>
    //     );
    //   } else if (printPrompt.split(' ')[0] === 'Create') {
    //     return (
    //       <button
    //         className="pink-button"
    //         disabled={this.state.loadingLabel}
    //         onClick={() => this.makeShippingLabel(shippingType, order.id)}
    //       >
    //         {printPrompt}
    //       </button>
    //     );
    //   }
    // }

    // from orders show

  }, {
    key: 'postShipment',
    value: function postShipment(orders, action, type) {
      var _this3 = this;

      this.props.setLoader();
      (0, _shippingFunctions.fireShipmentCreate)(orders, action, type).then(function (res) {
        _this3.props.removeLoader();
        _this3.setState({ loadingLabel: false });
        _this3.refreshCurrentOrder();
      }).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'makeShippingLabel',
    value: function makeShippingLabel(action) {
      return this.postShipment([this.props.order], action, 'mail_shipment');
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
            return window.print();
          };
          // NOTE: we need to make sure that orderComplete gets the correct shipment.
          shipmentDiv = _react2.default.createElement(OrderComplete, null);
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
    key: 'fulfillOrder',
    value: function fulfillOrder() {
      var _this4 = this;

      var _props$order = this.props.order,
          orderId = _props$order.id,
          storeId = _props$order.store_id;

      var data = { order: { id: orderId, store_id: storeId, fulfilled: true } };

      this.props.setLoader();
      this.setState({ loadingLabel: true });

      this.props.updateOrder(data).then(function (res) {
        var _props3 = _this4.props,
            order = _props3.order,
            roles = _props3.userRoles;

        var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);
        var shipmentType = (0, _shippingFunctions.shipmentTypes)(roles);

        if (shipmentType.has('mail_shipment')) {
          _this4.makeShippingLabel(shipmentAction);
        }
      }).catch(function (err) {
        return console.log(err);
      });
    }

    // from orders show

    // fulfillOrder(order) {
    //   const {id, store_id, type} = order;
    //   this.props.setLoader();
    //   const data = {
    //     order: {
    //       id,
    //       store_id,
    //       fulfilled: true,
    //     },
    //   };
    //   this.setState({loadingLabel: true});
    //   this.props
    //     .updateOrder(data)
    //     .then(res => {
    //       const role = this.props.currentUser.user.roles[0].name;
    //       const shippingType = getShippingTypes(role, type);
    //       this.makeShippingLabel(shippingType, order.id);
    //     })
    //     .catch(err => console.log(err));
    // }
    //
    // renderFulfillButton() {
    //   if (this.props.order.outgoingShipment) {
    //     return this.renderPrintLabels(this.props.order);
    //   } else {
    //     return (
    //       <div>
    //         <button onClick={() => this.fulfillOrder()} className="pink-button">
    //           Fulfill This Order!
    //         </button>
    //       </div>
    //     );
    //   }
    // }
    //
    // setFulfilled(order) {
    //   order.fulfilled = true;
    //   this.props.updateOrder({order}).catch(err => console.log('errr', err));
    // }

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
      var _this5 = this;

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
        return _this5.props.setGrowler({ kind: kind, message: message });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'renderNotes',
    value: function renderNotes() {
      var _this6 = this;

      return _react2.default.createElement(
        'form',
        { className: 'notes-form', onSubmit: function onSubmit(e) {
            return _this6.submitNotes(e);
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
              return _this6.updateNotes(e.target.value);
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
      var _this7 = this;

      return garments.map(function (garment, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'h3',
            null,
            garment.name
          ),
          _this7.renderGarmentAlterations(garment),
          _react2.default.createElement('hr', null)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var order = this.props.order;

      if (order.customer) {
        var id = order.id,
            weight = order.weight,
            created_at = order.created_at,
            total = order.total,
            provider_notes = order.provider_notes,
            items = order.items,
            provider_id = order.provider_id;


        var tailorId = provider_id ? provider_id : '';
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
          _react2.default.createElement(_SelectTailor2.default, { onChange: this.updateState, provider_id: tailorId }),
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
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }]);

  return NewOrderDetail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    tailors: store.tailorList,
    currentUser: store.currentUser,
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updateOrder: _actions.updateOrder, setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, setGrowler: _actions.setGrowler }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewOrderDetail);

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

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _redux = __webpack_require__(6);

var _newOrderLists = __webpack_require__(448);

var _NewOrderDetail = __webpack_require__(395);

var _NewOrderDetail2 = _interopRequireDefault(_NewOrderDetail);

var _NewOrderCustomerDetail = __webpack_require__(394);

var _NewOrderCustomerDetail2 = _interopRequireDefault(_NewOrderCustomerDetail);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewOrders = function (_Component) {
  _inherits(NewOrders, _Component);

  function NewOrders() {
    _classCallCheck(this, NewOrders);

    var _this = _possibleConstructorReturn(this, (NewOrders.__proto__ || Object.getPrototypeOf(NewOrders)).call(this));

    _this.selectOrderDetail = _this.selectOrderDetail.bind(_this);
    return _this;
  }

  _createClass(NewOrders, [{
    key: 'selectOrderDetail',
    value: function selectOrderDetail(order) {
      this.props.getCurrentOrder(order.provider_id, order.id).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
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
              _react2.default.createElement(_NewOrderCustomerDetail2.default, { order: this.props.currentOrder })
            )
          )
        )
      );
    }
  }]);

  return NewOrders;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    newOrders: store.newOrders,
    currentOrder: store.currentOrder,
    userRoles: store.userRoles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getNewOrders: _actions.getNewOrders, getCurrentOrder: _actions.getCurrentOrder, setCurrentOrder: _actions.setCurrentOrder }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewOrders);

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

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(9);

var _actions = __webpack_require__(7);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TailorsIndex = function (_Component) {
  _inherits(TailorsIndex, _Component);

  function TailorsIndex() {
    _classCallCheck(this, TailorsIndex);

    return _possibleConstructorReturn(this, (TailorsIndex.__proto__ || Object.getPrototypeOf(TailorsIndex)).apply(this, arguments));
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
    key: 'renderTailorRows',
    value: function renderTailorRows() {
      var _this2 = this;

      var tailorList = this.props.tailorList;

      return tailorList.map(function (tailor) {
        var id = tailor.id,
            name = tailor.name,
            assigned = tailor.active_orders_count,
            arrived = tailor.arrived_orders_count,
            late = tailor.late_orders_count;


        var truncatedTailorName = _this2.truncatedTailorName(name);
        var route = '/stores/' + id + '/orders';

        return _react2.default.createElement(
          'div',
          { key: id },
          _react2.default.createElement(
            'div',
            { className: 'order-row' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: route, className: 'flex-container' },
              _react2.default.createElement(
                'div',
                { className: 'order-data' },
                truncatedTailorName
              ),
              _react2.default.createElement(
                'div',
                { className: 'order-data' },
                assigned
              ),
              _react2.default.createElement(
                'div',
                { className: 'order-data' },
                arrived
              ),
              _react2.default.createElement(
                'div',
                { className: 'order-data', style: { color: 'red' } },
                late
              )
            )
          ),
          _react2.default.createElement('hr', { className: 'order-row-hr' })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Manage Tailors' }),
        _react2.default.createElement(
          'div',
          { className: 'orders' },
          _react2.default.createElement(
            'div',
            { className: 'order-row-header' },
            _react2.default.createElement(
              'h3',
              { className: 'order-column' },
              'Tailor'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'order-column' },
              'Assigned'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'order-column' },
              'In Stock'
            ),
            _react2.default.createElement(
              'h3',
              { className: 'order-column' },
              'Late'
            )
          ),
          _react2.default.createElement('hr', { className: 'order-header-break-row' }),
          _react2.default.createElement(
            'div',
            { className: 'order-rows' },
            this.renderTailorRows()
          )
        )
      );
    }
  }]);

  return TailorsIndex;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    tailorList: store.tailorList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, getTailorList: _actions.getTailorList }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TailorsIndex);

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

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(9);

var _actions = __webpack_require__(7);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConversationsIndex = function (_Component) {
  _inherits(ConversationsIndex, _Component);

  function ConversationsIndex() {
    _classCallCheck(this, ConversationsIndex);

    return _possibleConstructorReturn(this, (ConversationsIndex.__proto__ || Object.getPrototypeOf(ConversationsIndex)).apply(this, arguments));
  }

  _createClass(ConversationsIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getConversations(this.props.currentUser.user.store_id).catch(function (err) {
        return console.log("err", err);
      });
    }
  }, {
    key: "renderConversations",
    value: function renderConversations(props) {
      var conversations = props.conversations;


      return conversations.map(function (convo, index) {
        var id = convo.id;
        var name = convo.recipient.name;


        var read = { color: "green", status: "Caught Up" };
        var unread = { color: "red", status: "Unread" };

        var _ref = convo.sender_read ? read : unread,
            color = _ref.color,
            status = _ref.status;

        var route = "/conversations/" + id;
        return _react2.default.createElement(
          "div",
          { key: index },
          _react2.default.createElement(
            "div",
            { className: "conversation-row-container" },
            _react2.default.createElement(
              "div",
              { className: "conversation-row" },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: route, className: "conversation-row-link" },
                _react2.default.createElement(
                  "div",
                  { className: "conversation-cell" },
                  "#",
                  id
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation-cell" },
                  name
                ),
                _react2.default.createElement(
                  "div",
                  { className: "conversation-cell", style: { color: color } },
                  status
                )
              )
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      var headerText = "Conversations";
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          "div",
          { className: "orders" },
          _react2.default.createElement(
            "div",
            { className: "conversations-container" },
            this.renderConversations(this.props)
          )
        )
      );
    }
  }]);

  return ConversationsIndex;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    conversations: store.conversations,
    currentUser: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getConversations: _actions.getConversations }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ConversationsIndex);

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

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _actions = __webpack_require__(7);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_Component) {
  _inherits(Messages, _Component);

  function Messages() {
    _classCallCheck(this, Messages);

    var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this));

    _this.state = {
      newMessage: ''
    };
    _this.submitMessage = _this.submitMessage.bind(_this);
    return _this;
  }

  _createClass(Messages, [{
    key: 'scrollToBottom',
    value: function scrollToBottom(element) {
      element.scrollTop = element.scrollHeight;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.messages.length !== this.props.messages.length) {
        this.scrollToBottom(document.getElementById('message-list'));
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.scrollToBottom(document.getElementById('message-list'));
      var self = this;
      var store_id = this.props.currentUser.user.store_id;

      this.props.getConversations(store_id).then(function (res) {
        if (_this2.props.currentStore.name === 'Air Tailor') {
          _this2.props.getMessages(_this2.props.currentStore.id, _this2.props.match.params.id);
        } else {
          var conversation_id = self.props.conversations[0].id;
          _this2.props.getMessages(store_id, conversation_id);
        }
      }).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'renderDate',
    value: function renderDate(date) {
      return _react2.default.createElement(
        'div',
        { className: 'message-date' },
        _react2.default.createElement(
          'h3',
          null,
          date
        )
      );
    }
  }, {
    key: 'renderMessages',
    value: function renderMessages(messages) {
      var _this3 = this;

      var user = this.props.currentUser.user;

      var messageDate = void 0,
          showDate = void 0;
      return messages.map(function (message, index) {
        showDate = false;
        var body = message.body,
            store_id = message.store_id,
            store = message.store,
            created_at = message.created_at;

        var className = store_id === user.store_id ? 'sender' : 'receiver';

        var messageTime = (0, _moment2.default)(created_at).format('hh:mm a');
        var momentDate = (0, _moment2.default)(created_at).format('MMMM DD');

        if (messageDate !== momentDate) {
          messageDate = momentDate;
          showDate = true;
        }

        return _react2.default.createElement(
          'div',
          { key: index },
          showDate ? _this3.renderDate(messageDate) : '',
          _react2.default.createElement(
            'div',
            { className: className + ' message' },
            _react2.default.createElement(
              'div',
              { className: 'message-heading' },
              _react2.default.createElement(
                'h4',
                null,
                store.name
              ),
              ' ',
              _react2.default.createElement(
                'h4',
                null,
                messageTime
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              body
            )
          )
        );
      });
    }
  }, {
    key: 'submitMessage',
    value: function submitMessage(e) {
      var _this4 = this;

      e.preventDefault();
      var newMessage = this.state.newMessage;


      var roles = this.props.userRoles;
      var conversation_id = roles.admin ? this.props.match.params.id : this.props.conversations[0].id;

      var store_id = this.props.currentStore.id;
      var message = { body: newMessage, conversation_id: conversation_id, store_id: store_id };

      this.props.createMessage(message).then(function (res) {
        return _this4.setState({ newMessage: '' });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'updateNewMessage',
    value: function updateNewMessage(text) {
      this.setState({ newMessage: text });
    }
  }, {
    key: 'renderMessageForm',
    value: function renderMessageForm() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        { className: 'messages-form' },
        _react2.default.createElement(
          'form',
          { onSubmit: this.submitMessage },
          _react2.default.createElement(
            'div',
            { className: 'messages-form-inner-box' },
            _react2.default.createElement('textarea', {
              className: 'text-area',
              onChange: function onChange(e) {
                return _this5.updateNewMessage(e.target.value);
              },
              value: this.state.newMessage
            }),
            _react2.default.createElement('input', {
              type: 'submit',
              className: 'button message-button',
              value: 'SEND'
            })
          )
        )
      );
    }
  }, {
    key: 'markMessagesRead',
    value: function markMessagesRead(props) {
      if (props.messages.length > 0) {
        var roles = props.userRoles;
        var messageCheck = roles.admin ? 'sender_read' : 'recipient_read';

        // find # of unread messages in conversation
        var unreads = props.messages.filter(function (mess) {
          return !mess[messageCheck];
        });

        // if # of unread messages is > 0 then mark all of them as read
        if (unreads.length > 0) {
          unreads.forEach(function (mess) {
            mess[messageCheck] = true;
            props.updateMessage(mess);
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var headerText = 'Messages / ' + this.props.currentStore.name;
      this.markMessagesRead(this.props);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'messages-container' },
            _react2.default.createElement(
              'div',
              { id: 'message-list', className: 'message-list' },
              this.renderMessages(this.props.messages)
            )
          )
        ),
        this.renderMessageForm()
      );
    }
  }]);

  return Messages;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    conversations: store.conversations,
    currentUser: store.currentUser,
    userRoles: store.userRoles,
    messages: store.messages,
    currentStore: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getConversations: _actions.getConversations, getMessages: _actions.getMessages, createMessage: _actions.createMessage, updateMessage: _actions.updateMessage }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Messages);

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(6);

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(7);

var _lodash = __webpack_require__(60);

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
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _lodash = __webpack_require__(60);

__webpack_require__(759);

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
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(9);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _isEmpty = __webpack_require__(34);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArchivedOrders = function (_Component) {
  _inherits(ArchivedOrders, _Component);

  function ArchivedOrders(props) {
    _classCallCheck(this, ArchivedOrders);

    var _this = _possibleConstructorReturn(this, (ArchivedOrders.__proto__ || Object.getPrototypeOf(ArchivedOrders)).call(this));

    _this.state = { loadingOrders: true };
    _this.renderArchivedOrderHeaders = _this.renderArchivedOrderHeaders.bind(_this);
    _this.renderArchivedOrderRows = _this.renderArchivedOrderRows.bind(_this);
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
    key: 'renderArchivedOrderRows',
    value: function renderArchivedOrderRows() {
      var _this2 = this;

      var archivedOrders = this.props.archivedOrders;

      if (!(0, _isEmpty2.default)(archivedOrders)) {
        return _react2.default.createElement(
          'div',
          { className: 'archive-container' },
          archivedOrders.map(function (order) {
            return _this2.renderArchivedOrderRow(order);
          })
        );
      } else if (this.state.loadingOrders) {
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
    }
  }, {
    key: 'renderArchivedOrderHeaders',
    value: function renderArchivedOrderHeaders() {
      var role = this.props.userRoles;

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ArchivedOrders);

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

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _FormSelect = __webpack_require__(83);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

var _FormField = __webpack_require__(29);

var _FormField2 = _interopRequireDefault(_FormField);

var _actions = __webpack_require__(7);

var _SelectTailor = __webpack_require__(147);

var _SelectTailor2 = _interopRequireDefault(_SelectTailor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrdersEdit = function (_Component) {
  _inherits(OrdersEdit, _Component);

  function OrdersEdit(props) {
    _classCallCheck(this, OrdersEdit);

    var _this = _possibleConstructorReturn(this, (OrdersEdit.__proto__ || Object.getPrototypeOf(OrdersEdit)).call(this));

    _this.state = props.order;
    _this.updateState = _this.updateState.bind(_this);
    return _this;
  }

  _createClass(OrdersEdit, [{
    key: 'updateState',
    value: function updateState(field, value) {
      this.setState(_defineProperty({}, field, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateOrder({ order: this.state })
      // .then(res => console.log('res', res))
      .catch(function (err) {
        return console.log('errr', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          customer = _state.customer,
          total = _state.total,
          weight = _state.weight,
          provider_id = _state.provider_id;
      var first_name = customer.first_name,
          last_name = customer.last_name;

      var customerName = first_name + ' ' + last_name;
      var backLink = '/orders/' + this.state.id;

      if (this.props.order) {
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
              value: customerName,
              fieldName: 'name',
              title: 'Name:',
              onChange: function onChange() {
                return console.log('dont do nuthin');
              }
            }),
            _react2.default.createElement(_FormField2.default, {
              value: total,
              fieldName: 'total',
              title: 'Total: $',
              onChange: this.updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: weight,
              fieldName: 'weight',
              title: 'Weight (grams):',
              onChange: this.updateState
            }),
            _react2.default.createElement(_SelectTailor2.default, {
              provider_id: provider_id,
              onChange: this.updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: this.state.total,
              fieldName: 'total',
              title: 'Total:',
              onChange: this.updateState
            }),
            _react2.default.createElement('input', { type: 'submit', className: 'short-button', value: 'Update' })
          )
        );
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }]);

  return OrdersEdit;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    order: store.currentOrder,
    tailors: store.tailorList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getTailorList: _actions.getTailorList, updateOrder: _actions.updateOrder }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrdersEdit);

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

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(9);

var _actions = __webpack_require__(7);

var _validations = __webpack_require__(33);

var _images = __webpack_require__(47);

var _utils = __webpack_require__(146);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_Component) {
  _inherits(Cart, _Component);

  function Cart() {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).apply(this, arguments));
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
    value: function readyToCheckout(props) {
      var _props$cart = props.cart,
          customerInfo = _props$cart.customerInfo,
          shipToStore = _props$cart.shipToStore;
      var first_name = customerInfo.first_name,
          last_name = customerInfo.last_name,
          phone = customerInfo.phone,
          email = customerInfo.email,
          street = customerInfo.street,
          city = customerInfo.city,
          state_province = customerInfo.state_province,
          zip_code = customerInfo.zip_code;


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
    key: 'renderNextButton',
    value: function renderNextButton(props) {
      var _this3 = this;

      if (props.cart.garments.length > 0) {
        if (props.stage === 4) {
          return _react2.default.createElement('div', null);
        } else if (this.readyToCheckout(props) && props.stage !== 3) {
          return _react2.default.createElement(
            'div',
            { className: 'cart-buttons-container' },
            _react2.default.createElement('input', {
              onClick: props.renderOrderDetails,
              className: 'short-button',
              type: 'submit',
              value: 'Edit Order Details'
            }),
            _react2.default.createElement('input', {
              onClick: function onClick() {
                return _this3.props.renderCheckout();
              },
              className: 'short-button',
              type: 'submit',
              value: 'Checkout'
            })
          );
        } else if (this.readyToCheckout(props) && props.stage === 3) {
          return _react2.default.createElement(
            'div',
            { className: 'cart-buttons-container' },
            _react2.default.createElement('input', {
              onClick: function onClick() {
                return _this3.props.renderStageOne();
              },
              className: 'short-button',
              type: 'submit',
              value: 'Add More Items'
            }),
            _react2.default.createElement('input', {
              onClick: function onClick() {
                return _this3.props.renderCheckout();
              },
              className: 'short-button',
              type: 'submit',
              value: 'Checkout'
            })
          );
        } else if (!this.readyToCheckout(props) && props.stage === 3) {
          return _react2.default.createElement(
            'div',
            { className: 'cart-buttons-container' },
            _react2.default.createElement('input', {
              onClick: function onClick() {
                return _this3.props.renderStageOne();
              },
              className: 'short-button',
              type: 'submit',
              value: 'Add More Items'
            }),
            _react2.default.createElement('input', {
              onClick: function onClick() {
                return _this3.props.renderCheckout();
              },
              className: 'short-button',
              type: 'submit',
              value: 'Checkout',
              disabled: true
            })
          );
        } else if (props.stage === 2 || props.stage === 1) {
          return _react2.default.createElement(
            'div',
            { className: 'cart-buttons-container' },
            _react2.default.createElement('input', {
              onClick: props.renderOrderDetails,
              className: 'short-button',
              type: 'submit',
              value: 'Add Order Details'
            })
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
      var _this4 = this;

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
            return _this4.props.updateCartNotes(e.target.value);
          },
          cols: 36,
          rows: 10
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          cart = _props.cart,
          stage = _props.stage;


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

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.cart
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ removeGarmentFromCart: _actions.removeGarmentFromCart, updateCartNotes: _actions.updateCartNotes }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

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

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(9);

var _format = __webpack_require__(48);

var _actions = __webpack_require__(7);

var _ordersHelper = __webpack_require__(148);

var _utils = __webpack_require__(146);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    value: function renderCustomerInfo(props) {
      var _props$cart$customerI = props.cart.customerInfo,
          first_name = _props$cart$customerI.first_name,
          last_name = _props$cart$customerI.last_name,
          phone = _props$cart$customerI.phone,
          email = _props$cart$customerI.email;
      var shipToStore = props.cart.shipToStore;

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
    value: function renderOrderInfo(props) {
      var _props$cart = props.cart,
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
    value: function submitOrder(props) {
      var _this3 = this;

      this.props.setLoader();
      this.props.submitOrder(props).then(function (res) {
        if (res.errors) {
          var kind = 'warning';
          var message = res.message;
          _this3.props.setGrowler({ message: message, kind: kind });
          _this3.props.renderOrderDetails();
        } else {
          _this3.setState({ orderCompleted: true });
        }
      }).catch(function (err) {
        debugger;
      }).then(function () {
        return _this3.props.removeLoader();
      });
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons(props) {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          onClick: function onClick() {
            return props.renderStageOne();
          },
          type: 'submit',
          className: 'short-button',
          value: 'Make Changes'
        }),
        _react2.default.createElement('input', {
          onClick: function onClick() {
            return _this4.submitOrder(_this4.props);
          },
          type: 'submit',
          className: 'short-button',
          value: 'Submit'
        })
      );
    }
  }, {
    key: 'renderShipToCustomer',
    value: function renderShipToCustomer(customerInfo) {
      var first_name = customerInfo.first_name,
          last_name = customerInfo.last_name,
          street = customerInfo.street,
          street_two = customerInfo.street_two,
          city = customerInfo.city,
          state_province = customerInfo.state_province,
          zip_code = customerInfo.zip_code;

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
    value: function renderShipToStore(currentStore) {
      var name = currentStore.name,
          street = currentStore.street,
          street_two = currentStore.street_two,
          city = currentStore.city,
          state_province = currentStore.state_province,
          zip_code = currentStore.zip_code;

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
    value: function renderShippingInfo(props) {
      if (props.cart.shipToStore) {
        return this.renderShipToStore(props.currentStore);
      } else if (!props.shipToStore) {
        return this.renderShipToCustomer(props.cart.customerInfo);
      }
    }
  }, {
    key: 'renderOrderCompleteRedirect',
    value: function renderOrderCompleteRedirect(state) {
      if (state.orderCompleted) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/orders/new/order-confirmation' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'checkout-container' },
          (0, _ordersHelper.redirectToStageOneIfNoAlterations)(this.props),
          this.renderCustomerInfo(this.props),
          _react2.default.createElement('br', null),
          this.renderOrderInfo(this.props),
          _react2.default.createElement('br', null),
          this.renderShippingInfo(this.props),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h2',
            null,
            'Total: $',
            (0, _utils.getTotal)(this.props.cart.garments)
          ),
          _react2.default.createElement('br', null),
          this.renderButtons(this.props),
          this.renderOrderCompleteRedirect(this.state)
        )
      );
    }
  }]);

  return Checkout;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.cart,
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Checkout);

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(9);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _format = __webpack_require__(48);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    // submitOrder(props) {
    //   this.props
    //     .submitOrder(props)
    //     .then(res => {
    //       if (res.errors) {
    //         console.log('errors', res);
    //       } else if (res.data.body) {
    //         this.setState({orderCompeted: true});
    //         console.log('success', res);
    //       }
    //     })
    //     .catch(err => {
    //       debugger;
    //     });
    // }

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
          street_two = customerInfo.street_two,
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
        street_two ? _react2.default.createElement(
          'p',
          null,
          street_two
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
          street_two = store.street_two,
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
        street_two ? _react2.default.createElement(
          'p',
          null,
          street_two
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
    value: function renderShippingInfo(confirmedNewOrder) {
      var ship_to_store = confirmedNewOrder.ship_to_store,
          retailer = confirmedNewOrder.retailer,
          customer = confirmedNewOrder.customer;

      if (ship_to_store) {
        return this.renderShipToStore(retailer);
      } else if (!ship_to_store) {
        return this.renderShipToCustomer(customer);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var confirmedNewOrder = this.props.confirmedNewOrder;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: 'Order Completed' }),
        _react2.default.createElement(
          'div',
          { className: 'checkout-container' },
          this.renderCustomerInfo(confirmedNewOrder.customer),
          _react2.default.createElement('br', null),
          this.renderOrderInfo(confirmedNewOrder),
          _react2.default.createElement('br', null),
          this.renderShippingInfo(confirmedNewOrder),
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

var mapStateToProps = function mapStateToProps(store) {
  return {
    confirmedNewOrder: store.confirmedNewOrder
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    resetCart: _actions.resetCart,
    setConfirmedNewOrder: _actions.setConfirmedNewOrder,
    setGrowler: _actions.setGrowler
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrderConfirmation);

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _actions = __webpack_require__(7);

var _SelectGarment = __webpack_require__(408);

var _SelectGarment2 = _interopRequireDefault(_SelectGarment);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _SelectAlterations = __webpack_require__(145);

var _SelectAlterations2 = _interopRequireDefault(_SelectAlterations);

var _Cart = __webpack_require__(404);

var _Cart2 = _interopRequireDefault(_Cart);

var _Checkout = __webpack_require__(405);

var _Checkout2 = _interopRequireDefault(_Checkout);

var _orderDetails = __webpack_require__(412);

var _orderDetails2 = _interopRequireDefault(_orderDetails);

var _reactIntercom = __webpack_require__(80);

var _reactIntercom2 = _interopRequireDefault(_reactIntercom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrdersNew = function (_Component) {
  _inherits(OrdersNew, _Component);

  function OrdersNew() {
    _classCallCheck(this, OrdersNew);

    var _this = _possibleConstructorReturn(this, (OrdersNew.__proto__ || Object.getPrototypeOf(OrdersNew)).call(this));

    _this.state = {
      stage: 1,
      selectedGarment: null,
      selectedAlterations: [],
      selectedGarmentIndex: null
    };

    _this.selectGarment = _this.selectGarment.bind(_this);
    _this.renderStageOne = _this.renderStageOne.bind(_this);
    _this.addAlteration = _this.addAlteration.bind(_this);
    _this.addToCart = _this.addToCart.bind(_this);
    _this.renderOrderDetails = _this.renderOrderDetails.bind(_this);
    _this.renderSelectAlerations = _this.renderSelectAlterations.bind(_this);
    _this.renderCheckout = _this.renderCheckout.bind(_this);
    return _this;
  }

  _createClass(OrdersNew, [{
    key: 'selectGarment',
    value: function selectGarment(garment) {
      this.setState({ selectedGarment: garment, stage: 2 });
    }
  }, {
    key: 'renderStageOne',
    value: function renderStageOne() {
      this.setState({
        selectedGarment: null,
        selectedAlterations: [],
        stage: 1,
        selectedGarmentIndex: null
      }); //, notes: ''});
    }

    // going to try to just pull up the garment type of the item instad of injecting the item from props

  }, {
    key: 'renderSelectAlterations',
    value: function renderSelectAlterations(index, garment, alterations) {
      var selectedGarment = this.props.garments.filter(function (g) {
        return g.id === garment.id;
      })[0];

      this.setState({
        selectedGarment: selectedGarment,
        selectedAlterations: alterations,
        selectedGarmentIndex: index,
        stage: 2
      });
    }
  }, {
    key: 'renderOrderDetails',
    value: function renderOrderDetails() {
      this.setState({ stage: 3 });
    }
  }, {
    key: 'renderCheckout',
    value: function renderCheckout() {
      this.setState({ stage: 4 });
    }
  }, {
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
    key: 'addAlteration',
    value: function addAlteration(alteration) {
      var newSelectedAlterations = this.state.selectedAlterations;
      var newList = void 0;
      if (!this.alterationsIncludeNewSelection(newSelectedAlterations, alteration)) {
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
      this.setState({ selectedAlterations: alts });
    }
  }, {
    key: 'addToCart',
    value: function addToCart() {
      var _state = this.state,
          selectedGarment = _state.selectedGarment,
          selectedAlterations = _state.selectedAlterations;

      var garmentForCart = this.state.selectedGarment;
      garmentForCart.alterations = selectedAlterations;
      this.props.addGarmentToCart(garmentForCart);
      this.renderStageOne();
    }
  }, {
    key: 'updateGarment',
    value: function updateGarment() {
      var _state2 = this.state,
          selectedGarment = _state2.selectedGarment,
          selectedGarmentIndex = _state2.selectedGarmentIndex,
          selectedAlterations = _state2.selectedAlterations;

      var garmentForCart = this.state.selectedGarment;
      garmentForCart.alterations = selectedAlterations;
      this.props.setGarment(garmentForCart, selectedGarmentIndex);
      this.setState({
        stage: 1,
        selectedGarmentIndex: null,
        selectedGarment: null,
        selectedAlterations: []
      });
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
            updateGarment: this.updateGarment.bind(this),
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
            renderSelectAlterations: this.renderSelectAlterations.bind(this),
            stage: this.state.stage,
            renderOrderDetails: this.renderOrderDetails
          })
        )
      );
    }
  }]);

  return OrdersNew;
}(_react.Component);

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

// app id
// j5szofcq
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrdersNew);

/***/ }),
/* 408 */
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
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(135);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _images = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HowToPinModal = function (_Component) {
  _inherits(HowToPinModal, _Component);

  function HowToPinModal() {
    _classCallCheck(this, HowToPinModal);

    var _this = _possibleConstructorReturn(this, (HowToPinModal.__proto__ || Object.getPrototypeOf(HowToPinModal)).call(this));

    _this.state = {
      modalIsOpen: false
    };
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(HowToPinModal, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalIsOpen: true });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalIsOpen: false });
    }
  }, {
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

exports.default = HowToPinModal;

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

var _FormField = __webpack_require__(29);

var _FormField2 = _interopRequireDefault(_FormField);

var _format = __webpack_require__(48);

var _FindCustomerByPhone = __webpack_require__(411);

var _FindCustomerByPhone2 = _interopRequireDefault(_FindCustomerByPhone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerInfo = function (_Component) {
  _inherits(CustomerInfo, _Component);

  function CustomerInfo() {
    _classCallCheck(this, CustomerInfo);

    var _this = _possibleConstructorReturn(this, (CustomerInfo.__proto__ || Object.getPrototypeOf(CustomerInfo)).call(this));

    _this.state = {
      customerExists: null
    };

    _this.updateCustomerExists = _this.updateCustomerExists.bind(_this);
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
        onChange: this.props.updateCustomerInfo
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
        onChange: this.props.updateCustomerInfo
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
        onChange: this.props.updateCustomerInfo
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
        onChange: this.props.updateCustomerInfo
      });
    }
  }, {
    key: 'updateCustomerExists',
    value: function updateCustomerExists(value) {
      this.setState({ customerExists: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$customerInfo = _props.customerInfo,
          first_name = _props$customerInfo.first_name,
          last_name = _props$customerInfo.last_name,
          phone = _props$customerInfo.phone,
          email = _props$customerInfo.email,
          id = _props$customerInfo.id,
          updateCustomerInfo = _props.updateCustomerInfo;
      var customerExists = this.state.customerExists;


      if (customerExists === null) {
        return _react2.default.createElement(_FindCustomerByPhone2.default, {
          updateCustomerInfo: updateCustomerInfo,
          updateCustomerExists: this.updateCustomerExists
        });
      } else {
        return _react2.default.createElement(
          'div',
          null,
          customerExists ? '' : _react2.default.createElement(
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
          )
        );
      }
    }
  }]);

  return CustomerInfo;
}(_react.Component);

exports.default = CustomerInfo;

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _validations = __webpack_require__(33);

var _format = __webpack_require__(48);

var _FormField = __webpack_require__(29);

var _FormField2 = _interopRequireDefault(_FormField);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FindCustomerByPhone = function (_Component) {
  _inherits(FindCustomerByPhone, _Component);

  function FindCustomerByPhone() {
    _classCallCheck(this, FindCustomerByPhone);

    var _this = _possibleConstructorReturn(this, (FindCustomerByPhone.__proto__ || Object.getPrototypeOf(FindCustomerByPhone)).call(this));

    _this.state = {
      phone: '',
      customer: null
    };
    _this.updatePhone = _this.updatePhone.bind(_this);
    return _this;
  }

  _createClass(FindCustomerByPhone, [{
    key: 'updatePhone',
    value: function updatePhone(field, phone) {
      this.setState(_defineProperty({}, field, phone));
    }
  }, {
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
          updateCustomerInfo = _props.updateCustomerInfo,
          updateCustomerExists = _props.updateCustomerExists,
          updateCartCustomerInfo = _props.updateCartCustomerInfo;


      setLoader();
      (0, _actions.findOrCreateCustomer)({ phone: phone }).then(function (res) {
        removeLoader();

        var _res$data = res.data,
            _res$data$body = _res$data.body,
            status = _res$data$body.status,
            id = _res$data$body.id,
            customer = _res$data.body;


        if (status === 404) {
          updateCustomerInfo('phone', phone);
          updateCustomerExists(false);
        } else if (id) {
          var kind = 'success';
          var message = 'Found Customer';
          setGrowler({ kind: kind, message: message });
          updateCartCustomerInfo(customer);
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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setLoader: _actions.setLoader, removeLoader: _actions.removeLoader, setGrowler: _actions.setGrowler, updateCartCustomerInfo: _actions.updateCartCustomerInfo }, dispatch);
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(FindCustomerByPhone);

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _actions = __webpack_require__(7);

var _FormField = __webpack_require__(29);

var _FormField2 = _interopRequireDefault(_FormField);

var _Checkbox = __webpack_require__(142);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _zippopotam = __webpack_require__(426);

var _zippopotam2 = _interopRequireDefault(_zippopotam);

var _validations = __webpack_require__(33);

var _ordersHelper = __webpack_require__(148);

var _CustomerInfo = __webpack_require__(410);

var _CustomerInfo2 = _interopRequireDefault(_CustomerInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderDetails = function (_Component) {
  _inherits(OrderDetails, _Component);

  function OrderDetails() {
    _classCallCheck(this, OrderDetails);

    var _this = _possibleConstructorReturn(this, (OrderDetails.__proto__ || Object.getPrototypeOf(OrderDetails)).call(this));

    _this.updateCustomerInfo = _this.updateCustomerInfo.bind(_this);
    return _this;
  }

  _createClass(OrderDetails, [{
    key: 'updateCustomerInfo',
    value: function updateCustomerInfo(key, value) {
      var custInfo = this.props.cart.customerInfo;
      custInfo[key] = value;
      this.props.updateCartCustomerInfo(custInfo);
    }
  }, {
    key: 'renderCustomerAddress',
    value: function renderCustomerAddress(shipToStore, customerInfo) {
      var _this2 = this;

      if (shipToStore) {
        // do nothing
      } else {
        var zippo = (0, _validations.ValidateZip)(customerInfo.zip) ? _zippopotam2.default.get(customerInfo.zip) : '';

        if (zippo.then && !customerInfo.city && !customerInfo.state) {
          zippo.then(function (res) {
            var formatted_address = res.results[0].formatted_address;
            var city = formatted_address.split(', ')[0];
            var state = formatted_address.split(', ')[1].match(/[a-zA-Z]+/g)[0];
            _this2.updateCustomerInfo('city', city);
            _this2.updateCustomerInfo('state', state);
          });
        }

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_FormField2.default, {
            value: customerInfo.street,
            fieldName: 'street',
            title: 'Address 1',
            className: 'order-details-input',
            onChange: this.updateCustomerInfo
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customerInfo.street_two,
            fieldName: 'street_two',
            title: 'Address 2',
            className: 'order-details-input',
            onChange: this.updateCustomerInfo
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customerInfo.city,
            fieldName: 'city',
            title: 'City',
            className: 'order-details-input',
            onChange: this.updateCustomerInfo
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customerInfo.state_province,
            fieldName: 'state_province',
            title: 'State',
            className: 'order-details-input',
            onChange: this.updateCustomerInfo
          }),
          _react2.default.createElement(_FormField2.default, {
            value: customerInfo.zip_code,
            fieldName: 'zip_code',
            title: 'Zip Code:',
            className: 'order-details-input',
            onChange: this.updateCustomerInfo
          })
        );
      }
    }
  }, {
    key: 'renderShipTo',
    value: function renderShipTo(cart) {
      var _this3 = this;

      var shipToStore = cart.shipToStore,
          customerInfo = cart.customerInfo;

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
              return _this3.props.updateCartShipTo(!shipToStore);
            }
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_Checkbox2.default, {
            checked: !shipToStore,
            text: 'Ship To Customer',
            name: 'ship-to-customer',
            onChange: function onChange() {
              return _this3.props.updateCartShipTo(!shipToStore);
            }
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null)
        ),
        this.renderCustomerAddress(shipToStore, customerInfo)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var customerInfo = this.props.cart.customerInfo;


      return _react2.default.createElement(
        'div',
        { className: 'order-details' },
        (0, _ordersHelper.redirectToStageOneIfNoAlterations)(this.props),
        _react2.default.createElement(
          'h2',
          null,
          'ORDER DETAILS'
        ),
        _react2.default.createElement(_CustomerInfo2.default, {
          customerInfo: customerInfo,
          updateCustomerInfo: this.updateCustomerInfo
        }),
        _react2.default.createElement(
          'h3',
          null,
          'Shipping'
        ),
        this.renderShipTo(this.props.cart)
      );
    }
  }]);

  return OrderDetails;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.cart
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    updateCartCustomerInfo: _actions.updateCartCustomerInfo,
    updateCartShipTo: _actions.updateCartShipTo
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrderDetails);

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(9);

var _actions = __webpack_require__(7);

var _shippingFunctions = __webpack_require__(62);

var _isEmpty = __webpack_require__(34);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _uniqBy = __webpack_require__(598);

var _uniqBy2 = _interopRequireDefault(_uniqBy);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _garments = __webpack_require__(149);

var _supplies = __webpack_require__(767);

var _supplies2 = _interopRequireDefault(_supplies);

var _logo = __webpack_require__(131);

var _logo2 = _interopRequireDefault(_logo);

var _Measurements = __webpack_require__(415);

var _Measurements2 = _interopRequireDefault(_Measurements);

var _OrderComplete = __webpack_require__(84);

var _OrderComplete2 = _interopRequireDefault(_OrderComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrdersShow = function (_Component) {
  _inherits(OrdersShow, _Component);

  function OrdersShow(props) {
    _classCallCheck(this, OrdersShow);

    var _this = _possibleConstructorReturn(this, (OrdersShow.__proto__ || Object.getPrototypeOf(OrdersShow)).call(this));

    _this.state = {
      notes: "",
      displayNotesForm: false,
      showMeasurements: false,
      loadingLabel: false,
      sendingMessenger: false
    };

    _this.renderToggleNotesFormButton = _this.renderToggleNotesFormButton.bind(_this);

    _this.renderNotesForm = _this.renderNotesForm.bind(_this);
    _this.renderPrintInstructions = _this.renderPrintInstructions.bind(_this);
    _this.renderPrintLabel = _this.renderPrintLabel.bind(_this);

    _this.renderArrivedButton = _this.renderArrivedButton.bind(_this);
    _this.checkOrderIn = _this.checkOrderIn.bind(_this);

    _this.renderCompletedButton = _this.renderCompletedButton.bind(_this);

    _this.renderFulfillButton = _this.renderFulfillButton.bind(_this);
    _this.fulfillOrder = _this.fulfillOrder.bind(_this);

    _this.postShipment = _this.postShipment.bind(_this);
    _this.makeShippingLabel = _this.makeShippingLabel.bind(_this);
    return _this;
  }

  _createClass(OrdersShow, [{
    key: "refreshCurrentOrder",
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshCurrentOrder();
    }
  }, {
    key: "getUniqueItemTypes",
    value: function getUniqueItemTypes(items) {
      return (0, _uniqBy2.default)(items.map(function (i) {
        return { type: i.item_type.name, items: [] };
      }), "type");
    }
  }, {
    key: "sortItemsByType",
    value: function sortItemsByType() {
      var items = this.props.currentOrder.items;


      if ((0, _isEmpty2.default)(items)) return [];

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
    key: "getImageForItemType",
    value: function getImageForItemType(name) {
      switch (name) {
        case "Pants":
          return _garments.pantsImage;
        case "Shirt":
          return _garments.shirtImage;
        case "Dress":
          return _garments.dressImage;
        case "Suit Jacket":
          return _garments.suitImage;
        case "Necktie":
          return _garments.tieImage;
        case "Skirt":
          return _garments.skirtImage;
        default:
          return _supplies2.default;
      }
    }
  }, {
    key: "updateNotes",
    value: function updateNotes(notes) {
      this.setState({ notes: notes });
    }
  }, {
    key: "submitNotes",
    value: function submitNotes(event) {
      var _order;

      event.preventDefault();
      var _props = this.props,
          _props$currentOrder = _props.currentOrder,
          orderId = _props$currentOrder.id,
          storeId = _props$currentOrder.store_id,
          tailor = _props.userRoles.tailor;

      var key = tailor ? "provider_notes" : "requester_notes";
      var data = {
        order: (_order = {}, _defineProperty(_order, key, this.state.notes), _defineProperty(_order, "id", orderId), _defineProperty(_order, "store_id", storeId), _order)
      };

      this.props.updateOrder(data).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "checkOrderIn",
    value: function checkOrderIn() {
      var _props2 = this.props,
          _props2$currentOrder = _props2.currentOrder,
          orderId = _props2$currentOrder.id,
          storeId = _props2$currentOrder.store_id,
          tailor = _props2.userRoles.tailor;

      var data = { order: { id: orderId, store_id: storeId, arrived: true } };

      this.props.updateOrder(data).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "showHideNotesForm",
    value: function showHideNotesForm() {
      this.setState({ displayNotesForm: !this.state.displayNotesForm });
    }
  }, {
    key: "fulfillOrder",
    value: function fulfillOrder() {
      var _this3 = this;

      var _props$currentOrder2 = this.props.currentOrder,
          orderId = _props$currentOrder2.id,
          storeId = _props$currentOrder2.store_id;

      var data = { order: { id: orderId, store_id: storeId, fulfilled: true } };

      this.props.setLoader();
      this.setState({ loadingLabel: true });

      this.props.updateOrder(data).then(function (res) {
        var _props3 = _this3.props,
            order = _props3.currentOrder,
            roles = _props3.userRoles;

        var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);
        var shipmentType = (0, _shippingFunctions.shipmentTypes)(roles);

        if (shipmentType.has("mail_shipment")) {
          _this3.makeShippingLabel(shipmentAction);
        }
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "postShipment",
    value: function postShipment(orders, action, type) {
      var _this4 = this;

      this.props.setLoader();
      (0, _shippingFunctions.fireShipmentCreate)(orders, action, type).then(function (res) {
        _this4.props.removeLoader();
        _this4.setState({ loadingLabel: false });
        _this4.refreshCurrentOrder();
      }).catch(function (err) {
        return console.log("err", err);
      });
    }
  }, {
    key: "makeShippingLabel",
    value: function makeShippingLabel(action) {
      return this.postShipment([this.props.currentOrder], action, "mail_shipment");
    }
  }, {
    key: "printShippingLabel",
    value: function printShippingLabel() {
      return window.print();
    }
  }, {
    key: "toggleMeasurementDetailButton",
    value: function toggleMeasurementDetailButton(boolean) {
      this.setState({ showMeasurements: !boolean });
    }
  }, {
    key: "renderDisabledCustLink",
    value: function renderDisabledCustLink() {
      var _props$currentOrder$c = this.props.currentOrder.customer,
          first_name = _props$currentOrder$c.first_name,
          last_name = _props$currentOrder$c.last_name;

      return this.renderLink({
        text: first_name + " " + last_name,
        enabled: false
      });
    }
  }, {
    key: "renderEnabledCustLink",
    value: function renderEnabledCustLink() {
      var _props$currentOrder$c2 = this.props.currentOrder.customer,
          first_name = _props$currentOrder$c2.first_name,
          last_name = _props$currentOrder$c2.last_name,
          id = _props$currentOrder$c2.id;

      return this.renderLink({
        text: first_name + " " + last_name,
        path: "/customers/" + id + "/edit",
        enabled: true
      });
    }
  }, {
    key: "renderOrderNotes",
    value: function renderOrderNotes(field) {
      var notes = this.props.currentOrder[field] || "Not Provided";
      var title = field === "provider_notes" ? "Tailor Notes:" : "Order Notes:";
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h3",
          null,
          title
        ),
        _react2.default.createElement(
          "p",
          { className: "notes" },
          notes
        )
      );
    }
  }, {
    key: "renderAlteration",
    value: function renderAlteration(alteration, index) {
      // original, blind stitch, and cuffed hems should be red
      var hemAlts = ["Shorten Pant Length - Original Hem", "Shorten Pant Length - Blind Stitch Hem", "Shorten Pant Length - Cuffed Hem"];

      var className = hemAlts.includes(alteration.name) ? "red" : "";
      var splitAlt = alteration.name.split(" - ");
      var alt = { name: splitAlt[0] + " - ", specific: splitAlt[1] };

      if (splitAlt[1]) {
        return _react2.default.createElement(
          "li",
          { key: index },
          alt.name,
          _react2.default.createElement(
            "span",
            { className: className },
            alt.specific
          )
        );
      } else {
        return _react2.default.createElement(
          "li",
          { key: index },
          alteration.name
        );
      }
    }
  }, {
    key: "renderLink",
    value: function renderLink(args) {
      var text = args.text,
          path = args.path,
          enabled = args.enabled;

      var linkDiv = void 0;

      if (enabled == true) {
        linkDiv = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: path },
          " ",
          text,
          " "
        );
      } else {
        linkDiv = _react2.default.createElement(
          "div",
          null,
          text
        );
      }

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h3",
          null,
          "Customer:"
        ),
        _react2.default.createElement(
          "h3",
          { className: "blue-link" },
          linkDiv
        )
      );
    }
  }, {
    key: "renderArrivedButton",
    value: function renderArrivedButton() {
      return this.renderButton("Check Order In", { disabled: false }, this.checkOrderIn);
    }
  }, {
    key: "renderFulfillButton",
    value: function renderFulfillButton() {
      return this.renderButton("Fulfill This Order", { disabled: false }, this.fulfillOrder);
    }
  }, {
    key: "renderCompletedButton",
    value: function renderCompletedButton() {
      return this.renderButton("Order Completed ✔️", { disabled: true });
    }
  }, {
    key: "renderPrintLabel",
    value: function renderPrintLabel() {
      var _props4 = this.props,
          order = _props4.currentOrder,
          roles = _props4.userRoles;

      var disabled = this.state.loadingLabel;
      var shipmentAction = (0, _shippingFunctions.shipmentActions)(order, roles);

      var onClick = void 0,
          printPrompt = void 0,
          clickArgs = void 0,
          shipmentDiv = void 0;
      switch ((0, _shippingFunctions.labelState)(roles, order, disabled)) {
        case "needs_label":
          printPrompt = "Create Label";
          onClick = this.makeShippingLabel;
          clickArgs = shipmentAction;
          break;
        case "in_progress":
          printPrompt = "Creating Label";
        case "label_created":
          printPrompt = "Print Label";
          onClick = function onClick() {
            return window.print();
          };
          shipmentDiv = _react2.default.createElement(_OrderComplete2.default, null);
          break;
        default:
          break;
      }

      return _react2.default.createElement(
        "div",
        null,
        this.renderButton(printPrompt, { disabled: disabled, clickArgs: clickArgs }, onClick),
        shipmentDiv
      );
    }
  }, {
    key: "renderButton",
    value: function renderButton(text, params) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return console.log("");
      };

      var className = params.className || "pink-button";
      var clickArgs = params.clickArgs || undefined;
      var disabled = params.disabled;
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "button",
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
    key: "renderItemCaption",
    value: function renderItemCaption(item, itemType, index) {
      var alterations = item.alterations.map(this.renderAlteration);
      var itemCaption = itemType.type + " #" + (index + 1);
      var image = this.getImageForItemType(itemType.type);

      return _react2.default.createElement(
        "div",
        { className: "card", key: index },
        _react2.default.createElement(
          "div",
          { className: "type-heading" },
          _react2.default.createElement("img", { className: "item-type-image", src: image, alt: itemType.name }),
          _react2.default.createElement(
            "h3",
            null,
            itemCaption
          ),
          _react2.default.createElement(
            "ul",
            null,
            alterations
          )
        )
      );
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this5 = this;

      return this.sortItemsByType().map(function (itemType, index) {
        return itemType.items.map(function (item, index) {
          return _this5.renderItemCaption(item, itemType, index);
        });
      });
    }
  }, {
    key: "renderNotesForm",
    value: function renderNotesForm() {
      var _this6 = this;

      if (this.state.displayNotesForm) {
        var _props$userRoles = this.props.userRoles,
            isTailor = _props$userRoles.tailor,
            isAdmin = _props$userRoles.admin;

        var prompt = void 0,
            party = void 0;

        if (isTailor) {
          prompt = "Add Tailor Notes?";
          party = "provider_notes";
        } else if (isAdmin) {
          prompt = "Add Admin Notes?";
          party = "requester_notes";
        }

        var notesField = this.props.currentOrder[party];

        return _react2.default.createElement(
          "form",
          { className: "notes-form", onSubmit: function onSubmit(e) {
              return _this6.submitNotes(e);
            } },
          _react2.default.createElement(
            "label",
            null,
            _react2.default.createElement(
              "h3",
              null,
              prompt
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement("textarea", {
              cols: 43,
              rows: 10,
              defaultValue: notesField,
              onChange: function onChange(e) {
                return _this6.updateNotes(e.target.value);
              }
            })
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement("input", { className: "short-button", type: "submit", value: "Submit" }),
          _react2.default.createElement("hr", null)
        );
      } else {
        return _react2.default.createElement("div", null);
      }
    }
  }, {
    key: "renderToggleNotesFormButton",
    value: function renderToggleNotesFormButton() {
      var _this7 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "button",
          {
            className: "pink-button",
            onClick: function onClick() {
              return _this7.showHideNotesForm();
            }
          },
          this.state.displayNotesForm ? "Hide" : "Add Notes"
        )
      );
    }
  }, {
    key: "renderEmptyDiv",
    value: function renderEmptyDiv() {
      return _react2.default.createElement("div", null);
    }
  }, {
    key: "renderEmptyButtonDivs",
    value: function renderEmptyButtonDivs(count) {
      var output = [];
      while (count > 0) {
        output.push(this.renderEmptyDiv);
        count--;
      }
      return output;
    }
  }, {
    key: "renderOrderControls",
    value: function renderOrderControls() {
      var _props5 = this.props,
          order = _props5.currentOrder,
          roles = _props5.userRoles;
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
        "div",
        null,
        notesButton(),
        notesForm(),
        arrivedButton(),
        instructionButton(),
        fulfillButton(),
        completedButton(),
        labelButton(),
        messengerButton()
      );
    }
  }, {
    key: "renderOrderDetails",
    value: function renderOrderDetails() {
      var _props$userRoles2 = this.props.userRoles,
          admin = _props$userRoles2.admin,
          retailer = _props$userRoles2.retailer,
          tailor = _props$userRoles2.tailor,
          customer = _props$userRoles2.customer;


      var renderList = this.renderList();
      var requesterNotes = this.renderOrderNotes("requester_notes");
      var providerNotes = this.renderOrderNotes("provider_notes");
      var customerLink = tailor || admin ? this.renderEnabledCustLink() : this.renderDisabledCustLink();

      return _react2.default.createElement(
        "div",
        null,
        renderList,
        customerLink,
        requesterNotes,
        providerNotes
      );
    }
  }, {
    key: "renderPrintInstructions",
    value: function renderPrintInstructions() {
      var _props$currentOrder3 = this.props.currentOrder,
          orderId = _props$currentOrder3.id,
          requesterNotes = _props$currentOrder3.requester_notes,
          providerNotes = _props$currentOrder3.provider_notes,
          _props$currentOrder3$ = _props$currentOrder3.customer,
          firstName = _props$currentOrder3$.first_name,
          lastName = _props$currentOrder3$.last_name;

      var orderNotes = requesterNotes || "Not Provided";
      var tailorNotes = providerNotes || "Not Provided";
      var printableContent = this.renderList();

      return _react2.default.createElement(
        "div",
        null,
        this.renderButton("Print Instructions", { disabled: false }, function () {
          return window.print();
        }),
        _react2.default.createElement(
          "div",
          { className: "print print-instructions" },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("img", { src: _logo2.default, style: { maxWidth: "100px" } })
          ),
          _react2.default.createElement(
            "h2",
            null,
            "Alterations for Order #",
            orderId
          ),
          _react2.default.createElement(
            "h4",
            null,
            "Customer Name: ",
            firstName + " " + lastName
          ),
          printableContent,
          _react2.default.createElement(
            "h3",
            null,
            "Order Notes: ",
            _react2.default.createElement(
              "p",
              { style: { display: "inline" } },
              orderNotes
            )
          ),
          _react2.default.createElement(
            "h3",
            null,
            "Taior Notes: ",
            _react2.default.createElement(
              "p",
              { style: { display: "inline" } },
              tailorNotes
            )
          )
        )
      );
    }
  }, {
    key: "renderDetailsOrMeasurementsButton",
    value: function renderDetailsOrMeasurementsButton(roles, state) {
      var showMeasurements = this.state.showMeasurements;

      var value = showMeasurements ? "See Order Details" : "See Measurements";
      var toggleFunction = this.toggleMeasurementDetailButton;

      return _react2.default.createElement("input", {
        type: "submit",
        value: value,
        className: "short-button",
        onClick: function onClick() {
          return toggleFunction(showMeasurements);
        }
      });
    }
  }, {
    key: "renderMeasurements",
    value: function renderMeasurements() {
      var customer = this.props.currentOrder.order.customer;

      return _react2.default.createElement(_Measurements2.default, { customer: customer });
    }
  }, {
    key: "setMainContent",
    value: function setMainContent() {
      var mainContent = void 0;

      if (this.state.showMeasurements) {
        var measurements = this.renderMeasurements();
        mainContent = _react2.default.createElement(
          "div",
          null,
          measurements
        );
      } else {
        var details = this.renderOrderDetails();
        var controls = this.renderOrderControls();
        mainContent = _react2.default.createElement(
          "div",
          null,
          details,
          controls
        );
      }

      return mainContent;
    }
  }, {
    key: "render",
    value: function render() {
      var _props6 = this.props,
          store = _props6.currentStore,
          order = _props6.currentOrder;

      var mainContent = _react2.default.createElement("div", null);
      var headerText = "";

      if (!(0, _isEmpty2.default)(order)) {
        mainContent = this.setMainContent();
        headerText = "Orders / " + store.name + " / #" + order.id;
      }

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_SectionHeader2.default, { text: headerText }),
        _react2.default.createElement(
          "div",
          { className: "order-show" },
          mainContent
        )
      );
    }
  }]);

  return OrdersShow;
}(_react.Component);

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
    removeLoader: _actions.removeLoader
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrdersShow);

/***/ }),
/* 414 */
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
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _isEmpty = __webpack_require__(34);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _actions = __webpack_require__(7);

var _InputMeasurement = __webpack_require__(414);

var _InputMeasurement2 = _interopRequireDefault(_InputMeasurement);

var _measurements = __webpack_require__(423);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Measurements = function (_Component) {
  _inherits(Measurements, _Component);

  function Measurements(props) {
    _classCallCheck(this, Measurements);

    var _this = _possibleConstructorReturn(this, (Measurements.__proto__ || Object.getPrototypeOf(Measurements)).call(this));

    _this.state = {
      showFront: true,
      editEnabled: false,
      measurements: props.measurements
    };
    _this.updateMeasurement = _this.updateMeasurement.bind(_this);
    return _this;
  }

  _createClass(Measurements, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resetCustomerMeasurements();
    }
  }, {
    key: 'resetCustomerMeasurements',
    value: function resetCustomerMeasurements() {
      var _this2 = this;

      console.log('reset customer measuremnts');
      var _props = this.props,
          getCustomerMeasurements = _props.getCustomerMeasurements,
          customer = _props.customer;


      var customer_id = customer.id;
      getCustomerMeasurements({ customer_id: customer_id }).then(function (res) {
        console.log('res');
        _this2.setState({ measurements: _this2.props.measurements });
      }).catch(function (err) {
        return console.log('err', err);
      });
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
      var _this3 = this;

      if (!editEnabled) {
        return _react2.default.createElement('input', {
          className: 'pink-button tiny-button',
          readOnly: true,
          value: 'Edit',
          onClick: function onClick() {
            return _this3.toggleEditEnabled(editEnabled);
          }
        });
      } else {
        return _react2.default.createElement('input', {
          className: 'pink-button tiny-button',
          readOnly: true,
          value: 'Submit',
          onClick: function onClick() {
            return _this3.submitNewMeasurements(_this3.state.measurements);
          }
        });
      }
    }
  }, {
    key: 'submitNewMeasurements',
    value: function submitNewMeasurements(measurements) {
      var _this4 = this;

      this.setState({ editEnabled: false });
      this.props.createCustomerMeasurements(this.state.measurements).then(function (res) {
        return _this4.resetCustomerMeasurements();
      }).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons(editEnabled) {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        { className: 'measurement-buttons-container' },
        _react2.default.createElement('input', {
          className: 'pink-button tiny-button',
          readOnly: true,
          value: 'Front',
          onClick: function onClick() {
            return _this5.showFrontOrBack(true);
          }
        }),
        _react2.default.createElement('input', {
          className: 'pink-button tiny-button',
          readOnly: true,
          value: 'Back',
          onClick: function onClick() {
            return _this5.showFrontOrBack(false);
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
    key: 'updateMeasurement',
    value: function updateMeasurement(kind, value) {
      var newState = this.state;
      newState.measurements[kind] = value;
      this.setState(newState);
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

var mapStateToProps = function mapStateToProps(store) {
  return {
    measurements: store.measurements
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getCustomerMeasurements: _actions.getCustomerMeasurements, createCustomerMeasurements: _actions.createCustomerMeasurements }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Measurements);

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

var _reactRedux = __webpack_require__(4);

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
        var shipping_label = currentOrder.outgoing_shipment.shipping_label;

        return _react2.default.createElement(
          'div',
          { className: 'print' },
          _react2.default.createElement(
            'div',
            { className: 'packing-slip-info' },
            _react2.default.createElement('img', { className: 'packing-slip-label', src: shipping_label })
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
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(9);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var mapStateToProps = function mapStateToProps(store) {
  return {
    currentUser: store.currentUser,
    currentStore: store.currentStore,
    searchResults: store.searchResults
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SearchResults);

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _actions = __webpack_require__(7);

var _FormField = __webpack_require__(29);

var _FormField2 = _interopRequireDefault(_FormField);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _UsersEdit = __webpack_require__(421);

var _UsersEdit2 = _interopRequireDefault(_UsersEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoresEdit = function (_Component) {
  _inherits(StoresEdit, _Component);

  function StoresEdit(props) {
    _classCallCheck(this, StoresEdit);

    var _this = _possibleConstructorReturn(this, (StoresEdit.__proto__ || Object.getPrototypeOf(StoresEdit)).call(this));

    _this.state = {};
    _this.updateState = _this.updateState.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(StoresEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var store = _extends({}, this.props.store);
      this.setState(store);
      this.props.getCurrentStore(this.props.match.params.store_id).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'updateState',
    value: function updateState(field, value) {
      this.setState(_defineProperty({}, field, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var self = this;
      var store = this.state;
      this.props.setLoader();
      this.props.updateStore({ store: store }).then(function (res) {
        if (res.data.body.errors) {
          var kind = 'warning';
          var message = res.data.body.errors[0];

          self.setState(self.props.store);
          self.props.setGrowler({ kind: kind, message: message });
        } else if (res.data.body) {
          var _kind = 'success';
          var _message = 'Store Updated Successfully!';

          _this2.props.setGrowler({ kind: _kind, message: _message });
        }
      }).then(function () {
        return _this2.props.removeLoader();
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'renderForm',
    value: function renderForm(data) {
      var _this3 = this;

      var name = data.name,
          phone = data.phone,
          street1 = data.street1,
          street2 = data.street2,
          city = data.city,
          state = data.state,
          zip = data.zip;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this3.handleSubmit(e);
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
          _react2.default.createElement(_FormField2.default, {
            value: street1,
            fieldName: 'street1',
            title: 'Street:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: street2,
            fieldName: 'street2',
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
            value: state,
            fieldName: 'state',
            title: 'State:',
            onChange: this.updateState
          }),
          _react2.default.createElement(_FormField2.default, {
            value: zip,
            fieldName: 'zip',
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

      if (!store) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      } else {
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
            this.renderForm(this.state),
            _react2.default.createElement('br', null),
            _react2.default.createElement('hr', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_UsersEdit2.default, null)
          )
        );
      }
    }
  }]);

  return StoresEdit;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    store: store.currentStore
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getCurrentStore: _actions.getCurrentStore, updateStore: _actions.updateStore, setGrowler: _actions.setGrowler, setLoader: _actions.setLoader, removeLoader: _actions.removeLoader }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StoresEdit);

// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {
//   getCurrentStore,
//   updateStore,
//   setGrowler,
//   setLoader,
//   removeLoader,
// } from '../../actions';
// import FormField from './../FormField';
// import SectionHeader from './../SectionHeader';
// import UsersEdit from '../users/UsersEdit';
//
// class StoresEdit extends Component {
//   constructor(props) {
//     super();
//     this.state = {};
//     this.updateState = this.updateState.bind(this);
//     this.updateAddressField = this.updateAddressField.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   componentDidMount() {
//     const store = {...this.props.store};
//     this.setState(store);
//     this.props
//       .getCurrentStore(this.props.match.params.store_id)
//       .catch(err => console.log(err));
//   }
//
//   updateState(field, value) {
//     this.setState({[field]: value});
//   }
//
//   updateAddressField(field, value) {
//     this.setState({address: {[field]: value}});
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     var self = this;
//     const store = this.state;
//     this.props.setLoader();
//     this.props
//       .updateStore({store})
//       .then(res => {
//         if (res.data.body.errors) {
//           const kind = 'warning';
//           const message = res.data.body.errors[0];
//
//           self.setState(self.props.store);
//           self.props.setGrowler({kind, message});
//         } else if (res.data.body) {
//           const kind = 'success';
//           const message = 'Store Updated Successfully!';
//
//           this.props.setGrowler({kind, message});
//         }
//       })
//       .then(() => this.props.removeLoader())
//       .catch(err => console.log(err));
//   }
//
//   renderForm(data) {
//     if (!data.address) {
//       return;
//     }
//
//     const {
//       name,
//       phone,
//       address: {street, street_two, city, state_province, zip_code},
//     } = data;
//
//     return (
//       <div>
//         <form onSubmit={e => this.handleSubmit(e)}>
//           <FormField
//             value={name}
//             fieldName={'name'}
//             title={'Name:'}
//             onChange={this.updateState}
//           />
//
//           <FormField
//             value={phone}
//             fieldName={'phone'}
//             title={'Phone:'}
//             onChange={this.updateState}
//           />
//
//           <FormField
//             value={street}
//             fieldName={'street'}
//             title={'Street:'}
//             onChange={this.updateAddressField}
//           />
//
//           <FormField
//             value={street_two}
//             fieldName={'street_two'}
//             title={'Unit:'}
//             onChange={this.updateAddressField}
//           />
//
//           <FormField
//             value={city}
//             fieldName={'city'}
//             title={'City:'}
//             onChange={this.updateAddressField}
//           />
//
//           <FormField
//             value={state_province}
//             fieldName={'state_province'}
//             title={'State:'}
//             onChange={this.updateAddressField}
//           />
//
//           <FormField
//             value={zip_code}
//             fieldName={'zip_code'}
//             title={'Zip:'}
//             onChange={this.updateAddressField}
//           />
//           <input className="short-button" type="submit" value="Update Store" />
//         </form>
//       </div>
//     );
//   }
//
//   render() {
//     const {store} = this.props;
//     console.log('store', store);
//
//     if (!store) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <div className="pos-rel">
//           <SectionHeader text={`Edit / ${store.name}`} />
//           <div className="form-container edit-account">
//             <h3>Edit Store</h3>
//
//             {this.renderForm(this.state)}
//             <br />
//             <hr />
//             <br />
//             <UsersEdit />
//           </div>
//         </div>
//       );
//     }
//   }
// }
//
// const mapStateToProps = store => {
//   return {
//     store: store.currentStore,
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {getCurrentStore, updateStore, setGrowler, setLoader, removeLoader},
//     dispatch
//   );
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(StoresEdit);

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _actions = __webpack_require__(7);

var _constants = __webpack_require__(10);

var _FormField = __webpack_require__(29);

var _FormField2 = _interopRequireDefault(_FormField);

var _FormSelect = __webpack_require__(83);

var _FormSelect2 = _interopRequireDefault(_FormSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoresNew = function (_Component) {
  _inherits(StoresNew, _Component);

  function StoresNew(props) {
    _classCallCheck(this, StoresNew);

    var _this = _possibleConstructorReturn(this, (StoresNew.__proto__ || Object.getPrototypeOf(StoresNew)).call(this));

    _this.state = {
      company_id: '',
      type: '',
      name: '',
      primary_contact_id: '',
      phone: '',
      street: '',
      street_two: '',
      city: '',
      state_province: '',
      zip_code: ''
    };
    _this.updateState = _this.updateState.bind(_this);
    return _this;
  }

  _createClass(StoresNew, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getCompanies().catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'updateState',
    value: function updateState(field, value) {
      this.setState(_defineProperty({}, field, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var store = this.state;
      (0, _actions.createStore)({ store: store }).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          company_id = _state.company_id,
          type = _state.type,
          name = _state.name,
          phone = _state.phone,
          street = _state.street,
          street_two = _state.street_two,
          city = _state.city,
          state = _state.state,
          zip = _state.zip;

      if (this.props.companies.length > 0) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Store New'
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: function onSubmit(e) {
                return _this2.handleSubmit(e);
              } },
            _react2.default.createElement(_FormField2.default, {
              value: name,
              fieldName: 'name',
              title: 'Name: ',
              onChange: this.updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: phone,
              fieldName: 'phone',
              title: 'Phone: ',
              onChange: this.updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: street,
              fieldName: 'street',
              title: 'Street:',
              onChange: this.updateState
            }),
            _react2.default.createElement(_FormField2.default, {
              value: street_two,
              fieldName: 'street_two',
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
            _react2.default.createElement(_FormSelect2.default, {
              value: company_id,
              options: this.props.companies,
              fieldName: 'company_id',
              title: 'Company:',
              onChange: this.updateState
            }),
            _react2.default.createElement(_FormSelect2.default, {
              value: type,
              options: _constants.storeTypes,
              fieldName: 'type',
              title: 'Store Type:',
              onChange: this.updateState
            }),
            _react2.default.createElement('input', { type: 'submit', value: 'Create New Store' })
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }
    }
  }]);

  return StoresNew;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    companies: store.companyList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ getCompanies: _actions.getCompanies }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StoresNew);

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = __webpack_require__(9);

var _actions = __webpack_require__(7);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _isEmpty = __webpack_require__(34);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _Checkbox = __webpack_require__(142);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _OrderComplete = __webpack_require__(84);

var _OrderComplete2 = _interopRequireDefault(_OrderComplete);

var _shippingFunctions = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoresShow = function (_Component) {
  _inherits(StoresShow, _Component);

  function StoresShow(props) {
    _classCallCheck(this, StoresShow);

    var _this = _possibleConstructorReturn(this, (StoresShow.__proto__ || Object.getPrototypeOf(StoresShow)).call(this));

    _this.state = {
      showOrderState: 'new_orders',
      selectedOrders: new Set()
    };

    _this.toggleOrderSelect = _this.toggleOrderSelect.bind(_this);
    _this.setOrderTabState = _this.setOrderTabState.bind(_this);

    _this.renderTailorHeaders = _this.renderTailorHeaders.bind(_this);
    _this.renderRetailerHeaders = _this.renderRetailerHeaders.bind(_this);
    _this.renderHeaderCell = _this.renderHeaderCell.bind(_this);

    _this.renderShippingControls = _this.renderShippingControls.bind(_this);
    _this.renderStateTabs = _this.renderStateTabs.bind(_this);
    _this.renderRetailerRows = _this.renderRetailerRows.bind(_this);
    _this.renderTailorRows = _this.renderTailorRows.bind(_this);
    _this.renderAlertButton = _this.renderAlertButton.bind(_this);

    _this.renderLabelsButton = _this.renderLabelsButton.bind(_this);
    _this.makeLabels = _this.makeLabels.bind(_this);

    _this.renderMessengerButton = _this.renderMessengerButton.bind(_this);
    _this.sendMessenger = _this.sendMessenger.bind(_this);
    return _this;
  }

  _createClass(StoresShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var storeId = this.props.currentUser.store_id;

      this.refreshStoreOrders();
    }
  }, {
    key: 'refreshStoreOrders',
    value: function refreshStoreOrders() {
      var _this2 = this;

      this.props.setLoader();
      var storeId = this.props.currentUser.user.store_id;
      var _props = this.props,
          getStoreOrders = _props.getStoreOrders,
          admin = _props.userRoles.admin,
          adminStoreId = _props.match.params.store_id;

      var id = admin && adminStoreId ? adminStoreId : storeId;

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
      // NOTE: we'll need to update this once we're returning >1 shipment per post.
      // OrderComplete is set up for arrays, but the API is returning objects right now.
      return (0, _shippingFunctions.fireShipmentCreate)(orders, action, type).then(function (res) {
        _this3.props.removeLoader();
        _this3.setState({
          loadingLabel: false,
          selectedOrderShipments: res.data.body
        });
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
              return (0, _isEmpty2.default)(order.shipments);
            });
          }
        case 'in_progress_orders':
          if (roles.tailor) {
            return orders.filter(function (order) {
              return order.arrived && !order.fulfilled;
            });
          } else {
            return orders.filter(function (order) {
              return !(0, _isEmpty2.default)(order.shipments) && order.tailor && !order.fulfilled;
            });
          }
        case 'ready_orders':
          return orders.filter(function (order) {
            return order.fulfilled;
          });
        case 'late_orders':
          return orders.filter(function (order) {
            return order.late;
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
        status = 'In Transit';
        color = 'green';
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

      setTimeout(function () {
        return window.print();
        _this4.setState({ printSet: [] });
      }, 500);
    }
  }, {
    key: 'makeLabels',
    value: function makeLabels(_ref) {
      var _this5 = this;

      var _ref2 = _toArray(_ref),
          orders = _ref2.slice(0);

      var roles = this.props.userRoles;

      if (!(0, _isEmpty2.default)(orders)) {
        var order = [].concat(_toConsumableArray(orders))[0];
        var action = (0, _shippingFunctions.shipmentActions)(order, roles);
        return Promise.all([this.postShipment(orders, action, 'mail_shipment')]).then(function () {
          var printSet = _this5.props.openOrders.filter(function (o) {
            return [].concat(_toConsumableArray(_this5.state.selectedOrders)).find(function (so) {
              return so.id == o.id;
            });
          });

          _this5.setState({ selectedOrders: new Set(), printSet: printSet });
          _this5.printBulkShippingLabel();
        });
      }
    }
  }, {
    key: 'sendMessenger',
    value: function sendMessenger(_ref3) {
      var _this6 = this;

      var _ref4 = _toArray(_ref3),
          orders = _ref4.slice(0);

      var roles = this.props.userRoles;

      if (!(0, _isEmpty2.default)(orders)) {
        var order = orders[0];
        var action = (0, _shippingFunctions.shipmentActions)(order, roles);
        return this.postShipment(orders, action, 'messenger_shipment').then(function () {
          return _this6.setState({ selectedOrders: new Set() });
        });
      }
    }
  }, {
    key: 'alertCustomers',
    value: function alertCustomers(orders) {
      var _this7 = this;

      var _props3 = this.props,
          roles = _props3.userRoles,
          store_id = _props3.currentStore.id;

      this.props.setLoader();
      (0, _actions.alertCustomersPickup)(orders, store_id).then(function (res) {
        _this7.props.removeLoader();
        if (res.body.status === 200) {
          var kind = 'success';
          var message = 'Your customers have been notified to pick up their orders.';
          _this7.props.setGrowler({ kind: kind, message: message });
          _this7.refreshStoreOrders();
        }
      });
    }
  }, {
    key: 'toggleOrderSelect',
    value: function toggleOrderSelect(order) {
      if (!this.state.selectedOrders.has(order)) {
        var newSelectedOrders = this.state.selectedOrders;
        newSelectedOrders.add(order);
        this.setState({ selectedOrders: newSelectedOrders });
      } else {
        var _newSelectedOrders = this.state.selectedOrders;
        _newSelectedOrders.delete(order);
        this.setState({ selectedOrders: _newSelectedOrders });
      }
    }
  }, {
    key: 'setOrderTabState',
    value: function setOrderTabState(state) {
      this.setState({ showOrderState: state });
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
    key: 'renderMessengerButton',
    value: function renderMessengerButton() {
      var roles = this.props.userRoles;

      var orders = this.state.selectedOrders;
      var disabled = this.state.sendingMessenger;
      var onClick = this.sendMessenger;
      return _react2.default.createElement(
        'div',
        null,
        this.renderButton('Send Messenger', {
          disabled: disabled,
          className: 'messenger-button',
          clickArgs: orders
        }, onClick)
      );
    }
  }, {
    key: 'renderLabelsButton',
    value: function renderLabelsButton() {
      var roles = this.props.userRoles;

      var orders = [].concat(_toConsumableArray(this.state.selectedOrders));
      var disabled = this.state.loadingLabel;
      var onClick = this.makeLabels;

      return _react2.default.createElement(
        'div',
        null,
        this.renderButton('Create Labels', {
          disabled: disabled,
          className: 'print-label-button',
          clickArgs: orders
        }, onClick),
        _react2.default.createElement(_OrderComplete2.default, { shipmentSet: this.state.selectedOrderShipments })
      );
    }
  }, {
    key: 'renderAlertButton',
    value: function renderAlertButton() {
      var orders = this.state.selectedOrders;
      var onClick = function onClick() {
        return alertCustomers();
      };
      return _react2.default.createElement(
        'div',
        null,
        this.renderButton('Alert Customers', {
          disabled: false,
          className: 'print-label-button',
          clickArgs: orders
        }, onClick)
      );
    }
  }, {
    key: 'renderShippingControls',
    value: function renderShippingControls() {
      var roles = this.props.userRoles;

      if (roles.admin || roles.retailer) {
        var labelFunction = this.renderLabelsButton;
        var messengerFunction = this.renderMessengerButton;
        var alertFunction = this.renderAlertButton;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'shipping-button-container' },
            labelFunction(),
            messengerFunction()
          ),
          _react2.default.createElement(
            'div',
            { className: 'shipping-button-container' },
            alertFunction()
          )
        );
      } else {
        return _react2.default.createElement('div', null);
      }
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
      var _this8 = this;

      var roles = this.props.userRoles;
      var id = order.id,
          customer = order.customer,
          tailor = order.tailor,
          alterations_count = order.alterations_count;
      var first_name = customer.first_name,
          last_name = customer.last_name;

      var _getOrderStatus = this.getOrderStatus(order),
          color = _getOrderStatus.color,
          status = _getOrderStatus.status;

      var route = '/orders/' + id;
      var orderIsToggled = this.state.selectedOrders.has(order);
      var orderToggle = function orderToggle() {
        return _this8.toggleOrderSelect(order);
      };

      var tailorDiv = void 0;
      if (tailor) {
        tailorDiv = _react2.default.createElement(
          'div',
          { className: 'order-data-cell' },
          tailor.name
        );
      } else {
        tailorDiv = _react2.default.createElement(
          'div',
          { className: 'order-data-cell' },
          'None'
        );
      }
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
          tailorDiv,
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
    key: 'renderStateTabs',
    value: function renderStateTabs() {
      var _this9 = this;

      var allTabs = [{ className: 'order-state-tab', status: 'new_orders', text: 'New' }, {
        className: 'order-state-tab',
        status: 'in_progress_orders',
        text: 'Current'
      }, {
        className: 'order-state-tab',
        status: 'ready_orders',
        text: 'Finished'
      }, { className: 'order-state-tab', status: 'late_orders', text: 'Late' }];

      var tabs = allTabs.map(function (tab, i) {
        if (tab.status == _this9.state.showOrderState) {
          tab.className = tab.className.concat(' selected');
        }
        if (tab.status == 'late_orders') {
          if (_this9.countOrdersByStatus(tab.status) > 0) {
            tab.className = tab.className.concat(' late-orders');
          }
        }

        return _react2.default.createElement(
          'div',
          {
            key: i,
            className: tab.className,
            onClick: function onClick() {
              return _this9.setOrderTabState(tab.status);
            }
          },
          _react2.default.createElement(
            'h3',
            null,
            tab.text,
            ' (',
            _this9.countOrdersByStatus(tab.status),
            ')'
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'order-state-row' },
        tabs
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
    key: 'renderTailorHeaders',
    value: function renderTailorHeaders() {
      var orderHeader = this.renderHeaderCell;
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
    }
  }, {
    key: 'renderRetailerHeaders',
    value: function renderRetailerHeaders() {
      var orderHeader = this.renderHeaderCell;
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
            orderHeader('Tailor', true, false),
            orderHeader('Quantity', true, false)
          )
        )
      );
    }
  }, {
    key: 'renderRetailerRows',
    value: function renderRetailerRows() {
      var _this10 = this;

      var openOrders = this.props.openOrders;

      if (!(0, _isEmpty2.default)(openOrders)) {
        var status = this.state.showOrderState;
        var sortedOrders = this.sortOrdersByStatus(status);
        if (!(0, _isEmpty2.default)(sortedOrders)) {
          return _react2.default.createElement(
            'div',
            { className: 'order-data-container' },
            sortedOrders.map(function (order) {
              return _this10.renderOrderRowWithSelect(order);
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
      } else if (this.state.loadingOrders) {
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
    }
  }, {
    key: 'renderTailorRows',
    value: function renderTailorRows() {
      var _this11 = this;

      var openOrders = this.props.openOrders;

      if (!(0, _isEmpty2.default)(openOrders)) {
        var ordersWithShipments = this.sortOrdersByStatus('new_orders');
        if (!(0, _isEmpty2.default)(ordersWithShipments)) {
          return _react2.default.createElement(
            'div',
            { className: 'order-data-container' },
            ordersWithShipments.map(function (order) {
              return _this11.renderOrderRow(order);
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
      } else if (this.state.loadingOrders) {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StoresShow);

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(6);

var _actions = __webpack_require__(7);

var _FormField = __webpack_require__(29);

var _FormField2 = _interopRequireDefault(_FormField);

var _SectionHeader = __webpack_require__(19);

var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

var _validations = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersEdit = function (_Component) {
  _inherits(UsersEdit, _Component);

  function UsersEdit() {
    _classCallCheck(this, UsersEdit);

    var _this = _possibleConstructorReturn(this, (UsersEdit.__proto__ || Object.getPrototypeOf(UsersEdit)).call(this));

    _this.state = {
      password: '',
      passwordConfirmation: '',
      submitDisabled: true
    };
    _this.updateState = _this.updateState.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(UsersEdit, [{
    key: 'updateState',
    value: function updateState(key, value) {
      var _this2 = this;

      this.setState(_defineProperty({}, key, value), function () {
        _this2.validatePasswords(_this2.state.password, _this2.state.passwordConfirmation);
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var _state = this.state,
          password = _state.password,
          passwordConfirmation = _state.passwordConfirmation;

      if (password === passwordConfirmation) {
        var id = this.props.user.user.id;
        this.props.updatePassword({
          id: id,
          password: password,
          password_confirmation: passwordConfirmation
        }).then(function (res) {
          var kind = 'success';
          var message = 'Password Updated';
          _this3.props.setGrowler({ kind: kind, message: message });
          _this3.setState({
            password: '',
            passwordConfirmation: '',
            submitDisabled: true
          });
        }).catch(function (err) {
          return console.log('err', err);
        });
      }
    }
  }, {
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
      var _state2 = this.state,
          password = _state2.password,
          passwordConfirmation = _state2.passwordConfirmation,
          submitDisabled = _state2.submitDisabled;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Edit User'
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
    }
  }]);

  return UsersEdit;
}(_react.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    user: store.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updatePassword: _actions.updatePassword, setGrowler: _actions.setGrowler }, dispatch);
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersEdit);

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var takeUpPantHemImage = exports.takeUpPantHemImage = 'https://i.imgur.com/MbK4cu8.png';
var taperPantLegImage = exports.taperPantLegImage = 'https://i.imgur.com/y0NcpxQ.png';
var pantsSeatWaistbandTakenInImage = exports.pantsSeatWaistbandTakenInImage = 'https://i.imgur.com/7spzlyh.png';
var shirtSleevesLengthTakenUp = exports.shirtSleevesLengthTakenUp = 'https://i.imgur.com/kYV3Kqb.png';
var shirtSleevesTakenIn = exports.shirtSleevesTakenIn = 'https://i.imgur.com/f1SDxZp.png';
var shirtHemTakenUp = exports.shirtHemTakenUp = 'https://i.imgur.com/Lcf2yaE.png';
var tShirtHemTakenUp = exports.tShirtHemTakenUp = 'https://i.imgur.com/O1puUBn.png';
var shirtShouldersTakenIn = exports.shirtShouldersTakenIn = 'https://i.imgur.com/UZ3mpJK.png';
var shortenSkirt = exports.shortenSkirt = 'https://i.imgur.com/ku1eh7y.png';
var takeInSkirt = exports.takeInSkirt = 'https://i.imgur.com/tkagYwS.png';
var shortenDress = exports.shortenDress = 'https://i.imgur.com/dpx4LJB.png';
var takeInDress = exports.takeInDress = 'https://i.imgur.com/W3h6tfD.png';
var shortenFromDressShoulders = exports.shortenFromDressShoulders = 'https://i.imgur.com/gaN3b3E.png';
var shortenJacketLength = exports.shortenJacketLength = 'https://i.imgur.com/ysN9RLc.png';
var shortenSleeveLength = exports.shortenSleeveLength = 'https://i.imgur.com/9twuKcb.png';
var jacketSidesTakenIn = exports.jacketSidesTakenIn = 'https://i.imgur.com/aqN0fEM.png';
var jacketSleevesTakenIn = exports.jacketSleevesTakenIn = 'https://i.imgur.com/nSJSljk.png';
var shortenTie = exports.shortenTie = 'https://i.imgur.com/kH7dXbQ.png';
var jeansSeatWaistbandTakenInImage = exports.jeansSeatWaistbandTakenInImage = 'https://i.imgur.com/xkeDQjt.png';
var shirtSideSeamsTakenIn = exports.shirtSideSeamsTakenIn = 'https://i.imgur.com/betEXSc.png';

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FrontImage = exports.FrontImage = 'https://i.imgur.com/5w6R51N.png';
var BackImage = exports.BackImage = 'https://i.imgur.com/BMLPKyi.png';

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(61);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(6);

var _reactRedux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(81);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _Router = __webpack_require__(361);

var _Router2 = _interopRequireDefault(_Router);

var _MainPrint = __webpack_require__(362);

var _MainPrint2 = _interopRequireDefault(_MainPrint);

var _reducers = __webpack_require__(363);

var _reducers2 = _interopRequireDefault(_reducers);

var _setAuthToken = __webpack_require__(133);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// uncomment below to toggle on/off redux logger
// import logger from 'redux-logger';
//const store = createStore(rootReducer, applyMiddleware(thunk, logger));

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
var _localStorage = localStorage,
    AirTailorTokens = _localStorage.AirTailorTokens,
    CurrentUser = _localStorage.CurrentUser,
    CurrentStore = _localStorage.CurrentStore;


if (AirTailorTokens && CurrentUser && CurrentStore) {
  var parsedToken = JSON.parse(AirTailorTokens);
  var parsedUser = JSON.parse(CurrentUser);
  var parsedStore = JSON.parse(CurrentStore);

  (0, _setAuthToken2.default)(parsedToken);
  store.dispatch((0, _actions.setCurrentUser)(parsedUser));
  store.dispatch((0, _actions.setUserRole)(parsedUser.roles[0].name));
  store.dispatch((0, _actions.setCurrentStore)(parsedStore));
} else {
  delete localStorage.AirTailorToken;
  delete localStorage.CurrentUser;
  delete localStorage.CurrentStore;
}

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_Router2.default, null)
), document.querySelector('#root'));

/***/ }),
/* 425 */
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
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(46);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(425);

var _config2 = _interopRequireDefault(_config);

var _nodeFetch = __webpack_require__(134);

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
/* 427 */
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
      id: 3,
      garmentId: 1,
      title: 'Shorten Pant Length - Blind Stitch Hem',
      price: 15.5,
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
      type: 'sleevesTakenIn'
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
      howToPin: _how_to_pin.jacketSleevesTakenIn,
      type: 'jacketSleevesTakenIn'
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

var _how_to_pin = __webpack_require__(422);

/***/ }),
/* 428 */
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
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(10);

var _reducerHelpers = __webpack_require__(449);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  garments: [],
  customerInfo: {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    street: '',
    street_two: '',
    city: '',
    state_province: '',
    zip_code: '',
    agrees_to_terms: true
  },
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
    case _constants.UPDATE_CART_CUSTOMER_INFO:
      return _extends({}, state, {
        customerInfo: action.customerInfo
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
        customerInfo: {
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          street: '',
          street_two: '',
          city: '',
          state_province: '',
          zip_code: '',
          agrees_to_terms: true
        },
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
/* 430 */
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
/* 431 */
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
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = [];
var conversationsReducer = function conversationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {
    case _constants.SET_CONVERSATIONS:
      return action.conversations;
    default:
      return state;
  }
};

exports.default = conversationsReducer;

/***/ }),
/* 433 */
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
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = {};

var currentStoreReducer = function currentStoreReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_CURRENT_STORE:
      return action.store;default:
      return state;
  }
};

exports.default = currentStoreReducer;

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var _isEmpty = __webpack_require__(34);

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
/* 436 */
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

var _garments = __webpack_require__(149);

/***/ }),
/* 437 */
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
/* 438 */
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
/* 439 */
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
/* 440 */
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
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(10);

var initialState = [];
var messagesReducer = function messagesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};

exports.default = messagesReducer;

/***/ }),
/* 442 */
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
/* 443 */
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
/* 444 */
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
/* 445 */
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
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(10);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      return _extends({}, state, _defineProperty({}, action.role, true));
    case _constants.RESET_USER_ROLE:
      return initialState;
    default:
      return state;
  }
};

exports.default = userRoleReducer;

/***/ }),
/* 447 */
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
/* 448 */
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
/* 449 */
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
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpStatusResponse = exports.SignUpRequest = undefined;

var _axios = __webpack_require__(46);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUpRequest = exports.SignUpRequest = function SignUpRequest(email, password, passwordConfirmation) {
  var url = _constants.expressApi + '/sign_up';
  var data = { email: email, password: password, passwordConfirmation: passwordConfirmation };
  return _axios2.default.post(url, data);
};

var SignUpStatusResponse = exports.SignUpStatusResponse = function SignUpStatusResponse(status) {
  if (status == 200) {
    return 'Sign Up Successful : ) \n Please login';
  }
};

/***/ }),
/* 451 */
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
      roles = user.roles,
      uid = user.uid;

  var CurrentUser = { uid: uid, email: email, store_id: store_id, roles: roles, id: id };
  localStorage.setItem('CurrentUser', JSON.stringify(CurrentUser));
  return true;
}

function setLocalStorageStore(store) {
  localStorage.setItem('CurrentStore', JSON.stringify(store));
  return true;
}

/***/ }),
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(150)(undefined);
// imports


// module
exports.push([module.i, ".loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em; }\n\n.loader {\n  margin: 60px auto;\n  font-size: 10px;\n  position: fixed;\n  top: 40%;\n  left: calc(50% - 60px);\n  z-index: 10;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(0, 0, 51, 0.2);\n  border-right: 1.1em solid rgba(0, 0, 51, 0.2);\n  border-bottom: 1.1em solid rgba(0, 0, 51, 0.2);\n  border-left: 1.1em solid #000033;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear; }\n\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.empty-div {\n  display: none; }\n", ""]);

// exports


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(150)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,600);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alegreya);", ""]);

// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\nhtml,\nbody,\n#root {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\na {\n  font-family: Raleway;\n  font-weight: normal;\n  color: #000033;\n  text-decoration: none; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: Alegreya;\n  color: #000033;\n  letter-spacing: 0.5px; }\n\nh3 {\n  font-size: 16px; }\n\nul {\n  list-style-type: none; }\n\nli {\n  color: #000033;\n  font-family: Raleway;\n  margin: auto;\n  line-height: 1.8; }\n\nh1 {\n  margin: 0; }\n\n.flex-container, .container, .section-header, .shipping-button-container, .table-row, .archive-headers-row, .archive-row, .order-row, .order-headers-row, .order-headers-row-no-select, .conversation-row, .store-boxes, .type-heading, .measurement-buttons-container, .messages-container, .new-order-content, .alteration-select, .archive-link, .order-state-row, .order-row-link-no-select, .order-row-link, .order-data-headers-container, .order-headers-container-no-select, .conversation-row-link {\n  display: flex;\n  flex-wrap: wrap; }\n\n.content {\n  flex: 1 0 25%;\n  overflow: auto; }\n\n.hoverable, nav li:hover, .table-link:hover, .archive-link:hover, .order-row-link-no-select:hover, .order-row-link:hover, .conversation-row-link:hover, .garment-card, .alteration-card, .modal-eye, .close-modal, .remove-from-cart-button, .cart-item {\n  background-color: rgba(0, 0, 51, 0.1);\n  cursor: pointer; }\n\n.container {\n  width: 100%;\n  height: 100%; }\n\n.backLink {\n  display: inline-block;\n  position: absolute;\n  font-size: 20px;\n  font-family: Raleway;\n  text-decoration: underline;\n  margin-left: 90px;\n  margin-top: 50px; }\n\n.flatcard, .card, .order-card, .message, .garment-card, .alteration-card {\n  background: #fff;\n  border-radius: 5px;\n  margin: 50px 0;\n  position: relative;\n  width: 80%;\n  padding: 25px;\n  border: 2px solid #000033; }\n\n.card {\n  border: 1px solid #000033;\n  background: #fff;\n  border-radius: 2px;\n  margin: 50px 0;\n  position: relative;\n  width: 80%;\n  padding: 25px;\n  overflow: scroll;\n  /*box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);*/\n  /*box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);*/ }\n\n.pos-rel {\n  position: relative; }\n\n.unclickable, .disabled-alt, .disabled-alt * {\n  /*pointer-events: none;*/\n  cursor: not-allowed; }\n\n.full-width {\n  width: 100%; }\n\n.checkbox-container {\n  background-color: #000033;\n  display: inline; }\n\ninput[type=\"submit\"]:disabled {\n  cursor: not-allowed; }\n\n.link {\n  color: white;\n  font-family: Alegreya; }\n\n.blue-link {\n  color: #000033;\n  font-family: Raleway;\n  font-size: 16px;\n  font-weight: normal;\n  padding-bottom: 20px;\n  padding-left: 20px; }\n\n.blue-link a:hover {\n  text-decoration: underline; }\n\n.text-area {\n  margin-top: 10px;\n  border-radius: 5px;\n  border: 1px solid #000033;\n  padding-left: 10px;\n  padding-top: 10px; }\n\n.ReactModal__Overlay.ReactModal__Overlay--after-open {\n  z-index: 100; }\n\n.red {\n  color: #de0421; }\n\n.navbar {\n  width: 175px;\n  margin: 0;\n  font-family: Raleway;\n  border-right: 1px solid #000033;\n  height: 100%;\n  position: relative; }\n\ndiv.navbar-logo {\n  border-bottom: 1px solid #000033;\n  height: 93px; }\n\n.navbar-logo > h5 {\n  margin-left: 36px;\n  margin-top: 8px;\n  margin-bottom: 20px;\n  font-family: Raleway;\n  letter-spacing: 2px;\n  font-size: 11px; }\n\n.navbar-logo > .logo {\n  width: 125px;\n  margin-left: 25px;\n  margin-top: 20px; }\n\nnav ul {\n  padding-left: 0px; }\n\nnav img {\n  display: inline-block;\n  width: 25px;\n  padding-right: 20px;\n  vertical-align: -9px; }\n\nnav li {\n  list-style: none;\n  height: 45px; }\n\nnav li:hover {\n  background-color: lightgrey; }\n\nnav li a {\n  padding-left: 9%;\n  display: inline-block;\n  width: 91%;\n  line-height: 40px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n  color: #000033; }\n\n.hamburger {\n  width: 50px;\n  height: 50px;\n  padding-top: 20px;\n  padding-left: 10px;\n  position: absolute;\n  z-index: 1; }\n\n.hamburger:hover {\n  cursor: pointer; }\n\n.orders-search {\n  width: 90%;\n  height: 30px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 25px;\n  text-indent: 35px;\n  border-radius: 20px;\n  border: none;\n  background-color: lightgrey;\n  background-image: url(" + __webpack_require__(359) + ");\n  background-size: 20px;\n  background-repeat: no-repeat;\n  font-size: 12px;\n  background-position: 5px 50%; }\n\n.navbar-links-li {\n  height: 45px;\n  padding-top: 2px; }\n\n.signout-link {\n  position: absolute;\n  bottom: 5px;\n  width: 100%; }\n\n.close-menu-link {\n  font-size: 11px;\n  line-height: normal;\n  padding: 0;\n  display: inline-block;\n  float: right;\n  width: 100%;\n  padding-top: 10px; }\n\n.close-menu-link > p {\n  display: inline;\n  margin: 0px;\n  padding-left: 50px;\n  line-height: 2; }\n\n.triangle {\n  display: inline;\n  width: 0;\n  height: 0;\n  border-top: 22px solid transparent;\n  border-right: 25px solid #000033;\n  border-bottom: 22px solid transparent;\n  float: right;\n  margin-top: -10px; }\n\n.form-input {\n  border: none;\n  background-color: rgba(216, 237, 252, 0.5);\n  margin-top: 10px;\n  height: 40px;\n  width: 360px;\n  padding-left: 40px;\n  border-radius: 5px;\n  border: 1px solid #000033; }\n\ninput[type=\"submit\"]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed; }\n\n.button, input[type=\"submit\"], .pink-button, .standard-button, .signin-button, .shipping-button, .print-label-button, .messenger-button {\n  color: white;\n  margin-top: 15px;\n  height: 40px;\n  border-radius: 5px;\n  font-size: 12px;\n  cursor: pointer;\n  font-weight: bold;\n  height: 50px; }\n\n.pink-button {\n  background-color: pink;\n  border: 2px hotpink solid;\n  color: #000033;\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.standard-button, .signin-button {\n  background-color: #000033;\n  width: 200px; }\n\n.long-button, .pink-button {\n  width: 365px; }\n\n.short-button, .shipping-button, .print-label-button, .messenger-button {\n  background-color: #000033;\n  width: 150px; }\n\n.tiny-button {\n  background-color: #000033;\n  text-align: center;\n  width: 80px;\n  padding: 0; }\n\n.shipping-button, .print-label-button, .messenger-button {\n  margin: 20px; }\n\n.messenger-button {\n  background-color: #de0421; }\n\n.shipping-button-container {\n  justify-content: center; }\n\n.shipping-button-container:first-child {\n  margin-top: 10px; }\n\n.table-row-container, .table-headers-container, .archive-headers-container, .archive-container, .conversation-row-container {\n  padding-left: 5%;\n  padding-right: 5%; }\n\n.table-cell, .table-header-cell, .archive-header-cell, .order-header-cell-no-select, .order-select-header-cell, .order-data-header-cell, .order-data-headers-container, .order-headers-container-no-select, .archive-link, .archive-order-cell, .order-row-link-no-select, .order-row-link, .order-row-cell, .order-cell-no-select, .order-select-cell, .order-data-cell, .conversation-row-link, .conversation-cell {\n  text-align: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 15%; }\n\n.full-width-text-row, .loading-orders, .no-orders {\n  padding-top: 2%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 100%;\n  text-align: center;\n  font-family: Alegreya; }\n\n.table-headers-container, .archive-headers-container {\n  padding-left: 2%;\n  padding-right: 2%; }\n\n.table-header-cell, .archive-header-cell, .order-header-cell-no-select, .order-select-header-cell, .order-data-header-cell, .order-data-headers-container, .order-headers-container-no-select {\n  text-transform: uppercase; }\n\n.row-border-bottom {\n  border-bottom: 1px solid gray; }\n\n.row-border-top, .break-row, .archive-header-break-row, .archive-break-row, .order-header-break-row, .order-data-break-row, .conversation-break-row {\n  border-top: 1px solid gray; }\n\n.break-row, .archive-header-break-row, .archive-break-row, .order-header-break-row, .order-data-break-row, .conversation-break-row {\n  flex-basis: 1 1 100%; }\n\n.form-container {\n  width: 30px;\n  min-width: 400px;\n  /*margin: 10% auto; */\n  margin: 110px auto; }\n\n.sign-in-logo > .logo {\n  width: 200px; }\n\n.sign-in-logo > h5 {\n  font-family: Alegreya;\n  letter-spacing: 0.5px;\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-size: 24px; }\n\n.forgot-password {\n  margin-left: 20px; }\n\n.section-header {\n  background-color: #000033;\n  border-bottom: 1px solid #000033;\n  height: 93px;\n  line-height: 93px;\n  width: 100%; }\n\n.section-header > h2 {\n  color: white;\n  padding-left: 50px;\n  margin-top: 0;\n  width: 60%;\n  font-weight: normal;\n  font-family: Alegreya;\n  letter-spacing: 0.5px;\n  font-size: 21px; }\n\n.section-header a {\n  color: white;\n  font-family: Alegreya; }\n\n.cart-ribbon {\n  background-color: #de0421;\n  width: 75px;\n  margin-left: auto;\n  margin-right: 10%;\n  height: 94px; }\n\n.cart-ribbon-triangle {\n  width: 0;\n  height: 0;\n  border-left: 37px solid transparent;\n  border-right: 38px solid transparent;\n  border-top: 26px solid #de0421;\n  position: relative;\n  z-index: 10; }\n\n.cart-ribbon-sign {\n  color: white;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 96px;\n  font-weight: 900;\n  font-family: Raleway;\n  -webkit-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.rotate {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n/*.rotate0 {\n  -webkit-transform:rotate(0deg);\n  transform:rotate(0deg);\n}\n\n.rotate45 {\n  -webkit-transform:rotate(45deg);\n  transform:rotate(45deg);\n}*/\n@media screen and (max-width: 981px) {\n  .section-header > h2 {\n    padding-left: 80px; } }\n\n@media screen and (max-width: 1039px) {\n  .section-header > h2 {\n    max-width: 418px; } }\n\n.greeting {\n  font-weight: bold;\n  letter-spacing: .5px;\n  text-align: center;\n  max-width: 90%;\n  margin: 0 auto; }\n\nh2.greeting {\n  font-size: 45px;\n  margin-bottom: 0;\n  margin-top: 60px; }\n\np.greeting {\n  font-size: 18px;\n  font-family: Raleway;\n  margin-top: 10px;\n  color: #000033; }\n\n.store-boxes {\n  justify-content: center; }\n\n.order-card {\n  padding: 0;\n  flex: 1 0 25%;\n  border: 1px solid #000033;\n  width: 150px;\n  height: 300px;\n  margin: 5px 40px;\n  border-radius: 3px;\n  margin-top: 60px; }\n\n.order-card-icon {\n  max-width: 45px;\n  display: block;\n  margin: 0 auto;\n  padding-top: 35px; }\n\n.order-card-text {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 15px; }\n\n.order-card-call {\n  text-decoration: underline;\n  margin-top: 29px;\n  font-weight: bold; }\n\n.order-card-count {\n  font-size: 45px;\n  font-family: Alegreya;\n  margin: 0;\n  padding-top: 30px;\n  padding-bottom: 15px; }\n\n.order-card-type {\n  line-height: 0; }\n\n.late-orders {\n  color: red; }\n\n.late-exclamation {\n  color: red;\n  font-family: Alegreya;\n  font-size: 48px;\n  font-weight: bold;\n  line-height: 40px; }\n\n.order-form {\n  padding-left: 90px; }\n\n.order-show {\n  padding-left: 80px; }\n\n.item-type-image {\n  width: 75px;\n  height: 75px;\n  padding-right: 20px; }\n\n.type-heading {\n  justify-content: flex-start; }\n\n.notes {\n  padding: 20px;\n  padding-top: 0;\n  font-family: Raleway; }\n\n.type-list {\n  margin-left: 40px;\n  list-style: unset;\n  line-height: 2; }\n\n.form-label {\n  padding-top: 50px;\n  padding-top: 50px;\n  color: #000033;\n  font-family: Alegreya; }\n\n.notes-form > textarea {\n  width: 355px; }\n\n.measurements-image {\n  display: block;\n  margin: 0;\n  width: 500px; }\n\n.measurement-buttons-container {\n  justify-content: space-around;\n  max-width: 500px;\n  margin-bottom: 50px; }\n\n.customer-measurements {\n  position: relative; }\n\n.input-measurement {\n  width: 40px;\n  height: 25px;\n  line-height: 25px;\n  text-align: center;\n  border: 3px solid pink;\n  border-radius: 5px;\n  position: absolute; }\n\n.chest_bust {\n  top: 271px;\n  left: 178px; }\n\n.upper_torso {\n  top: 350px;\n  left: 178px; }\n\n.elbow {\n  top: 277px;\n  left: 39px; }\n\n.sleeve_length {\n  top: 257px;\n  left: 40px; }\n\n.waist {\n  top: 430px;\n  left: 178px; }\n\n.shoulder_to_waist {\n  top: 205px;\n  left: 262px; }\n\n.hips {\n  top: 510px;\n  left: 350px; }\n\n.pant_length {\n  top: 580px;\n  left: 100px; }\n\n.thigh {\n  top: 665px;\n  left: 168px; }\n\n.knee {\n  top: 770px;\n  left: 168px; }\n\n.calf {\n  top: 880px;\n  left: 168px; }\n\n.ankle {\n  top: 1000px;\n  left: 168px; }\n\n.back_width {\n  top: 195px;\n  left: 225px; }\n\n.bicep {\n  top: 226px;\n  left: 66px; }\n\n.forearm {\n  top: 329px;\n  left: 16px; }\n\n.inseam {\n  top: 900px;\n  left: 226px; }\n\n.print {\n  visibility: hidden;\n  display: none;\n  margin-top: 20px;\n  margin-left: 20px; }\n\n@media print {\n  body * {\n    visibility: hidden; }\n  .print,\n  .print * {\n    visibility: visible;\n    display: block; }\n  .print {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block; } }\n\n.packing-slip-info {\n  font-family: arial; }\n\n.packing-slip-info h3,\n.packing-slip-info p,\n.packing-slip-info-img,\n.print-alteration {\n  margin-left: -30px;\n  margin-right: 30px; }\n\n.packing-slip-info h3 {\n  font-family: Alegreya;\n  font-size: 27px;\n  margin-bottom: 20px;\n  padding-top: 20px;\n  margin-left: 10px;\n  font-weight: bold; }\n\n.packing-slip-info p {\n  font-size: 10px;\n  margin-left: 10px;\n  font-family: arial; }\n\n.packing-slip-info-orderid {\n  text-align: center;\n  font-weight: bold; }\n\n.packing-slip-label {\n  display: block;\n  width: 100%;\n  margin: auto; }\n\n.print-alteration-li {\n  font-family: arial;\n  font-size: 10px;\n  line-height: 1.2; }\n\n.print-alteration-ul {\n  font-family: arial;\n  list-style-type: none;\n  padding-left: 0;\n  text-align: center;\n  margin-right: 30px; }\n\n.packing-slip-info-img {\n  display: block;\n  width: 100px;\n  margin: 20px auto;\n  padding-right: 30px; }\n\n.print-instructions {\n  width: 90%; }\n\n.print-instructions > h2 {\n  font-size: 20px; }\n\n.print-instructions > h4 {\n  font-size: 14px; }\n\n.print .card {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  margin: 20px;\n  padding-right: 10px; }\n\n.print .card .item-type-image {\n  width: 50px;\n  height: 50px;\n  padding-right: 0px; }\n\n.print .card ul {\n  padding-left: 10px;\n  margin-bottom: 0px; }\n\n.print .card ul li {\n  font-size: 10px; }\n\n.print h2 {\n  font-size: 15px; }\n\n.print h3 {\n  font-size: 12px; }\n\n.print h4 {\n  font-size: 10px; }\n\n.print .card .type-heading h3,\n.print .card .type-heading ul,\n.print .card .type-heading li {\n  display: inline; }\n\n.messages-container {\n  margin: 15px auto; }\n\n.message-list {\n  height: calc(100vh - 223px);\n  overflow: scroll;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 20%;\n  padding-right: 20%; }\n\n.messages-form form {\n  background-color: lightgrey;\n  height: 100px;\n  margin: 0 auto;\n  display: flex; }\n\n.messages-form-inner-box {\n  width: 500px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center; }\n\n.messages-form-inner-box textarea {\n  padding: 10px;\n  width: 400px;\n  margin-right: 12px;\n  height: 48px;\n  margin-top: 0;\n  font-family: Alegreya;\n  color: #000033;\n  resize: none; }\n\n.messages-form-inner-box .message-button {\n  width: 100px;\n  background-color: lightgrey;\n  border: 0px;\n  font-size: 18px;\n  font-family: Raleway;\n  font-weight: bold;\n  color: #000033;\n  margin-top: 0px; }\n\n.message {\n  width: 400px;\n  border: 1px solid #000033;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  padding: 15px;\n  padding-bottom: 0px; }\n\n.message-date h3 {\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  font-weight: bold;\n  font-family: Raleway; }\n\n.message-heading {\n  display: flex;\n  justify-content: space-between; }\n\n.message h4 {\n  text-transform: uppercase;\n  font-family: Raleway;\n  font-weight: bolder;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 14px; }\n\n.message p {\n  font-family: Alegreya;\n  color: #000033;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 10px auto;\n  font-size: 15px; }\n\n.sender {\n  float: right;\n  clear: both; }\n\n.new-order-content {\n  margin-left: 50px;\n  justify-content: flex-start;\n  margin-bottom: 50px; }\n\n.stage-section {\n  margin-right: 30px; }\n\n.alteration-select {\n  max-width: 570px;\n  justify-content: flex-start; }\n\n.select-garment {\n  max-width: 675px; }\n\n.garment-image {\n  height: 90px; }\n\n.garment-card, .alteration-card {\n  width: 150px;\n  height: 150px;\n  text-align: center;\n  display: inline-block;\n  overflow: unset;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 20px;\n  margin-top: 20px; }\n\n.garment-card > h2, .alteration-card > h2 {\n  margin-top: 5px;\n  margin-bottom: 30px;\n  font-family: Raleway;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center; }\n\n.alteration-card {\n  width: 180px;\n  height: 60px;\n  margin-bottom: 5px; }\n\n.alt-price-info {\n  padding-right: 15px;\n  margin-top: 12px; }\n\n.modal-eye {\n  background-color: white;\n  width: 35px; }\n\n.how-to-pin-image {\n  height: 460px;\n  display: block;\n  margin: 0 auto; }\n\n.close-modal {\n  background-color: white;\n  font-family: Raleway;\n  color: #000033;\n  font-weight: bold; }\n\n.how-to-pin-modal-container {\n  display: inline; }\n\n.order-details {\n  max-width: 325px; }\n\n.order-details-input {\n  width: 264px; }\n\n.customer-agrees-prompt {\n  font-size: 20px;\n  word-wrap: break-word;\n  font-family: Alegreya;\n  color: #000033;\n  font-weight: bold;\n  line-height: 1.5; }\n\n.order-details-notes-textarea {\n  background-color: rgba(216, 237, 252, 0.5);\n  margin-top: 10px;\n  height: 107px;\n  width: calc(100% - 30px);\n  border-radius: 5px;\n  border: 1px solid #000033;\n  padding-left: 10px; }\n\n.disabled-alt {\n  opacity: 0.3; }\n\n.selected-alt {\n  background-color: #dcdcdc;\n  cursor: pointer; }\n\n.selected-alt * {\n  background-color: #dcdcdc;\n  cursor: pointer; }\n\n.price-how-to-pin-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 15px;\n  background-color: white;\n  cursor: pointer; }\n\n.price-how-to-pin-container * {\n  background-color: white;\n  cursor: pointer; }\n\n.cart-container {\n  min-width: 275px;\n  max-width: 400px;\n  border: 2px solid #000033;\n  border-radius: 5px;\n  padding: 5px;\n  margin-top: 85px;\n  height: max-content;\n  float: right; }\n\n.cart-icon {\n  width: 40px;\n  padding-right: 20px;\n  vertical-align: -4px; }\n\n.cart-title {\n  text-align: center;\n  font-family: Raleway; }\n\n.remove-from-cart-button {\n  background-color: white;\n  float: right;\n  padding-right: 10px;\n  font-size: 20px;\n  color: red;\n  font-weight: bold;\n  font-family: arial; }\n\n.cart-alteration {\n  padding-left: 10px; }\n\n/*\n.cart-buttons {\n  @extend .flex-container;\n  justify-content: space-between;\n}\n*/\n.cart-buttons-container {\n  display: flex;\n  justify-content: space-around; }\n\n.cart-buttons > input {\n  margin-left: 5px;\n  margin-right: 105px;\n  margin-bottom: 50px; }\n\n.cart-line {\n  color: #000033;\n  background-color: #000033;\n  height: 2px;\n  width: 90%; }\n\n.alteration-hr {\n  color: #000033;\n  background-color: #000033;\n  width: 90%; }\n\n.cart-item {\n  background-color: white; }\n\n.cart-item-title {\n  padding-right: 180px; }\n\n.customer-agrees-prompt {\n  font-family: Raleway;\n  margin: 15px;\n  font-size: 12px;\n  color: #de0421;\n  font-weight: bold; }\n\n.checkout-container {\n  margin-left: 87px; }\n\n.order-completed-container {\n  @extends margin-left; }\n\n.detail-and-customer {\n  max-width: 48%;\n  display: inline-block;\n  margin-left: auto;\n  float: right; }\n\n.new-order.list-container {\n  max-width: 48%;\n  display: inline-block; }\n\n.checkbox-label {\n  display: inline-block;\n  color: #000033;\n  cursor: pointer;\n  position: relative; }\n\nlabel span {\n  display: inline-block;\n  position: relative;\n  background-color: transparent;\n  width: 25px;\n  height: 25px;\n  transform-origin: center;\n  border: 2px solid #000033;\n  border-radius: 50%;\n  vertical-align: -6px;\n  margin-right: 10px;\n  transition: background-color 150ms 200ms, transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89); }\n\nlabel span:before {\n  content: '';\n  width: 0px;\n  height: 2px;\n  border-radius: 2px;\n  background: #000033;\n  position: absolute;\n  transform: rotate(45deg);\n  top: 13px;\n  left: 9px;\n  transition: width 50ms ease 50ms;\n  transform-origin: 0% 0%; }\n\nlabel span:after {\n  content: '';\n  width: 0;\n  height: 2px;\n  border-radius: 2px;\n  background: #000033;\n  position: absolute;\n  transform: rotate(305deg);\n  top: 16px;\n  left: 10px;\n  transition: width 50ms ease;\n  transform-origin: 0% 0%; }\n\nlabel:hover span:before {\n  width: 5px;\n  transition: width 100ms ease; }\n\nlabel:hover span:after {\n  width: 10px;\n  transition: width 150ms ease 100ms; }\n\ninput[type='checkbox'] {\n  display: none; }\n\ninput[type='checkbox']:checked + label span {\n  transform: scale(1.08); }\n\ninput[type='checkbox']:checked + label span:after {\n  width: 10px;\n  background: #000033;\n  transition: width 150ms ease 100ms; }\n\ninput[type='checkbox']:checked + label span:before {\n  width: 5px;\n  background: #000033;\n  transition: width 150ms ease 100ms; }\n\ninput[type='checkbox']:checked + label:hover span {\n  transform: scale(1.16); }\n\ninput[type='checkbox']:checked + label:hover span:after {\n  width: 10px;\n  background: #000033;\n  transition: width 150ms ease 100ms; }\n\ninput[type='checkbox']:checked + label:hover span:before {\n  width: 5px;\n  background: #000033;\n  transition: width 150ms ease 100ms; }\n\n.growl {\n  z-index: 100000;\n  position: fixed;\n  top: 5px;\n  left: 236px;\n  height: 120px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  min-width: 500px;\n  background-color: #dcdcdc; }\n\n.growl-header {\n  background-color: #f5f5f5;\n  height: 35px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  line-height: 1px;\n  display: flex;\n  align-items: center; }\n\n.growl-title {\n  display: inline-block;\n  font-family: Raleway;\n  padding-left: 20px;\n  text-transform: uppercase; }\n\n.growl-body {\n  display: flex;\n  align-items: center;\n  position: absolute; }\n\n.growl-text {\n  padding-top: 15px;\n  font-family: Raleway;\n  padding-left: 20px; }\n\n.notice-growl {\n  color: #000033; }\n\n.warning-growl {\n  color: #de0421; }\n\n.success-growl {\n  color: green; }\n\n@media screen and (min-width: 981px) {\n  .growl {\n    left: 50%;\n    margin-left: -175px; } }\n\n.empty-div {\n  display: none; }\n\n.edit-account {\n  margin-top: 50px; }\n\n.archive-headers-row {\n  padding-top: 10px; }\n\n.archive-header-cell {\n  flex-basis: 25%; }\n\n.archive-header-break-row {\n  width: 95%; }\n\n.archive-link {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 100%; }\n\n.archive-break-row {\n  width: 100%; }\n\n.archive-headers-container {\n  padding-left: 6%;\n  padding-right: 8%; }\n\n.archive-container {\n  padding-left: 6%;\n  padding-right: 8%; }\n\n.archive-order-cell {\n  flex-basis: 25%; }\n\n.orders, .archive {\n  color: #000033;\n  width: 100%; }\n\n.order-state-container {\n  background: rgba(0, 0, 51, 0.1); }\n\n.order-state-tab {\n  flex: 1 0 20%;\n  text-align: center;\n  padding-top: 2%;\n  height: 5%; }\n\n.order-state-tab.selected {\n  background: white;\n  -webkit-clip-path: polygon(20% 0, 0 100%, 100% 100%, 80% 0);\n  clip-path: polygon(20% 0, 0 100%, 100% 100%, 80% 0); }\n\n.order-state-tab.selected:nth-child(1) {\n  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 80% 0);\n  clip-path: polygon(0 0, 0 100%, 100% 100%, 80% 0); }\n\n.order-state-tab.selected:last-child {\n  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 80% 0);\n  clip-path: polygon(20% 0, 0 100%, 100% 100%, 100% 0); }\n\n.order-state-tab h3 {\n  font-family: Raleway;\n  text-transform: uppercase;\n  font-weight: lighter; }\n\n.late-orders h3 {\n  color: #de0421; }\n\n.break-row, .archive-header-break-row, .archive-break-row, .order-header-break-row, .order-data-break-row, .conversation-break-row {\n  width: 95%;\n  margin: 0 auto;\n  border-top: 1px solid gray; }\n\n.order-data-break-row {\n  width: 90%; }\n\n.order-data-container {\n  width: 100%; }\n\n.order-headers {\n  width: 100%; }\n\n.order-headers-row-no-select {\n  flex-basis: 100%; }\n\n.order-row-link-no-select {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 100%; }\n\n.order-cell-no-select {\n  flex-basis: 25%; }\n\n.order-header-cell-no-select {\n  flex-basis: 25%; }\n\n.order-headers-row, .order-headers-row-no-select {\n  flex-basis: 95%;\n  font-family: arial;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase; }\n\n.order-row-link {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 80%; }\n\n.order-select-header-cell {\n  flex-basis: 15%;\n  text-align: right; }\n\n.order-data-header-cell {\n  flex-basis: 20%; }\n\n.order-data-headers-container {\n  flex-basis: 80%; }\n\n.order-headers-container-no-select {\n  flex-basis: 100%; }\n\n.order-row-cell, .order-cell-no-select, .order-select-cell, .order-data-cell {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.order-select-cell {\n  text-align: right;\n  flex-basis: 15%;\n  padding-top: 15px;\n  padding-bottom: 12px; }\n\n.order-data-cell {\n  flex-basis: 20%; }\n\n.loading-orders {\n  font-style: italic; }\n\n.conversations {\n  color: #000033;\n  width: 100%; }\n\n.conversations-container {\n  width: 100%;\n  padding-left: 3%;\n  padding-right: 5%; }\n\n.conversation-row-link {\n  border-bottom: 1px solid gray;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  flex-basis: 85%; }\n\n.conversation-cell {\n  flex-basis: 33%;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n", ""]);

// exports


/***/ }),
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
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
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(16);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(22);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(87);

var _PathUtils = __webpack_require__(50);

var _createTransitionManager = __webpack_require__(88);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(155);

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
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(16);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(22);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(87);

var _PathUtils = __webpack_require__(50);

var _createTransitionManager = __webpack_require__(88);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(155);

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
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(16);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(50);

var _LocationUtils = __webpack_require__(87);

var _createTransitionManager = __webpack_require__(88);

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
/* 482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(156);
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
/* 483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(156);
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
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(89);
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
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(482);
/* unused harmony reexport createBrowserHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(483);
/* unused harmony reexport createHashHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(484);
/* unused harmony reexport createMemoryHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(51);
/* unused harmony reexport parsePath */
/* unused harmony reexport createPath */










/***/ }),
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
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
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(39),
    root = __webpack_require__(26);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(557),
    hashDelete = __webpack_require__(558),
    hashGet = __webpack_require__(559),
    hashHas = __webpack_require__(560),
    hashSet = __webpack_require__(561);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(39),
    root = __webpack_require__(26);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(26);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(39),
    root = __webpack_require__(26);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 521 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(531);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 523 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(543),
    isArguments = __webpack_require__(96),
    isArray = __webpack_require__(27),
    isBuffer = __webpack_require__(97),
    isIndex = __webpack_require__(173),
    isTypedArray = __webpack_require__(101);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 525 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 526 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 527 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 528 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(526),
    isArray = __webpack_require__(27);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 530 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(528),
    baseIsNaN = __webpack_require__(535),
    strictIndexOf = __webpack_require__(587);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(52),
    isObjectLike = __webpack_require__(53);

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
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(164),
    equalArrays = __webpack_require__(170),
    equalByTag = __webpack_require__(549),
    equalObjects = __webpack_require__(550),
    getTag = __webpack_require__(172),
    isArray = __webpack_require__(27),
    isBuffer = __webpack_require__(97),
    isTypedArray = __webpack_require__(101);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(164),
    baseIsEqual = __webpack_require__(166);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 535 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(180),
    isMasked = __webpack_require__(563),
    isObject = __webpack_require__(99),
    toSource = __webpack_require__(177);

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
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(52),
    isLength = __webpack_require__(98),
    isObjectLike = __webpack_require__(53);

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
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(539),
    baseMatchesProperty = __webpack_require__(540),
    identity = __webpack_require__(591),
    isArray = __webpack_require__(27),
    property = __webpack_require__(594);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(534),
    getMatchData = __webpack_require__(552),
    matchesStrictComparable = __webpack_require__(176);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(166),
    get = __webpack_require__(589),
    hasIn = __webpack_require__(590),
    isKey = __webpack_require__(94),
    isStrictComparable = __webpack_require__(175),
    matchesStrictComparable = __webpack_require__(176),
    toKey = __webpack_require__(69);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 541 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(165);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 543 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(65),
    arrayMap = __webpack_require__(525),
    isArray = __webpack_require__(27),
    isSymbol = __webpack_require__(100);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 545 */
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
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(163),
    arrayIncludes = __webpack_require__(522),
    arrayIncludesWith = __webpack_require__(523),
    cacheHas = __webpack_require__(168),
    createSet = __webpack_require__(548),
    setToArray = __webpack_require__(95);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(26);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(162),
    noop = __webpack_require__(593),
    setToArray = __webpack_require__(95);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(65),
    Uint8Array = __webpack_require__(519),
    eq = __webpack_require__(178),
    equalArrays = __webpack_require__(170),
    mapToArray = __webpack_require__(574),
    setToArray = __webpack_require__(95);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(551);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(529),
    getSymbols = __webpack_require__(554),
    keys = __webpack_require__(181);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(175),
    keys = __webpack_require__(181);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(65);

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
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(521),
    stubArray = __webpack_require__(595);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 555 */
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
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(169),
    isArguments = __webpack_require__(96),
    isArray = __webpack_require__(27),
    isIndex = __webpack_require__(173),
    isLength = __webpack_require__(98),
    toKey = __webpack_require__(69);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(68);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 558 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(68);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(68);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(68);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 562 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(547);

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
/* 564 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(66);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(66);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(66);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(66);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(517),
    ListCache = __webpack_require__(64),
    Map = __webpack_require__(92);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(67);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(67);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(67);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(67);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 574 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(592);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(579);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(171);

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
/* 578 */
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
/* 579 */
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
/* 580 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 581 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(64);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 583 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 584 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 585 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(64),
    Map = __webpack_require__(92),
    MapCache = __webpack_require__(93);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 587 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(575);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(165);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(530),
    hasPath = __webpack_require__(556);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 591 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(93);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 593 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(541),
    basePropertyDeep = __webpack_require__(542),
    isKey = __webpack_require__(94),
    toKey = __webpack_require__(69);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 595 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 596 */
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
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(544);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(538),
    baseUniq = __webpack_require__(546);

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),
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
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
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
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(124);
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
/* 716 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(124);
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
/* 717 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(725);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),
/* 718 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(341);
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
/* 719 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(726);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),
/* 720 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(727);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),
/* 721 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(728);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),
/* 722 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(729);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),
/* 723 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(126);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),
/* 724 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(730);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),
/* 725 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(125);
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
/* 726 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(22);
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
/* 727 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(485);
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
/* 728 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Router__ = __webpack_require__(125);
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
/* 729 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(126);
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
/* 730 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(343);
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
/* 731 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 732 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(731)

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
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */
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
/* 759 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(457);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(358)(content, {});
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
/* 760 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(358)(content, {});
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
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 767 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAi8AAAJmCAYAAAHjhFB2AAAACXBIWXMAAAsTAAALEwEAmpwYAAA59GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNy0wMi0yMVQyMjozNzozNy0wNTowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE3LTAyLTIxVDIyOjM5OjA3LTA1OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNy0wMi0yMVQyMjozOTowNy0wNTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDoxZGI3NzE2Zi0wOTNkLTQzMDYtYTJiOC02OWEyMGNlMTg4N2Q8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3YTBiMDliMi0zOTEyLTExN2EtYWJiYi04ZjE2ZTk2MTgyYWM8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo3ZGQzZjZhNC1kMzhlLTQxZjEtOWMzMy1iMzM0MzEyYzdiNTQ8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6N2RkM2Y2YTQtZDM4ZS00MWYxLTljMzMtYjMzNDMxMmM3YjU0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTAyLTIxVDIyOjM3OjM3LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MWRiNzcxNmYtMDkzZC00MzA2LWEyYjgtNjlhMjBjZTE4ODdkPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE3LTAyLTIxVDIyOjM5OjA3LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NTU5PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjYxNDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+H7u/4AAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAiC0lEQVR42uycW47CMAxF44x3NPtfAktCno8BUZBa8vAzsSXED22d0+sbJ60AIirPAIBSfn6LYVApBbqOuN94E3jwqMVH0ONTDt+mUZ1AuQJlEugMyNlvYAcwNHEMrFhKHOVBq4EhZ4DNS4kUzg2RwGhJHqIoJjwQCTA2UDg79UMXjYuphLiUhYsCGV97TYIh50CmZy9cUCUsgHADIEOAcCMgXf6DAXxEMpdT9eBmKmkGhCcJ0yZATvPCky5SAo5/IIcuGi8kBUzJWvtIa15v5YQNjj0DKELZ0OisNAIohI9c5YAdA4AG/wkP5Bk9W5v0cSEIWjZNOYyulcC5sTb5iOTqGlYoG04wkabf4g1MmLLRBgMKygEphVahEqKBzrcXCEiWrYbHSC4vxNSo8Yj2W/8j2o94N1/O5YXKbKc9K80sL1Snf6vp+sp/TIF46WNe2xv32//3a7PI9FWzyjAw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"

/***/ })
],[424]);
//# sourceMappingURL=bundle.634dde8751cb9ed5f29b.js.map