import { USER_SIGN_IN } from '../utils/constants';

const currentUserReducer = (state = null, action) => {
  switch(action.type){
    case USER_SIGN_IN:
      return action.payload.data.body;
    default:
      return state;
  }
}

export default currentUserReducer;
