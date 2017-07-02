import { USER_SIGN_UP_REQUEST } from '../actions/index';

const currentUserReducer = (state = null, action) => {
  switch(action.type){
    case USER_SIGN_UP_REQUEST:
      return action.payload.data;
    default:
      return state;
  }
}

export default currentUserReducer;
