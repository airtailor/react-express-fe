import { SET_CURRENT_ORDER } from '../utils/constants';

const initialState = {};

const currentOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ORDER:
      return action.order;
    default:
      return state;
  }
};

export default currentOrderReducer;
