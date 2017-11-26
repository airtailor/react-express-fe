import Axios from 'axios';
import {SET_CURRENT_REPORT} from './constants';

export const {setLoader, removeLoader} = require('../../../../actions');

export const getCurrentReport = () => {
  const url = `${expressApi}/reports/currentReport`;
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
    repoert,
  };
};
