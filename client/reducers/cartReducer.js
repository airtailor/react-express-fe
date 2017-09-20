import {
  ADD_GARMENT_TO_CART,
  REMOVE_GARMENT_FROM_CART,
  UPDATE_CART_CUSTOMER_INFO,
  UPDATE_CART_SHIP_TO,
  RESET_CART,
  UPDATE_CART_NOTES,
  UPDATE_GARMENT_IN_CART,
} from '../utils/constants';

import {updateObjectInArray, removeItem} from '../utils/reducerHelpers';

const initialState = {
  garments: [],
  customerInfo: {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    agrees_to_terms: true,
  },
  storeInfo: {},
  shipToStore: true,
  notes: '',
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GARMENT_TO_CART:
      return {
        ...state,
        garments: [...state.garments, action.garment],
      };
      break;
    case REMOVE_GARMENT_FROM_CART:
      return {
        ...state,
        garments: removeItem(state.garments, action),
      };
      break;
    case UPDATE_CART_CUSTOMER_INFO:
      return {
        ...state,
        customerInfo: action.customerInfo,
      };
      break;
    case UPDATE_CART_SHIP_TO:
      return {
        ...state,
        shipToStore: action.boolean,
      };
      break;
    case UPDATE_CART_NOTES:
      return {
        ...state,
        notes: action.notes,
      };
      break;
    case RESET_CART:
      return {
        garments: [],
        customerInfo: {
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          street1: '',
          street2: '',
          city: '',
          state: '',
          zip: '',
          agrees_to_terms: true,
        },
        storeInfo: {},
        shipToStore: true,
        notes: '',
      };
      break;

    case UPDATE_GARMENT_IN_CART:
      const newGarments = updateObjectInArray(
        state.garments,
        action,
        'garment'
      );

      const newState = {
        ...state,
        garments: newGarments,
      };
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
