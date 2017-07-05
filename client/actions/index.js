import Axios from 'axios'
import setAuthToken from '../utils/setAuthToken';
import { expressApi, SET_CURRENT_USER } from '../utils/constants';

export const userSignIn = (email, password) => {
  const url = `${expressApi}/sign_in`;
  const data = { email, password };
  const request = Axios.post(url, data);
  const type = SET_CURRENT_USER;

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

// Type Constants
//export const USER_SIGN_UP_REQUEST = 'USER_SIGN_UP_REQUEST';
//export const USER_SIGN_IN = 'USER_SIGN_IN';

// Constants Continued


// Actions
// export const userSignUpRequest = (email, password, passwordConfirmation) => {
//   const url = `${expressApi}/sign_up`;
//   const data = { email, password, passwordConfirmation }
//   return {
//     payload: Axios.post(url, data),
//     type: USER_SIGN_UP_REQUEST
//   }
// }
//
//export const userSignIn = (email, password) => {
//  const url = `${expressApi}/sign_in`;
//  const data = { email, password };
//  const request = Axios.post(url, data);
//  const type = USER_SIGN_IN;
//  return {
//    payload: request, 
//    type: type 
//  }
//}
