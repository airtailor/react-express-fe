import {SET_GROWLER, REMOVE_GROWLER} from '../utils/constants';

const initialState = {
  kind: 'success',
  message: 'Order placed successfully!',
};

const growlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROWLER:
      return action.growl;
      break;
    case REMOVE_GROWLER:
      return {};
      break;
    default:
      return state;
  }
};

export default growlerReducer;
