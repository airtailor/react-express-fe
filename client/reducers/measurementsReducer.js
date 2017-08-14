import { SET_CUSTOMER_MEASUREMENTS } from '../utils/constants';
const initialState = {}

const measurementsReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_CUSTOMER_MEASUREMENTS:
      return action.measurements;
    default: return state;
  }
}

export default measurementsReducer;
