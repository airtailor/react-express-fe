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
  SET_MESSAGES,
  SET_CONVERSATIONS,
  ADD_GARMENT_TO_CART,
  REMOVE_GARMENT_FROM_CART,
  UPDATE_CART_CUSTOMER_INFO,
  UPDATE_CART_SHIP_TO,
  SET_CONFIRMED_NEW_ORDER,
  RESET_CART,
  UPDATE_CART_NOTES,
  SET_SEARCH_RESULTS,
  UPDATE_GARMENT_IN_CART,
  SET_GROWLER,
  REMOVE_GROWLER,
  SET_ARCHIVED_ORDERS,
} from '../utils/constants';

import {removeFalseyValuesFromObject} from '../utils/format';

const setTokens = res => {
  // if we get a 401 from the server, then log out the current user
  if (!res.data.headers || !res.data.headers['access-token']) {
    if (res.data.body.status === 401) {
      resetTokens();
    }
    return;
  }
  const {client, uid, expiry} = res.data.headers;
  const accessToken = res.data.headers['access-token'];
  const AirTailorTokens = {accessToken, client, uid, expiry};
  setAuthToken(AirTailorTokens);
  setLocalStorageAuth(AirTailorTokens);
  //console.log('new token', AirTailorTokens.accessToken)
};

const resetTokens = () => {
  delete localStorage.AirTailorTokens;
  delete localStorage.CurrentUser;
  delete localStorage.CurrentStore;
};

export const userSignIn = (email, password) => {
  const url = `${expressApi}/sign_in`;
  const data = {email, password};
  return dispatch => {
    return Axios.post(url, data)
      .then(res => {
        if (res.data.status === 401) {
          return {errors: true, status: 401};
        } else if (res.data.body) {
          setTokens(res);
          setLocalStorageUser(res.data.body.data);
          const {id, email, store_id, roles, uid} = res.data.body.data;
          dispatch(setCurrentUser({id, email, store_id, roles}));
          return {success: true};
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export function validateToken() {
  const url = `${expressApi}/validate_token`;
  return Axios.post(url);
}

export function signOutCurrentUser() {
  const url = `${expressApi}/sign_out`;
  return dispatch => {
    delete localStorage.AirTailorTokens;
    delete localStorage.CurrentUser;
    delete localStorage.CurrentStore;
    setAuthToken({});
    dispatch(setCurrentUser({}), setCurrentStore({}));
    window.location = '/';

    return Axios.post(url)
      .then(res => {
        //console.log('signed out');
      })
      .catch(err => {
        console.log('error from signOutCurrentUser linke 75', err);
      });
  };
}

export function getStoreOrders(store_id) {
  const url = `${expressApi}/stores/${store_id}/orders`;
  return dispatch => {
    return validateToken()
      .catch(err => console.log('line 88', err))
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            // if (res.data.headers.client && res.data.headers.uid){
            //   setTokens(res);
            //   setLocalStorageUser(res.data.body);
            // } else {
            //   // console.log('getStoreOrders - no new auth headers');
            // }
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
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            // if (res.data.headers.client && res.data.headers.uid){
            //   setTokens(res);
            //   setLocalStorageUser(res.data.body);
            // } else {
            //   // console.log('getStoreOrders - no new auth headers');
            // }
            dispatch(setCurrentOrder(res.data.body));
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
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.post(url)
          .then(res => {
            //if (res.data.headers.client && res.data.headers.uid){
            //  setTokens(res);
            //  setLocalStorageUser(res.data.body);
            //} else {
            //  // console.log('getStoreOrders - no new auth headers');
            //}
            const {
              company_id,
              city,
              id,
              name,
              phone,
              primary_contact_id,
              state,
              street1,
              street2,
              zip,
              active_orders_count,
              late_orders_count,
            } = res.data.body;

            setLocalStorageStore({
              company_id,
              city,
              id,
              name,
              phone,
              primary_contact_id,
              state,
              street1,
              street2,
              zip,
              active_orders_count,
              late_orders_count,
            });

            dispatch(
              setCurrentStore({
                company_id,
                city,
                id,
                name,
                phone,
                primary_contact_id,
                state,
                street1,
                street2,
                zip,
                active_orders_count,
                late_orders_count,
              })
            );
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
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.post(url, data)
          .then(res => {
            dispatch(setCurrentOrder(res.data.body));
          })
          .catch(err => {
            debugger;
          });
      })
      .catch(err => console.log('err index.js line 155', err));
  };
}

export function updateCustomer(data) {
  const url = `${expressApi}/customers/${data.customer.id}`;
  return validateToken()
    .then(setTokens)
    .then(res => {
      return Axios.put(url, data);
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

export function getTailorList() {
  const url = `${expressApi}/tailors`;
  return dispatch => {
    return validateToken()
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

export function updateStore(data) {
  const url = `${expressApi}/stores/${data.store.id}`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.put(url, data)
          .then(res => {
            if (!res.data.body.errors) {
              dispatch(setCurrentStore(res.data.body));
            }
            return res;
          })
          .catch(err => {
            return res;
          });
      });
  };
}

export function getCompanies() {
  const url = `${expressApi}/companies`;
  return dispatch => {
    return validateToken()
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
  return validateToken()
    .then(setTokens)
    .then(() => {
      const url = `${expressApi}/shipments`;
      return Axios.post(url, data);
    });
}

export function getCustomerMeasurements(data) {
  const url = `${expressApi}/customers/${data.customer_id}/measurements/last`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setCustomerMeasurements(res.data.body));
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function createCustomerMeasurements(measurement) {
  const url = `${expressApi}/customers/${measurement.customer_id}/measurements`;
  const data = {measurement};
  return dispatch => {
    return validateToken()
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
  const url = `${expressApi}/new_orders`;
  return dispatch => {
    return validateToken()
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

export function getOrderAndMessagesCount(store_id) {
  return validateToken()
    .then(setTokens)
    .then(() => {
      const url = `${expressApi}/stores/${store_id}/orders_and_messages_count`;
      return Axios.get(url);
    });
}

export function getConversations(store_id) {
  const url = `${expressApi}/stores/${store_id}/conversations`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setConversations(res.data.body));
            return res.data.body;
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function getMessages(store_id, conversation_id) {
  const url = `${expressApi}/stores/${store_id}/conversations/${conversation_id}`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setMessages(res.data.body.messages.reverse()));
            return res.data.body;
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function createMessage(message) {
  const {store_id, conversation_id} = message;
  const url = `${expressApi}/stores/${store_id}/conversations/${conversation_id}/messages`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.post(url, {message})
          .then(res => {
            dispatch(setMessages(res.data.body.messages.reverse()));
            return res;
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

export function updateMessage(message) {
  const {store_id, conversation_id, id} = message;
  const url = `${expressApi}/stores/${store_id}/conversations/${conversation_id}/messages/${id}`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.put(url, {message})
          .then(res => {
            dispatch(setMessages(res.data.body.messages.reverse()));
            return res;
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

function findOrCreateCustomer(customerInfo) {
  const url = `${expressApi}/customers/find_or_create`;
  return validateToken()
    .then(setTokens)
    .then(() => {
      return Axios.post(url, {customer: customerInfo});
    });
}

function createOrder(order) {
  const url = `${expressApi}/orders`;
  return validateToken()
    .then(setTokens)
    .then(() => {
      return Axios.post(url, {order});
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
  const {cart, currentStore} = props;
  const {customerInfo} = props.cart;
  return dispatch => {
    return findOrCreateCustomer(removeFalseyValuesFromObject(customerInfo))
      .then(res => {
        if (res.data.body.errors) {
          return {
            errors: true,
            message: res.data.body.errors.customer[0],
          };
        } else {
          const customer_id = res.data.body.id;
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
        }
      })
      .catch(err => {
        console.log('create order error', err);
      });
  };
}

export function updatePassword(data) {
  const url = `${expressApi}/users/update_password`;
  return dispatch => {
    return validateToken()
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
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            if (!res.data.body.errors) {
              dispatch(setSearchResults(res.data.body));
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

export function getArchivedOrders() {
  const url = `${expressApi}/orders/archived`;
  return dispatch => {
    return validateToken()
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
// actions

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

export function updateCartCustomerInfo(customerInfo) {
  return {
    type: UPDATE_CART_CUSTOMER_INFO,
    customerInfo,
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

export function setMessages(messages) {
  return {
    type: SET_MESSAGES,
    messages,
  };
}

export function setConversations(conversations) {
  return {
    type: SET_CONVERSATIONS,
    conversations,
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
