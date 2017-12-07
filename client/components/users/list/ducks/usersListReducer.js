import { SET_USERS_LIST } from './constants';

const initialState = [];

const usersListReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default usersListReducer;
