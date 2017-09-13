import {SET_GROWLER, REMOVE_GROWLER} from '../utils/constants';

const initialState = {};

const growlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROWLER:
      return action.growl;
      break;
    case REMOVE_GROWLER:
      return initialState;
      break;
    default:
      return state;
  }
};

export default growlerReducer;
