import Axios from 'axios';
import { SET_CURRENT_REPORT, expressApi } from './constants';

export const {
  setLoader,
  removeLoader,
  validateToken,
  setTokens,
} = require('../../../../actions');

export const getCurrentReport = () => {
  const url = `/api/reports/currentReport`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setCurrentReport(res.data.body));
            return res;
          })
          .catch(err => {
            debugger;
          });
      });
  };
};

const setCurrentReport = report => {
  return {
    type: SET_CURRENT_REPORT,
    report,
  };
};
