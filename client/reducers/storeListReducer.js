import { SET_STORE_LIST } from '../utils/constants';

const initialState = [];
const storeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE_LIST:
      return action.storeList;
    default:
      return state;
  }
};

export default storeListReducer;
