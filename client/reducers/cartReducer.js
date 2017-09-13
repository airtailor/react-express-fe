import {
  ADD_GARMENT_TO_CART,
  REMOVE_GARMENT_FROM_CART,
  UPDATE_CART_CUSTOMER_INFO,
  UPDATE_CART_SHIP_TO,
  RESET_CART,
  UPDATE_CART_NOTES,
  UPDATE_GARMENT_IN_CART,
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
    zip: '',
    agrees_to_terms: false,
  },
  storeInfo: {},
  shipToStore: true,
  notes: '',
};

const cartReducer = (state = initialState, action) => {
  console.log('cart reducer', action.type);
  switch (action.type) {
    case ADD_GARMENT_TO_CART:
      return {
        ...state,
        garments: [...state.garments, action.garment],
      };
      break;
    case REMOVE_GARMENT_FROM_CART:
      state.garments.splice(action.index, 1);
      return {
        ...state,
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
          agrees_to_terms: false,
        },
        storeInfo: {},
        shipToStore: true,
        notes: '',
      };
      break;
    case UPDATE_GARMENT_IN_CART:
      const {garments} = state;

      function updateObjectInArray(array, action, item_name) {
        return array.map((item, index) => {
          if (index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item;
          }
          // Otherwise, this is the one we want - return an updated value
          return {
            ...item,
            ...action[item_name],
          };
        });
      }

      const newGarments = updateObjectInArray(garments, action, 'garment');

      // function removeItem(array, action) {
      //   return [
      //     ...array.slice(0, action.index),
      //     ...array.slice(action.index + 1)
      //   ];
      // }
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
