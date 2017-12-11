import { SET_CONVERSATIONS } from '../utils/constants';

const initialState = [];
const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONVERSATIONS:
      return action.conversations;
    default:
      return state;
  }
};

export default conversationsReducer;
