import {
  ADD_GARMENT_TO_CART,
  REMOVE_GARMENT_FROM_CART,
  UPDATE_CART_CUSTOMER_INFO,
  UPDATE_CART_SHIP_TO
} from '../utils/constants';

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
    zip: ''
  },
  storeInfo: {},
  shipToStore: true,
  notes: ''
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GARMENT_TO_CART:
      return {
        ...state,
        garments: [...state.garments, action.garment]
      };
      break;
    case REMOVE_GARMENT_FROM_CART:
      state.garments.splice(action.index, 1);
      return {
        ...state
      };
      break;
    case UPDATE_CART_CUSTOMER_INFO:
      return {
        ...state,
        customerInfo: action.customerInfo
      };
      break;
    case UPDATE_CART_SHIP_TO:
      return {
        ...state,
        shipToStore: action.boolean
      }
    default: return state;
  }
}

export default cartReducer;
