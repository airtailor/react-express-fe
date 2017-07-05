import { SET_CURRENT_USER } from '../utils/constants';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
}

const currentUserReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    default: return state;
  }
}

export default currentUserReducer;
