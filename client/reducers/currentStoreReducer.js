import { SET_CURRENT_STORE } from '../utils/constants';

const initialState = {
  store: {}
}

const currentStoreReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_CURRENT_STORE:
      return action.store;
    default: return state;
  }
}

export default currentStoreReducer;
