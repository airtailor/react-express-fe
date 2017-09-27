import {SET_LOADER, REMOVE_LOADER} from '../utils/constants';

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
