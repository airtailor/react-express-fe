import Axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import {
  setLocalStorageAuth,
  setLocalStorageUser,
  setLocalStorageStore,
} from '../utils/setLocalStorage';

import {
  expressApi,
  SET_CURRENT_USER,
  SET_CURRENT_STORE,
  SET_STORE_ORDERS,
  SET_CURRENT_ORDER,
  SET_ITEM_TYPES,
  SET_TAILOR_LIST,
  SET_COMPANY_LIST,
  SET_CUSTOMER_MEASUREMENTS,
  SET_CURRENT_PRINT,
  SET_NEW_ORDERS,
  ADD_GARMENT_TO_CART,
  REMOVE_GARMENT_FROM_CART,
  UPDATE_CART_CUSTOMER,
  UPDATE_CART_SHIP_TO,
  SET_CONFIRMED_NEW_ORDER,
  RESET_CART,
  UPDATE_CART_NOTES,
  SET_SEARCH_RESULTS,
  UPDATE_GARMENT_IN_CART,
  SET_GROWLER,
  REMOVE_GROWLER,
  SET_ARCHIVED_ORDERS,
  SET_LOADER,
  REMOVE_LOADER,
  SHIP_RETAILER_TO_TAILOR,
  SHIP_TAILOR_TO_RETAILER,
  SHIP_CUSTOMER_TO_TAILOR,
  SHIP_TAILOR_TO_CUSTOMER,
  SHIP_RETAILER_TO_CUSTOMER,
  SET_USER_ROLE,
  RESET_USER_ROLE,
  SET_CURRENT_CUSTOMER,
  UPDATE_CURRENT_CUSTOMER,
  SET_CART_CUSTOMER,
  RESET_CART_CUSTOMER,
  SET_STORE_LIST,
  SET_CUSTOMER_ORDERS,
} from '../utils/constants';

import { removeFalseyValuesFromObject } from '../utils/format';

export const setTokens = res => {
  // if we get a 401 from the server, then log out the current user
  if (!res.data.headers || !res.data.headers['access-token']) {
    if (!res.data.body || res.data.body.status === 401) {
      resetTokens();
    }
    return;
  }
  const { client, uid, expiry } = res.data.headers;
  const accessToken = res.data.headers['access-token'];
  const AirTailorTokens = { accessToken, client, uid, expiry };
  setAuthToken(AirTailorTokens);
  setLocalStorageAuth(AirTailorTokens);
};

const resetTokens = () => {
  delete localStorage.AirTailorTokens;
  delete localStorage.CurrentUser;
  delete localStorage.CurrentStore;
};

export const userSignIn = (email, password) => {
  const url = `${expressApi}/auth/sign_in`;
  const data = { email, password };
  return dispatch => {
    return Axios.post(url, data)
      .then(res => {
        if (res.data.status === 401) {
          return { errors: true, status: 401 };
        } else if (res.data.body) {
          const dataRes = res.data.body.data;
          const { id, email, store_id, valid_roles, uid } = dataRes;
          setTokens(res);

          dispatch(resetCart());
          dispatch(resetCartCustomer());
          dispatch(setUserRole(valid_roles));
          setLocalStorageUser(dataRes);

          // right now, the code assumes that a user has a single role, but it's
          // written to work with multiple roles if/when that becomes necessary.
          dispatch(setCurrentUser({ id, email, store_id }));
          return { success: true };
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export function validateToken(dispatch = undefined) {
  const url = `${expressApi}/auth/validate_token`;
  return Axios.post(url).then(res => {
    if (res.data.status === 401) {
      if (dispatch) {
        dispatch(signOutCurrentUser());
      } else {
        return { errors: true, status: 401 };
      }
    } else {
      if (dispatch) {
        const { id, email, store_id, valid_roles } = res.data.body;
        dispatch(setUserRole(valid_roles));
        dispatch(setCurrentUser({ id, email, store_id }));
      }
      return res;
    }
  });
}

export function signOutCurrentUser() {
  const url = `${expressApi}/auth/sign_out`;
  return dispatch => {
    delete localStorage.AirTailorTokens;
    delete localStorage.CurrentUser;
    delete localStorage.CurrentStore;

    setAuthToken({});
    dispatch(
      setCurrentUser({}),
      setCurrentStore({}),
      setUserRole({}),
      resetCartCustomer(),
      resetCart()
    );
    window.location = '/';

    return Axios.post(url)
      .then(res => {})
      .catch(err => {
        console.log('error from signOutCurrentUser linke 75', err);
      });
  };
}

export function getStoreOrders(store_id) {
  const url = `${expressApi}/stores/${store_id}/orders`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setStoreOrders(res.data.body));
          })
          .catch(err => {
            console.log('error', err);
          });
      });
  };
}

export function getCurrentOrder(store_id, order_id) {
  const url = `${expressApi}/stores/${store_id}/orders/${order_id}`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setCurrentOrder(res.data.body));
            return res.data.body;
          })
          .catch(err => {
            console.log('error', err);
          });
      });
  };
}

export function getCurrentStore(store_id) {
  const url = `${expressApi}/stores/${store_id}`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            setLocalStorageStore(res.data.body);
            dispatch(setCurrentStore(res.data.body));
            return res;
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function updateOrder(data) {
  const url = `${expressApi}/stores/${data.order.store_id}/orders/${data.order
    .id}/edit`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.post(url, data)
          .then(res => {
            dispatch(setCurrentOrder(res.data.body));
            return res.data;
          })
          .catch(err => {
            debugger;
          });
      })
      .catch(err => console.log('err index.js line 155', err));
  };
}

export function alertCustomersPickup(orders, store_id) {
  const url = `${expressApi}/stores/${store_id}/orders/alert_customers`;
  const data = [...orders].map(order => order.id);

  return validateToken()
    .then(setTokens)
    .then(() => {
      return Axios.put(url, data)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          debugger;
        });
    })
    .catch(err => console.log('err index.js line 155', err));
}

export function customerReceived(data, store_id) {
  const url = `${expressApi}/stores/${store_id}/orders/customer_pickup`;

  return validateToken()
    .then(setTokens)
    .then(() => {
      return Axios.put(url, data)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          debugger;
        });
    })
    .catch(err => console.log('err index.js line 155', err));
}

export function updateCustomer(customer) {
  const { id, street, street_two, city, state_province, zip_code } = customer;
  customer.address = { street, street_two, city, state_province, zip_code };

  const url = `${expressApi}/customers/${id}`;
  return validateToken()
    .then(setTokens)
    .then(res => {
      return Axios.put(url, { customer });
    })
    .catch(err => console.log(err));
}

export function createStore(data) {
  return validateToken()
    .then(setTokens)
    .then(() => {
      const url = `${expressApi}/stores/`;
      return Axios.post(url, data);
    });
}

export function createUser(data) {
  return validateToken()
    .then(setTokens)
    .then(() => {
      const url = `${expressApi}/users/create_user`;
      return Axios.post(url, data);
    });
}

export function createCompany(data) {
  return validateToken()
    .then(setTokens)
    .then(() => {
      const url = `${expressApi}/companies/`;
      return Axios.post(url, data);
    });
}

export function getTailorList() {
  const url = `${expressApi}/stores/tailors`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setTailorList(res.data.body));
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function getCompanies() {
  const url = `${expressApi}/companies`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setCompanyList(res.data.body));
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function createShipment(data) {
  if (Array.isArray(data.shipment.shipment_action)) {
    debugger;
  }
  return validateToken()
    .then(setTokens)
    .then(() => {
      const url = `${expressApi}/shipments`;
      return Axios.post(url, data);
    });
}

export function setShipmentType(typeString) {
  return {
    type: typeString,
    notes,
  };
}

export function getCustomerMeasurements(data) {
  const url = `${expressApi}/customers/${data.customer_id}/measurements/last`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setCustomerMeasurements(res.data.body));
            return res.data.body;
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function createCustomerMeasurements(measurement) {
  const url = `${expressApi}/customers/${measurement.customer_id}/measurements`;
  const data = { measurement };
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.post(url, data)
          .then(res => {
            dispatch(setCustomerMeasurements(res.data.body));
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function getNewOrders() {
  const url = `${expressApi}/orders/new_orders`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setNewOrders(res.data.body));
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function getOrderCount(store_id) {
  return validateToken()
    .then(setTokens)
    .then(() => {
      const url = `${expressApi}/stores/${store_id}/orders_count`;
      return Axios.get(url);
    });
}

export function findOrCreateCustomer(customerInfo) {
  const url = `${expressApi}/customers/find_or_create`;
  return validateToken()
    .then(setTokens)
    .then(() => {
      return Axios.post(url, { customer: customerInfo });
    });
}

function createOrder(order) {
  const url = `${expressApi}/orders`;
  return validateToken()
    .then(setTokens)
    .then(res => {
      return Axios.post(url, { order });
    });
}

export function createOrValidateCustomer(customer) {
  const { street, street_two, city, state_province, zip_code } = customer;
  customer.address = { street, street_two, city, state_province, zip_code };
  const url = `${expressApi}/customers/create_or_validate_customer`;
  return validateToken()
    .then(setTokens)
    .then(res => {
      return Axios.post(url, { ...customer });
    });
}

function getOrderWeight(cart) {
  return cart.garments.reduce((prev, curr) => {
    return (prev += curr.weight);
  }, 0);
}

function getOrderTotal(cart) {
  return cart.garments.reduce((prev, curr) => {
    return (prev += curr.alterations.reduce((prev, curr) => {
      return (prev += curr.price);
    }, 0));
  }, 0);
}

export function submitOrder(props) {
  const { cart, currentStore, cartCustomer: { id: customer_id } } = props;

  return dispatch => {
    const requester_id = currentStore.id;
    const weight = getOrderWeight(cart);
    const total = getOrderTotal(cart);
    const source = 'React-Portal';

    const garments = cart.garments.map(garment => {
      delete garment.image;
      garment.alterations.map(alt => {
        delete alt.howToPin;
        return alt;
      });
      return garment;
    });

    const ship_to_store = cart.shipToStore;
    const requester_notes = cart.notes;
    const type = 'TailorOrder';

    const order = {
      customer_id,
      requester_id,
      weight,
      total,
      garments,
      source,
      requester_notes,
      type,
      ship_to_store,
    };

    return createOrder(order)
      .then(res => {
        if (res.data.body.errors) {
          return {
            errors: true,
            message: res.data.body.errors,
          };
        }
        return dispatch(setConfirmedNewOrder(res.data.body));
      })
      .catch(err => {
        debugger;
      });
  };
}

export function updatePassword(data) {
  const url = `${expressApi}/users/update_password`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.put(url, data)
          .then(res => {
            if (res.data.body.email) {
              dispatch(setCurrentUser(res.data.body));
              return res;
            } else {
              console.log('hmmm something went wrong', res);
            }
          })
          .catch(err => {
            debugger;
          });
      })
      .catch(err => console.log('err index.js line 488', err));
  };
}

export function searchOrders(query) {
  const url = `${expressApi}/orders/search/${query}`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            if (!res.data.body.errors && !(res.data === 500)) {
              dispatch(setSearchResults(res.data.body));
              return res.data.body;
            } else {
              console.log('hmmm something went wrong', res);
              const message = 'Hmm something went wrong with your search.';
              const kind = 'warning';
              dispatch(setGrowler({ kind, message }));
            }
          })
          .catch(err => {
            const message = 'Hmm something went wrong with your search.';
            const kind = 'warning';
            dispatch(setGrowler({ kind, message }));
          });
      })
      .catch(err => console.log('err index.js line 488', err));
  };
}

export function getArchivedOrders() {
  const url = `${expressApi}/orders/archived`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            if (!res.data.body.errors) {
              dispatch(setArchivedOrders(res.data.body));
              return res.data.body;
            } else {
              console.log('hmmm something went wrong', res);
            }
          })
          .catch(err => {
            debugger;
          });
      })
      .catch(err => console.log('err index.js line 488', err));
  };
}

export function getCurrentCustomer(id) {
  const url = `${expressApi}/customers/${id}`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            if (!res.data.body.errors) {
              dispatch(setCurrentCustomer(res.data.body));
              return res.data.body;
            } else {
              console.log('hmmm something went wrong', res);
            }
          })
          .catch(err => {
            debugger;
          });
      })
      .catch(err => console.log('err index.js line 488', err));
  };
}

export function getStoreList() {
  const url = `${expressApi}/stores`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            if (!res.data.body.errors) {
              dispatch(setStoreList(res.data.body));
              return res.data.body;
            } else {
              console.log('hmmm something went wrong', res);
            }
          })
          .catch(err => {
            debugger;
          });
      })
      .catch(err => console.log('err index.js line 488', err));
  };
}

export function getCustomerOrders(id) {
  const url = `${expressApi}/customers/${id}/customer_orders`;
  return dispatch => {
    return Axios.get(url)
      .then(res => {
        dispatch(setCustomerOrders(res.data.body));
        return res.data.body;
      })
      .catch(err => console.log('err', err));
  }
}

// actions

function setCustomerOrders(orders) {
  return {
    type: SET_CUSTOMER_ORDERS,
    orders,
  }
}

function setStoreList(stores) {
  return {
    type: SET_STORE_LIST,
    stores,
  };
}

function setCurrentCustomer(customer) {
  return {
    type: SET_CURRENT_CUSTOMER,
    customer,
  };
}

export function updateCurrentCustomer(field, value) {
  return {
    type: UPDATE_CURRENT_CUSTOMER,
    customer: { field, value },
  };
}

export function resetUserRole() {
  return {
    type: RESET_USER_ROLE,
  };
}

export function setUserRole(roles) {
  return {
    type: SET_USER_ROLE,
    roles,
  };
}

export function removeLoader() {
  return {
    type: REMOVE_LOADER,
  };
}

export function setLoader() {
  return {
    type: SET_LOADER,
  };
}

export function setArchivedOrders(orders) {
  return {
    type: SET_ARCHIVED_ORDERS,
    orders,
  };
}

export function removeGrowler() {
  return {
    type: REMOVE_GROWLER,
  };
}

export function setGrowler(growl) {
  return {
    type: SET_GROWLER,
    growl,
  };
}

export function setGarment(garment, index) {
  return {
    type: UPDATE_GARMENT_IN_CART,
    garment,
    index,
  };
}

export function setSearchResults(orders) {
  return {
    type: SET_SEARCH_RESULTS,
    orders,
  };
}

export function setConfirmedNewOrder(order) {
  return {
    type: SET_CONFIRMED_NEW_ORDER,
    order,
  };
}

export function resetCart() {
  return {
    type: RESET_CART,
    cart: {},
  };
}

export function updateCartShipTo(boolean) {
  return {
    type: UPDATE_CART_SHIP_TO,
    boolean,
  };
}

export function updateCartNotes(notes) {
  return {
    type: UPDATE_CART_NOTES,
    notes,
  };
}

export function updateCartCustomer(field, value) {
  return {
    type: UPDATE_CART_CUSTOMER,
    customer: { field, value },
  };
}

export function resetCartCustomer() {
  return {
    type: RESET_CART_CUSTOMER,
  };
}

export function setCartCustomer(customer) {
  return {
    type: SET_CART_CUSTOMER,
    customer,
  };
}

export function removeGarmentFromCart(index) {
  return {
    type: REMOVE_GARMENT_FROM_CART,
    index,
  };
}

export function addGarmentToCart(garment) {
  return {
    type: ADD_GARMENT_TO_CART,
    garment,
  };
}

export function setNewOrders(newOrders) {
  return {
    type: SET_NEW_ORDERS,
    newOrders,
  };
}

export function setCustomerMeasurements(measurements) {
  return {
    type: 'SET_CUSTOMER_MEASUREMENTS',
    measurements,
  };
}
export function setCompanyList(companies) {
  return {
    type: SET_COMPANY_LIST,
    companies,
  };
}

export function setTailorList(tailors) {
  return {
    type: SET_TAILOR_LIST,
    tailors,
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user: user,
  };
}

export function setCurrentStore(store) {
  return {
    type: SET_CURRENT_STORE,
    store: store,
  };
}

export function setStoreOrders(orders) {
  return {
    type: SET_STORE_ORDERS,
    orders,
  };
}

export function setCurrentOrder(order) {
  return {
    type: SET_CURRENT_ORDER,
    order,
  };
}

export function setItemTypes(itemTypes) {
  return {
    type: SET_ITEM_TYPES,
    itemTypes,
  };
}
