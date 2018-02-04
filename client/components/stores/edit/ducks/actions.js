import Axios from 'axios';
import { SET_EDIT_STORE, UPDATE_EDIT_STORE, expressApi } from './constants';

export const {
  getCurrentStore,
  setGrowler,
  setLoader,
  removeLoader,
  validateToken,
  setTokens,
} = require('../../../../actions');

export const getEditStore = id => {
  const url = `${expressApi}/stores/${id}`;
  return dispatch => {
    return validateToken()
      .then(setTokens)
      .then(() => {
        return Axios.get(url)
          .then(res => {
            dispatch(setEditStore(res.data.body));
            return res;
          })
          .catch(err => {
            debugger;
          });
      });
  };
};

export function updateStore(data) {
  const {
    store,
    store: {
      id,
      street,
      treet_two,
      city,
      state_province,
      zip_code,
      agrees_to_terms,
    },
  } = data;

  const url = `${expressApi}/stores/${id}`;
  const storeObj = { ...data.store };
  storeObj.address = { street, street_two, city, state_province, zip_code };

  return dispatch => {
    return validateToken(dispatch)
      .then(setTokens)
      .then(() => {
        return Axios.put(url, { store: storeObj })
          .then(res => {
            if (!res.data.body.errors) {
              dispatch(setEditStore(storeObj));
            }
            return res;
          })
          .catch(err => {
            debugger;
            return err;
          });
      });
  };
}

const setEditStore = store => {
  return {
    type: SET_EDIT_STORE,
    store,
  };
};

export const updateEditStore = (field, value) => {
  if (field === 'provider_id') {
    field = 'default_tailor_id';
  }

  return {
    type: UPDATE_EDIT_STORE,
    store: { [field]: value },
  };
};
