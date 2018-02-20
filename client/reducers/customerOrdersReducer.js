import { SET_CUSTOMER_ORDERS } from '../utils/constants';

const initialState = [];

const customerOrdersReducer = (state = initialState, action) => {
  switch(action.type){
    case  SET_CUSTOMER_ORDERS:
      return action.orders
    default: return state;
  }
}

export default customerOrdersReducer;
