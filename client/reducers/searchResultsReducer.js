import { SET_SEARCH_RESULTS } from '../utils/constants';

const initialState = [];

const searchResultsReducer = (state = initialState, action) => {
  switch(action.type){
    case  SET_SEARCH_RESULTS:
      return action.orders
    default: return state;
  }
}

export default searchResultsReducer;
