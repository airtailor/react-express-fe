import { SET_USER_ROLE, RESET_USER_ROLE } from '../utils/constants';

const initialState = {
  retailer: false,
  customer: false,
  tailor: false,
  admin: false
};

const userRoleReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER_ROLE:
      return {...state, ...action.roles};
    case RESET_USER_ROLE:
      return initialState;
    default:
      return state;
  }
}

export default userRoleReducer;
