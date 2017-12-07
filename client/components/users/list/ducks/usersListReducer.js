import { SET_USER_LIST } from './constants';

const initialState = {};

const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LIST:
      return action.users;
    default:
      return { ...state };
  }
};

export default usersListReducer;
