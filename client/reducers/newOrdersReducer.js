import { SET_NEW_ORDERS } from '../utils/constants';

const initialState = {
  unassigned: [],
  welcome_kits: []
};

const newOrdersReducer = (state = initialState, action) => {
  switch(action.type){
    case  SET_NEW_ORDERS:
      return action.newOrders
    default: return state;
  }
}

export default newOrdersReducer;
