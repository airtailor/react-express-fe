import Axios from 'axios'
import setAuthToken from '../utils/setAuthToken';
import { expressApi, SET_CURRENT_USER, SET_CURRENT_STORE, SET_STORE_ORDERS, SET_CURRENT_ORDER, SET_ITEM_TYPES } from '../utils/constants';

export const userSignIn = (email, password) => {
  const url = `${expressApi}/sign_in`;
  const data = { email, password };

  return dispatch => {
    return Axios.post(url, data)
      .then(res => {
        if (res.data.headers.client && res.data.headers.uid){
          const { client, uid } = res.data.headers;
          const accessToken = res.data.headers['access-token'];
          const AirTailorToken = { accessToken, client, uid }
          localStorage.setItem('AirTailorToken', JSON.stringify(AirTailorToken));
          setAuthToken(AirTailorToken);
        } else {
          //validateToken();
          console.log('token headers not supplied after userSignIn');
        }

        if (res.data.body.email && res.data.body.id) {
          const { id, email, store_id, roles, uid } = res.data.body;
          const CurrentUser = { uid, email, store_id, roles, id };
          localStorage.setItem('CurrentUser', JSON.stringify(CurrentUser));
          dispatch(setCurrentUser({ id, email, store_id, roles }));
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function validateToken(){
  console.log('validate token!');
  console.log('default headers', Axios.defaults.headers.common)


  const url = `${expressApi}/validate_token`;
  Axios.post(url)
    .then(res => {
      if (res.data.body.success){
        console.log('validate token - success!');
        // do nothing, token has been successfully validated
      } 
      if (res.data.headers.client && res.data.headers.uid){
        const { client, uid } = res.data.headers;
        const accessToken = res.data.headers['access-token'];
        const AirTailorToken = { accessToken, client, uid }
        localStorage.setItem('AirTailorToken', JSON.stringify(AirTailorToken));
        setAuthToken(AirTailorToken);
        console.log('validate token should be updated!');
        console.log(Axios.defaults.headers.common)
      } else {
        debugger;
      }

      //if (res.data.body.email && res.data.body.id) {
      //  const { id, email, store_id, roles, uid } = res.data.body;
      //  const CurrentUser = { uid, email, store_id, roles, id };
      //  localStorage.setItem('CurrentUser', JSON.stringify(CurrentUser));
      //  dispatch(setCurrentUser({ id, email, store_id, roles }));
      //}
    })
    .catch(err => {
      console.log('error - validate token', err);
    })
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
          const { client, uid } = res.data.headers;
          const accessToken = res.data.headers['access-token'];
          const AirTailorToken = { accessToken, client, uid }
          localStorage.setItem('AirTailorToken', JSON.stringify(AirTailorToken));
          setAuthToken(AirTailorToken);
        } else {
          //validateToken();
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
          const { client, uid } = res.data.headers;
          const accessToken = res.data.headers['access-token'];
          const AirTailorToken = { accessToken, client, uid }
          localStorage.setItem('AirTailorToken', JSON.stringify(AirTailorToken));
          setAuthToken(AirTailorToken);
        } else {
          //validateToken();
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
          const { client, uid } = res.data.headers;
          const accessToken = res.data.headers['access-token'];
          const AirTailorToken = { accessToken, client, uid }
          localStorage.setItem('AirTailorToken', JSON.stringify(AirTailorToken));
          setAuthToken(AirTailorToken);
        } else {
          //validateToken();
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
  console.log('updateOrderNotes');
  // setAuthToken
  const a = setAuthToken
  debugger;

  return dispatch => {
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
  }
}

