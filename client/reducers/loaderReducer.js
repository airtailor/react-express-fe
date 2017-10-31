import {RETAILER_TO_TAILOR, TAILOR_TO_RETAILER, CUSTOMER_TO_TAILOR, TAILOR_TO_CUSTOMER} from '../utils/constants';

const initialState = {};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {loader: true};
      break;
    case REMOVE_LOADER:
      return initialState;
      break;
    default:
      return state;
  }
};

export default loaderReducer;
