import Axios from 'axios'
import setAuthToken from '../utils/setAuthToken';
import { setLocalStorageAuth, setLocalStorageUser } from '../utils/setLocalStorage';
import { expressApi, SET_CURRENT_USER, SET_CURRENT_STORE, SET_STORE_ORDERS, SET_CURRENT_ORDER, SET_ITEM_TYPES } from '../utils/constants';

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
        localStorage.setItem('AirTailorToken', JSON.stringify({}));
        setAuthToken({});
        dispatch(setCurrentUser({ }));
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export function getStoreOrders(store_id){
  const url =`${expressApi}/stores/${store_id}/orders`;
  return dispatch => {
    return Axios.post(url)
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
    return Axios.post(url)
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

export function getUserStore(store_id){
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

export function updateOrderNotes(order, notes, userRole, store){
  const url = `${expressApi}/stores/${store.id}/orders/${order.id}/edit`;
  let data; 
  if (userRole === "tailor"){
    data = { order: { id: order.id, provider_notes: notes } }
  }
  console.log('old token', localStorage.AirTailorTokens);

  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.post(url, data)
          .then(res => {
            //if (res.data === 401){
            //  validateToken();
            //  updateOrderNotes(order, notes, userRole, store);
            //  return;
            //}
            debugger;
            dispatch(setCurrentOrder(res.data.body)); 
          })
          .catch(err => {
            debugger;
          })
      })
      //.catch(err => {
      //  console.log('validateTokenResponse error', err);
      //  return err;
      //});
  }
  
  //const url = `${expressApi}/stores/${store.id}/orders/${order.id}/edit`;

  //let data; 
  //if (userRole === "tailor"){
  //  data = { order: { id: order.id, provider_notes: notes } }
  //}
  //return dispatch => {
  //  return Axios.post(url, data)
  //    .then(res => {
  //      //if (res.data === 401){
  //      //  validateToken();
  //      //  updateOrderNotes(order, notes, userRole, store);
  //      //  return;
  //      //}
  //      dispatch(setCurrentOrder(res.data.body)); 
  //    })
  //    .catch(err => {
  //    })
  //}
}

// actions

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

