import Axios from 'axios';
import { SET_RETAILER_LIST, expressApi } from './constants';

export const {
  setLoader,
  removeLoader,
  validateToken,
  setTokens,
} = require('../../../../actions');

export function getRetailerList() {
  const url = `${expressApi}/stores/retailers`;
  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setRetailerList(res.data.body));
          })
          .catch(err => {
            debugger;
          });
      });
  };
}

function setRetailerList(retailers) {
  return {
    type: SET_RETAILER_LIST,
    retailers,
  };
}
