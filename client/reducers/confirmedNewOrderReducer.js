import { SET_CONFIRMED_NEW_ORDER } from '../utils/constants';

const initialState = {};
const confirmedNewOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIRMED_NEW_ORDER:
      return action.order;
    default:
      return state;
  }
};

export default confirmedNewOrderReducer;
