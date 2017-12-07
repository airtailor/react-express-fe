import Axios from 'axios';
import { SET_USER_LIST, expressApi } from './constants';

export const {
  setGrowler,
  setLoader,
  removeLoader,
  validateToken,
  setTokens,
} = require('../../../../actions');

export const getUserList = id => {
  const url = `${expressApi}/users`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setUserList(res.data.body));
            return res;
          })
          .catch(err => {
            debugger;
          });
      });
  };
};

const setUserList = userList => {
  return {
    type: SET_EDIT_STORE,
    userList,
  };
};
