import { SET_EDIT_STORE, UPDATE_EDIT_STORE } from './constants';
import isEmpty from 'lodash/isEmpty';

const initialState = {};

// lots of repeated code from currentStoreReducer espec. with address stuff

const editStoreFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_STORE:
      const store = formatAddressForStore(action.store);
      return store;
    case UPDATE_EDIT_STORE:
      return { ...state, ...action.store };
    default:
      return { ...state };
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
  const { id, phone, type, name, address } = store;
  const {
    number = '',
    street = '',
    street_two = '',
    unit = '',
    floor = '',
    city = '',
    state_province = '',
    zip_code = '',
  } = address;

  const newStreet = `${number} ${street}`.replace(/null/g, '').trim();
  const newUnit = `${street_two} ${unit} ${floor}`.replace(/null/g, '').trim();

  return {
    id,
    name,
    phone,
    number: '',
    street: newStreet,
    unit: newUnit,
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
    unit: street2,
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

export default editStoreFormReducer;
