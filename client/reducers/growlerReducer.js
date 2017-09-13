import {SET_GROWLER} from '../utils/constants';

const initialState = {};

const growlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROWLER:
      return {
        action.growl
      };
    default:
      return state;
  }
};

export default growlerReducer;
