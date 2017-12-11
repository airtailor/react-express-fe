import { SET_TAILOR_LIST } from '../utils/constants';

const initialState = [];
const tailorListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAILOR_LIST:
      return action.tailors;
    default:
      return state;
  }
};

export default tailorListReducer;
