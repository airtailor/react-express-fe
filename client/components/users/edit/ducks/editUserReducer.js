import { SET_EDIT_USER, UPDATE_EDIT_USER } from './constants';

const initialState = {
  name: '',
  store_id: null,
};

const ediUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_USER:
      return action.user;
      break;
    case UPDATE_EDIT_USER:
      return { ...action.user, ...state };
    default:
      return state;
  }
};

export default ediUser;
