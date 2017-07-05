import Axios from 'axios'
import { expressApi, USER_SIGN_IN } from '../utils/constants';

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
export const userSignIn = (email, password) => {
  const url = `${expressApi}/sign_in`;
  const data = { email, password };
  const request = Axios.post(url, data);
  const type = USER_SIGN_IN;
  return {
    payload: request, 
    type: type 
  }
}
