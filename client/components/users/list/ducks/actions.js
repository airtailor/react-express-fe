import Axios from 'axios';
import { SET_USERS_LIST, expressApi } from './constants';

export const {
  setLoader,
  removeLoader,
  validateToken,
  setTokens,
} = require('../../../../actions');

export const getUsersList = id => {
  const url = `${expressApi}/users/list`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setUsersList(res.data.body));
            return res;
          })
          .catch(err => {
            debugger;
          });
      });
  };
};

const setUsersList = users => {
  return {
    type: SET_USERS_LIST,
    users,
  };
};
