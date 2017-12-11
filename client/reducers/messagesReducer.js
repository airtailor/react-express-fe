import { SET_MESSAGES } from '../utils/constants';

const initialState = [];
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};

export default messagesReducer;
