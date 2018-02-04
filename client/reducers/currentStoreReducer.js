import { SET_CURRENT_STORE } from '../utils/constants';
import isEmpty from 'lodash/isEmpty';

const initialState = {};

const currentStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_STORE:
      const store = formatAddressForStore(action.store);
      return store;
    default:
      return state;
  }
};

const formatAddressForStore = store => {
  if (storeHasAddress(store)) {
    return formatValidAddressIntoStore(store);
  } else if (storeHasOldAddress(store)) {
    store = updateNewFieldsForStore(store);
    store = removeOldAddressFieldsFromStore(store);
    return store;
  }
};

const formatValidAddressIntoStore = store => {
  const { id, phone, type, name, agrees_to_terms, address } = store;
  const {
    street = '',
    street_two = '',
    city = '',
    state_province = '',
    zip_code = '',
  } = address;

  return {
    id,
    name,
    agrees_to_terms,
    phone,
    street,
    street_two,
    city,
    state_province,
    zip_code,
  };
};

const storeHasOldAddress = store => {
  const { street1, city, state, zip } = store;
  if (street1 && city && state && zip) {
    return true;
  } else {
    return false;
  }
};

const removeOldAddressFieldsFromStore = store => {
  delete store.street1;
  delete store.street2;
  delete store.zip;
  delete store.state;
  return store;
};

const updateNewFieldsForStore = store => {
  const { street1, street2, state, zip } = store;

  return {
    ...store,
    street: street1,
    street_two: street2,
    state_province: state,
    zip_code: zip,
  };
};

const storeHasAddress = store => {
  if (!isEmpty(store.address)) {
    const { street, city, zip_code, state_province } = store.address;

    if (street && city && zip_code && state_province) {
      return true;
    }
  }

  return false;
};

export default currentStoreReducer;
