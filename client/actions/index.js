import Axios from 'axios'
import setAuthToken from '../utils/setAuthToken';
import { setLocalStorageAuth, setLocalStorageUser } from '../utils/setLocalStorage';
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
  SET_CONFIRMED_NEW_ORDER
} from '../utils/constants';

import {removeFalseyValuesFromObject} from '../utils/format';

const setTokens = (res) => {
  if (!res.data.headers['access-token']) { return; }
  const { client, uid, expiry } = res.data.headers;
  const accessToken = res.data.headers['access-token'];
  const AirTailorTokens = { accessToken, client, uid, expiry }
  setAuthToken(AirTailorTokens);
  setLocalStorageAuth(AirTailorTokens);
}

const resetTokens = () => {
  setAuthToken({});
  setLocalStorageAuth({});
}

export const userSignIn = (email, password) => {
  const url = `${expressApi}/sign_in`;
  const data = { email, password };
  return dispatch => {
    return Axios.post(url, data)
      .then(res => {
          setTokens(res);
          setLocalStorageUser(res.data.body);
          const { id, email, store_id, roles, uid } = res.data.body;
          dispatch(setCurrentUser({ id, email, store_id, roles }));
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function validateToken(){
  const url = `${expressApi}/validate_token`;
  return Axios.post(url)
}

export function signOutCurrentUser(){
  const url = `${expressApi}/sign_out`;
  return dispatch => {
    return Axios.post(url)
      .then(res => {
        delete localStorage.AirTailorTokens
        setAuthToken({});
        dispatch(setCurrentUser({ }), setCurrentStore({}));
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export function getStoreOrders(store_id){
  const url =`${expressApi}/stores/${store_id}/orders`;
  return dispatch => {
    return Axios.get(url)
      .then(res => {
        if (res.data.headers.client && res.data.headers.uid){
          setTokens(res);
          setLocalStorageUser(res.data.body);
        } else {
          // console.log('getStoreOrders - no new auth headers');
        }
        dispatch(setStoreOrders(res.data.body));
      })
      .catch(err => {
        console.log('error',err);
      });
  }
}

export function getCurrentOrder(store_id, order_id){
  const url =`${expressApi}/stores/${store_id}/orders/${order_id}`;
  return dispatch => {
    return Axios.get(url)
      .then(res => {
        if (res.data.headers.client && res.data.headers.uid){
          setTokens(res);
          setLocalStorageUser(res.data.body);
        } else {
          // console.log('getStoreOrders - no new auth headers');
        }
        dispatch(setCurrentOrder(res.data.body));
      })
      .catch(err => {
        console.log('error', err);
      });
  }
}

export function getCurrentStore(store_id){
  const url = `${expressApi}/stores/${store_id}`;
  return dispatch => {
    return Axios.post(url)
      .then(res => {
        if (res.data.headers.client && res.data.headers.uid){
          setTokens(res);
          setLocalStorageUser(res.data.body);
        } else {
          // console.log('getStoreOrders - no new auth headers');
        }
        const { company_id, city, id, name, phone, primary_contact_id, state, street1, street2, zip, active_orders_count, late_orders_count } = res.data.body;
        dispatch(setCurrentStore({ company_id, city, id, name, phone, primary_contact_id, state, street1, street2, zip, active_orders_count, late_orders_count }));
      })
      .catch(err => {
        debugger;
      })
  }
}

export function updateOrder(data){
  const url = `${expressApi}/stores/${data.order.store_id}/orders/${data.order.id}/edit`;
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
          })
      })
  }
}


export function updateCustomer(data){
  const url = `${expressApi}/customers/${data.customer.id}`;
  return Axios.put(url, data)
}

export function createStore(data){
  const url = `${expressApi}/stores/`;
  return Axios.post(url, data)
}

export function getTailorList(){
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
          })
      })
  }
}

export function updateStore(data){
  const url = `${expressApi}/stores/${data.store.id}`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.put(url, data)
          .then(res => {
            dispatch(setCurrentStore(res.data.body));
          })
          .catch(err => {
            debugger;
          })
      })
  }
}

export function getCompanies(){
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
          })
      })
  }
}

export function createShipment(data){
  const url = `${expressApi}/shipments`;
  return Axios.post(url, data)
}

export function getCustomerMeasurements(data){
  const url = `${expressApi}/customers/${data.customer_id}/measurements/last`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            //debugger;
            dispatch(setCustomerMeasurements(res.data.body));
          })
          .catch(err => {
            debugger;
          })
      })
  }
}

export function createCustomerMeasurements(measurement){

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
          })
      })
  }
}

export function getNewOrders(){
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
          })
      })
  }
}

export function getOrderAndMessagesCount(store_id){
  const url = `${expressApi}/stores/${store_id}/orders_and_messages_count`;
  return Axios.get(url);
}

export function getConversations(store_id){
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
          })
      })
  }
}

export function getMessages(store_id, conversation_id){
  console.log('store_id', store_id, 'conversation_id', conversation_id)
  const url = `${expressApi}/stores/${store_id}/conversations/${conversation_id}`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setMessages(res.data.body.messages));
            return res.data.body;
          })
          .catch(err => {
            debugger;
          })
      })
  }
}

export function createMessage(message){
  const {store_id, conversation_id, body} = message;
  const url = `${expressApi}/stores/${message.store_id}/conversations/${message.conversation_id}/messages`;
  const data = message;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.post(url, data)
          .then(res => {
            return res;
          })
          .catch(err => {
            debugger;
          })
      })
  }
}

function findOrCreateCustomer(customerInfo){
  const url = `${expressApi}/customers/find_or_create`;
  return validateToken()
    .then(setTokens)
    .then(() => {
      return Axios.post(url, {customer: customerInfo});
    });
}

function createOrder(order){
  const url = `${expressApi}/orders`;
  return validateToken()
    .then(setTokens)
    .then(() => {
      return Axios.post(url, {order});
    });
}

function getOrderWeight(cart){
  return cart.garments.reduce((prev, curr) => {
    return prev += curr.weight;
  }, 0);
}

function getOrderTotal(cart){
  return cart.garments.reduce((prev, curr) => {
    return prev += curr.alterations.reduce((prev, curr) => {
      return prev += curr.price;
    }, 0);
  }, 0);
}

export function submitOrder(props){
  const {cart, currentStore} = props;
  const {customerInfo} = props.cart;
  return dispatch => {
    return findOrCreateCustomer(removeFalseyValuesFromObject(customerInfo))
      .then(res => {
        if (res.data.body.errors){
          console.log('errors', res.data.body.errors);
        } else {
          const customer_id = res.data.body.id;
          const requester_id = currentStore.id;
          const weight = getOrderWeight(cart);
          const total = getOrderTotal(cart);
          const source = 'React-Portal';
          const {garments} = cart;
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
            ship_to_store
          };

           return createOrder(order)
            .then(res => {
              return dispatch(setConfirmedNewOrder(res.data.body));
            })
            .catch(err => {
              debugger;
            })
        }
      })
      .catch(err => {
        console.log('create order error', err)
      })
  }
}

export function setConfirmedNewOrder(order){
  return {
    type: SET_CONFIRMED_NEW_ORDER,
    order
  }
}

export function updateCartShipTo(boolean){
  return {
    type: UPDATE_CART_SHIP_TO,
    boolean
  }
}

export function updateCartCustomerInfo(customerInfo){
  return {
    type: UPDATE_CART_CUSTOMER_INFO,
    customerInfo
  }
}

export function removeGarmentFromCart(index){
  return {
    type: REMOVE_GARMENT_FROM_CART,
    index
  }
}

export function addGarmentToCart(garment){
  return {
    type: ADD_GARMENT_TO_CART,
    garment
  }
}

export function setMessages(messages){
  return {
    type: SET_MESSAGES,
    messages
  }
}

export function setConversations(conversations){
  return {
    type: SET_CONVERSATIONS,
    conversations
  }
}

export function setNewOrders(newOrders){
  return {
    type: SET_NEW_ORDERS,
    newOrders
  }
}

export function setCustomerMeasurements(measurements){
  return {
    type: 'SET_CUSTOMER_MEASUREMENTS',
    measurements
  }
}
export function setCompanyList(companies){
  return {
    type: SET_COMPANY_LIST,
    companies
  }
}

export function setTailorList(tailors){
  return {
    type: SET_TAILOR_LIST,
    tailors
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user: user
  };
}
export function setCurrentStore(store) {
  return {
    type: SET_CURRENT_STORE,
    store: store
  };
}

export function setStoreOrders(orders) {
  return {
    type: SET_STORE_ORDERS,
    orders
  };
}

export function setCurrentOrder(order) {
  return {
    type: SET_CURRENT_ORDER,
    order
  };
}

export function setItemTypes(itemTypes) {
  return {
    type: SET_ITEM_TYPES,
    itemTypes
  };
}
