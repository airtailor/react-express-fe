import { SET_COMPANY_LIST } from '../utils/constants';

const initialState = [];
const tailorListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY_LIST:
      return action.companies;
    default:
      return state;
  }
};

export default tailorListReducer;
