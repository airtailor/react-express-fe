import { SET_CURRENT_CUSTOMER } from "../utils/constants";

const initialState = {};

const currentCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CUSTOMER:
      return action.customer;
    default:
      return state;
  }
};

export default currentCustomerReducer;
