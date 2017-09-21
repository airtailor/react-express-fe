import {SET_ARCHIVED_ORDERS} from '../utils/constants';

const initialState = [];

const archivedOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARCHIVED_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

export default archivedOrdersReducer;
