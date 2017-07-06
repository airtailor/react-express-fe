import Axios from 'axios'
import setAuthToken from '../utils/setAuthToken';
import { expressApi, SET_CURRENT_USER, SET_CURRENT_STORE, SET_STORE_ORDERS } from '../utils/constants';

export const userSignIn = (email, password) => {
  const url = `${expressApi}/sign_in`;
  const data = { email, password };
  const request = Axios.post(url, data);

  return dispatch => {
    return Axios.post(url, data)
      .then(res => {
        const { id, email, store_id, roles } = res.data.body;
        const { client, uid } = res.data.headers;
        const accessToken = res.data.headers['access-token'];
        const AirTailorToken = { accessToken, client, uid, id, email, store_id, roles }
        localStorage.setItem('AirTailorToken', JSON.stringify(AirTailorToken));
        setAuthToken(AirTailorToken);
        dispatch(setCurrentUser({ id, email, store_id, roles }));
      })
      .catch(err => {
        console.log(err);
      })
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

export function setStoreOrders(open_orders) {
  const orders = open_orders.open_orders;

  return {
    type: SET_STORE_ORDERS,
    orders
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

export function getUserStore(store_id){
  const url = `${expressApi}/stores/${store_id}`;
  
  return dispatch => {
    return Axios.post(url)
      .then(res => {
        const { client, uid } = res.data.headers;
        const accessToken = res.data.headers['access-token'];
        const AirTailorToken = { accessToken, client, uid }
        localStorage.setItem('AirTailorToken', JSON.stringify(AirTailorToken));
        setAuthToken(AirTailorToken);
        const { company_id, city, id, name, phone, primary_contact_id, state, street1, street2, zip, open_orders, active_orders_count, late_orders_count } = res.data.body;
        dispatch(setCurrentStore({ company_id, city, id, name, phone, primary_contact_id, state, street1, street2, zip, active_orders_count, late_orders_count })); 
        dispatch(setStoreOrders({ open_orders }));
      })
      .catch(err => {
        debugger;
      })
  }
}

