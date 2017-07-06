import { SET_STORE_ORDERS } from '../utils/constants';

const initialState = {
  orders: []
}

const storeOrdersReducer = (state = initialState, action) => {
  switch(action.type){
    case  SET_STORE_ORDERS:
      return action.orders
    default: return state;
  }
}

export default storeOrdersReducer;
