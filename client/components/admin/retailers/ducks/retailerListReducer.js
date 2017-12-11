import { SET_RETAILER_LIST } from './constants';

const initialState = [];

const retailerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RETAILER_LIST:
      return action.retailers;
    default:
      return state;
  }
};

export default retailerListReducer;
