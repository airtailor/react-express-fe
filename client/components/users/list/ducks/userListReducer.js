import { SET_USER_LIST } from './constants';

const initialState = {};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LIST:
      return { ...state, userList: action.users };
    default:
      return { ...state };
  }
};

export default editStoreFormReducer;
